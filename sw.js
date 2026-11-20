/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","fb640206833998d8c10ed0906ddecb36"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","7a3e4e828ea8841e039190a2aed66eaa"],["/2023/02/06/C语言链表/index.html","c7653a7df53469b0036528769fb491ce"],["/2023/02/06/书籍资源/index.html","f3c8ce333de454978821cac44391070f"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","e00ae52e2517b5d7c3274073b2e3fd50"],["/2023/02/07/为水而水（笑/index.html","9de14db2cf9767c1b01a26aa72bac2d2"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","fb2469bac81b4f51d24881d4bb9672ad"],["/2023/03/09/Web前端笔记-Emmet/index.html","6049ddf37b3e7977b0a86af704d7c829"],["/2023/03/23/gitalk-评论/index.html","1b7a70361b5203507fc22b2e2d4f74b9"],["/2023/04/10/用C语言实现字符串全排列/index.html","6e03a36f348544c8af055f4071e4a2f2"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","5fe245802a037afbe1aad2ee85b664ca"],["/2023/05/15/C语言基础排序-demo/index.html","e8bdcc5d57d761be05dd922c5ff07530"],["/2023/06/14/闲着没事干/index.html","2e4cc9761c47701aa1368b1659c89614"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","69cc1051072b0b12fef04c9d0bc784bc"],["/2023/08/01/javase-note/index.html","ac361b9b30be46f44f7a06f14d9d0b4c"],["/2023/09/14/vue-pure-admin/index.html","52c05b0af13d5c68bec235becda796b3"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","070c24caa7aa78b4b9200b440ecc282e"],["/2023/11/28/C-CPP-the-memset-function/index.html","8cb5e94b34e5c2797fa0334d5ffac574"],["/2023/12/13/javaSwing-DynamicClock/index.html","697156740685b62eb2bf34fc2b7d1ad4"],["/2024/01/24/builtin-系列函数/index.html","5995d803ce75d1393a021ee5eecff41f"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","b3b513bab8ae83aba463ac5cc0e06f81"],["/2024/02/09/新年快乐/index.html","c59b19de34bb53448088d99cd7a41ebb"],["/2024/04/07/转载-线段树专题-xyw813/index.html","5958239159026af3e101aa6baf25ef70"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","8ed2b3e7a7f7191d813e2bae1559df42"],["/2024/05/06/cloudflare-display-issue/index.html","919338cb660f0adad468e213540ab6dd"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","17aa36651b8a4e8950b3305133efc526"],["/2024/06/18/POI2011-WYK-Plot-Solved/index.html","258bf886161037e8648be5fa4b503e48"],["/2024/06/25/open-source-LinuxMirrors/index.html","3a920624f5d1d7aa9a594475d5f44202"],["/2024/09/02/Dinic-算法/index.html","9371907155fe92a50f281142f14c07da"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","4d8d39c646bdfc206f21dee73c1b9376"],["/2024/10/11/常用STL算法库/index.html","c595f9ad562ab32c131659e75ac726d4"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","04243ed7fa460b2ddfd5dd074642524d"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","3f82e3ba2887a388fc0fda261603cfc1"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","408331b48ae9fac96f7bc2ec8143e2d7"],["/2024/12/17/Where-are-those-algorithms/index.html","ccff6b587b8eb239778ce29cf85c9bda"],["/2024/12/26/重构评论系统/index.html","7ace04a713bdcebaf29fbd513cd56a61"],["/2025/01/01/blacklist/index.html","2a7f0bb7ab3b3d127dda0d7559e8747a"],["/2025/03/15/GitHub-Skills/index.html","2cefb91cdc17fb725671931d52c193ec"],["/2025/03/16/lombok与delombok-在gradle上的配置方法/index.html","c94ae59680637cc318e5f3aea44cf232"],["/2025/04/09/Codeforces-Round-1016-Div-3-解题报告/index.html","b83733173e885f7a7ee7478192a4042d"],["/2025/08/23/github-special-files-guide/index.html","771b39552cd171a28381d795f3267885"],["/2025/09/28/408-route/index.html","519a95d02dbcf035cc9092bc6651a670"],["/2025/10/14/rvo/index.html","1f4f33dd7d9423179a0af061424e6785"],["/2025/11/13/What-is-OSINT/index.html","14bff522eacac59f6f0b21a83f53d4a1"],["/2025/11/20/DDoS-and-CC/index.html","00c94c790975738afe101053bddd66f7"],["/2026/01/02/2025-summary/index.html","8c58a4120e25a15ea83b9ebd8ae7ceea"],["/2026/07/26/reincarnation/index.html","c33f51a81df6d7f354916cc19e5f3a67"],["/404.html","7cd99d3b88636912b1a1eca0ffe7968b"],["/about/index.html","2fd6f1c536726f8b99c1c0a47e9dda58"],["/archives/2023/02/index.html","c656b2152ab4d3263d77f2887c8ccdf5"],["/archives/2023/03/index.html","404312b5ba4827d6ce449a952c16067e"],["/archives/2023/04/index.html","d7fd7167167727ef29f0bccfdaba27dd"],["/archives/2023/05/index.html","4ec6429f49674eee10538b8b2a364820"],["/archives/2023/06/index.html","dceff81faeac10e71ea3065f644826d8"],["/archives/2023/08/index.html","3e0716bad96acb7c6f01fd5fd487d32d"],["/archives/2023/09/index.html","f074588a082d4f2fdc7b1e6356c75cf6"],["/archives/2023/10/index.html","d33c87b5e3d470352113b695dbd50683"],["/archives/2023/11/index.html","0786884693b08f3159866daeeb8d3a32"],["/archives/2023/12/index.html","2a8de968190a94d1074468da47bcb936"],["/archives/2023/index.html","b2dbcf4257fe062d521c8efceec873e9"],["/archives/2023/page/2/index.html","b2dbcf4257fe062d521c8efceec873e9"],["/archives/2024/01/index.html","f384a2eda5d566b5d50dd2c4fdde6f68"],["/archives/2024/02/index.html","57dd0aaa89dfa376d49b04c80ce5ca56"],["/archives/2024/04/index.html","09eeff06011118b8a78d5e64af3c5702"],["/archives/2024/05/index.html","26b8dbfb8f927ce1169e3ceb73b04008"],["/archives/2024/06/index.html","48070bc9d082d246c808d4110baaea6b"],["/archives/2024/09/index.html","17055b0dd03d695b421fc7cdc368c980"],["/archives/2024/10/index.html","6ca12c16c8398ebd0f8296bf56db0c0b"],["/archives/2024/11/index.html","8bf47567565956ea457e2537da0b34c7"],["/archives/2024/12/index.html","98bf6de5f87a92c47cbea63e16ddeff6"],["/archives/2024/index.html","a1829535b770a5993c5b9cc37ca382ad"],["/archives/2024/page/2/index.html","a1829535b770a5993c5b9cc37ca382ad"],["/archives/2025/01/index.html","4d27c6c23f110c9885b80a8cb1d68e48"],["/archives/2025/03/index.html","d121fd28b848201f2ce9902f272b9123"],["/archives/2025/04/index.html","caea36a1257a84a14b876f854aa8dabe"],["/archives/2025/08/index.html","4c7ce85e3278fbb1643cb8331ab8c4e1"],["/archives/2025/09/index.html","841583994fb0b5a41970682b22f01380"],["/archives/2025/10/index.html","7178db7ca4525bb858d9d2d04eb72875"],["/archives/2025/11/index.html","e1cbe1ea2cb19fbacb968ffb91266f2a"],["/archives/2025/index.html","9bf2b49f6e6a97e39980cecd465c41dc"],["/archives/2026/01/index.html","cfc6fa46c42f52990d90c6d883c854cf"],["/archives/2026/07/index.html","08f212233076330492f429ee4c544c4c"],["/archives/2026/index.html","e2fbe86562920675d05e3cf5432092d5"],["/archives/index.html","477605984786305cbca949680db8b412"],["/archives/page/2/index.html","477605984786305cbca949680db8b412"],["/archives/page/3/index.html","477605984786305cbca949680db8b412"],["/archives/page/4/index.html","477605984786305cbca949680db8b412"],["/archives/page/5/index.html","477605984786305cbca949680db8b412"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-FUXEtNSWPD.html","3e2eec0e5d15b2bea8faa7656ae0facf"],["/bangumi/index.html","6ad51d1db4d493012c32268c89ae68c8"],["/bangumis/index.html","d566e1106bd1862e9d057f5d60d60884"],["/categories/技术/index.html","f55f39c5d5f65dfe6f96b4597b62f685"],["/categories/技术/page/2/index.html","51b715ac05b236e7530cb6b98690d559"],["/categories/技术/page/3/index.html","a88cfeb920354a8895d225c08c0db8f8"],["/categories/技术/page/4/index.html","40ace72d974077ca7fcb726b5b8b4386"],["/categories/资源/index.html","216bb671918964d8b26e5fadb5bb02f0"],["/categories/转载/index.html","8c0e96729de97278cfd7a46d22153062"],["/categories/随想/index.html","00f7c517c64c706383e48dc02ad185ec"],["/comment/index.html","92ffec3c72c6e79afd3b4fccfae37c13"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/giscus.min.css","96c42b2029f44095aaf46f6dc0628ded"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","3d25b06050d566e09ef5e0dd6c30d405"],["/css/style.css","0298f78695396c09d9b93f3e3177552a"],["/css/style.min.css","a12adcd7db3cac49eda854079b620682"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","3e0e158d5628f3d2f230c1a66dbc86d5"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","33439c044c31a57badca77e0be4f49ce"],["/index.html","50bf2647ca99727c3e88c84d8cb0b6d0"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","5132d9c9a907e42c82f678b7b58a7552"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.js","65f02458a8e38579dac5594f252bd66f"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","7d94bf3b5e5d08bd81ca65d0d19f7dec"],["/js/sakura-app.min.js","a71060fe3d75c870cc6d957f1c7437e6"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","4b4646b7e9ebf8781487aa57053fb59c"],["/js/wrapImage.min.js","f366dcba793c09c735153652842d92e6"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","b55ab494d71ccd5903f842f2b494552e"],["/links/index.html","4f9ce8c3b49767310dd5eb53b261acbb"],["/music/index.html","4ee6a8f7bf4ae0e4d0d1a3ef9eefeae6"],["/page/2/index.html","b1db14d62826368e4b480ac44fd7a258"],["/page/3/index.html","99c68c092245676701e1f2d255db1b75"],["/page/4/index.html","c27fa5c1f9eed7568d4f6e01e6135c88"],["/page/5/index.html","f3a69ccac61e019c88cf7ac9a1bc4f14"],["/rss/index.html","0ddd859c40659a9764b53d885940a632"],["/sw-register.js","a35c59771a23406d1a1604831760e61d"],["/tags/408/index.html","a33c282eba0ef19a5dd103b169484fc6"],["/tags/C-C/index.html","5c277f6196a1b280ccbbd7690536460b"],["/tags/C-CPP/index.html","e22ad15d1b23b8c9104ba61e083d410f"],["/tags/C/index.html","5f395ccd873f89388a04dd4d3d974fe4"],["/tags/CC攻击/index.html","9143e4159111757fd33d191fcd81c128"],["/tags/CONTRIBUTING/index.html","cdd9426c9c66df72cb3e8cdb697f21a2"],["/tags/CPP/index.html","3f8a8ce703721af573980625cbdf0fa1"],["/tags/CSS/index.html","619644611731fc3ff69d8b552fe52bee"],["/tags/CodeForces/index.html","db5e108f9ec813fdfab390fc92f4747a"],["/tags/Color/index.html","09f55e8afebde678b711d5eb27449cab"],["/tags/Comment/index.html","04f0aa233b2dcb00cd29d75059227c1a"],["/tags/C语言/index.html","f7516b54ba2656d58f3ba4aaa56dacbe"],["/tags/DDoS/index.html","620a81a9e8741252bee7ffbd46ed2375"],["/tags/Dinic/index.html","bae248ae0003b41218ec3d5197ad168e"],["/tags/Div2/index.html","334c7952e001516bdb865344e62a6790"],["/tags/Div3/index.html","c597b8cd9c7d91d95627e0a540faeb78"],["/tags/GitHub-Actions/index.html","95a4ccbf55d579098955e5b53433ed54"],["/tags/GitHub/index.html","bb17f36b6b1ccc61b12764bae92594a4"],["/tags/Gradle/index.html","3c732dea230e4bac4f4eecd7c119e613"],["/tags/JDK/index.html","eacb31f200657067f927386b824ad58d"],["/tags/Java/index.html","3bff82d64fa8178bb9a799ffdf18796c"],["/tags/JavaScript/index.html","cf90c36672ab222edfb483ca9f349e1d"],["/tags/LICENSE/index.html","75a5e258da44e42faa34b047cae90b67"],["/tags/LeetCode/index.html","104f32f9754e68ff0c3526e4137518d3"],["/tags/Linux/index.html","c90b5362872da3ff6e3de985b5d82cb1"],["/tags/Lombok/index.html","12ccf9c290192fdd382527f8278e2816"],["/tags/MSYS2/index.html","6fb56f5c01cfc1d6cd47f2f533da3431"],["/tags/NoneBot/index.html","b0c612ea531f3d48bfb1af455bed25a2"],["/tags/Note/index.html","02e47000f5eee8aa930b3192cb4de9d0"],["/tags/OSINT/index.html","e95f365eafd07edf8c81c19f646e6163"],["/tags/PrintStream/index.html","e6baf9c8b2c302f805fb4dacad8c0fd8"],["/tags/Python/index.html","b6cde50dd41bb53ab8372ff1b4a7b8a9"],["/tags/README/index.html","e58961d470b7d719b6ab2f0a3f910c9e"],["/tags/RVO/index.html","71c2c959664dff85650750ce97d73842"],["/tags/Rocket-Loader/index.html","2c00a7023c5c4d985ecd8ae04bc901ed"],["/tags/STL/index.html","e262dd3c2847d3b90e47db8b0a80c2a0"],["/tags/Scoop/index.html","df351944a041d9860c0eee3efe86ced9"],["/tags/Swing/index.html","593a33c363c8874bb42e5dacda2ba7e4"],["/tags/Tomcat/index.html","023c8b49751bdd2c684fcf6cec1f8af7"],["/tags/UTF-8/index.html","df9e9ce139c90216f5226291a521ffc9"],["/tags/VSCode/index.html","7d25845f75a6f7e655b8aac9ba0c599e"],["/tags/blacklist/index.html","420ba60fce9eef92b5cda81d541c335b"],["/tags/blog/index.html","6447b8778343de10681c923ca1964fa3"],["/tags/builtin/index.html","09fafa0c7d6932c620c93eca38234e22"],["/tags/cloudflare/index.html","574ac0f2a068a1013243c48ca527bca6"],["/tags/giscus/index.html","a5f346bce7c9bd85925e4315d3c8fe57"],["/tags/gitalk/index.html","d03d05d56510dff2bb9a8e9e83b8b99d"],["/tags/index.html","b1bb9badc3a0d32432e2a6964d648015"],["/tags/tools/index.html","4549abbe964d1ddef990335bc425797a"],["/tags/utteranc/index.html","48d66fc68952269ab5e04118a171c10f"],["/tags/vue/index.html","fc66a95fc98b114721da5bb1e296b8ee"],["/tags/web/index.html","99c80205a1e5b18a19fca2332a6f563f"],["/tags/乱码/index.html","807e92080bacb652269b6af1c51528b9"],["/tags/二分套二分/index.html","bebed835cd4335fc94bd38075647a9c2"],["/tags/云计算/index.html","948ef17b974a04c70caa08f3d21bc79b"],["/tags/仓库管理/index.html","501aefe85f60ccd28ad4ba71a80bc8af"],["/tags/信息分析/index.html","8ded9237cb2057c6835b00c3e980e95b"],["/tags/划水/index.html","55b8541166ed659a2ae16a2668fa4231"],["/tags/包管理器/index.html","fa4424e642d233e3aa437de1ef2a30fa"],["/tags/图论/index.html","f3ce1344955363aaa538f361df413313"],["/tags/字符集/index.html","b94e8491899ff2a5b886150d50c3d605"],["/tags/应用/index.html","0509ae0a232c5017bff8688d7402a6d4"],["/tags/开源/index.html","36bf35809cea729cd8677bc08375f417"],["/tags/开源情报/index.html","b6cbffdc901115c2ac06bbc9375da555"],["/tags/悦读/index.html","5e9fec31e8df5a0f1ff6b5b5408766fc"],["/tags/技术总结/index.html","0b6f03e2bcf684cbb7408500f6a45952"],["/tags/操作系统/index.html","377281f4c6ae0d9a53ecd0d7860e8a64"],["/tags/数据合规/index.html","2ba29480789c43abf86424844b6f532e"],["/tags/数据结构/index.html","f4d8cf79d9fb9c3b1eecadd8f8a7b43f"],["/tags/数据结构与算法/index.html","1400c067bfa66f193d43a030f80d236b"],["/tags/新年/index.html","c64d21445917304bfe774f426a765562"],["/tags/服务器运维/index.html","d279971f7f09791a3948d65df15972e0"],["/tags/杂谈/index.html","917463be1cbcf555476a3c32abebe982"],["/tags/笔记/index.html","96be011d55083a9f62d3ca855d60328e"],["/tags/算法/index.html","fe92cb7a4bf682a426a4029b001384aa"],["/tags/线段树/index.html","8ba508b22097c4dc460528fcfe7f8e8b"],["/tags/编码/index.html","e7088e2051c8095117459bc3d227cbaf"],["/tags/编程技巧/index.html","1c431904ddb7756e2d8ab4b74754e59f"],["/tags/网络安全/index.html","1029a31a426923573a27d47c0e1abc31"],["/tags/网络流/index.html","36c616b60a77a995f35ecdf49aadfee1"],["/tags/职业发展/index.html","4b2e6b63def69023f7b8c37745dce2a3"],["/tags/萌新/index.html","4c3c66a1a669076598bc7f47b213220e"],["/tags/计算几何/index.html","bd1c8f38caa2ee8479867c41a1ac9db8"],["/tags/计算机组成原理/index.html","b9ecdfc07150534aeddceb2f198858bc"],["/tags/计算机网络/index.html","b6d861024965999bb70946814c301474"],["/tags/课程/index.html","924004fb01f71576d374c13f28695ddf"],["/tags/软件/index.html","a31797e3299d5875c02b8ee789e9b064"],["/tags/输出流/index.html","78dec2cca6a8198e64528d2d204a9765"],["/tags/镜像源/index.html","35c9e4ac112e772f0d5dd5fdd7e448d9"],["/tags/随机增量法/index.html","8924512e30a47807cfde97317e7d4b8c"],["/tags/隐私伦理/index.html","eda7d8c8565becbfecbfb71f1fa7c2f2"],["/tags/题解/index.html","b96198c4defb09eb5e833600f42dc4e3"],["/theme-sakura/index.html","30334f4c3dee429fa13584856ed6621b"],["/video/index.html","e40daf20dab6498705b173336a03261b"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fastly.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"gcore.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});





/* eslint-enable */
