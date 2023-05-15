package com.fdsas.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fdsas.pojo.User;
import com.fdsas.service.UserService;
import com.fdsas.utils.InfoResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@Controller
public class UserController {
    @Autowired
    private UserService userService;

    /**
     * 登陆页面(保存referer,方便登陆完后返回某个页面)
     */
    @RequestMapping("/loginOrRegister")
    public String loginOrRegister(@RequestHeader(value = "referer", required = false, defaultValue = "/") String referer
            , HttpSession httpSession) {
        httpSession.setAttribute("referer", referer);
        return "island/loginOrRegister";
    }

    /**
     * 退出登录，即删除客户端浏览器上的session
     */
    @ResponseBody
    @RequestMapping("/exitServlet")
    public void Exit(HttpSession session) {
        session.invalidate();
    }

    /**
     * 通过账号查询用户信息（不包含密码，盐和uid）
     */
    @ResponseBody
    @RequestMapping("/getUserInfo")
    public void GetUserInfo(HttpSession session, HttpServletResponse response) throws IOException {
        /**
         * 参数获取
         */
        String uid = String.valueOf(session.getAttribute("uid"));

        User user = userService.getUserAllInfoByUidOrTel(uid);

        //将info对象序列化为json并将数据写回客户端
        ObjectMapper mapper = new ObjectMapper();
        String json = mapper.writeValueAsString(user);
        //设置content-type防止乱码问题
        response.setContentType("application/json;charset=utf-8");
        response.getWriter().write(json);
    }

    /**
     * 从session里获取userId，如果没有则返回0，有则返回用户名称.用作检测是否已登录供许多功能使用
     */
    @ResponseBody
    @RequestMapping("/isLogin")
    public void isLogin(HttpSession session, HttpServletResponse response) throws IOException {
        String uid = (String) session.getAttribute("uid");
        /**
         * 将user序列化为json返回给客户端
         */
        ObjectMapper mapper = new ObjectMapper();
        //检测是否为null，如果是null则处于未登录状态，返回个us,其中userid值为0
        String json;
        User user = new User();
        if (uid == null) {
            json = mapper.writeValueAsString(user);
        } else {
            user = userService.getUserAllInfoByUidOrTel(uid);
            json = mapper.writeValueAsString(user);
        }
        //设置content-type防止乱码问题
        response.setContentType("application/json;charset=utf-8");
        response.getWriter().write(json);
    }

    /**
     * 登录
     */
    @ResponseBody
    @RequestMapping("/loginServlet")
    public void Login(@RequestParam("login_uid_or_tel") String uidOrTel, @RequestParam("login_password") String password,
                      HttpSession session, HttpServletResponse response) throws IOException {
        String uid = userService.loginUser(uidOrTel, password);
        if (!uid.equals("0")) {
            //利用会话技术存储个人信息，以便用户访问其个人信息
            session.setAttribute("userId", uid);
            String referer = (String) session.getAttribute("referer");
            String url = "";
            if (!referer.equals("http://localhost:8080/intangibleCulturalHeritage/")) {
                url = referer.split("/")[referer.split("/").length - 1];
                session.removeAttribute("referer");
            }
            new InfoResponse(response, true, url);
        } else {
            new InfoResponse(response, false, "账号或密码有误！");
        }
    }

    /**
     * 注册
     */
    @ResponseBody
    @RequestMapping("/registUserServlet")
    public void RegistUser(@RequestParam("register_telephone") String telephone, @RequestParam("register_password") String password,
                           HttpServletResponse response) throws IOException {
        User user = new User();
        user.setPassword(password);
        user.setTelephone(telephone);

        /**
         * 首先检测用户电话号码是否已经存在
         * 若存在返回false给前端表示注册失败
         * 若不存在则注册用户并返回true给前端表示注册成功
         */
        boolean exitUser = userService.isExistUserByTel(telephone);
        if (exitUser) {
            new InfoResponse(response, false, "用户已存在！");
        } else {
            userService.registerUser(user);
            new InfoResponse(response, true, "注册成功！");
        }
    }

    /**
     * 修改密码
     */
    @ResponseBody
    @RequestMapping("/updatePassword")
    public void UpdatePassword(String oldPassword, String newPassword, HttpSession session, HttpServletResponse response) throws IOException {
        /**
         * 获取参数
         */
        String uid = String.valueOf(session.getAttribute("uid"));

        boolean isSuccessful = userService.checkPasswordAndUpdate(uid, oldPassword, newPassword);

        if (isSuccessful) {
            new InfoResponse(response, isSuccessful, "修改成功");
        } else {
            new InfoResponse(response, isSuccessful, "修改失败，旧密码不正确");
        }
    }

    /**
     * 修改个人信息
     */
    @ResponseBody
    @RequestMapping("/updateUserInfos")
    public void UpdateUserInfo(String userName, String telephone, String email, HttpServletResponse response,
                               HttpSession session) throws IOException {
        /**
         * 获取参数
         */
        User user = new User();
        user.setUid(String.valueOf(session.getAttribute("uid")));
        user.setUserName(userName);
        user.setTelephone(telephone);
        user.setEmail(email);

        boolean result = userService.updateUserInfoByUser(user);

        if (result) {
            new InfoResponse(response, result, "修改成功");
        } else {
            new InfoResponse(response, result, "修改失败，电话号码已被他人使用!");
        }
    }
}
