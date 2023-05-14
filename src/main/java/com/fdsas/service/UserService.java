package com.fdsas.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.fdsas.pojo.User;

public interface UserService  extends IService<User> {
    /**
     * 注册用户
     * @return  注册结果
     */
    boolean registerUser(User user);

    /**
     * 用户登录
     * @param user
     * @return  登陆结果
     */
    boolean loginUser(User user);
}