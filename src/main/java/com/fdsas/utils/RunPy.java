package com.fdsas.utils;

import java.io.BufferedReader;
import java.io.InputStreamReader;

/**
 * @author LuoXuanwei
 * @date 2023/5/22 23:42
 */
public class RunPy {
    /**
     * java调用python结果，并获得python的返回值
     */
    public String jscienceTest(String[] arguments) {
        String line = null;
        try {
            ProcessBuilder builder = new ProcessBuilder(arguments);
            Process process = builder.start();
            //获取字符输入流对象
            BufferedReader in = new BufferedReader(new InputStreamReader(process.getInputStream(), "utf-8"));
            //获取错误信息的字符输入流对象
            BufferedReader error = new BufferedReader(new InputStreamReader(process.getErrorStream(), "utf-8"));
            //记录输出结果
            line = in.readLine();
            //记录错误信息
            while ((line = error.readLine()) != null) {
                System.out.println(line);
            }
            in.close();
            process.waitFor();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return line;
    }
}
