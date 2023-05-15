package com.fdsas.pojo;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableLogic;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
/**
 * 用户信息
 */
public class User {
    /**
     * id           编号
     * uid          账号
     * salt         加密盐
     * password     密码(此为加密后的盐)
     * userName     用户名
     * telephone    电话号码
     * email        邮箱
     * vip          会员与否
     * isDeleted    逻辑删除
     */
    @TableId(value = "id")
    private Long id;
    private String uid;
    private String salt;
    private String password;
    private String userName;
    private String telephone;
    private String email;
    private int vip;
    @TableLogic
    private Integer isDeleted;
}
