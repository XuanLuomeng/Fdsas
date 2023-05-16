package com.fdsas.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.fdsas.pojo.Use;

public interface UseService extends IService<Use> {
    /**
     * 通过用户编号添加使用次数
     *
     * @param use
     * @return
     */
    boolean addTimeByUserId(Use use);

    /**
     * 通过用户编号查询使用次数情况
     *
     * @param id
     * @return
     */
    Integer getTimeByUserId(Long id);
}
