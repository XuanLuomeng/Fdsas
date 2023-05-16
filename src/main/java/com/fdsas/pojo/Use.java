package com.fdsas.pojo;

import com.baomidou.mybatisplus.annotation.TableId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
/**
 * 网站功能使用情况
 */
public class Use {
    /**
     * id       用户编号
     * time     用户使用功能次数
     */
    @TableId(value = "id")
    private Long id;
    private Integer time;
}
