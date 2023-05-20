package com.fdsas.controller;

import com.fdsas.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

/**
 * @author LuoXuanwei
 * @date 2023/5/20 21:15
 */
@Controller
public class FileController {
    @Autowired
    private FileService fileService;
}

