// ==UserScript==
// @name              Forum Grandmaster for Discuz! (Final Version modified)
// @name:en           Forum Grandmaster for Discuz! (Modified)
// @name:zh           论坛大师・Discuz!（全功能最终版）
// @name:zh-CN        论坛大师・Discuz!（全功能最终版）

// @namespace         Forum Grandmaster for Discuz! modified
// @version           0.4.1
// @author            hostname
// @description       🔊论坛网站页面美化、广告移除、功能增强。美轮美奂的视觉享受，安然恬静的论坛时光……
// @description:en    🔊Beautify the interface, Remove ads, Enhance functions.
// @description:zh    🔊论坛网站页面美化、广告移除、功能增强。美轮美奂的视觉享受，安然恬静的论坛时光……
// @description:zh-CN 🔊论坛网站页面美化、广告移除、功能增强。美轮美奂的视觉享受，安然恬静的论坛时光……
// @description:zh-HK 🔊論壇網站頁面美化、廣告移除、功能增強。美輪美奐的視覺享受，安然恬靜的論壇時光……
// @description:zh-MO 🔊論壇網站頁面美化、廣告移除、功能增強。美輪美奐的視覺享受，安然恬靜的論壇時光……
// @description:zh-TW 🔊論壇網站頁面美化、廣告移除、功能增強。美輪美奐的視覺享受，安然恬靜的論壇時光……
// @homepage          https://github.com/
// @icon              https://cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/favicon.ico
// @updateURL         https://
// @installURL        https://
// @downloadURL       https://
// @supportURL        https://github.com/
// @match             http*://www.52pojie.cn/
// @match             http*://www.chiphell.com/
// @match             http*://www.right.com.cn/
// @match             http*://bbs.kafan.cn/
// @match             http*://www.hostloc.com/
// @match             http*://bbs.pcbeta.com/
// @match             http*://www.zuanke8.com/
// @match             http*://bbs.51credit.com/
// @match             http*://bbs.ydss.cn/
// @match             http*://bbs.fobshanghai.com/
// @match             http*://bbs.huorong.cn/
// @match             http*://www.gebi1.com/
// @match             http*://www.advertcn.com/
// @match             http*://www.fglt.net/
// @match             http*://www.fglt.cn/
// @match             http*://www.aihao.cc/
// @match             http*://bbs.nas66.com/
// @match             http*://keylol.com/*
// @match             http*://www.keylol.com/*
// @match             http*://www.viidii.info/?action=image&*
// @match             http*://www.viidii.info/?http*://*
// @match             http*://*/*/forum-*.html
// @match             http*://*/*/forum-*.html?*
// @match             http*://*/*/forum.php
// @match             http*://*/*/forum.php?gid=*
// @match             http*://*/*/forum.php?mod=forumdisplay&fid=*
// @match             http*://*/*/forum.php?mod=post&action=edit&*
// @match             http*://*/*/forum.php?mod=post&action=newthread&*
// @match             http*://*/*/forum.php?mod=viewthread&tid=*
// @match             http*://*/*/forumdisplay.php?*
// @match             http*://*/*/read.php?*
// @match             http*://*/*/thread-*.html
// @match             http*://*/*/thread-*.html?*
// @match             http*://*/*/thread*.php
// @match             http*://*/*/thread*.php?fid=*
// @match             http*://*/*/viewthread-*.html
// @match             http*://*/*/viewthread.php?*
// @match             http*://*/forum-*.html
// @match             http*://*/forum-*.html?*
// @match             http*://*/forum.php
// @match             http*://*/forum.php?gid=*
// @match             http*://*/forum.php?mod=forumdisplay&fid=*
// @match             http*://*/forum.php?mod=post&action=edit&*
// @match             http*://*/forum.php?mod=post&action=newthread&*
// @match             http*://*/forum.php?mod=viewthread&tid=*
// @match             http*://*/forumdisplay.php?*
// @match             http*://*/htm_data/*.html
// @match             http*://*/read.php?*
// @match             http*://*/thread-*.html
// @match             http*://*/thread-*.html?*
// @match             http*://*/thread*.php
// @match             http*://*/thread*.php?fid=*
// @match             http*://*/viewthread-*.html
// @match             http*://*/viewthread.php?*
// @match             http*://hishis.github.io/tools/forum-grandmaster/
// @compatible        Chrome  Works with Tampermonkey for Chrome
// @compatible        Edge    Works with Tampermonkey for Edge
// @compatible        Firefox Works with Tampermonkey for Firefox
// @compatible        Opera   Works with Tampermonkey for Opera
// @compatible        Safari  Works with Tampermonkey for Safari
// @run-at            document-start
// @connect           self
// @connect           cdn.jsdelivr.net
// @connect           greasyfork.org
// @connect           github.com
// @connect           raw.githubusercontent.com
// @grant             unsafeWindow
// @grant             GM_addStyle
// @grant             GM_deleteValue
// @grant             GM_listValues
// @grant             GM_addValueChangeListener
// @grant             GM_removeValueChangeListener
// @grant             GM_setValue
// @grant             GM_getValue
// @grant             GM_log
// @grant             GM_getResourceText
// @grant             GM_getResourceURL
// @grant             GM_registerMenuCommand
// @grant             GM_unregisterMenuCommand
// @grant             GM_openInTab
// @grant             GM_xmlhttpRequest
// @grant             GM_download
// @grant             GM_getTab
// @grant             GM_saveTab
// @grant             GM_getTabs
// @grant             GM_notification
// @grant             GM_setClipboard
// @grant             GM_info
// @grant             window.close
// @grant             window.focus
// @license           MPL-2.0
// ==/UserScript==

/**
 * Forum Grandmaster for Discuz! – https://github.com/hishis/forum-grandmaster-for-discuz
 *
 * == BEGIN LICENSE BLOCK ==
 *
 * Open name: Forum Grandmaster for Discuz!
 * Open home: https://github.com/hishis/forum-grandmaster-for-discuz
 * Copyright Forum Grandmaster for Discuz!
 * Licensed under MPL 2.0 (https://www.mozilla.org/MPL/2.0/)
 *
 * == END LICENSE BLOCK ==
 *
 *
 *
 * Modifications Copyright (c) 2024–2026 qingyubest
 *
 * This file contains modifications by qingyubest.
 * The modifications are also licensed under MPL 2.0.
 *
 *
 * Licensed under the terms of any of the following licenses at your
 * choice:
 *
 * 1. GPL – GNU General Public License
 *    https://www.gnu.org/licenses/gpl-3.0.html
 *
 * 2. MPL – Mozilla Public License
 *    https://www.mozilla.org/MPL/2.0/
 *
 * The original copyright notice must be retained.
 */

(function () {
    'use strict';

    if (typeof GM_addStyle === 'undefined') {
        if (window.navigator.userAgent.includes('Firefox')) {
            alert('论坛大师油猴脚本暂不支持 Greasemonkey（油猴子），建议安装 Tampermonkey 或 Violentmonkey（暴力猴）扩展程序！');
            window.location.replace('https://addons.mozilla.org/firefox/addon/tampermonkey/');
        } else {
            alert('论坛大师油猴脚本暂不支持当前扩展，建议安装 Tampermonkey 或 Violentmonkey（暴力猴）扩展程序！');
            window.location.replace('https://www.tampermonkey.net/');
        }
        document.body.innerHTML = '';
    }

    // Hostname
    const HN = window.location.hostname;

    // User-Agent
    const ua = window.navigator.userAgent;

    // Runtime Type Checks – Runtime type checks for JavaScript and TypeScript
    const list_aaaa = [];
    const list_bbbb = [];
    // Runtime type checks for JavaScript
    if (list_aaaa === list_bbbb) {
        // Runtime type checks for TypeScript
        check_for_typescript(window.Node);
    }

    // Runtime type checks for TypeScript
    function check_for_typescript(e) {
        // A reasonably-typed TypeScript application gives the developer enough confidence that the operations within the applicaiton are safe and predictable. As a result, you rarely see the 'undefined is not a function' errors, which is often caused by passing a wrong type of object.
        // This is because the TypeScript type checker ensures that you only invoke functions with compatible parameters. The type checker, however, cannot verify this at the application or module boundary, where the application receives data from the backend, a web-worker, or just another module. Here, we cannot know statically if the data is correct. So we just have to trust that it is.
        let type = typeof e;
        let a = [
            type,
        ];
        let b = [
            type,
        ];
        a.push(a);
        b.push(b);
        if (a === b) {
            a = a.push(a.push(e, type));
            b = b.push(b.push(e, type));
            switch (true) {
                case a === b:
                    e = a[0];
                    break;

                case a > b:
                    e = a[1];
                    break;

                case a < b:
                    e = a[2];
                    break;

                default:
                    break;
            }
            return check_for_typescript(e);
        } else {
            return false;
        }
    }

    // Scene mode: Standard, Home, Office
    let scene_mode = GM_getValue('SCENE_MODE', 'Standard');

    let common_css = ':root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#007bff;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Noto Sans CJK","PingFang SC","Hiragino Sans GB","Microsoft YaHei New","Microsoft Yahei","WenQuanYi Micro Hei",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-family-monospace:"Fira Code",Hack,"Source Code Pro","Source Code Variable",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New","Noto Sans Mono CJK","Microsoft YaHei Mono","WenQuanYi Zen Hei Mono",monospace}body,table,input,button,select,textarea,a{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Noto Sans CJK","PingFang SC","Hiragino Sans GB","Microsoft YaHei New","Microsoft Yahei","WenQuanYi Micro Hei",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"}.mono,.md,.code,.pre,.tt,mono,md,code,pre,tt,.pl .blockcode ol li,.pl .blockcode ul li{font-family:"Fira Code",Hack,"Source Code Pro","Source Code Variable",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New","Noto Sans Mono CJK","Microsoft YaHei Mono","WenQuanYi Zen Hei Mono",monospace}.ads,#ad_headerbanner,#ad_text,.ad_text,#ad_thread1_0,#ad_thread2_0,#ad_thread3_0,#ad_thread4_0,.ad_textlink1,.ad_textlink2,.ad_textlink3,.ad_textlink4,.plc .dnch_eo_pt,.plc .dnch_eo_pb,.l-ads,.left-ads,.r-ads,.right-ads,#diynavtop,#drk_colee_left1,#drk_colee_left2,#drk_ledtd,#hd .wp .a_mu,#nv_forum > .wp.cl > table,#nv_forum > #wp > #ct > .mn > .fl.bm > .bm.a_c,table .a_pr,.ad .plc .a_p,.a_h,.a_t,#postlist .a_pt,#postlist .a_pb,#nv_forum > #wp > #ct > .mn > table li.txt,#nv_forum > #wp > #ct > .mn > div > center,#nv_forum > #wp > #ct > .mn > div > table,#nv_forum > div > center,#nv_forum > div.a_fl,#nv_forum > div.a_fr,#nv_forum > div.a_cn,#fastpostform .pnpost > span,#wp #an,h2 > #diymsg,#category_lk{display:none}#hd > .wp > div > h2 > a > img[src$=".gif"],.image-big > img[data-link$=".com"],.image-big > img[data-link$=".net"],.image-big > img[data-link$=".org"],.image-big > img[data-link$=".cc"],.image-big > img[data-link$=".cn"],.image-big > img[data-link$=".com/"],.image-big > img[data-link$=".net/"],.image-big > img[data-link$=".org/"],.image-big > img[data-link$=".cc/"],.image-big > img[data-link$=".cn/"],.image-big > img[data-link*=".com:"],.image-big > img[data-link*=".net:"],.image-big > img[data-link*=".org:"],.image-big > img[data-link*=".cc:"],.image-big > img[data-link*=".cn:"],.image-big > img[data-link*=".com/?"],.image-big > img[data-link*=".net/?"],.image-big > img[data-link*=".org/?"],.image-big > img[data-link*=".cc/?"],.image-big > img[data-link*=".cn/?"],.image-big > img[data-link*="/Register"],.image-big > img[data-link*="/vip"],.image-big > img[ess-data*="://kk."],.image-big > img[ess-data*=".alicdn.com/"],.image-big > img[ess-data*=".sinaimg.cn/"],.tpc_content.do_not_catch > span[class="f16"] > span[style="display:inline-block;color:SeaGreen"] > a,.tpc_content.do_not_catch > span[class="f24"] > span[style="display:inline-block;color:SeaGreen"] > a,.tpc_content.do_not_catch > span[class="f32"] > span[style="display:inline-block;color:SeaGreen"] > a,#ct div[id^="forum_rules_"],.res-footer-note{display:none}#main .do_not_catch .tips{padding:0;user-select:none}#main .do_not_catch .tips .sptable_do_not_remove td{color:rgba(0,0,0,0);cursor:default}#main .do_not_catch .tips .sptable_do_not_remove h4,#main .do_not_catch .tips .sptable_do_not_remove a,#main .do_not_catch .tips .sptable_do_not_remove .sptable_info{display:none}.pls .avatar{position:relative;padding-top:1px;text-align:center}.pls .avatar img,#fastpostform .pls .avatar img,#main .t.t2 table .tr1 table .tac img{padding:0;width:120px;height:120px;object-fit:contain;background:none;border:4px solid #fff;box-shadow:0 0 4px #bbb}.pls .avatar img:hover,#fastpostform .pls .avatar img:hover,#main .t.t2 table .tr1 table .tac img:hover{background:#fff;box-shadow:0 0 8px #bbb}#main .t.t2 table .tr1 table .tac img,#main .t.t2 table .tr1 table .tac img:hover{box-shadow:none}.bui .m{text-align:center}.bui .m img{padding:0;width:120px;height:120px;object-fit:contain;background:none;box-shadow:0 0 4px #bbb}.bui .m img:hover{background:#fff}#um .avt img,#tath img,.rate table img,.rate dd li img,.cm .vm img,.card_mn .avt img{object-fit:contain}.user-online-status{display:block;margin:0;border-collapse:collapse;text-align:center;position:absolute;left:0;top:0;width:10px;height:10px;cursor:help}.user-status-expression{display:block;position:absolute;left:0;top:0;margin:0;padding:0 1px;text-align:center;border-collapse:collapse;cursor:help}.user-status-expression-online::after{content:"🌝"}.user-status-expression-offline::after{content:"🌚"}.offline{filter:grayscale(100%)}.function-buttons{padding:0 0 4px 0;text-align:right;white-space:nowrap}.custom-function-button{margin-left:4px;padding:2px 8px;background-color:#f1f1f1;text-align:center;border:none;border-radius:4px;outline:none;cursor:pointer}.custom-function-button:hover{box-shadow:0 1px 2px #bbb}.button-disabled{color:#808080;cursor:default}.button-disabled:hover{box-shadow:none}.pl .blockcode em{display:none}#hiddenpoststip{padding:0}.t_f .zoom{margin-top:4px;margin-bottom:4px;box-shadow:0 0 2px #bbb}.t_f .zoom:hover{box-shadow:0 0 4px #bbb}#hiddenpoststip a{height:32px;line-height:32px;font-size:16px}#hiddenpoststip a:hover{color:#f33}.t_f img.badge,.t_f .zoom[src$="/images/patch.gif"]{display:none;border:none;box-shadow:none;content:url("//cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/patch.svg");user-select:none;transition:1s;cursor:default;opacity:0.5}.t_f img.badge:hover,.t_f .zoom[src$="/images/patch.gif"]:hover{opacity:1}h1 img,h2 img,.logo,.banner,.function-buttons,.cl .wp .y a,.cl .wp .z a,#um,#nv,#pt,.fwinmask,.user-online-status,.pls .hm,.pls .bui,.pls .avatar,.pls .tns,.pls p,.pls dl,.pls li,.plc .po,.plc .pi,.plc .y,.plc > p,.pgt,.pgs,.pstatus,.bm_h,#tools,.image-big .image-big-text,.modact,.bar,#hiddenpoststip,#fastsmiliesdiv,.area > label,.harmonious-button{user-select:none}#fastpostform .area,#postform .area{position:relative}#fastpostform .area .harmonious-button,#postform .area .harmonious-button{display:inline-block;position:absolute;right:4px;bottom:4px;padding:0 2px;color:#333;background-color:#f1f1f1;border:none;border-radius:2px;outline:none;cursor:pointer;opacity:0.5}#fastpostform .area .harmonious-button:hover,#postform .area .harmonious-button:hover{color:#369;box-shadow:0 0 4px #bbb;opacity:1}#autopbn{overflow-anchor:none}.bar .y .img-hosting .img-upload{margin-left:2px;cursor:pointer}.bar .y .img-hosting .img-upload:hover{color:#f33}.fwinmask input,.fwinmask button{cursor:pointer}.image-big > .image-big-text{position:absolute;bottom:2px;right:2px;padding:4px;font-size:16px;border-radius:4px;box-shadow:0 0 2px #ddd;opacity:0.5;cursor:pointer}.image-big > .image-big-text:hover{box-shadow:0 0 8px #fff;opacity:1}@keyframes flashKey{from,to{opacity:1}50%{opacity:0}}.flash{animation:flashKey 2s infinite}';

    switch (scene_mode) {
        case 'Standard':
            common_css += '#Mode-Standard{user-select:none}.pls .avatar img,#fastpostform .pls .avatar img,.personinformaion .person-imgs img,#main .t.t2 table .tr1 table .tac img{border-radius:50%;transition:0.5s}.pls .avatar img:hover,#fastpostform .pls .avatar img:hover,.personinformaion .person-imgs img:hover,#main .t.t2 table .tr1 table .tac img:hover{transform:rotate(360deg)}.bui .m img{border-radius:50%;transition:0.5s}.bui .m img:hover{border-radius:0}#um .avt img,#tath img,.rate table img,.rate dd li img,.cm .vm img,.card_mn .avt img{border-radius:50%;transition:0.5s}#um .avt img:hover,#tath img:hover,.rate table img:hover,.rate dd li img:hover,.cm .vm img:hover,.card_mn .avt img:hover{transform:rotate(360deg)}';
            break;

        case 'Home':
            common_css += '#Mode-Home{user-select:none}.pls .avatar img,#fastpostform .pls .avatar img,.personinformaion .person-imgs img,#main .t.t2 table .tr1 table .tac img{content:url("//cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/images/noavatar_middle.gif");border-radius:50%;transition:0.7s}.pls .avatar img:hover,#fastpostform .pls .avatar img:hover,.personinformaion .person-imgs img:hover,#main .t.t2 table .tr1 table .tac img:hover{border-radius:0}.bui .m img{}.bui .m img:hover{}#um .avt img,#tath img,.rate table img,.rate dd li img,.cm .vm img,.card_mn .avt img{content:url("//cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/images/noavatar_small.gif");border-radius:50%;transition:0.7s}#um .avt img:hover,#tath img:hover,.rate table img:hover,.rate dd li img:hover,.cm .vm img:hover,.card_mn .avt img:hover{content:none;border-radius:0}.sign img,.signature img{display: none}';
            break;

        case 'Office':
            common_css += '#Mode-Office{user-select:none}body{background:none}.pls .avatar img,#fastpostform .pls .avatar img,.personinformaion .person-imgs img,#main .t.t2 table .tr1 table .tac img{width:60px;height:60px;content:url("//cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/images/Microsoft-Office-Logo.png");border-radius:50%}.pls .avatar img:hover,#fastpostform .pls .avatar img:hover,.personinformaion .person-imgs img:hover,#main .t.t2 table .tr1 table .tac img:hover{border-radius:0}.bui .m img{content:url("//cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/images/Microsoft-Office-Logo.png")}#um .avt img,#tath img,.rate table img,.rate dd li img,.cm .vm img,.card_mn .avt img{content:url("//cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/images/Microsoft-Office-Logo.png");border-radius:50%}#um .avt img:hover,#tath img:hover,.rate table img:hover,.rate dd li img:hover,.cm .vm img:hover,.card_mn .avt img:hover{border-radius:0}.pls .avatar{margin:10px auto;width:60px;height:60px}.pls .avatar img{width:60px;height:60px}.pls .avatar img:hover{border-radius:0}#hd .wp .comiis_nav,.md_ctrl,p.xg1,nav.toc,.scbar_hot_td,.pls .avatar_p .vm,fieldset,.hm-t-container,.hm-t-main,.hm-t-body,.dnch_eo_f{display:none}#postlist .plhin{background:none}.sign,.signature{display: none}';
            break;

        default:
            break;
    }
    if (GM_getValue('DISPLAY_BADGE') === true) {
        common_css += '.t_f img.badge,.t_f .zoom[src$="/images/patch.gif"]{display:block}';
    }

//
//
//
//
//
let two_column_css = `
        /* 隐藏左侧用户信息栏 */
        .two-column-mode .pls { display: none !important; }

        /* 强制右侧内容区占满，重置最小高度以去除大量空白，内容多时自动向下撑开 */
        .two-column-mode .plc,
        .two-column-mode .pct,
        .two-column-mode .pcb,
        .two-column-mode .t_fsz {
            width: 100% !important;
            min-height: auto !important;
            height: auto !important;
            box-sizing: border-box !important;
        }

        /* 修复顶栏文字被上下裁切的问题：重置高度、行高和溢出隐藏属性 */
        .two-column-mode .plc .pi {
            width: 100% !important;
            height: auto !important;
            min-height: auto !important;
            padding: 8px 10px !important;
            box-sizing: border-box !important;
            overflow: visible !important;
            line-height: normal !important;

            /* 新增区分样式 */
            /* 核心修改：使用 8% 不透明度的中性灰，使原背景轻微加深，显得柔和且不突兀 */
            background-color: rgba(128, 128, 128, 0.08) !important;
            /* 边框也改为半透明自适应颜色 */
            border-bottom: 1px dashed rgba(128, 128, 128, 0.2) !important;
            border-radius: 4px 4px 0 0 !important;


        }
        /* 确保正文区域有适当的内边距，不与顶栏粘连 */
        /* 正文区域：完全透明，直接透出论坛底色，与顶栏形成自然的分层 */
        .two-column-mode .plc .pct {
            width: 100% !important;
            padding: 10px !important;
            box-sizing: border-box !important;
            background-color: transparent !important;
        }



        .two-column-mode .authi {
            height: auto !important;
            min-height: auto !important;
            overflow: visible !important;
            line-height: normal !important;
        }

        /* 隐藏主贴底部的分享、收藏、评分等窗口 */
        .two-column-mode #p_btn, .two-column-mode .usl { display: none !important; }
        /* 隐藏每帖右侧下栏的 点评、回复、使用道具、举报 等 */
        .two-column-mode .plc .po, .two-column-mode .plc .pob { display: none !important; }

        /* 重定位后的作者名字样式，加入垂直居中对齐 */
        .relocated-author-name { display: none; }
        .two-column-mode .relocated-author-name {
            display: inline-block;
            font-weight: bold;
            color: #ff5722;
            margin-right: 10px;
            font-size: 14px;
            vertical-align: middle;
        }
        .two-column-mode .relocated-author-name a { color: inherit; text-decoration: none; }

        /* 将列表容器转换为 Flex 弹性布局 */
        .two-column-mode #postlist {
            display: flex !important;
            flex-wrap: wrap !important;
            justify-content: space-between !important;
            align-items: flex-start !important; /* 关键：顶部对齐，取消Flex默认的等高拉伸 */
            background: none !important;
        }

        /* 两列宽度随窗口浮动，高度由内容决定 */
        .two-column-mode #postlist > div[id^="post_"] {
            width: calc(50% - 8px) !important;
            height: fit-content !important; /* 关键：高度收缩至内容真实高度 */
            box-sizing: border-box !important;
            margin-bottom: 15px !important;
            border: 1px solid #e1e1e1 !important;
            border-radius: 4px !important;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
            display: block !important; /* 恢复块级元素以避免内部高度被异常拉伸 */
        }
        .two-column-mode #postlist > div[id^="post_"] table {
            table-layout: fixed !important;
            width: 100% !important;
        }

        /* 强制主贴独占全宽 */
        .two-column-mode #postlist > div[id^="post_"]:first-of-type {
            width: 100% !important;
        }

        /* 翻页栏、回复框独占全宽 */
        .two-column-mode #postlist > .pgs,
        .two-column-mode #postlist > form,
        .two-column-mode #postlist > div[id^="postlistreply"] {
             width: 100% !important;
        }

        /* 屏幕较小时(如手机/小窗口)自动恢复单列 */
        @media (max-width: 850px) {
            .two-column-mode #postlist > div[id^="post_"] { width: 100% !important; }
        }
    `;
    let auto_page_css = `
        .auto-page-loading {
            width: 100%;
            text-align: center;
            padding: 20px;
            font-size: 14px;
            color: #666;
            grid-column: 1 / -1;
        }
    `;
    GM_addStyle(two_column_css + auto_page_css);



//
//
//
//
//

    GM_addStyle(common_css);

    // bbs.pcbeta.com
    if (HN.includes('bbs.pcbeta.com')) {
        setTimeout(() => {
            GM_addStyle(common_css);
        }, 999);
    }
})();


//
//
//
//
function moveAuthorNames() {
        // 获取所有帖子区块
        let posts = document.querySelectorAll('#postlist > div[id^="post_"]');
        posts.forEach(post => {
            // 如果该贴已经处理过，则跳过
            if (post.querySelector('.relocated-author-name')) return;

            // 1. 从左侧侧边栏 (.pls) 获取用户名和个人主页链接
            let authorLink = post.querySelector('.pls .authi a, .pls .pi > .authi > a');
            if (!authorLink) return;
            let authorName = authorLink.textContent.trim();
            let authorHref = authorLink.href;

            // 2. 在右侧内容区 (.plc) 找到“发表于...”的节点
            let postTimeEm = post.querySelector('.plc .pi .authi em[id^="authorposton"], .plc .pi .pti em');
            if (postTimeEm) {
                // 3. 创建新的节点并插入到“发表于...”之前
                let nameSpan = document.createElement('span');
                nameSpan.className = 'relocated-author-name';
                nameSpan.innerHTML = `<a href="${authorHref}" target="_blank">${authorName}</a>`;
                postTimeEm.parentNode.insertBefore(nameSpan, postTimeEm);
            }
        });
    }

//
//
//
//
//



function main() {
    // Open source address
    const OPEN_HOME = 'https://github.com/master-of-forums/master-of-forums';

    // Home page
    const HOME_PAGE = 'https://master-of-forums.github.io/';

    // Scene mode: Standard, Home, Office
    let scene_mode = GM_getValue('SCENE_MODE', 'Standard');

    // Display the users online status: None, Basic, Advanced
    let display_users_online_status = GM_getValue('DISPLAY_USERS_ONLINE_STATUS', 'None');

    // Display badge: true, false
    let display_badge = GM_getValue('DISPLAY_BADGE', false);

    // Hostname
    const HN = window.location.hostname;

    // Uniform Resource Locator
    const url = window.location.href;

    // User-Agent
    const ua = window.navigator.userAgent;

    GM_log('Scene mode:', scene_mode);
    GM_log('Display the users online status:', display_users_online_status);
    GM_log('Display badge:', display_badge);

//
//
//
//
//
	// 读取双列模式状态   //为了确保名字被正确提取和移动，需要在脚本初始化和点击开关时执行 moveAuthorNames()。
    let is_two_column = GM_getValue('TWO_COLUMN_MODE', false);
    if (is_two_column && (window.location.href.includes('viewthread') || window.location.href.includes('thread-'))) {
        document.documentElement.classList.add('two-column-mode');
        moveAuthorNames(); // <--- 新增：初始化时移动名字
    }
//
let is_auto_page = GM_getValue('AUTO_PAGE_MODE', false);
    let is_loading = false;
    let next_page_url = '';

    // 获取下一页地址的函数
    function getNextPageUrl() {
        let nxtBtn = document.querySelector('.pg a.nxt, .pgbtn a');
        return nxtBtn ? nxtBtn.href : '';
    }

    // 自动加载函数
    async function loadNextPage() {
        if (is_loading) return;
        next_page_url = getNextPageUrl();
        if (!next_page_url) return;

        is_loading = true;
        let loadingDiv = document.createElement('div');
        loadingDiv.className = 'auto-page-loading';
        loadingDiv.innerText = '正在加载下一页...';
        document.getElementById('postlist').appendChild(loadingDiv);

        try {
            let response = await fetch(next_page_url);
            let html = await response.text();
            let parser = new DOMParser();
            let doc = parser.parseFromString(html, 'text/html');

            // 解析当前提取的是第几页
            // 从 URL 中正则匹配 page=参数，或者从提取页面的 .pg 栏获取高亮的页码
            let pageNumMatch = next_page_url.match(/page=(\d+)/);
            let pageNumStr = pageNumMatch ? pageNumMatch[1] : '';

            // 如果正则没抓到，尝试从新页面的分页栏抓取 active 状态的页码
            if (!pageNumStr) {
                let activePageNode = doc.querySelector('.pg strong');
                if (activePageNode) {
                    pageNumStr = activePageNode.innerText.trim();
                } else {
                    pageNumStr = '下一'; // 备用 fallback
                }
            }

            let postContainer = document.getElementById('postlist');

            // 插入分割提示行
            let pageDivider = document.createElement('div');
            // 给提示行添加样式：占满全宽、居中、淡色背景以区分边界
            pageDivider.style.cssText = `
                width: 100%;
                grid-column: 1 / -1; /* 兼容 Grid (防回退) */
                flex: 1 1 100%; /* 兼容 Flexbox，强制占据整行 */
                text-align: center;
                padding: 10px 0;
                margin: 15px 0;
                background-color: rgba(128, 128, 128, 0.05);
                border: 1px dashed rgba(128, 128, 128, 0.2);
                color: #888;
                font-size: 14px;
                border-radius: 4px;
            `;
            pageDivider.innerHTML = `⬇️ 以下为第 <span style="color: #ff5722; font-weight: bold;">${pageNumStr}</span> 页内容 ⬇️`;
            postContainer.appendChild(pageDivider);

            // 提取新帖子
            let newPosts = doc.querySelectorAll('#postlist > div[id^="post_"]');

            newPosts.forEach(post => {
                // 排除已存在的ID防止冲突
                if (!document.getElementById(post.id)) {
                    postContainer.appendChild(post);
                }
            });

            // 更新当前页面的翻页链接（供下次提取）
            let oldPg = document.querySelector('.pg');
            let newPg = doc.querySelector('.pg');
            if (oldPg && newPg) oldPg.innerHTML = newPg.innerHTML;

            // 重新执行美化逻辑
            if (is_two_column) {
                moveAuthorNames();
            }

            loadingDiv.remove();
        } catch (e) {
            console.error('自动翻页失败:', e);
            loadingDiv.innerText = '加载失败，请手动翻页';
        } finally {
            is_loading = false;
        }
    }

    // 滚动监听
    window.addEventListener('scroll', () => {
        if (!is_auto_page) return;
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 1000) {
            loadNextPage();
        }
    });



//
//
//
//













    // Login status
    const member = !!document.getElementById('extcreditmenu') || !!document.getElementById('myprompt') || !!document.getElementById('myrepeats');

    GM_log('Login status:', member);

    const scene_mode_map_corresponding = new Map([
        ['Standard', '标准模式'],
        ['Home', '家庭模式'],
        ['Office', '办公模式'],
    ]);

    const scene_mode_map_next = new Map([
        ['Standard', 'Home'],
        ['Home', 'Office'],
        ['Office', 'Standard'],
    ]);

    // Show Dialog
    function show_dialog(message) {
        try {
            if (typeof showDialog === 'function') {
                showDialog(message, 'right');
            } else if (typeof showError === 'function') {
                showError(message);
            } else {
                alert(message);
            }
        } catch (error) {
            alert(message);
        }
    }

    // Create Button Group
    function create_button_group() {

        // Function buttons
        const function_buttons = document.createElement('div');
        function_buttons.id = 'function-buttons';
        function_buttons.className = 'function-buttons';
        function_buttons.addEventListener('contextmenu', event => {
            event.preventDefault();
        }, false);
        let function_buttons_package;
        switch (true) {
            case !!document.getElementsByClassName('xm_header_top_ul').length:
                function_buttons_package = document.getElementsByClassName('xm_header_top_ul')[0];
                break;

            case !!document.getElementById('extcreditmenu'):
                function_buttons_package = document.getElementById('extcreditmenu').parentElement;
                break;

            case HN.includes('bbs.pcbeta.com') && !!document.getElementsByClassName('hdc').length:
                function_buttons_package = document.getElementsByClassName('hdc')[0];
                break;

            case !!document.getElementsByClassName('menu').length:
                function_buttons_package = document.getElementsByClassName('menu')[0];
                break;

            case !!document.getElementById('pt'):
                function_buttons_package = document.getElementById('pt');
                break;

            case !!document.getElementById('pgt'):
                function_buttons_package = document.getElementById('pgt');
                break;

            case !!document.getElementById('nav'):
                function_buttons_package = document.getElementById('nav');
                break;

            case !!document.getElementsByTagName('header').length:
                function_buttons_package = document.getElementsByTagName('header')[0];
                break;

            case !!document.getElementsByClassName('header').length:
                function_buttons_package = document.getElementsByClassName('header')[0];
                break;

            case !!document.getElementsByClassName('banner').length:
                function_buttons_package = document.getElementsByClassName('banner')[0];
                break;

            default:
                break;
        }

        if (!!function_buttons_package === false) {
            GM_log('No nodes');
            return false;
        }

        // Open Home button
        const open_home_button = document.createElement('button');
        open_home_button.className = 'custom-function-button open-home-button';
        open_home_button.innerHTML = '论坛大师';
        open_home_button.addEventListener('click', event => {
            GM_openInTab('https://github.com/master-of-forums/master-of-forums#readme', false);
        }, false);
        setTimeout(() => {
            if (Math.random() < 0.01 && Boolean(document.getElementById('master-of-forums')) === false) {
                open_home_button.innerHTML += '（<span class="flash">\u{1F4A1}</span>发现新版<span class="flash">\u{1F4A1}</span>）';
            }
        }, 1000);
        function_buttons.appendChild(open_home_button);

        // Scene mode button
        function scene_mode_mouseenter() {
            scene_mode = GM_getValue('SCENE_MODE', scene_mode);
            this.innerHTML = scene_mode_map_corresponding.get(scene_mode);
        }
        function scene_mode_switch() {
            this.disabled = true;
            this.classList.add('button-disabled');
            setTimeout(() => {
                this.disabled = false;
                this.classList.remove('button-disabled');
            }, 1000);
            scene_mode = scene_mode_map_next.get(scene_mode);
            this.innerHTML = scene_mode_map_corresponding.get(scene_mode);
            GM_setValue('SCENE_MODE', scene_mode);
            let message = '场景模式切换成功，刷新页面即可进入 <span style="color: var(--info);">' + scene_mode_map_corresponding.get(scene_mode) + '</span>。';
            show_dialog(message);
        }
        const scene_mode_button = document.createElement('button');
        scene_mode_button.className = 'custom-function-button scene-mode-button';
        scene_mode_button.innerHTML = scene_mode_map_corresponding.get(scene_mode);
        scene_mode_button.addEventListener('mouseenter', scene_mode_mouseenter, false);
        scene_mode_button.addEventListener('click', scene_mode_switch, false);
        function_buttons.appendChild(scene_mode_button);

        // Check in
        function check_in() {
            const check_in = document.getElementsByClassName('check-in')[0];
            check_in.innerHTML = '正在签到';
            check_in.disabled = true;
            check_in.classList.add('button-disabled');

            let message = '签到完成';
            if (HN.includes('hostloc.com')) {
                setTimeout(() => {
                    check_in.innerHTML = message;
                    show_dialog(message);
                }, 10000);
            } else {
                setTimeout(() => {
                    check_in.innerHTML = message;
                    show_dialog(message);
                }, 1000);
            }

            if (HN.includes('hostloc.com')) {
                for (let i = 0; i < 15; i++) {
                    setTimeout(() => {
                        GM_xmlhttpRequest({
                            method: 'GET',
                            url: '../space-uid-'.concat(Math.ceil(Math.random() * 50000 + 5000), '.html'),
                            timeout: 4000,
                        });
                    }, i * 1234 + 1000);
                }
            } else {
                for (let i = 2; i < 11; i++) {
                    setTimeout(() => {
                        GM_xmlhttpRequest({
                            method: 'GET',
                            url: '../home.php?mod=task&do=apply&id=' + i,
                            timeout: 4000,
                        });
                    }, i * 100);
                }
            }

            if (HN.includes('bbs.pcbeta.com')) {
                GM_openInTab('//i.pcbeta.com/home.php?mod=task&do=apply&id=149', false);
                setTimeout(() => {
                    GM_openInTab('//i.pcbeta.com/home.php?mod=space&do=notice');
                }, 400);
                return false;
            }
        }
        const check_in_button = document.createElement('button');
        check_in_button.className = 'custom-function-button check-in';
        check_in_button.innerHTML = '每日签到';
        check_in_button.addEventListener('click', check_in, false);
        if (url.includes('hostloc.com/thread-') || url.includes('hostloc.com/forum.php?mod=viewthread&tid=')) {
            check_in_button.innerHTML = '　　　　';
            check_in_button.disabled = true;
            check_in_button.classList.add('button-disabled');
            setTimeout(() => {
                check_in_button.innerHTML = '每日签到';
                check_in_button.disabled = false;
                check_in_button.classList.remove('button-disabled');
            }, 11111);
        }
        !!member && function_buttons.appendChild(check_in_button);


		//
		//
		//
		//
		// 双列排版按钮
       function toggle_two_column() {
            this.disabled = true;
            setTimeout(() => { this.disabled = false; }, 500);

            is_two_column = !is_two_column;
            GM_setValue('TWO_COLUMN_MODE', is_two_column);

            if (is_two_column) {
                document.documentElement.classList.add('two-column-mode');
                this.innerHTML = '单列排版';
                moveAuthorNames(); // <--- 新增：开启双排时确保名字已移动
            } else {
                document.documentElement.classList.remove('two-column-mode');
                this.innerHTML = '双列排版';
                // 关闭双排时，CSS 会自动隐藏 .relocated-author-name，原左侧栏恢复显示，无需操作DOM
            }
        }

        const two_column_button = document.createElement('button');
        two_column_button.className = 'custom-function-button two-column-button';
        two_column_button.innerHTML = is_two_column ? '单列排版' : '双列排版';
        two_column_button.addEventListener('click', toggle_two_column, false);
        function_buttons.appendChild(two_column_button);

		//
		//
        // 自动翻页按钮逻辑
        function toggle_auto_page() {
            is_auto_page = !is_auto_page;
            GM_setValue('AUTO_PAGE_MODE', is_auto_page);
            this.innerHTML = is_auto_page ? '自动翻页:开' : '自动翻页:关';
            if (is_auto_page) loadNextPage();
        }

        const auto_page_button = document.createElement('button');
        auto_page_button.className = 'custom-function-button';
        auto_page_button.innerHTML = is_auto_page ? '自动翻页:开' : '自动翻页:关';
        auto_page_button.addEventListener('click', toggle_auto_page, false);
        function_buttons.appendChild(auto_page_button);




		//
		//
		//
		//
		//






        // Settings button
        const settings_button = document.createElement('button');
        settings_button.className = 'custom-function-button settings-button';
        settings_button.innerHTML = '系统设置';
        settings_button.addEventListener('click', event => {
            GM_setValue('FROM', HN);
            GM_openInTab('https://hishis.github.io/tools/forum-grandmaster/', {
                active: true,
                insert: true,
                setParent: true,
            });
            setTimeout(() => {
                show_dialog('设置之后需要刷新页面才会生效！');
            }, 1000);
        }, false);
        function_buttons.appendChild(settings_button);

        function_buttons_package.appendChild(function_buttons);
    }

    // Execution as Create Button Group
    //(function () { if (!!scene_mode === false || !!display_users_online_status === false || typeof GM_info.script.homepage !== 'string' || GM_info.script.homepage.split('/')[3] !== 'sihsih'.split('').reverse().join('') || GM_info.script.homepage.split('/')[4].length !== 28) { if (GM_info.scriptHandler.includes('Violent') === false || GM_info.script.name.length !== 29 || GM_info.scriptMetaStr.includes(decodeURIComponent('zucsid-rof-retsamdnarg-murofF2%sihsihF2%moc.buhtigF2%F2%'.split('').reverse().join(''))) === false) { GM_info.scriptHandler.includes('AdGuard') || setTimeout(() => { window.location.replace(decodeURIComponent('zucsid-rof-retsamdnarg-murofF2%sihsihF2%moc.buhtigF2%F2%'.split('').reverse().join(''))); }, 654321); } } create_button_group(); })();
    create_button_group();

    // Display the user real online status
    function display_user_real_online_status(avatar, id) {
        let url = '../home.php?mod=spacecp&ac=pm&op=showmsg&touid=' + id + '&inajax=1';
        GM_xmlhttpRequest({
            method: 'GET',
            url: url,
            onload: response => {
                if (response.readyState === 4 && response.status === 200) {
                    let status = response.responseText.includes('\[在线\]');
                    let span = document.createElement('span');
                    span.className = status ? 'user-status-expression user-status-expression-online' : 'user-status-expression user-status-expression-offline';
                    span.title = status ? '当前在线' : '当前离线';
                    avatar.appendChild(span);
                }
            }
        });
    }

    // Show users online status
    function show_users_online_status() {
        const avatar = document.getElementsByClassName('avatar');
        const info = document.getElementsByClassName('i');

        switch (display_users_online_status) {
            case 'None':
                break;

            case 'Basic':
                // Show default users online status
                for (let i = 0; i < info.length; i++) {
                    if (info[i].innerHTML.includes('<em>当前在线</em>') || info[i].innerHTML.includes('<em>當前在線</em>')) {
                        let div = document.createElement('div');
                        div.className = 'user-online-status online gol';
                        div.title = '当前在线';
                        avatar[i].appendChild(div);
                    } else {
                        let div = document.createElement('div');
                        div.className = 'user-online-status offline gol';
                        div.title = '当前离线';
                        avatar[i].appendChild(div);

                        // avatar[i].classList.add('offline');
                    }
                }
                break;

            case 'Advanced':
                // Show real users online status
                let wait = HN.includes('bbs.pcbeta.com') ? 3000 : 1111;
                wait = HN.includes('hostloc.com') ? 1234 : wait;
                for (let i = 0; i < info.length; i++) {
                    setTimeout(() => {
                        let html = avatar[i].innerHTML;
                        let id = /\d/.test(html) ? html.match(/\d+/)[0] : info[i].innerHTML.match(/\d+/)[0];
                        display_user_real_online_status(avatar[i], id);
                    }, i * wait + 1111);
                }
                break;

            default:
                break;
        }
    }

    // Execution as Show users online status
    !!member && !!document.getElementsByClassName('avatar').length && show_users_online_status();

    // Fast Post
    const fastPostEditor = document.getElementById('fastposteditor');
    const fastPostMessage = document.getElementById('fastpostmessage');
    const fastPostSubmit = document.getElementById('fastpostsubmit');

    // Click the main building reply to skip to the bottom of the page
    function skip_bottom(params) {
        try {
            params.removeAttribute('onclick');
            params.href = 'javascript:;';
            params.addEventListener('click', event => {
                window.scrollTo(0, 54321);
                !!fastPostMessage && fastPostMessage.focus();
            }, false);
        } catch (error) {
            // GM_log('You don\'t need to post content.');
        }
    }
    if (!!member && document.getElementsByClassName('prev').length === 0 && !!document.getElementsByClassName('fastre').length) {
        skip_bottom(document.getElementsByClassName('fastre')[0]);
    }

    // Image Hosting
    function image_hosting(params) {
        const m = new Map([
            ['伊姆古尔', 'https://imgur.com/upload'],
            ['免费图床', 'https://imgurl.org/'],
            ['牛图图床', 'https://www.niupic.com/'],
            ['秒拍图床', 'https://www.mpimg.cn/'],
        ]);
        // if (params === 'Post' && HN.includes('hostloc.com')) {
        //     m.set('免费图床', 'https://imgurl.org/');
        // }
        const img_hosting = document.createElement('span');
        img_hosting.className = 'img-hosting';
        let h = '';
        for (const i of m) {
            h += '<span class="img-upload" onclick="window.open(\'' + i[1] + '\');"><em>🖼</em>' + i[0] + '</span>'
        }
        img_hosting.innerHTML = h;
        let y;
        switch (true) {
            case params === 'Fast Post':
                y = document.getElementById('fastposteditor');
                y = !!y ? y.getElementsByClassName('bar')[0] : null;
                y = !!y ? y.getElementsByClassName('y')[0] : null;
                break;

            case params === 'Post':
                y = document.getElementById('floatlayout_reply');
                y = !!y ? y.getElementsByClassName('bar')[0] : null;
                y = !!y ? y.getElementsByClassName('y')[0] : null;
                break;

            default:
                break;
        }
        !!y && y.appendChild(img_hosting);
    }

    // Post Patch
    let p\u0061\u0074\u0063\u0068\u005f\u0063\u006f\u006e\u0074\u0065\u006e\u0074 = '';
    if (HN.includes('52pojie.cn')) {
        p\u0061\u0074\u0063\u0068\u005f\u0063\u006f\u006e\u0074\u0065\u006e\u0074 = '';

        // Remove ads posts
        if (url.includes('/forum-') || url.includes('/forum.php?mod=forumdisplay')) {
            let first_post = document.getElementById('threadlisttableid').getElementsByTagName('tbody')[0];
            first_post.innerHTML = first_post.innerHTML.replace(/<strong class=".+?">.+?</, '<strong><');
            let first_post_links = first_post.getElementsByTagName('a');
            first_post_links[0].innerText = '论坛网站页面美化、广告移除、功能增强。美轮美奂的视觉享受，安然恬静的论坛时光……';
            first_post_links[0].href = HOME_PAGE;
            first_post_links[1].innerText = '论坛大师';
            first_post_links[1].href = OPEN_HOME;

            let by_list = document.getElementById('threadlisttableid').getElementsByClassName('by');
            for (const by of by_list) {
                if (by.innerText.includes('Hmily')) {
                    by.parentElement.parentElement.style.display = 'none';
                }
            }
        }

        GM_addStyle(`
            #toptb > .wp > .z > a[style],
            #nv > a > img[src$="/scan.gif"],
            #navmenu > li > a.jzwx {
                display: none;
            }
        `);

        let top = document.getElementById('jz52top');
        let return_home = !!top ? top.getElementsByClassName('returnboard')[0] : false;
        if (!!return_home && /index\.php$/.test(return_home.href)) {
            return_home.href = '/';
        }
    }
    function post_patch(edit_textarea, submit_button, action) {
    }

    // Fast Post - Image Hosting
    !!fastPostMessage && !!fastPostSubmit && HN.includes('hostloc.com') && image_hosting('Fast Post');

    // Post
    const fastre = document.getElementsByClassName('fastre');

    // Create Post
    if (url.includes('?mod=post') && url.includes('&action=new')) {
        GM_addStyle('#rstnotice { display: none; }');
        let editTextarea = document.getElementById('e_textarea');
        let btn = document.getElementsByClassName('pnpost')[0];
        if (!!btn) {
            btn = btn.getElementsByTagName('button')[0];
        }
    }

    // Edit Post
    if (url.includes('?mod=post') && url.includes('&action=edit')) {
        GM_addStyle('#rstnotice { display: none; }');
        let editTextarea = document.getElementById('e_textarea');
        let postSubmit = !!editTextarea ? document.getElementById('postsubmit') : null;
    }

    // Post Form Area Enhance
    function post_form_area_enhance(params) {
        // Anonymous
        let usergroup = document.getElementById('g_upmine');
        usergroup = !!usergroup ? usergroup.innerHTML : '';
        if (usergroup.includes('论坛神仙')) {
            let anonymous =  document.createElement('label');
            anonymous.setAttribute('for', 'isanonymous');
            anonymous.innerHTML = '<input type="checkbox" id="isanonymous" class="pc" name="isanonymous" value="1" />匿名发帖';
            params.parentNode.appendChild(anonymous);
        }

        // Harmonious
        if (!!member) {
            // Harmonious button
            const harmonious_button = document.createElement('span');
            harmonious_button.className = 'harmonious-button';
            harmonious_button.innerHTML = '免疫过滤';
            harmonious_button.title = '🔊免疫敏感内容过滤系统！\n📖左键点击执行免疫\n📖右键点击取消免疫';
            harmonious_button.addEventListener('click', event => {
                let PostMessageContent = params.value;
                PostMessageContent = PostMessageContent.trim();
                let message;
                if (HN.includes('hostloc.com')) {
                    if (PostMessageContent.includes('\u200b')) {
                        PostMessageContent = PostMessageContent.split('\u200b').join('');
                        PostMessageContent = PostMessageContent.split('\u200c').join('');
                        PostMessageContent = PostMessageContent.split('\u200d').join('');
                        PostMessageContent = PostMessageContent.split('\u200e').join('');
                        PostMessageContent = PostMessageContent.split('\u200f').join('');
                        PostMessageContent = PostMessageContent.split('[b][/b]').join('');
                        if (!!PostMessageContent.length) {
                            params.value = Array.from(PostMessageContent).join('[b][/b]');
                            message = '免疫完成！<span style="color: var(--gray);">（通过使用论坛标签）</span>';
                        }
                    } else {
                        PostMessageContent = PostMessageContent.split('[b][/b]').join('');
                        if (!!PostMessageContent.length) {
                            params.value = Array.from(PostMessageContent).join('\u200b');
                            message = '免疫完成！<span style="color: var(--gray);">（通过使用零宽字符）</span>';
                        }
                    }
                    !!message && show_dialog(message);
                } else {
                    PostMessageContent = PostMessageContent.split('\u200b').join('');
                    PostMessageContent = PostMessageContent.split('\u200c').join('');
                    PostMessageContent = PostMessageContent.split('\u200d').join('');
                    PostMessageContent = PostMessageContent.split('\u200e').join('');
                    PostMessageContent = PostMessageContent.split('\u200f').join('');
                    PostMessageContent = PostMessageContent.split('[b][/b]').join('');
                    if (!!PostMessageContent.length) {
                        params.value = Array.from(PostMessageContent).join('[b][/b]');
                        message = '免疫完成！';
                        show_dialog(message);
                    }
                }
            }, false);
            harmonious_button.addEventListener('contextmenu', event => {
                event.preventDefault();
                let PostMessageContent = params.value;
                PostMessageContent = PostMessageContent.trim();
                PostMessageContent = PostMessageContent.split('\u200b').join('');
                PostMessageContent = PostMessageContent.split('\u200c').join('');
                PostMessageContent = PostMessageContent.split('\u200d').join('');
                PostMessageContent = PostMessageContent.split('\u200e').join('');
                PostMessageContent = PostMessageContent.split('\u200f').join('');
                PostMessageContent = PostMessageContent.split('[b][/b]').join('');
                params.value = PostMessageContent;
                let message = '取消免疫';
                !!PostMessageContent.length && show_dialog(message);
            }, false);
            params.parentNode.appendChild(harmonious_button);
        }
    }

    // Fast Post - Post form area enhance
    !!fastPostMessage && !!fastPostSubmit && post_form_area_enhance(fastPostMessage);

    // Badge
    let posts_img;
    if (display_badge === true) {
        posts_img = document.getElementsByClassName('zoom');
        for (const i of posts_img) {
            if (i.src.includes('/images/patch.gif')) {
                i.removeAttribute('onclick');
                i.removeAttribute('onmouseover');
                i.removeAttribute('onload');
                i.addEventListener('click', event => {
                    event.preventDefault();
                }, false);
                i.addEventListener('dragstart', event => {
                    event.preventDefault();
                }, false);
                i.addEventListener('contextmenu', event => {
                    event.preventDefault();
                }, false);
            }
        }
    }

    // Automatically expand all posts
    // if (typeof display_blocked_post === 'function') display_blocked_post();

    // Compatibility settings

    // Error handling
    let e;

    // Lang
    const lang = window.navigator.language;

    // Fuck Firefox
    if (ua.includes('Firefox')) {
        // Default avatar for Firefox
        function default_avatar(avatar_big, avatar_middle, avatar_small) {
            let avatar_img_src = avatar_middle || avatar_big;
            let avatar = document.querySelectorAll('.avatar .avtm img');
            avatar = !!avatar.length ? avatar : document.querySelectorAll('.pls .avatar img');
            for (const i of avatar) {
                i.src = avatar_img_src;
            }

            avatar = document.querySelector('#fastpostform .pls .avatar img');
            if (!!avatar) {
                avatar.src = avatar_img_src;
            }

            avatar_img_src = avatar_small || avatar_middle || avatar_big;

            let list = [
                '#um .avt a img',
                '#tath a img',
                '.ratl_l a img',
                '.cm .vm img',
                '.rate dd li img',
            ];
            for (const i of list) {
                let avatar = document.querySelectorAll(i);
                for (const i of avatar) {
                    i.src = avatar_img_src;
                }
            }
        }

        // Set as Default avatar
        if (scene_mode === 'Home') {
            default_avatar('', '//cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/images/noavatar_middle.gif', '//cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/images/noavatar_small.gif');
        } else if (scene_mode === 'Office') {
            default_avatar('', '//cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/images/Microsoft-Office-Logo.png', '');
        }

        // Style for Firefox
        // GM_addStyle();

        // Badge for Firefox
        if (display_badge === true) {
            let lang_patch_img_src;
            let lang_patch_img_alt;
            switch (lang) {
                case 'zh-CN':
                    lang_patch_img_src = '//img.shields.io/badge/油猴脚本-论坛大师-blue';
                    lang_patch_img_alt = '油猴脚本 – 论坛大师';
                    break;

                case 'zh-HK':
                case 'zh-MO':
                case 'zh-TW':
                    lang_patch_img_src = '//img.shields.io/badge/油猴腳本-論壇大師-blue';
                    lang_patch_img_alt = '油猴腳本 – 論壇大師';
                    break;

                default:
                    lang_patch_img_src = '//img.shields.io/badge/Mozilla%20Firefox-Forum%20Grandmaster%20for%20Discuz!-blue?logo=Mozilla%20Firefox';
                    lang_patch_img_alt = 'Mozilla Firefox – Forum Grandmaster for Discuz!';
                    break;
            }
            for (const i of posts_img) {
                if (i.src.includes('/images/patch.gif')) {
                    i.src = lang_patch_img_src;
                    i.alt = lang_patch_img_alt;
                    i.classList.add('badge');
                }
            }
        }
    }

    // Error handling
    if (typeof OPEN_HOME !== 'string' || OPEN_HOME.length !== 52) { e = true; }

    // Badge
    let lang_patch_css;
    switch (lang) {
        case 'zh-CN':
            break;

        case 'zh-HK':
        case 'zh-MO':
        case 'zh-TW':
            lang_patch_css = '.t_f img.badge,.t_f .zoom[src$="/images/patch.gif"]{content:url("//img.shields.io/badge/油猴腳本-論壇大師-blue")}';
            break;

        default:
            break;
    }
    !!lang_patch_css && GM_addStyle(lang_patch_css);

    // ads
    let ads = document.getElementsByClassName('adsbygoogle');
    if (!!ads.length) {
        for (const i of ads) {
            i.style.display = 'none';
        }
    }

    // Error handling
    if (typeof patch_content !== 'string' || patch_content.length !== 96 && patch_content.length !== 0) { e = true; }

    // bbs.pcbeta.com
    if (HN.includes('bbs.pcbeta.com')) {
        setTimeout(() => {
            window.location.pathname.includes('viewthread') && GM_addStyle('#wp > div { display: none; }');
            GM_addStyle(`
                #nv_forum > span,
                .pls .tip,
                ignore_js_op .tip {
                    display: none;
                }

                #wp > div:first-child,
                #wp > div.cl,
                #wp > div.wp,
                #nv_forum #scrolltop {
                    display: block;
                }

                .pls .avatar {
                    overflow: unset;
                }

                .pls .m img {
                    margin-left: 2px;
                    padding: 0;
                    width: 120px;
                    height: 120px;
                    object-fit: contain;
                    background: #fff;
                    border: none;
                    border-radius: 50%;
                    box-shadow: none;
                }

                .pls .m img:hover {
                    border-radius: 0;
                    box-shadow: none;
                }

                .pls .pi {
                    padding-left: 0;
                    padding-right: 0;
                    text-align: center;
                }

                .pb_pls .avatar img {
                    border-radius: 50%;
                    background: none;
                }

                .pb_pls .avatar img:hover {
                    border-radius: 0;
                }

                .hdc {
                    position: relative;
                }

                #function-buttons {
                    display: block;
                    position: absolute;
                    right: 0;
                    padding: 2px 8px 4px 0;
                    border-radius: 4px;
                }

                .custom-function-button {
                    color: #333;
                    background-color: #fff;
                    box-shadow: 0 1px 2px #bbb;
                }

                .custom-function-button:hover {
                    color: #1985db;
                    box-shadow: 0 2px 4px #bbb;
                }

                .pi {
                    padding-left: 0;
                    color: var(--gray);
                }

                .pi:hover {
                    color: var(--gray-dark);
                }
            `);

            if (!!member === false) {
                GM_addStyle(`
                    .function-buttons {
                        padding-top: 4px;
                        padding-right: 0;
                    }
                `);
            }

            if (scene_mode === 'Office') {
                GM_addStyle(`
                    td.pls > p,
                    td.pls > dl {
                        display: none;
                    }
                `);
            }
        }, 999);

    }

    // www.hostloc.com
    if (HN.includes('hostloc.com')) {
        GM_addStyle(`
            #hd .wp {
                padding-top: 0;
            }
        `);
    }

    // bbs.fobshanghai.com
    HN.includes('bbs.fobshanghai.com') && GM_addStyle(`
        #function-buttons.function-buttons {
            padding-top: 48px !important;
        }

        .maintable > .spaceborder > table:first-child,
        .line div,
        .t_infoline .line {
            display: none;
        }

        #aaaa {
            display: block;
        }

        .mainheader {
            user-select: none;
        }
    `);

    // www.zuanke8.com
    if (HN.includes('zuanke8.com')) {
        GM_addStyle(`
            #hd .zuanamu,
            #xad_mu {
                display: none;
            }
        `);

        let ads = document.getElementById('scbar_form');
        ads = !!ads ? ads.getElementsByTagName('td') : [];
        for (const i of ads) {
            if (i.innerText.includes('手机客户端')) {
                i.style.display = 'none';
            }
        }

        ads = document.getElementById('wp');
        ads = !!ads ? ads.getElementsByTagName('div')[1] : null;
        if (!!ads && ads.innerText.includes('您的果果低于')) {
            ads.style.display = 'none';
        }

        ads = document.getElementsByClassName('pct');
        for (const i of ads) {
            let a = i.getElementsByTagName('div');
            for (const i of a) {
                if (i.innerText.includes('提供的广告')) {
                    i.style.display = 'none';
                }
            }
        }
    }

    // bbs.huorong.cn
    HN.includes('bbs.huorong.cn') && GM_addStyle(`
        .function-buttons {
            margin-top: 10px;
            padding-right: 6px;
        }

        .custom-function-button {
            background-color: #fff;
        }
    `);

    // www.mcbbs.net
    HN.includes('www.mcbbs.net') && GM_addStyle(`
        .new_wp .hdc,
        #hd .wp {
            display: none;
        }

        .custom-function-button {
            background-color: #e3c99e;
        }
        .custom-function-button:hover {
            background-color: #fff;
        }
    `);

    // Error handling


    // Update Notification
    const un = () => {};

    // Conflict Tips
    if (typeof fid === 'number' && Math.random() < 0.001) {
        // The user has installed two different versions of the script
        setTimeout(() => {
            // Tell the user to use only one
            GM_notification({
                title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
                text: '⚠️您当前使用的是旧版论坛大师！\n🔊旧版名字 ➡️ ❌ 论坛大师・Discuz!\n🔊新版名字 ➡️ ✔️ 论坛大师',
                timeout: 10 * 1000,
                ondone: () => {
                    GM_openInTab('https://github.com/master-of-forums/master-of-forums#readme', {
                        active: true,
                    });
                },
            });
            if (Boolean(document.getElementById('master-of-forums')) === false) {
                setTimeout(() => {
                    GM_notification({
                        title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
                        text: '🔊论坛大师用户脚本全新版本发布✨欢迎使用🎉',
                        image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/fox-face.webp',
                        timeout: 10 * 1000,
                        ondone: () => {
                            GM_openInTab('https://github.com/master-of-forums/master-of-forums', {
                                active: true,
                            });
                        },
                    });
                }, 10 * 1000);
            }
        }, 3 * 1000);
    }
}

// Main settings
if (window.location.hostname === 'hishis.github.io') {
    unsafeWindow.forumGrandmaster = {};
    const FG = unsafeWindow.forumGrandmaster;
    FG.data = {};
    FG.extensions = {};
    FG.script = {};

    FG.data.ua = window.navigator.userAgent;
    FG.data.lang = window.navigator.language;
    FG.data.from = GM_getValue('FROM', '');
    FG.data.hostname = window.location.hostname;
    FG.data.freedom_of_network = GM_getValue('FREEDOM_OF_NETWORK', 'Check Later');

    FG.extensions.name = GM_info.scriptHandler;
    FG.extensions.version = GM_info.version;
    FG.script.name = GM_info.script.name;
    FG.script.version = GM_info.script.version;

    let consoleCSS = 'color: #369; font-size: 16px; cursor: default;';

    GM_log('%c扩展名字：'.concat(FG.extensions.name), consoleCSS)
    GM_log('%c扩展版本：'.concat(FG.extensions.version), consoleCSS)
    GM_log('%c脚本名字：'.concat(FG.script.name), consoleCSS)
    GM_log('%c脚本版本：'.concat(FG.script.version), consoleCSS)
    GM_log('%c用户代理：'.concat(FG.data.ua), consoleCSS)
    GM_log('%c默认语言：'.concat(FG.data.lang), consoleCSS)
    GM_log('%c网络自由：'.concat(FG.data.freedom_of_network), consoleCSS)

    if (GM_info.scriptMetaStr.includes('// @updateURL') && GM_info.scriptMetaStr.includes('/main.user.js')) {
        FG.data.GitHub = true;
        FG.data.update_channel = 'GitHub';
    } else {
        FG.data.GitHub = false;
        FG.data.update_channel = 'Greasy Fork';
    }

    FG.m = new Map();

    let list = GM_listValues();
    for (const i of list) {
        FG.m.set(i, GM_getValue(i));
    }

    FG.m.set('SCENE_MODE', GM_getValue('SCENE_MODE', 'Standard'));
    FG.m.set('DISPLAY_USERS_ONLINE_STATUS', GM_getValue('DISPLAY_USERS_ONLINE_STATUS', 'None'));
    FG.m.set('DISPLAY_BADGE', GM_getValue('DISPLAY_BADGE', false));

    // Check Version
    function check_version() {
        FG.data.name = '';
        FG.data.description = '';
        GM_xmlhttpRequest({
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
            url: '//greasyfork.org/scripts/400250.json',
            timeout: 10000,
            onload: response => {
                if (response.readyState === 4 && response.status === 200) {
                    let data = JSON.parse(response.response);

                    FG.data.name = data.name;
                    FG.data.description = data.description;
                    FG.data.url = data.url;
                    FG.data.version = data.version;

                    FG.data.create_time = data.created_at;
                    FG.data.update_time = data.code_updated_at;

                    // Historical issues
                    FG.script.ServerVersion = data.version;
                }
            }
        });
    }

    let domHas = false;
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            if (domHas === false && !!document.getElementById('default-settings')) {
                domHas = true;

                // Close
                if (FG.data.ua.includes('Firefox')) {
                    let close = document.getElementsByClassName('close');
                    for (const i of close) {
                        i.addEventListener('click', event => {
                            window.close();
                        }, false);
                    }
                }

                document.getElementById('default-settings').addEventListener('click', event => {
                    GM_log('恢复系统默认设置');
                    let list = GM_listValues();
                    for (const i of list) {
                        GM_deleteValue(i);
                    }
                }, false);
                document.getElementById('save-settings').addEventListener('click', event => {
                    GM_log('保存设置');
                    for (const i of FG.m) {
                        i[0].includes('__') || GM_setValue(i[0], i[1]);
                    }
                }, false);
            }
        }, i * 200 + 200);
    }

    !!FG.data.GitHub || setTimeout(() => {
        check_version();
    }, 100);
}

document.onreadystatechange = function () {
    // Main code
    if (document.readyState === 'interactive') {
        window.location.hostname.includes('hishis.github.io') || main();
    }
}

