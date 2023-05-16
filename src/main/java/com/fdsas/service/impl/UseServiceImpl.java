package com.fdsas.service.impl;

import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.fdsas.mapper.UseMapper;
import com.fdsas.pojo.Use;
import com.fdsas.service.UseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UseServiceImpl extends ServiceImpl<UseMapper, Use> implements UseService {
    @Autowired
    private UseMapper useMapper;

    @Override
    public boolean addTimeByUserId(Use use) {
        LambdaUpdateWrapper<Use> wrapper = new LambdaUpdateWrapper<>();
        wrapper.set(Use::getTime, use.getTime()).eq(Use::getId, use.getId());
        int update = useMapper.update(null, wrapper);
        return update != 0 ? true : false;
    }

    @Override
    public Integer getTimeByUserId(Long id) {
        Use use = useMapper.selectById(id);
        return use.getTime();
    }
}
