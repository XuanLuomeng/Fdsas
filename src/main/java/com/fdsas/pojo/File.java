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
public class File {
    /**
     * id           用户编号
     * fileName     文件名
     * path         文件目录路径
     * date         生成结果的日期
     */
    @TableId(value = "id")
    private Long id;
    private String fileName;
    private String path;
    private String date;
}
