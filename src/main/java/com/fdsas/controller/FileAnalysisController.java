package com.fdsas.controller;

import com.fdsas.pojo.UserFile;
import com.fdsas.service.UserFileService;
import com.fdsas.utils.RunPy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.ClassUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.util.Map;

/**
 * @author LuoXuanwei
 * @date 2023/5/22 12:13
 */
@Controller
public class FileAnalysisController {

    @Autowired
    private UserFileService userFileService;

    @ResponseBody
    @GetMapping("/dataAnalysis/{fid}")
    public void dataAnalysis(@PathVariable("fid") Long fid,
                             @RequestBody Map<String, Object> map,
                             HttpServletResponse response,
                             HttpSession session) throws IOException {
        UserFile fileByFid = userFileService.getUserFileByFid(fid);
        // 获取python文件所在目录地址
        String windowsPath = ClassUtils.getDefaultClassLoader().getResource("").getPath().substring(1) + "py/";
        String pythonPath = windowsPath + map.get(0) + ".py";
        //获取ServletContext对象
        ServletContext servletContext = session.getServletContext();
        //获取当前工程的真实路径
        String savePath = servletContext.getRealPath("AlgorithmResultLibrary/");
        //设置执行文件路径
        String filePath = fileByFid.getPath() + File.separator + fileByFid.getFileNewName();
        //优先存放map以外的参数
        String[] arguments = new String[2 + map.size()];
        arguments[0] = "python";
        arguments[1] = pythonPath;
        arguments[2] = savePath;
        arguments[3] = filePath;
        //存放参数
        for (int i = 1; i < map.size(); i++) {
            arguments[i + 3] = (String) map.get(i);
        }
        RunPy runPy = new RunPy();
        String resultPath = runPy.jscienceTest(arguments);
        resultPath = "." + resultPath.split("static")[1];

        //设置content-type防止乱码问题
        response.setContentType("application/json;charset=utf-8");
        response.getWriter().write(resultPath);
    }
}
