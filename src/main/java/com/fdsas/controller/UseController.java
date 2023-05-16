package com.fdsas.controller;

import com.fdsas.pojo.User;
import com.fdsas.service.UseService;
import com.fdsas.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@Controller
public class UseController {
    @Autowired
    private UseService useService;

    @Autowired
    private UserService userService;

    @GetMapping("/getUserUseTime")
    public void getUserUseTime(HttpSession session, HttpServletResponse response) throws IOException {
        //从session中获取用户账号，然后通过查询获取用户编号再到数据库use表中查询用户的功能使用次数
        String uid = String.valueOf(session.getAttribute("uid"));
        User user = userService.getUserAllInfoByUidOrTel(uid);
        Integer time = useService.getTimeByUserId(user.getId());

        //设置content-type防止乱码问题
        response.setContentType("application/json;charset=utf-8");
        response.getWriter().write(time);
    }
}
