package com.fdsas.utils;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fdsas.pojo.InfoResult;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 返回一个对象结果给前端
 */
public class InfoResponse {

    public InfoResponse() {
    }

    public InfoResponse(HttpServletResponse resp, boolean flag, String errorMsg) throws IOException {
        InfoResult infoResult = new InfoResult();
        infoResult.setFlag(flag);
        infoResult.setErrorMsg(errorMsg);
        //将info对象序列化为json并将数据写回客户端
        ObjectMapper mapper = new ObjectMapper();
        String json = mapper.writeValueAsString(infoResult);
        //设置content-type防止乱码问题
        resp.setContentType("application/json;charset=utf-8");
        resp.getWriter().write(json);
    }
}