package com.fdsas.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.fdsas.pojo.User;

public interface UserService extends IService<User> {
    /**
     * 注册用户
     *
     * @return 注册结果
     */
    boolean registerUser(User user);

    /**
     * 用户登录
     *
     * @param uidOrTel
     * @param password
     * @return
     */
    String loginUser(String uidOrTel, String password);

    /**
     * 通过用户账号或者电话号码获取用户信息（不包含加密盐和密码）
     *
     * @param uidOrTel
     * @return
     */
    User getUserAllInfoByUidOrTel(String uidOrTel);

    /**
     * 确认电话号码是否已存在
     *
     * @param telephone
     * @return
     */
    boolean isExistUserByTel(String telephone);

    /**
     * 核对旧密码以及修改密码
     *
     * @param uid
     * @param oldPassword
     * @param newPassword
     * @return
     */
    boolean checkPasswordAndUpdate(String uid, String oldPassword, String newPassword);

    boolean updateUserInfoByUser(User user);
}