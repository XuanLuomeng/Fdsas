package com.fdsas.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.fdsas.mapper.FileMapper;
import com.fdsas.pojo.File;
import com.fdsas.service.FileService;
import org.springframework.stereotype.Service;

@Service
public class FileServiceImpl  extends ServiceImpl<FileMapper, File> implements FileService {
}
