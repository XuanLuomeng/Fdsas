package com.fdsas.service.impl;

import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
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
    public String loginUser(String uidOrTel, String password) {
        //获取加密盐,若查询出加密盐不存在,则表示用户不存在返回false登陆失败
        String salt = userMapper.selectUserSaltByUidOrTel(uidOrTel);
        if (salt == null) {
            return "0";
        }
        //获取加密后的密码
        EncryptByMd5 md5 = new EncryptByMd5(password, salt);
        String uid = userMapper.selectIdByUidOrTelAndPassword(uidOrTel, md5.getSimpleHash());

        return uid == null ? uid : "0";
    }

    @Override
    public User getUserAllInfoByUidOrTel(String uid) {
        User user = userMapper.selectUserByUidOrTel(uid);
        return user;
    }

    @Override
    public boolean isExistUserByTel(String telephone) {
        User user = userMapper.selectUserByUidOrTel(telephone);
        return user.getUid() == null ? false : true;
    }

    @Override
    public boolean checkPasswordAndUpdate(String uid, String oldPassword, String newPassword) {
        /**
         * 先通过用户账号查询获取盐，然后与旧密码进行加密，再通过加密后的密码和用户账号查询结果，结果不为空则可以进行密码修改
         */
        String salt = userMapper.selectUserSaltByUidOrTel(uid);
        EncryptByMd5 md5 = new EncryptByMd5(oldPassword, salt);
        String sign = userMapper.selectIdByUidOrTelAndPassword(uid, md5.getSimpleHash());
        if (sign == null) {
            return false;
        }

        //设置新密码和新盐
        EncryptByMd5 newMd5 = new EncryptByMd5(newPassword);
        LambdaUpdateWrapper<User> userUpdateWrapper = new LambdaUpdateWrapper<>();
        userUpdateWrapper.set(User::getPassword, newMd5.getSimpleHash()).
                set(User::getSalt, newMd5.getSalt()).
                eq(User::getUid, uid);

        int result = userMapper.update(null, userUpdateWrapper);
        return result == 1 ? true : false;
    }

    @Override
    public boolean updateUserInfoByUser(User user) {
        /**
         * 1、通过用户电话号码查询用户信息
         * 2、若结果用户账号与目前正在使用的账号一致，直接可进行修改；否则，二次检验结果用户账号，若不为null或""则返回修改失败
         */
        String uid = userMapper.selectUserByUidOrTel(user.getTelephone()).getUid();
        if(!uid.equals(user.getUid())) {
            if (uid != null || !uid.equals("")) {
                return false;
            }
        }
        LambdaUpdateWrapper<User> userUpdateWrapper = new LambdaUpdateWrapper<>();
        userUpdateWrapper.set(User::getUserName, user.getUserName()).
                set(User::getTelephone, user.getTelephone()).
                set(User::getEmail, user.getEmail());
        return true;
    }
}