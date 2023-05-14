package com.fdsas;

import com.fdsas.mapper.UserMapper;
import com.fdsas.pojo.User;
import com.fdsas.utils.EncryptByMd5;
import com.fdsas.utils.RandomAccountUtil;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class UserTest {
    @Autowired
    private UserMapper userMapper;

    @Test
    public void AnyTest() {
        if (userMapper.selectUserByUidOrTel("") == null) {
            System.out.println(1);
        }
    }

    @Test
    public void insertUser() {
        User user = new User();
        Long aLong = RandomAccountUtil.randomNumberIsTen();
        user.setUid(aLong.toString());
        user.setUserName("用户" + aLong);
        user.setTelephone("15112911236");
        EncryptByMd5 md5 = new EncryptByMd5("1234567");
        user.setPassword(md5.getSimpleHash());
        user.setSalt(md5.getSalt());
        userMapper.insert(user);
    }

    @Test
    public void selectUserByUid() {
        String str = "";
        userMapper.selectUserByUidOrTel(str);
    }

    @Test
    public void RandomUid() {
        Long aLong = RandomAccountUtil.randomNumberIsTen();
        System.out.println((aLong+"").length());
    }
}
