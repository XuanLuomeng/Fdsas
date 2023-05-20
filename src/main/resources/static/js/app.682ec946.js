(function () {
    "use strict";
    var t = {
        9978: function (t, s, e) {
            var a = e(144), i = function () {
                var t = this, s = t._self._c;
                return s("div", [s("Header", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.$route.meta.show,
                        expression: "$route.meta.show"
                    }]
                }), s("router-view")], 1)
            }, r = [], n = function () {
                var t = this, s = t._self._c;
                return s("header", [s("div", {staticClass: "header"}, [s("div", {staticClass: "logo"}, [s("h1", [s("router-link", {attrs: {to: "/home"}}, [t._v("融通数据")])], 1)])]), s("div", {staticClass: "head"}, [s("ul", [s("li", [s("router-link", {attrs: {to: "/home"}}, [t._v("首页")])], 1), s("li", {staticClass: "shop"}, [s("router-link", {attrs: {to: "/analyse"}}, [t._v("数据处理")])], 1), s("li", [s("router-link", {attrs: {to: "/resource"}}, [t._v("资源中心")])], 1), s("li", {staticClass: "platform"}, [s("router-link", {attrs: {to: "/guide"}}, [t._v("帮助与支持")]), s("div", {staticClass: "helpnav"}, [s("ul", [s("li", [s("router-link", {attrs: {to: "/guide"}}, [t._v("帮助手册")])], 1), s("li", [s("router-link", {attrs: {to: "/resource"}}, [t._v("案例库")])], 1)])])], 1), s("li", [s("router-link", {attrs: {to: "/member"}}, [t._v("开通会员")])], 1), s("li", [s("router-link", {attrs: {to: "/myData"}}, [t._v("我的数据")])], 1)])]), s("div", {staticClass: "head-right"}, [s("router-link", {
                    staticClass: "download",
                    attrs: {to: "/UploadData"}
                }, [s("span", [t._v("上传数据")])]), t._m(0), s("div", {staticClass: "feesback"}, [s("i", {staticClass: "iconfont icon-touxiang"}, [t.userInfos ? s("div", {staticClass: "userInfos"}, [s("ul", [t._m(1), t._m(2), s("li", [s("a", {
                    attrs: {href: "javascript:;"},
                    on: {click: t.exitLogin}
                }, [t._v("退出登录")])])])]) : t._e()])])], 1)])
            }, o = [function () {
                var t = this, s = t._self._c;
                return s("div", {staticClass: "download myName"}, [s("span", [t._v("哈哈哈")])])
            }, function () {
                var t = this, s = t._self._c;
                return s("li", {staticClass: "account"}, [s("a", {attrs: {href: "javascript:;"}}, [s("p", [t._v("我的账号：weixin_3272276")]), s("p", [t._v("免费版")])])])
            }, function () {
                var t = this, s = t._self._c;
                return s("li", {
                    attrs: {
                        "router-link": "",
                        to: "/userInfos"
                    }
                }, [s("a", {attrs: {href: "javascript:;"}}, [t._v("我的信息 "), s("span")])])
            }], l = e(6154), c = e(4865), d = e.n(c);
            let p = l.Z.create({baseURL: "fdsas", timeout: 5e3});
            p.interceptors.request.use((t => (d().start(), t))), p.interceptors.response.use((t => (d().done(), t.data)), (t => (console.log(t.message), new Promise)));
            var v = p;
            const u = t => v({method: "post", url: "/registerUserServlet", data: t}),
                _ = t => v({method: "post", url: "/loginServlet", data: t}),
                h = () => v({method: "get", url: "/exitServlet"});
            var f = {
                    data() {
                        return {userInfos: !0}
                    }, methods: {
                        exitLogin() {
                            h().then((t => {
                                t.flag && (this.userInfos = !1)
                            })).catch((t => {
                                console.log(t)
                            }))
                        }
                    }
                }, g = f, m = e(1001), x = (0, m.Z)(g, n, o, !1, null, "18d05b7a", null), C = x.exports,
                w = {name: "", components: {Header: C}}, b = w, y = (0, m.Z)(b, i, r, !1, null, "7c41a04c", null),
                k = y.exports, j = e(8345), I = function () {
                    var t = this, s = t._self._c;
                    return s("div", [s("header", [s("div", {staticClass: "header"}, [s("div", {staticClass: "logo"}, [s("h1", [s("router-link", {attrs: {to: "/home"}}, [t._v("融通数据")])], 1)])]), s("div", {staticClass: "head"}, [s("ul", [s("li", [s("router-link", {attrs: {to: "/home"}}, [t._v("首页")])], 1), s("li", {staticClass: "shop"}, [s("router-link", {attrs: {to: "/analyse"}}, [t._v("数据处理")])], 1), s("li", [s("router-link", {attrs: {to: "/resource"}}, [t._v("资源中心")])], 1), s("li", {staticClass: "platform"}, [s("router-link", {attrs: {to: "/guide"}}, [t._v("帮助与支持")]), s("div", {staticClass: "helpnav"}, [s("ul", [s("li", [s("router-link", {attrs: {to: "/guide"}}, [t._v("帮助手册")])], 1), s("li", [s("router-link", {attrs: {to: "/resource"}}, [t._v("案例库")])], 1)])])], 1), s("li", [s("router-link", {attrs: {to: "/member"}}, [t._v("开通会员")])], 1), s("li", [s("router-link", {attrs: {to: "/myData"}}, [t._v("我的数据")])], 1)])]), s("div", {staticClass: "head-right"}, [s("router-link", {
                        staticClass: "download",
                        attrs: {to: "/UploadData"}
                    }, [s("span", [t._v("上传数据")])]), t._m(0), t._m(1)], 1)]), s("div", {staticClass: "beijin"}, [s("div", {staticClass: "sitname"}, [s("div", {staticClass: "icon"}), s("div", {staticClass: "name"}, [t._v("融通数据分析平台")]), s("div", {staticClass: "free"}, [t._v(" 免费体验 ")]), s("div", {staticClass: "login"}, [s("i", [s("a", {
                        attrs: {href: "javascript:;"},
                        on: {click: t.goLogin}
                    }, [t._v("登录")])])])])]), s("div", {staticClass: "main"}, [s("div", {staticClass: "main1"}, [t.goRegisterAndLogin ? s("div", {staticClass: "goRegisterAndLogin"}, [s("RegisterAndLogin")], 1) : t._e(), s("h2", [t._v("数据分析")]), t._m(2), t._m(3), t._m(4), t._m(5), t._m(6)]), t._m(7), s("div", {staticClass: "main2"}, [t._v(" 实际功能实际功能截图 ")]), t._m(8), s("div", {staticClass: "main2"}, [t._v(" 实际功能实际功能截图 ")])]), s("div", {staticClass: "rightservice"}, [s("ul", [t._m(9), t._m(10), t._m(11), t._m(12), t._m(13), s("li", [s("a", {on: {click: t.back}}, [s("i", [t._v("")]), s("p", [t._v("置顶")])])])])]), t._m(14)])
                }, U = [function () {
                    var t = this, s = t._self._c;
                    return s("div", {staticClass: "download myName"}, [s("span", [t._v("哈哈哈")])])
                }, function () {
                    var t = this, s = t._self._c;
                    return s("div", {staticClass: "feesback"}, [s("i", {staticClass: "iconfont icon-touxiang"})])
                }, function () {
                    var t = this, s = t._self._c;
                    return s("div", {staticClass: "function1"}, [s("img", {
                        attrs: {
                            src: e(5153),
                            alt: ""
                        }
                    }), s("div", {staticClass: "introduce"}, [s("i", [s("h3", [t._v("标准算法使用")]), s("p", [t._v("熟悉的分析方法，包括T检验、方差分析、回归分析、相关分析、卡方分析、聚类分析、因子分析、正态性检验等约300类分析方法，一应俱全")])])])])
                }, function () {
                    var t = this, s = t._self._c;
                    return s("div", {staticClass: "function1"}, [s("img", {
                        attrs: {
                            src: e(1592),
                            alt: ""
                        }
                    }), s("div", {staticClass: "introduce"}, [s("i", [s("h3", [t._v("数据分析，上传数据")]), s("p", [t._v("免费一一键上传数据，智能数据分析，提供优质服务，xxxxx编不下去了")])])])])
                }, function () {
                    var t = this, s = t._self._c;
                    return s("div", {staticClass: "function1"}, [s("img", {
                        attrs: {
                            src: e(4155),
                            alt: ""
                        }
                    }), s("div", {staticClass: "introduce"}, [s("i", [s("h3", [t._v("智能图表转换")]), s("p", [t._v("一键上传，一键分析，一键智能转换图表，提供快速智能高效服务xxxxxxxx赶紧编编吧")])])])])
                }, function () {
                    var t = this, s = t._self._c;
                    return s("div", {staticClass: "function1"}, [s("img", {
                        attrs: {
                            src: e(3268),
                            alt: ""
                        }
                    }), s("div", {staticClass: "introduce"}, [s("i", [s("h3", [t._v("付费功能更加全面")]), s("p", [t._v("付费xxxx")])])])])
                }, function () {
                    var t = this, s = t._self._c;
                    return s("div", {staticClass: "function1"}, [s("img", {
                        attrs: {
                            src: e(9561),
                            alt: ""
                        }
                    }), s("div", {staticClass: "introduce"}, [s("i", [s("h3", [t._v("图表信息展示")]), s("p", [t._v("多种图标样式选择xxxxxxxxxx，图表展示")])])])])
                }, function () {
                    var t = this, s = t._self._c;
                    return s("div", {staticClass: "symbol"}, [s("img", {attrs: {src: "", alt: ""}}), t._v(" 图标图标图标图标图标 ")])
                }, function () {
                    var t = this, s = t._self._c;
                    return s("div", {staticClass: "symbol"}, [s("img", {attrs: {src: "", alt: ""}}), t._v(" 图标图标图标图标图标 ")])
                }, function () {
                    var t = this, s = t._self._c;
                    return s("li", [s("i", [t._v("")]), s("p", [t._v("在线咨询")])])
                }, function () {
                    var t = this, s = t._self._c;
                    return s("li", [s("i", [t._v("")]), s("p", [t._v("电话咨询")]), s("div", {staticClass: "right1"}, [t._v("139xxxxxxxx")]), s("div", {staticClass: "box1"})])
                }, function () {
                    var t = this, s = t._self._c;
                    return s("li", [s("i", [t._v("󰆔")]), s("p", [t._v("邮件咨询")]), s("div", {staticClass: "right2"}, [t._v("xxxxxxxxxx@xx.com")]), s("div", {staticClass: "box2"})])
                }, function () {
                    var t = this, s = t._self._c;
                    return s("li", [s("i", [t._v("󰄆")]), s("p", [t._v("微信")]), s("div", {staticClass: "right3"}, [s("img", {
                        attrs: {
                            src: e(5160),
                            alt: ""
                        }
                    })]), s("div", {staticClass: "box3"})])
                }, function () {
                    var t = this, s = t._self._c;
                    return s("li", [s("i", [t._v("")]), s("p", [t._v("QQ")]), s("div", {staticClass: "right4"}, [t._v("xxxxxxxxxx")]), s("div", {staticClass: "box4"})])
                }, function () {
                    var t = this, s = t._self._c;
                    return s("footer", {staticClass: "footer"}, [s("div", {staticClass: "mod_help w"}, [s("dl", [s("dt", [t._v("成功案例")]), s("dd", [s("a", {attrs: {href: "javascript:;"}}, [t._v("冲冲冲")])]), s("dd", [s("a", {attrs: {href: "javascript:;"}}, [t._v("xxxx")])]), s("dd", [s("a", {attrs: {href: "javascript:;"}}, [t._v("xxxx")])]), s("dd", [s("a", {attrs: {href: "javascript:;"}}, [t._v("xxxx")])]), s("dd", [s("a", {attrs: {href: "javascript:;"}}, [t._v("xxxx")])])]), s("dl", [s("dt", [t._v("友情赞助")]), s("dd", [s("a", {attrs: {href: "javascript:;"}}, [t._v("xxxx")])]), s("dd", [s("a", {attrs: {href: "javascript:;"}}, [t._v("xxxx")])]), s("dd", [s("a", {attrs: {href: "javascript:;"}}, [t._v("xxxx")])]), s("dd", [s("a", {attrs: {href: "javascript:;"}}, [t._v("xxxx")])]), s("dd", [s("a", {attrs: {href: "javascript:;"}}, [t._v("xxxx")])])]), s("dl", [s("dt", [t._v("功能实现")]), s("dd", [s("a", {attrs: {href: "javascript:;"}}, [t._v("xxxx")])]), s("dd", [s("a", {attrs: {href: "javascript:;"}}, [t._v("xxxx")])]), s("dd", [s("a", {attrs: {href: "javascript:;"}}, [t._v("xxxx")])]), s("dd", [s("a", {attrs: {href: "javascript:;"}}, [t._v("xxxx")])]), s("dd", [s("a", {attrs: {href: "javascript:;"}}, [t._v("xxxx")])])]), s("dl", [s("dt", [t._v("联系我们")]), s("dd", [s("a", {attrs: {href: "javascript:;"}}, [t._v("xxxx")])]), s("dd", [s("a", {attrs: {href: "javascript:;"}}, [t._v("xxxx")])]), s("dd", [s("a", {attrs: {href: "javascript:;"}}, [t._v("xxxx")])]), s("dd", [s("a", {attrs: {href: "javascript:;"}}, [t._v("xxxx")])]), s("dd", [s("a", {attrs: {href: "javascript:;"}}, [t._v("xxxx")])])]), s("dl", [s("dt", [t._v("xxxxx")]), s("dd", [s("a", {attrs: {href: "javascript:;"}}, [t._v("xxxx")])]), s("dd", [s("a", {attrs: {href: "javascript:;"}}, [t._v("xxxx")])]), s("dd", [s("a", {attrs: {href: "javascript:;"}}, [t._v("xxxx")])]), s("dd", [s("a", {attrs: {href: "javascript:;"}}, [t._v("xxxx")])]), s("dd", [s("a", {attrs: {href: "javascript:;"}}, [t._v("xxxx")])])]), s("dl", [s("dt", [t._v("xxxxx")]), s("dd", [s("img", {
                        attrs: {
                            src: "/images/",
                            alt: ""
                        }
                    }), t._v(" 融通数据 ")])])]), s("div", {staticClass: "mod_copyright"}, [s("div", {staticClass: "link"}, [s("a", {attrs: {href: "javascript:;"}}, [t._v("关于我们")]), t._v(" | "), s("a", {attrs: {href: "javascript:;"}}, [t._v("联系我们")]), t._v(" | "), s("a", {attrs: {href: "javascript:;"}}, [t._v("联系客服")]), t._v(" | "), s("a", {attrs: {href: "javascript:;"}}, [t._v("用户服务")]), t._v(" | "), s("a", {attrs: {href: "javascript:;"}}, [t._v("xxxx")]), t._v(" | "), s("a", {attrs: {href: "javascript:;"}}, [t._v("xxxx")]), t._v(" | "), s("a", {attrs: {href: "javascript:;"}}, [t._v("xxxx")]), t._v(" | "), s("a", {attrs: {href: "javascript:;"}}, [t._v("xxxx")]), t._v(" | "), s("a", {attrs: {href: "javascript:;"}}, [t._v("融通社区")]), t._v(" | ")]), s("div", {staticClass: "copyright"}, [t._v(" 地址：xxxxxxxx 邮编：xxxxx 电话:xxxxx 邮箱：xxxxx"), s("br"), t._v(" 版权所有：广东金融学院xxxx ")])])])
                }], O = function () {
                    var t = this, s = t._self._c;
                    return s("div", {staticClass: "container"}, [s("div", {
                        staticClass: "form-box",
                        style: {transform: t.isLogin ? "translateX(90%)" : "translateX(0%)"}
                    }, [s("form", {
                        class: {hidden: t.isRegister},
                        attrs: {action: "user", id: "registerForm"}
                    }, [s("div", {staticClass: "register-box"}, [s("h1", [t._v("register")]), s("ul", [s("li", [s("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.registerUserInfo.register_phone,
                            expression: "registerUserInfo.register_phone"
                        }],
                        staticClass: "number",
                        attrs: {type: "text", placeholder: "手机号", id: "register_phone", name: "register_phone"},
                        domProps: {value: t.registerUserInfo.register_phone},
                        on: {
                            blur: function (s) {
                                return t.register_checkPhone()
                            }, input: function (s) {
                                s.target.composing || t.$set(t.registerUserInfo, "register_phone", s.target.value)
                            }
                        }
                    }), s("span", {class: t.tip.tip1class}, [t._v(t._s(t.tip.tipone1))])]), s("li", [s("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.registerUserInfo.register_password,
                            expression: "registerUserInfo.register_password"
                        }],
                        staticClass: "number",
                        attrs: {type: "password", placeholder: "密码", id: "register_password", name: "register_password"},
                        domProps: {value: t.registerUserInfo.register_password},
                        on: {
                            blur: function (s) {
                                return t.register_checkPassword()
                            }, input: function (s) {
                                s.target.composing || t.$set(t.registerUserInfo, "register_password", s.target.value)
                            }
                        }
                    }), s("span", {class: t.tip.tip2class}, [t._v(t._s(t.tip.tipone2))])]), s("li", [s("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.registerUserInfo.repassword,
                            expression: "registerUserInfo.repassword"
                        }],
                        staticClass: "number",
                        attrs: {type: "password", placeholder: "请再次输入密码", id: "repassword", name: "repassword"},
                        domProps: {value: t.registerUserInfo.repassword},
                        on: {
                            blur: function (s) {
                                return t.repassword()
                            }, input: function (s) {
                                s.target.composing || t.$set(t.registerUserInfo, "repassword", s.target.value)
                            }
                        }
                    }), s("span", {class: t.tip.tip3class}, [t._v(t._s(t.tip.tipone3))])])]), s("button", {
                        style: {pointerEvents: "注册中" == t.registerBtn ? "none" : "auto"},
                        attrs: {id: "register_btn", type: "button"},
                        on: {click: t.register_btn}
                    }, [t._v(" " + t._s(t.registerBtn) + " ")])])]), s("form", {
                        class: {hidden: t.isLogin},
                        attrs: {action: "user", id: "loginForm"}
                    }, [s("div", {staticClass: "login-box"}, [s("h1", [t._v("login")]), s("ul", [s("li", [s("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.loginUserInfo.uidOrTel,
                            expression: "loginUserInfo.uidOrTel"
                        }],
                        attrs: {type: "text", placeholder: "账号/手机号", id: "uidOrTel", name: "uidOrTel"},
                        domProps: {value: t.loginUserInfo.uidOrTel},
                        on: {
                            blur: function (s) {
                                return t.login_checkUidOrTel()
                            }, input: function (s) {
                                s.target.composing || t.$set(t.loginUserInfo, "uidOrTel", s.target.value)
                            }
                        }
                    }), s("span", {class: t.tip.tip4class}, [t._v(t._s(t.tip.tiptwo1))])]), s("li", [s("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.loginUserInfo.login_password,
                            expression: "loginUserInfo.login_password"
                        }],
                        attrs: {type: "password", placeholder: "密码", id: "login_password", name: "login_password"},
                        domProps: {value: t.loginUserInfo.login_password},
                        on: {
                            blur: function (s) {
                                return t.login_checkPassword()
                            }, input: function (s) {
                                s.target.composing || t.$set(t.loginUserInfo, "login_password", s.target.value)
                            }
                        }
                    }), s("span", {class: t.tip.tip5class}, [t._v(t._s(t.tip.tiptwo2))])])]), s("button", {
                        attrs: {
                            id: "login_btn",
                            type: "button"
                        }, on: {click: t.login_btn}
                    }, [t._v(t._s(t.loginBtn))])])])]), s("div", {staticClass: "con-box left"}, [t._m(0), s("img", {attrs: {src: e(6912)}}), s("p", [t._v("已有账号")]), s("button", {
                        attrs: {id: "login"},
                        on: {click: t.change}
                    }, [t._v("去登录")])]), s("div", {staticClass: "con-box right"}, [t._m(1), s("img", {attrs: {src: e(6912)}}), s("p", [t._v("没有账号？")]), s("button", {
                        attrs: {id: "register"},
                        on: {click: t.change}
                    }, [t._v("去注册")])])])
                }, P = [function () {
                    var t = this, s = t._self._c;
                    return s("h2", [t._v("欢迎使用"), s("span", [t._v("FDSAS")])])
                }, function () {
                    var t = this, s = t._self._c;
                    return s("h2", [t._v("欢迎使用"), s("span", [t._v("FDSAS")])])
                }], L = (e(7658), {
                    data() {
                        return {
                            isRegister: !0,
                            isLogin: !1,
                            registerBtn: "注册",
                            loginBtn: "登录",
                            tip: {
                                tipone1: "",
                                tipone2: "",
                                tipone3: "",
                                tiptwo1: "",
                                tiptwo2: "",
                                tip1class: "tipone",
                                tip2class: "tipone",
                                tip3class: "tipone",
                                tip4class: "tiptwo",
                                tip5class: "tiptwo"
                            },
                            registerUserInfo: {register_phone: "", register_password: "", repassword: ""},
                            loginUserInfo: {uidOrTel: "", login_password: ""}
                        }
                    }, methods: {
                        change() {
                            this.isRegister = !this.isRegister, this.isLogin = !this.isLogin
                        }, register_checkPhone() {
                            let t = /^[0-9]{11}$/, s = t.test(this.registerUserInfo.register_phone);
                            return s ? (this.tip.tipone1 = "√ 输入正确", this.tip.tip1class = "tipone dui", !0) : (this.tip.tipone1 = "! 请正确输入手机号", this.tip.tip1class = "tipone wrong", !1)
                        }, register_checkPassword() {
                            let t = /^\w{6,14}$/, s = t.test(this.registerUserInfo.register_password);
                            return s ? (this.tip.tipone2 = "√ 输入正确", this.tip.tip2class = "tipone dui", !0) : (this.tip.tipone2 = "! 请输入6~14位数字、字母", this.tip.tip2class = "tipone wrong", !1)
                        }, repassword() {
                            return this.registerUserInfo.register_password == this.registerUserInfo.repassword && "" != this.registerUserInfo.repassword ? (this.tip.tipone3 = "√ 输入正确", this.tip.tip3class = "tipone dui", !0) : (this.tip.tipone3 = "x 两次输入密码不一致", this.tip.tip3class = "tipone wrong", !1)
                        }, login_checkUidOrTel() {
                            let t = this.loginUserInfo.uidOrTel, s = /^[0-9]{10,11}$/, e = s.test(t);
                            return e ? this.tip.tiptwo1 = "" : (this.tip.tiptwo1 = "!  账号格式错误", this.tip.tip4class = "tiptwo wrong"), e
                        }, login_checkPassword() {
                            let t = this.loginUserInfo.login_password, s = /^\w{6,14}$/, e = s.test(t);
                            return e ? this.tip.tiptwo2 = "" : (this.tip.tiptwo2 = "!  密码格式错误", this.tip.tip5class = "tiptwo wrong"), e
                        }, register_btn() {
                            this.register_checkPhone() && this.register_checkPassword() && this.repassword() ? (this.registerBtn = "注册中", this.registerEvent = !1, setTimeout((() => {
                                this.registerBtn = "注册", this.registerEvent = !0
                            }), 3e3), u(this.registerUserInfo).then((t => {
                                t.flag && (alert("注册成功"), this.tipone1 = "", this.tipone2 = "", this.tipone3 = "", this.tiptwo1 = "", this.tiptwo2 = "", Object.keys(this.registerUserInfo).forEach((t => this.registerUserInfo[t] = "")))
                            })).catch((t => {
                                console.log(t)
                            }))) : alert("注册失败")
                        }, login_btn() {
                            this.login_checkUidOrTel() && this.login_checkPassword() ? _(this.loginUserInfo).then((t => {
                                t.flag && this.$router.push("/analyse")
                            })).catch((t => {
                                console.log(t)
                            })) : alert("登录失败")
                        }
                    }
                }), E = L, R = (0, m.Z)(E, O, P, !1, null, "7afc6e2e", null), S = R.exports, A = e(629), Z = {
                    data() {
                        return {}
                    },
                    computed: {...(0, A.rn)("home", ["goRegisterAndLogin"])},
                    methods: {...(0, A.OI)("home", ["back", "goLogin"])},
                    components: {RegisterAndLogin: S}
                }, D = Z, T = (0, m.Z)(D, I, U, !1, null, "749e5eda", null), $ = T.exports, B = function () {
                    var t = this, s = t._self._c;
                    return s("div", {staticClass: "main"}, [s("div", {staticClass: "analyse-main"}, [s("div", {staticClass: "leftnav"}, [s("span", {staticClass: "lefttitle"}, [t._v("算法模型")]), s("ul", [s("li", {
                        class: {current: "k_means" == t.algorithm_name},
                        on: {click: t.k_means}
                    }, [s("span", [t._v("k-means算法")])]), s("li", {
                        class: {current: "decisionTree" == t.algorithm_name},
                        on: {click: t.decisionTree}
                    }, [s("span", [t._v("决策树")])]), t._m(0), t._m(1), t._m(2), t._m(3), t._m(4), t._m(5), t._m(6), t._m(7)])]), t.RightOrigin ? s("div", {staticClass: "rightOrigin"}, [s("RightOrigin")], 1) : t._e(), t.Result ? s("div", {staticClass: "Result"}, [s("Result")], 1) : t._e()])])
                }, F = [function () {
                    var t = this, s = t._self._c;
                    return s("li", [s("span", [t._v("随机森林")])])
                }, function () {
                    var t = this, s = t._self._c;
                    return s("li", [s("span", [t._v("逻辑回归")])])
                }, function () {
                    var t = this, s = t._self._c;
                    return s("li", [s("span", [t._v("线性回归")])])
                }, function () {
                    var t = this, s = t._self._c;
                    return s("li", [s("span", [t._v("支持向量机")])])
                }, function () {
                    var t = this, s = t._self._c;
                    return s("li", [s("span", [t._v("朴素贝叶斯")])])
                }, function () {
                    var t = this, s = t._self._c;
                    return s("li", [s("span", [t._v("Adaboost")])])
                }, function () {
                    var t = this, s = t._self._c;
                    return s("li", [s("span", [t._v("降维")])])
                }, function () {
                    var t = this, s = t._self._c;
                    return s("li", [s("span", [t._v("人工精神网络")])])
                }], M = function () {
                    var t = this, s = t._self._c;
                    return s("div", {staticClass: "rightOrigin"}, [s("span", {staticClass: "myStatistic"}, [t._m(0), s("div", {staticClass: "leftlistdiv"}, [s("ul", [s("div", {staticClass: "col"}, [s("draggable", {
                        staticClass: "a",
                        attrs: {
                            group: "itxst",
                            ghostClass: "ghost",
                            chosenClass: "chosen",
                            filter: ".forbid",
                            animation: "300",
                            move: t.onMove
                        },
                        model: {
                            value: t.arr1, callback: function (s) {
                                t.arr1 = s
                            }, expression: "arr1"
                        }
                    }, [s("transition-group", t._l(t.arr1, (function (e) {
                        return s("div", {key: e.id, class: 1 == e.id ? "item forbid" : "item"}, [t._v(t._s(e.name))])
                    })), 0)], 1)], 1)])])]), s("span", {staticClass: "choiceStatistic"}, [s("div", {staticClass: "titlediv"}, [s("input", {
                        staticClass: "start_button",
                        attrs: {type: "button", value: "开始分析"},
                        on: {click: t.start_button}
                    }), s("span", {staticClass: "helptip delete"}, [s("i", {
                        staticClass: "iconfont icon-shanchu",
                        on: {click: t.deleteData}
                    }), t._m(1)]), t._m(2)]), s("div", {staticClass: "leftlistdiv"}, [s("span", {staticClass: "blankspan"}, [t._v("分析项(定类)")]), s("ul", [s("div", {staticClass: "col"}, [s("draggable", {
                        attrs: {
                            group: "itxst",
                            ghostClass: "ghost",
                            chosenClass: "chosen",
                            filter: ".forbid",
                            animation: "300",
                            move: t.onMove
                        }, model: {
                            value: t.arr2, callback: function (s) {
                                t.arr2 = s
                            }, expression: "arr2"
                        }
                    }, [s("transition-group", t._l(t.arr2, (function (e) {
                        return s("div", {key: e.id, class: 1 == e.id ? "item forbid" : "item"}, [t._v(t._s(e.name))])
                    })), 0)], 1)], 1)])])]), s("i", {staticClass: "iconfont icon-bianhuan zhuanhuan"})])
                }, N = [function () {
                    var t = this, s = t._self._c;
                    return s("div", {staticClass: "titlediv"}, [s("input", {
                        attrs: {
                            type: "button",
                            value: "筛选样本"
                        }
                    }), s("span", {staticClass: "shuju"}, [t._v("100")]), s("span", {staticClass: "helptip"}, [s("i", {staticClass: "iconfont icon-bangzhu"}), s("div", {staticClass: "querytip"}, [s("p", {staticClass: "p1"}, [t._v("分析样本量")]), s("p", {staticClass: "p2"}, [t._v("当前分析样本量；筛选可导致小于分析样本量。 "), s("br"), t._v(" 当前为免费版，系统仅提供分析 "), s("span", {staticStyle: {color: "#ff0000"}}, [t._v("前100条")]), t._v(" 数据。 ")]), s("p", {staticClass: "p3"})])]), s("span", {staticClass: "method"}, [s("a", {attrs: {href: "javascript:;"}}, [s("i", {staticClass: "iconfont icon-tishi"})]), s("div", {staticClass: "methodtip"}, [s("div", {staticClass: "jBox-content"}, [t._v("详细帮助说明")])])])])
                }, function () {
                    var t = this, s = t._self._c;
                    return s("div", {staticClass: "querytip"}, [s("p", {staticClass: "p1"}, [t._v("清空所有选中数据")]), s("p", {staticClass: "p3"})])
                }, function () {
                    var t = this, s = t._self._c;
                    return s("span", {staticClass: "method"}, [s("a", {attrs: {href: "javascript:;"}}, [s("i", {staticClass: "iconfont icon-tishi"})]), s("div", {staticClass: "methodtip"}, [s("div", {staticClass: "jBox-content"}, [t._v("详细帮助说明")])])])
                }], X = e(9980), W = e.n(X), q = {
                    components: {draggable: W()}, data() {
                        return {
                            arr1: [{id: 1, name: "【系统】网购满意度_定量"}, {id: 2, name: "【系统】网购金额_定量"}, {
                                id: 3,
                                name: "【系统】平台偏好_定类"
                            }, {id: 5, name: "【系统】城市_定类"}, {id: 4, name: "【系统】平台偏好_定类"}],
                            arr2: [{id: 11, name: "【系统】网购频率_定量"}]
                        }
                    }, methods: {
                        deleteData() {
                            console.log(111)
                        }, onMove(t, s) {
                            return !0
                        }, ...(0, A.OI)("analyse", ["start_button"])
                    }
                }, z = q, H = (0, m.Z)(z, M, N, !1, null, "56d0d01c", null), Q = H.exports, G = function () {
                    var t = this, s = t._self._c;
                    return s("div", {staticClass: "result"}, [s("input", {
                        staticClass: "exportform",
                        attrs: {type: "button", value: "导出EXCEL表格"},
                        on: {click: t.exportEXEL}
                    }), s("input", {
                        staticClass: "exportform",
                        attrs: {type: "button", value: "导出PDF结果"},
                        on: {click: t.exportPDF}
                    }), s("input", {
                        staticClass: "exportform",
                        attrs: {type: "button", value: "导出Word结果"},
                        on: {click: t.exportWord}
                    }), s("input", {
                        staticClass: "exportform",
                        attrs: {type: "button", value: "导出所有图形"},
                        on: {click: t.generateImages}
                    }), s("span", {
                        staticClass: "callBack",
                        on: {click: t.start_button}
                    }, [s("i", {staticClass: "iconfont icon-fanhui"})]), s("div", {staticClass: "troublesome"}, [s("div", {staticClass: "lining"}, [s("div", {staticClass: "visual"}, [s("div", {staticClass: "visualtitle"}, [s("div", {staticClass: "titleleft"}, [t._v(" " + t._s(t.titleleft) + " ")])]), s("div", {staticClass: "chart"}, [s("div", {
                        ref: "chart_container",
                        staticClass: "chart_container",
                        attrs: {id: "chart_container"}
                    }, [s("img", {
                        attrs: {
                            src: t.chartImgSrc,
                            alt: ""
                        }
                    })])]), s("div", {staticClass: "buttons"}, [s("a", {
                        attrs: {href: "javascript:;"},
                        on: {click: t.generateImages}
                    }, [t._v("下载")])])]), s("div", {
                        staticClass: "wordanalysis",
                        staticStyle: {"white-space": "pre-line"}
                    }, [t._m(0), t._v(" " + t._s(t.wordanalysis) + " ")])])])])
                }, J = [function () {
                    var t = this, s = t._self._c;
                    return s("div", {staticClass: "wordtitle"}, [t._v("智能分析"), s("i", {staticClass: "iconfont icon-fuzhi"})])
                }], K = e(1120), V = e.n(K), Y = {
                    computed: {...(0, A.rn)("analyse", ["titleleft", "chartImgSrc", "wordanalysis"])},
                    methods: {
                        generateImages() {
                            V()(this.$refs.chart_container).then((t => {
                                const s = t.toDataURL("image/jpeg"), e = document.createElement("img");
                                e.src = s;
                                const a = document.createElement("a");
                                a.href = s, a.download = "img_download", a.click()
                            }))
                        }, ...(0, A.OI)("analyse", ["start_button", "exportEXEL", "exportPDF", "exportWord"])
                    }
                }, tt = Y, st = (0, m.Z)(tt, G, J, !1, null, "118a2da0", null), et = st.exports, at = {
                    data() {
                        return {}
                    },
                    computed: {...(0, A.rn)("analyse", ["algorithm_name", "RightOrigin", "Result"])},
                    methods: {...(0, A.OI)("analyse", ["k_means", "decisionTree", "algorithm_style"])},
                    components: {Result: et, RightOrigin: Q}
                }, it = at, rt = (0, m.Z)(it, B, F, !1, null, "202b451f", null), nt = rt.exports, ot = function () {
                    var t = this, s = t._self._c;
                    return s("div", [t._v("a")])
                }, lt = [], ct = {}, dt = ct, pt = (0, m.Z)(dt, ot, lt, !1, null, "65430a0f", null), vt = pt.exports,
                ut = function () {
                    var t = this, s = t._self._c;
                    return s("div", {staticClass: "themiddle"}, [s("div", {staticClass: "addmembey"}, [s("div", {staticClass: "myData"}, [s("div", {staticClass: "title"}, [s("span", [t._v("我的数据集")]), s("router-link", {
                        staticClass: "Updatasrc",
                        attrs: {to: "/UploadData"}
                    }, [t._v("上传数据")])], 1), t._m(0)])])])
                }, _t = [function () {
                    var t = this, s = t._self._c;
                    return s("div", {staticClass: "tablediv"}, [s("table", {
                        attrs: {
                            border: "1",
                            cellpadding: "0",
                            cellspacing: "0"
                        }
                    }, [s("tbody", [s("tr", [s("td", {staticClass: "time"}, [t._v("2023-04-14")]), s("td", {staticClass: "name"}, [s("span", [t._v("名称")])]), s("td", {staticClass: "goanalyse"}, [t._v("立即分析")]), s("td", {staticClass: "right"}, [s("a", {attrs: {href: "javascript:;"}}, [t._v("查看")]), s("a", {attrs: {href: "javascript:;"}}, [t._v("下载")]), s("a", {attrs: {href: "javascript:;"}}, [t._v("删除")])])]), s("tr", [s("td", {staticClass: "time"}, [t._v("2023-04-14")]), s("td", {staticClass: "name"}, [s("span", [t._v("名称")])]), s("td", {staticClass: "goanalyse"}, [t._v("立即分析")]), s("td", {staticClass: "right"}, [s("a", {attrs: {href: "javascript:;"}}, [t._v("查看")]), s("a", {attrs: {href: "javascript"}}, [t._v("下载")]), s("a", {attrs: {href: "javascript"}}, [t._v("删除")])])]), s("tr", [s("td", {staticClass: "time"}, [t._v("2023-04-14")]), s("td", {staticClass: "name"}, [s("span", [t._v("名称")])]), s("td", {staticClass: "goanalyse"}, [t._v("立即分析")]), s("td", {staticClass: "right"}, [s("a", {attrs: {href: "javascript"}}, [t._v("查看")]), s("a", {attrs: {href: "javascript"}}, [t._v("下载")]), s("a", {attrs: {href: "javascript"}}, [t._v("删除")])])])])])])
                }], ht = {}, ft = ht, gt = (0, m.Z)(ft, ut, _t, !1, null, "342ece53", null), mt = gt.exports,
                xt = function () {
                    var t = this, s = t._self._c;
                    return s("div", {staticClass: "themiddle"}, [s("div", {staticClass: "addmembey"}, [s("div", {staticClass: "uploadBox"}, [s("div", {staticClass: "uploadAndhint"}, [s("div", {
                        ref: "drop_area",
                        staticClass: "inputup",
                        class: t.dropActive ? "drop-active" : ""
                    }, [s("div", {staticClass: "uploaddiv"}, [s("form", {staticClass: "updata"}, [s("a", {attrs: {href: "javascript:;"}}, [t._v("上传文件 "), s("input", {
                        ref: "upload",
                        staticClass: "fileopcti outputlist_upload file",
                        attrs: {type: "file", accept: ".xls, .xlsx", name: "fileopcti"}
                    })]), s("div", {staticClass: "labelfiles"}, [t._v("或者将文件拖拽至此区域")])]), t._m(0)])]), t._m(1)])])])])
                }, Ct = [function () {
                    var t = this, s = t._self._c;
                    return s("div", {staticClass: "hint"}, [s("span", [t._v("支持EXCEL/SPSS/Stata/SAS文件")])])
                }, function () {
                    var t = this, s = t._self._c;
                    return s("div", {staticClass: "explain"}, [s("ul", [s("li", [t._v("导入说明：")]), s("li", [t._v("1、支持xls、xlsx、csv、sav、dta、sas7bdat等格式")]), s("li", [t._v("2、不能合并单元格")]), s("li", [t._v("3、第1行是标题不能缺失")]), s("li", [t._v("4、文件在10M内，最高5万行，1024列")]), s("li", [t._v("5、日期字段需包含年月日（如2021/1/1），或年月日时分秒（如2021/1/1 00:00:00）")]), s("li", [t._v("6、若有问题可查看帮助手册")])]), s("p", [t._v("表格示例 ")]), s("img", {
                        attrs: {
                            src: e(6624),
                            alt: ""
                        }
                    })])
                }], wt = {
                    data() {
                        return {dropActive: !1, outputs: []}
                    }, methods: {
                        readExcel(t) {
                            const {files: s} = t.target;
                            return console.log(s), !(s.length <= 0) && (/\.(xls|xlsx)$/.test(s[0].name.toLowerCase()) ? void 0 : (this.$Message.error("上传格式不正确，请上传xls或者xlsx格式"), !1))
                        }, dropEvent(t) {
                            this.dropActive = !1, t.stopPropagation(), t.preventDefault(), this.uploadFile(t.dataTransfer.files)
                        }, uploadFile(t) {
                            console.log(t[0], "file"), t && t.length
                        }
                    }, mounted() {
                        this.$refs.upload.addEventListener("change", (t => {
                            this.readExcel(t)
                        }));
                        let t = this.$refs.drop_area;
                        t.addEventListener("drop", this.dropEvent, !1), t.addEventListener("dragleave", (t => {
                            t.stopPropagation(), t.preventDefault(), this.dropActive = !1
                        })), t.addEventListener("dragenter", (t => {
                            t.stopPropagation(), t.preventDefault(), this.dropActive = !0
                        })), t.addEventListener("dragover", (t => {
                            t.stopPropagation(), t.preventDefault(), this.dropActive = !0
                        }))
                    }
                }, bt = wt, yt = (0, m.Z)(bt, xt, Ct, !1, null, "7a0b7d4d", null), kt = yt.exports, jt = function () {
                    var t = this, s = t._self._c;
                    return s("input", {
                        ref: "upload",
                        staticClass: "outputlist_upload file",
                        attrs: {type: "file", accept: ".xls, .xlsx"}
                    })
                }, It = [], Ut = e(4105), Ot = {
                    data() {
                        return {outputs: []}
                    }, mounted() {
                        this.$refs.upload.addEventListener("change", (t => {
                            this.readExcel(t)
                        }))
                    }, methods: {
                        readExcel(t) {
                            const s = this, {files: e} = t.target;
                            if (e.length <= 0) return !1;
                            if (!/\.(xls|xlsx)$/.test(e[0].name.toLowerCase())) return this.$Message.error("上传格式不正确，请上传xls或者xlsx格式"), !1;
                            const a = new FileReader;
                            a.onload = e => {
                                try {
                                    const t = e.target.result, a = Ut["default"].read(t, {type: "binary"}),
                                        i = a.SheetNames[0], r = Ut["default"].utils.sheet_to_json(a.Sheets[i]);
                                    console.log(r), s.outputs = [], r.map((t => {
                                        const e = {address: r[t].addr, value: r[t].value};
                                        return s.outputs.push(e), ""
                                    })), this.$refs.upload.value = ""
                                } catch (t) {
                                    return !1
                                }
                            }, a.readAsBinaryString(e[0])
                        }
                    }
                }, Pt = Ot, Lt = (0, m.Z)(Pt, jt, It, !1, null, "641f33cd", null), Et = Lt.exports, Rt = function () {
                    var t = this, s = t._self._c;
                    return s("div", [s("div", {staticClass: "itxst"}, [s("div", [t._v("自定义控制拖拽和停靠")]), s("div", {staticClass: "col"}, [s("draggable", {
                        staticClass: "a",
                        attrs: {
                            group: "itxst",
                            ghostClass: "ghost",
                            chosenClass: "chosen",
                            filter: ".forbid",
                            animation: "300",
                            move: t.onMove
                        },
                        model: {
                            value: t.arr1, callback: function (s) {
                                t.arr1 = s
                            }, expression: "arr1"
                        }
                    }, [s("transition-group", t._l(t.arr1, (function (e) {
                        return s("div", {key: e.id, class: 1 == e.id ? "item forbid" : "item"}, [t._v(t._s(e.name))])
                    })), 0)], 1)], 1), s("div", {staticClass: "col"}, [s("draggable", {
                        attrs: {
                            group: "itxst",
                            ghostClass: "ghost",
                            chosenClass: "chosen",
                            filter: ".forbid",
                            animation: "300",
                            move: t.onMove
                        }, model: {
                            value: t.arr2, callback: function (s) {
                                t.arr2 = s
                            }, expression: "arr2"
                        }
                    }, [s("transition-group", t._l(t.arr2, (function (e) {
                        return s("div", {key: e.id, class: 1 == e.id ? "item forbid" : "item"}, [t._v(t._s(e.name))])
                    })), 0)], 1)], 1)])])
                }, St = [], At = {
                    components: {draggable: W()}, data() {
                        return {
                            arr1: [{id: 1, name: "www.itxst.com（不允许停靠）"}, {id: 2, name: "www.jd.com"}, {
                                id: 3,
                                name: "www.baidu.com"
                            }, {id: 5, name: "www.google.com"}, {id: 4, name: "www.taobao.com（不允许拖拽）"}],
                            arr2: [{id: 11, name: "微软"}, {id: 12, name: "亚马逊"}, {id: 13, name: "京东"}, {
                                id: 15,
                                name: "谷歌"
                            }, {id: 14, name: "苹果"}]
                        }
                    }, methods: {
                        onMove(t, s) {
                            return console.log(t), console.log(s), 1 != t.relatedContext.element.id && 4 != t.draggedContext.element.id
                        }, ...(0, A.OI)("analyse", ["start_button"])
                    }
                }, Zt = At, Dt = (0, m.Z)(Zt, Rt, St, !1, null, "2824bd62", null), Tt = Dt.exports, $t = function () {
                    var t = this, s = t._self._c;
                    return s("div", {
                        class: t.dropActive ? "drop-active" : "",
                        attrs: {id: "drop-area"}
                    }, [s("p", [t._v("将文件拖拽到此处即可完成文件上传。")])])
                }, Bt = [], Ft = {
                    name: "DropFile", data() {
                        return {dropActive: !1}
                    }, methods: {
                        dropEvent(t) {
                            this.dropActive = !1, t.stopPropagation(), t.preventDefault(), this.uploadFile(t.dataTransfer.files)
                        }, uploadFile(t) {
                            console.log(t[0], "file"), t && t.length
                        }
                    }, mounted() {
                        let t = document.getElementById("drop-area");
                        t.addEventListener("drop", this.dropEvent, !1), t.addEventListener("dragleave", (t => {
                            t.stopPropagation(), t.preventDefault(), this.dropActive = !1
                        })), t.addEventListener("dragenter", (t => {
                            t.stopPropagation(), t.preventDefault(), this.dropActive = !0
                        })), t.addEventListener("dragover", (t => {
                            t.stopPropagation(), t.preventDefault(), this.dropActive = !0
                        }))
                    }
                }, Mt = Ft, Nt = (0, m.Z)(Mt, $t, Bt, !1, null, "629af011", null), Xt = Nt.exports, Wt = function () {
                    var t = this, s = t._self._c;
                    return s("div", [t._v("u")])
                }, qt = [], zt = {}, Ht = zt, Qt = (0, m.Z)(Ht, Wt, qt, !1, null, "3cb818e7", null), Gt = Qt.exports;
            a.ZP.use(j.Z);
            let Jt = j.Z.prototype.push, Kt = j.Z.prototype.replace;
            j.Z.prototype.push = function (t, s, e) {
                s && e ? Jt.call(this, t, s, e) : Jt.call(this, t, (() => {
                }), (() => {
                }))
            }, j.Z.prototype.replace = function (t, s, e) {
                s && e ? Kt.call(this, t, s, e) : Kt.call(this, t, (() => {
                }), (() => {
                }))
            };
            var Vt = new j.Z({
                mode: "history",
                routes: [{path: "/home", component: $, meta: {show: !1}}, {
                    path: "/analyse",
                    component: nt,
                    meta: {show: !0}
                }, {path: "/resource", component: Et, meta: {show: !0}}, {
                    path: "/article",
                    component: vt,
                    meta: {show: !0}
                }, {path: "/uploadData", component: kt, meta: {show: !0}}, {
                    path: "/myData",
                    component: mt,
                    meta: {show: !0}
                }, {path: "/guide", component: Tt, meta: {show: !0}}, {
                    path: "/member",
                    component: Xt,
                    meta: {show: !0}
                }, {path: "/userInfos", component: Gt, meta: {show: !0}}, {path: "*", redirect: "/home"}]
            });
            a.ZP.use(A.ZP);
            const Yt = {
                namespaced: !0, state: {goRegisterAndLogin: !1}, mutations: {
                    back() {
                        window.scrollTo({top: 0, behavior: "smooth"})
                    }, goLogin(t) {
                        t.goRegisterAndLogin = !0
                    }
                }, actions: {}, getters: {}
            }, ts = {
                namespaced: !0,
                state: {
                    algorithm_name: "k_means",
                    RightOrigin: !0,
                    Result: !1,
                    titleleft: "【系统】网购满意度_定量",
                    chartImgSrc: "",
                    wordanalysis: "频数分析用于研究定类数据的分布情况，选择频数和百分比分别是多少;\n        1.\n        <br />\n        2.\n        \n\n        3.\n        "
                },
                mutations: {
                    k_means(t) {
                        t.algorithm_name = "k_means"
                    }, decisionTree(t) {
                        t.algorithm_name = "decisionTree"
                    }, start_button(t) {
                        t.RightOrigin = !t.RightOrigin, t.Result = !t.Result
                    }, exportEXEL(t) {
                    }, exportPDF(t) {
                    }, exportWord(t) {
                    }
                },
                actions: {},
                getters: {}
            }, ss = {
                namespaced: !0,
                state: {
                    isRegister: !0,
                    isLogin: !1,
                    registerBtn: "注册",
                    loginBtn: "登录",
                    tip: {
                        tipone1: "",
                        tipone2: "",
                        tipone3: "",
                        tiptwo1: "",
                        tiptwo2: "",
                        tip1class: "tipone",
                        tip2class: "tipone",
                        tip3class: "tipone",
                        tip4class: "tiptwo",
                        tip5class: "tiptwo"
                    },
                    registerUserInfo: {register_userid: "", register_password: "", repassword: ""},
                    loginUserInfo: {login_userid: "", login_password: ""}
                },
                mutations: {},
                actions: {
                    async goRegister() {
                        await register(data)
                    }
                },
                getters: {}
            };
            var es = new A.ZP.Store({modules: {personAbout: ss, home: Yt, analyse: ts}});
            a.ZP.config.productionTip = !1, new a.ZP({el: "#app", render: t => t(k), router: Vt, store: es})
        }, 6624: function (t, s, e) {
            t.exports = e.p + "fdsas/img/example.777e4418.svg"
        }, 6912: function (t, s, e) {
            t.exports = e.p + "fdsas/img/hello.a6b7dd81.jpeg"
        }, 5153: function (t, s, e) {
            t.exports = e.p + "fdsas/img/AI.14fa1d4d.png"
        }, 3268: function (t, s, e) {
            t.exports = e.p + "fdsas/img/pay.2bc2be2d.png"
        }, 9561: function (t, s, e) {
            t.exports = e.p + "fdsas/img/show.f6896e2f.png"
        }, 5160: function (t, s, e) {
            t.exports = e.p + "fdsas/img/th.d8a257ed.jpg"
        }, 4155: function (t, s, e) {
            t.exports = e.p + "fdsas/img/transform.d19cbd5d.png"
        }, 1592: function (t, s, e) {
            t.exports = e.p + "fdsas/img/upload.c5933496.png"
        }
    }, s = {};

    function e(a) {
        var i = s[a];
        if (void 0 !== i) return i.exports;
        var r = s[a] = {exports: {}};
        return t[a].call(r.exports, r, r.exports, e), r.exports
    }

    e.m = t, function () {
        var t = [];
        e.O = function (s, a, i, r) {
            if (!a) {
                var n = 1 / 0;
                for (d = 0; d < t.length; d++) {
                    a = t[d][0], i = t[d][1], r = t[d][2];
                    for (var o = !0, l = 0; l < a.length; l++) (!1 & r || n >= r) && Object.keys(e.O).every((function (t) {
                        return e.O[t](a[l])
                    })) ? a.splice(l--, 1) : (o = !1, r < n && (n = r));
                    if (o) {
                        t.splice(d--, 1);
                        var c = i();
                        void 0 !== c && (s = c)
                    }
                }
                return s
            }
            r = r || 0;
            for (var d = t.length; d > 0 && t[d - 1][2] > r; d--) t[d] = t[d - 1];
            t[d] = [a, i, r]
        }
    }(), function () {
        e.n = function (t) {
            var s = t && t.__esModule ? function () {
                return t["default"]
            } : function () {
                return t
            };
            return e.d(s, {a: s}), s
        }
    }(), function () {
        e.d = function (t, s) {
            for (var a in s) e.o(s, a) && !e.o(t, a) && Object.defineProperty(t, a, {enumerable: !0, get: s[a]})
        }
    }(), function () {
        e.g = function () {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (t) {
                if ("object" === typeof window) return window
            }
        }()
    }(), function () {
        e.o = function (t, s) {
            return Object.prototype.hasOwnProperty.call(t, s)
        }
    }(), function () {
        e.r = function (t) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
        }
    }(), function () {
        e.p = "/"
    }(), function () {
        var t = {143: 0};
        e.O.j = function (s) {
            return 0 === t[s]
        };
        var s = function (s, a) {
            var i, r, n = a[0], o = a[1], l = a[2], c = 0;
            if (n.some((function (s) {
                return 0 !== t[s]
            }))) {
                for (i in o) e.o(o, i) && (e.m[i] = o[i]);
                if (l) var d = l(e)
            }
            for (s && s(a); c < n.length; c++) r = n[c], e.o(t, r) && t[r] && t[r][0](), t[r] = 0;
            return e.O(d)
        }, a = self["webpackChunkvue_test"] = self["webpackChunkvue_test"] || [];
        a.forEach(s.bind(null, 0)), a.push = s.bind(null, a.push.bind(a))
    }();
    var a = e.O(void 0, [998], (function () {
        return e(9978)
    }));
    a = e.O(a)
})();