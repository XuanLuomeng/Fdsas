package com.fdsas.utils;

import org.apache.shiro.crypto.hash.SimpleHash;

import java.util.UUID;

/**
 * 密码加密工具
 */
public class EncryptByMd5 {
    /**
     * password     原密码
     * salt         盐
     * simpleHash   加密后的密码
     */
    private String password;
    private String salt;
    private SimpleHash simpleHash;

    public EncryptByMd5() {
    }

    public EncryptByMd5(String password) {
        this.password = password;
        this.salt = UUID.randomUUID().toString();
        this.simpleHash = new SimpleHash("MD5",password,salt,5);
    }

    public EncryptByMd5(String password, String salt) {
        this.password = password;
        this.salt = salt;
        this.simpleHash = new SimpleHash("MD5",password,salt,5);
    }

    public String getSalt(){
        return salt;
    }

    public String getSimpleHash(){
        return simpleHash.toString();
    }
}
