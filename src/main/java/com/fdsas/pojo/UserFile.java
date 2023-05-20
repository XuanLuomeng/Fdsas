package com.fdsas.pojo;

import com.baomidou.mybatisplus.annotation.TableId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
/**
 * 生成文件结果信息
 */
public class UserFile {
    /**
     * fid          文件编号（方便定位文件对文件进行其他操作）
     * id           用户编号
     * fileName     文件名
     * fileNewName  新文件名（防止服务端存储文件因文件名相同而被覆盖）
     * path         文件目录路径
     * date         生成结果的日期
     */
    @TableId(value = "id")
    private Long fid;
    private Long id;
    private String fileName;
    private String fileNewName;
    private String path;
    private String date;
}
