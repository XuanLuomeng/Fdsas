package com.fdsas;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.fdsas.mapper.UserFileMapper;
import com.fdsas.pojo.UserFile;
import com.fdsas.service.UserFileService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * @author LuoXuanwei
 * @date 2023/5/22 11:36
 */
@SpringBootTest
public class UserFileTest {
    @Autowired
    private UserFileService userFileService;

    @Autowired
    private UserFileMapper userFileMapper;

    @Test
    public void showPage(){
        Page<UserFile> page = new Page<>();
        userFileMapper.selectPage(page, null);
    }
}
