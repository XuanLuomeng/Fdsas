package com.fdsas.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.fdsas.mapper.UserFileMapper;
import com.fdsas.pojo.UserFile;
import com.fdsas.service.UserFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserFileServiceImpl extends ServiceImpl<UserFileMapper, UserFile> implements UserFileService {
    @Autowired
    private UserFileMapper userFileMapper;

    @Override
    public int uploadFile(UserFile userFile) {
        return userFileMapper.insert(userFile);
    }

    @Override
    public List<UserFile> getUserFileListByUid(Long id) {
        LambdaQueryWrapper<UserFile> wrapper = new LambdaQueryWrapper<>();
        wrapper.eq(UserFile::getId, id);
        return userFileMapper.selectList(wrapper);
    }

    @Override
    public UserFile getUserFileByFid(Long fid) {
        return userFileMapper.selectById(fid);
    }

    @Override
    public int deleteUserFileByFid(Long fid) {
        LambdaQueryWrapper<UserFile> wrapper = new LambdaQueryWrapper<>();
        wrapper.eq(UserFile::getFid, fid);
        return userFileMapper.delete(wrapper);
    }
}
