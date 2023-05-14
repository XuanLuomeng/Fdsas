package com.fdsas.utils;

public class RandomAccountUtil {
    private static final String DEFAULT_DIGITS = "0";
    private static final String FIRST_DEFAULT_DIGITS = "1";

    /**
     * @param target 目标数字
     * @param length 需要补充到的位数, 补充默认数字[0], 第一位默认补充[1]
     * @return 补充后的结果
     */
    public static String makeUpNewData(String target, int length) {
        return makeUpNewData(target, length, DEFAULT_DIGITS);
    }

    /**
     * @param target 目标数字
     * @param length 需要补充到的位数
     * @param add    需要补充的数字, 补充默认数字[0], 第一位默认补充[1]
     * @return 补充后的结果
     */
    public static String makeUpNewData(String target, int length, String add) {
        if (target.startsWith("-")) {
            target.replace("-", "");
        }
        if (target.length() >= length) {
            return target.substring(0, length);
        }
        StringBuffer sb = new StringBuffer(FIRST_DEFAULT_DIGITS);
        for (int i = 0; i < length - (1 + target.length()); i++) {
            sb.append(add);
        }
        return sb.append(target).toString();
    }

    /**
     * 生产一个随机的指定位数的字符串数字
     *
     * @param length
     * @return
     */
    public static String randomDigitNumber(int length) {
        int start = Integer.parseInt(makeUpNewData("", length));
        int end = Integer.parseInt(makeUpNewData("", length + 1)) - start;
        return (int) (Math.random() * end) + start + "";
    }

    /**
     * 生成10位随机数 numberNine 与 numberOne字符拼接后转换成Long型
     *
     * @param: nine  不能大于9
     * @param: one   不能大于1
     * @return: java.lang.Long
     */
    public static Long randomNumberIsTen(){
        String num1 = RandomAccountUtil.randomDigitNumber(1);
        String num2 = RandomAccountUtil.randomDigitNumber(9);
        String num3 = num1 + num2;
        return Long.parseLong(num3);
    }
}
