package com.fdsas.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fdsas.pojo.User;
import com.fdsas.pojo.UserFile;
import com.fdsas.service.UserFileService;
import com.fdsas.service.UserService;
import com.fdsas.utils.InfoResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.*;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;

/**
 * @author LuoXuanwei
 * @date 2023/5/20 21:15
 */
@Controller
public class UserFileController {
    @Autowired
    private UserFileService userFileService;

    @Autowired
    private UserService userService;

    @ResponseBody
    @PostMapping("/uploadFile")
    public void uploadFile(MultipartFile uploadFile, HttpSession session, HttpServletResponse response) throws IOException {
        /**
         * 处理文件上传
         */
        String filename = "";
        //新文件名是用于方便用户文件存储在服务端时不被因新文件名相同而覆盖
        String fileNewName = "";
        String filePath = "";
        if (uploadFile != null) {
            //获取上传的文件的文件名
            filename = uploadFile.getOriginalFilename();
            //获取上传的文件名的后缀
            String hzName = filename.substring(filename.lastIndexOf("."));
            //获取uuid
            String uuid = UUID.randomUUID().toString();
            //拼接一个新的文件名
            fileNewName = uuid + hzName;
            //获取ServletContext对象
            ServletContext servletContext = session.getServletContext();
            //获取当前工程的真实路径
            filePath = servletContext.getRealPath("userFile/");
            //创建photoPath所对应的File对象
            File file = new File(filePath);
            //判断file所对应目录是否存在
            if (!file.exists()) {
                file.mkdir();
            }
            String finalPath = filePath + File.separator + fileNewName;
            //上传文件
            uploadFile.transferTo(new File(finalPath));
        }
        /**
         * 获取参数，并获取当前时间
         */
        Date pushdate = new Date();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
        /**
         * 获取当前用户uid信息,并用该uid去上传文章
         * 设置文章相关信息
         */
        User user = userService.getUserAllInfoByUidOrTel((String) session.getAttribute("uid"));
        UserFile userFile = new UserFile();
        userFile.setId(user.getId());
        userFile.setFileName(filename);
        userFile.setFileNewName(fileNewName);
        userFile.setPath(filePath);
        userFile.setDate(simpleDateFormat.format(pushdate));

        /**
         * 保存至数据库
         */
        int result = userFileService.uploadFile(userFile);
        if (result == 1) {
            new InfoResponse(response, true, "上传成功");
        } else {
            new InfoResponse(response, false, "上传失败");
        }
    }

    @ResponseBody
    @GetMapping("/userFileList")
    public void userFileList(HttpSession session, HttpServletResponse response) throws IOException {
        User user = userService.getUserAllInfoByUidOrTel((String) session.getAttribute("uid"));
        List<UserFile> fileList = userFileService.getUserFileListByUid(user.getId());
        //批量修改用户id信息防止用户id泄露
        fileList.forEach(item -> item.setId(0L));

        /**
         * 将fileList返回给前端
         */
        ObjectMapper mapper = new ObjectMapper();
        String json = mapper.writeValueAsString(fileList);
        //设置content-type防止乱码问题
        response.setContentType("application/json;charset=utf-8");
        response.getWriter().write(json);
    }

    @ResponseBody
    @GetMapping("/downUserFile/{fid}")
    public void downUserFile(@PathVariable("fid") Long fid, HttpServletResponse response, boolean isOnLine) throws IOException {
        UserFile userFile = userFileService.getUserFileByFid(fid);
        String filePath = userFile.getPath() + File.separator + userFile.getFileNewName();
        File f = new File(filePath);
        if (!f.exists()) {
            response.sendError(404, "File not found!");
            return;
        }
        BufferedInputStream br = new BufferedInputStream(new FileInputStream(f));
        byte[] buf = new byte[1024];
        int len = 0;
        // 非常重要
        response.reset();
        // 在线打开方式
        if (isOnLine) {
            URL u = new URL("file:///" + filePath);
            response.setContentType(u.openConnection().getContentType());
            response.setHeader("Content-Disposition", "inline; filename=" + f.getName());
            // 文件名应该编码成UTF-8
        } else { // 纯下载方式
            response.setContentType("application/x-msdownload");
            response.setHeader("Content-Disposition", "attachment; filename=" + f.getName());
        }
        OutputStream out = response.getOutputStream();
        while ((len = br.read(buf)) > 0) {
            out.write(buf, 0, len);
        }
        br.close();
        out.close();
    }

    @ResponseBody
    @GetMapping("/removeUserFile/{fid}")
    public void removeUserFile(@PathVariable("id") Long fid, HttpServletResponse response) throws IOException {
        int result = userFileService.deleteUserFileByFid(fid);
        //返回信息
        if (result == 1) {
            new InfoResponse(response, true, "上传成功");
        } else {
            new InfoResponse(response, false, "上传失败");
        }
    }
}