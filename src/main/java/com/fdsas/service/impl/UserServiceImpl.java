package com.fdsas.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.fdsas.mapper.UserMapper;
import com.fdsas.pojo.User;
import com.fdsas.service.UserService;
import com.fdsas.utils.EncryptByMd5;
import com.fdsas.utils.RandomAccountUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {
    @Autowired
    private UserMapper userMapper;

    @Override
    public boolean registerUser(User user) {
        //随机账号
        Long aLong = RandomAccountUtil.randomNumberIsTen();
        User users = null;
        while (users == null) {
            users = userMapper.selectUserByUidOrTel(aLong + "");
            aLong = RandomAccountUtil.randomNumberIsTen();
        }
        //密码加密
        EncryptByMd5 md5 = new EncryptByMd5(user.getPassword());
        //pojo装载
        user.setUid(aLong + "");
        user.setUserName("用户" + aLong);
        user.setPassword(md5.getSimpleHash());
        user.setSalt(md5.getSalt());
        //添加用户
        int insert = userMapper.insert(user);
        //返回数据库操作结果
        return insert == 0 ? false : true;
    }

    @Override
    public boolean loginUser(User user) {
        //获取加密盐,若查询出加密盐不存在,则表示用户不存在返回false登陆失败
        user.setSalt(userMapper.selectUserSaltByUidOrTel(user.getUid()));
        if (user.getSalt() == null) {
            return false;
        }
        //获取加密后的密码
        EncryptByMd5 md5 = new EncryptByMd5(user.getPassword(), user.getSalt());
        return false;
    }
}