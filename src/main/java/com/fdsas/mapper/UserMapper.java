package com.fdsas.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.fdsas.pojo.User;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserMapper extends BaseMapper<User> {
    /**
     * 通过账号uid或者电话号码tel查询用户信息（不包含密码和加密盐）
     * @param uidOrTel
     */
    User selectUserByUidOrTel(@Param("uidOrTel") String uidOrTel);

    /**
     * 通过账号uid或者电话号码tel查询用户加密盐
     * @param uidOrTel
     * @return
     */
    String selectUserSaltByUidOrTel(@Param("uidOrTel") String uidOrTel);
}