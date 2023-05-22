package com.fdsas.service;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.IService;
import com.fdsas.pojo.UserFile;

public interface UserFileService extends IService<UserFile> {
    /**
     * 上传文件信息到数据库
     *
     * @param userFile
     * @return
     */
    int uploadFile(UserFile userFile);

    /**
     * 通过用户编号获取用户上传文件列表(page指定页面)
     *
     * @param id
     * @return
     */
    Page<UserFile> getUserFileListByUid(Long id, int page);

    /**
     * 通过文件编号获取用户文件信息
     *
     * @param fid
     * @return
     */
    UserFile getUserFileByFid(Long fid);

    /**
     * 通过文件编号来删除文件
     *
     * @param fid
     * @return
     */
    int deleteUserFileByFid(Long fid);
}
