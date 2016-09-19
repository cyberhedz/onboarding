<!DOCTYPE html>
<!-- saved from url=(0046)https://ide.c9.io/learnwithcolt/webdevbootcamp -->
<html class=" has_apf"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    <title>webdevbootcamp - Cloud9</title>
    
    <link rel="shortcut icon" type="image/x-icon" href="https://ide.c9.io/favicon.ico">
    <link rel="icon" type="image/x-icon" href="https://ide.c9.io/favicon.ico">
<style>html.fulliframe, body.fulliframe {        overflow: hidden;        margin: auto;        height: 100%;        width: 100%;    }</style><script type="text/javascript" async="" src="./campground.js_files/mixpanel-2-latest.min.js"></script><script type="text/javascript" async="" src="./campground.js_files/2yclr9vh"></script><script type="text/javascript" async="" src="./campground.js_files/analytics.js"></script><script type="text/javascript" async="" src="./campground.js_files/analytics.min.js"></script><script src="./campground.js_files/default-ro.js" crossorigin="true"></script><style id="ace_editor.css">
/*# sourceURL=ace/css/ace_editor.css */</style><style id="ace_tree">
/*# sourceURL=ace/css/ace_tree */</style><style id="ace_tree-light">
/*# sourceURL=ace/css/ace_tree-light */</style><style type="text/css"></style><style>#c9_ide_restore {
  display: none;
  z-index: 1000000;
  position: absolute;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
#c9_ide_restore .timeout a {
  color: #FFDE75;
  text-decoration: none;
}
#c9_ide_restore .timeout {
  position: relative;
  background: #DA7A30;
  z-index: 10000000;
  color: white;
  padding: 5px;
  border-radius: 3px;
  margin: 10px;
  text-align: center;
  display: none;
}
#restoring {
  font-style: normal;
  height: 100%;
  width: 100%;
  position: fixed;
  text-align: center;
  z-index: 100000;
  left: 0;
  top: 0;
  background: white url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/loadingbgrepeat.png");
  background-size: 1px 8px;
}
.dark #restoring {
  background: black url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/loadingbgrepeat_dark.png");
  background-size: 1px 8px;
}
#restoring .loading-progress {
  font-size: 31px;
  color: #4A8532;
  height: 37px;
  position: relative;
  margin: 252px 0 0 0;
  top: 30%;
}
#restoring .loading-msg {
  color: #717171;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 58px 0 10px;
}
#restoring .loading-details {
  margin: 3px 0 0 0;
  font-size: 14px;
  color: #858E91;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
}
.stickynote {
  position: absolute;
  top: 30%;
  left: 50%;
  margin: 0px -261px;
  z-index: 10000000;
  -webkit-transform: rotate(2deg);
  -moz-transform: rotate(2deg);
  -o-transform: rotate(2deg);
  -ms-transform: rotate(2deg);
  transform: rotate(2deg);
}
.stickynote.casual {
  bottom: 50px;
  right: 50px;
  left: auto;
  top: auto;
  margin: 0;
}
.stickynote .paper {
  color: black;
  width: 284px;
  background: #FFDE75;
  padding: 25px 20px 10px 20px;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.12);
  font-size: 15px;
  text-align: left;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.stickynote strong {
  font-size: 17px;
}
.stickynote a.restore-upsell {
  text-decoration: none;
  display: inline-block;
  padding: 5px 10px 8px 10px;
  background: #39A6D7;
  border-radius: 5px;
  color: white;
  margin-bottom: -10px;
}
.stickynote a.restore-upsell:hover {
  background: #0FB6FF;
}
.stickynote .tape {
  position: absolute;
  top: -15px;
  right: 80px;
  width: 130px;
  height: 35px;
  background-color: rgba(255, 255, 255, 0.6);
  border-left: 1px dashed rgba(0, 0, 0, 0.1);
  border-right: 1px dashed rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 0px 1px 0px rgba(204, 204, 204, 0.28);
  -moz-box-shadow: 0px 0px 1px 0px rgba(204, 204, 204, 0.28);
  box-shadow: 0px 0px 1px 0px rgba(204, 204, 204, 0.28);
  -webkit-transform: rotate(-2deg) skew(0,0) translate(0%,-5px);
  -moz-transform: rotate(-2deg) skew(0,0) translate(0%,-5px);
  -o-transform: rotate(-2deg) skew(0,0) translate(0%,-5px);
  -ms-transform: rotate(-2deg) skew(0,0) translate(0%,-5px);
  transform: rotate(-2deg) skew(0,0) translate(0%,-5px);
}
.stickynote .left-shadow {
  width: 140px;
  height: 140px;
  bottom: -5px;
  left: -12px;
  position: absolute;
  z-index: -6;
  display: inline-block;
  -webkit-box-shadow: -10px -10px 10px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: -10px -10px 10px rgba(0, 0, 0, 0.12);
  box-shadow: -10px -10px 10px rgba(0, 0, 0, 0.12);
  -webkit-transform: scale(1) rotate(274deg) translate(20px, 25px) skew(9deg, 0deg);
  -moz-transform: scale(1) rotate(274deg) translate(20px, 25px) skew(9deg, 0deg);
  -o-transform: scale(1) rotate(274deg) translate(20px, 25px) skew(9deg, 0deg);
  -ms-transform: scale(1) rotate(274deg) translate(20px, 25px) skew(9deg, 0deg);
  transform: scale(1) rotate(274deg) translate(20px, 25px) skew(9deg, 0deg);
}
.stickynote .right-shadow {
  width: 140px;
  height: 140px;
  bottom: -13px;
  right: -4px;
  position: absolute;
  z-index: -6;
  display: inline-block;
  -webkit-box-shadow: -10px -10px 10px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: -10px -10px 10px rgba(0, 0, 0, 0.12);
  box-shadow: -10px -10px 10px rgba(0, 0, 0, 0.12);
  -webkit-transform: scale(1) rotate(184deg) translate(20px, 25px) skew(9deg, 0deg);
  -moz-transform: scale(1) rotate(184deg) translate(20px, 25px) skew(9deg, 0deg);
  -o-transform: scale(1) rotate(184deg) translate(20px, 25px) skew(9deg, 0deg);
  -ms-transform: scale(1) rotate(184deg) translate(20px, 25px) skew(9deg, 0deg);
  transform: scale(1) rotate(184deg) translate(20px, 25px) skew(9deg, 0deg);
}
@-webkit-keyframes animate-stripes {
  to {
    background-position: 0 0;
  }
  from {
    background-position: 44px 0;
  }
}
@-moz-keyframes animate-stripes {
  to {
    background-position: 0 0;
  }
  from {
    background-position: 36px 0;
  }
}
.ui-progress-bar {
  position: relative;
  width: 240px;
  margin: 15px auto 10px;
  height: 8px;
  background-color: rgba(157, 167, 171, 0.42);
  -webkit-border-radius: 10px;
  -webkit-background-clip: padding-box;
  -moz-border-radius: 10px;
  -moz-background-clip: padding;
  border-radius: 10px;
  background-clip: padding-box;
}
.ui-progress-bar.blue .ui-progress {
  background-color: #339BB9!important;
  border: 1px solid #287a91;
}
.ui-progress-bar.error .ui-progress {
  background-color: #C43C35 !important;
  border: 1px solid #9c302a;
}
.ui-progress-bar.warning .ui-progress {
  background-color: #D9B31A!important;
  border: 1px solid #ab8d15;
}
.ui-progress-bar.success .ui-progress {
  background-color: #57A957!important;
  border: 1px solid #458845;
}
.ui-progress-bar.transition .ui-progress {
  -webkit-transition: background-color 0.5s ease-in -webkit-border-color 1.5s ease-out -webkit-box-shadow 1.5s ease-out;
  -moz-transition: background-color 0.5s ease-in -moz-border-color 1.5s ease-out -moz-box-shadow 1.5s ease-out;
  -o-transition: background-color 0.5s ease-in border-color 1.5s ease-out box-shadow 1.5s ease-out;
  -ms-transition: background-color 0.5s ease-in border-color 1.5s ease-out box-shadow 1.5s ease-out;
  transition: background-color 0.5s ease-in border-color 1.5s ease-out box-shadow 1.5s ease-out;
}
.ui-progress-bar .ui-progress {
  position: relative;
  display: block;
  overflow: hidden;
  height: 8px;
  -webkit-border-radius: 10px;
  -webkit-background-clip: padding-box;
  -moz-border-radius: 10px;
  -moz-background-clip: padding;
  border-radius: 10px;
  background-clip: padding-box;
  background: -webkit-gradient(linear, 0 0, 44 44, color-stop(0, rgba(0, 0, 0, 0.17)), color-stop(0.25, rgba(0, 0, 0, 0.17)), color-stop(0.26, rgba(0, 0, 0, 0)), color-stop(0.5, rgba(0, 0, 0, 0)), color-stop(0.51, rgba(0, 0, 0, 0.17)), color-stop(0.75, rgba(0, 0, 0, 0.17)), color-stop(0.76, rgba(0, 0, 0, 0)), color-stop(1, rgba(0, 0, 0, 0))), -webkit-gradient(linear, left bottom, left top, color-stop(0, rgba(0, 0, 0, 0)), color-stop(1, rgba(0, 0, 0, 0.35))), #EAF9FF;
  background: -moz-repeating-linear-gradient(top left -30deg, rgba(0, 0, 0, 0.17), rgba(0, 0, 0, 0.17) 15px, rgba(0, 0, 0, 0) 15px, rgba(0, 0, 0, 0) 30px), -moz-linear-gradient(rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 100%), #EAF9FF;
  -webkit-background-size: 44px 44px;
  -moz-background-size: 36px 36px;
  -moz-animation: animate-stripes 2s linear infinite;
  -webkit-animation: animate-stripes 2s linear infinite;
  -o-animation: animate-stripes 2s linear infinite;
  -ms-animation: animate-stripes 2s linear infinite;
  -khtml-animation: animate-stripes 2s linear infinite;
  animation: animate-stripes 2s linear infinite;
  top: 0px;
  left: 0px;
}
.dark .ui-progress-bar .ui-progress {
  background: -webkit-gradient(linear, 0 0, 44 44, color-stop(0, rgba(0, 0, 0, 0.17)), color-stop(0.25, rgba(0, 0, 0, 0.17)), color-stop(0.26, rgba(0, 0, 0, 0)), color-stop(0.5, rgba(0, 0, 0, 0)), color-stop(0.51, rgba(0, 0, 0, 0.17)), color-stop(0.75, rgba(0, 0, 0, 0.17)), color-stop(0.76, rgba(0, 0, 0, 0)), color-stop(1, rgba(0, 0, 0, 0))), -webkit-gradient(linear, left bottom, left top, color-stop(0, rgba(0, 0, 0, 0)), color-stop(1, rgba(0, 0, 0, 0.35))), #4ACBFD;
  background: -moz-repeating-linear-gradient(top left -30deg, rgba(0, 0, 0, 0.17), rgba(0, 0, 0, 0.17) 15px, rgba(0, 0, 0, 0) 15px, rgba(0, 0, 0, 0) 30px), -moz-linear-gradient(rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 100%), #4ACBFD;
  -webkit-background-size: 44px 44px;
  -moz-background-size: 36px 36px;
}

.stats-btn {
  font-family: Arial;
  font-size: 9px;
  padding: 2px 5px 2px 7px;
  box-sizing: border-box;
  width: 100px;
  height: 100%;
  border-right: 1px solid #e0e0e0;
  border-left: 1px solid #e0e0e0;
  box-shadow: none;
  color: #666666;
  margin-left: 0;
}
.stats-btn:hover {
  background: #E9E9E9;
}
.stats-btn.c9-simple-btnmenuDown {
  background: white;
  z-index: 196000;
  position: relative;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.09);
}
.stats-btn .item {
  padding: 4px 0 0 0;
  position: relative;
  text-transform: uppercase;
  font-size: 7px;
  line-height: 7px;
}
.stats-btn .progress {
  background: #D3D3D3;
  width: 50px;
  position: absolute;
  z-index: 1;
  content: "";
  display: inline-block;
  height: 9px;
  left: 36px;
  width: 0px;
  margin-top: -2px;
  -webkit-transition: width 2s;
  -moz-transition: width 2s;
  -o-transition: width 2s;
  -ms-transition: width 2s;
  transition: width 2s;
}
.stats-btn:hover .progress {
  background: #98c878;
}
.stats-btn .progress.limit {
  background: #f06767;
}
.stats-btn .item:after {
  background: #E8E8E8;
  width: 50px;
  position: absolute;
  right: 0;
  content: "";
  display: inline-block;
  height: 9px;
  margin-top: -2px;
}
.stats-btn:hover .item:after {
  background: #dfdfdf;
}
.stats-menu {
  text-align: center;
  padding: 20px !important;
  border-radius: 4px 0 4px 4px;
  margin: -1px 0px 0 1px !important;
  width: 302px !important;
}
.stats-tabs {
  text-align: left;
}
.stats-menu .graph-label {
  font-size: 9px;
  text-transform: uppercase;
}
.stats-menu .graph-label .mem-limit {
  float: right;
}
.stats-menu .graph {
  height: 40px;
  border: 1px solid #DEDEDE;
  box-shadow: none;
  margin: -1px 0 5px 0;
  width: 300px;
  border-radius: 3px;
  background: #FCFCFC;
  color: #8ED6FF;
}
.stats-menu .title {
  text-align: center;
  margin: 0 0 20px 0;
  font-size: 13px;
  text-transform: uppercase;
}
.stats-menu .info,
.stats-bubble .info {
  background: #F9F9F9;
  border: 0;
  box-shadow: none;
  padding: 10px;
  margin-top: 20px;
  position: relative;
}
.stats-bubble .info {
  margin-top: 10px;
}
.stats-menu .info span,
.stats-bubble .info span {
  display: block;
  margin: 0 0 5px 0;
}
.stats-bubble {
  line-height: 1.5em;
}
.stats-bubble strong {
  display: block;
  margin-bottom: 10px;
}
.stats-menu .buttons {
  position: relative;
  height: 29px;
  margin-top: 20px;
}
.stats-bubble .upgrade-to-resize {
  margin: 10px;
  margin: 5px 10px;
  color: #6F6F6F;
}
.stats-bubble .button-resize-upgrade {
  margin: 10px;
}
.stats-bubble ul {
  padding-left: 16px;
}
.ping-time {
  font-size: 10px;
  margin-top: 2px;
  color: #999;
}
.stats-warning {
  display: none;
  font-size: 12px;
  color: #ff7777;
  text-align: center;
  padding-bottom: 5px;
}
.stats-warning a {
  color: #ff3333;
  cursor: pointer;
}
.current-plan {
  padding: 10px 20px 10px 10px;
  width: 190px;
}
.current-plan .title {
  display: block;
  text-align: center;
  font-weight: normal;
  color: #333;
}
.current-plan .title span {
  font-weight: bold;
}
.current-plan .details {
  padding: 10px 10px 0 16px;
}
.current-plan .heading {
  text-transform: uppercase;
  font-size: 7px;
}
.current-plan .row {
  padding: 3px 0 3px 0;
  position: relative;
}
.current-plan .row:after {
  content: "";
  display: block;
  position: absolute;
  left: 75px;
  height: 2px;
  background: #e2e2e2;
  width: 82px;
  top: 18px;
}
.current-plan .heading span,
.current-plan .row span {
  display: inline-block;
  width: 40px;
}
.current-plan .heading span:last-child,
.current-plan .row span:last-child {
  text-align: right;
}
.current-plan .heading span:first-child,
.current-plan .row span:first-child {
  width: 75px;
}
.current-plan .progress {
  height: 2px;
  width: 0;
  background: #abd34a;
  position: absolute;
  left: 75px;
  z-index: 10;
  margin-top: 1px;
}
.current-plan .btn-green {
  width: 147px;
  margin: 10px auto 0 16px;
}
.stats-menu .loading-spinner {
  width: 14px;
  height: 15px;
  position: absolute;
  margin-left: -8px;
}

#chatThrob {
  display: none;
  position: absolute;
  bottom: 40px;
  font-size: 12px;
  width: 150px;
  height: 40px;
  right: 20px;
  z-index: 1000;
  color: #272727;
  background-color: #ececec;
  background-color: rgba(236, 236, 236, 0.7);
  padding: 10px;
  border-radius: 6px;
  opacity: .8;
}
.chatContainer {
  display: flex;
  display: -webkit-flex;
  display: -ms-flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}
.chatText a {
  color: #909090;
}
.chatText {
  overflow: auto;
  font-size: 12px;
  padding: 0 0 0 0;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background: #fbfbfb;
}
.chatText p {
  padding: 10px 10px 10px 12px;
  word-wrap: break-word;
  border-bottom: 1px solid #f0f0f0;
  border-top: 0;
  position: relative;
  margin: 0;
}
.chatText p:first-child {
  border-top: 0;
}
.chatText .chatBorder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0;
  border-left: 3px solid white;
}
.chatText .emoji {
  vertical-align: middle;
}
.chatText .authorName {
  text-decoration: none;
  color: #333333;
  display: block;
}
.chatText .chatmessage {
  color: #333333;
  display: block;
  padding: 3px 0 0 0;
}
.chatText .chattime {
  position: absolute;
  right: 10px;
  top: 10px;
  color: #333333;
  font-size: 10px;
  font-weight: bold;
  text-shadow: none;
}
.chatContainer .searchTxt.tb_console {
  background: #fbfbfb;
  height: 30px;
  padding: 0;
  cursor: text;
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
}
.chatContainer .searchTxt.tb_console .sbtb_middle {
  min-height: 37px;
  border-color: #dedede;
  border-radius: 0;
  border-width: 1px 0 0 0;
  box-shadow: none;
  background: #fbfbfb;
  padding: 4px 4px 3px 4px;
}
.chatContainer .tb_textboxInitialMsg {
  color: #B9B9B9 !important;
  text-indent: 3px;
  text-shadow: none;
}
.chatContainer .searchbox .sbtb_middle .input {
  color: #333333;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}
.chatContainer .ace-tm .ace_marker-layer .ace_selection {
  background: #b5d5ff;
}
.chatContainer .ace-tm .ace_cursor {
  color: #333333;
}
#chatCounter {
  color: #777;
  font-size: 10px;
  vertical-align: middle;
}

.panelsbuttonDown.collab,
.panelsbuttonDown.collab:hover {
  box-shadow: 1px -1px transparent inset, 1px 0 transparent;
  padding-bottom: 7px;
}
.memberstree .tree-row {
  padding: 2px 0 0 18px;
  position: relative;
  color: #333333;
  cursor: default;
  font-family: Helvetica, Arial, sans-serif;
}
.memberstree .tree-row:first-child {
  border-top: 0;
}
.memberstree .tree-row .toggler {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/images/tree_close_arrow_small_dark_flat_light.png);
  background-repeat: no-repeat;
  position: absolute;
  left: 3px;
  top: 7px;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .memberstree .tree-row .toggler {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/images/tree_close_arrow_small_dark_flat_light@2x.png);
    background-size: 20px 10px;
  }
}
.memberstree .tree-row .caption {
  position: absolute;
  left: 30px;
  font-size: 11px;
  top: 4px;
  right: 93px;
  overflow: hidden;
  height: 16px;
  text-overflow: ellipsis;
}
.memberstree .tree-row .root.caption {
  left: 17px;
  top: 4px;
  font-weight: bold;
}
.memberstree .tree-row.active {
  font-weight: bold;
}
.memberstree .tree-row .name {
  margin-left: -23px;
  color: #f1f1f1;
  display: inline-block;
}
.memberstree .avatar {
  position: absolute;
  display: none;
  left: 3px;
  width: 38px;
  top: -1px;
  border-left: 1px solid black;
  border-right: 1px solid black;
  box-shadow: 1px 0 rgba(255, 255, 255, 0.07);
}
.memberstree .avatar img {
  width: 38px;
  height: 38px;
  border: 0;
}
.memberstree .kickout {
  width: 12px;
  height: 16px;
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/images/trash-icon_flat_light.png);
  background-repeat: no-repeat;
  cursor: pointer;
  pointer-events: auto;
  position: absolute;
  right: 14px;
  top: 2px;
  z-index: 100000;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .memberstree .kickout {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/images/trash-icon_flat_light@2x.png);
    background-size: 12px 16px;
  }
}
.access_control {
  width: 50px;
  height: 18px;
  padding: 1px;
  border-radius: 4px;
  font-family: Arial;
  font-size: 10px;
  box-sizing: border-box;
  background: #63acff;
  box-shadow: none;
  cursor: pointer;
  pointer-events: auto;
  position: absolute;
  right: 32px;
  top: 2px;
}
.access_control.disabled {
  pointer-events: none;
  cursor: default;
}
.access_control.disabled {
  background: #63acff;
}
.memberstree .selected .access_control {
  background: #63acff;
  box-shadow: none;
}
.memberstree .access_control.disabled {
  width: 26px;
}
.access_control .readbutton,
.access_control .writebutton {
  pointer-events: none;
}
.access_control.rw .readbutton,
.access_control.r .writebutton {
  width: 24px;
  height: 16px;
  border-radius: 3px;
  box-shadow: 1px 1px 0 0 #dedede inset, 0 -1px 0 0 #dedede inset;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0YxRjFGMSIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRjFGMUYxIiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(top, #F1F1F1 0%, #F1F1F1 100%);
  background-image: -webkit-linear-gradient(top, #F1F1F1 0%, #F1F1F1 100%);
  background-image: -o-linear-gradient(top, #F1F1F1 0%, #F1F1F1 100%);
  background-image: linear-gradient(top, #F1F1F1 0%, #F1F1F1 100%);
  color: rgba(0, 0, 0, 0.15);
  display: inline-block;
  text-align: center;
  box-sizing: border-box;
  padding-top: 2px;
  vertical-align: top;
}
.access_control.rw .readbutton {
  margin: -1px 1px 0 -1px;
  height: 18px;
  border-radius: 3px 0 0 4px;
  width: 24px;
  line-height: 16px;
  padding-left: 1px;
}
.access_control.r .writebutton {
  margin: -1px -1px 0 -1px;
  height: 18px;
  border-radius: 0 3px 3px 0;
  width: 26px;
  line-height: 15px;
  box-shadow: 0 1px 0 0 #dedede inset, -1px -1px 0 0 #dedede inset;
}
.memberstree.ace_tree_focus .selected .access_control.rw .readbutton,
.memberstree.ace_tree_focus .selected .access_control.r .writebutton {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0YxRjFGMSIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRjFGMUYxIiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(top, #F1F1F1 0%, #F1F1F1 100%);
  background-image: -webkit-linear-gradient(top, #F1F1F1 0%, #F1F1F1 100%);
  background-image: -o-linear-gradient(top, #F1F1F1 0%, #F1F1F1 100%);
  background-image: linear-gradient(top, #F1F1F1 0%, #F1F1F1 100%);
}
.access_control.rw .writebutton,
.access_control.r .readbutton,
.access_control.disabled .readbutton,
.access_control.disabled .writebutton {
  width: 24px;
  height: 14px;
  display: inline-block;
  text-align: center;
  box-sizing: border-box;
  padding-top: 2px;
  vertical-align: top;
  color: #f1f1f1;
  line-height: 14px;
}
.memberstree.ace_tree_focus .selected .access_control.rw .writebutton,
.memberstree.ace_tree_focus .selected .access_control.r .readbutton,
.memberstree.ace_tree_focus .selected .access_control.disabled .readbutton,
.memberstree.ace_tree_focus .selected .access_control.disabled .writebutton {
  color: #f1f1f1;
}
.access_control.disabled .readbutton,
.access_control.disabled .writebutton {
  color: #f1f1f1;
}
.memberstree .tree-row.hover:not(.heading) {
  background: #efefef;
}
.memberstree .tree-row.selected {
  background: #eaeaea;
}
.memberstree.ace_tree_focus .tree-row.selected {
  background: #63acff;
}
.memberstree .status {
  display: block;
  width: 12px;
  height: 12px;
  position: absolute;
  left: 14px;
  top: 5px;
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.collab/members/images/collab-led-states_flat_light.png);
  background-repeat: no-repeat;
  background-position: 1px 0;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .memberstree .status {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.collab/members/images/collab-led-states_flat_light@2x.png);
    background-size: 12px 36px;
  }
}
.memberstree .collaborator_color {
  position: absolute;
  left: 0;
  top: 2px;
  width: 3px;
  bottom: 2px;
  border-radius: 0;
  box-shadow: inset 1px 0 rgba(255, 255, 255, 0.18);
}
.memberstree .status.online {
  background-position: 0 -24px;
}
.memberstree .status.idle {
  background-position: 0 0;
}
.memberstree .status.offline {
  background-position: 0 -12px;
}
.memberstree.ace_tree .message {
  font-family: Arial;
  font-size: 11px;
  margin: 20px 0 0 0;
}

.share {
  width: 570px;
  height: 613px;
}
.share .bk-container {
  padding: 20px;
}
.share label {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 13px;
  font-weight: bold;
  color: #333333;
  margin: 0 5px 2px 0;
  display: block;
  vertical-align: middle;
}
.share .sharecb {
  margin: 2px 0 0 10px !important;
  display: inline-block;
  vertical-align: middle;
}
.share .link {
  background: #ffffff;
  padding: 6px 10px;
  border-radius: 3px;
  width: 271px;
  margin: 0 0 10px 0;
  border: 1px solid #dedede;
  box-shadow: none;
  color: #333333;
  cursor: text;
  display: inline-block;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  vertical-align: top;
}
.share .link:hover {
  text-decoration: underline;
}
.share .members {
  background-color: rgba(255, 255, 255, 0.07);
  border: 1px solid #dedede;
  box-shadow: none;
  overflow: hidden;
  position: relative;
  height: 140px !important;
  margin: 10px 0 10px 0;
  border-radius: 3px;
}
.share .members .hover {
  background: transparent;
}
.share blockquote {
  position: relative;
  border-radius: 3px;
  border: 1px solid #dedede;
  box-shadow: none;
}
.share blockquote.invite {
  margin: 10px 0 10px 0;
  padding: 10px;
}
.share blockquote.links {
  margin: 10px 0 10px 0;
  padding: 10px 15px 0 15px;
}
.share .access_control.standalone {
  position: absolute;
  right: 140px;
  top: 66px;
}
.share .subhead {
  display: inline-block;
  width: 119px;
  color: #333333;
  margin-top: 7px !important;
  font-weight: normal;
}
.share .searchbox {
  width: 378px;
  margin: 5px 0 0 0 !important;
}
.share .searchbox .sbtb_middle {
  background-color: #ffffff;
  box-shadow: none;
  padding: 5px 10px !important;
  border-color: #dedede !important;
}
.share .btn-green {
  position: absolute;
  width: 120px;
  height: 30px;
  right: 10px;
  bottom: 39px;
}
.share .btn-done {
  position: absolute;
  right: 20px;
  width: 120px;
  bottom: 20px;
}

.ace_tree {
  overflow: hidden;
  font: 12px Tahoma, Arial;
  cursor: default;
  position: relative;
  white-space: pre;
}
.ace_tree textarea {
  position: absolute;
  z-index: 0;
}
.ace_tree_scroller {
  position: absolute;
  overflow: hidden;
  top: 0;
  bottom: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.ace_tree_content {
  position: absolute;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.ace_scrollbar {
  position: absolute;
  overflow-x: hidden;
  overflow-y: auto;
  right: 0;
  bottom: 0;
}
.ace_scrollbar-inner {
  position: absolute;
  cursor: text;
  left: 0;
  top: 0;
}
.ace_scrollbar-h {
  position: absolute;
  overflow-x: auto;
  overflow-y: hidden;
  right: 0;
  left: 0;
  bottom: 0;
}
.ace_tree_horheading {
  position: absolute;
}
.ace_tree_verheading {
  bottom: 0;
  position: absolute;
}
.ace_tree_heading {
  z-index: 10;
  position: relative;
  white-space: nowrap;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  pointer-events: none;
}
.ace_tree_layer {
  z-index: 1;
  position: absolute;
  overflow: hidden;
  white-space: nowrap;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  pointer-events: none;
}
.ace_tree .tree-indent {
  display: inline-block;
}
.ace_tree_selection_range {
  position: absolute;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.ace_tree-editor {
  position: absolute;
  z-index: 10000;
  background: white;
  padding: 3px 4px 3px 4px;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px dotted green;
  left: 0;
  right: 0;
}
.ace_tree .toggler {
  width: 10px;
  height: 10px;
  background-position: 0px 0px;
  background-repeat: no-repeat;
  cursor: pointer;
  display: inline-block;
  pointer-events: auto;
}
.ace_tree .toggler.empty {
  pointer-events: none;
}
.ace_tree .toggler.open {
  background-position: -10px 0px;
}
.ace_tree .toggler.empty {
  background-position: 50px 0px;
  cursor: default;
}
.ace_tree_cells,
.ace_tree_cell-layer {
  width: 100%;
}
.ace_tree_selection-layer {
  width: 100%;
  height: 110%;
}
.ace_tree_cells .message.empty {
  text-align: center;
  opacity: 0.9;
  cursor: default;
}
.ace_tree .tree-row > .tree-column {
  display: inline-block;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.tree-headings {
  white-space: nowrap;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.tree-headings > .tree-column {
  display: inline-block;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.tree-headings > .tree-column-resizer {
  height: 100%;
  background: #b6b6b6;
  display: inline-block;
  width: 2px;
  z-index: 1000;
  position: absolute;
  margin-left: -2px;
  border-left: 1px solid rgba(0, 0, 0, 0);
}

.ace_tree-light.ace_tree {
  font: 12px Arial;
}
.ace_tree_selection_range {
  background: rgba(0, 110, 255, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.ace_tree-light .toggler {
  overflow: visible;
  width: 10px;
  height: 10px;
}
.ace_tree-light .tree-row .caption {
  padding: 4px 5px;
}
.ace_tree-light .tree-row > .caption {
  overflow: visible;
  display: inline-block;
}
.ace_tree-light .tree-row {
  border: 1px solid transparent;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.ace_tree-light .tree-row:hover,
.ace_tree-light .tree-row.hover {
  background: rgba(0, 0, 0, 0.03);
}
.ace_tree-light .tree-row.selected {
  background: rgba(0, 0, 0, 0.04);
}
.ace_tree_focus.ace_tree-light .tree-row.selected {
  background: -webkit-gradient(linear, left top, left bottom, from(#2890E5), color-stop(1, #1F82D2));
  background: -moz-linear-gradient(center bottom, #1f82d2 0%, #2890e5 100%) repeat scroll 0 0 transparent;
  background: linear-gradient(center bottom, #1f82d2 0%, #2890e5 100%) repeat scroll 0 0 transparent;
  color: #f8f8f8;
}
.ace_tree-light .tree-row > .tree-column {
  border: 1px solid #cccccc;
  border-width: 0 1px 1px 0;
  padding: 4px 5px;
}
.ace_tree-light .tree-row.selected > .tree-column {
  background: transparent;
}
.ace_tree-light .tree-headings {
  background: #fdfdfd;
}
.ace_tree-light .tree-headings > .tree-column {
  background: transparent;
  padding: 5px 3px;
}
.ace_tree-light .tree-headings > .tree-column-resizer {
  height: 100%;
  background: #b6b6b6;
  display: inline-block;
  width: 1px;
  z-index: 1000;
  position: absolute;
  margin-left: -1px;
  border-left: 1px solid rgba(0, 0, 0, 0);
}

.notificationstree {
  position: absolute;
  right: 40px;
  top: 35px;
  color: #AAA;
}
.notificationstree .message.empty {
  font-size: 11px;
  margin: 6px;
}
.notificationstree .tree-row {
  position: relative;
  pointer-events: auto;
  box-shadow: none;
  border-bottom: 1px solid #f0f0f0;
  padding: 0 10px 0 50px;
}
.notificationstree .tree-row:first-child {
  box-shadow: none;
}
.notificationstree .tree-row:last-child {
  border-bottom: 0;
}
.notificationstree .access_control {
  position: relative;
  display: inline-block;
  top: -2px;
  right: 5px;
}
.notificationstree .toggler.empty {
  display: none;
}
.notificationstree .actions {
  position: absolute;
  left: 55px;
  bottom: 5px;
}
.notificationstree .access_request .btn-default-css3 {
  display: inline-block;
  line-height: 5px;
  font-size: 11px;
  margin-right: 5px;
  position: relative;
  top: 1px;
}
.notificationstree .btn-default-css3 .caption {
  pointer-events: none;
  padding: 7px 12px 6px;
}
.notificationstree .tree-row .body > .caption {
  font-weight: bold;
}
.notificationstree .tree-row .body {
  font-size: 11px;
  color: #333333;
  display: inline-block;
  margin: 5px 0 6px;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
}
.notificationstree .avatar {
  position: absolute;
  left: 5px;
  width: 50px;
  top: 5px;
}
.notificationstree .avatar img {
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 40px;
  box-shadow: 0;
}
.notificationstree .tree-row:hover {
  background: #efefef;
}
.notificationstree .tree-row.selected {
  background: #efefef;
}
.notificationstree.ace_tree_focus .tree-row.selected {
  background: #efefef;
}
.panelsbutton.collab {
  position: relative;
}
.panelsbutton.collab .newnotifs {
  display: none;
  position: absolute;
  left: 5px;
  background: #98c878;
  border-radius: 10px;
  height: 11px;
  font-size: 10px;
  font-weight: normal;
  text-align: center;
  -webkit-transform-origin: top left;
  -webkit-transform: rotate(-90deg);
  transform-origin: top left;
  transform: rotate(-90deg);
  padding: 1px 3px 1px 4px;
  color: #ffffff;
  box-shadow: none;
  line-height: 11px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.panelsbutton.collab .newnotifs.size1 {
  top: 17px;
}
.panelsbutton.collab .newnotifs.size2 {
  top: 21px;
}
.panelsbutton.collab .newnotifs.size3 {
  top: 27px;
}

#timeslider-top {
  color: #aaaaaa;
  border-bottom: 0;
  width: 100%;
  z-index: 10;
  background: #ffffff;
  box-shadow: none;
  font-size: 12px;
}
#timeslider {
  height: 63px;
  margin: 0 9px;
}
#timeslider #timer {
  color: #333333;
  font-family: Helvetica, Arial, sans-serif;
  left: 7px;
  position: absolute;
  text-align: center;
  top: 8px;
  width: 122px;
}
#timeslider #timeslider-slider {
  height: 61px;
  left: 0;
  position: absolute;
  top: 16px;
  width: 100%;
}
#playpause_button,
#playpause_button_icon {
  height: 33px;
  position: absolute;
  width: 33px;
  z-index: 1;
}
#playpause_button {
  background-repeat: no-repeat;
  left: 20px;
  top: 16px;
  border-radius: 40px;
  border: 0;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIiIHN0b3AtY29sb3I9IiM3NTc1NzQiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iIiBzdG9wLWNvbG9yPSIjNzU3NTc0IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(top, #757574, #757574);
  background-image: -webkit-linear-gradient(top, #757574, #757574);
  background-image: -o-linear-gradient(top, #757574, #757574);
  background-image: linear-gradient(top, #757574, #757574);
  box-shadow: none;
  transition: box-shadow 0.1s;
}
#playpause_button:hover #playpause_button_icon {
  background-color: #8b8b8b;
}
#playpause_button:active {
  box-shadow: none;
}
#playpause_button:active #playpause_button_icon {
  box-shadow: none;
  background-color: #767676;
}
#playpause_button_icon {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.collab/timeslider/images/play_flat_light.png);
  background-repeat: no-repeat;
  background-position: 50% 50%;
  left: 0px;
  top: 0px;
  border-radius: 50px;
  box-sizing: border-box;
  box-shadow: none;
  transition: background-color 0.1s;
  cursor: pointer;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  #playpause_button_icon {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.collab/timeslider/images/play_flat_light@2x.png);
    background-size: 5px 8px;
  }
}
.pause#playpause_button_icon {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.collab/timeslider/images/pause_flat_light.png);
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .pause#playpause_button_icon {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.collab/timeslider/images/pause_flat_light@2x.png);
    background-size: 5px 8px;
  }
}
#timeslider .close {
  cursor: pointer;
  position: absolute;
  width: 14px;
  height: 14px;
  display: block;
  right: 5px;
  top: 4px;
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.collab/timeslider/images/close_tab_btn.png);
  background-position: 0 0;
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  #timeslider .close {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.collab/timeslider/images/close_tab_btn@2x.png);
    background-size: 42px 28px;
  }
}
#timeslider .close:hover {
  background-position: -14px 0;
}
#timeslider .close:active {
  background-position: -28px 0;
}
#timeslider .revert {
  position: absolute;
  width: 59px;
  cursor: pointer;
  top: 38px;
  right: 23px;
  color: #f1f1f1;
  text-align: center;
  border-radius: 3px;
  box-shadow: none;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzk4Yzg3OCIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOThjODc4IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(top, #98c878 0%, #98c878 100%);
  background-image: -webkit-linear-gradient(top, #98c878 0%, #98c878 100%);
  background-image: -o-linear-gradient(top, #98c878 0%, #98c878 100%);
  background-image: linear-gradient(top, #98c878 0%, #98c878 100%);
  border: 0;
  height: 15px;
  padding: 2px 1px 0 0;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 10px;
  text-shadow: none;
}
#timeslider .revert:after {
  content: "";
  display: block;
  width: 68px;
  border-radius: 10px;
  border: 0;
  position: absolute;
  left: -8px;
  top: -8px;
  height: 25px;
}
#timeslider .revert.disabled {
  box-shadow: none;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTAwJSIgeTE9IjAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0YwRjBGMCIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRjBGMEYwIiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(right, #F0F0F0 0%, #F0F0F0 100%);
  background-image: -webkit-linear-gradient(right, #F0F0F0 0%, #F0F0F0 100%);
  background-image: -o-linear-gradient(right, #F0F0F0 0%, #F0F0F0 100%);
  background-image: linear-gradient(right, #F0F0F0 0%, #F0F0F0 100%);
  color: #cbcbcb;
}
#timeslider .revert:hover:not(.disabled) {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0E1RDI4OCIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjQTVEMjg4IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(top, #A5D288 0%, #A5D288 100%);
  background-image: -webkit-linear-gradient(top, #A5D288 0%, #A5D288 100%);
  background-image: -o-linear-gradient(top, #A5D288 0%, #A5D288 100%);
  background-image: linear-gradient(top, #A5D288 0%, #A5D288 100%);
}
#timeslider .revert:active:not(.disabled) {
  box-shadow: none;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzk4Yzg3OCIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOThjODc4IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(top, #98c878 0%, #98c878 100%);
  background-image: -webkit-linear-gradient(top, #98c878 0%, #98c878 100%);
  background-image: -o-linear-gradient(top, #98c878 0%, #98c878 100%);
  background-image: linear-gradient(top, #98c878 0%, #98c878 100%);
  padding: 2px 1px 0 0;
}
#leftstep,
#rightstep {
  position: absolute;
  top: 39px;
  width: 16px;
  height: 16px;
  border: 0;
  cursor: pointer;
}
#leftstep {
  background-position: 0 -22px;
  right: 110px;
  border-radius: 3px;
  border-right: 0;
  box-shadow: none;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+dHJhbnNwYXJlbnQgMCV0cmFuc3BhcmVudCAxMDAlPC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2dyYWQtdWNnZy1nZW5lcmF0ZWQpIiAvPjwvc3ZnPg==);
  background-image: -moz-linear-gradient(top, transparent 0%, transparent 100%);
  background-image: -webkit-linear-gradient(top, transparent 0%, transparent 100%);
  background-image: -o-linear-gradient(top, transparent 0%, transparent 100%);
  background-image: linear-gradient(top, transparent 0%, transparent 100%);
  z-index: 100;
}
#leftstep.disabled {
  box-shadow: none;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+dHJhbnNwYXJlbnQgMCV0cmFuc3BhcmVudCAxMDAlPC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2dyYWQtdWNnZy1nZW5lcmF0ZWQpIiAvPjwvc3ZnPg==);
  background-image: -moz-linear-gradient(left, transparent 0%, transparent 100%);
  background-image: -webkit-linear-gradient(left, transparent 0%, transparent 100%);
  background-image: -o-linear-gradient(left, transparent 0%, transparent 100%);
  background-image: linear-gradient(left, transparent 0%, transparent 100%);
}
#leftstep.disabled:after {
  opacity: 0.3;
}
#leftstep:hover:not(.disabled) {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2U5ZTllOSIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZTllOWU5IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(top, #e9e9e9 0%, #e9e9e9 100%);
  background-image: -webkit-linear-gradient(top, #e9e9e9 0%, #e9e9e9 100%);
  background-image: -o-linear-gradient(top, #e9e9e9 0%, #e9e9e9 100%);
  background-image: linear-gradient(top, #e9e9e9 0%, #e9e9e9 100%);
}
#leftstep:active:not(.disabled) {
  box-shadow: none;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2U5ZTllOSIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZTllOWU5IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(top, #e9e9e9 0%, #e9e9e9 100%);
  background-image: -webkit-linear-gradient(top, #e9e9e9 0%, #e9e9e9 100%);
  background-image: -o-linear-gradient(top, #e9e9e9 0%, #e9e9e9 100%);
  background-image: linear-gradient(top, #e9e9e9 0%, #e9e9e9 100%);
}
#leftstep:active:not(.disabled):after {
  margin: 4px 0 0 4px;
}
#leftstep:after {
  content: "";
  height: 15px;
  width: 12px;
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.collab/timeslider/images/stepper_buttons_flat_light.png);
  background-repeat: no-repeat;
  background-position: 0px 0px;
  display: block;
  margin: 4px 0 0 4px;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  #leftstep:after {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.collab/timeslider/images/stepper_buttons_flat_light@2x.png);
    background-size: 21px 8px;
  }
}
#rightstep {
  right: 95px;
  border-left: 0;
  border-radius: 3px;
  box-shadow: none;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+dHJhbnNwYXJlbnQgMCV0cmFuc3BhcmVudCAxMDAlPC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2dyYWQtdWNnZy1nZW5lcmF0ZWQpIiAvPjwvc3ZnPg==);
  background-image: -moz-linear-gradient(top, transparent 0%, transparent 100%);
  background-image: -webkit-linear-gradient(top, transparent 0%, transparent 100%);
  background-image: -o-linear-gradient(top, transparent 0%, transparent 100%);
  background-image: linear-gradient(top, transparent 0%, transparent 100%);
}
#rightstep.disabled {
  box-shadow: none;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+dHJhbnNwYXJlbnQgMCV0cmFuc3BhcmVudCAxMDAlPC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2dyYWQtdWNnZy1nZW5lcmF0ZWQpIiAvPjwvc3ZnPg==);
  background-image: -moz-linear-gradient(left, transparent 0%, transparent 100%);
  background-image: -webkit-linear-gradient(left, transparent 0%, transparent 100%);
  background-image: -o-linear-gradient(left, transparent 0%, transparent 100%);
  background-image: linear-gradient(left, transparent 0%, transparent 100%);
}
#rightstep.disabled:after {
  opacity: 0.3;
}
#rightstep:hover:not(.disabled) {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2U5ZTllOSIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZTllOWU5IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(top, #e9e9e9 0%, #e9e9e9 100%);
  background-image: -webkit-linear-gradient(top, #e9e9e9 0%, #e9e9e9 100%);
  background-image: -o-linear-gradient(top, #e9e9e9 0%, #e9e9e9 100%);
  background-image: linear-gradient(top, #e9e9e9 0%, #e9e9e9 100%);
}
#rightstep:active:not(.disabled) {
  box-shadow: none;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2U5ZTllOSIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZTllOWU5IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(top, #e9e9e9 0%, #e9e9e9 100%);
  background-image: -webkit-linear-gradient(top, #e9e9e9 0%, #e9e9e9 100%);
  background-image: -o-linear-gradient(top, #e9e9e9 0%, #e9e9e9 100%);
  background-image: linear-gradient(top, #e9e9e9 0%, #e9e9e9 100%);
}
#rightstep:active:not(.disabled):after {
  margin: 4px 0 0 4px;
}
#rightstep:after {
  content: "";
  height: 15px;
  width: 12px;
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.collab/timeslider/images/stepper_buttons_flat_light.png);
  background-repeat: no-repeat;
  background-position: -12px 0px;
  display: block;
  margin: 4px 0 0 4px;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  #rightstep:after {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.collab/timeslider/images/stepper_buttons_flat_light@2x.png);
    background-size: 21px 8px;
  }
}
#timeslider .star {
  cursor: pointer;
  width: 6px;
  height: 6px;
  position: absolute;
  top: 16px;
  z-index: 3;
  background: #eeb792;
  border-radius: 4px;
  margin-left: 5px;
  box-shadow: none;
}
#timeslider .star:last-child {
  background: #98c878;
}
#revision_info {
  position: absolute;
  left: 70px;
  top: 14px;
}
#revision_label.saved {
  color: #333333;
}
#ui-slider-progress {
  pointer-events: none;
  position: absolute;
  content: "";
  background: red;
  height: 6px;
  display: block;
  top: 28px;
  left: 71px;
  border-radius: 4px;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzk4Yzg3OCIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOThjODc4IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(bottom, #98c878 0%, #98c878 100%);
  background-image: -webkit-linear-gradient(bottom, #98c878 0%, #98c878 100%);
  background-image: -o-linear-gradient(bottom, #98c878 0%, #98c878 100%);
  background-image: linear-gradient(bottom, #98c878 0%, #98c878 100%);
  border-top: 0;
  z-index: 1;
  box-shadow: none;
  transition: width .1s;
}
#ui-slider-handle {
  display: block;
  position: absolute;
  height: 12px;
  width: 12px;
  background: white;
  top: 24px;
  box-shadow: none;
  border-radius: 14px;
  border: 1px solid #dedede;
  transition: left .1s;
  z-index: 100;
}
#slide-bar-bar {
  position: absolute;
  margin-right: -5px;
  left: 0;
  right: 0;
  top: 26px;
  height: 6px;
  background-color: #f0f0f0;
  border-radius: 4px;
  box-shadow: none;
}
#ui-slider-bar {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  cursor: pointer;
  height: 35px;
  margin-left: 70px;
  margin-right: 145px;
  position: relative;
  top: 2px;
}

.cool {
  position: absolute;
  opacity: 0.9;
}
.coolsel {
  opacity: 0.2 !important;
}
.cool_header {
  color: black;
  margin-top: -2px;
  margin-left: -1px;
  width: 4px;
  height: 4px;
}
.cool_tooltip_cursor {
  position: absolute;
  height: auto;
  width: auto;
  background: #FFF;
  border-radius: 0;
  box-shadow: none;
  border: 0;
  vertical-align: middle;
  line-height: inherit;
  padding: 0 2px 2px;
  margin: 18px 0 0 0;
  z-index: 200001;
}
.cool_tooltip_cursor_caption {
  margin: 0 8px 0 8px;
  color: #333;
  cursor: default;
  font-size: 10px;
  font-weight: normal;
}
.ace_tooltip {
  position: fixed;
  background: #F8F7AC;
  border: solid 1px rgba(205, 237, 0, 0.81);
  border-radius: 5px;
  z-index: 1000000;
  max-width: 500px;
  white-space: pre-wrap;
}
.panelsbar .panelsbuttonDown.collab,
.panelsbar .panelsbuttonDown.collab:hover {
  box-shadow: 1px -1px transparent inset, 1px 0 transparent;
  padding-bottom: 7px;
}
.collab-bar {
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  -webkit-flex-direction: column;
}
.ace_gutter-tooltip {
  position: fixed;
  background: #6f6f6f;
  border: 1px solid #969696;
  border-radius: 2px;
  z-index: 1000000;
  max-width: 500px;
  white-space: pre-wrap;
  color: #d9ff0f;
  padding: 1px 2px 1px 2px;
}

.conflict-widget-1 {
  background: #b2e491;
  box-sizing: border-box;
  border-radius: 4px 4px 0 0;
  padding: 0px 1.2em;
  cursor: default;
}
.ace_dark .conflict-widget-1 {
  background: #3A6120;
}
.conflict-widget-2 {
  background: #82bcef;
  box-sizing: border-box;
  border-radius: 0 0 4px 4px;
  padding: 0px 1.2em;
  cursor: default;
}
.ace_dark .conflict-widget-2 {
  background: #124775;
}
.conflict-widget-split {
  background: inherit;
  box-sizing: border-box;
  padding: 0px 1.2em;
  cursor: default;
}
.conflict-marker-1 {
  position: absolute;
  background: #ddecd9;
  border-left: 3px solid #b2e491;
  border-right: 3px solid #b2e491;
}
.ace_dark .conflict-marker-1 {
  background: rgba(118, 197, 65, 0.56);
  border-left: 3px solid #3A6120;
  border-right: 3px solid #3A6120;
}
.conflict-marker-2 {
  position: absolute;
  background: #d7e1ff;
  border-left: 3px solid #82bcef;
  border-right: 3px solid #82bcef;
}
.conflict-marker-1.edited,
.conflict-marker-2.edited {
  background: #f3f0c7;
}
.ace_dark .conflict-marker-2 {
  background: rgba(36, 146, 243, 0.53);
  border-left: 3px solid #124775;
  border-right: 3px solid #124775;
}
.ace_button {
  margin-left: 2px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  -ms-user-select: none;
  user-select: none;
  overflow: hidden;
  border: 1px solid rgba(100, 100, 100, 0.23);
  padding: 2px 4px;
  box-sizing: border-box;
  color: #545454;
  background: white;
  pointer-events: auto;
  border-radius: 4px;
}
.ace_dark .ace_button {
  border-color: #B1B1B1;
  color: #333;
  background: #B1B1B1;
}
.ace_button:hover {
  background-color: #eee;
  opacity: 1;
}
.ace_dark .ace_button:hover {
  background-color: #929292 !important;
  color: #000 !important;
}
.ace_button:active {
  background-color: #ddd;
}
.ace_dark .ace_button:active {
  background-color: #B1B1B1;
}
.ace_button.disabled {
  display: none !important;
  pointer-events: none;
}
.ace_button.checked {
  border-color: #3399ff;
  opacity: 1;
}
.conflict-button-top {
  position: absolute;
  right: 1.4em;
  transform: translateY(-50%);
}
.conflict-button-bottom {
  position: absolute;
  right: 1.4em;
  transform: translateY(50%);
}
.conflict-widget-split .conflict-button-top {
  transform: none;
}
.conflict-widget-split .ace_button {
  display: inline-block;
  width: 1.85em;
  margin-top: -3px;
  transform: rotate(90deg);
  text-align: center;
}

.ace_diff-container {
  display: -webkit-flex !important;
  display: flex !important;
  flex-direction: row;
  position: absolute;
  overflow: hidden;
}
.ace_diff-container > .ace_editor {
  -webkit-flex-grow: 1;
  flex-grow: 1;
}
.ace_diff-gutter {
  width: 4em;
  border-left: 1px solid #999999;
  border-right: 1px solid #999999;
  background-color: #efefef;
  position: relative;
}
.ace_diff-connector {
  stroke: rgba(0, 0, 0, 0.5);
  fill: rgba(0, 0, 0, 0.15);
}
.ace_diff {
  position: absolute;
  z-index: 20;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.15);
}
.ace_diff.insertStart {
  height: 0px !important;
  border-bottom: 0px;
}
.ace_diff.insertEnd {
  border-top: 0px;
  background-color: transparent !important;
}
.ace_diff.inline {
  border-color: transparent;
  background: none;
}
.ace_diff.inline:after {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  content: "";
  background: transparent;
}
.ace_diff,
.ace_diff.insert,
.ace_diff.delete {
  border-color: #87BAF7;
  background-color: rgba(211, 231, 255, 0.6);
}
.ace_diff-connector {
  stroke: #87BAF7;
  fill: rgba(211, 231, 255, 0.6);
}
.ace_diff-gutter {
  border-left: 1px solid rgba(0, 0, 0, 0.05);
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  background-color: #F1F1F1;
}
.ace_diff.inline {
  border-color: transparent;
  background: none;
}
.ace_diff.insert.inline:after {
  background-color: rgba(49, 230, 96, 0.28);
}
.ace_diff.delete.inline:after {
  background-color: rgba(255, 128, 79, 0.26);
}
.ace_dark .ace_diff,
.ace_dark .ace_diff.insert,
.ace_dark .ace_diff.delete {
  border-color: #458BDF;
  background-color: rgba(7, 81, 169, 0.4);
}
.ace_dark .ace_diff-connector {
  stroke: #458BDF;
  fill: rgba(7, 81, 169, 0.4);
}
.ace_dark.ace_diff-gutter {
  border-left: 1px solid rgba(255, 255, 255, 0.15);
  border-right: 1px solid rgba(255, 255, 255, 0.15);
}
.ace_dark .ace_diff.inline {
  border-color: transparent;
  background: none;
}
.ace_dark .ace_diff.insert.inline:after {
  background-color: rgba(0, 130, 58, 0.45);
}
.ace_dark .ace_diff.delete.inline:after {
  background-color: rgba(169, 46, 33, 0.55);
}
.diff-arrow {
  position: absolute;
  border: double 6px;
  color: gray;
  width: 0.5em;
  height: 0.5em;
  z-index: 100000;
  border-left: none;
  border-bottom: none;
  cursor: pointer;
  transition: 0.1s opacity;
  opacity: 0.4;
}
.diff-arrow:hover {
  opacity: 1;
}
.diff-arrow-left {
  transform: rotate(45deg);
}
.diff-arrow-right {
  transform: rotate(225deg);
}

.ace_editor {
  position: relative;
  overflow: hidden;
  font: 12px / normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
  direction: ltr;
  text-align: left;
}
.ace_scroller {
  position: absolute;
  overflow: hidden;
  top: 0;
  bottom: 0;
  background-color: inherit;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  cursor: text;
}
.ace_content {
  position: absolute;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  min-width: 100%;
}
.ace_dragging .ace_scroller:before {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: '';
  background: rgba(250, 250, 250, 0.01);
  z-index: 1000;
}
.ace_dragging.ace_dark .ace_scroller:before {
  background: rgba(0, 0, 0, 0.01);
}
.ace_gutter {
  position: absolute;
  overflow: hidden;
  width: auto;
  top: 0;
  bottom: 0;
  left: 0;
  cursor: default;
  z-index: 4;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
.ace_gutter-active-line {
  position: absolute;
  left: 0;
  right: 0;
}
.ace_scroller.ace_scroll-left {
  box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;
}
.ace_gutter-cell {
  padding-left: 19px;
  padding-right: 6px;
  background-repeat: no-repeat;
}
.ace_gutter-cell.ace_error {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");
  background-repeat: no-repeat;
  background-position: 2px center;
}
.ace_gutter-cell.ace_warning {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");
  background-position: 2px center;
}
.ace_gutter-cell.ace_info {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");
  background-position: 2px center;
}
.ace_dark .ace_gutter-cell.ace_info {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");
}
.ace_scrollbar {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 6;
}
.ace_scrollbar-inner {
  position: absolute;
  cursor: text;
  left: 0;
  top: 0;
}
.ace_scrollbar-v {
  overflow-x: hidden;
  overflow-y: scroll;
  top: 0;
}
.ace_scrollbar-h {
  overflow-x: scroll;
  overflow-y: hidden;
  left: 0;
}
.ace_print-margin {
  position: absolute;
  height: 100%;
}
.ace_text-input {
  position: absolute;
  z-index: 0;
  width: 0.5em;
  height: 1em;
  opacity: 0;
  background: transparent;
  -moz-appearance: none;
  appearance: none;
  border: none;
  resize: none;
  outline: none;
  overflow: hidden;
  font: inherit;
  padding: 0 1px;
  margin: 0 -1px;
  text-indent: -1em;
  -ms-user-select: text;
  -moz-user-select: text;
  -webkit-user-select: text;
  user-select: text;
  white-space: pre!important;
}
.ace_text-input.ace_composition {
  background: inherit;
  color: inherit;
  z-index: 1000;
  opacity: 1;
  text-indent: 0;
}
.ace_layer {
  z-index: 1;
  position: absolute;
  overflow: hidden;
  word-wrap: normal;
  white-space: pre;
  height: 100%;
  width: 100%;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  pointer-events: none;
}
.ace_gutter-layer {
  position: relative;
  width: auto;
  text-align: right;
  pointer-events: auto;
}
.ace_text-layer {
  font: inherit !important;
}
.ace_cjk {
  display: inline-block;
  text-align: center;
}
.ace_cursor-layer {
  z-index: 4;
}
.ace_cursor {
  z-index: 4;
  position: absolute;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-left: 2px solid;
  transform: translatez(0);
}
.ace_slim-cursors .ace_cursor {
  border-left-width: 1px;
}
.ace_overwrite-cursors .ace_cursor {
  border-left-width: 0;
  border-bottom: 1px solid;
}
.ace_hidden-cursors .ace_cursor {
  opacity: 0.2;
}
.ace_smooth-blinking .ace_cursor {
  -webkit-transition: opacity 0.18s;
  transition: opacity 0.18s;
}
.ace_editor.ace_multiselect .ace_cursor {
  border-left-width: 1px;
}
.ace_marker-layer .ace_step,
.ace_marker-layer .ace_stack {
  position: absolute;
  z-index: 3;
}
.ace_marker-layer .ace_selection {
  position: absolute;
  z-index: 5;
}
.ace_marker-layer .ace_bracket {
  position: absolute;
  z-index: 6;
}
.ace_marker-layer .ace_active-line {
  position: absolute;
  z-index: 2;
}
.ace_marker-layer .ace_selected-word {
  position: absolute;
  z-index: 4;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.ace_line .ace_fold {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: inline-block;
  height: 11px;
  margin-top: -2px;
  vertical-align: middle;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="), url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");
  background-repeat: no-repeat, repeat-x;
  background-position: center center, top left;
  color: transparent;
  border: 1px solid black;
  border-radius: 2px;
  cursor: pointer;
  pointer-events: auto;
}
.ace_fold:hover {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="), url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");
}
.ace_tooltip {
  background-color: #FFF;
  background-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.1));
  background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));
  border: 1px solid gray;
  border-radius: 1px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  color: black;
  max-width: 100%;
  padding: 3px 4px;
  position: fixed;
  z-index: 999999;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: default;
  white-space: pre;
  word-wrap: break-word;
  line-height: normal;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  pointer-events: none;
}
.ace_folding-enabled > .ace_gutter-cell {
  padding-right: 13px;
}
.ace_fold-widget {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0 -12px 0 1px;
  display: none;
  width: 11px;
  vertical-align: top;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 3px;
  border: 1px solid transparent;
  cursor: pointer;
}
.ace_folding-enabled .ace_fold-widget {
  display: inline-block;
}
.ace_fold-widget.ace_end {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");
}
.ace_fold-widget.ace_closed {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");
}
.ace_fold-widget:hover {
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);
}
.ace_fold-widget:active {
  border: 1px solid rgba(0, 0, 0, 0.4);
  background-color: rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
}
.ace_dark .ace_fold-widget {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");
}
.ace_dark .ace_fold-widget.ace_end {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");
}
.ace_dark .ace_fold-widget.ace_closed {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");
}
.ace_dark .ace_fold-widget:hover {
  box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
  background-color: rgba(255, 255, 255, 0.1);
}
.ace_dark .ace_fold-widget:active {
  box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
}
.ace_fold-widget.ace_invalid {
  background-color: #FFB4B4;
  border-color: #DE5555;
}
.ace_fade-fold-widgets .ace_fold-widget {
  -webkit-transition: opacity 0.4s ease 0.05s;
  transition: opacity 0.4s ease 0.05s;
  opacity: 0;
}
.ace_fade-fold-widgets:hover .ace_fold-widget {
  -webkit-transition: opacity 0.05s ease 0.05s;
  transition: opacity 0.05s ease 0.05s;
  opacity: 1;
}
.ace_underline {
  text-decoration: underline;
}
.ace_bold {
  font-weight: bold;
}
.ace_nobold .ace_bold {
  font-weight: normal;
}
.ace_italic {
  font-style: italic;
}
.ace_error-marker {
  background-color: rgba(255, 0, 0, 0.2);
  position: absolute;
  z-index: 9;
}
.ace_highlight-marker {
  background-color: rgba(255, 255, 0, 0.2);
  position: absolute;
  z-index: 8;
}
.ace_lineWidgetContainer {
  z-index: 5;
  position: absolute;
}
.ace_br1 {
  border-top-left-radius: 3px;
}
.ace_br2 {
  border-top-right-radius: 3px;
}
.ace_br3 {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.ace_br4 {
  border-bottom-right-radius: 3px;
}
.ace_br5 {
  border-top-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
.ace_br6 {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.ace_br7 {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.ace_br8 {
  border-bottom-left-radius: 3px;
}
.ace_br9 {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.ace_br10 {
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.ace_br11 {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.ace_br12 {
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.ace_br13 {
  border-top-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.ace_br14 {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.ace_br15 {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}

.ace-tm .ace_gutter {
  background: #f0f0f0;
  color: #333;
}
.ace-tm .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}
.ace-tm .ace_fold {
  background-color: #6B72E6;
}
.ace-tm {
  background-color: #FFFFFF;
  color: black;
}
.ace-tm .ace_cursor {
  color: black;
}
.ace-tm .ace_invisible {
  color: #bfbfbf;
}
.ace-tm .ace_storage,
.ace-tm .ace_keyword {
  color: blue;
}
.ace-tm .ace_constant {
  color: #c5060b;
}
.ace-tm .ace_constant.ace_buildin {
  color: #5848f6;
}
.ace-tm .ace_constant.ace_language {
  color: #585cf6;
}
.ace-tm .ace_constant.ace_library {
  color: #06960e;
}
.ace-tm .ace_invalid {
  background-color: rgba(255, 0, 0, 0.1);
  color: red;
}
.ace-tm .ace_support.ace_function {
  color: #3c4c72;
}
.ace-tm .ace_support.ace_constant {
  color: #06960e;
}
.ace-tm .ace_support.ace_type,
.ace-tm .ace_support.ace_class {
  color: #6d79de;
}
.ace-tm .ace_keyword.ace_operator {
  color: #687687;
}
.ace-tm .ace_string {
  color: #036a07;
}
.ace-tm .ace_comment {
  color: #4c886b;
}
.ace-tm .ace_comment.ace_doc {
  color: #0066ff;
}
.ace-tm .ace_comment.ace_doc.ace_tag {
  color: #809fbf;
}
.ace-tm .ace_constant.ace_numeric {
  color: #0000cd;
}
.ace-tm .ace_variable {
  color: #318495;
}
.ace-tm .ace_xml-pe {
  color: #68685b;
}
.ace-tm .ace_entity.ace_name.ace_function {
  color: #0000A2;
}
.ace-tm .ace_heading {
  color: #0c07ff;
}
.ace-tm .ace_list {
  color: #b90690;
}
.ace-tm .ace_meta.ace_tag {
  color: #00168e;
}
.ace-tm .ace_string.ace_regex {
  color: #ff0000;
}
.ace-tm .ace_marker-layer .ace_selection {
  background: #b5d5ff;
}
.ace-tm.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px white;
}
.ace-tm .ace_marker-layer .ace_step {
  background: #fcff00;
}
.ace-tm .ace_marker-layer .ace_stack {
  background: #a4e565;
}
.ace-tm .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #c0c0c0;
}
.ace-tm .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.07);
}
.ace-tm .ace_gutter-active-line {
  background-color: #dcdcdc;
}
.ace-tm .ace_marker-layer .ace_selected-word {
  background: #fafaff;
  border: 1px solid #c8c8fa;
}
.ace-tm .ace_indent-guide {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;
}

.filetree .status-icon.clickable {
  pointer-events: auto;
  cursor: pointer;
}
.filetree .status-icon {
  color: #8DCA57;
  margin: 0 4px;
}
.filetree .status-icon-conflict {
  color: #E466C7;
}
.filetree .heading .status-icon {
  display: none;
}
.filetree .tree-row.merge {
  color: lightgray;
}
.tree-row {
  white-space: nowrap;
}
.branch {
  color: black;
  border-radius: 5px;
  background: #f9f796;
  border: 1px solid #DDDE33;
  padding: 0 4px !important;
  margin-right: 2px;
  margin-top: -1px;
  color: #333;
}
.difftoolbar {
  border-bottom: 1px solid #dedede;
}
.difftoolbar .buttons {
  background-color: #F9F9F9;
  border-radius: 5px;
  border: 1px solid #dedede;
}
.difftoolbar .hash {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
  padding: 4px 4px 3px;
  display: inline-block;
  border-radius: 4px;
  background: #f9f796;
  border: 1px solid #DDDE33;
  margin-right: 7px;
  font-size: 12px;
  color: #333;
}
.difftoolbar .right .hash {
  position: absolute;
  right: 5px;
  top: 5px;
  margin-right: 0;
}
.has_apf .ace_diff-gutter {
  background-color: rgba(0, 0, 0, 0.1) !important;
  border-left: 0 !important;
  border-right: 1px solid black !important;
  box-shadow: 1px 0 transparent;
  z-index: 10;
}
.has_apf .ace_dark.ace_diff-gutter {
  background-color: rgba(255, 255, 255, 0.1) !important;
}
.difftoolbar .dirname {
  color: #BBBBBB;
}
.detail-label {
  padding: 6px 5px 7px 5px;
  font-size: 12px;
  background-color: #F6F6F6;
  border-bottom: none;
  box-shadow: none;
}
.detail-label .hash {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
  padding: 2px 4px 1px;
  display: inline-block;
  border-radius: 4px;
  background: #f9f796;
  border: 1px solid #DDDE33;
  color: #333;
  margin-right: 6px;
  font-size: 12px;
}
.detail-label {
  line-height: 1.5em;
  color: #333333;
}
.detail-tree {
  flex: 1;
  position: relative;
}
.detail-root {
  display: flex;
  flex-direction: column;
}
.form-bar {
  padding: 10px 10px 0 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #DEDEDE;
  margin: 0px;
  background-color: #ffffff;
  box-shadow: 0 1px transparent;
}
.changes > .c9-menu-btnDown,
.changes > .splitbutton div.c9-menu-btnDown:first-child {
  height: 31px;
  box-shadow: 0 1px transparent inset, -1px 1px #dedede !important;
}
.changes .splitbutton > div.c9-menu-btnDown:first-child:after {
  top: 0;
  bottom: 0;
}
.top-test-panel {
  border-bottom: 1px solid #dedede;
  overflow: auto;
}
.panel-settings.changes {
  top: 83px;
}

.notifications-bubble {
  position: relative;
  border: 1px solid #DEDEDE;
  border-radius: 8px;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj5jZW50ZXIgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMTAwJSIgeDI9IjAlIiB5Mj0iMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkYiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0ZGRiIgc3RvcC1vcGFjaXR5PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2dyYWQtdWNnZy1nZW5lcmF0ZWQpIiAvPjwvc3ZnPg==);
  background-image: -moz-linear-gradient(center bottom, #FFF 0%, #FFF 100%);
  background-image: -webkit-linear-gradient(center bottom, #FFF 0%, #FFF 100%);
  background-image: -o-linear-gradient(center bottom, #FFF 0%, #FFF 100%);
  background-image: linear-gradient(center bottom, #FFF 0%, #FFF 100%);
  padding: 10px 15px;
  color: #333;
  margin-top: 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.09);
  font-weight: normal;
}
.notifications-bubble.notifier_hidden {
  opacity: 0;
}
.notifications-bubble .close-notifier {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/close_tab_btn_flat_light.png);
  background-repeat: no-repeat;
  background-position: 0 0;
  width: 13px;
  height: 13px;
  position: absolute;
  top: 5px;
  right: 5px;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .notifications-bubble .close-notifier {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/close_tab_btn_flat_light@2x.png);
    background-size: 42px 28px;
  }
}
.notifications-bubble .close-notifier:hover {
  background-position: -14px 0;
}
.notifications-bubble .close-notifier:active {
  background-position: -28px 0;
}
.notifications-bubble .gravatar-image {
  height: 25px;
  width: 25px;
  float: left;
  margin-right: 5px;
  border: 1px solid #aaaaaa;
}
.notifications-bubble .notification_sub {
  color: #B3B3B3;
  font-weight: normal;
  display: block;
  font-size: 11px;
}

.c9-menu-btn.titlebar {
  position: absolute;
  z-index: 100000000;
  right: 24px;
  top: 1px;
  height: 19px;
}
.c9-menu-btn.titlebar:not(.c9-menu-btnDown) {
  height: 18px;
  border-bottom: 1px solid black;
}
.fullscreen > .btnName {
  display: none;
}
.btnName.c9-menu-btnIcon {
  text-indent: -2000px;
  overflow: hidden;
}
.btnName {
  padding: 13px 9px 0 9px;
  margin-left: 1px !important;
}
.btnName.c9-menu-btnmenuDown {
  margin-left: 0 !important;
}
.btnName .icon {
  background-size: 25px 25px !important;
  top: 7px !important;
  left: 8px !important;
  width: 25px;
  height: 25px;
  border-radius: 25px;
}

.splits {
  padding: 6px 20px 3px 22px !important;
  background: transparent;
}
.splits span {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.behaviors/images/splits_flat_light.png);
  background-repeat: no-repeat;
  background-position: 0 0;
  width: 23px;
  height: 18px;
  display: inline-block;
  margin: 0 10px 0 0;
  cursor: pointer;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .splits span {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.behaviors/images/splits_flat_light@2x.png);
    background-size: 138px 53px;
  }
}
.splits span.nosplit {
  background-position: 0          0;
}
.splits span.nosplit:hover {
  background-position: 0 -18px;
}
.splits span.nosplit:active {
  background-position: 0 -36px;
}
.splits span.twovsplit {
  background-position: -23px 0;
}
.splits span.twovsplit:hover {
  background-position: -23px -18px;
}
.splits span.twovsplit:active {
  background-position: -23px -36px;
}
.splits span.twohsplit {
  background-position: -46px 0;
}
.splits span.twohsplit:hover {
  background-position: -46px -18px;
}
.splits span.twohsplit:active {
  background-position: -46px -36px;
}
.splits span.foursplit {
  background-position: -69px 0;
}
.splits span.foursplit:hover {
  background-position: -69px -18px;
}
.splits span.foursplit:active {
  background-position: -69px -36px;
}
.splits span.threeleft {
  background-position: -92px 0;
}
.splits span.threeleft:hover {
  background-position: -92px -18px;
}
.splits span.threeleft:active {
  background-position: -92px -36px;
}
.splits span.threeright {
  background-position: -115px 0;
}
.splits span.threeright:hover {
  background-position: -115px -18px;
}
.splits span.threeright:active {
  background-position: -115px -36px;
}
.split-area {
  position: absolute;
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: none;
  z-index: 100000;
  pointer-events: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  cursor: default;
}
.dark.split-area {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 200px rgba(255, 255, 255, 0.15) inset;
  outline: 1px solid black;
}

@keyframes corePulse {
  from {
    background: #CCC;
  }
  10% {
    box-shadow: 0 0 0px #333;
  }
  30% {
    background: #AAA;
    box-shadow: 0 0 10px #CCC;
  }
  35% {
    box-shadow: 0 0 10px #cccccc;
  }
  to {
    background: #CCC;
    box-shadow: none;
  }
}
@keyframes ringPulse {
  from {
    border-color: #CCC;
    box-shadow: 0;
  }
  10% {
    border-color: #CCC;
    box-shadow: 0;
  }
  20% {
    border-color: #AAA;
    box-shadow: 0 0 0px #666;
  }
  60% {
    border-color: #CCC;
  }
  80% {
    box-shadow: 0 0 10px rgba(204, 204, 204, 0.1);
  }
  to {
    box-shadow: none;
  }
}
.thingy {
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: #CCC;
  position: absolute;
  z-index: 100000;
  cursor: pointer;
  transition: .5s;
  animation-name: corePulse;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
}
.thingy:after {
  content: "";
  display: block;
  position: absolute;
  left: -4px;
  top: -4px;
  border-radius: 10px;
  width: 14px;
  height: 14px;
  border: 2px solid #CCC;
  transition: .5s;
  animation-name: ringPulse;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
}
.thingy:hover,
.thingy.active {
  animation: none;
  background: #555;
  box-shadow: 0;
}
.thingy:hover:after,
.thingy.active:after {
  animation: none;
  border-color: #555;
}
.thingy-popup {
  position: absolute;
  background: white;
  border-radius: 3px;
  padding: 20px;
  box-shadow: 0 0 17px 0 rgba(0, 0, 0, 0.2);
  width: 350px;
  z-index: 100001;
}
.thingy-popup > .close {
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.guide/images/close_tab_btn_flat_light@2x.png");
  background-size: 42px 28px;
  position: absolute;
  right: 20px;
  top: 20px;
  width: 14px;
  height: 14px;
  cursor: pointer;
  background-position: 0 -14px;
}
.thingy-popup > .close:hover {
  background-position: -14px -14px;
}
.thingy-popup > p {
  line-height: 1.4em;
  color: #5F5F5F;
  font-size: 1.1em;
}
.thingy-popup p a {
  font-size: 13px;
}
.thingy-popup.blue p a {
  color: #2C91DE;
}
.thingy-popup.green p a {
  color: #7FB959;
}
.thingy-popup.orange p a {
  color: #E2B013;
}
.thingy-popup > .tourButtons {
  text-align: right;
  padding-top: 10px;
}
.thingy-popup .skip {
  display: inline-block;
  margin-right: 15px;
  color: #8E8E8E;
  -webkit-font-smoothing: antialiased;
}
.thingy-popup .skip:hover {
  color: #666;
}
.thingy-popup > .title {
  font-size: 21px;
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  padding: 20px 40px 20px 20px;
  display: block;
  background: white;
  margin: -20px -20px 0 -20px;
  color: white;
  -webkit-font-smoothing: antialiased;
}
.thingy-popup.blue .title {
  background: #2C91DE;
}
.thingy-popup.green .title {
  background: #7FB959;
}
.thingy-popup.orange .title {
  background: #E2B013;
}
.thingy-popup .balloon {
  content: "";
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  border: 0px outset white;
  border-width: 30px 30px 0 0;
  z-index: 0;
  border-color: white transparent;
  left: 30px;
  top: -14px;
  transform: rotate(45deg);
  -webkit-clip-path: polygon(0px 0px, 100% 0%, 0% 100%);
  clip-path: polygon(0px 0px, 100% 0%, 0% 100%);
}
.thingy-popup.blue .balloon {
  border-color: #2C91DE transparent;
}
.thingy-popup.green .balloon {
  border-color: #7FB959 transparent;
}
.thingy-popup.orange .balloon {
  border-color: #E2B013 transparent;
}
.thingy-popup .balloon.white {
  border-color: white transparent;
}
.thingy-popup.balloon-bottom .balloon {
  left: 30px;
  top: auto;
  bottom: -14px;
  transform: rotate(225deg);
}
.thingy-popup.balloon-left .balloon {
  left: -14px;
  top: 30px;
  transform: rotate(-45deg);
}
.thingy-popup.balloon-right .balloon {
  right: -14px;
  left: auto;
  top: 30px;
  transform: rotate(-225deg);
}
.thingy-popup.balloon-left.balloon-top .balloon {
  top: -13px;
  left: -3px;
  transform: skew(43deg) rotate(25deg);
  border-width: 50px 50px 0 0;
}
.thingy-popup .arrow {
  font-size: 1.3em;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  width: 14px;
}

#c9Version {
  position: absolute;
  top: 80px;
  left: 151px;
  color: #7e7e7e;
  font-size: 9px;
  padding-left: 12px;
  width: 193px;
  text-align: center;
}
.c9Legal {
  position: absolute;
  top: 60px;
  left: 225px;
  display: none;
}
.c9Staff {
  position: absolute;
  top: 170px;
  left: 92px;
  color: #aaaaaa;
  font-size: 11px;
  width: 390px;
  line-height: 16px;
}
.c9StaffHeader {
  text-transform: uppercase;
  color: #dddddd;
  font-size: 10px;
  position: absolute;
  top: 140px;
  left: 170px;
}
.c9Copyright {
  position: absolute;
  bottom: 45px;
  left: 155px;
  font-size: 10px;
  color: #aaaaaa;
}

.win-help-about {
  overflow: hidden;
}
.win-help-about .wh-container {
  overflow: visible;
  z-index: 1;
  position: relative;
}
.aboutDialogBox .aboutImage {
  position: relative;
  color: white;
  background: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.help/images/about_cloud.png) no-repeat 0 0;
  width: 515px;
  height: 339px;
}
.win-help-about .buttons {
  position: absolute;
  top: 68px;
  right: 78px;
  z-index: 2;
}
.win-help-about .buttons .close {
  height: 20px;
  width: 19px;
  background: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.help/images/close.png) no-repeat 4px 3px;
}
.win-help-about .buttons .close.hover {
  background-position: -14px 3px;
}
.win-help-about .buttons .close.down {
  background-position: -31px 3px;
}

.ace_static_highlight {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', 'Droid Sans Mono', monospace;
  font-size: 12px;
  white-space: pre-wrap;
}
.ace_static_highlight .ace_gutter {
  width: 2em;
  text-align: right;
  padding: 0 3px 0 0;
  margin-right: 3px;
}
.ace_static_highlight.ace_show_gutter .ace_line {
  padding-left: 2.6em;
}
.ace_static_highlight .ace_line {
  position: relative;
}
.ace_static_highlight .ace_gutter-cell {
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  top: 0;
  bottom: 0;
  left: 0;
  position: absolute;
}
.ace_static_highlight .ace_gutter-cell:before {
  content: counter(ace_line, decimal);
  counter-increment: ace_line;
}
.ace_static_highlight {
  counter-reset: ace_line;
}

.rawview {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  color: #f1f1f1;
  overflow: auto;
  margin: 0;
  padding: 10px;
  background-color: #2a3a2d;
}
.rawview::selection {
  background: #748512;
}
.rawview::-moz-selection {
  background: #748512;
}

.toolbar-top.previewbar {
  box-shadow: none;
  z-index: 1;
  border-top: 0;
  background: #f1f1f1;
  height: 37px !important;
}
.previewbar .searchbox.tb_console .sbtb_middle {
  padding: 2px 7px 2px 7px;
  padding-right: 7px !important;
}
.previewbar .locationbar {
  display: flex;
  display: -webkit-flex;
  display: -ms-flex;
}
.previewbar .locationbar .ace_searchbox {
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.previewbar .locationbar .ace_searchbox .sbtb_middle {
  border-radius: 3px 0 0 3px;
  border-right: 0;
}
.previewbar .c9-toolbarbutton-glossy {
  height: 24px !important;
}
.previewbar .c9-toolbarbutton-glossy .c9-icon {
  width: 24px;
  height: 23px;
  display: block;
  top: 0;
}
.previewbar .preview-label {
  padding-top: 5px;
}
.previewbar .c9-toolbarbutton-glossy.close .c9-icon {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.preview/images/c9-preview-repeat_flat_light.png) !important;
  background-repeat: no-repeat;
  background-position: 0 -65px;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .previewbar .c9-toolbarbutton-glossy.close .c9-icon {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.preview/images/c9-preview-repeat_flat_light@2x.png) !important;
    background-size: 23px 280px !important;
  }
}
.previewbar .c9-toolbarbutton-glossy.refresh .c9-icon {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.preview/images/c9-preview-repeat_flat_light.png) !important;
  background-repeat: no-repeat;
  background-position: 0 -88px;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .previewbar .c9-toolbarbutton-glossy.refresh .c9-icon {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.preview/images/c9-preview-repeat_flat_light@2x.png) !important;
    background-size: 23px 280px !important;
  }
}
.previewbar .c9-toolbarbutton-glossy.popout .c9-icon {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.preview/images/c9-preview-repeat_flat_light.png) !important;
  background-repeat: no-repeat;
  background-position: 0 -113px;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .previewbar .c9-toolbarbutton-glossy.popout .c9-icon {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.preview/images/c9-preview-repeat_flat_light@2x.png) !important;
    background-size: 23px 280px !important;
  }
}
.previewbar .c9-toolbarbutton-glossy.settings .c9-icon {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.preview/images/c9-preview-repeat_flat_light.png) !important;
  background-repeat: no-repeat;
  background-position: -1px -33px;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .previewbar .c9-toolbarbutton-glossy.settings .c9-icon {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.preview/images/c9-preview-repeat_flat_light@2x.png) !important;
    background-size: 23px 280px !important;
  }
}
.previewbar .c9-toolbarbutton-glossy.goforward .c9-icon {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.preview/images/c9-preview-repeat_flat_light.png) !important;
  background-repeat: no-repeat;
  background-position: 0 -184px;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .previewbar .c9-toolbarbutton-glossy.goforward .c9-icon {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.preview/images/c9-preview-repeat_flat_light@2x.png) !important;
    background-size: 23px 280px !important;
  }
}
.previewbar .c9-toolbarbutton-glossyDisabled.goforward .c9-icon {
  background-position: 0 -209px;
}
.previewbar .c9-toolbarbutton-glossy.goback .c9-icon {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.preview/images/c9-preview-repeat_flat_light.png) !important;
  background-repeat: no-repeat;
  background-position: 0 -136px;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .previewbar .c9-toolbarbutton-glossy.goback .c9-icon {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.preview/images/c9-preview-repeat_flat_light@2x.png) !important;
    background-size: 23px 280px !important;
  }
}
.previewbar .c9-toolbarbutton-glossyDisabled.goback .c9-icon {
  background-position: 0 -161px;
}

.installer .page {
  padding: 0 0 5px 0;
  line-height: 1.5em;
  height: 100%;
  position: relative;
  box-sizing: border-box;
}
.installer .page h3 {
  margin-top: 0;
}
.installer .choice {
  margin: 0;
  padding: 0;
}
.installer .choice li {
  list-style-type: none;
  margin: 0 0 4px 20px;
}
.installer .intro h4 {
  margin-bottom: 0;
}
.installer .intro p {
  margin-top: 3px;
}
.installer pre.code {
  background: #c4c4c4;
  padding: 10px;
  border-radius: 3px;
  font-family: Monaco, Menlo, 'Ubuntu Mono', Consolas, source-code-pro, monospace;
  border: 1px solid #a3a3a3;
  font-size: 11px;
}
.installer .execute {
  background: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border-top: 0;
  box-shadow: none;
  height: 100%;
}
.installer .execute .title {
  color: #333;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 20px;
  text-shadow: none;
}
.installer .execute .install-spinner {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/tab-save-spinner-active_flat_light.png);
  background-repeat: no-repeat;
  -webkit-animation: loading-24-spinner 1.2s steps(24) infinite;
  -moz-animation: loading-24-spinner 1.2s steps(24) infinite;
  -o-animation: loading-24-spinner 1.2s steps(24) infinite;
  -ms-animation: loading-24-spinner 1.2s steps(24) infinite;
  animation: loading-24-spinner 1.2s steps(24) infinite;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .installer .execute .install-spinner {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/tab-save-spinner-active_flat_light@2x.png);
    background-size: 336px 14px;
  }
}
.installer .execute .log {
  position: absolute;
  left: 0px;
  top: 40px;
  right: 0px;
  bottom: 0px;
  background: #153649;
  padding: 20px 20px 20px 20px;
  overflow: auto;
  color: #333;
  line-height: 1.4em;
  font-family: Ubuntu Mono, Menlo, Consolas, monospace;
  font-size: 12px;
  margin: 0;
  border-radius: 3px;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0RGRUZGOSIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjREZFRkY5IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(top, #DFEFF9 0%, #DFEFF9 100%);
  background-image: -webkit-linear-gradient(top, #DFEFF9 0%, #DFEFF9 100%);
  background-image: -o-linear-gradient(top, #DFEFF9 0%, #DFEFF9 100%);
  background-image: linear-gradient(top, #DFEFF9 0%, #DFEFF9 100%);
  border: 0;
  border-color: white;
  box-shadow: none;
}
.installer .execute .log .ace_editor {
  background-color: transparent !important;
  color: #333 !important;
  font-family: Menlo, 'Ubuntu Mono', Consolas, source-code-pro, monospace, Monaco;
}
.installer .execute .log .output {
  display: none;
  color: gray;
  margin: 10px;
}
.installer .execute .log.details .output {
  display: block;
}
.installer .execute .log .error {
  color: orange;
}
.installer .execute .cb {
  position: absolute;
  top: 20px;
  right: 1px;
}
.installer .execute .cb label {
  font-family: Arial;
  font-size: 12px;
  color: #333;
}
.installer .execute .progress {
  position: absolute;
  left: 90px;
  bottom: -50px;
  font-family: arial;
  font-size: 12px;
  color: #333;
  padding-left: 20px;
}
.installer .execute .progress span {
  width: 14px;
  height: 14px;
  display: block;
  position: absolute;
  left: 3px;
  top: 2px;
}
.installer .intro blockquote,
.installer .overview blockquote,
.installer .complete blockquote {
  margin: 0;
  height: 100%;
}
.installer .overview blockquote {
  height: auto;
  position: absolute;
  left: 0px;
  top: 45px;
  bottom: 0px;
  right: 0px;
}
.installer .ace_tree .tree-row.required .checkbox {
  outline: none !important;
  background-color: transparent !important;
}

.process-list {
  height: 300px;
  margin: 0;
}
.process-list .blackdg {
  position: absolute;
  left: 20px;
  top: 20px;
  right: 20px;
  bottom: 20px;
}

.panelsbar {
  border-left: 1px solid transparent;
  border-top: 1px solid transparent;
  box-shadow: 0 -1px 0 #dedede;
  -webkit-transform-origin: 17px 18px;
  -moz-transform-origin: 17px 18px;
  -o-transform-origin: 17px 18px;
  -ms-transform-origin: 17px 18px;
  transform-origin: 17px 18px;
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  background: #f1f1f1;
  /* url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/c9-noise.png);*/
  height: 34px;
  white-space: nowrap;
  position: absolute;
  top: -1px;
  width: 10000px;
  z-index: 10000;
}
.basic.right .panelsbar {
  border-left: 0;
  border-top: 0;
  border-bottom: 1px solid transparent;
  box-shadow: 0px 1px 0 #dedede;
  left: 100%;
  margin-left: -35px;
  position: absolute;
  top: 0;
}
.basic.left {
  box-shadow: 1px 0 0 transparent;
}
.basic.right {
  box-shadow: 1px 0 0 transparent inset;
}
.basic.left,
.basic.right {
  overflow: hidden;
  z-index: 100000;
}
.panelsbutton {
  padding: 10px 10px 6px 10px;
  display: inline-block;
  white-space: nowrap;
  cursor: default;
  margin-left: -1px;
  margin-right: 2px;
  font-family: Helvetica, Arial;
  font-size: 13px;
  color: #333333;
  text-shadow: 0 0 1px white;
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
  height: 18px;
}
.panelsbutton {
  height: 19px;
  margin-top: -1px;
}
.right .panelsbutton {
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  transform: rotate(0deg);
}
.right .panelsbutton {
  margin-top: 0;
  margin-bottom: -1px;
}
.panelsbutton:hover {
  background: #e6e6e6;
}
.panelsbuttonDown,
.panelsbuttonDown:hover {
  color: #333333;
  background: #fbfbfb;
  border-left: 1px solid #dedede;
  border-right: 1px solid #dedede;
  box-shadow: -1px 0 transparent inset, -1px 0 transparent;
  margin-left: -2px;
  margin-right: 1px;
  vertical-align: top;
  margin-top: -2px;
  padding-bottom: 8px;
  height: 18px;
}
.right .panelsbuttonDown,
.right .panelsbuttonDown:hover {
  border-left: 1px solid #dedede;
  border-right: 1px solid #dedede;
  box-shadow: 1px 0 transparent inset, 1px 0 transparent;
  margin-top: 0;
}

.outline .tree-row .caption {
  padding: 4px 5px;
  display: inline-block;
}
.outline.ace_tree {
  border: none;
  background: transparent;
  color: #333333;
}
.outline.ace_tree .toggler {
  margin: 4px 0 0 3px;
}
.outline.ace_tree .toggler:not(.empty) {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/images/tree_close_arrow_small_dark_flat_light.png);
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .outline.ace_tree .toggler:not(.empty) {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/images/tree_close_arrow_small_dark_flat_light@2x.png);
    background-size: 20px 10px;
  }
}
.outline.ace_tree .ace_tree_cell-layer > div > span {
  vertical-align: top;
  font-size: 11px;
  font-family: Tahoma, Arial;
  line-height: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.outline.ace_tree .ace_tree_cell-layer > div > span:first-child {
  padding: 0 0 0 0;
}
.outline.ace_tree .tree-row strong {
  color: #2882be;
}
.outline.ace_tree .tree-row.selected strong {
  color: #f1f1f1;
}
.outline.ace_tree.focus .tree-row.selected .toggler:not(.empty) {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/images/tree_close_arrow_small_flat_light.png);
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .outline.ace_tree.focus .tree-row.selected .toggler:not(.empty) {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/images/tree_close_arrow_small_flat_light@2x.png);
    background-size: 20px 10px;
  }
}
.outline.ace_tree .tree-row {
  border-radius: 2px;
  cursor: pointer;
}
.outline.ace_tree .tree-row:hover,
.outline.ace_tree .tree-row.hover {
  background: #efefef;
  color: #333333;
}
.outline.ace_tree .tree-row.selected {
  background: #eaeaea;
  color: #333333;
}
.outline.ace_tree.focus .tree-row.selected {
  background: #63acff;
  color: #ffffff;
}
.outline.ace_tree .tree-row .icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin: 1px -4px 0 0;
}
.outline.ace_tree .tree-row .icon.event {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.language/images/event_flat_light.png);
  background-repeat: no-repeat;
  background-position: 4px;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .outline.ace_tree .tree-row .icon.event {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.language/images/event_flat_light@2x.png);
    background-size: 8px 8px;
  }
}
.outline.ace_tree .tree-row .icon.method {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.language/images/method_flat_light.png);
  background-repeat: no-repeat;
  background-position: 4px;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .outline.ace_tree .tree-row .icon.method {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.language/images/method_flat_light@2x.png);
    background-size: 8px 8px;
  }
}
.outline.ace_tree .tree-row .icon.method2 {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.language/images/method2_flat_light.png);
  background-repeat: no-repeat;
  background-position: 4px;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .outline.ace_tree .tree-row .icon.method2 {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.language/images/method2_flat_light@2x.png);
    background-size: 8px 8px;
  }
}
.outline.ace_tree .tree-row .icon.package {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.language/images/package_flat_light.png);
  background-repeat: no-repeat;
  background-position: 4px;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .outline.ace_tree .tree-row .icon.package {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.language/images/package_flat_light@2x.png);
    background-size: 8px 8px;
  }
}
.outline.ace_tree .tree-row .icon.property {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.language/images/property_flat_light.png);
  background-repeat: no-repeat;
  background-position: 4px;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .outline.ace_tree .tree-row .icon.property {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.language/images/property_flat_light@2x.png);
    background-size: 8px 8px;
  }
}
.outline.ace_tree .tree-row .icon.property2 {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.language/images/property2_flat_light.png);
  background-repeat: no-repeat;
  background-position: 4px;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .outline.ace_tree .tree-row .icon.property2 {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.language/images/property2_flat_light@2x.png);
    background-size: 8px 8px;
  }
}
.lang-icon-event {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.language/images/event_flat_light.png) !important;
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .lang-icon-event {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.language/images/event_flat_light@2x.png) !important;
    background-size: 8px 8px !important;
  }
}
.lang-icon-method {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.language/images/method_flat_light.png) !important;
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .lang-icon-method {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.language/images/method_flat_light@2x.png) !important;
    background-size: 8px 8px !important;
  }
}
.lang-icon-method2 {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.language/images/method2_flat_light.png) !important;
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .lang-icon-method2 {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.language/images/method2_flat_light@2x.png) !important;
    background-size: 8px 8px !important;
  }
}
.lang-icon-package {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.language/images/package_flat_light.png) !important;
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .lang-icon-package {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.language/images/package_flat_light@2x.png) !important;
    background-size: 8px 8px !important;
  }
}
.lang-icon-property {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.language/images/property_flat_light.png) !important;
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .lang-icon-property {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.language/images/property_flat_light@2x.png) !important;
    background-size: 8px 8px !important;
  }
}
.lang-icon-property2 {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.language/images/property2_flat_light.png) !important;
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .lang-icon-property2 {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.language/images/property2_flat_light@2x.png) !important;
    background-size: 8px 8px !important;
  }
}
.outline.ace_tree .message {
  font-size: 11px;
}

.searchresults.ace_tree {
  background: transparent !important;
  border: none !important;
}
.searchresults {
  position: relative;
}
.searchresults .item {
  background: transparent;
  color: #333333;
  padding: 2px 3px 4px 5px;
  margin: 1px 0px;
}
.searchresults .item {
  cursor: pointer;
  border-radius: 3px;
}
.searchresults .item:not(.selected):hover,
.searchresults .item:not(.selected).hover {
  background: #efefef;
  color: #333333;
}
.searchresults .item > span {
  font-size: 12px;
  display: block;
  padding: 2px 2px 0 2px;
  font-weight: bold;
}
.searchresults .item .path {
  font-size: 10px;
  word-wrap: break-word;
  line-height: 14px;
  font-weight: normal;
}
.searchresults .item.selected {
  background: #63acff;
}
.searchresults .item.selected span {
  color: #ffffff;
}
.searchresults .message {
  border: 0;
  padding: 3px;
  text-align: center;
  background: transparent !important;
  font-size: 11px;
  color: #333333;
}
.searchresults .item span strong {
  color: #2882be;
}
.searchresults .item.selected span strong {
  color: #f1f1f1;
  font-weight: bold;
}
.searchresults .item.notAvailable {
  color: rgba(255, 255, 255, 0.3);
}
.searchresults .item .keys {
  float: right;
  color: #969696;
  text-shadow: none;
  max-width: 70%;
  font-weight: normal;
}
.searchresults .item.notAvailable .keys {
  text-shadow: none;
  color: inherit;
}
.searchresults .item .caption {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}

.navigate-search {
  position: absolute !important;
  height: 27px !important;
  left: 10px;
  top: 10px;
  right: 10px;
}
.navigate-list {
  position: absolute !important;
  top: 47px !important;
  right: 10px;
  left: 10px;
  bottom: 0;
}
.searchresults.ace_tree {
  background: transparent !important;
  border: none !important;
  font-family: Helvetica, Arial, sans-serif !important;
}
.searchresults {
  position: relative;
}
.searchresults .item {
  background: transparent;
  color: #333333;
  padding: 2px 3px 4px 5px;
  margin: 1px 0px;
}
.searchresults .item {
  cursor: pointer;
  border-radius: 3px;
}
.searchresults .item:not(.selected):hover,
.searchresults .item:not(.selected).hover {
  background: #efefef;
  color: #333333;
}
.searchresults .item > span {
  font-size: 13px;
  display: block;
  padding: 2px 2px 0 2px;
  font-weight: bold;
}
.searchresults .item .path {
  font-size: 11px;
  word-wrap: break-word;
  line-height: 14px;
  font-weight: normal;
}
.searchresults .item.selected {
  background: #63acff;
}
.searchresults .item.selected span {
  color: #ffffff;
}
.searchresults .message {
  border: 0;
  padding: 3px;
  text-align: center;
  background: transparent !important;
  font-size: 12px;
  color: #333333;
}
.searchresults .item span strong {
  color: #2882be;
}
.searchresults .item.selected span strong {
  color: #f1f1f1;
  font-weight: bold;
}

.filetree.ace_tree {
  background: transparent;
  border: none;
  font: 11px Tahoma, Arial;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}
.filetree .tree-row {
  background: transparent;
  color: #333333;
  border-radius: 3px;
  margin: 0px 0px 0px 10px;
  padding-left: 6px;
  height: 22px;
}
.filetree .tree-row.selected {
  background: #eaeaea;
  border-color: transparent;
  color: #333333;
}
.filetree .tree-row.projectRoot:first-child {
  margin-right: 40px;
}
.filetree.ace_tree_focus .tree-row.selected {
  background: #63acff;
  color: #ffffff;
}
.filetree.ace_tree_focus.alternative .tree-row.selected {
  background: #63acff;
  color: #ffffff;
}
.filetree .message {
  border: 0;
  padding: 3px;
  text-align: center;
  background: transparent;
  font-size: 11px;
  margin: 20px 10px 0 10px;
  word-wrap: break-word;
  white-space: normal;
  color: #BBB;
  line-height: 1.5em;
}
.filetree .tree-row .toggler {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/images/tree_close_arrow_small_dark_flat_light.png);
  background-repeat: no-repeat;
  margin: 0 1px 0 0;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .filetree .tree-row .toggler {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/images/tree_close_arrow_small_dark_flat_light@2x.png);
    background-size: 20px 10px;
  }
}
.filetree.ace_tree_focus .tree-row.selected .toggler {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/images/tree_close_arrow_small_flat_light.png);
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .filetree.ace_tree_focus .tree-row.selected .toggler {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/images/tree_close_arrow_small_flat_light@2x.png);
    background-size: 20px 10px;
  }
}
.filetree .tree-row > span {
  vertical-align: middle;
  padding: 1px 1px 1px 1px;
  line-height: 20px;
  display: inline-block;
}
.filetree .filetree-icon {
  width: 16px;
  height: 16px;
  padding: 0px;
  margin: 0px 1px;
  background-repeat: no-repeat;
}
.filetree-icon.folder {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/folder_flat_light.png);
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .filetree-icon.folder {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/folder_flat_light@2x.png);
    background-size: 18px 14px;
  }
}
.filetree.alternative .filetree-icon.folder {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/folder_flat_light.png);
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .filetree.alternative .filetree-icon.folder {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/folder_flat_light@2x.png);
    background-size: 18px 14px;
  }
}
.filetree .loading .filetree-icon,
.filetree .loading.filetree-icon {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/file-tree-load-spinner_flat_light.gif);
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .filetree .loading .filetree-icon,
  .filetree .loading.filetree-icon {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/file-tree-load-spinner_flat_light@2x.gif);
    background-size: 14px 14px;
  }
}
.filetree .loading.selected .filetree-icon,
.filetree .selected .loading.filetree-icon {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/file-tree-load-spinner-dark-unfocus_flat_light.gif);
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .filetree .loading.selected .filetree-icon,
  .filetree .selected .loading.filetree-icon {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/file-tree-load-spinner-dark-unfocus_flat_light@2x.gif);
    background-size: 14px 14px;
  }
}
.filetree.ace_tree_focus .loading.selected .filetree-icon,
.filetree.ace_tree_focus .selected .loading.filetree-icon {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/file-tree-load-spinner-selected_flat_light.gif);
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .filetree.ace_tree_focus .loading.selected .filetree-icon,
  .filetree.ace_tree_focus .selected .loading.filetree-icon {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/file-tree-load-spinner-selected_flat_light@2x.gif);
    background-size: 14px 14px;
  }
}
.filetree .symlink > .filetree-icon:after,
.filetree .favorite > .filetree-icon:after {
  content: "";
  display: block;
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/symlink.png") no-repeat;
  position: relative;
  width: 12px;
  height: 12px;
  top: 5px;
  left: -3px;
}
.filetree .favorite {
  opacity: 0.5;
}
.ace_tree .extrainfo {
  color: #CCC;
}
.ace_tree.ace_tree_focus .selected .extrainfo {
  color: #CCC;
}
.filetree .tree-row.dragAppendUpload .filetree-icon {
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/tree_upload_icon.png");
  background-position: -5px -1px;
}
.filetree.dragImage.copy:after {
  content: "+";
  background: rgba(99, 172, 255, 0.92);
  border: 1px #63acff solid;
  position: absolute;
  right: -6px;
  bottom: -6px;
  color: #ffffff;
  font-size: 14px;
  border-radius: 8px;
  width: 14px;
  height: 13px;
  text-align: center;
  line-height: 13px;
  font-weight: bold;
  font-family: monospace;
  background: -webkit-radial-gradient(5px 5px, circle, #7e8f1c, #4c5d00);
  background: radial-gradient(5px 5px, circle, #7e8f1c, #4c5d00);
  box-shadow: 0px 0px 7px 0px #000;
}
.filetree.dragImage .toggler {
  pointer-events: none;
}
.dragOver.filetree .tree-row.selected {
  background: rgba(234, 234, 234, 0.6);
}
.dragOver.filetree .tree-row.dropTarget {
  background: #63acff;
  box-shadow: 1px 1px rgba(99, 172, 255, 0.6) inset;
  color: #333333;
  border-radius: 3px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin-right: 5px;
}
.filetree .dragHighlight {
  position: absolute;
  border: solid 1px rgba(99, 172, 255, 0.6);
  border-right: rgba(0, 0, 0, 0);
  border-top: rgba(0, 0, 0, 0);
  background: rgba(99, 172, 255, 0.1);
}
.filetree .dragArrow {
  position: absolute;
  border: 1px solid #63acff;
  margin-top: 2px;
}
.filetree .dragArrow::before {
  content: "";
  background: #63acff;
  position: absolute;
  top: -3px;
  left: -3px;
  width: 6px;
  height: 6px;
  border-radius: 4px;
}
.ace_tree-editor {
  color: #101010;
  background-color: #f5f7ea;
  border: 1px solid #ffffff;
  height: 17px !important;
  margin-top: 1px !important;
}
.workspace_files {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  -webkit-flex-direction: column;
}
.workspace_files .filetree.real {
  flex: 1;
  -webkit-flex: 1;
}
.ace_tree .heading {
  font-variant: small-caps;
  font-size: 16px;
  margin-top: 0px;
  margin-bottom: 0px;
  color: #333333;
  text-shadow: none;
  line-height: 0;
}
.ace_tree .heading .toggler {
  display: none !important;
}
.ace_tree .heading .ace_tree-icon,
.ace_tree .heading .filetree-icon {
  display: none !important;
}

/* @todo try .3 */



.menu-button-minimized-before {
  top: 7px;
  left: 10px;
}
.menu-button-minimized-after {
  top: -8px;
  left: 10px;
}

.menu-button-minimized-before {
  top: 7px;
  left: 10px;
}
.menu-button-minimized-after {
  top: -8px;
  left: 10px;
}



@-webkit-keyframes rotation { 0% { -webkit-transform: rotate(0deg); transform: rotate(0deg);  } 100% {-webkit-transform: rotate(359deg); transform: rotate(359deg);}}
        @keyframes rotation { 0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); } 100% {-webkit-transform: rotate(359deg); transform: rotate(359deg); }}

@-webkit-keyframes running-spinner { 0%, 4.55% { background-position: -0px 0px; } 4.56%, 9.09% { background-position: -16px 0px; } 9.1%, 13.64% { background-position: -32px 0px; } 13.65%, 18.18% { background-position: -48px 0px; } 18.19%, 22.73% { background-position: -64px 0px; } 22.740000000000002%, 27.27% { background-position: -80px 0px; } 27.28%, 31.82% { background-position: -96px 0px; } 31.830000000000002%, 36.36% { background-position: -112px 0px; } 36.37%, 40.91% { background-position: -128px 0px; } 40.919999999999995%, 45.45% { background-position: -144px 0px; } 45.46%, 50% { background-position: -160px 0px; } 50.01%, 54.55% { background-position: -176px 0px; } 54.559999999999995%, 59.09% { background-position: -192px 0px; } 59.1%, 63.64% { background-position: -208px 0px; } 63.65%, 68.18% { background-position: -224px 0px; } 68.19000000000001%, 72.73% { background-position: -240px 0px; } 72.74000000000001%, 77.27% { background-position: -256px 0px; } 77.28%, 81.82% { background-position: -272px 0px; } 81.83%, 86.36% { background-position: -288px 0px; } 86.37%, 90.91% { background-position: -304px 0px; } 90.92%, 95.45% { background-position: -320px 0px; } 95.46000000000001%, 100% { background-position: -336px 0px; } }
   @-moz-keyframes running-spinner { 0%, 4.55% { background-position: -0px 0px; } 4.56%, 9.09% { background-position: -16px 0px; } 9.1%, 13.64% { background-position: -32px 0px; } 13.65%, 18.18% { background-position: -48px 0px; } 18.19%, 22.73% { background-position: -64px 0px; } 22.740000000000002%, 27.27% { background-position: -80px 0px; } 27.28%, 31.82% { background-position: -96px 0px; } 31.830000000000002%, 36.36% { background-position: -112px 0px; } 36.37%, 40.91% { background-position: -128px 0px; } 40.919999999999995%, 45.45% { background-position: -144px 0px; } 45.46%, 50% { background-position: -160px 0px; } 50.01%, 54.55% { background-position: -176px 0px; } 54.559999999999995%, 59.09% { background-position: -192px 0px; } 59.1%, 63.64% { background-position: -208px 0px; } 63.65%, 68.18% { background-position: -224px 0px; } 68.19000000000001%, 72.73% { background-position: -240px 0px; } 72.74000000000001%, 77.27% { background-position: -256px 0px; } 77.28%, 81.82% { background-position: -272px 0px; } 81.83%, 86.36% { background-position: -288px 0px; } 86.37%, 90.91% { background-position: -304px 0px; } 90.92%, 95.45% { background-position: -320px 0px; } 95.46000000000001%, 100% { background-position: -336px 0px; } }
       @-keyframes running-spinner { 0%, 4.55% { background-position: -0px 0px; } 4.56%, 9.09% { background-position: -16px 0px; } 9.1%, 13.64% { background-position: -32px 0px; } 13.65%, 18.18% { background-position: -48px 0px; } 18.19%, 22.73% { background-position: -64px 0px; } 22.740000000000002%, 27.27% { background-position: -80px 0px; } 27.28%, 31.82% { background-position: -96px 0px; } 31.830000000000002%, 36.36% { background-position: -112px 0px; } 36.37%, 40.91% { background-position: -128px 0px; } 40.919999999999995%, 45.45% { background-position: -144px 0px; } 45.46%, 50% { background-position: -160px 0px; } 50.01%, 54.55% { background-position: -176px 0px; } 54.559999999999995%, 59.09% { background-position: -192px 0px; } 59.1%, 63.64% { background-position: -208px 0px; } 63.65%, 68.18% { background-position: -224px 0px; } 68.19000000000001%, 72.73% { background-position: -240px 0px; } 72.74000000000001%, 77.27% { background-position: -256px 0px; } 77.28%, 81.82% { background-position: -272px 0px; } 81.83%, 86.36% { background-position: -288px 0px; } 86.37%, 90.91% { background-position: -304px 0px; } 90.92%, 95.45% { background-position: -320px 0px; } 95.46000000000001%, 100% { background-position: -336px 0px; } }
        
@-webkit-keyframes loading-spinner { from { background-position: 0 0; } to { background-position: -165px 0px; } }
   @-moz-keyframes loading-spinner { from { background-position: 0 0; } to { background-position: -165px 0px; } }
        @keyframes loading-spinner { from { background-position: 0 0; } to { background-position: -165px 0px; } }

@-webkit-keyframes saving { 0%, 10%, 100% { opacity: 1; } 50%, 60% { opacity: .3; } }
   @-moz-keyframes saving { 0%, 10%, 100% { opacity: 1; } 50%, 60% { opacity: .3; } }
       @-keyframes saving { 0%, 10%, 100% { opacity: 1; } 50%, 60% { opacity: .3; } }

@-webkit-keyframes loading-24-spinner { from { background-position: 0 0; } to { background-position: -336px 0px; } }
   @-moz-keyframes loading-24-spinner { from { background-position: 0 0; } to { background-position: -336px 0px; } }
        @keyframes loading-24-spinner { from { background-position: 0 0; } to { background-position: -336px 0px; } }

.loading-spinner {
    background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/tab-save-spinner-active.png") no-repeat;
    -webkit-animation: loading-spinner 1.2s steps(11) infinite;
            animation: loading-spinner 1.2s steps(11) infinite;
}

@-webkit-keyframes ball { 0%, 19.99%, 100% { background-position: 0 0 } 20%, 39.99% { background-position: -30px 0 } 40%, 59.99% { background-position: -60px 0 } 60%,79.99% { background-position: -90px 0 } 80%, 99.99% { background-position: -120px 0 } }
@-moz-keyframes ball { 0%, 19.99%, 100% { background-position: 0 0 } 20%, 39.99% { background-position: -30px 0 } 40%, 59.99% { background-position: -60px 0 } 60%,79.99% { background-position: -90px 0 } 80%, 99.99% { background-position: -120px 0 } }
@keyframes ball { 0%, 19.99%, 100% { background-position: 0 0 } 20%, 39.99% { background-position: -30px 0 } 40%, 59.99% { background-position: -60px 0 } 60%,79.99% { background-position: -90px 0 } 80%, 99.99% { background-position: -120px 0 } }
div.loading-ind {
    background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/loading-ind.png") no-repeat;
    height: 27px;
    width: 28px;
    -webkit-animation: ball .7s linear 0s infinite normal;
    -moz-animation: ball .7s linear 0s infinite normal;
    animation: ball .7s linear 0s infinite normal;
    position: absolute;
    left: 42%;
    top: 50px;
    z-index: 0;
}
HTML {
  overflow: hidden;
  background: #f1f1f1;
}
BODY {
  font-family: Helvetica, Arial, sans-serif;
  color: #222222;
  margin: 0;
  padding: 0 ;
  font-size: 13px;
  line-height: normal;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}
BODY.noInput * {
  pointer-events: none;
}
.ace_editor .ace_gutter {
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}
.disableIframe iframe {
  pointer-events: none;
}
.dialog-buttons {
  padding: 0 20px 20px !important;
  height: 30px !important;
}
.noscript {
  display: none;
}
.strong {
  font-weight: bold;
}
.cut.tree-row {
  opacity: 0.5;
}
.relative {
  position: relative;
}
/**
 * SERVICE SIGNIN BUTTONS
 */
.signin_options {
  margin: 0;
  text-align: right;
}
.github-signin {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/signin_github.png") no-repeat 0 0;
  display: inline-block;
  float: right;
  height: 24px;
  margin-left: 6px;
  margin-top: -5px;
  width: 26px;
}
.github-signin.btn-over {
  background-position: 0 -24px;
}
.bitbucket-signin {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/signin_bitbucket.png") no-repeat 0 0;
  display: inline-block;
  float: right;
  height: 24px;
  margin-left: 6px;
  margin-top: -5px;
  width: 26px;
}
.bitbucket-signin.btn-over {
  background-position: 0 -24px;
}
.facebook-signin {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/signin_facebook.png") no-repeat 0 0;
  display: inline-block;
  float: right;
  height: 24px;
  margin-left: 6px;
  margin-top: -5px;
  width: 26px;
}
.facebook-signin.btn-over {
  background-position: 0 -24px;
}
.google-signin {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/signin_google.png") no-repeat 0 0;
  display: inline-block;
  float: right;
  height: 24px;
  margin-left: 6px;
  margin-top: -5px;
  width: 26px;
}
.google-signin.btn-over {
  background-position: 0 -24px;
}
.twitter-signin {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/signin_twitter.png") no-repeat 0 0;
  display: inline-block;
  float: right;
  height: 24px;
  margin-left: 6px;
  margin-top: -5px;
  width: 26px;
}
.twitter-signin.btn-over {
  background-position: 0 -24px;
}
.view-mode-box {
  background-color: #232e38;
  color: #e9e9e9;
  font-size: 13px;
}
.c9-logo-view-mode {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/logo-viewmode.png") no-repeat 0 0;
  width: 210px;
  height: 35px;
}
.blue-label {
  color: #aec8de;
}
.green-label {
  color: #d2f4c7;
}
.yellow-label {
  color: #ffb017;
}
.white-label {
  color: #e9f8fd;
  font-size: 13px;
}
.nodecor-link {
  text-decoration: none;
}
.needsignin {
  font-size: 13px;
}
.rights-change {
  font-size: 11px;
  line-height: 15px;
  text-align: center;
}
.alertMsg {
  line-height: 1.3em;
}
.alertMsg a {
  color: #0f72c0;
}
.c9-offline,
.c9-update,
.c9-readonly,
.c9-theme-switch {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzNkOWFjNCIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjM2Q5YWM0IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(top, #3d9ac4 0%, #3d9ac4 100%);
  background-image: -webkit-linear-gradient(top, #3d9ac4 0%, #3d9ac4 100%);
  background-image: -o-linear-gradient(top, #3d9ac4 0%, #3d9ac4 100%);
  background-image: linear-gradient(top, #3d9ac4 0%, #3d9ac4 100%);
  height: 50px;
  border-bottom: 0;
  text-shadow: none;
  box-sizing: border-box;
  padding: 16px 44px;
  font-size: 16px;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
  color: #ffffff;
  letter-spacing: 0.4px;
  cursor: pointer;
  position: relative;
}
.c9-offline:before,
.c9-update:before,
.c9-readonly:before {
  content: "";
  position: absolute;
  left: 6px;
  top: 4px;
  width: 23px;
  height: 23px;
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/noconnection.png") no-repeat 0 0;
  display: none;
}
.c9-update {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzNkYzQ2OSIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjM2RjNDY5IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(top, #3dc469 0%, #3dc469 100%);
  background-image: -webkit-linear-gradient(top, #3dc469 0%, #3dc469 100%);
  background-image: -o-linear-gradient(top, #3dc469 0%, #3dc469 100%);
  background-image: linear-gradient(top, #3dc469 0%, #3dc469 100%);
}
.c9-update:before {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/updatec9.png") no-repeat 0 0;
}
.c9-readonly {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzNkYzQ2OSIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjM2RjNDY5IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(top, #3dc469 0%, #3dc469 100%);
  background-image: -webkit-linear-gradient(top, #3dc469 0%, #3dc469 100%);
  background-image: -o-linear-gradient(top, #3dc469 0%, #3dc469 100%);
  background-image: linear-gradient(top, #3dc469 0%, #3dc469 100%);
}
.c9-readonly:before {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/c9readonly.png") no-repeat 0 0;
}
.c9-theme-switch {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzNkYzQ2OSIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjM2RjNDY5IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(top, #3dc469 0%, #3dc469 100%);
  background-image: -webkit-linear-gradient(top, #3dc469 0%, #3dc469 100%);
  background-image: -o-linear-gradient(top, #3dc469 0%, #3dc469 100%);
  background-image: linear-gradient(top, #3dc469 0%, #3dc469 100%);
}
.c9-theme-switch a {
  color: #d2f291;
  text-decoration: none;
}
.basic {
  position: relative;
}
.fakehbox {
  white-space: nowrap;
}
.fakehbox > * {
  display: inline-block;
}
.fakehbox.aligntop > * {
  vertical-align: top;
}
.fakehbox.aligncenter > * {
  vertical-align: middle;
}
.fakehbox.padding3 > * {
  margin-left: 3px;
}
.fakehbox.static {
  position: static;
}
.bar-offline-cover {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
/* Shared between find plugins */
.find-and-replace {
  background: #f1f1f1;
  box-shadow: 0 1px 0 0 transparent inset;
  border-top: 1px solid #dedede;
  border-bottom: 1px solid #dedede;
  font-size: 13px;
  font-family: Helvetica, Arial, sans-serif;
}
.find-and-replace .blackbutton {
  margin-top: 1px !important;
  height: 25px !important;
  line-height: 24px;
  padding: 0 11px;
}
.find-and-replace .dropdown-dark-glossy {
  margin-top: 1px !important;
  height: 25px !important;
}
.find-and-replace .dropdown-dark-glossy .button {
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/arrow_down_white.png") !important;
}
.find-and-replace .dropdown-dark-glossy .button:before {
  border-left: 0;
}
.bk-window {
  position: relative;
  overflow: hidden;
  z-index: 10000;
  border-radius: 4px;
  box-shadow: none;
  color: #222;
  background: #fefefe;
  /* Especially for retina */
}
.win-deploy-target.bk-window {
  overflow: visible;
}
.bk-window .bk-header {
  position: relative;
  overflow: hidden;
  height: 52px;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZiZmJmYiIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmJmYmZiIiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(top, #fbfbfb 0%, #fbfbfb 100%);
  background-image: -webkit-linear-gradient(top, #fbfbfb 0%, #fbfbfb 100%);
  background-image: -o-linear-gradient(top, #fbfbfb 0%, #fbfbfb 100%);
  background-image: linear-gradient(top, #fbfbfb 0%, #fbfbfb 100%);
  border-radius: 4px 4px 0 0;
  border-bottom: 1px solid #dedede;
  box-shadow: none;
  padding: 20px 20px;
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 16px;
  font-weight: normal;
  color: #333333;
  cursor: default;
}
.bk-window .bk-header .buttons {
  position: absolute;
  right: 19px;
  top: 19px;
}
.bk-window .bk-header .buttons .close {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/close_tab_btn_flat_light.png);
  background-repeat: no-repeat;
  width: 14px;
  height: 14px;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .bk-window .bk-header .buttons .close {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/close_tab_btn_flat_light@2x.png);
    background-size: 42px 28px;
  }
}
.bk-window .bk-header .buttons .close.hover {
  background-position: -14px 0;
}
.bk-window .bk-header .buttons .close.down {
  background-position: -28px 0;
}
.bk-window .bk-container h3 {
  word-wrap: break-word;
}
.bk-window .bk-container {
  position: absolute;
  top: 52px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
.bk-window.dark .bk-container {
  top: 52px;
}
.bk-window.relative .bk-container {
  position: relative;
  top: 0;
}
.bk-window .bk-content {
  background: #fefefe;
  position: absolute;
  top: 52px;
  bottom: 40px;
  left: 0;
  right: 0;
  z-index: 0;
}
.bk-window.dark .bk-content {
  top: 52px;
}
.bk-window.dark .bk-content {
  background-color: #fefefe;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+dHJhbnNwYXJlbnQgMCV0cmFuc3BhcmVudCAxMDAlPC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2dyYWQtdWNnZy1nZW5lcmF0ZWQpIiAvPjwvc3ZnPg==);
  background-image: -moz-linear-gradient(top, transparent 0%, transparent 100%);
  background-image: -webkit-linear-gradient(top, transparent 0%, transparent 100%);
  background-image: -o-linear-gradient(top, transparent 0%, transparent 100%);
  background-image: linear-gradient(top, transparent 0%, transparent 100%);
  border-top: 0;
}
.bk-window .bk-win-footer {
  background: #fefefe;
  box-shadow: none;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  position: absolute;
  border-radius: 0 0 4px 4px;
  z-index: 0;
}
.bk-window.nofooter .bk-win-footer {
  display: none;
}
.bk-window-cover {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/bg-overlay.png") repeat 0 0;
  opacity: 1;
}
.bk-window-cover .header {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/cover-heaeder.png") repeat-x 0 0;
  height: 12px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
.bk-window-cover .logo {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/cover-logo.png") no-repeat 0 0;
  width: 215px;
  height: 44px;
  position: absolute;
  right: 20px;
  top: 25px;
}
.bk-window.dialog .bk-container {
  display: flex;
  flex-direction: column;
}
.bk-window.dialog .bk-container > div:first-child {
  flex: 1;
  position: relative;
}
.bk-window.wizard .bk-container > div:first-child > div {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
}
.blackbutton {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2FlYWVhZSIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSI1MiUiIHN0b3AtY29sb3I9IiNhZWFlYWUiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iNTIlIiBzdG9wLWNvbG9yPSIjYWVhZWFlIiBzdG9wLW9wYWNpdHk9IjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNhZWFlYWUiIHN0b3Atb3BhY2l0eT0iMSIvPjwvbGluZWFyR3JhZGllbnQ+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz48L3N2Zz4=);
  background-image: -moz-linear-gradient(top, #aeaeae 0%, #aeaeae 52%, #aeaeae 52%, #aeaeae 100%);
  background-image: -webkit-linear-gradient(top, #aeaeae 0%, #aeaeae 52%, #aeaeae 52%, #aeaeae 100%);
  background-image: -o-linear-gradient(top, #aeaeae 0%, #aeaeae 52%, #aeaeae 52%, #aeaeae 100%);
  background-image: linear-gradient(top, #aeaeae 0%, #aeaeae 52%, #aeaeae 52%, #aeaeae 100%);
  -webkit-box-shadow: 0 1px 0 transparent inset, 0px 1px transparent;
  -moz-box-shadow: 0 1px 0 transparent inset, 0px 1px transparent;
  box-shadow: 0 1px 0 transparent inset, 0px 1px transparent;
  border: 1px solid transparent;
  border-radius: 3px;
  color: #ffffff;
  text-shadow: none;
  height: 27px;
  line-height: 27px;
  padding: 2px 11px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.blackbuttonDisabled {
  color: rgba(189, 216, 187, 0.5);
}
.blackbuttonFocus {
  -webkit-box-shadow: 0 1px 0 transparent inset, 0px 1px transparent, none;
  -moz-box-shadow: 0 1px 0 transparent inset, 0px 1px transparent, none;
  box-shadow: 0 1px 0 transparent inset, 0px 1px transparent, none;
}
.blackbuttonOver {
  -webkit-box-shadow: 0 1px 0 transparent inset, 0px 1px transparent, 0 0 0 1000px rgba(255, 255, 255, 0.1) inset;
  -moz-box-shadow: 0 1px 0 transparent inset, 0px 1px transparent, 0 0 0 1000px rgba(255, 255, 255, 0.1) inset;
  box-shadow: 0 1px 0 transparent inset, 0px 1px transparent, 0 0 0 1000px rgba(255, 255, 255, 0.1) inset;
}
.blackbuttonDown {
  -webkit-box-shadow: 0 0 3px 2px transparent inset;
  -moz-box-shadow: 0 0 3px 2px transparent inset;
  box-shadow: 0 0 3px 2px transparent inset;
}
.blackdg {
  position: relative;
  overflow: hidden;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
  padding: 0;
  color: #333333;
  min-height: 45px;
}
.blackdg .tree-headings {
  height: 24px;
  z-index: 10;
  white-space: nowrap;
  overflow: hidden;
  background: #f7f7f7;
  border-bottom: 1px solid #ececec;
}
.blackdg .tree-headings .tree-column {
  overflow: hidden;
  text-overflow: ellipsis;
  color: #333333;
}
.tree-headings > .tree-column {
  background: transparent;
  display: inline-block;
  padding: 6px 4px 5px 7px;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.blackdg .tree-headings .tree-column u {
  padding: 2px 4px 1px 3px;
  display: block;
  height: 15px;
  text-decoration: none;
}
.blackdg .tree-headings .tree-column:hover,
.blackdg .tree-headings .tree-column.hover,
.blackdg .tree-headings .tree-column.down,
.blackdg .tree-headings .tree-column.drag {
  color: #333333;
  background: #ececec;
}
.blackdg .tree-headings .tree-column.ascending u {
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/sort_asc.gif");
  background-repeat: no-repeat;
  background-position: right 7px;
}
.blackdg .tree-headings .tree-column.descending u {
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/sort_desc.gif");
  background-repeat: no-repeat;
  background-position: right 6px;
}
.blackdg .records {
  white-space: nowrap;
}
.blackdg .records blockquote {
  margin: 0;
}
.blackdg .tree-headings > .tree-column-resizer {
  display: none;
}
.blackdg .row span {
  height: 24px;
}
.blackdg .row span u {
  padding: 1px 3px 3px 4px;
  height: 15px;
  display: block;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  cursor: default;
}
.blackdg .row {
  height: 24px;
  padding-left: 0;
}
.ace_tree_focus .indicate span {
  padding: 0;
  color: #333;
}
.blackdg .tree-row > .tree-column {
  padding: 5px 0 5px 7px;
}
.blackdg .move_pointer {
  height: 100px;
  width: 2px;
  position: absolute;
  top: 0;
  margin: -10px 0 0 -4px;
  width: 9px;
  height: 38px;
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/column_picker.gif") no-repeat 0 0;
  overflow: hidden;
  z-index: 1000;
}
.blackdg .size_pointer {
  border: 1px dotted gray;
  border-width: 0 1px 0 1px;
  height: 100%;
  position: absolute;
  top: 0px;
  z-index: 1000;
  cursor: e-resize;
  cursor: ew-resize;
}
.blackdg .message {
  opacity: 1;
  display: inline-block;
  padding: 6px 5px 8px 5px;
}
.pointer {
  display: none;
}
.blackdg span.treecell u {
  text-decoration: none;
  display: inline-block;
  width: 100%;
  padding: 1px 2px 3px 2px;
  border: 0;
}
.blackdg span.treecell u {
  background-repeat: no-repeat;
  padding-left: 20px;
}
.blackdg.noicon span.treecell u {
  padding-left: 0;
}
.blackdg .row .treecell .iconCell,
.blackdg .row .iconCell {
  background-position: 1px 1px;
  background-repeat: no-repeat;
  padding: 1px 0 3px 22px;
}
.blackdg .toggler {
  display: inline-block;
  width: 12px;
  height: 15px;
  margin: -1px 4px -3px -2px;
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/images/tree_close_arrow_small_dark_flat_light.png);
  background-repeat: no-repeat;
  background-position: 0 4px;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .blackdg .toggler {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/images/tree_close_arrow_small_dark_flat_light@2x.png);
    background-size: 20px 10px;
  }
}
.blackdg .toggler.open {
  background-position: -10px 4px;
}
.ace_tree_focus .selected .toggler {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/images/tree_close_arrow_small_flat_light.png);
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .ace_tree_focus .selected .toggler {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/images/tree_close_arrow_small_flat_light@2x.png);
    background-size: 20px 10px;
  }
}
.blackdg .loading .toggler {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/file-tree-load-spinner_flat_light.gif") no-repeat 0 0;
  width: 16px;
  height: 16px;
  top: -1px !important;
  left: -2px;
  vertical-align: top;
  margin-right: 2px !important;
  margin-left: -4px !important;
}
.blackdg .loading.selected .toggler {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/file-tree-load-spinner-dark-unfocus_flat_light.gif") no-repeat 0 0;
}
.ace_tree_focus .loading.selected .toggler {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/file-tree-load-spinner-selected_flat_light.gif") no-repeat 0 0;
}
.blackdg .row > span {
  vertical-align: top;
}
.blackdg .tree-column {
  text-overflow: ellipsis;
}
.blackdg .records .row,
.blackdg .records .row span {
  background: transparent;
}
.blackdg .records .row span {
  overflow: hidden;
}
.blackdgDisabled .records .row span {
  opacity: 0.5;
}
.blackdg .row span.colsel {
  background: rgba(0, 0, 0, 0.15);
}
.blackdg .selected,
.blackdgDisabled .selected {
  color: #333333;
  background-color: #efefef;
  vertical-align: top;
}
.ace_tree_focus .selected {
  color: #ffffff;
  background-color: #63acff;
}
.blackdg .records {
  padding-top: 0;
  top: 24px;
  overflow: hidden;
}
.blackdg .dbgVarIcon {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/debugger/genericvariable_obj_flat_light.png);
  background-repeat: no-repeat;
  margin: -1px 2px -5px -3px;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .blackdg .dbgVarIcon {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/debugger/genericvariable_obj_flat_light@2x.png);
    background-size: 16px 16px;
  }
}
.blackdg .ace_tree-editor {
  margin: 0 0 0 0px;
  background: white;
  padding: 0;
  border: 0;
  box-shadow: none;
  color: #333;
  text-shadow: none;
}
.blackdg .ace_tree-editor input:selection {
  background: #6c9700;
  color: #f1f1f1;
}
.black_dropdown {
  position: relative;
  overflow: hidden;
  height: 21px;
  border-radius: 3px;
  border: 1px solid #dedede;
  background: #ffffff;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(bottom, #ffffff 0%, #ffffff 100%);
  background-image: -webkit-linear-gradient(bottom, #ffffff 0%, #ffffff 100%);
  background-image: -o-linear-gradient(bottom, #ffffff 0%, #ffffff 100%);
  background-image: linear-gradient(bottom, #ffffff 0%, #ffffff 100%);
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  text-shadow: none;
  min-height: 28px !important;
  max-height: 28px !important;
}
.black_dropdown .lbl {
  position: relative;
  overflow: hidden;
  height: 17px;
  padding: 7px 8px 5px 9px;
  margin: 0 24px 0 0;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #333333;
  line-height: 13px;
  border-right: 1px solid #dddddd;
  cursor: default;
  white-space: nowrap;
}
.black_dropdown .button {
  width: 24px;
  border-left: 1px solid transparent;
  bottom: 0;
  position: absolute;
  top: 0;
  right: 0;
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/arrow_down_grey.png);
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .black_dropdown .button {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/arrow_down_grey@2x.png);
    background-size: 8px 5px;
  }
}
.black_dropdownOver {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Y2ZjZmNiIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjZmNmY2IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(bottom, #f6f6f6 0%, #f6f6f6 100%);
  background-image: -webkit-linear-gradient(bottom, #f6f6f6 0%, #f6f6f6 100%);
  background-image: -o-linear-gradient(bottom, #f6f6f6 0%, #f6f6f6 100%);
  background-image: linear-gradient(bottom, #f6f6f6 0%, #f6f6f6 100%);
}
.black_dropdownDown {
  background: #2d2d2d;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(bottom, #ffffff 0%, #ffffff 100%);
  background-image: -webkit-linear-gradient(bottom, #ffffff 0%, #ffffff 100%);
  background-image: -o-linear-gradient(bottom, #ffffff 0%, #ffffff 100%);
  background-image: linear-gradient(bottom, #ffffff 0%, #ffffff 100%);
}
.c9-optionList {
  width: 174px;
  overflow: hidden;
  z-index: 99999;
  position: absolute;
  margin: 0 0 0 0;
  display: none;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 3px;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  margin-top: 1px;
}
.c9-optionList .c9-dd-item {
  height: 18px;
  padding: 3px 6px 0 6px;
  position: relative;
  overflow: hidden;
  font-family: Arial;
  font-size: 11px;
  line-height: 14px;
  white-space: nowrap;
  color: #333333;
  cursor: default;
}
.c9-optionList .c9-dd-item.selected {
  color: #63acff;
}
.c9-optionList .c9-dd-item.hover {
  background-color: #63acff;
  color: #ffffff;
}
.browser-btn {
  height: 27px;
  width: 25px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  cursor: default;
  background-position: 0 27px;
  background-repeat: no-repeat;
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/browser_button.png");
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.browser-btn span {
  display: block;
  width: 17px;
  height: 17px;
  position: absolute;
  left: 5px;
  top: 5px;
  background-repeat: no-repeat;
}
.browser-btnOver {
  background-position: 0 0px;
}
.browser-btnDown {
  background-position: 0 -27px;
}
.btn-default-css3 {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzc2NzY3NiIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNzY3Njc2IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(bottom, #767676 0%, #767676 100%);
  background-image: -webkit-linear-gradient(bottom, #767676 0%, #767676 100%);
  background-image: -o-linear-gradient(bottom, #767676 0%, #767676 100%);
  background-image: linear-gradient(bottom, #767676 0%, #767676 100%);
  border-radius: 3px;
  text-shadow: none;
  color: #ffffff;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 13px;
  box-shadow: none;
  line-height: 16px;
  position: relative;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.win-deploy-target .btn-default-css3,
.size-13.btn-default-css3 {
  font-size: 13px;
}
.btn-default-css3Over {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzhCOEI4QiIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOEI4QjhCIiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(bottom, #8B8B8B 0%, #8B8B8B 100%);
  background-image: -webkit-linear-gradient(bottom, #8B8B8B 0%, #8B8B8B 100%);
  background-image: -o-linear-gradient(bottom, #8B8B8B 0%, #8B8B8B 100%);
  background-image: linear-gradient(bottom, #8B8B8B 0%, #8B8B8B 100%);
}
.btn-default-css3Focus {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzc2NzY3NiIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNzY3Njc2IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(bottom, #767676 0%, #767676 100%);
  background-image: -webkit-linear-gradient(bottom, #767676 0%, #767676 100%);
  background-image: -o-linear-gradient(bottom, #767676 0%, #767676 100%);
  background-image: linear-gradient(bottom, #767676 0%, #767676 100%);
}
.btn-default-css3Down {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzc2NzY3NiIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNzY3Njc2IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(bottom, #767676 0%, #767676 100%);
  background-image: -webkit-linear-gradient(bottom, #767676 0%, #767676 100%);
  background-image: -o-linear-gradient(bottom, #767676 0%, #767676 100%);
  background-image: linear-gradient(bottom, #767676 0%, #767676 100%);
}
.btn-default-css3Disabled {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2RhZGFkYSIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZGFkYWRhIiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(bottom, #dadada 0%, #dadada 100%);
  background-image: -webkit-linear-gradient(bottom, #dadada 0%, #dadada 100%);
  background-image: -o-linear-gradient(bottom, #dadada 0%, #dadada 100%);
  background-image: linear-gradient(bottom, #dadada 0%, #dadada 100%);
  text-shadow: none;
  color: #747474;
  cursor: default;
}
.btn-default-css3 .caption {
  border-top: 0;
  padding: 7px 20px 6px;
  border-radius: 3px;
  text-align: center;
}
.btn-default-css3.btn-default-css3Over .caption {
  border-top: 0;
}
.btn-default-css3.btn-default-css3Focus .caption {
  border-top: 0;
}
.btn-default-css3.btn-default-css3Down .caption {
  border-top: 0;
}
.btn-default-css3.btn-default-css3Disabled .caption {
  border-top: 0;
}
.btn-default-css3 .border {
  display: none;
  border: 1px solid rgba(0, 0, 0, 0.26);
  position: absolute;
  top: 0;
  height: 100%;
  left: 0;
  right: 0;
  border-radius: 3px;
  box-sizing: border-box;
}
.btn-default-css3.btn-default-css3Focus .border {
  display: block;
}
/*-----------*/
/*-- GREEN --*/
.btn-default-css3.btn-green {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzk4Yzg3OCIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOThjODc4IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(bottom, #98c878 0%, #98c878 100%);
  background-image: -webkit-linear-gradient(bottom, #98c878 0%, #98c878 100%);
  background-image: -o-linear-gradient(bottom, #98c878 0%, #98c878 100%);
  background-image: linear-gradient(bottom, #98c878 0%, #98c878 100%);
  text-shadow: none;
  color: #ffffff;
}
.btn-default-css3.btn-green2 {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzA4OGUwNCIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMzBhMTJkIiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(bottom, #088e04 0%, #30a12d 100%);
  background-image: -webkit-linear-gradient(bottom, #088e04 0%, #30a12d 100%);
  background-image: -o-linear-gradient(bottom, #088e04 0%, #30a12d 100%);
  background-image: linear-gradient(bottom, #088e04 0%, #30a12d 100%);
  text-shadow: rgba(0, 0, 0, 0.25) 0px 1px 0px;
}
.btn-default-css3Over.btn-green {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0E1RDI4OCIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjQTVEMjg4IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(bottom, #A5D288 0%, #A5D288 100%);
  background-image: -webkit-linear-gradient(bottom, #A5D288 0%, #A5D288 100%);
  background-image: -o-linear-gradient(bottom, #A5D288 0%, #A5D288 100%);
  background-image: linear-gradient(bottom, #A5D288 0%, #A5D288 100%);
}
.btn-default-css3Focus.btn-green {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzk4Yzg3OCIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOThjODc4IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(bottom, #98c878 0%, #98c878 100%);
  background-image: -webkit-linear-gradient(bottom, #98c878 0%, #98c878 100%);
  background-image: -o-linear-gradient(bottom, #98c878 0%, #98c878 100%);
  background-image: linear-gradient(bottom, #98c878 0%, #98c878 100%);
}
.btn-default-css3Down.btn-green {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzk4Yzg3OCIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOThjODc4IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(bottom, #98c878 0%, #98c878 100%);
  background-image: -webkit-linear-gradient(bottom, #98c878 0%, #98c878 100%);
  background-image: -o-linear-gradient(bottom, #98c878 0%, #98c878 100%);
  background-image: linear-gradient(bottom, #98c878 0%, #98c878 100%);
}
.btn-default-css3Down.btn-green2 {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzMwYTEyZCIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDg4ZTA0IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(bottom, #30a12d 0%, #088e04 100%);
  background-image: -webkit-linear-gradient(bottom, #30a12d 0%, #088e04 100%);
  background-image: -o-linear-gradient(bottom, #30a12d 0%, #088e04 100%);
  background-image: linear-gradient(bottom, #30a12d 0%, #088e04 100%);
}
.btn-default-css3Disabled.btn-green {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2RhZGFkYSIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZGFkYWRhIiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(bottom, #dadada 0%, #dadada 100%);
  background-image: -webkit-linear-gradient(bottom, #dadada 0%, #dadada 100%);
  background-image: -o-linear-gradient(bottom, #dadada 0%, #dadada 100%);
  background-image: linear-gradient(bottom, #dadada 0%, #dadada 100%);
  text-shadow: none;
  color: #747474;
}
.btn-default-css3Disabled.btn-green2 {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzA4OGUwNCIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMzBhMTJkIiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(bottom, #088e04 0%, #30a12d 100%);
  background-image: -webkit-linear-gradient(bottom, #088e04 0%, #30a12d 100%);
  background-image: -o-linear-gradient(bottom, #088e04 0%, #30a12d 100%);
  background-image: linear-gradient(bottom, #088e04 0%, #30a12d 100%);
  text-shadow: #3da110 0px 1px 0px;
  color: #037a01;
}
.btn-default-css3.btn-green .caption {
  border-top: 0;
}
.btn-default-css3.btn-default-css3Over.btn-green .caption {
  border-top: 0;
}
.btn-default-css3.btn-default-css3Focus.btn-green .caption {
  border-top: 0;
}
.btn-default-css3.btn-default-css3Down.btn-green .caption {
  border-top: 0;
}
.btn-default-css3.btn-default-css3Disabled.btn-green .caption {
  border-top: 0;
}
/*-----------*/
/*-- RED --*/
.btn-default-css3.btn-red {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2YwNjc2NyIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjA2NzY3IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(bottom, #f06767 0%, #f06767 100%);
  background-image: -webkit-linear-gradient(bottom, #f06767 0%, #f06767 100%);
  background-image: -o-linear-gradient(bottom, #f06767 0%, #f06767 100%);
  background-image: linear-gradient(bottom, #f06767 0%, #f06767 100%);
  text-shadow: none;
  color: #ffffff;
}
.btn-default-css3Over.btn-red {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0YyODQ4NCIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRjI4NDg0IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(bottom, #F28484 0%, #F28484 100%);
  background-image: -webkit-linear-gradient(bottom, #F28484 0%, #F28484 100%);
  background-image: -o-linear-gradient(bottom, #F28484 0%, #F28484 100%);
  background-image: linear-gradient(bottom, #F28484 0%, #F28484 100%);
}
.btn-default-css3Focus.btn-red {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2YwNjc2NyIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjA2NzY3IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(bottom, #f06767 0%, #f06767 100%);
  background-image: -webkit-linear-gradient(bottom, #f06767 0%, #f06767 100%);
  background-image: -o-linear-gradient(bottom, #f06767 0%, #f06767 100%);
  background-image: linear-gradient(bottom, #f06767 0%, #f06767 100%);
}
.btn-default-css3Down.btn-red {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2YwNjc2NyIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjA2NzY3IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(bottom, #f06767 0%, #f06767 100%);
  background-image: -webkit-linear-gradient(bottom, #f06767 0%, #f06767 100%);
  background-image: -o-linear-gradient(bottom, #f06767 0%, #f06767 100%);
  background-image: linear-gradient(bottom, #f06767 0%, #f06767 100%);
}
.btn-default-css3Disabled.btn-red {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2YwNjc2NyIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjA2NzY3IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(bottom, #f06767 0%, #f06767 100%);
  background-image: -webkit-linear-gradient(bottom, #f06767 0%, #f06767 100%);
  background-image: -o-linear-gradient(bottom, #f06767 0%, #f06767 100%);
  background-image: linear-gradient(bottom, #f06767 0%, #f06767 100%);
  text-shadow: none;
  color: maroon;
}
.btn-default-css3.btn-red .caption {
  border-top: 0;
}
.btn-default-css3.btn-default-css3Over.btn-red .caption {
  border-top: 0;
}
.btn-default-css3.btn-default-css3Focus.btn-red .caption {
  border-top: 0;
}
.btn-default-css3.btn-default-css3Down.btn-red .caption {
  border-top: 0;
}
.btn-default-css3.btn-default-css3Disabled.btn-red .caption {
  border-top: 0;
}
/*-----------*/
.no-bold.btn-default-css3 {
  font-weight: normal;
  color: #cecece;
}
.btn_icon_only {
  overflow: hidden;
  cursor: default;
  position: relative;
  height: 21px;
  width: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
.btn_icon_onlyDown.tabmenubtn {
  z-index: 10000000;
}
.dim22-22.btn_icon_only {
  width: 22px;
  height: 22px;
}
.dim18-18.btn_icon_only {
  width: 18px;
  height: 18px;
}
.dim14-14.btn_icon_only {
  width: 14px;
  height: 14px;
}
.dim8x8.btn_icon_only {
  width: 8px;
  height: 8px;
}
.btn_icon_onlyOver {
  background-position: 0 -23px;
}
.dim22-22.btn_icon_onlyOver {
  background-position: 0 -22px;
}
.dim18-18.btn_icon_onlyOver {
  background-position: 0 -18px;
}
.dim14-14.btn_icon_onlyOver {
  background-position: 0 -14px;
}
.dim8x8.btn_icon_onlyOver {
  background-position: 0 -8px;
}
.btn_icon_onlyDown {
  background-position: 0 -46px;
}
.dim22-22.btn_icon_onlyDown {
  background-position: 0 -44px;
}
.dim18-18.btn_icon_onlyDown {
  background-position: 0 -36px;
}
.dim14-14.btn_icon_onlyDown {
  background-position: 0 -28px;
}
.dim8x8.btn_icon_onlyDown {
  background-position: 0 -16px;
}
.btn_icon_only.btnDisabled {
  cursor: default;
}
.btn {
  height: 27px;
  overflow: hidden;
  cursor: default;
  position: relative;
  line-height: 17px;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.btn.smallbtn {
  height: 23px;
}
.btn .left {
  float: left;
  width: 4px;
  height: 27px;
  background-color: transparent;
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/sprite-rounded-vert.png");
  background-repeat: no-repeat;
  background-position: -16px 0;
}
.btn.smallbtn .left {
  height: 23px;
  background-position: -16px -6717px;
}
.btn .lbl {
  height: 22px;
  padding: 5px 8px 0 8px;
  margin: 0 4px;
  white-space: nowrap;
  overflow: hidden;
  background-color: transparent;
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/sprite-rounded-vert.png");
  background-repeat: repeat-x;
  background-position: 0 -27px;
  position: relative;
  text-align: center;
  color: #474747;
  text-shadow: rgba(255, 255, 255, 0.71) 0px 1px 0px;
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
}
.btn.smallbtn .lbl {
  height: 20px;
  padding: 3px 3px 0 3px;
  background-position: 0 -6740px;
  font-size: 12px;
}
.label_small .lbl {
  padding-left: 2px;
}
.btn .right {
  float: right;
  width: 4px;
  height: 27px;
  background-color: transparent;
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/sprite-rounded-vert.png");
  background-repeat: no-repeat;
  background-position: 0 -54px;
}
.btn.smallbtn .right {
  height: 23px;
  background-position: 0 -6763px;
}
.btn .lbl .btnArrow {
  display: none;
  position: relative;
  right: 0;
  width: 5px;
  height: 3px;
  vertical-align: middle;
}
.btnIcon .lbl {
  overflow: visible;
}
.btnIcon .lbl SPAN {
  width: 23px;
  height: 23px;
  background-repeat: no-repeat;
  background-position: 0 0;
  position: absolute;
  top: 1px;
  left: 0;
}
.btnIconOnly .lbl SPAN {
  background-position: 1px 3px;
}
.btnIconOnly.newFolder .lbl SPAN {
  background-position: 1px 2px;
}
.smallCaption.btnIconOnly .lbl {
  color: #323232;
  font-weight: normal;
  font-size: 12px;
  padding-left: 25px;
}
.btnIcon.iconOnTheRight .lbl {
  padding: 4px 12px 0 0;
}
.btnIcon.iconOnTheRight .lbl SPAN {
  left: auto;
  right: 0;
}
.btnOver .left {
  background-position: -16px -81px;
}
.btnOver .lbl {
  background-position: 0 -108px;
}
.btnOver .right {
  background-position: 0 -135px;
}
.btnFocus .left {
  background-position: -16px -243px;
}
.btnFocus .lbl {
  background-position: 0 -270px;
}
.btnFocus .right {
  background-position: 0 -297px;
}
.btnDown .left {
  background-position: -16px -162px;
}
.btnDown .lbl {
  background-position: 0 -189px;
}
.btnDown .right {
  background-position: 0 -216px;
}
.btnDisabled .left {
  background-position: -16px -324px;
}
.btnDisabled .lbl {
  background-position: 0 -351px;
  color: #b8bbbf;
  text-shadow: rgba(255, 255, 255, 0.71) 0px 1px 0px;
}
.btnDisabled .right {
  background-position: 0 -378px;
}
/* small */
.btnOver.smallbtn .left {
  background-position: -16px -6786px;
}
.btnOver.smallbtn .lbl {
  background-position: 0 -6809px;
}
.btnOver.smallbtn .right {
  background-position: 0 -6832px;
}
.btnFocus.smallbtn .left {
  background-position: -16px -6924px;
}
.btnFocus.smallbtn .lbl {
  background-position: 0 -6947px;
}
.btnFocus.smallbtn .right {
  background-position: 0 -6970px;
}
.btnDown.smallbtn .left {
  background-position: -16px -6855px;
}
.btnDown.smallbtn .lbl {
  background-position: 0 -6878px;
}
.btnDown.smallbtn .right {
  background-position: 0 -6901px;
}
.btnDisabled.smallbtn .left {
  background-position: -16px -6993px;
}
.btnDisabled.smallbtn .lbl {
  background-position: 0 -7016px;
  color: #b8bbbf;
  text-shadow: rgba(255, 255, 255, 0.71) 0px 1px 0px;
}
.btnDisabled.smallbtn .right {
  background-position: 0 -7039px;
}
/* Additional styles - DARKGREEN */
.ui-btn-greenfont {
  color: #37a700;
}
/* Additional styles - DARKGREEN */
.ui-btn-darkgreen .left {
  background-position: -16px -1620px;
}
.ui-btn-darkgreen .lbl {
  background-position: 0 -1647px;
  color: #4d8110;
  text-shadow: rgba(255, 255, 255, 0.71) 0px 1px 0px;
}
.ui-btn-darkgreen .right {
  background-position: 0 -1674px;
}
.ui-btn-darkgreen.btnOver .left {
  background-position: -16px -1701px;
}
.ui-btn-darkgreen.btnOver .lbl {
  background-position: 0 -1728px;
}
.ui-btn-darkgreen.btnOver .right {
  background-position: 0 -1755px;
}
.ui-btn-darkgreen.btnFocus .left {
  background-position: -16px -1863px;
}
.ui-btn-darkgreen.btnFocus .lbl {
  background-position: 0 -1890px;
}
.ui-btn-darkgreen.btnFocus .right {
  background-position: 0 -1917px;
}
.ui-btn-darkgreen.btnDown .left {
  background-position: -16px -1782px;
}
.ui-btn-darkgreen.btnDown .lbl {
  background-position: 0 -1809px;
}
.ui-btn-darkgreen.btnDown .right {
  background-position: 0 -1836px;
}
/* Additional styles - GREEN */
.ui-btn-green .left {
  background-position: -16px -405px;
}
.ui-btn-green .lbl {
  background-position: 0 -432px;
  color: #4d8110;
  text-shadow: rgba(255, 255, 255, 0.71) 0px 1px 0px;
}
.ui-btn-green .right {
  background-position: 0 -459px;
}
.ui-btn-green.btnOver .left {
  background-position: -16px -486px;
}
.ui-btn-green.btnOver .lbl {
  background-position: 0 -513px;
}
.ui-btn-green.btnOver .right {
  background-position: 0 -540px;
}
.ui-btn-green.btnFocus .left {
  background-position: -16px -648px;
}
.ui-btn-green.btnFocus .lbl {
  background-position: 0 -675px;
}
.ui-btn-green.btnFocus .right {
  background-position: 0 -702px;
}
.ui-btn-green.btnDown .left {
  background-position: -16px -567px;
}
.ui-btn-green.btnDown .lbl {
  background-position: 0 -594px;
}
.ui-btn-green.btnDown .right {
  background-position: 0 -621px;
}
.ui-btn-green.btnDisabled .left {
  background-position: -16px -729px;
}
.ui-btn-green.btnDisabled .lbl {
  background-position: 0 -756px;
  color: #91ba63;
  text-shadow: rgba(255, 255, 255, 0.71) 0px 1px 0px;
}
.ui-btn-green.btnDisabled .right {
  background-position: 0 -783px;
}
/* smallbtn */
.ui-btn-green.smallbtn .left {
  background-position: -16px -5889px;
}
.ui-btn-green.smallbtn .lbl {
  background-position: 0 -5912px;
  color: #4d8110;
  text-shadow: rgba(255, 255, 255, 0.71) 0px 1px 0px;
}
.ui-btn-green.smallbtn .right {
  background-position: 0 -5935px;
}
.ui-btn-green.btnOver.smallbtn .left {
  background-position: -16px -5958px;
}
.ui-btn-green.btnOver.smallbtn .lbl {
  background-position: 0 -5981px;
}
.ui-btn-green.btnOver.smallbtn .right {
  background-position: 0 -6004px;
}
.ui-btn-green.btnFocus.smallbtn .left {
  background-position: -16px -6096px;
}
.ui-btn-green.btnFocus.smallbtn .lbl {
  background-position: 0 -6119px;
}
.ui-btn-green.btnFocus.smallbtn .right {
  background-position: 0 -6142px;
}
.ui-btn-green.btnDown.smallbtn .left {
  background-position: -16px -6027px;
}
.ui-btn-green.btnDown.smallbtn .lbl {
  background-position: 0 -6050px;
}
.ui-btn-green.btnDown.smallbtn .right {
  background-position: 0 -6073px;
}
.ui-btn-green.btnDisabled.smallbtn .left {
  background-position: -16px -6165px;
}
.ui-btn-green.btnDisabled.smallbtn .lbl {
  background-position: 0 -6188px;
  color: #91ba63;
  text-shadow: rgba(255, 255, 255, 0.71) 0px 1px 0px;
}
.ui-btn-green.btnDisabled.smallbtn .right {
  background-position: 0 -6211px;
}
/* Additional styles - RED */
.ui-btn-red .left {
  background-position: -16px -810px;
}
.ui-btn-red .lbl {
  background-position: 0 -837px;
  color: white;
  text-shadow: rgba(209, 2, 0, 0.71) 0px 1px 0px;
}
.ui-btn-red .right {
  background-position: 0 -864px;
}
.ui-btn-red.btnOver .left {
  background-position: -16px -891px;
}
.ui-btn-red.btnOver .lbl {
  background-position: 0 -918px;
}
.ui-btn-red.btnOver .right {
  background-position: 0 -945px;
}
.ui-btn-red.btnFocus .left {
  background-position: -16px -1053px;
}
.ui-btn-red.btnFocus .lbl {
  background-position: 0 -1080px;
}
.ui-btn-red.btnFocus .right {
  background-position: 0 -1107px;
}
.ui-btn-red.btnDown .left {
  background-position: -16px -972px;
}
.ui-btn-red.btnDown .lbl {
  background-position: 0 -999px;
}
.ui-btn-red.btnDown .right {
  background-position: 0 -1026px;
}
.ui-btn-red.btnDisabled .left {
  background-position: -16px -1134px;
}
.ui-btn-red.btnDisabled .lbl {
  background-position: 0 -1161px;
  color: #bd0502;
  text-shadow: rgba(255, 255, 255, 0.31) 0px 1px 0px;
}
.ui-btn-red.btnDisabled .right {
  background-position: 0 -1188px;
}
/* small */
.ui-btn-red.smallbtn .left {
  background-position: -16px -6303px;
}
.ui-btn-red.smallbtn .lbl {
  background-position: 0 -6326px;
  color: white;
  text-shadow: rgba(209, 2, 0, 0.71) 0px 1px 0px;
}
.ui-btn-red.smallbtn .right {
  background-position: 0 -6349px;
}
.ui-btn-red.btnOver.smallbtn .left {
  background-position: -16px -6372px;
}
.ui-btn-red.btnOver.smallbtn .lbl {
  background-position: 0 -6395px;
}
.ui-btn-red.btnOver.smallbtn .right {
  background-position: 0 -6418px;
}
.ui-btn-red.btnFocus.smallbtn .left {
  background-position: -16px -6510px;
}
.ui-btn-red.btnFocus.smallbtn .lbl {
  background-position: 0 -6533px;
}
.ui-btn-red.btnFocus.smallbtn .right {
  background-position: 0 -6556px;
}
.ui-btn-red.btnDown.smallbtn .left {
  background-position: -16px -6441px;
}
.ui-btn-red.btnDown.smallbtn .lbl {
  background-position: 0 -6464px;
}
.ui-btn-red.btnDown.smallbtn .right {
  background-position: 0 -6487px;
}
.ui-btn-red.btnDisabled.smallbtn .left {
  background-position: -16px -6579px;
}
.ui-btn-red.btnDisabled.smallbtn .lbl {
  background-position: 0 -6602px;
  color: #bd0502;
  text-shadow: rgba(255, 255, 255, 0.31) 0px 1px 0px;
}
.ui-btn-red.btnDisabled.smallbtn .right {
  background-position: 0 -6625px;
}
/* Additional styles - BLUE */
.ui-btn-blue .left {
  background-position: -16px -1215px;
}
.ui-btn-blue .lbl {
  background-position: 0 -1242px;
  color: #1f78a7;
  text-shadow: rgba(205, 243, 255, 0.71) 0px 1px 0px;
}
.ui-btn-blue .right {
  background-position: 0 -1269px;
}
.ui-btn-blue.btnOver .left {
  background-position: -16px -1296px;
}
.ui-btn-blue.btnOver .lbl {
  background-position: 0 -1323px;
}
.ui-btn-blue.btnOver .right {
  background-position: 0 -1350px;
}
.ui-btn-blue.btnFocus .lbl {
  background-position: 0 -1485px;
}
.ui-btn-blue.btnFocus .right {
  background-position: 0 -1512px;
}
.ui-btn-blue.btnFocus .left {
  background-position: -16px -1458px;
}
.ui-btn-blue.btnDown .left {
  background-position: -16px -1377px;
}
.ui-btn-blue.btnDown .lbl {
  background-position: 0 -1404px;
}
.ui-btn-blue.btnDown .right {
  background-position: 0 -1431px;
}
.ui-btn-blue.btnDisabled .left {
  background-position: -16px -1539px;
}
.ui-btn-blue.btnDisabled .lbl {
  background-position: 0 -1566px;
  color: #33a3d6;
  text-shadow: rgba(205, 243, 255, 0.71) 0px 1px 0px;
}
.ui-btn-blue.btnDisabled .right {
  background-position: 0 -1593px;
}
/* Additional styles - BLUE2 */
.ui-btn-blue2 .left {
  background-position: -16px -3945px;
}
.ui-btn-blue2 .lbl {
  background-position: 0 -3972px;
  color: #00536f;
  text-shadow: #18c8fe 0px 1px 0px;
}
.ui-btn-blue2 .right {
  background-position: 0 -3999px;
}
.ui-btn-blue2.btnOver .left {
  background-position: -16px -4026px;
}
.ui-btn-blue2.btnOver .lbl {
  background-position: 0 -4053px;
}
.ui-btn-blue2.btnOver .right {
  background-position: 0 -4080px;
}
.ui-btn-blue2.btnFocus .left {
  background-position: -16px -4188px;
}
.ui-btn-blue2.btnFocus .lbl {
  background-position: 0 -4215px;
}
.ui-btn-blue2.btnFocus .right {
  background-position: 0 -4242px;
}
.ui-btn-blue2.btnDown .left {
  background-position: -16px -4107px;
}
.ui-btn-blue2.btnDown .lbl {
  background-position: 0 -4134px;
}
.ui-btn-blue2.btnDown .right {
  background-position: 0 -4161px;
}
.ui-btn-blue2.btnDisabled .left {
  background-position: -16px -4269px;
}
.ui-btn-blue2.btnDisabled .lbl {
  background-position: 0 -4296px;
  color: #36a3d6;
  text-shadow: #7bdfff 0px 1px 0px;
}
.ui-btn-blue2.btnDisabled .right {
  background-position: 0 -4323px;
}
/* Additional styles - BLUE3 */
.ui-btn-blue3 .left {
  background-position: -16px -3945px;
}
.ui-btn-blue3 .lbl {
  background-position: 0 -3972px;
  color: white;
  text-shadow: #039cd0 0px 1px 0px;
}
.ui-btn-blue3 .right {
  background-position: 0 -3999px;
}
.ui-btn-blue3.btnOver .left {
  background-position: -16px -4026px;
}
.ui-btn-blue3.btnOver .lbl {
  background-position: 0 -4053px;
}
.ui-btn-blue3.btnOver .right {
  background-position: 0 -4080px;
}
.ui-btn-blue3.btnFocus .left {
  background-position: -16px -4188px;
}
.ui-btn-blue3.btnFocus .lbl {
  background-position: 0 -4215px;
}
.ui-btn-blue3.btnFocus .right {
  background-position: 0 -4242px;
}
.ui-btn-blue3.btnDown .left {
  background-position: -16px -4107px;
}
.ui-btn-blue3.btnDown .lbl {
  background-position: 0 -4134px;
}
.ui-btn-blue3.btnDown .right {
  background-position: 0 -4161px;
}
.ui-btn-blue3.btnDisabled .left {
  background-position: -16px -4269px;
}
.ui-btn-blue3.btnDisabled .lbl {
  background-position: 0 -4296px;
  color: #36a3d6;
  text-shadow: #7bdfff 0px 1px 0px;
}
.ui-btn-blue3.btnDisabled .right {
  background-position: 0 -4323px;
}
/* Additional styles - ORANGE */
.ui-btn-orange .left {
  background-position: -16px -4350px;
}
.ui-btn-orange .lbl {
  background-position: 0 -4377px;
  color: #8a4106;
  text-shadow: #ffb639 0px 1px 0px;
}
.ui-btn-orange .right {
  background-position: 0 -4404px;
}
.ui-btn-orange.btnOver .left {
  background-position: -16px -4431px;
}
.ui-btn-orange.btnOver .lbl {
  background-position: 0 -4458px;
}
.ui-btn-orange.btnOver .right {
  background-position: 0 -4485px;
}
.ui-btn-orange.btnFocus .left {
  background-position: -16px -4593px;
}
.ui-btn-orange.btnFocus .lbl {
  background-position: 0 -4620px;
}
.ui-btn-orange.btnFocus .right {
  background-position: 0 -4647px;
}
.ui-btn-orange.btnDown .left {
  background-position: -16px -4512px;
}
.ui-btn-orange.btnDown .lbl {
  background-position: 0 -4539px;
}
.ui-btn-orange.btnDown .right {
  background-position: 0 -4566px;
}
.ui-btn-orange.btnDisabled .left {
  background-position: -16px -4674px;
}
.ui-btn-orange.btnDisabled .lbl {
  background-position: 0 -4701px;
  color: #c47806;
  text-shadow: #ffb639 0px 1px 0px;
}
.ui-btn-orange.btnDisabled .right {
  background-position: 0 -4728px;
}
/* Additional styles - YELLOW */
.ui-btn-yellow .left {
  background-position: -16px -4755px;
}
.ui-btn-yellow .lbl {
  background-position: 0 -4782px;
  color: #8a5000;
  text-shadow: #ffe082 0px 1px 0px;
}
.ui-btn-yellow .right {
  background-position: 0 -4809px;
}
.ui-btn-yellow.btnOver .left {
  background-position: -16px -4836px;
}
.ui-btn-yellow.btnOver .lbl {
  background-position: 0 -4863px;
}
.ui-btn-yellow.btnOver .right {
  background-position: 0 -4890px;
}
.ui-btn-yellow.btnFocus .left {
  background-position: -16px -4998px;
}
.ui-btn-yellow.btnFocus .lbl {
  background-position: 0 -5025px;
}
.ui-btn-yellow.btnFocus .right {
  background-position: 0 -5052px;
}
.ui-btn-yellow.btnDown .left {
  background-position: -16px -4917px;
}
.ui-btn-yellow.btnDown .lbl {
  background-position: 0 -4944px;
}
.ui-btn-yellow.btnDown .right {
  background-position: 0 -4971px;
}
.ui-btn-yellow.btnDisabled .left {
  background-position: -16px -5079px;
}
.ui-btn-yellow.btnDisabled .lbl {
  background-position: 0 -5106px;
  color: #c39658;
  text-shadow: #ffe082 0px 1px 0px;
}
.ui-btn-yellow.btnDisabled .right {
  background-position: 0 -5133px;
}
.btn.btnDisabled {
  cursor: default;
}
.submenu .lbl .btnArrow {
  display: inline-block;
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/arrow_small.png");
  background-repeat: no-repeat;
}
.btn .lbl {
  margin: 0;
  height: 22px;
  padding: 5px 8px 0 8px;
}
.btnIcon .lbl {
  overflow: hidden;
}
.btn .lbl {
  line-height: 19px;
}
.btn.smallbtn .lbl {
  line-height: 17px;
}
.btn_console {
  width: 20px;
  height: 20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid transparent;
}
.btn_consoleOver {
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.1);
}
.btn_consoleDown {
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.62), 2px 2px 5px rgba(0, 0, 0, 0.2) inset;
  background: rgba(255, 255, 255, 0.4);
}
.btn_console div {
  width: 18px;
  height: 18px;
  background: no-repeat 50% 50%;
}
.btn_console.clear div {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/clear_dark_flat_light.png);
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .btn_console.clear div {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/clear_dark_flat_light@2x.png);
    background-size: 13px 14px;
  }
}
.btn_console.maximize div {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/maximize.png);
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .btn_console.maximize div {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/maximize@2x.png);
    background-size: 12px 13px;
  }
}
.btn_console.popout div {
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/popout.png");
}
.btn_console_open {
  overflow: hidden;
  cursor: default;
  position: relative;
  height: 31px;
  width: 18px;
  padding: 6px 4px 8px 5px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
.btn_console_open span {
  border: 1px solid #929292;
  background: #e0e0e0;
  height: 13px;
  width: 7px;
  display: block;
  -webkit-box-shadow: 0 1px transparent;
  -moz-box-shadow: 0 1px transparent;
  box-shadow: 0 1px transparent;
}
.btn_console_open span:after {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2JkYmRiZCIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjYjRiNGI0IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(top, #bdbdbd 0%, #b4b4b4 100%);
  background-image: -webkit-linear-gradient(top, #bdbdbd 0%, #b4b4b4 100%);
  background-image: -o-linear-gradient(top, #bdbdbd 0%, #b4b4b4 100%);
  background-image: linear-gradient(top, #bdbdbd 0%, #b4b4b4 100%);
  -webkit-box-shadow: 0 1px #d3d3d3 inset, 0 -1px #8f8f8f;
  -moz-box-shadow: 0 1px #d3d3d3 inset, 0 -1px #8f8f8f;
  box-shadow: 0 1px #d3d3d3 inset, 0 -1px #8f8f8f;
  content: "";
  width: 7px;
  height: 6px;
  display: block;
  margin-top: 7px;
}
.btn_console_open:hover span:after {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2NkY2RjZCIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjYzRjNGM0IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(top, #cdcdcd 0%, #c4c4c4 100%);
  background-image: -webkit-linear-gradient(top, #cdcdcd 0%, #c4c4c4 100%);
  background-image: -o-linear-gradient(top, #cdcdcd 0%, #c4c4c4 100%);
  background-image: linear-gradient(top, #cdcdcd 0%, #c4c4c4 100%);
  -webkit-box-shadow: 0 1px #e3e3e3 inset, 0 -1px #8f8f8f;
  -moz-box-shadow: 0 1px #e3e3e3 inset, 0 -1px #8f8f8f;
  box-shadow: 0 1px #e3e3e3 inset, 0 -1px #8f8f8f;
}
.btn_console_openDown span:after {
  -webkit-box-shadow: 0 1px #d3d3d3 inset, 0 1px #8f8f8f;
  -moz-box-shadow: 0 1px #d3d3d3 inset, 0 1px #8f8f8f;
  box-shadow: 0 1px #d3d3d3 inset, 0 1px #8f8f8f;
  margin-top: 0px;
}
.btn_console_openDown:hover span:after {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2NkY2RjZCIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjYzRjNGM0IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(top, #cdcdcd 0%, #c4c4c4 100%);
  background-image: -webkit-linear-gradient(top, #cdcdcd 0%, #c4c4c4 100%);
  background-image: -o-linear-gradient(top, #cdcdcd 0%, #c4c4c4 100%);
  background-image: linear-gradient(top, #cdcdcd 0%, #c4c4c4 100%);
  -webkit-box-shadow: 0 1px #e3e3e3 inset, 0 1px #8f8f8f;
  -moz-box-shadow: 0 1px #e3e3e3 inset, 0 1px #8f8f8f;
  box-shadow: 0 1px #e3e3e3 inset, 0 1px #8f8f8f;
}
.btn_console_open.btnDisabled {
  cursor: default;
}
.btn-switcher {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-display: flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  cursor: default;
  font-size: 12px;
  font-weight: normal;
  color: ;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  background: #f7f7f7;
  border-radius: 0 2px 2px 0;
  box-shadow: inset 1px 0 #dedede;
  cursor: pointer;
  border: 1px solid #dedede;
  border-left: 0;
  border-radius: 0 3px 3px 0;
  position: relative;
  padding: 4px 17px 4px 8px;
  box-sizing: border-box;
}
.btn-switcherOver {
  background: #f0f0f0;
}
.btn-switcherDown {
  background: #ededed;
}
.btn-switcher svg {
  vertical-align: middle;
  margin: -2px 4px 0 0;
}
.btn-switcher span {
  display: block;
  position: absolute;
  right: 6px;
  top: 11px;
  width: 5px;
  height: 5px;
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/arrow_down_black.png") no-repeat;
  opacity: 0.6;
}
.btn-switcherIcon {
  background-repeat: no-repeat;
  padding-left: 25px;
  background-position: 5px 50%;
}
.c9-divider-double {
  position: relative;
  overflow: hidden;
  width: 2px;
  height: 23px;
  border-left: 1px solid #dedede;
  border-right: 1px solid transparent;
}
.c9-divider-double DIV {
  position: relative;
  width: 1px;
  height: 23px;
  border-left: 1px solid transparent;
  border-right: 1px solid #dedede;
}
.menudivider {
  border-right: 1px solid #dedede !important;
  margin-left: 10px !important;
  margin-top: -2px !important;
  height: 25px !important;
  width: 0 !important;
  margin-right: 3px;
}
.extrasdivider {
  border-right: 1px solid #dedede !important;
  height: 25px !important;
  width: 0 !important;
  margin-right: 4px !important;
  margin-left: 4px !important;
}
.c9-divider-hor {
  position: relative;
  height: 0px;
  border-top: 1px solid #dedede;
  border-bottom: 1px solid transparent;
}
.c9-divider-hor span {
  color: #606060;
  text-shadow: #dedede 0px 1px 0px;
  background: #1d1d1d;
  font-size: 7pt;
  top: -8px;
  position: relative;
  left: 4px;
  padding: 0 3px 0 3px;
  display: none;
}
.c9-divider-horCaption span {
  display: block;
}
.c9-divider {
  position: relative;
  overflow: hidden;
  width: 0px;
  height: 23px;
  border-left: 1px solid #dedede;
  border-right: 1px solid transparent;
}
.expandedpanel .c9-divider.runcommandsdivider {
  display: none;
}
.c9-menu-bar {
  position: relative;
  overflow: visible;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.c9-menu-bar:before {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 4px;
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/c9-repeat-x_flat_light.png);
  background-repeat: 'repeat-x';
  background-color: #49a8fa;
  content: "";
  display: none;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .c9-menu-bar:before {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/c9-repeat-x_flat_light@2x.png);
    background-size: 32px 1500px;
  }
}
.c9-menu-bar .c9-mbar-bcont {
  position: relative;
  overflow: visible;
}
.c9-menu-bar .c9-mbar-cont > *,
.c9-menu-bar .c9-mbar-cont .c9-mbar-minimize {
  height: 100% !important;
}
.c9-menu-bar .c9-mbar-cont {
  position: relative;
  overflow: hidden;
  padding: 0 11px 0 33px;
  margin: 0;
  height: 39px;
  background: #f1f1f1;
  box-shadow: 0 1px 0 0 transparent inset;
  border-bottom: 1px solid #dedede;
  border-top: 0px solid transparent;
}
.fullscreen .c9-menu-bar .c9-mbar-cont {
  box-shadow: none;
}
.bartools {
  padding-top: 0 !important;
  padding-left: 50px !important;
}
.c9-menu-bar .c9-mbar-cont > div {
  display: inline-block;
  vertical-align: top;
}
.c9-menu-bar .c9-mbar-cont .c9-divider-double,
.c9-menu-bar .c9-mbar-bcont .c9-mbar-minimize {
  border-right: 1px solid transparent !important;
  box-shadow: 1px 0 0 0 transparent;
}
.c9-menu-bar .c9-mbar-cont .c9-divider-double {
  border-left-width: 0;
  height: 16px;
  top: 1px;
}
.c9-menu-bar .c9-mbar-cont .c9-divider-double div {
  border: 0 !important;
}
.c9-menu-bar .c9-mbar-bcont .c9-mbar-minimize {
  cursor: pointer;
  height: 25px;
  left: 0;
  position: absolute;
  top: 0px;
  width: 31px;
}
.c9-menu-bar .c9-mbar-bcont .c9-mbar-minimize:before {
  content: "";
  display: block;
  border: 10px solid red;
  border-color: transparent transparent #acacac transparent;
  border-width: 5px 5px;
  width: 0px;
  margin: 5px 0 0 5px;
  z-index: 0;
  position: relative;
  box-shadow: 0px 1px #949494;
  top: 7px;
  left: 10px;
}
.c9-menu-bar .c9-mbar-bcont .c9-mbar-minimize:after {
  content: "";
  display: block;
  border: 10px solid red;
  border-color: transparent transparent #acacac transparent;
  border-width: 4px 4px;
  width: 0px;
  margin: 7px 0 0 6px;
  box-shadow: 0px 1px #949494;
  position: relative;
  left: 0px;
  top: -15px;
  top: -8px;
  left: 10px;
}
.c9-menu-bar .c9-mbar-bcont .c9-mbar-minimize:hover:before {
  border-color: transparent transparent #999999 transparent;
  box-shadow: 0px 1px #777777;
}
.c9-menu-bar .c9-mbar-bcont .c9-mbar-minimize:hover:after {
  border-color: transparent transparent #999999 transparent;
  box-shadow: 0px 1px #777777;
}
.c9-menu-bar .c9-mbar-bcont .c9-simple-btnDisabled.c9-mbar-minimize:hover {
  background-position: 0 -70px;
  cursor: default;
}
.c9-mbar-round {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/c9-no-repeat_flat_light.png);
  background-repeat: no-repeat;
  height: 37px;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0;
  width: 74px;
  z-index: 999;
  display: none;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .c9-mbar-round {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/c9-no-repeat_flat_light@2x.png);
    background-size: 480px 580px;
  }
}
.c9-mbar-round .mainlogo {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/c9-no-repeat_flat_light.png);
  background-repeat: no-repeat;
  background-position: 0 -44px;
  display: block;
  height: 26px;
  left: 33px;
  pointer-events: all;
  position: absolute;
  text-indent: 100%;
  top: 4px;
  width: 37px;
  outline: none;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .c9-mbar-round .mainlogo {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/c9-no-repeat_flat_light@2x.png);
    background-size: 480px 580px;
  }
}
.c9-mbar-round .mainlogo.update {
  background-position: -96px -44px;
}
.updateAvailable .c9-mbar-round .mainlogo {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/c9-no-repeat_flat_light.png") no-repeat -96px -44px;
  cursor: pointer;
}
.not-loggedin .c9-menu-bar .c9-mbar-bcont .c9-mbar-round {
  top: 55px;
}
.readonly .c9-menu-bar .c9-mbar-bcont .c9-mbar-round {
  top: 35px;
}
.c9-menu-bar .c9-mbar-bcont .c9-activity {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/c9-no-repeat_flat_light.png") no-repeat -84px 0;
  height: 10px;
  left: 24px;
  pointer-events: all;
  position: absolute;
  top: 4px;
  width: 10px;
  display: none;
}
.c9-menu-bar .c9-mbar-bcont .c9-activity .light {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/c9-no-repeat_flat_light.png") no-repeat -102px -19px;
  /* nothing */
  height: 10px;
  left: 0;
  position: absolute;
  top: 0;
  width: 10px;
}
.c9-menu-bar .c9-mbar-bcont .c9-activity.saving .light {
  -webkit-animation: saving .4s linear 0 infinite;
  -moz-animation: saving .4s linear 0 infinite;
  animation: saving .4s linear 0 infinite;
  background-position: -102px 0px !important;
}
.c9-menu-bar .c9-mbar-bcont .c9-activity.saved .light {
  background-position: -102px -19px !important;
}
.c9-menu-bar .c9-mbar-bcont .c9-activity.error .light {
  background-position: -84px -19px !important;
}
/* MINIMIZED */
.c9-menu-bar.minimized .c9-mbar-cont,
.c9-menu-bar.minimized .c9-mbar-bcont .c9-mbar-minimize {
  background-color: #f1f1f1;
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/c9-repeat-x_flat_light.png");
  background-repeat: no-repeat;
  background-position: 50% -13px;
  cursor: pointer;
  height: 7px;
  -webkit-box-shadow: 0 1px transparent inset;
  -moz-box-shadow: 0 1px transparent inset;
  box-shadow: 0 1px transparent inset;
}
.c9-menu-bar.minimized .c9-mbar-cont:hover,
.c9-menu-bar.minimized .c9-mbar-bcont .c9-mbar-minimize:hover {
  background-color: #e9e9e9;
  background-position: 50% -21px;
  -webkit-box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.08) inset, 0 6px 0 0 rgba(255, 255, 255, 0.05) inset;
  -moz-box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.08) inset, 0 6px 0 0 rgba(255, 255, 255, 0.05) inset;
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.08) inset, 0 6px 0 0 rgba(255, 255, 255, 0.05) inset;
}
.c9-menu-bar.minimized .c9-mbar-cont * {
  display: none;
}
.c9-menu-bar.minimized .c9-mbar-bcont .c9-mbar-minimize {
  top: 1px;
}
.c9-menu-btn {
  height: 100%;
  box-sizing: border-box;
  overflow: visible;
  cursor: default;
  position: relative;
  display: inline-block;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 13px;
  line-height: 14px;
  color: #333333;
  padding: 13px 9px 0 9px;
  text-shadow: 0px 0px 0px transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.c9-menu-btnOver {
  background-color: #e6e6e6;
  box-shadow: none;
  color: #333333;
}
.c9-menu-btnDown {
  font-weight: normal;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.09);
  border: 1px solid #dedede;
  border-width: 0 1px;
  padding: 13px 8px 0 8px;
}
/* Why are we using an extra div here??? */
/*.c9-menu-btnDown .c9-fix {
    height           : 3px;
    position         : absolute;
    display          : none;
    bottom           : -1px;
    left             : 1px;
    right            : 1px;
    background-color : #1c1c1c;
    z-index          : 20000101;
}*/
.c9-menu-btnDown.submenu {
  z-index: 100000000;
}
.c9-menu-btnDisabled.c9-menu-btn .c9-label {
  color: #bdbdbd;
}
.c9-menu-btn .icon {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/c9-repeat-x_flat_light.png);
  background-repeat: no-repeat;
  position: absolute;
  left: 4px;
  right: 0;
  top: 4px;
  bottom: 0;
  display: none;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .c9-menu-btn .icon {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/c9-repeat-x_flat_light@2x.png);
    background-size: 32px 1500px;
  }
}
.c9-menu-btn.nosize .icon {
  background-size: auto !important;
}
.c9-menu-btn.preferences {
  padding: 18px !important;
  margin-left: 0;
}
.c9-menu-btn.preferences .icon {
  background-position: 50% -364px;
  display: block;
  top: 7px !important;
  height: 25px !important;
}
.c9-menu-btn.share .icon {
  background-position: 50% -1367px;
  display: block;
}
.c9-menu-btn.notifications .icon {
  background-position: 50% -1400px;
  display: block;
}
.c9-menu-btnIcon {
  padding-left: 24px;
}
.c9-menu-btnIcon .icon {
  display: block;
}
.c9-menu-btnEmpty {
  padding-left: 7px;
}
.c9-menu-btnEmpty .icon {
  left: 0;
  top: 0;
}
.c9-menu-btnDisabled {
  color: gray;
}
.c9-menu-btn.c9btn {
  min-width: 12px;
  font-weight: bold;
  background-position: 2px 50%;
}
.c9-menu-btn.c9btn.update {
  color: #BFD34F;
}
.c9-menu-btn.c9btn.offline {
  color: #d22a3f;
  text-shadow: 0 1px black;
}
.c9-simple-btn {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: default;
}
.c9-simple-btnIcon {
  background-repeat: no-repeat;
  padding-left: 18px;
  padding-top: 2px;
}
.c9-toolbarbutton-glossy {
  border: 1px solid transparent;
  color: #333333;
  cursor: default;
  position: relative;
  border-radius: 3px;
  height: 21px;
}
.c9-toolbarbutton-glossyOver {
  border: 1px solid #dbdbdb;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2U5ZTllOSIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSI1NSUiIHN0b3AtY29sb3I9IiNlOWU5ZTkiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjZTllOWU5IiBzdG9wLW9wYWNpdHk9IjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlOWU5ZTkiIHN0b3Atb3BhY2l0eT0iMSIvPjwvbGluZWFyR3JhZGllbnQ+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz48L3N2Zz4=);
  background-image: -moz-linear-gradient(top, #e9e9e9 0%, #e9e9e9 55%, #e9e9e9 55%, #e9e9e9 100%);
  background-image: -webkit-linear-gradient(top, #e9e9e9 0%, #e9e9e9 55%, #e9e9e9 55%, #e9e9e9 100%);
  background-image: -o-linear-gradient(top, #e9e9e9 0%, #e9e9e9 55%, #e9e9e9 55%, #e9e9e9 100%);
  background-image: linear-gradient(top, #e9e9e9 0%, #e9e9e9 55%, #e9e9e9 55%, #e9e9e9 100%);
  -webkit-box-shadow: inset 1px 1px transparent, inset -1px -1px transparent;
  -moz-box-shadow: inset 1px 1px transparent, inset -1px -1px transparent;
  box-shadow: inset 1px 1px transparent, inset -1px -1px transparent;
  text-shadow: none;
}
.c9-toolbarbutton-glossyDown,
.c9-toolbarbutton-glossyActive {
  border: 1px solid #dbdbdb;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Y0ZjRmNCIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSI1NSUiIHN0b3AtY29sb3I9IiNmNGY0ZjQiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjZjRmNGY0IiBzdG9wLW9wYWNpdHk9IjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmNGY0ZjQiIHN0b3Atb3BhY2l0eT0iMSIvPjwvbGluZWFyR3JhZGllbnQ+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz48L3N2Zz4=);
  background-image: -moz-linear-gradient(top, #f4f4f4 0%, #f4f4f4 55%, #f4f4f4 55%, #f4f4f4 100%);
  background-image: -webkit-linear-gradient(top, #f4f4f4 0%, #f4f4f4 55%, #f4f4f4 55%, #f4f4f4 100%);
  background-image: -o-linear-gradient(top, #f4f4f4 0%, #f4f4f4 55%, #f4f4f4 55%, #f4f4f4 100%);
  background-image: linear-gradient(top, #f4f4f4 0%, #f4f4f4 55%, #f4f4f4 55%, #f4f4f4 100%);
  -webkit-box-shadow: inset 1px 1px transparent, inset -1px -1px transparent;
  -moz-box-shadow: inset 1px 1px transparent, inset -1px -1px transparent;
  box-shadow: inset 1px 1px transparent, inset -1px -1px transparent;
  text-shadow: none;
}
.c9-toolbarbutton-glossyDisabled {
  color: #bdbdbd;
  text-shadow: none;
}
.c9-toolbarbutton-glossy .c9-label {
  line-height: 21px;
  margin-right: 4px;
  padding: 0 3px 0 7px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.c9-toolbarbutton-glossy .c9-icon {
  z-index: 100;
  display: none;
  background-position: 0 0;
  background-repeat: no-repeat;
  height: 19px;
  left: 2px;
  position: absolute;
  top: 1px;
  width: 23px;
}
.c9-toolbarbutton-glossyIcon .c9-icon {
  display: block;
}
.c9-toolbarbutton-glossyIcon .c9-label {
  padding: 0px 3px 0 22px;
}
.c9-toolbarbutton-glossyIcon.c9-toolbarbutton-glossyEmpty {
  width: 23px;
}
.c9-toolbarbutton-glossyIcon.c9-toolbarbutton-glossyEmpty .c9-label {
  display: none;
}
.btnSave .c9-icon {
  background-image: none !important;
  border: 1px solid #1C1C1C;
  border-radius: 50%;
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.2) inset;
  height: 4px;
  left: auto;
  right: 4px;
  top: 9px;
  width: 4px;
  position: absolute;
  display: block;
}
.btnSave .c9-label {
  padding-right: 4px;
}
.c9-toolbarbutton-glossy.saving .c9-label,
.c9-toolbarbutton-glossy.saved .c9-label {
  background-position: 0 -523px;
  font-size: 9px;
  line-height: 24px;
  padding: 0 15px 0 10px;
  text-transform: uppercase;
}
.c9-toolbarbutton-glossy.saving .c9-label:after,
.c9-toolbarbutton-glossy.saved .c9-label:after {
  background-position: -476px -523px;
}
.c9-toolbarbutton-glossy.saving .c9-icon {
  background-color: #85C410;
  right: 10px;
  -webkit-animation: saving .4s linear 0 infinite;
  -moz-animation: saving .4s linear 0 infinite;
  animation: saving .4s linear 0 infinite;
}
.c9-toolbarbutton-glossy.saved .c9-icon {
  background-color: #85C410;
  right: 10px;
}
.c9-toolbarbutton-glossy.error .c9-icon {
  background-color: red;
  right: 10px;
}
.c9-toolbarbutton-glossy.save .c9-icon {
  background-color: #D01616;
  right: 10px;
}
.c9-toolbarbutton-glossy.save .c9-label {
  font-size: 9px;
  padding: 0 16px 0 8px;
  right: 14px;
  text-transform: uppercase;
}
.c9-toolbarbutton-glossy.disabled .c9-icon {
  background-color: white;
  opacity: .2;
}
.c9-toolbarbutton-glossyDisabled.light .c9-icon {
  opacity: .2;
}
.c9-toolbarbutton-glossy.bug .c9-icon {
  background-position: 0 -38px;
}
.c9-toolbarbutton-glossyDown.bug .c9-icon,
.c9-toolbarbutton-glossyOver.bug .c9-icon {
  background-position: 0 0;
}
.c9-toolbarbutton {
  height: 21px;
  overflow: hidden;
  cursor: default;
  position: relative;
  line-height: 17px;
  border: 1px solid transparent;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.with-arrow.c9-toolbarbutton {
  padding-right: 5px;
}
.hbox > .c9-toolbarbutton {
  height: 23px;
}
.c9-toolbarbutton .c9-icon {
  display: none;
  width: 23px;
  height: 19px;
  position: absolute;
  top: 2px;
  left: 2px;
  background-position: 0 0;
  background-repeat: no-repeat;
}
.c9-toolbarbuttonIcon .c9-icon {
  display: block;
}
.c9-toolbarbuttonOver {
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  border: 1px solid #1c1c1c;
  -moz-box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.15) inset, 0px 1px 0px 0px rgba(255, 255, 255, 0.1);
  -webkit-box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.15) inset, 0px 1px 0px 0px rgba(255, 255, 255, 0.1);
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.15) inset, 0px 1px 0px 0px rgba(255, 255, 255, 0.1);
  background: #343434;
  background: -webkit-gradient(linear, left top, left bottom, from(#3a3a3a), color-stop(1, #333333));
  background: -moz-linear-gradient(center bottom, #333333 0%, #3a3a3a 100%) repeat scroll 0 0 transparent;
}
.c9-toolbarbutton .c9-label {
  position: relative;
  overflow: hidden;
  font-family: Arial;
  font-size: 12px;
  color: #d6d6d6;
  line-height: 14px;
  height: 15px;
  padding: 4px 6px 0 6px;
}
.with-arrow.c9-toolbarbutton .c9-label {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/btn-arrow.png") no-repeat right 9px;
  padding-right: 11px;
}
.with-arrow.c9-toolbarbutton .c9-label {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/btn-arrow.png") no-repeat right 9px;
  padding-right: 11px;
}
.with-arrow.c9-toolbarbutton .c9-label {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/btn-arrow.png") no-repeat right 9px;
  padding-right: 11px;
}
.c9-toolbarbuttonEmpty .c9-icon {
  position: relative;
}
.c9-toolbarbuttonEmpty .c9-label {
  display: none;
}
.c9-toolbarbuttonIcon .c9-label {
  padding: 4px 6px 0 22px;
}
.record.c9-toolbarbuttonIcon .c9-label {
  padding: 4px 6px 0 26px;
}
.c9-toolbarbuttonIcon.preview .c9-label {
  padding-left: 25px;
}
.c9-toolbarbuttonDown {
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  border: 1px solid #1c1c1c;
  -moz-box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.15) inset, 0px 1px 0px 0px rgba(255, 255, 255, 0.1);
  -webkit-box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.15) inset, 0px 1px 0px 0px rgba(255, 255, 255, 0.1);
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.15) inset, 0px 1px 0px 0px rgba(255, 255, 255, 0.1);
  background: #343434;
  background: -webkit-gradient(linear, left top, left bottom, from(#282828), color-stop(1, #2e2e2e));
  background: -moz-linear-gradient(center bottom, #2e2e2e 0%, #282828 100%) repeat scroll 0 0 transparent;
}
.c9-toolbarbuttonDown .c9-icon {
  background-position: 0 -19px;
}
.c9-toolbarbuttonDisabled .c9-icon {
  background-position: 0 -38px;
}
.record.c9-toolbarbuttonDisabled .c9-icon,
.record.c9-toolbarbuttonDown .c9-icon {
  background-position: 0 0;
}
.c9-toolbarbuttonDisabled .c9-label {
  color: #606060;
  text-shadow: #000000 0px 1px 0px;
}
.c9-toolbarbutton-light {
  border-radius: 2px;
  border: 1px solid transparent;
  position: relative;
}
.c9-toolbarbutton-lightOver {
  height: 19px;
}
.c9-toolbarbutton-lightOver,
.c9-toolbarbutton-lightDown {
  background-color: rgba(255, 255, 255, 0.65);
  background-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.08), transparent);
  background-image: -moz-linear-gradient(bottom, rgba(0, 0, 0, 0.08), transparent);
  background-image: linear-gradient(bottom, rgba(0, 0, 0, 0.08), transparent);
  border-color: rgba(128, 128, 128, 0.55);
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.7) inset;
  cursor: pointer;
}
.c9-toolbarbutton-lightDown {
  background-color: rgba(233, 233, 233, 0.555);
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.15) inset;
}
.c9-toolbarbutton-light .c9-label {
  color: #4D4D4D;
  height: 19px !important;
  line-height: 21px;
  margin-top: 0 !important;
  padding: 0 5px 0 5px;
  text-shadow: 0 1px 0 #FFFFFF;
}
.c9-toolbarbutton-lightIcon .c9-label {
  padding-left: 25px;
}
.c9-toolbarbutton-lightIcon .c9-icon {
  display: block;
  position: absolute;
  width: 23px;
  height: 19px;
  top: 0px;
  left: 2px;
}
.c9-toolbarbutton-lightDisabled .c9-label {
  color: #c5c5c6;
}
.c9-toolbarbutton-lightDisabled .c9-icon {
  opacity: 0.3;
  background-position: 0 -38px;
}
.cboffline {
  width: 55px;
  height: 21px;
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/sync.png") no-repeat 0 -21px;
}
.cbofflineDown {
  background-position: 0 0px;
}
.cbofflineChecked {
  background-position: 0 0px;
}
.cboffline {
  background: #EFEFEF;
  border-radius: 24px;
  height: 24px !important;
  width: 51px !important;
  border: 1px solid #A3A3A3;
}
.cboffline:after {
  content: "";
  display: block;
  width: 26px;
  height: 26px;
  border-radius: 26px;
  background: white;
  border: 1px solid #A3A3A3;
  margin: -2px 0 0 -1px;
}
.cbofflineChecked {
  background: #98c878;
  border-color: #7da562;
}
.cbofflineChecked:after {
  border-color: #7da562;
  float: right;
  margin: -2px -1px 0 0px;
}
.cbblack.cbcontainer {
  padding: 2px 2px 2px 22px;
}
.cbblack.cbcontainer span {
  color: #333333;
  top: 0;
}
.cbblack.cbcontainer.dark-bg span {
  text-shadow: #000 0px 1px 0px;
}
.cbblack.cbcontainer .checkbox {
  width: 22px;
  height: 20px;
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/checkbox_flat_light.png);
  background-repeat: no-repeat;
  background-position: 0 0;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .cbblack.cbcontainer .checkbox {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/checkbox_flat_light@2x.png);
    background-size: 22px 162px;
  }
}
.cbblack.cbcontainerOver .checkbox {
  background-position: 0 -20px;
}
.cbblack.cbcontainerDown .checkbox {
  background-position: 0 -40px;
}
.cbblack.cbcontainerChecked .checkbox {
  background-position: 0 -60px;
}
.cbblack.cbcontainerOver.cbcontainerChecked .checkbox {
  background-position: 0 -80px;
}
.cbblack.cbcontainerChecked.cbcontainerDown .checkbox {
  background-position: 0 -100px;
}
.cbblack.cbcontainerError span {
  background-color: #ffb500;
  color: #fbfbfb;
}
.cbblack.cbcontainerDisabled .checkbox {
  background-position: 0 -120px;
}
.cbblack.cbcontainerDisabled.cbcontainerChecked .checkbox {
  background-position: 0 -140px;
}
.cbblack.cbcontainerDisabled span {
  color: #bebebe;
}
.cbgrey.cbcontainer {
  padding: 2px 2px 2px 20px;
}
.cbgrey.cbcontainer span {
  color: #333;
  top: 0px;
}
.cbgrey.cbcontainer .checkbox {
  width: 16px;
  height: 17px;
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/checkbox_grey.png") no-repeat 0 0;
}
.cbgrey.cbcontainerOver .checkbox {
  background-position: 0 -17px;
}
.cbgrey.cbcontainerDown .checkbox {
  background-position: 0 -34px;
}
.cbgrey.cbcontainerChecked .checkbox {
  background-position: 0 -51px;
}
.cbgrey.cbcontainerOver.cbcontainerChecked .checkbox {
  background-position: 0 -68px;
}
.cbgrey.cbcontainerChecked.cbcontainerDown .checkbox {
  background-position: 0 -85px;
}
.cbgrey.cbcontainerError span {
  background-color: #ffb500;
  color: #fbfbfb;
}
.cbgrey.cbcontainerDisabled .checkbox {
  background-position: 0 -102px;
}
.cbgrey.cbcontainerChecked.cbcontainerDisabled .checkbox {
  background-position: 0 -119px;
}
.cbgrey.cbcontainerDisabled span {
  color: #bebebe;
}
.cbcontainer {
  padding: 2px 2px 2px 16px;
  position: relative;
  overflow: visible;
  color: #333;
}
.cbcontainer span {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 13px;
  cursor: default;
  padding: 4px 3px 2px 8px;
  position: relative;
  top: -2px;
  overflow: visible;
  display: inline-block;
  line-height: 13px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.cbcontainerFocus span {
  padding: 0px 2px 1px 2px;
  border: 1px dotted #BBB;
}
.cbbasic.cbcontainerChecked.cbcontainerDown.cbcontainerFocus .checkbox {
  background-position: 0 -48px;
}
.cbcontainer .checkbox {
  width: 12px;
  height: 12px;
  overflow: hidden;
  position: absolute;
  left: 2px;
  top: 2px;
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/checkbox.png") no-repeat 0 -12px;
}
.cbcontainerDown .checkbox {
  background-position: 0 -36px;
}
.cbcontainerChecked .checkbox {
  background-position: 0 -24px;
}
.cbcontainerError span {
  background-color: #ffb500;
  color: #fbfbfb;
}
.cbcontainerDisabled .checkbox {
  background-position: 0 0px;
}
.cbcontainerDisabled span {
  color: #bebebe;
}
.cbcontainer span {
  top: -2px;
}
.editor_tab {
  padding: 0 0 0 0;
  margin: 0 0;
  position: relative;
  /*background: rgb(37,37,37) url("@{image-path}/c9-noise.png");*/
}
.editor_tab.notabs:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 1px;
  right: 0;
  background: rgba(255, 255, 255, 0.06);
  z-index: 100000;
}
.editor_tab.empty {
  border-right: 1px solid #dedede;
  border-left: 1px solid #dedede;
  margin-right: -1px;
  margin-left: -1px;
}
.editor_tab .btnsesssioncontainer {
  height: 32px;
  color: #f5f5f5;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 13px;
  background: #fbfbfb;
  box-shadow: 0 -1px 0 0 #dedede inset, 0 1px 0 0 transparent inset, 0 1px 0 transparent;
  border: 1px solid #dedede;
  border-width: 1px 1px 0 1px;
  position: absolute;
  left: -1px;
  right: -1px;
  top: -1px;
  z-index: 100;
  clip: rect(0, 3000px, 35px, 0px);
  transition-property: padding-right;
  margin-bottom: 1px;
}
.editor_tab.notabs .btnsesssioncontainer {
  display: none;
}
.editor_tab.morepadding .btnsesssioncontainer {
  padding-right: 53px;
}
/*.dark.editor_tab .btnsesssioncontainer {*/
/*    box-shadow: 0 -1px 0 0 black inset, 0 1px 0 0 rgba(255, 255, 255, .06) inset;*/
/*}*/
.editor_tab .btnsesssioncontainer .inside {
  max-width: 100%;
  padding: 5px 6px 0 23px;
  height: 27px;
  overflow-y: hidden;
  overflow-x: hidden;
  display: flex;
  display: -webkit-flex;
  display: -ms-flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
}
/* Tab Button (not active) */
.session_btn {
  min-width: 6px;
  max-width: 97px;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  width: 0;
  line-height: 1.2em;
  padding: 0 37px;
  position: relative;
  margin-right: -25px;
  margin-top: 0;
  height: 26px;
  overflow: hidden;
  /*overflow: visible;*/
  cursor: default;
}
.session_btn.destroyed {
  min-width: 25px !important;
  max-width: 0px !important;
  padding: 0 !important;
}
.session_btn .tab_middle,
.session_btn .tab_shadow {
  height: 26px;
  box-sizing: border-box;
  position: relative;
  padding: 5px 0 0 0;
  overflow: visible;
  color: #000;
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/c9-repeat-x_flat_light.png);
  background-repeat: repeat-x;
  background-position: 0 -84px;
  /*display : block;*/
  /*overflow : hidden;*/
  text-overflow: ellipsis;
  /*white-space : nowrap;*/
  margin-top: 2px;
  margin-left: -1px;
  margin-right: -1px;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .session_btn .tab_middle,
  .session_btn .tab_shadow {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/c9-repeat-x_flat_light@2x.png);
    background-size: 32px 1500px;
  }
}
.session_btn .tab_shadow {
  position: absolute;
  margin: 0;
  top: 0;
  left: 36px;
  right: 38px;
  bottom: 0;
  background-position: 0 -1354px;
  opacity: 0.7;
}
.session_btn .tab_middle:before,
.session_btn .tab_middle:after,
.session_btn .tab_shadow:before,
.session_btn .tab_shadow:after {
  background-color: inherit;
  content: "";
  display: block;
  position: absolute;
  height: 26px;
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/c9-no-repeat_flat_light.png);
  background-repeat: no-repeat;
  top: 0;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .session_btn .tab_middle:before,
  .session_btn .tab_middle:after,
  .session_btn .tab_shadow:before,
  .session_btn .tab_shadow:after {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/c9-no-repeat_flat_light@2x.png);
    background-size: 480px 580px;
  }
}
.session_btn .tab_middle:before,
.session_btn .tab_middle:after {
  -webkit-mask: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/c9-no-repeat_flat_light@2x.png") no-repeat;
  -webkit-mask-size: 480px 580px;
}
.session_btn .tab_shadow:before {
  left: -36px;
  background-position: 0 -123px;
  opacity: 0.7;
  width: 36px;
}
.session_btn .tab_shadow:after {
  right: -38px;
  background-position: -42px -123px;
  opacity: 0.7;
  width: 38px;
}
.session_btn .tab_middle:before {
  left: -36px;
  background-position: 0 -125px;
  -webkit-mask-position: 0 -95px;
  mask: url(#tab-mask-left);
  width: 36px;
}
.session_btn .tab_middle:after {
  right: -38px;
  background-position: -42px -125px;
  -webkit-mask-position: -42px -95px;
  mask: url(#tab-mask-right);
  width: 38px;
}
.session_btn:not(.curbtn) .tab_middle,
.session_btn:not(.curbtn) .tab_middle:after,
.session_btn:not(.curbtn) .tab_middle:before {
  background-color: #fcfcfc;
  -webkit-transition: background-color 0.15s linear;
}
.session_btn.notrans .tab_middle,
.session_btn.notrans .tab_middle:after,
.session_btn.notrans .tab_middle:before {
  -webkit-transition: none;
}
.session_btn.over:not(.curbtn) .tab_middle,
.session_btn.over:not(.curbtn) .tab_middle:after,
.session_btn.over:not(.curbtn) .tab_middle:before {
  background-color: #eeeeee;
}
/* Tab Button (active) */
.session_btn.curbtn {
  height: 29px;
  z-index: 10;
  margin-top: -1px;
}
body > .session_btn.curbtn {
  cursor: default;
  height: 26px;
}
.session_btn.curbtn .tab_middle {
  height: 27px;
  background-position: 0 -1451px;
  color: #000;
  padding-top: 5px;
  margin-top: 3px;
}
.session_btn.curbtn .tab_middle:before {
  height: 27px;
  background-position: 0 -125px;
}
.session_btn.curbtn .tab_middle:after {
  height: 27px;
  background-position: -42px -125px;
}
.session_btn.curbtn .tab_shadow {
  background-position: 0 50px;
  opacity: 1;
}
.session_btn.curbtn .tab_shadow:before {
  background-position: 0 -122px;
  opacity: 1;
}
.session_btn.curbtn .tab_shadow:after {
  background-position: -42px -122px;
  opacity: 1;
}
.dark.session_btn.curbtn .tab_middle {
  background-position: 0 -1451px;
  margin-top: 2px;
}
.dark.session_btn.curbtn .tab_middle:before {
  background-position: 0 -125px;
  -webkit-mask-position: 0 -95px;
}
.dark.session_btn.curbtn .tab_middle:after {
  background-position: -42px -125px;
  -webkit-mask-position: -42px -95px;
}
/* Tab Title */
.session_btn .sessiontab_title {
  display: block;
  /*position : absolute;*/
  /*text-overflow : ellipsis;*/
  white-space: nowrap;
  overflow: hidden;
  padding: 1px 0 0 0;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
  color: #333333;
  text-shadow: none;
}
.session_btn.btnclose .tab_middle .sessiontab_title {
  margin-right: 13px;
  margin-left: 0px;
}
.session_btn.curbtn .sessiontab_title {
  color: #333333;
  margin-top: -1px;
  text-shadow: none;
  border-bottom: 1px dotted transparent;
}
.dark.session_btn.curbtn .sessiontab_title {
  color: rgba(255, 255, 255, 0.85);
  margin-top: 0;
  text-shadow: 0 1px rgba(0, 0, 0, 0.4);
}
.focus.session_btn.curbtn .sessiontab_title {
  height: 21px;
}
.focus.session_btn.curbtn .sessiontab_title {
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: -0.4px;
}
/* Close Button States (idle, loading, saving, etc) */
/* This section has a delicate sequence. Be careful! */
.session_btn.preview {
  font-style: italic;
}
.session_btn.curbtn strong {
  margin-top: -1px;
  background-position: 0 0;
}
.dark.session_btn.curbtn strong {
  margin-top: 1px !important;
  background-position: 0 -14px;
}
.has_apf .session_btn.changed strong,
.has_apf .session_btn.saving strong,
.has_apf .session_btn.saved strong,
.has_apf .session_btn.conflict strong,
.has_apf .session_btn.error strong {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/tabsave-flat.png);
  background-repeat: no-repeat;
  background-position: 0 2px;
  width: 9px;
  height: 11px;
  right: -5px;
  top: 8px;
  margin-top: 0px;
  -webkit-animation: none;
  -moz-animation: none;
  -o-animation: none;
  -ms-animation: none;
  animation: none;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .has_apf .session_btn.changed strong,
  .has_apf .session_btn.saving strong,
  .has_apf .session_btn.saved strong,
  .has_apf .session_btn.conflict strong,
  .has_apf .session_btn.error strong {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/tabsave-flat@2x.png);
    background-size: 36px 9px;
  }
}
.has_apf .session_btn.changed strong {
  background-position: 0 0;
}
.has_apf .session_btn.error strong {
  background-position: -9px 0;
}
.has_apf .session_btn.saving strong {
  background-position: -18px 0;
}
.has_apf .session_btn.saved strong {
  background-position: -27px 0;
}
.has_apf .session_btn.conflict strong {
  background-position: -18px 0;
}
.asterisk .session_btn.changed .sessiontab_title:before {
  content: "*";
}
.has_apf .session_btn.running strong {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/running_flat_light.png);
  background-repeat: no-repeat;
  -webkit-animation: rotation 2s infinite steps(16);
  -moz-animation: rotation 2s infinite steps(16);
  -o-animation: rotation 2s infinite steps(16);
  -ms-animation: rotation 2s infinite steps(16);
  animation: rotation 2s infinite steps(16);
  height: 15px;
  width: 15px;
  right: -10px;
  top: 6px;
  z-index: 10;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .has_apf .session_btn.running strong {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/running_flat_light@2x.png);
    background-size: 225px 15px;
  }
}
.has_apf .session_btn.loading strong,
.has_apf .session_btn.connecting strong {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/tab-save-spinner-active_flat_light.png);
  background-repeat: no-repeat;
  -webkit-animation: loading-24-spinner 1.2s steps(24) infinite;
  -moz-animation: loading-24-spinner 1.2s steps(24) infinite;
  -o-animation: loading-24-spinner 1.2s steps(24) infinite;
  -ms-animation: loading-24-spinner 1.2s steps(24) infinite;
  animation: loading-24-spinner 1.2s steps(24) infinite;
  height: 14px;
  width: 14px;
  right: -9px;
  top: 7px;
  z-index: 10;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .has_apf .session_btn.loading strong,
  .has_apf .session_btn.connecting strong {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/tab-save-spinner-active_flat_light@2x.png);
    background-size: 336px 14px;
  }
}
.session_btn strong,
.has_apf .session_btn strong:hover,
.has_apf .session_btn strong:active,
.has_apf .session_btn.curbtn strong:hover,
.has_apf .session_btn.curbtn strong:active {
  width: 14px;
  height: 14px;
  display: block;
  position: absolute;
  right: -8px;
  top: 7px;
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/close_tab_btn_flat_light.png);
  background-repeat: no-repeat;
  background-position: 0 0;
  cursor: pointer;
  z-index: 10;
  margin-top: -1px;
  -webkit-animation: none;
  -moz-animation: none;
  -o-animation: none;
  -ms-animation: none;
  animation: none;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .session_btn strong,
  .has_apf .session_btn strong:hover,
  .has_apf .session_btn strong:active,
  .has_apf .session_btn.curbtn strong:hover,
  .has_apf .session_btn.curbtn strong:active {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/close_tab_btn_flat_light@2x.png);
    background-size: 42px 28px;
  }
}
.has_apf .session_btn strong:hover {
  background-position: -14px 0;
}
.has_apf .session_btn strong:active {
  background-position: -28px 0;
}
.has_apf .session_btn.curbtn strong:hover {
  margin-top: -1px;
  background-position: -14px 0;
}
.has_apf .session_btn.curbtn strong:active {
  margin-top: -1px;
  background-position: -28px 0;
}
.has_apf .dark.session_btn.curbtn strong:hover {
  margin-top: 1px;
  background-position: -14px -14px;
}
.has_apf .dark.session_btn.curbtn strong:active {
  margin-top: 1px;
  background-position: -28px -14px;
}
/* Other */
.has_apf .plus_tab_button {
  display: inline-block;
  margin: 1px 0 0 14px;
  top: 3px;
  vertical-align: top;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  cursor: default;
  -webkit-transform: skew(23deg);
  -moz-transform: skew(23deg);
  -o-transform: skew(23deg);
  -ms-transform: skew(23deg);
  transform: skew(23deg);
  border-radius: 4px 3px 4px 2px;
  border: 1px solid transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  width: 25px;
  height: 18px;
  z-index: 100000;
}
.has_apf .plus_tab_button:after {
  content: "";
  display: block;
  width: 15px;
  height: 15px;
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/c9-no-repeat_flat_light.png);
  background-repeat: no-repeat;
  -webkit-transform: skew(-23deg);
  -moz-transform: skew(-23deg);
  -o-transform: skew(-23deg);
  -ms-transform: skew(-23deg);
  transform: skew(-23deg);
  margin: 0px 0 0 3px;
  background-position: -337px -3px;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .has_apf .plus_tab_button:after {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/c9-no-repeat_flat_light@2x.png);
    background-size: 480px 580px;
  }
}
.plus_tab_button.c9-simple-btnOver {
  border: 1px solid transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+dHJhbnNwYXJlbnQgMCV0cmFuc3BhcmVudCAxMDAlPC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2dyYWQtdWNnZy1nZW5lcmF0ZWQpIiAvPjwvc3ZnPg==);
  background-image: -moz-linear-gradient(top, transparent 0%, transparent 100%);
  background-image: -webkit-linear-gradient(top, transparent 0%, transparent 100%);
  background-image: -o-linear-gradient(top, transparent 0%, transparent 100%);
  background-image: linear-gradient(top, transparent 0%, transparent 100%);
}
.plus_tab_button.c9-simple-btnOver:after {
  background-position: -337px -23px;
}
.plus_tab_button.c9-simple-btnDown {
  border: 1px solid transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+dHJhbnNwYXJlbnQgMCV0cmFuc3BhcmVudCAxMDAlPC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2dyYWQtdWNnZy1nZW5lcmF0ZWQpIiAvPjwvc3ZnPg==);
  background-image: -moz-linear-gradient(top, transparent 0%, transparent 100%);
  background-image: -webkit-linear-gradient(top, transparent 0%, transparent 100%);
  background-image: -o-linear-gradient(top, transparent 0%, transparent 100%);
  background-image: linear-gradient(top, transparent 0%, transparent 100%);
}
.plus_tab_button.c9-simple-btnDown:after {
  background-position: -337px -23px;
}
.has_apf .plus_tab_button.c9-simple-btnOver:after,
.has_apf .plus_tab_button.c9-simple-btnDown:after {
  margin: 0px 0 0 3px;
}
.has_apf .tabmenubtn {
  left: 8px;
  position: absolute;
  top: 9px;
  width: 19px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 3px;
  height: 16px;
  border: 1px solid transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+dHJhbnNwYXJlbnQgMCV0cmFuc3BhcmVudCAxMDAlPC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2dyYWQtdWNnZy1nZW5lcmF0ZWQpIiAvPjwvc3ZnPg==);
  background-image: -moz-linear-gradient(top, transparent 0%, transparent 100%);
  background-image: -webkit-linear-gradient(top, transparent 0%, transparent 100%);
  background-image: -o-linear-gradient(top, transparent 0%, transparent 100%);
  background-image: linear-gradient(top, transparent 0%, transparent 100%);
}
.has_apf .tabmenubtn:after {
  content: "";
  display: block;
  width: 14px;
  height: 11px;
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/c9-no-repeat_flat_light.png);
  background-repeat: no-repeat;
  margin: 2px 0 0 1px;
  background-position: -377px -5px;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .has_apf .tabmenubtn:after {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/c9-no-repeat_flat_light@2x.png);
    background-size: 480px 580px;
  }
}
.has_apf .tabmenubtn.c9-simple-btnOver {
  border: 1px solid transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+dHJhbnNwYXJlbnQgMCV0cmFuc3BhcmVudCAxMDAlPC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2dyYWQtdWNnZy1nZW5lcmF0ZWQpIiAvPjwvc3ZnPg==);
  background-image: -moz-linear-gradient(top, transparent 0%, transparent 100%);
  background-image: -webkit-linear-gradient(top, transparent 0%, transparent 100%);
  background-image: -o-linear-gradient(top, transparent 0%, transparent 100%);
  background-image: linear-gradient(top, transparent 0%, transparent 100%);
}
.has_apf .tabmenubtn.c9-simple-btnOver:after {
  background-position: -377px -26px;
}
.has_apf .tabmenubtn.c9-simple-btnDown {
  height: 17px;
}
.has_apf .tabmenubtn.c9-simple-btnDown:after {
  background-position: -377px -45px;
}
.tabsContextMenu {
  overflow: visible !important;
  margin: 5px 0 0 -5px !important;
}
.tabsContextMenu:before {
  border: 1px solid #dfdfdf;
  border-width: 1px 1px 0 1px;
  -webkit-box-shadow: inset 0 1px #ffffff;
  -moz-box-shadow: inset 0 1px #ffffff;
  box-shadow: inset 0 1px #ffffff;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMSIvPjwvbGluZWFyR3JhZGllbnQ+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz48L3N2Zz4=);
  background-image: -moz-linear-gradient(top, white 0%, white 100%);
  background-image: -webkit-linear-gradient(top, white 0%, white 100%);
  background-image: -o-linear-gradient(top, white 0%, white 100%);
  background-image: linear-gradient(top, white 0%, white 100%);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 3px 3px 0 0;
  content: "";
  display: block;
  left: -1px;
  pointer-events: none;
  position: absolute;
  top: -28px;
  width: 30px;
  height: 28px;
}
.tabsContextMenu:after {
  content: "";
  display: block;
  width: 23px;
  height: 28px;
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/c9-no-repeat_flat_light.png);
  background-repeat: no-repeat;
  margin: 2px 0 0 3px;
  position: absolute;
  top: -28px;
  background-position: -374px -39px;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .tabsContextMenu:after {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/c9-no-repeat_flat_light@2x.png);
    background-size: 480px 580px;
  }
}
.upward.tabsContextMenu:before {
  border-width: 0px 1px 1px 1px;
  -webkit-box-shadow: 0 1px rgba(255, 255, 255, 0.6), inset 0 -1px #ffffff;
  -moz-box-shadow: 0 1px rgba(255, 255, 255, 0.6), inset 0 -1px #ffffff;
  box-shadow: 0 1px rgba(255, 255, 255, 0.6), inset 0 -1px #ffffff;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMSIvPjwvbGluZWFyR3JhZGllbnQ+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz48L3N2Zz4=);
  background-image: -moz-linear-gradient(top, white 0%, white 100%);
  background-image: -webkit-linear-gradient(top, white 0%, white 100%);
  background-image: -o-linear-gradient(top, white 0%, white 100%);
  background-image: linear-gradient(top, white 0%, white 100%);
  border-radius: 0 0 3px 3px;
  top: auto;
  bottom: -27px;
  height: 27px;
}
.codeditorHolder .editor_tab {
  background: #fbfbfb;
}
.codeditorHolder > .vsplitbox,
.codeditorHolder > .hsplitbox {
  height: 100%;
}
/* Page */
.editor_tab .session_page {
  display: none;
  position: absolute;
  top: 32px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  margin: 0 auto;
  padding-top: 7px;
  overflow: hidden;
}
.editor_tab.notabs .session_page {
  top: 0;
}
.editor_tab .session_page.curpage {
  display: block;
}
.tb_textbox {
  position: relative;
  height: 25px;
}
.tb_textbox .sbtb_middle {
  height: 19px;
  padding: 2px 5px;
  border: 1px solid #DEDEDE;
  border-radius: 3px;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj5jZW50ZXIgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMTAwJSIgeDI9IjAlIiB5Mj0iMCUiPjxzdG9wIG9mZnNldD0iNTAlIiBzdG9wLWNvbG9yPSIjRkZGIiBzdG9wLW9wYWNpdHk9IjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGRkYiIHN0b3Atb3BhY2l0eT0iMSIvPjwvbGluZWFyR3JhZGllbnQ+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz48L3N2Zz4=);
  background-image: -moz-linear-gradient(center bottom, #FFF 50%, #FFF 100%);
  background-image: -webkit-linear-gradient(center bottom, #FFF 50%, #FFF 100%);
  background-image: -o-linear-gradient(center bottom, #FFF 50%, #FFF 100%);
  background-image: linear-gradient(center bottom, #FFF 50%, #FFF 100%);
  color: #333333;
  margin: 0;
  outline: none;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
  text-overflow: ellipsis;
  box-shadow: none;
}
.topborder .sbtb_middle {
  border-width: 1px 0 0 0;
}
.tb_textbox .sbtb_middle INPUT {
  border: 0;
  height: 17px;
  font-size: 12px;
  color: #333333;
  font-family: Arial;
  outline: none;
  background-color: transparent;
  width: 100%;
}
.tb_textboxInitial .sbtb_middle INPUT {
  color: #777777;
}
.tb_textboxDisabled .sbtb_middle INPUT {
  color: #CCC;
}
.tb_textboxDisabled .sbtb_middle {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj5jZW50ZXIgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMTAwJSIgeDI9IjAlIiB5Mj0iMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGMEYwRjAiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iNDAlIiBzdG9wLWNvbG9yPSIjRjBGMEYwIiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(center bottom, #F0F0F0 0%, #F0F0F0 40%);
  background-image: -webkit-linear-gradient(center bottom, #F0F0F0 0%, #F0F0F0 40%);
  background-image: -o-linear-gradient(center bottom, #F0F0F0 0%, #F0F0F0 40%);
  background-image: linear-gradient(center bottom, #F0F0F0 0%, #F0F0F0 40%);
  cursor: default;
}
.searchbox .sbtb_middle .input {
  border: 0;
  font-size: 12px;
  color: #333333;
  font-family: menlo, courier new, fixed, swiss, sans-serif;
  outline: none;
  background-color: transparent;
  width: 100%;
  overflow: auto;
  white-space: pre-wrap;
  max-height: 95px;
  min-height: 18px;
  overflow: hidden;
}
.searchbox .sbtb_middle input.input {
  line-height: 0;
  overflow: hidden;
  margin-bottom: -1px;
  top: -1px;
}
.searchTxt.tb_console {
  margin: 0;
  overflow: hidden;
}
.searchTxt.tb_console .sbtb_middle {
  background-color: #ffffff;
  border-radius: 3px;
}
.tb_textboxDisabled .sbtb_middle .input {
  color: #C5C5C5;
}
.searchbox.tb_console .sbtb_middle .input {
  height: auto;
  position: relative;
}
.searchTxt.tb_textboxInitial .sbtb_middle .input,
.tb_textboxInitialMsg {
  color: #a5a5a5 !important;
  text-shadow: 0 1px 0 #ffffff;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 13px;
}
.searchbox span,
.searchbox font {
  text-shadow: none;
  padding: 1px 0 1px 0;
}
.searchbox {
  height: auto !important;
}
.searchbox.tb_console .sbtb_middle {
  height: auto;
  padding: 4px 25px 3px 5px;
  box-shadow: none;
}
.searchbox.tb_console.buttonsright .sbtb_middle {
  padding-right: 6em!important;
}
.searchTxt .btnclose {
  position: absolute;
  top: 7px;
  right: 8px;
  width: 14px;
  height: 14px;
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/btnclose_flat_light.png);
  background-repeat: no-repeat;
  background-position: 0 0;
  display: none;
  cursor: pointer;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .searchTxt .btnclose {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/btnclose_flat_light@2x.png);
    background-size: 14px 28px;
  }
}
.searchTxt .btnclose:hover {
  background-position: 0 -14px;
}
.has_apf .vimInput .sbtb_middle {
  padding: 2px 1px 2px 3px;
  border: none;
  border-top: 1px solid #aaaaaa;
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.6), inset -2px 1px 7px 0 rgba(0, 0, 0, 0.29);
  cursor: text;
}
.has_apf .vimInput .sbtb_middle.dark {
  padding: 2px 1px 2px 3px;
  border-top: 1px solid black;
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.1), inset -2px 1px 7px 0 rgba(0, 0, 0, 0.5);
}
.has_apf .vimInput .sbtb_middle.dark .input {
  color: #f1f1f1;
}
.has_apf .vimInput .ace_invisible {
  color: #949393;
}
.has_apf .vimInput .dark .ace_invisible {
  color: #5A5A5A;
}
.searchbox.tb_console.dark .sbtb_middle {
  box-shadow: inset 1px 2px 3px 0 rgba(0, 0, 0, 0.22);
}
.searchTxt.tb_console.dark .sbtb_middle {
  background-color: #444444;
}
.searchTxt.tb_textboxInitial.dark .sbtb_middle .input {
  color: #A0A0A0 !important;
  text-shadow: none;
}
.searchbox.dark .sbtb_middle .input {
  color: #f1f1f1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.searchbox.dark .btnclose {
  visibility: hidden;
}
.searchbox.dark .ace-tm .ace_cursor {
  color: #919191 !important;
}
.searchbox.dark .ace-tm .ace_marker-layer .ace_selection {
  background: #7a7a7a !important;
}
.searchbox.dark .sbtb_middle {
  border-color: #222222 !important;
}
.ace_one-line {
  line-height: inherit!important;
}
.ace_one-line .ace_cursor {
  border-left-width: 1px!important;
}
.ace_one-line .ace_scroller {
  background: transparent!important;
  border-radius: 0!important;
}
.ace_searchbox .sbtb_middle {
  padding-right: 24px !important;
}
.searchbox .sbtb_middle .input {
  white-space: nowrap !important;
}
.has_apf .searchTxt.tb_console.ace_searchboxDisabled .sbtb_middle {
  color: #C5C5C5;
  background: #F1F1F1;
}
.has_apf .searchTxt.tb_console.ace_searchboxDisabled .sbtb_middle .input {
  color: #C5C5C5;
}
.ace_one-line .ace_scroller.ace_scroll-left {
  box-shadow: none;
}
.tb_console {
  position: relative;
  height: 31px;
  box-shadow: 0 1px transparent;
}
.tb_console .sbtb_middle {
  border: 1px solid #dedede;
  background: #ffffff;
  box-shadow: none;
  color: #333333;
  font-size: 14px;
  height: 19px;
  line-height: 18px;
  padding: 2px 4px 0px 4px;
  outline: none;
  text-overflow: ellipsis;
}
.topborder .sbtb_middle {
  border-width: 1px 0 0 0;
}
.tb_console .sbtb_middle INPUT,
.consoleInputCloned {
  border: 0;
  height: 17px;
  line-height: 15px;
  font-size: 12px;
  color: #333333;
  font-family: menlo, courier new, fixed, swiss, sans-serif;
  outline: none;
  background-color: transparent;
  width: 100%;
  padding: 0;
}
.ace_editor .tb_textboxInitialMsg {
  text-indent: 5px;
  text-shadow: none;
}
.ace_initialMsg:not(.ace_focus) .ace_cursor {
  display: none;
}
.tb_consoleDisabled .sbtb_middle {
  background: #e2e2e2;
}
.tb_consoleDisabled .sbtb_middle INPUT {
  color: #b3b3b3;
}
.tb_consoleDisabled .sbtb_middle {
  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #ebebeb), color-stop(0.4, #ffffff));
  background: -moz-linear-gradient(center bottom, #ebebeb 0%, #ffffff 40%);
  cursor: default;
}
.tbcolor {
  padding: 2px;
  border-radius: 4px;
  background: white;
  border-color: #DEDEDE;
}
.datagrid {
  position: relative;
  border: 1px solid #c3c3c3;
  background-color: white;
  /*cursor: default;*/
  overflow: hidden;
  font-family: Tahoma, Arial;
  font-size: 8pt;
  padding: 19px 0 0 0;
  color: #333;
}
.datagrid .headings {
  position: relative;
  top: 0;
  left: 0;
  height: 20px;
  z-index: 10;
  background-color: #e6e6e6;
  margin: -20px 15px 0 0;
  white-space: nowrap;
}
.noscrollbar .datagrid .headings {
  margin: -21px 1px 0 0;
}
.noscrollbar .datagrid {
  background: transparant;
}
.datagrid .headings div {
  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #e5e5e5), color-stop(1, #f8f8f8));
  background: -moz-linear-gradient(center bottom, #e5e5e5 0%, #f8f8f8 100%);
  overflow: hidden;
  text-overflow: ellipsis;
  color: #333;
  border-bottom: 1px solid #BFBFBF;
}
.docktab .datagrid .headings div {
  background-image: linear-gradient(bottom, #eceff2 0%, #edf0f3 49%, #f4f6f8 50%, #fafcfe 100%);
  background-image: -o-linear-gradient(bottom, #eceff2 0%, #edf0f3 49%, #f4f6f8 50%, #fafcfe 100%);
  background-image: -moz-linear-gradient(bottom, #eceff2 0%, #edf0f3 49%, #f4f6f8 50%, #fafcfe 100%);
  background-image: -webkit-linear-gradient(bottom, #eceff2 0%, #edf0f3 49%, #f4f6f8 50%, #fafcfe 100%);
  background-image: -ms-linear-gradient(bottom, #eceff2 0%, #edf0f3 49%, #f4f6f8 50%, #fafcfe 100%);
  border-bottom: 1px solid #e1e5ea;
}
.datagrid .headings div u {
  padding: 2px 4px 1px 3px;
  display: block;
  height: 15px;
  text-decoration: none;
  border-left: 1px solid white;
  border-right: 1px solid #bfbfbf;
  border-top: 1px solid white;
}
.docktab .datagrid .headings div u {
  border-top: 1px solid #fafcfe;
  border-left: 1px solid #fafbfc;
  border-right: 1px solid #c8c8c8;
}
.datagrid .headings div.hover,
.datagrid .headings div.down,
.datagrid .headings div.drag {
  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #dddddd), color-stop(1, #ffffff));
  background: -moz-linear-gradient(center bottom, #dddddd 0%, #ffffff 100%);
  color: #555;
}
.datagrid .headings div.drag {
  border: 1px solid white;
}
.datagrid .headings div.down u,
.datagrid .headings div.hover u {
  border-left: 1px solid transparent;
}
.datagrid .headings div.ascending u {
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/sort_asc.gif");
  background-repeat: no-repeat;
  background-position: right 7px;
}
.datagrid .headings div.descending u {
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/sort_desc.gif");
  background-repeat: no-repeat;
  background-position: right 6px;
}
.datagrid .records {
  overflow-x: hidden;
  overflow-y: scroll;
  height: 100%;
  padding: 18px 0 0 0;
  position: relative;
  top: -19px;
  white-space: nowrap;
  border-color: white;
  border-style: solid;
  border-width: 1px 0 0;
}
.with-noise .records {
  background: #E1E1E1 url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/dg_noise.png") repeat 0 0;
}
.noscrollbar .records {
  overflow-y: hidden;
}
.datagrid .records .row span {
  height: 18px;
  background: white no-repeat 0 50%;
}
.datagrid .records .row span u {
  padding: 1px 3px 3px 4px;
  height: 15px;
  display: block;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  cursor: default;
  border-right: 1px solid #D6D6D6;
  border-left: 1px solid white;
}
.with-noise .records .row span {
  border-left: 1px solid #D1D1D1;
  margin-left: -1px;
}
.with-noise .records .row span {
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/dg_noise.png");
  background-repeat: repeat;
  border-top: #f0f0f0;
  background-color: #e1e1e1;
}
.noscrollbar .datagrid .records .row span {
  background-color: transparent;
}
.datagrid .records .row {
  height: 18px;
  padding-left: 0;
}
.datagridFocus .records .indicate span {
  padding: 0;
  color: #333;
}
.datagrid .row:nth-child(4n-1) span {
  background: #f0f0f0;
}
.with-noise .row:nth-child(4n-1) span {
  background: #d1d1d1;
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/dg_noise.png");
}
.datagrid .records .testhead {
  height: 22px;
}
.datagrid .records .testhead span {
  border-top: 4px solid #c3c3c3;
}
.datagrid .records .current_execution span {
  background: #d4e0c6;
}
.datagrid .records .selected,
.datagrid .records .selected span {
  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #CECECE), color-stop(1, #DEDEDE));
  background: -moz-linear-gradient(center bottom, #CECECE 0%, #DEDEDE 100%);
}
.datagridFocus .records .selected,
.datagridFocus .records .selected span,
.datagridFocus .records .dragAppend,
.datagridFocus .records .dragAppend span {
  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #337cbc), color-stop(1, #4091d8));
  background: -moz-linear-gradient(center bottom, #337cbc 0%, #4091d8 100%);
  color: white;
}
/*.datagrid .records .editing, .datagrid .records .editing span{
    background-color : white;
    color : #333;
}*/
.datagridFocus .records .selected span u {
  border-left: 1px solid #8bc0ed;
}
.datagrid .move_pointer {
  height: 100px;
  width: 2px;
  position: absolute;
  top: 0;
  margin: -10px 0 0 -4px;
  width: 9px;
  height: 38px;
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/column_picker.gif") no-repeat 0 0;
  overflow: hidden;
  z-index: 1000;
}
.datagrid .size_pointer {
  border: 1px dotted gray;
  border-width: 0 1px 0 1px;
  height: 100%;
  position: absolute;
  top: 0px;
  z-index: 1000;
  cursor: e-resize;
  cursor: ew-resize;
}
.datagrid .message {
  font-weight: normal;
  color: #333;
  padding: 0 0 10px 50px;
  font-size: 11px;
  margin-top: 10px;
  border-bottom: 1px solid #eee;
}
.datagrid .message label {
  padding: 2px 0 0 4px;
  height: 14px;
  display: inline-block;
  position: relative;
  top: -3px;
}
/*.datagrid .message span{
    background : url("@{icon-path}/cog.png") no-repeat left bottom;
    width : 16px;
    height : 16px;
    display : inline-block;
}*/
.datagrid .root .message {
  padding: 0;
  margin: 0;
  border-bottom: 0;
  height: 0;
}
.datagrid .root .message label {
  top: 0;
  padding: 0;
  height: 0;
  overflow: hidden;
}
.pointer {
  display: none;
}
.dginfo {
  display: none;
  overflow: hidden;
  white-space: normal;
  padding: 5px;
  background-color: #f3f3f3;
  margin-top: 3px;
  margin-left: 6px;
  position: relative;
  left: -3px;
  margin-bottom: 3px;
}
.dginfo h3 {
  margin: 0 0 5px 0;
}
.dginfo p {
  margin: 0;
}
.datagrid .records .stdel,
.datagridFocus .records .stdel,
.datagrid .records .stdel span,
.datagridFocus .records .stdel span {
  color: #ccc;
}
.dragdg {
  border: 2px solid black;
  width: 10px;
  height: 5px;
}
.datagrid .records .dragInsert {
  height: 19px;
  margin-top: -1px;
}
.datagrid .records .dragInsert span {
  border-top: 1px solid gray;
}
.datagrid blockquote {
  padding: 0;
  margin: 0;
  display: none;
  height: 0;
  overflow: hidden;
  background: repeat-y 0px center;
}
.datagrid .records span.treecell u {
  text-decoration: none;
  display: inline-block;
  width: 100%;
  padding: 1px 2px 3px 2px;
  border: 0;
}
.datagrid .records span.treecell u {
  background-repeat: no-repeat;
  padding-left: 20px;
}
.datagrid.noicon .records span.treecell u {
  padding-left: 0;
}
.datagrid .records .row .treecell .iconCell,
.datagrid .records .row .iconCell {
  background-position: 1px 1px;
  background-repeat: no-repeat;
  padding: 1px 0 3px 22px;
}
.datagrid .treecell strong {
  width: 9px;
  height: 9px;
  margin: 4px 4px 0 4px;
  position: relative;
  top: -5px;
  display: inline-block;
}
.datagrid .plus > .treecell strong,
.datagrid .pluslast > .treecell strong {
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/plus.png");
}
.datagrid .min > .treecell strong,
.datagrid .minlast > .treecell strong {
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/min.png");
}
.datagrid .slider {
  margin: 5px 5px 0 3px;
}
.datagrid .tb {
  border: 0;
  padding: 2px 0 4px 4px;
  background: white;
  border-left: 1px solid #eee;
  border-bottom: 1px solid #eee;
  height: 13px;
  position: relative;
  top: -6px;
}
.datagrid .treecell .tb {
  padding: 1px 0 0 0;
  top: 0;
  border: 0;
  border-bottom: 1px solid #eee;
}
/*.datagrid .tb_textbox{
    margin   : 0 0 0 0;
    height   : 16px;
    overflow : hidden;
    top      : 0;
    border   : 1px solid #bbb;
}
.datagrid .tb_textbox .sbtb_middle{
    background : white;
    padding : 0;
    border : 0;
    box-shadow : 0px 0px 8px 1px rgba(0,0,0,0.2) inset;
}
.datagrid .tb_textbox .sbtb_middle input{
    color : #333;
    margin-top : 0;
    top : -2px;
    position : relative;
    padding : 0 0 0 4px;
    font-family : Tahoma, Arial;
    font-size : 8pt;
}*/
.datagrid .message,
.datagrid .empty {
  height: 0;
  padding: 0;
  margin: 3px;
}
.datagrid .loading > .treecell strong {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/file-tree-load-spinner.gif") no-repeat 0 0;
  width: 16px;
  height: 16px;
  top: -2px !important;
  left: -3px;
  vertical-align: top;
  margin-right: -3px !important;
}
.datagrid .loading.selected > .treecell strong {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/file-tree-load-spinner-selected.gif") no-repeat 0 0;
}
.datagrid .row > span {
  vertical-align: top;
}
.datagrid .headings div {
  float: left;
}
.datagrid .records .row span {
  float: left;
}
.datagrid .headings {
  padding-top: 2px;
  height: 15px;
}
.datagrid .headings div {
  display: -moz-inline-box;
  overflow: visible;
  position: relative;
}
.datagrid .records .row span {
  display: -moz-inline-box;
  overflow: visible;
  position: relative;
}
.datagrid .headings {
  margin: -20px 17px 0 0;
}
.datagrid {
  position: relative;
  border: 1px solid #c3c3c3;
  background-color: white;
  overflow: hidden;
  font-family: Tahoma, Arial;
  font-size: 8pt;
  padding: 0;
  color: #333;
}
.datagrid .headings {
  position: absolute;
  top: 20px;
  left: 0;
  right: -1px;
  height: 20px;
  z-index: 10;
  background-color: #e6e6e6;
  white-space: nowrap;
}
.datagrid .records {
  overflow-x: hidden;
  overflow-y: scroll;
  position: absolute;
  top: 0px;
  bottom: 0;
  height: auto;
  left: 0;
  right: 0;
  white-space: nowrap;
  border-color: white;
  border-style: solid;
  border-width: 1px 0 0;
  display: block;
  margin: 0;
}
.noscrollbar .records {
  overflow-y: hidden;
}
.datagrid div.records .treecell strong {
  top: 0px;
}
.draggrid .treecell .iconCell,
.datagrid .records span.treecell .iconCell {
  padding: 2px 0 1px 24px;
}
.divider_console {
  width: 0;
  height: 17px;
  border-left: 1px solid #dedede;
  border-right: 1px solid transparent;
  cursor: default;
}
.divider {
  height: 0;
  border: 1px solid white;
  border-width: 1px 0 1px 0;
  border-color: #c3c3c3 white white #c3c3c3;
  line-height: 0;
  cursor: default;
}
.hbox .divider,
.vdivider {
  width: 0;
  margin: 0 10px 0 10px;
  border-width: 0 1px 0 1px;
  height: 17px;
}
.divider span {
  color: #333;
  background: #f5f5f5;
  padding: 0 2px 0 2px;
  position: relative;
  top: -1px;
  display: none;
  font-size: 8pt;
}
.table .divider,
.vbox .divider,
.hbox .divider {
  margin: 0;
}
.modal-divider {
  border-color: #b0b2b4 #E6E6E6 #E6E6E6 #b0b2b4;
}
.divider-status-bar {
  border: none;
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/toolbar-divider.png") 0px 0px repeat-y;
}
.dark .divider-status-bar {
  background: none;
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}
.ace_dark .divider-status-bar {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/toolbar-divider.png") -6px 0px repeat-y;
}
.dropdown-dark-glossy {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2FlYWVhZSIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSI1MiUiIHN0b3AtY29sb3I9IiNhZWFlYWUiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iNTIlIiBzdG9wLWNvbG9yPSIjYWVhZWFlIiBzdG9wLW9wYWNpdHk9IjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNhZWFlYWUiIHN0b3Atb3BhY2l0eT0iMSIvPjwvbGluZWFyR3JhZGllbnQ+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz48L3N2Zz4=);
  background-image: -moz-linear-gradient(top, #aeaeae 0%, #aeaeae 52%, #aeaeae 52%, #aeaeae 100%);
  background-image: -webkit-linear-gradient(top, #aeaeae 0%, #aeaeae 52%, #aeaeae 52%, #aeaeae 100%);
  background-image: -o-linear-gradient(top, #aeaeae 0%, #aeaeae 52%, #aeaeae 52%, #aeaeae 100%);
  background-image: linear-gradient(top, #aeaeae 0%, #aeaeae 52%, #aeaeae 52%, #aeaeae 100%);
  -webkit-box-shadow: 0 1px 0 transparent inset, 0px 1px transparent;
  -moz-box-shadow: 0 1px 0 transparent inset, 0px 1px transparent;
  box-shadow: 0 1px 0 transparent inset, 0px 1px transparent;
  border: 1px solid transparent;
  border-radius: 3px;
  max-height: 100px !important;
  min-height: 21px;
  padding: 0 18px 0 0;
  position: relative;
}
.single-arrow.dropdown-dark-glossy {
  padding: 0 25px 0 0;
}
.dropdown-dark-glossy .label {
  color: #ffffff;
  text-shadow: none;
  display: inline-block;
  font-size: 12px;
  line-height: 24px;
  overflow: hidden;
  padding: 0 5px 0 8px;
}
.dropdown-dark-glossy .button {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/dropdown-dark-glossy/button.png") no-repeat 3px 50%;
  display: inline-block;
  bottom: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 16px;
}
.single-arrow.dropdown-dark-glossy .button {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/dropdown-dark-glossy/arrow.png") no-repeat 5px 50%;
  width: 23px;
}
.dropdown-dark-glossy .button:before {
  content: "";
  display: block;
  left: -2px;
  position: absolute;
  top: 2px;
  bottom: 2px;
  border-left: 1px solid #dedede;
  box-shadow: 1px 0 transparent;
}
.dropdown-dark-glossyOver {
  -webkit-box-shadow: 0 1px 0 transparent inset, 0px 1px transparent, 0 0 0 1000px rgba(255, 255, 255, 0.1) inset;
  -moz-box-shadow: 0 1px 0 transparent inset, 0px 1px transparent, 0 0 0 1000px rgba(255, 255, 255, 0.1) inset;
  box-shadow: 0 1px 0 transparent inset, 0px 1px transparent, 0 0 0 1000px rgba(255, 255, 255, 0.1) inset;
}
.dropdown-dark-glossyDown {
  -webkit-box-shadow: 0 0 3px 2px transparent inset;
  -moz-box-shadow: 0 0 3px 2px transparent inset;
  box-shadow: 0 0 3px 2px transparent inset;
}
/*.dropdown-dark-glossyDisabled {
    background-color: transparent;
    border-color: rgba(0, 0, 0, .34);
    box-shadow: 0 1px 0 0 rgba(255, 255, 255, .02) inset;
}*/
.dropdown-dark-glossyDisabled .label {
  color: rgba(189, 216, 187, 0.5);
}
.dropdown-dark-glossy-options {
  display: none;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  padding: 5px;
  color: #333333;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.07);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.07);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.07);
  border-radius: 4px;
}
.dropdown-dark-glossy-options.upward {
  margin-top: -12px;
}
.dropdown-dark-glossy-options .c9-dd-item {
  cursor: default;
  font-size: 12px;
  font-family: Helvetica, Arial, sans-serif;
  height: 13px;
  line-height: 14px;
  overflow: hidden;
  padding: 3px 5px 4px;
  text-overflow: ellipsis-word;
  white-space: nowrap;
  border-radius: 2px;
}
.dropdown-dark-glossy-options .c9-dd-item.selected {
  color: #63acff;
}
.dropdown-dark-glossy-options .c9-dd-item.hover {
  background-color: #63acff;
  color: #ffffff;
}
.dropdown {
  position: relative;
  background-color: #dedede;
  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #dedede), color-stop(1, #ffffff));
  background: -moz-linear-gradient(center bottom, #dedede 0%, #ffffff 100%);
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  -webkit-box-shadow: 0px 1px 1px #9fa0a3;
  -moz-box-shadow: 0px 1px 1px #9fa0a3;
  box-shadow: 0px 1px 1px #9fa0a3;
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #fafafa;
  border-left: 1px solid #fafafa;
  border-right: 1px solid #fafafa;
  height: 15px;
  margin: 0;
  padding: 2px 21px 2px 0;
  color: #333;
  font-family: Tahoma, Arial;
  font-size: 11px;
}
.dropdownDisabled {
  color: #bebebe;
}
.dropdownDown {
  position: relative;
}
.dropdown .dropdownArrow {
  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #dedede), color-stop(1, #ffffff));
  background: -moz-linear-gradient(center bottom, #dedede 0%, #ffffff 100%);
  height: 15px;
  margin: 2px 0 4px;
  position: absolute;
  right: 0;
  top: 0;
  width: 18px;
  -webkit-border-top-right-radius: 2px;
  -webkit-border-bottom-right-radius: 2px;
  -moz-border-radius-topright: 2px;
  -moz-border-radius-bottomright: 2px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
.dropdown .dropdownArrow span {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/ddarrow.png") no-repeat center center;
  display: block;
  height: 15px;
  position: absolute;
  width: 18px;
}
.dropdown .dropdownArrow div {
  border-left: 1px solid #B9B9B9;
  height: 13px;
  width: 1px;
  background-color: #fff;
  padding-bottom: 2px;
}
.dropdown .dropdownlabel {
  padding: 1px 1px 1px 5px;
  cursor: default;
  height: 13px;
  margin: 0 0 0 2px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.dropdownFocus .dropdownlabel {
  border: 1px dotted #B8B8B8;
  padding: 0 0 0 4px;
}
.dropdownFocus .dropdownArrow {
  background: none;
}
.dropdownOver .dropdownArrow {
  background: -webkit-gradient(linear, left bottom, left top, color-stop(0.48, #cfcfcf), color-stop(0.53, #e6e6e6), color-stop(1, #ffffff));
  background: -moz-linear-gradient(center bottom, #cfcfcf 48%, #e6e6e6 53%, #ffffff 100%);
}
.dropdownDown .dropdownArrow {
  background: -webkit-gradient(linear, left bottom, left top, color-stop(0.48, #ffffff), color-stop(0.53, #e6e6e6), color-stop(1, #cfcfcf));
  background: -moz-linear-gradient(center bottom, #ffffff 48%, #e6e6e6 53%, #cfcfcf 100%);
}
.optionList {
  position: absolute;
  top: 0;
  left: 0;
  width: 120px;
  margin-top: 2px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-shadow: 0 2px 8px #8A8A8A;
  -moz-box-shadow: 0 2px 8px #8A8A8A;
  box-shadow: 0 2px 8px #8A8A8A;
  background: #ffffff;
  z-index: 1000;
  color: #333333;
  font-family: Tahoma, Arial;
  font-size: 11px;
  display: none;
  overflow: auto;
}
.optionList .dditem {
  display: block;
  height: 16px;
  padding: 2px 3px 2px 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: white;
  color: #333333;
  position: relative;
  cursor: default;
}
.optionList .dditem:first-child {
  -webkit-border-top-left-radius: 4px;
  -webkit-border-top-right-radius: 4px;
  -moz-border-radius-topleft: 4px;
  -moz-border-radius-topright: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.optionList .dditem:last-child {
  -webkit-border-bottom-right-radius: 4px;
  -webkit-border-bottom-left-radius: 4px;
  -moz-border-radius-bottomright: 4px;
  -moz-border-radius-bottomleft: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
.optionList .dditem.hover {
  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #337cbc), color-stop(1, #4091d8));
  background: -moz-linear-gradient(center bottom, #337cbc 0%, #4091d8 100%);
  color: white;
}
.optionList .selected span {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/dot_blue.png") no-repeat 0 0;
  height: 8px;
  left: 5px;
  position: absolute;
  top: 6px;
  width: 9px;
}
.optionList .selected.hover span {
  background-position: 0 -8px;
}
.errorbox {
  cursor: default;
  z-index: 2000000;
  position: absolute;
  margin: 33px 0 0 5px;
}
.errorbox.upward {
  margin-top: -5px;
}
.errorReserveUrl {
  max-width: 350px !important;
}
.errorbox strong {
  display: block;
  margin: 0 0 3px 0;
}
.errorbox .errorbox_ctl,
.errorbox .errorbox_ctr,
.errorbox .errorbox_cbl,
.errorbox .errorbox_cbr {
  position: absolute;
  width: 12px;
  background-repeat: no-repeat;
  background-position: 0 0;
}
.errorbox .errorbox_ctl {
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/hp_errorbox_ctl.png");
  height: 12px;
  top: 0;
  left: 0;
}
.errorbox .errorbox_ctr {
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/hp_errorbox_ctr.png");
  height: 12px;
  top: 0;
  right: 0;
}
.errorbox .errorbox_cbl {
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/hp_errorbox_cbl.png");
  height: 20px;
  bottom: 0;
  left: 0;
}
.errorbox .errorbox_cbr {
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/hp_errorbox_cbr.png");
  height: 20px;
  bottom: 0;
  right: 0;
}
.errorbox .errorbox_bt,
.errorbox .errorbox_bl,
.errorbox .errorbox_br,
.errorbox .errorbox_bb {
  position: absolute;
}
.errorbox .errorbox_bt,
.errorbox .errorbox_bb {
  background-repeat: repeat-x;
}
.errorbox .errorbox_bl,
.errorbox .errorbox_br {
  background-repeat: repeat-y;
}
.errorbox .errorbox_bt {
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/hp_errorbox_bt.png");
  top: 0;
  left: 12px;
  right: 12px;
  height: 12px;
  background-position: 0 0px;
}
.errorbox .errorbox_bb {
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/hp_errorbox_bb.png");
  bottom: 0;
  left: 12px;
  right: 12px;
  height: 20px;
  background-position: 0 0px;
}
.errorbox .errorbox_bl {
  bottom: 20px;
  top: 12px;
  left: 0;
  width: 12px;
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/hp_errorbox_bl.png");
  background-position: 0 0;
}
.errorbox .errorbox_br {
  bottom: 20px;
  top: 12px;
  right: 0;
  width: 12px;
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/hp_errorbox_br.png");
  background-position: 0 0;
}
.errorbox .errorboxContent {
  top: 12px;
  left: 12px;
  right: 12px;
  bottom: 12px;
  padding: 12px 12px 20px 12px;
}
.errorReserveUrl .errorboxContent {
  width: 325px;
}
.errorbox .errorboxContent SPAN {
  padding: 6px 8px 6px 2px;
  display: block;
  background-color: #bf0202;
  font-family: Tahoma, Arial;
  font-size: 8pt;
  color: #ffffff;
}
.errorReserveUrl .errorboxContent SPAN {
  text-align: center;
}
.errorbox .errbox_arrow {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/hp_errorbox_arrow.png") no-repeat top left;
  width: 11px;
  height: 9px;
  position: absolute;
  top: -8px;
  left: 15px;
  padding: 0;
  margin: 0;
  border: 0;
  z-index: 10000000;
}
.errorbox.upward .errbox_arrow {
  background-position: 0 -9px;
  top: 54px;
}
.errorReserveUrl .errbox_arrow {
  display: none;
}
.errorbox .close {
  width: 9px;
  height: 10px;
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/hp_errorbox_close.png") no-repeat top left;
  position: absolute;
  top: 5px;
  left: -5px;
  z-index: 999999;
}
.errorbox .close:hover {
  background-position: 0 -10px;
}
.errorReserveUrl .close {
  display: none;
}
.frame {
  border-bottom: 1px solid #dedede;
}
.frame:last-child {
  border-bottom: 0;
}
.frame > .title {
  box-sizing: border-box;
  height: 25px;
  padding: 4px 3px;
  border-bottom: 1px solid #dedede;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: top;
  cursor: default;
  position: relative;
  z-index: 100;
  border-top: 1px solid transparent;
  box-shadow: 0px 1px 0px transparent;
  font-size: 12px;
  color: #333333;
  background-color: #f1f1f1;
  background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0, #f1f1f1), color-stop(1, #f1f1f1));
  background-image: -moz-linear-gradient(90deg, #f1f1f1 0%, #f1f1f1 100%);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.frame > .title:hover {
  background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0, #f1f1f1), color-stop(1, #f1f1f1));
  background-image: -moz-linear-gradient(90deg, #f1f1f1 0%, #f1f1f1 100%);
}
.frame > .title:active {
  background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0, #f1f1f1), color-stop(1, #f1f1f1));
  background-image: -moz-linear-gradient(90deg, #f1f1f1 0%, #f1f1f1 100%);
}
.frame .title span {
  vertical-align: top;
}
.frame.focus .title span {
  border-bottom: 1px dotted gray;
}
.frame .buttons {
  display: inline-block;
}
.frame .buttons div.min {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/images/tree_close_arrow_small_dark_flat_light.png);
  background-repeat: no-repeat;
  background-position: -10px -1px;
  width: 10px;
  height: 10px;
  margin: 3px 4px 0 2px;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .frame .buttons div.min {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/images/tree_close_arrow_small_dark_flat_light@2x.png);
    background-size: 20px 10px;
  }
}
.frameMin .buttons div.min {
  background-position: 0 0;
  margin: 2px 4px 0 2px;
}
.frame .buttons div.close {
  width: 14px;
  height: 14px;
  display: block;
  position: absolute;
  right: 5px;
  top: 4px;
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/close_tab_btn_flat_light.png") no-repeat 0 -14px;
  cursor: pointer;
  z-index: 10;
}
.frame .buttons div.close:hover {
  background-position: -14px -14px;
}
.frame .buttons div.close:active {
  background-position: -28px -14px;
}
.frame > .body {
  position: relative;
}
.frame.absframe > .body {
  position: absolute;
  top: 25px;
  left: 0;
  right: 0;
  bottom: 0;
}
.frameMin > .body {
  display: none;
}
.frameMin {
  min-height: 21px !important;
}
.grouped_checkbox_holder {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+dHJhbnNwYXJlbnQgMCV0cmFuc3BhcmVudCAxMDAlPC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2dyYWQtdWNnZy1nZW5lcmF0ZWQpIiAvPjwvc3ZnPg==);
  background-image: -moz-linear-gradient(top, transparent 0%, transparent 100%);
  background-image: -webkit-linear-gradient(top, transparent 0%, transparent 100%);
  background-image: -o-linear-gradient(top, transparent 0%, transparent 100%);
  background-image: linear-gradient(top, transparent 0%, transparent 100%);
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  border: 1px solid transparent;
  border-radius: 0;
  height: 27px;
  padding: 0;
}
.grouped_checkbox_holder .cbcontainer {
  cursor: default;
  display: inline-block;
  height: 25px !important;
  padding: 0;
  border-radius: 3px;
}
.grouped_checkbox_holder .cbcontainerOver:not(.cbcontainerChecked),
.grouped_checkbox_holder .cbcontainerFocus:not(.cbcontainerChecked) {
  box-shadow: 0px 1px #DEDEDE inset, 1px 0px #DEDEDE inset, -1px 0px #DEDEDE inset, 0px -1px #DEDEDE inset, 0 0 0 1000px #ffffff inset !important;
}
.grouped_checkbox_holder .cbcontainer:before {
  content: " ";
  border-left: 1px solid transparent;
  height: 21px;
  float: right;
  margin: 2px 0 0px 0;
  box-shadow: none;
}
.grouped_checkbox_holder .cbcontainer:last-child:before,
.grouped_checkbox_holder .cbcontainer.single:before {
  display: none;
}
.grouped_checkbox_holder .cbcontainerDown,
.grouped_checkbox_holder .cbcontainerChecked {
  background: none;
  box-shadow: -1px 0 0 0 transparent, -1px 0 0 0 transparent inset, none;
}
.grouped_checkbox_holder .cbcontainerDown:first-child,
.grouped_checkbox_holder .cbcontainerChecked:first-child {
  box-shadow: none;
}
.grouped_checkbox_holder .cbcontainerDown:last-child,
.grouped_checkbox_holder .cbcontainerChecked:last-child {
  box-shadow: -1px 0 0 0 transparent, none;
}
.grouped_checkbox_holder .cbcontainer .checkbox {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/c9-repeat-x_flat_light.png);
  background-repeat: no-repeat;
  background-position: 50% 0;
  border: 0;
  height: 25px;
  left: 0;
  top: 0;
  width: 100%;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .grouped_checkbox_holder .cbcontainer .checkbox {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/c9-repeat-x_flat_light@2x.png);
    background-size: 32px 1500px;
  }
}
.grouped_checkbox_holder.with_caption .cbcontainer .checkbox {
  background: transparent;
  width: auto;
  position: relative;
}
.grouped_checkbox_holder .chkRegEx .checkbox {
  background-position: 50% -540px;
}
.grouped_checkbox_holder .chkRegEx.cbcontainerChecked .checkbox {
  background-position: 50% -565px;
}
.grouped_checkbox_holder .chkMatchCase .checkbox {
  background-position: 50% -590px;
}
.grouped_checkbox_holder .chkMatchCase.cbcontainerChecked .checkbox {
  background-position: 50% -615px;
}
.grouped_checkbox_holder .chkWholeWords .checkbox {
  background-position: 50% -640px;
}
.grouped_checkbox_holder .chkWholeWords.cbcontainerChecked .checkbox {
  background-position: 50% -665px;
}
.grouped_checkbox_holder .chkPreserveCase .checkbox {
  background-position: 50% -690px;
}
.grouped_checkbox_holder .chkPreserveCase.cbcontainerChecked .checkbox {
  background-position: 50% -715px;
}
.grouped_checkbox_holder .chkSearchBackwards .checkbox {
  background-position: 50% -790px;
}
.grouped_checkbox_holder .chkSearchBackwards.cbcontainerChecked .checkbox {
  background-position: 50% -815px;
}
.grouped_checkbox_holder .chkWrapAround .checkbox {
  background-position: 50% -890px;
}
.grouped_checkbox_holder .chkWrapAround.cbcontainerChecked .checkbox {
  background-position: 50% -915px;
}
.grouped_checkbox_holder .chkSearchSelection .checkbox {
  background-position: 50% -840px;
}
.grouped_checkbox_holder .chkSearchSelection.cbcontainerChecked .checkbox {
  background-position: 50% -865px;
}
.grouped_checkbox_holder .chkHighlightMatches .checkbox {
  background-position: 50% -740px;
}
.grouped_checkbox_holder .chkHighlightMatches.cbcontainerChecked .checkbox {
  background-position: 50% -765px;
}
.grouped_checkbox_holder .chkConsole .checkbox {
  background-position: 50% -1235px;
}
.grouped_checkbox_holder .chkConsole.cbcontainerChecked .checkbox {
  background-position: 50% -1268px;
}
.grouped_checkbox_holder .cbcontainerDisabled .checkbox {
  opacity: 0.5;
}
.grouped_checkbox_holder .cbcontainer span {
  display: none;
}
.grouped_checkbox_holder.with_caption .cbcontainer span {
  display: block;
  padding: 7px;
  color: #f1f1f1;
  margin-top: -25px;
}
.header-btn {
  height: 16px !important;
  width: 23px;
  overflow: hidden;
  cursor: pointer;
  position: absolute;
  cursor: default;
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/c9-no-repeat_flat_light.png);
  background-repeat: no-repeat;
  top: 5px;
  z-index: 1000;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .header-btn {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/c9-no-repeat_flat_light@2x.png);
    background-size: 480px 580px;
  }
}
.panel-settings {
  background-position: -6px -276px;
  right: 14px;
  top: 14px;
}
.panel-settings:hover,
.panel-settings.header-btnDown {
  background-position: -36px -276px;
}
.c9-header-plus {
  background-position: 0px -294px;
  right: 31px;
}
.deploy.c9-header-plus {
  right: 1px;
}
.c9-header-plus.header-btnOver {
  background-position: -30px -294px;
}
.c9-header-plus.header-btnDisabled {
  background-position: -60px -294px;
}
.c9-header-minus {
  background-position: 0px -320px;
  right: 1px;
  top: 0;
}
.deploy.c9-header-minus {
  right: -30px;
}
.c9-header-minus.header-btnOver {
  background-position: -30px -320px;
}
.c9-header-minus.header-btnDisabled {
  background-position: -60px -320px;
}
.c9-header-divider:before {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/c9-no-repeat_flat_light.png") no-repeat -100px -293px;
  content: "";
  display: block;
  height: 26px;
  left: 0;
  position: absolute;
  top: 0;
  width: 2px;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.img {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  width: 100%;
  height: 100%;
  padding: 3px 0 0 0;
  text-align: center;
  white-space: nowrap;
  overflow: auto;
}
.img:after {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.img IMG {
  display: inline-block;
  vertical-align: middle;
}
.label {
  font-size: 13px;
  font-family: Helvetica, Arial, sans-serif;
  overflow: hidden;
  cursor: default;
  color: #333333;
  padding: 2px;
  white-space: nowrap;
}
.labelDisabled {
  color: #999;
}
.has_apf .list_dark {
  display: block;
}
.list_dark .menu_item:hover,
.list_dark .tree-row:hover,
.list_dark .tree-row.hover {
  background-color: #63acff;
  color: #ffffff;
}
.list_dark .tree-row .caption {
  display: inline-block;
  padding: 5px 0 5px 7px;
}
.list {
  overflow: auto;
  position: relative;
  border: 1px solid #c3c3c3;
  background-color: #fafbfc;
  cursor: default;
}
.noscrollbar {
  overflow: hidden;
}
.white {
  background: white;
}
.list,
.draglist {
  font-family: Tahoma, Arial;
  font-size: 8pt;
}
.list > DIV,
.draglist {
  padding: 0;
  height: 18px;
}
.list > DIV > SPAN,
.draglist SPAN {
  padding: 0 0 0 20px;
  background: no-repeat 1px center;
  height: 16px;
  float: left;
}
.list > DIV > SPAN > U,
.draglist U {
  color: black;
  cursor: default;
  display: block;
  padding: 2px 4px 2px 2px;
  text-decoration: none;
  white-space: nowrap;
}
.listFocus > .indicate > SPAN > U {
  border: 1px dotted #BBB;
  /*#25a8e7;*/
  color: black;
  padding: 1px 3px 1px 1px;
}
.list > .selected > SPAN > U {
  background-color: #f0f0f0;
  color: black;
}
.listFocus > .selected > SPAN > U,
.draglist U {
  color: white;
  background-color: #25a8e7;
}
.list #txt_rename {
  border: 1px solid #bbb;
  padding: 1px 15px 1px 1px;
  font-family: Tahoma, Arial;
  font-size: 8pt;
  color: black;
  word-break: keep-all;
  overflow: visible;
  margin-top: 0px;
  cursor: text;
  height: 13px;
  display: block;
  outline: none;
}
.list .empty,
.list .offline,
.list .loading {
  text-align: center;
  padding: 8px 0 0 5px;
  color: #AAA;
  font-weight: normal;
}
.list.emptyLeft .empty {
  text-align: left;
}
.shortlist {
  border: 0;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 90px;
  width: auto;
}
.c9menu {
  margin: -1px 0 0 0;
  padding: 7px 0 7px 0;
  z-index: 10000;
  position: absolute;
  overflow: visible;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: 14px;
  color: #333333;
  cursor: default;
  display: none;
  border: 1px solid #dfdfdf;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.09);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.09);
  background-color: #ffffff;
  text-shadow: none;
  border-radius: 0 4px 4px 4px;
}
.c9menu > div.menu_item {
  padding: 4px 22px 4px 26px;
  white-space: nowrap;
  cursor: default;
  z-index: 1100000;
  height: 13px;
}
.c9menu > div.menu_item.update {
  background-color: #63acff;
  font-weight: bold;
  color: #ffffff;
  text-shadow: none;
}
.c9menu > div.menu_item.hover {
  background-color: #63acff;
  color: #ffffff;
}
.c9menu > div.menu_divider {
  overflow: visible;
  padding: 0;
  font-size: 1px;
  margin: 6px 9px;
  border-top: 1px solid #f1f1f1;
  border-bottom: 1px solid transparent;
  height: 0;
}
.c9menu > div.menu_item > span {
  right: 15px;
  margin-top: 0px;
  z-index: 10;
  text-align: right;
  padding-left: 15px;
  float: right;
}
.c9menu > div.submenu > span {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/submenu_arrow.gif") no-repeat right 0;
  width: 4px;
  height: 7px;
  display: block;
  position: absolute;
  right: 11px;
  margin: 4px 0 0 0;
  z-index: 10;
}
.c9menu > div.submenu.hover > span {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/submenu_arrow.gif") no-repeat right -15px;
}
.c9menu > div.menu_item.disabled {
  color: #9c9c9c;
  text-shadow: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.c9menu > div.menu_item > u {
  width: 16px;
  height: 16px;
  position: absolute;
  left: 6px;
  margin-top: -1px;
}
.c9menu > div.menu_item.selected > u {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/radio.gif") no-repeat 0 0;
}
.c9menu > div.menu_item.selected:hover > u {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/radio.gif") no-repeat 0 -16px;
}
.c9menu > div.menu_item.checked > u {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/check.gif") no-repeat 0 0;
}
.c9menu > div.menu_item.checked:hover > u {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/check.gif") no-repeat 0 -16px;
}
.c9menu > div.menu_item.disabled > u {
  opacity: 0.2;
}
.c9menu > div.menu_item.checked.disabled > u {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/check.gif") no-repeat 0 0;
}
.c9menu > div.menu_item.selected.disabled > u {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/radio.gif") no-repeat 0 0;
}
.panel-bar {
  background: #fbfbfb;
  border-right: 1px solid #dedede;
  box-shadow: 0 1px 0 transparent inset;
}
.right .panel-bar {
  border-right: 0;
  border-left: 1px solid #dedede;
  box-shadow: 0 1px 0 transparent inset;
}
.right .panel-bar:after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  width: 1px;
  bottom: 0;
  top: 0;
  background: transparent;
  z-index: 1000;
}
.password input {
  padding: 5px 0 1px 0 !important;
  height: 1px !important;
}
.password .sbtb_middle {
  padding: 0px 7px 1px 7px !important;
  height: 24px !important;
}
.rbcontainer.themepicker {
  display: inline-block;
  margin: -3px 15px 0 0;
}
.rbcontainer.themepicker div {
  padding: 0;
  width: 30px;
  height: 30px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 0 1px #131313;
  cursor: pointer;
}
.rbcontainer.themepicker.rbcontainerSelected div:after {
  content: "";
  position: absolute;
  border: 3px solid #afafaf;
  margin: -6px;
  width: 36px;
  height: 36px;
  border-radius: 3px;
}
.sbios {
  position: relative;
  width: 6px;
  overflow: hidden;
  padding: 6px 3px 3px 0;
}
.sbios SPAN {
  width: 6px;
  bottom: 0;
  height: 3px;
  position: absolute;
}
.sbios .filler {
  height: 100%;
  width: 6px;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
}
.deploy-sb.sbios .filler {
  left: 2px;
}
.sbios .mainrail {
  height: 100%;
  width: 6px;
  position: relative;
}
.sbios .indicator {
  height: 6px;
  display: none;
  position: absolute;
  overflow: hidden;
  width: 7px;
  margin: 0 0 0 0;
  min-height: 20px;
  background: #616161;
  opacity: 0.8;
  border-radius: 3px;
}
.sbios .indicator .indi_left {
  height: 3px;
  width: 7px;
  position: absolute;
  top: 0;
  left: 0;
}
.sbios .indicator .indi_middle {
  position: absolute;
  top: 3px;
  bottom: 3px;
  left: 0;
  width: 7px;
}
.sbios .indicator .indi_right {
  height: 3px;
  width: 7px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.sbios {
  display: -webkit-box;
}
.sbios span {
  left: 0;
}
.sbios .mainrail {
  height: auto;
}
.sbios .filler {
  left: 0;
  height: auto;
  top: 0;
  bottom: 0;
}
.scrollbar {
  height: 200px;
  position: absolute;
  background: #D4D0C8 url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/raster.gif");
  width: 16px;
  overflow: hidden;
}
.scrollbar .btnup,
.scrollbar .btndown,
.scrollbar .indicator {
  font-family: MS Sans Serif;
  font-size: 8pt;
  width: 100%;
  overflow: hidden;
  text-align: center;
  font-weight: bold;
  cursor: default;
  position: relative;
  background-color: #D4D0C8;
  -moz-border-top-colors: #D4D0C8 #FFFFFF;
  -moz-border-left-colors: #D4D0C8 #FFFFFF;
  -moz-border-bottom-colors: black gray;
  -moz-border-right-colors: black gray;
}
.scrollbar img {
  visibility: hidden;
}
.scrollbar .btnup div,
.scrollbar .btndown div {
  border: 2px outset;
}
body .scrollbar .btnupdown div,
body .scrollbar .btndowndown div {
  border: 1px solid gray;
  padding: 1px 1px 1px 1px;
}
body .scrollbar .btnupdown span,
body .scrollbar .btndowndown span {
  margin: -1px 0 0 -3px;
}
.scrollbar .btndown span,
.scrollbar .btnup span {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 7px;
  height: 4px;
  margin: -2px 0 0 -4px;
}
.scrollbar .btnup span {
  background: #D4D0C8 url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/scrollup.gif") no-repeat;
}
.scrollbar .btndown {
  position: absolute;
  bottom: 0px;
}
.scrollbar .btndown span {
  background: #D4D0C8 url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/scrolldown.gif") no-repeat;
}
.scrollbar .indicator {
  height: 6px;
  display: none;
  position: absolute;
  overflow: hidden;
  background-color: #D4D0C8;
  width: 100%;
  padding-bottom: 4px;
}
.scrollbar .indicator div {
  border: 2px outset;
  height: 100%;
}
.scrollbar .slidefast {
  position: absolute;
  background-color: #353535;
  height: 10px;
  width: 100%;
  display: none;
  overflow: hidden;
}
.scrollbarDisabled .btnup span {
  background: #D4D0C8 url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/scrollupdisabled.gif") no-repeat;
  width: 8px;
  height: 5px;
  margin: -3px 0 0 -4px;
}
.scrollbarDisabled .btndown span {
  background: #D4D0C8 url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/scrolldowndisabled.gif") no-repeat;
  width: 8px;
  height: 5px;
  margin: -3px 0 0 -4px;
}
.scrollbar .btnup div,
.scrollbar .btndown div,
.scrollbar .indicator div {
  border: 2px outset white;
}
.simplebox {
  white-space: nowrap !important;
  background-color: transparent !important;
}
.simplebox.dark .ace_cursor {
  /*border-color : white;*/
  height: 20px;
}
.simplebox.dark .ace_selection {
  background: #c5d38d !important;
}
.simplebox.dark.tb_textboxInitial .ace_scroller {
  color: #cacaca !important;
}
.simplebox.dark.tb_textboxInitial .ace_cursor {
  display: none;
}
.spinner {
  position: relative;
  height: 19px;
  margin: 0;
  padding: 0;
  border: 1px solid #dedede;
  background: #ffffff;
  min-height: 18px;
  max-height: 18px;
}
.spinnerFocus {
  border: 1px solid #dedede;
  box-shadow: none;
}
.spinner .divfix {
  display: block;
  position: absolute;
  text-align: right;
  height: 19px;
  left: 0;
  right: 20px;
  margin: 0;
  z-index: 9000;
  padding: 0;
  border: 0;
}
.fixMargin2 {
  margin-bottom: 2px !important;
}
.fixMargin5 {
  margin-bottom: 5px !important;
}
.spinner .divfix input {
  outline: none;
  display: block;
  border-right: 0;
  padding: 1px 1px 2px 0;
  position: absolute;
  text-align: right;
  left: 0;
  height: 14px;
  color: #333333;
  font-family: Tahoma, Arial;
  font-size: 11px;
  width: 100%;
  margin: 0;
  z-index: 10000;
  border: 0;
  background: transparent;
}
.spinner .buttons {
  display: block;
  width: 18px;
  height: 19px;
  position: absolute;
  right: 0;
  z-index: 11000;
}
.spinner .buttons .plus {
  height: 8px;
  width: 18px;
  cursor: default;
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/spinner_plus_dark.png");
  background-position: 0 0;
  margin: 0;
  border-top: 1px solid transparent;
  background-repeat: no-repeat;
  text-indent: -2000px;
}
.spinner .buttons .minus {
  height: 8px;
  width: 18px;
  cursor: default;
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/spinner_min_dark.png");
  background-position: 0 0;
  border-bottom: 1px solid transparent;
  background-repeat: no-repeat;
  text-indent: -2000px;
}
.spinner .buttons .plusHover {
  background-color: rgba(0, 0, 0, 0.1);
}
.spinner .buttons .minusHover {
  background-color: rgba(0, 0, 0, 0.1);
}
.spinner {
  width: 120px !important;
  height: 30px !important;
  min-height: 30px !important;
  max-height: 30px !important;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #DEDEDE;
  background: #FFF;
}
.spinner .buttons {
  width: auto;
  height: auto;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
}
.spinner .buttons .minus {
  height: 28px;
  width: 24px;
  border: 0;
  background: transparent;
  text-indent: 0;
  box-sizing: border-box;
}
.spinner .buttons .plus {
  height: 28px;
  width: 24px;
  border: 0;
  background: transparent;
  text-indent: 0;
  box-sizing: border-box;
}
.spinner .buttons .minus:hover {
  background: #F6F6F6;
}
.spinner .buttons .plus:hover {
  background: #F6F6F6;
}
.spinner .buttons .minus {
  border-right: 1px solid #DEDEDE;
  color: #f07272;
  border-radius: 4px 0 0 4px;
  padding: 7px 9px;
}
.spinner .buttons .plus {
  float: right;
  border-left: 1px solid #DEDEDE;
  color: #98c878;
  border-radius: 0 4px 4px 0;
  padding: 6px 7px;
}
.spinnerFocus {
  box-shadow: none;
}
.spinner .divfix {
  height: auto;
  bottom: 0;
  top: 0;
  left: 24px;
  right: 24px;
  z-index: 10;
}
.spinner .divfix input {
  height: 27px;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 13px;
  text-align: center;
}
body .splitbutton .arrow {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/arrow_down_grey.png);
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 18px;
  min-width: 10px !important;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  body .splitbutton .arrow {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/arrow_down_grey@2x.png);
    background-size: 8px 5px;
  }
}
.splitbutton > div:first-child:after {
  content: "";
  display: block;
  border-left: 1px solid #dedede;
  position: absolute;
  right: 0;
  top: 4px;
  bottom: 4px;
}
.splitter {
  position: relative;
  z-index: 100000;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.topsplitter .splitter {
  z-index: 100000;
}
.w-resize {
  cursor: ew-resize;
}
.n-resize {
  cursor: ns-resize;
}
.splitterMoving {
  background-color: gray;
}
.splitterRealtime {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/spacer.gif");
}
.splitter.vertical {
  width: 0;
}
.colMain .splitter.vertical {
  background: #dedede;
  border-top: 27px solid #dedede;
  box-shadow: 1px 1px 0px transparent;
}
.dark.colMain .splitter.vertical {
  background: #dedede;
  border: 1px solid #dedede;
  border-width: 0 0 0 1px;
  box-shadow: 1px 1px 0px transparent;
}
.colMain > .vsplitbox,
.colMain > .hsplitbox {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.splitter.vertical div {
  width: 5px;
  margin-left: -3px;
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/spacer.gif");
  height: 100%;
}
.splitter.vertical.panelsplitter div {
  width: 3px;
}
.splitter.horizontal {
  background: #dedede;
}
.splitter.horizontal div {
  height: 5px;
  margin-top: -2px;
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/spacer.gif");
  position: absolute;
  width: 100%;
}
.tbsimple {
  border: 0;
  padding: 1px 1px 2px 1px;
  margin: 1px 0 0 2px;
  font-family: Tahoma, Arial;
  outline: none;
}
.tbsimple.tbtree {
  margin: -1px 0 0 -2px;
}
.ta {
  overflow: auto;
  resize: none;
  padding: 10px;
  border: 1px solid #DEDEDE;
  border-radius: 4px;
  background-image: -moz-linear-gradient(center, white 50%, white 100%);
  background-image: -webkit-linear-gradient(center, white 50%, white 100%);
  background-image: -o-linear-gradient(center, white 50%, white 100%);
  background-image: linear-gradient(center, white 50%, white 100%);
  margin: 0;
  text-overflow: ellipsis;
  box-shadow: none;
  font-size: 12px;
  color: #333;
  font-family: Helvetica, Arial, sans-serif;
  outline: none;
  background-color: transparent;
}
.taDisabled {
  border: 1px solid #DEDEDE;
  color: #CCC;
}
.taInitial {
  color: gray;
}
.taError {
  border: 2px solid #ffb500;
  padding: 5px;
}
.tooltipLabel {
  background-color: #f1f1f1;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2YxZjFmMSIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjFmMWYxIiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(bottom, #f1f1f1 0%, #f1f1f1 100%);
  background-image: -webkit-linear-gradient(bottom, #f1f1f1 0%, #f1f1f1 100%);
  background-image: -o-linear-gradient(bottom, #f1f1f1 0%, #f1f1f1 100%);
  background-image: linear-gradient(bottom, #f1f1f1 0%, #f1f1f1 100%);
  border: 1px solid #dedede;
  border-bottom-width: 0;
  border-radius: 3px 3px 0 0;
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.2) inset;
  color: #333333;
  font-size: 11px;
  font-family: Helvetica, Arial, sans-serif;
  height: 14px;
  line-height: 14px;
  padding: 2px 7px 0 7px;
  position: absolute;
  text-shadow: none;
  z-index: 100000;
  overflow: hidden;
}
.docktab .toolbar {
  border-bottom: 1px solid #e1e5ea;
}
.toolbar .menubar {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/menubar_row.png") repeat-x top left;
  height: 22px;
  z-index: 1;
  font-family: Tahoma, Arial;
  font-size: 12px;
  position: relative;
}
.toolbar .subbar {
  background-image: linear-gradient(bottom, #eceff2 0%, #edf0f3 50%, #f3f6f8 51%, #f9fbfe 100%);
  font-family: Arial;
  font-size: 12px;
  border-bottom: 1px solid #E1E5EA;
  position: relative;
  padding: 0;
  width: 100%;
  overflow: hidden;
  height: 27px;
}
.docktab .toolbar .subbar {
  border-bottom: 1px solid #e8ecef;
}
.toolbar.modal-toolbar .subbar {
  background-image: linear-gradient(bottom, #d9d9d9 0%, #ededed 100%);
  border-top: 1px solid #f6f6f6;
  border-bottom: 1px solid #bfbfbf;
}
.toolbar .subbar.no_border {
  border-bottom: none;
  padding-top: 1px;
}
.toolbar > .subbar > * {
  display: inline-block;
  float: left;
  margin: 2px;
}
.toolbar > .subbar > .hbox,
.toolbar > .subbar > .vbox,
.toolbar > .subbar > .table {
  display: block;
  float: none;
  margin: 0;
}
.toolbar > .subbar > .divider {
  border-left: 1px solid #c4c4c4;
  border-right: 1px solid #fafafa;
  border-bottom: none;
  border-top: none;
  height: 17px;
  float: left;
  margin: 4px 0 0 0;
}
.toolbar-top {
  border-top: 1px solid transparent;
  padding: 0;
  white-space: normal !important;
  border-bottom: 1px solid #dedede;
  background-color: #f1f1f1;
}
.toolbar-top .c9-menu-btn {
  vertical-align: top;
  height: 31px;
  padding-top: 9px;
  margin-top: -1px;
  min-width: 31px !important;
}
.toolbar-top.basic .c9-menu-btnIcon .icon {
  width: 18px;
  height: 18px;
  display: block;
  left: 5px;
  top: 6px;
}
.toolbar-top.basic .c9-menu-btnOver .icon {
  background-position: 0 -19px;
}
.toolbar-top.basic .c9-menu-btnDown {
  box-shadow: none;
}
.toolbar-top.basic .c9-menu-btnDisabled .icon {
  background-position: 0 -38px;
}
.has_apf .toolbar-top .sbtb_middle {
  height: 18px;
  padding: 1px 2px;
}
.toolbar-top.bottom {
  padding: 0;
  height: 32px;
  box-shadow: 0 1px 0 0 transparent inset;
  border-bottom: 0;
  border-top: 1px solid #dedede;
  z-index: 10;
  box-sizing: border-box;
}
.toolbar-top.bottom .c9-menu-btn {
  border-bottom: 1px solid #dedede;
  height: 30px;
  margin-top: 0px;
}
.toolbar-top.bottom .c9-divider {
  height: 30px;
  vertical-align: top;
  margin: 3px;
}

.has_apf .console .btnsesssioncontainer .inside {
  padding-right: 64px;
  padding-left: 2px;
}
.console .btnsesssioncontainer .tabmenubtn {
  display: none;
}
.console .console_close_btn {
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/console_close_btn.png");
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .console .console_close_btn {
    background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/console_close_btn@2x.png");
    background-size: 22px 66px;
  }
}

.terminal_monitor_messageContainer {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 30;
  overflow: auto;
  max-height: 100%;
}
.terminal_monitor_message {
  border-radius: 3px;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0ZGRiIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZGIiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(top, #FFF 0%, #FFF 100%);
  background-image: -webkit-linear-gradient(top, #FFF 0%, #FFF 100%);
  background-image: -o-linear-gradient(top, #FFF 0%, #FFF 100%);
  background-image: linear-gradient(to bottom, #FFF 0%, #FFF 100%);
  max-width: 350px;
  padding: 10px;
  margin: 4px;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
  display: none;
  opacity: 0;
  transition: opacity .2s;
  box-sizing: border-box;
  border: 1px solid #DEDEDE;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.09);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 15px;
}
.terminal_monitor_message:focus {
  outline: none;
}
.terminal_monitor_message > .message {
  color: #333;
  margin: 0 0 0 1px;
}
.terminal_monitor_message > .message strong {
  display: block;
  margin-bottom: 3px;
}
.terminal_monitor_message > .message a {
  color: #568C11;
  text-decoration: none;
}
.terminal_monitor_message > .message a:hover {
  text-decoration: underline;
}
.terminal_monitor_message .cmd {
  display: none;
  margin: 5px 0 0 5px;
  float: right;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzc2NzY3NiIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNzY3Njc2IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(top, #767676 0%, #767676 100%);
  background-image: -webkit-linear-gradient(top, #767676 0%, #767676 100%);
  background-image: -o-linear-gradient(top, #767676 0%, #767676 100%);
  background-image: linear-gradient(to bottom, #767676 0%, #767676 100%);
  text-shadow: none;
}
.terminal_monitor_message .cmd:hover {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzhCOEI4QiIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOEI4QjhCIiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(bottom, #8B8B8B 0%, #8B8B8B 100%);
  background-image: -webkit-linear-gradient(bottom, #8B8B8B 0%, #8B8B8B 100%);
  background-image: -o-linear-gradient(bottom, #8B8B8B 0%, #8B8B8B 100%);
  background-image: linear-gradient(bottom, #8B8B8B 0%, #8B8B8B 100%);
}
.terminal_monitor_message .cmd:active {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzc2NzY3NiIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNzY3Njc2IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(bottom, #767676 0%, #767676 100%);
  background-image: -webkit-linear-gradient(bottom, #767676 0%, #767676 100%);
  background-image: -o-linear-gradient(bottom, #767676 0%, #767676 100%);
  background-image: linear-gradient(bottom, #767676 0%, #767676 100%);
}
.terminal_monitor_message .caption {
  border-top: 0;
  cursor: pointer;
}
.terminal_monitor_message .close {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 14px;
  height: 14px;
  display: block;
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/close_tab_btn_flat_light.png);
  background-repeat: no-repeat;
  background-position: 0 0;
  cursor: pointer;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .terminal_monitor_message .close {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/close_tab_btn_flat_light@2x.png);
    background-size: 42px 28px;
  }
}
.terminal_monitor_message .close:hover {
  background-position: -14px 0;
}
.terminal_monitor_message .close:active {
  background-position: -28px 0;
}

.ace_repl_button {
  border: 1px solid lightgray;
  color: lightcoral;
  display: inline-block;
  margin: -1px 8px;
  padding: 0 5px;
  pointer-events: auto;
  cursor: pointer;
}
.ace_repl_button:hover {
  border: 1px solid gray;
  background: rgba(200, 200, 200, 0.2);
  display: inline-block;
  pointer-events: auto;
}
.ace_prompt {
  background: rgba(120, 50, 100, 0.1);
  color: darkred;
  margin: 0 0 0 -4px;
  padding: 0 0 0 4px;
}
.ace_repl-output {
  color: #2b20b3;
}
.ace_gutter-cell.repl_prompt:after {
  color: #d7871f;
  content: "/>";
  display: inline-block;
  font-weight: bold;
  font-size: 1.1em;
  padding-right: 6px;
  position: absolute;
  right: 6px;
  margin-top: -2px;
}
.ace_gutter-cell.repl_prompt {
  padding-left: 1px;
}
.ace_gutter-cell.repl_output:after {
  color: #42b108;
  content: "=>";
  display: inline-block;
  font-weight: bold;
  font-size: 1.1em;
  padding-right: 6px;
  position: absolute;
  right: 6px;
  margin-top: -2px;
}
.ace_gutter-cell.repl_output {
  color: transparent;
}
.ace_gutter-cell.repl_output.waiting:after {
  background: url("data:image/gif;base64,R0lGODlhEAARAOZjAMfHx6mpqdLS0pKSkqCgoOPj4+rq6rq6uuTk5PLy8tfX1+np6fz8/Ozs7NjY2OXl5bW1teHh4fX19ebm5sHBwaOjo76+vv39/bGxsa2trefn5+7u7vv7+8LCwu/v79TU1Kqqqri4uNra2tbW1tnZ2cnJyczMzNvb283NzcDAwPHx8ba2tru7u6enp/n5+bm5ucXFxbS0tL+/v/b29ry8vPj4+Pr6+pubm93d3evr69XV1dzc3MPDw7Ozs/Pz897e3pycnK+vr8rKyu3t7fT09KysrLKyssTExPf399/f37CwsKurq8jIyM/Pz66urr29vfDw8JeXl6amppWVlbe3t87Ozp6env7+/qWlpdHR0ZqampaWlqSkpJiYmJ2dneDg4Ojo6OLi4v///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpGODdGMTE3NDA3MjA2ODExODA4M0M0OURBQTc0OTQ0NCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCNzhDQ0E0QkFCMEQxMUUwOEIxRUE2MEJFOEY1OTYwOSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCNzhDQ0E0QUFCMEQxMUUwOEIxRUE2MEJFOEY1OTYwOSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZBN0YxMTc0MDcyMDY4MTE4MDgzQzQ5REFBNzQ5NDQ0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY4N0YxMTc0MDcyMDY4MTE4MDgzQzQ5REFBNzQ5NDQ0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEBQAAYwAsAAAAABAAEQAAB/+AY4JhJCEtQDctIR9ggo5gFBVOJTs4QhgVHY2DQSAjDGIMoBciSxkTY2AsSg1iHgY+RAZDFxsYK2EnRREMEzYcGw02NhMMDxkfNDIXYC4ePCkpPDkuYBcUBxAKFxo2FC/gLxQ1C2IOMRBhPhsaIVQrK1QhDwkzCD0rXz4NExAx/+hwHAHwBcITBUhOuAjRw4iRHiEisGji4ACTDgxI8IuBAUOPCFVYhDkCo8CBL0MELEBSIMwQHTSahHnxZYEJCws2OGiiQAcAADomyChhIEwDGBZ0cBgSAUeBIQ4s8GgQYYwGFQpopDBBQgSKFCxGJCjwaIOBJh0OHKCAYoGBTY4OvmjwkECChAQeCjxwFAgAIfkEBQAAYwAsAgADAA0ACwAAB3KAY2MXG4KGh2M1CC42OQYuiGMIEkMWLy8WC4dIEWMsRqBGLEiGDRMPGEpBQUoYYYY5CAVOGbUZThEJM2EbHzUYRUtLRRgSD2KCWQUIGSAgRSQlBVeCCCZfKl9JCFUrQocPTUxNJjIpVV+ICQgOOicIh4EAIfkEBQAAYwAsAgACAAsADAAAB22AY4KCNoOGNjlgCYaCPl8SLmBgjF8qBlRGRlQaggk7LhAgoiAQM2MaEWEgAawBIEljCD8RLVK2Ui0/Y2BVSCBYXFxYIERjSCazUhUVWDg1gkkwJAY7JElCXxyCP0I8JUwsTxc5gw0/Ak0jsGOBACH5BAUAAGMALAIAAgAKAAwAAAdsgGOCYwwzSIOCPg8RDVBgDYJDIh5jGhNjLoQkOWBBICBBD2MGOjUZFagVGWM/DkkVBLEEFTs7Oj8EVrpWBCdJAEMVXkBAXhU+G0c6OFY3N14igiNPWWEfAhIcghojHU9HPAhgiAgKJkJiDGOBACH5BAUAAGMALAIAAgAMAAwAAAdvgGOCY0QbUC6Dgzk/Jw9gERNIgwgCE2MIBTVEYTVjCQKQAVwVAQUzlmEoUC03rTdSEmBXH1U4Wre4IoICJiddUcBRXQ6COhYFQFtTU1tAgwU0Jh9Ry1sKiShUJkQOCkSJYxFNBghQKuCDHGIcHOCBACH5BAUAAGMALAIAAgAMAAsAAAdqgGOCSFAGOUSCiWMTIgoRDz9hPolfVWESBWFjUD8SY0NVOA9YBARYEQmaOCUGXF2vXVxEDxxZJSRRW1NTW1EOHhIoACO7xVMKKhJZB0laA88DWgmCXy8lJ1PQI4k/HF8uPgojk4oLYorogQAh+QQFAABjACwBAAIADQAKAAAHb4BjgmMqBggPGy6DggZfH1knPw47DYsiQicbCAUSCyQbggslCgUBXBUBBQ0/gg4wDy03sjdSEl8zXyZHClq9viILGz8lPB9dUchRXQ5DKmNiCDNAW1NTW0A+YQxjDAg1O1HVWwpjYYJfg0QOCkSLgQAh+QQFAABjACwBAAIADQALAAAHdIBjgmMGBThJGgmDghMnVSY6ClkjD4s6MCNgYxMeYQITghcLAl9BICBBDwg6DGNiYDUZFbMVGTMOG2EzKkkVBL8EFTsRGl81Kj8EVstWBCcImoJIFV5AQF4VYydEi0lWNzdeIgk7i4ISJyQSNTsS5uYaNoKBACH5BAUAAGMALAMAAgALAAsAAAdngGNjGl8iJwgbgmMNYiglAh9VAhGCDBM2E4I5P1Vhgi4GVEZGVIQCM2MuECCsIBAJHwtjYSABtgEgSSeeES1Sv1ItP18IgiBYXFxYIEQKiWMRUhUVWDhDDoqCODtjEiRQ2YphCKhjgQAh+QQFAABjACwEAAIACgAMAAAHbIBjDGIMDD8aY4ljHgY+RCUoJ2CKNjkGEyMAIolDFi8vFg8KQkM2LEaoRiw5JkkPGEpBQUoYYVkjBU4ZuxlOER8KNRhFS0tFGD4mBWMIGSAgRV9hJkiJM19JMzlND4kLYQ0LIicNiokSPjbmgQAh+QQFAABjACwDAAIACwAMAAAHbIBjgoNiF4OHggZDFw+HHBsNNjZHIwWCHjwpKTw5HwBgghQvoy8UEwAnYxohVCsrVCFjQgJjExAxuDEQBShZYy4hPUZGPSFDqGNIEzEYGD1hIgAeNT8SSAVh10w4gjYPOA8FHzoIiBceDQmHgQAh+QQFAABjACwCAAMADQALAAAHSoBjgoOEG4SHghMMD4iELmAXjYM1PAqSgkkwJgVIUI1fTCZjFxGNEykfgj8+iB8yYIJEJB6DPicUloMSSQpJJygoO40zYAg5rIOBADs=") no-repeat scroll 0 0 transparent;
  height: 17px;
  right: 9px;
  width: 16px;
  content: "";
}
.ace_dark .ace_gutter-cell.repl_output.waiting:after {
  background-image: url(data:image/gif;base64,R0lGODlhEAAQAPcAAAAAAAABAABpABqYGgAxAACVAD/BPwAVAABRAACxAAB9ACmrKQBBAFXYVQAhAA2yDQClABq5GgAJAACJAABdAAmUCTezN0nFSQqKCgBxAABIAAA5ACK5IgApAAalBgewB2DbYBmtGQ29DQAZACnIKQCdAAARADHLMQBhAABZAErUSgCRAAAFABRGFAB1AABNAACBABKVEieqJxW+FUfGRyDCIDvFOwCpABjCGBCIEABlAA6mDgCNAAANAAAlAAAdAABFAAqyCgBtAAA9AAG1AVHIUQB5AAA1ABWyFQAtAABVAGndaRzAHD3QPS3BLQChAE3VTQCZABC+EACFAFnZWS+2LwicCBOeEwWMBQp1CjbNNiTGJAkPCQW5BSGdIQCtABGREQWZBS3KLQVnBQdqBwWeBSKxIgi3CA65DgRwBAC4AAVgBQQiBAWpBQaBBkbSRg2NDQSKBBasFknOSRykHDnOOQVtBQR+BA+WD17aXlHXURW2FVTPVBHAEWXcZRmyGQydDAq8CjS7NC2/LQiTCAW2BQSgBBXAFRrEGkDRQAupC0/KTya9Jh3EHSbIJhCyECq0KiWyJQiaCB6YHjq7OiHFIT3HPS/MLxaVFhu+GxSSFBywHAmNCRa5Fgi5CGzfbBG0EQimCA6sDgiiCDvQO03ETWLcYjHMMSG8IRKhEgesBy65Lhq0GlHNURycHBqcGjvJOxC5EFXRVQ6oDj7IPgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJBAAAACwAAAAAEAAQAAAIxQABCARgYggKIwoEaDgwsGGSDCuefEnwJRSWDQ0DAIFR4gmEGwmIiMARAkUAgQSmFCiQgYAJE0cmSBHD4QWAHkJ4TADSUCCKRolCHEgCY0qKkz0D8HjzBsELGC4Y9hTYQUueGBQU6GAxVaAEHEuQpHBxtKvAJ2pKMMigRIJZAB0yHHCgA4UDpEmHDAEgQYMOID26dtDwQ+AIBBSO9MAbwIGGI0gD/NCgBEiSESM6DHnMtWGPDkA0iNYw5AfejCx6HDjgtmdAACH5BAkEAAAALAAAAAAQABAAAAjBAAEIBCDhiBIBLlAwMDFwYAACOqYUKHEDQokJGgI4POJiRYECUZ7cSKDGAwqNADq4mDAlhQ8JEjrA6NIH1AuCFGC42NBQYAoRlWYdcODCCJCeA6eQIPFiSMIDSAV2aJQIjgYhCFAiDYADyh8gAjJGJdiISgQCKDSwGOtAjJ9UB1IogRq1QxccFFgcSXFkLVIfRjKs7cEAQRK/AgM40HAEZYAeQzQwcHBghAMGGghoFcjisobPGoaM2NxTwgETEpAGBAAh+QQJBAAAACwAAAAAEAAQAAAIwwABCATQI4kGFAJSDDExcGAAHxSMTChQIsoKGAwCOEwiZMoEjxRvfCmRQiOAEQIUuNDgAICEDka+ELmhAQALDS50dGgokAKRQB4OjNChgwBPgQGm9DmEIImOFz2OCvQhxRGWIyiGmDzKQsopUQQoHNnKU8KhRHscKDnCQioABySgAJLwAogEtzr0QNERoMMLH2SnclhCYoTNDRoANwyAoIsjAQNZHNEwxMeIER2GaMhAoa3DHww0iNaw4UfghhIOmDgdEAAh+QQJBAAAACwAAAAAEAAQAAAIwwABCAQgwQcDJSleHOkxcGCAHwiEKJjAg8cUF0MCOPSBwoWLDEZg8IjyZEUKFgIPpBCCYsgIFix86Chx44kGACyG6FDioKHAFzcSlDjQI0WKnj4FGiFCBIGDFEMkJBXYoZAIHh2UJNE4lYUnHB8cIPDBNWkAEVs8HXjRoaxPBzhOhQrAIONUADrqaNEBwIEGH1OHDILS6AeAAEf+ukVQBUQiFANZJB7i4MABAhAaQMHi9uEQDaA1lFCjw23DHiZMMPQZEAAh+QQJBAAAACwAAAAAEAAQAAAIwwABCATA4gABDS8YEJAwcGCAAwwoZFAAA4YCFAQCOBzxQoAQFCiEKOCxAsYLjQB6vEDxooMJABJ+UFhRYsUQAAEIpGBwoKFADSUg8DDBAmFPnwKF3LihwcSLJCyQCnRwIwGMERp+SBXIIgERCAc0HJXKgoinLz00+NgKwEGgPlEADGGAEqmQRjhQAPihVuqQCGJivQxwRG1dBxQiNXFEYSCLwkMc/HAhg4+eUwrq4vzBQEOKBA30NGq8lcsBBSuUvBwYEAAh+QQJBAAAACwAAAAAEAAQAAAIwQABCAQQ4ICPDQyO/GAxcGAACUlS6BDiwoWAFEkCODQBhAKFFwhSCFEwxQUDjQBYMFAyxEEPhgeAwOAxZQNBHwiO9Ggo8MiEKDBMBGDAQALPgQJKlADSQ4MDlEcdlIBg5ICGA0cHsoBwI4pVrFkJ3kgAoamDsAB+ECFSAMCQk2F1iPCkI60GH1mBPMJRaATBI04HSnCgIwQJHAIcEtDwQoEmLwto1ak0gWFDNjpiLQHRIFEmCpZ5HlhR6VAYHWAFBgQAIfkECQQAAAAsAAAAABAAEAAACMMAAQgEEEDCjyQEkoxgMbAhiw4aUqDQIQDFCwcBHG5A8GLDECBKhBgRsiEjwSMakvSQECCAiQ1CYLjoIPCHhg4mGyYxMiFDjwBDhuRsCAABjxVHemhwQLThDx5RdBzQcKDpwAArSkyYWtUqABYlIBRQytTrDwg3JgAIOrQhhQRflACw6cPqkDaFElQNcASBECUYAzigsKOPJyEDWWTYs8iClwF0GFXqs4LhwA1SqORpoKIJCSlCLDc8gCIMKCSAUHQVGBAAIfkECQQAAAAsAAAAABAAEAAACMMAAQgEEIBFDwc+fphgMbBhAAdAEChJQSEFgxEBHB7RAIRAko0ohFDokJHgRh8sAmTs0QGFCwE/BP7Q4KPhQAcCFFBgOGRISZsAGMCAkaSHBgdAB44wMiHFAQ0HkgpkoWCFkadRpQaYUACGUaRSRxQo4QLAEAYmkgZIAeEJAgAEJvDYAJRBiS8lohI49InSGqQsHKAoU+hLCoEBOKkw1UoGphhX9kgpZOQnCx1MVKhocsoRDk8oGNr8gSIMGilWdMQcGBAAIfkECQQAAAAsAAAAABAAEAAACMUAAQgc2GPECBMSAgxcGOAHAw0aXiB4kcSEwoEBjmgY4uOHjyNKKLwYcTEAAQ0+FAYIwGKEBgEpRgj8gXLhwBFKhCCQAGAIg4s2ARDIkMFHD5RAbR4QoEDDAQ0ygwpkIWSKjgMvfkgVGMDFhAxJeEw5sPXAFB46Xoh5o2PrixUrgIwgkccJg6BHeJTgQVYIKSiRUjhgweKHkhUQSiCYiuVUk0FXOMVB/AVCBqAsdMxwtAWHiC5EblBIKtAEigqquhRAoXVgQAAh+QQJBAAAACwAAAAAEAAQAAAIxAABCBwo4cCBHgECDFwY4McQDRA1APEhYSEAFkc0DOkwYkQSIAiAmFAIIEDGDiRLmtiQ4oUJgT80dLAo0AQQFAxYABgyJCXDDihQjDhAYSZNgT2UCNngooCLowIDpHCBAMmSTjqPBkChgEIqU1ocQDWRAYYSHVBUCPEZFciUKRt+1FCBCghNAjB4KHgp4ESdEDo69JDgAAGMAjzsloxTiUQESRNgTIjyJAqKlAEEiMAhxRORLxAKMDj6Q0eBBF8mKDmwMCAAIfkECQQAAAAsAAAAABAAEAAACMAAAQgcKMHEAQkDEwoMMGKIhocaGDgIoDAAgYg+RozwwUDDBoQLW2jwQXEgiyQvhiBkoQRFB4UCWRxRQiCABjklfMAUeACBEhNg/JDQuVMCEJesqDQCCTMAEAEMIkDBUbLpCyEaACVq5GAnABMoXDBAcUqMAK8EjLhIMmIGiUdDYPoQAkNADwACDiEaReEHCxYjGGSYoGDDwgkiArWZoNbIhBVTNFRlIYAIkQQ3IDwpMAVI1YE/KEyAsMKFhrsDAwIAIfkECQQAAAAsAAAAABAAEAAACMMAAQgcGMCECRYDEw78sUGDQw1DfgRIyAJICg0MOowY4WOIhiMIBSIwY+jFRII+Pk48EMlPow4KAQTw8cJHAAQqoCiIKVACEA0S4KggAZMnCwJKfiBJNEMCT5kEUhB4pEVKyJgBNqDYIImElB9PJbzQQQAFokMCTir0IUDHjx9n+rQBEvMHhQxKEAro0iVKih8IDxzRoUCID4EBFBBJ8ASGEB1CFEwxwkAtCwo3bkAoUWDFBBcb1A4cocTFhAk6hhxIGBAAIfkECQQAAAAsAAAAABAAEAAACMIAAQgc2MOEiR4DEwIIAGSKCw0QNQz5oTCAjgsNviQZccDBEA1HWAx8YYmKmAwCAyz0AVLlgT8qSKRQKJClAwAITmiBQTPlEAYBCF3C0aHnwg4aTATZIkJlzwAOXjgohKOLyKcdlPgoI6XQzZ4shqRwgKJLIRRGf6RIYeJAggQlNtA88EIHEJEUvnyZoGFEgAAmkigRQoHiQiMQIKzIgCIFhQwuBBxxCoBFiihRCqyYMMWIjg6UB5rQIMRIhhRHEA4MCAAh+QQJBAAAACwAAAAAEAAQAAAIwAABCATQY4iAFAdYDFwoEIirUrIgpNAwZATDAClWqYCyBcIPB0M0HFHYkEOdLTCSDGThQ2QAgoAc4VDCUGAHDT8AvDiEQ0FNgQGGDAHAo0+XDj8FOtDQ40YgIiR/HtBw4AuRBFFrjtAwYkWCLzl/BkjywgSFLzdSJDXxQoOEA08grDhSs2CKIy9TlCgBA0hCgj+AoEBgQiALIVEKTNGhRAMCHQKUOHhp+MWUCRNgKDAi4MUPygsPMKAgQAcQB1kDAgAh+QQJBAAAACwAAAAAEAAQAAAIwgABCATQQ0MaTZNQ9BjIkMUQTYLmNDD1CIUDhgACoAhB4tSWRoduKNFAIMDAFw8QSZmQZGHGDkCOmDzwRIQnFBhfavgBAAERNQpyCgzAYAiAKUQS+BAq0IGGHk8SfGHBFMABDQdK3IBAlenVA1MglBjBNIDTHkpKlHjB1CGDACMKRIHRIacEAi98mHzBY4WQIyYyShixQQmDrgFSTJlgJAWQIUBSUMBqcigDF0YUuBAigAKDA5UZSuigQcmLIz+6CgwIACH5BAkEAAAALAAAAAAQABAAAAjGAAEIBGACSJYcOdIAMTFwYIAXFTY5qfNGVhE8SRqyQBGqzyEph3CcUnHIBYuBL2506aKAAAsWBFysUHIkAIADURIQUdJwoA8NPwBo+JLASE+HQxgAMHIDgo+jAgP87LHiSQmbUG9qOMCjRIGTWQ9szRCFx4isABxo6MFgBQ+lUAMMGRKghwIeGRwclapBL4AhMGCg6NAjQAAWEpJoqBn1hREFAjRsIHBEA4IhEhoGIIBCiBABKCi8SJL5qAQfGxhs6GACq8CAACH5BAkEAAAALAAAAAAQABAAAAjFAAEIBHBAgxAMGNIAOTBwYAAgPBR1qiQGloFXGgI4VFKCSJcunqRseUOFBhmNAICUSJBgSpIeAAi40bJkDwEAJnjcuJGioUAEaohsADCkxJMMKH2O0DAEgIASBX74bOhAQw8FBSYknVrwgJEVMFhMFRhg6QEdPBQwHAugqoQNMBQMHRtgSFMJQmCgGDG2qlQAHTK4UOJAAoAAAVj40HAEZYANOoRQYJDERxIGjMU69PECBYoUShAAcbB1oIQRHQh0OMBia0AAIfkEBQQAAAAsAAAAABAAEAAACMMAAQgEYAKIgCl37ADpMXBgAAZTSnzpIiWCmRgaAjjUsOJLggREuoggUWfVGI0ANvB4AsFIhx4SkijYAsXGCwA9FJSIoqGhwBQnTEE6cGRFARQ+BypQIUZDCh5TfiQVOCKBmg0CJhhBOfWHkgMHhbCYSlXDAQQKBJggG8CHhh5JMmTowHbIkAASKGRAcGCqW6kAfFAQwOAAiwAa22oggLKtEhQICDgY4WOIhiNcAQQYseGFEgQvNDD4kdlhjwM/RjD0GRAAOw==);
}
.ace_gutter-cell.repl_nonum {
  color: transparent;
}
.ace_gutter-cell.repl_dots:after {
  color: #4208b1;
  content: "..";
  display: inline-block;
  font-weight: bold;
  font-size: 1.1em;
  padding-right: 6px;
  position: absolute;
  right: 6px;
  margin-top: -2px;
}
.ace_dark .ace_gutter-cell.repl_dots:after {
  color: #8175be;
}
.ace_gutter-cell.repl_dots {
  color: transparent;
}
.repl_lineWidgetContainer {
  z-index: 5;
  position: absolute;
  background: rgba(247, 247, 247, 0.59);
  border: 1px solid #808080;
}
.repl_lineWidgetContainer:before {
  content: "";
  top: 0;
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.1), transparent);
  height: 4px;
  width: 100%;
  position: absolute;
}
.repl_lineWidgetContainer:after {
  content: "";
  bottom: 0;
  background-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.1), transparent);
  height: 4px;
  width: 100%;
  position: absolute;
}
.ace_repl_error {
  color: #f50c0c;
}
.ace_repl_warning {
  color: #d65e0d;
}

.immediate {
  padding: 5px;
}
.immediate .log,
.immediate .return,
.immediate .error,
.immediate .warn {
  border-bottom: 1px solid #ececec;
  padding: 0 0 0 4px;
  cursor: default;
  line-height: 15px;
  vertical-align: top;
}
.immediate .log > span,
.immediate .return > span,
.immediate .error > span,
.immediate .warning > span {
  vertical-align: top;
}
.immediate .ace_lineWidgetContainer > div:first-child {
  border-top: 1px solid #ececec;
}
.immediate .log,
.immediate .return {
  color: #333333;
}
.immediate .warning {
  color: #c09305;
}
.immediate .error {
  color: red;
}
.immediate .ace_lineWidgetContainer {
  border: 0;
  background: transparent;
}
.immediate .property {
  color: #c06ec4;
}
.immediate .treeitem {
  display: inline-block;
  padding-left: 10px;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  position: relative;
  white-space: nowrap;
}
.immediate .treeitem .arrow {
  top: 3px;
  left: -2px;
  width: 10px;
  height: 10px;
  position: absolute;
  overflow: hidden;
  text-indent: -2000px;
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/images/tree_close_arrow_small_dark_flat_light.png);
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .immediate .treeitem .arrow {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/images/tree_close_arrow_small_dark_flat_light@2x.png);
    background-size: 20px 10px;
  }
}
.immediate .treeitem .arrow.expanded {
  background-position: -10px -1px;
}
.immediate .treecontainer {
  padding: 0 0 0 0;
}
.immediate .treecontainer > .property {
  padding-left: 10px;
}
.immediate .textnode,
.immediate .comment,
.immediate .emptynode,
.immediate .cdata {
  padding-left: 10px;
}
.immediate .null {
  display: inline-block;
  color: #868686;
}
.immediate .stringcollapse > span:first-child {
  cursor: pointer;
}
.immediate .stringcollapse > span:first-child:hover {
  text-decoration: underline;
}
.immediate .stringcollapse > span:last-child {
  display: none;
}
.immediate .string {
  display: inline;
  color: #c21c1c;
}
.immediate .number {
  display: inline;
  color: #00a3ff;
}
.immediate .function {
  display: inline;
}
.immediate .regexp {
  display: inline;
  color: #c21c1c;
}
.immediate .err {
  display: inline-block;
  color: red;
}
.immediate .stack {
  margin: 0;
  color: red;
}
.immediate .stack a {
  color: #585858;
  cursor: pointer;
}
.immediate .stack a:hover {
  text-decoration: underline;
}
.immediate .preview {
  font-style: italic;
}
.immediate .ace_gutter-cell {
  padding-left: 6px;
  color: transparent;
}
.immediate .ace_gutter-cell.repl_prompt:after {
  padding-right: 0;
  padding-left: 3px;
  content: ">";
  color: #528dbb;
}
.immediate .ace_gutter-cell.repl_output:after {
  content: "";
}
.immediate .ace_gutter-cell.repl_dots:after {
  content: "";
}
.immediate .ace_gutter-cell.repl_output.waiting:after {
  height: 17px;
  right: 0;
  width: 12px;
  content: "";
  margin-top: 0px;
}
.ace_lineWidgetContainer:before {
  background: transparent;
}
.ace_lineWidgetContainer:after {
  background: transparent;
}
.immediate .ace_dark .log,
.immediate .ace_dark .return,
.immediate .ace_dark .error,
.immediate .ace_dark .warn {
  border-bottom: 1px solid #1d1c1c;
}
.immediate .ace_dark .ace_lineWidgetContainer > div:first-child {
  border-top: 1px solid #1d1c1c;
}
.immediate .ace_dark .log,
.immediate .ace_dark .return {
  color: #f1f1f1;
}
.immediate .ace_dark .warning {
  color: yellow;
}
.immediate .ace_dark .error {
  color: red;
}
.immediate .ace_dark .property {
  color: #bedb18;
}
.immediate .ace_dark .treeitem {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.immediate .ace_dark .treeitem .arrow {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/images/tree_close_arrow_small_flat_light.png);
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .immediate .ace_dark .treeitem .arrow {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/images/tree_close_arrow_small_flat_light@2x.png);
    background-size: 20px 10px;
  }
}
.immediate .ace_dark .null {
  color: gray;
}
.immediate .ace_dark .string {
  color: #ff7000;
}
.immediate .ace_dark .number {
  color: #00a3ff;
}
.immediate .ace_dark .regexp {
  color: #ff7000;
}
.immediate .ace_dark .err {
  color: red;
}
.immediate .ace_dark .stack {
  color: red;
}
.immediate .ace_dark .stack a {
  color: gray;
}
.immediate .ace_dark .ace_gutter-cell.repl_prompt:after {
  color: #719b28;
}

.language_tooltip {
  display: inline-block;
  position: absolute;
  border: 1px solid #e7de81;
  background-color: #f9f2ad;
  color: #333333;
  padding: 3px 5px;
  line-height: 15px;
  -webkit-box-shadow: 0 0 3px rgba(119, 119, 119, 0.23);
  -moz-box-shadow: 0 0 3px rgba(119, 119, 119, 0.23);
  box-shadow: 0 0 3px rgba(119, 119, 119, 0.23);
  text-shadow: 0;
  z-index: 300;
  font-family: Arial;
  z-index: 100000;
  pointer-events: none;
}
.language_tooltip.dark {
  background-color: #636363;
  color: #d1d1d1;
  border-color: #6f6f6f;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.21);
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.code_complete_text.ace_autocomplete {
  background: #ffffff;
  border: 1px solid #dedede;
  -webkit-box-shadow: 0 0 7px rgba(119, 119, 119, 0.2), inset 1px 1px 0 transparent, inset -1px -1px 0 transparent;
  -moz-box-shadow: 0 0 7px rgba(119, 119, 119, 0.2), inset 1px 1px 0 transparent, inset -1px -1px 0 transparent;
  box-shadow: 0 0 7px rgba(119, 119, 119, 0.2), inset 1px 1px 0 transparent, inset -1px -1px 0 transparent;
  width: 270px;
  line-height: 20px;
  position: absolute;
}
.code_complete_text.dark.ace_autocomplete {
  background: #303130;
  border: 1px solid black;
  -webkit-box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.8), inset 1px 1px 0 rgba(255, 255, 255, 0.06), inset -1px -1px 0 rgba(255, 255, 255, 0.06);
  -moz-box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.8), inset 1px 1px 0 rgba(255, 255, 255, 0.06), inset -1px -1px 0 rgba(255, 255, 255, 0.06);
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.8), inset 1px 1px 0 rgba(255, 255, 255, 0.06), inset -1px -1px 0 rgba(255, 255, 255, 0.06);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.code_complete_text .ace_scroller {
  margin: 1px 2px 1px 1px;
}
.code_complete_doc_text .cc_complete_option.ace_selected {
  text-shadow: none;
  overflow: auto;
  padding: 5px;
}
.ace_autocomplete {
  z-index: 100000;
}
.code_complete_doc_text {
  width: 310px;
  overflow: auto;
  position: absolute;
  padding: 5px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 100000;
  background-color: #f9f2ad;
  color: #333333;
  min-height: 100px;
  max-width: 300px;
  border: 1px solid #e7de81;
  -webkit-box-shadow: 0 0 7px rgba(119, 119, 119, 0.2), inset 1px 1px transparent, inset -1px -1px transparent;
  -moz-box-shadow: 0 0 7px rgba(119, 119, 119, 0.2), inset 1px 1px transparent, inset -1px -1px transparent;
  box-shadow: 0 0 7px rgba(119, 119, 119, 0.2), inset 1px 1px transparent, inset -1px -1px transparent;
  font-size: 12px;
}
.code_complete_doc_text.dark {
  border: 1px solid rgba(255, 255, 255, 0.06);
  border: 1px solid black;
  -webkit-box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.8), inset 1px 1px rgba(255, 255, 255, 0.06), inset -1px -1px rgba(255, 255, 255, 0.06);
  -moz-box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.8), inset 1px 1px rgba(255, 255, 255, 0.06), inset -1px -1px rgba(255, 255, 255, 0.06);
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.8), inset 1px 1px rgba(255, 255, 255, 0.06), inset -1px -1px rgba(255, 255, 255, 0.06);
  color: #ffffff;
  background-color: #636363;
}
.language_activeparamindent {
  color: rgba(0, 0, 0, 0);
  text-shadow: none;
}
.dark .language_activeparamindent {
  color: rgba(0, 0, 0, 0);
}
.language_activeparam {
  color: #474747;
  font-weight: bold;
  font-style: normal;
}
.dark .language_activeparam {
  color: #ffffff;
}
.language_type {
  font-style: italic;
}
.language_activeparamhelp {
  margin-left: 5px;
  font-style: italic;
}
.language_paramhelp {
  color: #474747;
  margin-top: 2px;
}
.dark .language_paramhelp {
  color: #ffffff;
}
.code_complete_doc_head {
  text-decoration: underline;
}
.code_complete_doc_text u {
  text-decoration: none;
  color: blue;
  text-shadow: none;
}
.code_complete_text .ace_text-layer {
  left: 1px;
  right: 1px;
  width: auto;
  top: 1px;
  bottom: 1px;
}
.code_complete_text .ace_line {
  background: transparent;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  pointer-events: auto;
  cursor: pointer;
  color: #333333;
}
.code_complete_text.dark .ace_line {
  color: #f1f1f1;
}
.code_complete_text .ace_line .completer-img {
  width: 8px;
  height: 8px;
  margin: 0 7px 0 5px;
  display: inline-block;
  border: 0 !important;
}
.code_complete_text .ace_line .deferred {
  opacity: .5;
}
.code_complete_text .ace_line .main u {
  text-decoration: none;
  color: #2882be;
}
.code_complete_text.dark .ace_line .main u {
  color: #9fb814;
}
.code_complete_text.ace_no-bold .ace_line .main u {
  font-weight: normal;
  text-shadow: 0 0 0.01em;
}
.code_complete_text .ace_line.ace_selected .main u {
  color: #cfe8ff !important;
  text-decoration: none;
  text-shadow: 0px 1px rgba(0, 0, 0, 0.3);
}
.code_complete_text.dark .ace_line.selected .main u {
  color: #b8ce73 !important;
  text-shadow: 0px 1px rgba(0, 0, 0, 0.3);
}
.code_complete_text .ace_line .meta {
  opacity: .5;
  margin: 0 0 0 0;
}
.code_complete_text .ace_line-hover {
  background: #efefef;
  color: #333333;
}
.code_complete_text.dark .ace_line-hover {
  background: #252525;
  color: #f1f1f1;
}
.code_complete_text .ace_line > span {
  padding: 0px 2px 0 1px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.code_complete_text .ace_line.ace_selected {
  background: #63acff;
}
.code_complete_text.dark .ace_line.ace_selected {
  background: #748512;
}
.code_complete_text .ace_line.ace_selected span {
  color: #ffffff;
}
.code_complete_text.dark .ace_line.ace_selected span {
  color: #f1f1f1;
}
.panelsbar,
.btnsesssioncontainer,
.bar-status,
.splitgrabber,
.code_complete_text,
.ace_scrollbar,
.ace_tree {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.language_highlight_default {
  position: absolute;
  border-bottom: solid 1px green;
  z-index: 2000;
}
.language_highlight_error {
  position: absolute;
  border-bottom: solid 1px #e00404;
  z-index: 2000;
}
.language_highlight_warning {
  position: absolute;
  border-bottom: solid 1px #DDC50F;
  z-index: 2000;
}
.language_highlight_info {
  position: absolute;
  border-bottom: dotted 1px #999;
  z-index: 2000;
}
.language_highlight_occurrence_main {
  position: absolute;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: solid 1px #888;
  z-index: 2000;
}
.ace_dark .language_highlight_occurrence_main {
  border: solid 1px #888;
}
.language_highlight_occurrence_other {
  position: absolute;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: solid 1px #888;
  z-index: 2000;
}
.ace_dark .language_highlight_occurrence_other {
  border: solid 1px #888;
}
.language_rename_main {
  position: absolute;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 3;
  box-shadow: 0 0 2px 2px rgba(194, 181, 29, 0.78);
}
.ace_dark .language_rename_main {
  box-shadow: 0 0 2px 2px rgba(194, 181, 29, 0.78);
}
.language_rename_other {
  position: absolute;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 3;
  box-shadow: 0 0 2px 1px rgba(214, 221, 38, 0.94) inset;
}
.ace_dark .language_rename_other {
  box-shadow: 0 0 2px 1px rgba(214, 221, 38, 0.94) inset;
}

.bk-window.login .bg-bk-content {
  background-color: #303130;
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.29) 0%, rgba(0, 0, 0, 0.11) 8px, rgba(0, 0, 0, 0.01) 13px, transparent 15px);
  background-image: -moz-linear-gradient(top, rgba(0, 0, 0, 0.29) 0%, rgba(0, 0, 0, 0.11) 8px, rgba(0, 0, 0, 0.01) 13px, transparent 15px);
  background-image: linear-gradient(top, rgba(0, 0, 0, 0.29) 0%, rgba(0, 0, 0, 0.11) 8px, rgba(0, 0, 0, 0.01) 13px, transparent 15px);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  top: 34px;
}

.notificationlabel {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
.notificationlabel u.close {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/close_tab_btn_flat_light.png);
  background-repeat: no-repeat;
  background-position: 0 -14px;
  width: 14px;
  height: 14px;
  position: absolute;
  right: 8px;
  top: 8px;
  cursor: pointer;
  z-index: 10000;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .notificationlabel u.close {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/close_tab_btn_flat_light@2x.png);
    background-size: 42px 28px;
  }
}
.notificationlabel u.close:hover {
  background-position: -14px -14px;
}
.notificationlabel u.close:active {
  background-position: -28px -14px;
}

.errorlabel,
.disconnectlabel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10000000;
  pointer-events: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.errorlabel.anim,
.disconnectlabel.anim {
  -webkit-transition: top 0.2s;
  /* Safari */
  transition: top 0.2s;
}
.errorlabel.fade-in {
  -webkit-transition: opacity 0.2s;
  /* Safari */
  transition: opacity 0.2s;
}
.errorlabel div {
  background: #ce3808;
  padding: 5px 30px 5px 10px;
  color: white;
  border-radius: 0 0 3px 3px;
  box-shadow: none;
  line-height: 1.4;
  display: inline-block;
  position: relative;
  word-wrap: break-word;
  max-width: 100%;
  pointer-events: auto;
}
.infolabel.errorlabel div {
  background: #fefefe;
  color: #333333;
}
.errorlabel.fade-in div {
  border-radius: 3px;
}
.errorlabel u.close {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/close_tab_btn_flat_light.png);
  background-repeat: no-repeat;
  background-position: 0 -14px;
  width: 14px;
  height: 14px;
  position: absolute;
  right: 8px;
  top: 6px;
  cursor: pointer;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .errorlabel u.close {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/close_tab_btn_flat_light@2x.png);
    background-size: 42px 28px;
  }
}
.errorlabel u.close:hover {
  background-position: -14px -14px;
}
.errorlabel u.close:active {
  background-position: -28px -14px;
}
.errorlabel div span {
  border-bottom: 1px dotted #ffaeae;
  cursor: help;
}
.disconnectlabel {
  z-index: 10000001;
}
.disconnectlabel div {
  background: #D8B112;
  padding: 5px 30px 5px 10px;
  color: white;
  border-radius: 0 0 3px 3px;
  box-shadow: none;
  line-height: 1.4;
  display: inline-block;
  position: relative;
  word-wrap: break-word;
  text-align: center;
  width: 300px;
  pointer-events: auto;
}
.disconnectlabel u {
  cursor: pointer;
}

.custom-tree.ace_tree {
  background: transparent;
  border: none;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}
.custom-tree.ace_tree .tree-row {
  background: transparent;
  color: #333333;
  border-radius: 3px;
  margin: 0px 0px 0px 0px;
  padding-left: 6px;
  height: 22px;
}
.custom-tree.ace_tree.ace-tree-list .tree-row {
  margin: 1px 0px 0px 0px;
  padding-left: 0;
}
.custom-tree.ace_tree .tree-row.heading {
  color: #333333;
  text-shadow: none;
}
.custom-tree.ace_tree .tree-row.selected {
  background: #eaeaea;
  border-color: transparent;
  color: #333333;
}
.custom-tree.ace_tree_focus .tree-row.selected {
  background: #63acff;
  color: #ffffff;
}
.custom-tree.ace_tree .message {
  border: 0;
  padding: 3px;
  text-align: center;
  background: transparent;
  font-size: 11px;
  margin: 20px 10px 0 10px;
  word-wrap: break-word;
  white-space: normal;
  color: #BBB;
  line-height: 1.5em;
}
.ace_tree .tree-row .checkbox {
  outline: 1px solid rgba(255, 255, 255, 0.35);
  background: #2D2D2D;
  width: 13px;
  height: 13px;
  margin: 1px 5px 0 0px;
  display: inline-block;
  vertical-align: middle;
  pointer-events: auto;
}
.ace_tree .tree-row .checkbox.checked {
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/check.gif");
  background-position: -2px -18px;
}
.ace_tree .tree-row .checkbox.half-checked {
  background-color: #565656;
  background-position: -2px -18px;
}
.custom-tree.ace_tree .tree-row .toggler {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/images/tree_close_arrow_small_dark_flat_light.png);
  background-repeat: no-repeat;
  margin: 0 1px 0 0;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .custom-tree.ace_tree .tree-row .toggler {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/images/tree_close_arrow_small_dark_flat_light@2x.png);
    background-size: 20px 10px;
  }
}
.custom-tree.ace_tree_focus .tree-row.selected .toggler {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/images/tree_close_arrow_small_flat_light.png);
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .custom-tree.ace_tree_focus .tree-row.selected .toggler {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/images/tree_close_arrow_small_flat_light@2x.png);
    background-size: 20px 10px;
  }
}
.custom-tree.ace_tree .tree-row > span {
  vertical-align: middle;
  padding: 1px 1px 1px 1px;
  line-height: 20px;
  display: inline-block;
}
.custom-tree .ace_tree-icon {
  width: 16px;
  height: 16px;
  padding: 0px;
  margin: 0px 3px 0 1px;
  background-repeat: no-repeat;
}
.loading .ace_tree-icon,
.loading-icon {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/file-tree-load-spinner_flat_light.gif);
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .loading .ace_tree-icon,
  .loading-icon {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/file-tree-load-spinner_flat_light@2x.gif);
    background-size: 14px 14px;
  }
}
.loading.selected .ace_tree-icon,
.selected .loading-icon {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/file-tree-load-spinner-dark-unfocus_flat_light.gif);
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .loading.selected .ace_tree-icon,
  .selected .loading-icon {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/file-tree-load-spinner-dark-unfocus_flat_light@2x.gif);
    background-size: 14px 14px;
  }
}
.custom-tree.ace_tree_focus .loading.selected .ace_tree-icon,
.custom-tree.ace_tree_focus .selected .loading-icon {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/file-tree-load-spinner-selected_flat_light.gif);
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .custom-tree.ace_tree_focus .loading.selected .ace_tree-icon,
  .custom-tree.ace_tree_focus .selected .loading-icon {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/file-tree-load-spinner-selected_flat_light@2x.gif);
    background-size: 14px 14px;
  }
}
.tree-row.dragAppendUpload -icon {
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/tree_upload_icon.png");
  background-position: -5px -1px;
}
.ace_treeDragImage.copy:after {
  content: "+";
  background: rgba(99, 172, 255, 0.92);
  border: 1px #63acff solid;
  position: absolute;
  right: -6px;
  bottom: -6px;
  color: #ffffff;
  font-size: 14px;
  border-radius: 8px;
  width: 14px;
  height: 13px;
  text-align: center;
  line-height: 13px;
  font-weight: bold;
  font-family: monospace;
  background: -webkit-radial-gradient(5px 5px, circle, #7e8f1c, #4c5d00);
  background: radial-gradient(5px 5px, circle, #7e8f1c, #4c5d00);
  box-shadow: 0px 0px 7px 0px #000;
}
.ace_treeDragImage .toggler {
  pointer-events: none;
}
.custom-tree.ace_tree_DragOver .tree-row.selected {
  background: rgba(234, 234, 234, 0.6);
}
.custom-tree.ace_tree_DragOver .tree-row.dropTarget {
  background: #63acff;
  box-shadow: 1px 1px rgba(99, 172, 255, 0.6) inset;
  color: #333333;
  border-radius: 3px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin-right: 5px;
}
.dragHighlight {
  position: absolute;
  border: solid 1px rgba(99, 172, 255, 0.6);
  border-right: rgba(0, 0, 0, 0);
  border-top: rgba(0, 0, 0, 0);
  background: rgba(99, 172, 255, 0.1);
}
.dragArrow {
  position: absolute;
  border: 1px solid #63acff;
  margin-top: 2px;
}
.dragArrow::before {
  content: "";
  background: #63acff;
  position: absolute;
  top: -3px;
  left: -3px;
  width: 6px;
  height: 6px;
  border-radius: 4px;
}
.custom-tree.ace_tree-editor {
  color: #101010;
  background-color: #f5f7ea;
  border: 1px solid #ffffff;
  height: 17px !important;
  margin-top: 1px !important;
}


#divSearchCount {
  position: absolute;
  width: auto;
  height: 19px;
  right: 47px;
  top: 5px;
  z-index: 100;
  color: #aaaaaa;
  font-size: 11px;
  line-height: 19px;
  text-align: center;
  vertical-align: middle;
  pointer-events: none;
}
.tb_textbox.searchTxt .sbtb_middle input {
  width: 100%;
}
.btnquicksearchnav.btnquicksearchnavLeft .lbl span {
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.find.replace/icons/arrow_left_search.png");
}
.btnquicksearchnav.btnquicksearchnavRight .lbl span {
  background-image: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.find.replace/icons/arrow_right_search.png");
}
.findInRangeMarker {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.6);
}

.btnquicksearchnav {
  height: 22px;
  cursor: pointer;
  position: absolute;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  width: 20px;
}
.btnquicksearchnav .lbl {
  margin: 0;
  outline: none;
  height: 25px;
}
.btnquicksearchnav.btnquicksearchnavLeft .lbl {
  border-right: none;
  border-left: none;
}
.btnquicksearchnav span {
  background-position: 0 0;
  background-repeat: no-repeat;
  display: block;
  height: 25px;
}
.btnquicksearchnavOver span {
  background-position: 0 -25px;
}
.btnquicksearchnavDown span {
  background-position: 0 -50px;
}
.btnquicksearchnavDisabled span {
  background-position: 0 -75px;
}
.btnquicksearchnav .btnDivider {
  z-index: 1;
  border-color: transparent white transparent #C3C3C3;
  border-left: 1px solid #C3C3C3;
  border-right: 1px solid white;
  border-style: none solid;
  border-width: medium 1px;
  cursor: default;
  height: 17px;
  line-height: 0;
  position: absolute;
  right: -2px;
  top: 4px;
  width: 0;
  display: none;
}

.bar-status {
  position: absolute;
  color: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  white-space: nowrap;
}
.bar-status > * {
  display: inline-block;
  vertical-align: middle;
}
.bar-status .lbl_row_col {
  text-align: center;
  color: rgba(0, 0, 0, 0.4);
}
.bar-status .label {
  color: #5a5a5a;
  padding: 2px 0 0 1px;
  overflow: visible;
  text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.5);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  font-size: 12px;
}
.bar-status.ace_dark .label {
  color: rgba(255, 255, 255, 0.5);
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.57);
}
.mnuSbPrefs {
  margin-top: -8px;
  margin-left: 1px;
}
.mnuSbPrefs .label {
  color: #333333;
}
.bar-status .label:hover {
  text-decoration: none;
  color: #333333;
}
.bar-status .label.labelDown {
  color: #63acff;
}
.bar-status .nounderline:hover {
  text-decoration: none;
}
.btn-statusbar-icon {
  height: 23px;
  width: 22px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  cursor: default;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  background-position: 0 0;
  margin: -3px 0 0 -4px !important;
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/pref-ico_flat_light.png) !important;
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .btn-statusbar-icon {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/pref-ico_flat_light@2x.png) !important;
    background-size: 44px 69px !important;
  }
}
.btn-statusbar-iconOver {
  background-position: 0 -23px;
}
.btn-statusbar-iconDown {
  background-position: 0 -46px;
}
.ace_dark .btn-statusbar-icon {
  background-position: -22px 0;
}
.ace_dark .btn-statusbar-iconOver {
  background-position: -22px -23px;
}
.ace_dark .btn-statusbar-iconDown {
  background-position: -22px -46px;
}

.gotolinelist {
  overflow: hidden;
  position: relative;
  border-style: solid;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj5jZW50ZXIgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMTAwJSIgeDI9IjAlIiB5Mj0iMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmY2ZjZmMiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2ZjZmNmYyIgc3RvcC1vcGFjaXR5PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2dyYWQtdWNnZy1nZW5lcmF0ZWQpIiAvPjwvc3ZnPg==);
  background-image: -moz-linear-gradient(center bottom, #fcfcfc 0%, #fcfcfc 100%);
  background-image: -webkit-linear-gradient(center bottom, #fcfcfc 0%, #fcfcfc 100%);
  background-image: -o-linear-gradient(center bottom, #fcfcfc 0%, #fcfcfc 100%);
  background-image: linear-gradient(center bottom, #fcfcfc 0%, #fcfcfc 100%);
  color: #333333;
  border-color: #f6f6f6;
  border-width: 1px;
  border-radius: 3px;
  margin: 0;
  outline: none;
  font-family: Tahoma;
  font-size: 12px;
  text-overflow: ellipsis;
  cursor: default;
  text-align: right;
}
.dark .gotolinelist {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj5jZW50ZXIgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMTAwJSIgeDI9IjAlIiB5Mj0iMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM0NzQ3NDciIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzQ3NDc0NyIgc3RvcC1vcGFjaXR5PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2dyYWQtdWNnZy1nZW5lcmF0ZWQpIiAvPjwvc3ZnPg==);
  background-image: -moz-linear-gradient(center bottom, #474747 0%, #474747 100%);
  background-image: -webkit-linear-gradient(center bottom, #474747 0%, #474747 100%);
  background-image: -o-linear-gradient(center bottom, #474747 0%, #474747 100%);
  background-image: linear-gradient(center bottom, #474747 0%, #474747 100%);
  color: #e7e7e7;
  border-color: #353637;
  border-width: 1px 0 1px 0;
  border-radius: 2px;
}
.gotolinelist > .selected {
  background-color: #63acff;
  color: #e7e7e7;
}
.dark .gotolinelist > .selected {
  background-color: #5f5f5f;
}
.gotolinelistFocus > .selected {
  color: #e7e7e7;
}
.gotolinelist .empty,
.gotolinelist .offline,
.gotolinelist .loading {
  text-align: center;
  padding: 8px 0 0 0;
  color: #777;
  font-size: 8pt;
  font-weight: normal;
}
.gotolinelist > DIV {
  padding: 2px 6px;
}
.barGotoline {
  position: absolute;
  background-color: #ffffff;
  border-radius: 0px 3px 3px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
  border: 1px solid #DEDEDE;
  border-left: 0;
  width: 20px;
  left: -100px;
}
.dark .barGotoline {
  background-color: #353637;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border: 1px solid #242424;
  border-left: 0;
}
.barGotoline .brGtlTop {
  background: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.ace.gotoline/images/barGotoLineCorners.png) no-repeat 0 0;
  height: 3px;
  width: 4px;
  position: absolute;
  top: -3px;
  left: 0;
}
.barGotoline .brGtlBottom {
  background: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.ace.gotoline/images/barGotoLineCorners.png) no-repeat 0 -3px;
  height: 3px;
  width: 4px;
  position: absolute;
  bottom: -3px;
  left: 0;
}
.tbGotoline {
  position: relative;
  height: 25px;
}
.tbGotoline .sbtb_middle {
  height: 15px;
  padding: 2px 5px 2px 5px;
  background-color: #ffffff;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj5jZW50ZXIgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMTAwJSIgeDI9IjAlIiB5Mj0iMCUiPnJnYigyNTUyNTUyNTUpIDUwJXJnYigyMzUyMzUyMzUpIDEwMCU8L2xpbmVhckdyYWRpZW50PjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+PC9zdmc+);
  background-image: -moz-linear-gradient(center bottom,rgb(255,255,255) 50%,rgb(235,235,235) 100%);
  background-image: -webkit-linear-gradient(center bottom,rgb(255,255,255) 50%,rgb(235,235,235) 100%);
  background-image: -o-linear-gradient(center bottom,rgb(255,255,255) 50%,rgb(235,235,235) 100%);
  background-image: linear-gradient(center bottom,rgb(255,255,255) 50%,rgb(235,235,235) 100%);
  color: #0471cf;
  margin: 0;
  outline: none;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Droid Sans Mono', 'Consolas', monospace;
  font-size: 12px;
  text-overflow: ellipsis;
  border-style: solid;
  border-color: #ffffff;
  border-width: 1px;
  border-radius: 2px;
  box-shadow: none;
}
.dark .tbGotoline .sbtb_middle {
  border-color: #fafafa;
  border-width: 1px 0 0 0;
  border-radius: 2px;
  box-shadow: none;
}
.tbGotoline .sbtb_middle INPUT {
  border: 0;
  height: 14px;
  font-size: 12px;
  color: #0471cf;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Droid Sans Mono', 'Consolas', monospace;
  outline: none;
  background-color: transparent;
  width: 100%;
  text-align: center;
}
.tbGotolineInitial .sbtb_middle INPUT {
  color: #0471cf;
}
.tbGotolineDisabled .sbtb_middle INPUT {
  color: #0471cf;
}
.tbGotolineDisabled .sbtb_middle {
  background: linear-gradient(center bottom, #ebebeb 0%, #ffffff 40%);
  cursor: default;
}

.ace_editor {
  overflow: hidden;
}
.ace-cloud9-night {
  background: #181818 !important;
}
.ace-cloud9-night .ace_gutter {
  background: #303130 !important;
}
.ace-cloud9-night .ace_marker-layer .ace_active-line {
  background: #292929 !important;
}
.ace-cloud9-day {
  background: #fbfbfb !important;
}
.ace-cloud9-day .ace_gutter {
  background: #f1f1f1 !important;
}
.ace-cloud9-day .ace_gutter-layer {
  box-shadow: none;
}
.ace_gutter-active-line {
  z-index: -1;
}
.ace_gutter-compact:not(.ace_folding-enabled) > .ace_gutter-layer > .ace_gutter-cell {
  padding-left: 15px!important;
  padding-right: 5px!important;
}
.ace_gutter-compact.ace_folding-enabled > .ace_gutter-layer > .ace_gutter-cell {
  padding-left: 16px!important;
  padding-right: 12px!important;
}
.dark .ace_gutter .ace_gutter_active_line {
  background-color: rgba(255, 255, 255, 0.07);
}
.ace_scroller.ace_scroll-left {
  box-shadow: none !important;
}
.scroll_shadow {
  top: 0;
  bottom: 0;
  width: 16px;
  position: absolute;
  border-top-left-radius: 4px;
  pointer-events: none;
}
.ace_scroller.ace_scroll-left > .scroll_shadow {
  box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;
  z-index: 100000;
}
.ace_corner {
  top: 0;
  position: absolute;
  width: 6px;
  height: 6px;
}
.ace_editor .ace_printMargin {
  position: absolute;
  height: 100%;
  width: 1px;
  background-color: #bfbfbf;
}
.ace_layer {
  z-index: 0;
}
.ace_marker-layer .ace_step,
.ace_marker-layer .ace_stack {
  position: absolute;
  z-index: 3;
}
.aceDisabled {
  border: 1px solid #c3c3c3;
  color: #bebebe;
}
.aceError {
  border: 1px solid #ffb500;
  padding: 5px;
}
.ace_gutter-layer .ace_gutter-cell {
  background-repeat: no-repeat;
}
.ace_gutter-layer .ace_gutter-cell.ace_error {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/ace_error_flat_light.png);
  background-repeat: no-repeat;
  background-position: 3px 0px;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .ace_gutter-layer .ace_gutter-cell.ace_error {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/ace_error_flat_light@2x.png);
    background-size: 16px 16px;
  }
}
.ace_gutter-layer .ace_gutter-cell.ace_warning {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/ace_warning_flat_light.png);
  background-repeat: no-repeat;
  background-position: 3px 0px;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .ace_gutter-layer .ace_gutter-cell.ace_warning {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/ace_warning_flat_light@2x.png);
    background-size: 16px 16px;
  }
}
.ace_gutter-layer .ace_gutter-cell.ace_info {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/images/ace_info_flat_light.png);
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .ace_gutter-layer .ace_gutter-cell.ace_info {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/images/ace_info_flat_light@2x.png);
    background-size: 16px 16px;
  }
}
.ace_gutter-layer .ace_gutter-cell.ace_breakpoint {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/brkp_obj_flat_light.png);
  background-repeat: no-repeat;
  background-position: 3px center;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .ace_gutter-layer .ace_gutter-cell.ace_breakpoint {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/brkp_obj_flat_light@2x.png);
    background-size: 16px 16px;
  }
}
.ace_gutter-layer .ace_breakpoint.disabled {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/brkp_obj_disabled_flat_light.png);
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .ace_gutter-layer .ace_breakpoint.disabled {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/brkp_obj_disabled_flat_light@2x.png);
    background-size: 16px 16px;
  }
}
.ace_gutter-layer .ace_breakpoint.condition {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/brkp_obj_condition_flat_light.png);
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .ace_gutter-layer .ace_breakpoint.condition {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/brkp_obj_condition_flat_light@2x.png);
    background-size: 16px 16px;
  }
}
.ace_gutter-layer .ace_breakpoint.invalid {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/brkp_obj_warn_flat_light.png);
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .ace_gutter-layer .ace_breakpoint.invalid {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/brkp_obj_warn_flat_light@2x.png);
    background-size: 16px 16px;
  }
}
.ace_gutter-layer .ace_breakpoint.disabled.condition {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/brkp_obj_condition_disabled_flat_light.png);
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .ace_gutter-layer .ace_breakpoint.disabled.condition {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/brkp_obj_condition_disabled_flat_light@2x.png);
    background-size: 16px 16px;
  }
}
.ace_gutter-layer .ace_gutter-cell.ace_breakpoint.step {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/brkp_obj_current_line_flat_light.png);
  background-repeat: no-repeat;
  background-position: 3px center;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .ace_gutter-layer .ace_gutter-cell.ace_breakpoint.step {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/brkp_obj_current_line_flat_light@2x.png);
    background-size: 16px 16px;
  }
}
.ace_gutter-layer .ace_gutter-cell.ace_breakpoint.condition.step {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/brkp_obj_current_line_condition_flat_light.png);
  background-repeat: no-repeat;
  background-position: 3px center;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .ace_gutter-layer .ace_gutter-cell.ace_breakpoint.condition.step {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/brkp_obj_current_line_condition_flat_light@2x.png);
    background-size: 16px 16px;
  }
}
.ace_gutter-layer .ace_gutter-cell.step {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/current_line_flat_light.png);
  background-repeat: no-repeat;
  background-position: 3px center;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .ace_gutter-layer .ace_gutter-cell.step {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/current_line_flat_light@2x.png);
    background-size: 16px 16px;
  }
}
.ace_gutter-layer .ace_gutter-cell.stack {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/stack_co_flat_light.png);
  background-repeat: no-repeat;
  background-position: 3px center;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .ace_gutter-layer .ace_gutter-cell.stack {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/stack_co_flat_light@2x.png);
    background-size: 16px 16px;
  }
}
.ace_dark .ace_gutter-layer .ace_gutter-cell.ace_error {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/ace_error_flat_light.png);
  background-repeat: no-repeat;
  background-position: 3px 0px;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .ace_dark .ace_gutter-layer .ace_gutter-cell.ace_error {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/ace_error_flat_light@2x.png);
    background-size: 16px [16px, no-repeat];
  }
}
.ace_dark .ace_gutter-layer .ace_gutter-cell.ace_warning {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/ace_warning_flat_light.png);
  background-repeat: no-repeat;
  background-position: 3px 0px;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .ace_dark .ace_gutter-layer .ace_gutter-cell.ace_warning {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/ace_warning_flat_light@2x.png);
    background-size: 16px [16px, no-repeat];
  }
}
.ace_dark .ace_gutter-layer .ace_gutter-cell.ace_breakpoint {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/brkp_obj_dark_flat_light.png);
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .ace_dark .ace_gutter-layer .ace_gutter-cell.ace_breakpoint {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/brkp_obj_dark_flat_light@2x.png);
    background-size: 16px 16px;
  }
}
.ace_dark .ace_gutter-layer .ace_breakpoint.disabled {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/brkp_obj_disabled_dark_flat_light.png);
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .ace_dark .ace_gutter-layer .ace_breakpoint.disabled {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/brkp_obj_disabled_dark_flat_light@2x.png);
    background-size: 16px 16px;
  }
}
.ace_dark .ace_gutter-layer .ace_breakpoint.condition {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/brkp_obj_condition_flat_light.png);
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .ace_dark .ace_gutter-layer .ace_breakpoint.condition {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/brkp_obj_condition_flat_light@2x.png);
    background-size: 16px 16px;
  }
}
.ace_dark .ace_gutter-layer .ace_breakpoint.invalid {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/brkp_obj_warn_dark_flat_light.png);
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .ace_dark .ace_gutter-layer .ace_breakpoint.invalid {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/brkp_obj_warn_dark_flat_light@2x.png);
    background-size: 16px 16px;
  }
}
.ace_dark .ace_gutter-layer .ace_breakpoint.disabled.condition {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/brkp_obj_condition_disabled_flat_light.png);
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .ace_dark .ace_gutter-layer .ace_breakpoint.disabled.condition {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/brkp_obj_condition_disabled_flat_light@2x.png);
    background-size: 16px 16px;
  }
}
.ace_dark .ace_gutter-layer .ace_gutter-cell.ace_breakpoint.step {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/brkp_obj_current_line_dark_flat_light.png);
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .ace_dark .ace_gutter-layer .ace_gutter-cell.ace_breakpoint.step {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/brkp_obj_current_line_dark_flat_light@2x.png);
    background-size: 16px 16px;
  }
}
.ace_dark .ace_gutter-layer .ace_gutter-cell.ace_breakpoint.disabled.step {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/brkp_obj_disabled_current_line_dark_flat_light.png);
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .ace_dark .ace_gutter-layer .ace_gutter-cell.ace_breakpoint.disabled.step {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/brkp_obj_disabled_current_line_dark_flat_light@2x.png);
    background-size: 16px 16px;
  }
}
.ace_dark .ace_gutter-layer .ace_gutter-cell.ace_breakpoint.condition.step {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/brkp_obj_current_line_condition_flat_light.png);
  background-repeat: no-repeat;
  background-position: 4px center;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .ace_dark .ace_gutter-layer .ace_gutter-cell.ace_breakpoint.condition.step {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/brkp_obj_current_line_condition_flat_light@2x.png);
    background-size: 16px 16px;
  }
}
.ace_dark .ace_gutter-layer .ace_gutter-cell.step {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/current_line_dark_flat_light.png);
  background-repeat: no-repeat;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .ace_dark .ace_gutter-layer .ace_gutter-cell.step {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/current_line_dark_flat_light@2x.png);
    background-size: 16px 16px;
  }
}
.ace_dark .ace_gutter-layer .ace_gutter-cell.stack {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/stack_co_flat_light.png);
  background-repeat: no-repeat;
  background-position: 4px center;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .ace_dark .ace_gutter-layer .ace_gutter-cell.stack {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.theme.flat/icons/debugger/stack_co_flat_light@2x.png);
    background-size: 16px 16px;
  }
}
.ace-solarized-light .fm-window .fm-content,
.fm-window .fm-header .hcontent {
  background-color: rgba(220, 220, 220, 0.73);
}
.ace_tooltip {
  padding: 3px 5px 2px 5px !important;
  line-height: 1.3em;
  font-family: Arial, sans-serif;
  box-shadow: 0 0 3px rgba(119, 119, 119, 0.23) !important;
  background: #f9f2ad !important;
  border: 1px solid #e7de81;
  color: #333333;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}
.ace_dark .ace_tooltip {
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.8) !important;
  background: #fff399 !important;
  border: 1px solid black;
  color: #333333;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.ace_progress {
  position: absolute;
  top: 50%;
  left: 10%;
  right: 10%;
  height: 1px;
  margin-top: -4px;
  z-index: -1;
}
.ace_progress.upload {
  top: 1px;
  left: 0px;
  right: 0px;
  height: 1px;
  margin-top: 0;
  z-index: 1000;
  background: none;
}
.ace_progress div {
  width: 10%;
  height: 100%;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0icmdiKDQwLCAxMzAsIDE5MCkiIHN0b3Atb3BhY2l0eT0iMCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0icmdiKDQwLCAxMzAsIDE5MCkiIHN0b3Atb3BhY2l0eT0iMSIvPjwvbGluZWFyR3JhZGllbnQ+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz48L3N2Zz4=);
  background-image: -moz-linear-gradient(left, rgba(40, 130, 190, 0) 0%,rgba(40, 130, 190, 1) 100%);
  background-image: -webkit-linear-gradient(left, rgba(40, 130, 190, 0) 0%,rgba(40, 130, 190, 1) 100%);
  background-image: -o-linear-gradient(left, rgba(40, 130, 190, 0) 0%,rgba(40, 130, 190, 1) 100%);
  background-image: linear-gradient(to right, rgba(40, 130, 190, 0) 0%,rgba(40, 130, 190, 1) 100%);
}
.dark .ace_progress div {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdWNnZy1nZW5lcmF0ZWQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0icmdiKDExMywxNzAsMTIpIiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9InJnYigxMTMsMTcwLDEyKSIgc3RvcC1vcGFjaXR5PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2dyYWQtdWNnZy1nZW5lcmF0ZWQpIiAvPjwvc3ZnPg==);
  background-image: -moz-linear-gradient(left, rgba(113,170,12,0) 0%,rgba(113,170,12,1) 100%);
  background-image: -webkit-linear-gradient(left, rgba(113,170,12,0) 0%,rgba(113,170,12,1) 100%);
  background-image: -o-linear-gradient(left, rgba(113,170,12,0) 0%,rgba(113,170,12,1) 100%);
  background-image: linear-gradient(to right, rgba(113,170,12,0) 0%,rgba(113,170,12,1) 100%);
}
.ace_link_marker {
  position: absolute;
  color: blue;
  border-bottom: 1px dotted rgba(0, 0, 0, 0.4);
  z-index: 20;
  cursor: pointer;
  margin-top: -1px;
}
.dark .ace_link_marker {
  border-bottom: 1px dotted rgba(255, 255, 255, 0.4);
}

.openfiles .ace_tree .tree-row {
  height: 20px;
}
.openfiles .ace_tree .tree-row strong.close {
  margin-top: 0;
  width: 14px;
  height: 14px;
  position: relative;
  right: 2px;
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images//close_tab_btn_flat_light.png);
  background-repeat: no-repeat;
  background-position: 0 0;
  pointer-events: auto;
  cursor: pointer;
  z-index: 10;
  -webkit-animation: none;
  -moz-animation: none;
  animation: none;
  display: inline-block;
  vertical-align: middle;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .openfiles .ace_tree .tree-row strong.close {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images//close_tab_btn_flat_light@2x.png);
    background-size: 42px 28px;
  }
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .openfiles .ace_tree .tree-row strong.close {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images//close_tab_btn_flat_light@2x.png);
    background-size: 42px 28px;
  }
}
.openfiles .ace_tree .tree-row span {
  line-height: 17px;
}
.openfiles .ace_tree .tree-row strong.changed,
.openfiles .ace_tree .tree-row strong.saving,
.openfiles .ace_tree .tree-row strong.saved,
.openfiles .ace_tree .tree-row strong.error {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/tabsave-flat.png);
  background-repeat: no-repeat;
  background-position: 0 2px;
  display: inline-block;
  width: 9px;
  height: 9px;
  margin: -2px 2px 0 3px;
  -webkit-animation: none;
  -moz-animation: none;
  animation: none;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .openfiles .ace_tree .tree-row strong.changed,
  .openfiles .ace_tree .tree-row strong.saving,
  .openfiles .ace_tree .tree-row strong.saved,
  .openfiles .ace_tree .tree-row strong.error {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/tabsave-flat@2x.png);
    background-size: 36px 9px;
  }
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .openfiles .ace_tree .tree-row strong.changed,
  .openfiles .ace_tree .tree-row strong.saving,
  .openfiles .ace_tree .tree-row strong.saved,
  .openfiles .ace_tree .tree-row strong.error {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/tabsave-flat@2x.png);
    background-size: 36px 9px;
  }
}
.openfiles .ace_tree .tree-row strong.changed {
  background-position: 0 0;
}
.openfiles .ace_tree .tree-row strong.error {
  background-position: -9px 0;
}
.openfiles .ace_tree .tree-row strong.saving {
  background-position: -18px 0;
}
.openfiles .ace_tree .tree-row strong.saved {
  background-position: -27px 0;
}
.openfiles .ace_tree .tree-row strong.close:hover,
.openfiles .ace_tree .tree-row strong.close:active {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/close_tab_btn_flat_light.png);
  background-repeat: no-repeat;
  background-position: -14px 0;
  width: 14px;
  height: 14px;
  margin: 0 0 0 0;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .openfiles .ace_tree .tree-row strong.close:hover,
  .openfiles .ace_tree .tree-row strong.close:active {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/close_tab_btn_flat_light@2x.png);
    background-size: 42px 28px;
  }
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .openfiles .ace_tree .tree-row strong.close:hover,
  .openfiles .ace_tree .tree-row strong.close:active {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/close_tab_btn_flat_light@2x.png);
    background-size: 42px 28px;
  }
}
.openfiles .ace_tree .toggler {
  display: none;
}
.openfiles .ace_tree .group .toggler {
  display: inline-block;
}
.openfiles .ace_tree .tree-row > span {
  padding: -3px 2px 0 3px;
}
.openfiles {
  background: #fbfbfb;
  border-top: 1px solid transparent;
  border-bottom: 1px solid #dedede;
  box-sizing: border-box;
  padding: 10px 0 0 0;
}
.openfiles > .filetree {
  height: 100%;
}
.workspace_files.hasopenfiles .filetree.real {
  border-top: 1px solid transparent;
}
.hidetree .openfiles {
  border-bottom: 0;
}
.hidetree .filetree.real {
  display: none;
}

.imgtoolbar {
  padding-top: 3px;
  border-bottom: 1px solid #dedede;
  box-shadow: none;
  box-sizing: border-box;
  z-index: 1000000;
  background-color: #f1f1f1;
}
.imgtoolbar .label {
  color: #333333;
  padding: 1px 2px 0 2px;
}
.imgtoolbar .c9-divider {
  margin: 0 5px 0 8px !important;
}
.imgtoolbar .black_dropdown {
  min-height: 21px !important;
  max-height: 21px !important;
}
.imgtoolbar .black_dropdown .lbl {
  padding: 4px 0px 5px 7px;
  margin-right: 20px;
}
.imgtoolbar .black_dropdown .button {
  width: 20px;
}
.imgeditor {
  background: #e8e8e8;
  text-align: center;
  white-space: nowrap;
  overflow: auto;
}
.imgeditor:after {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.imgeditor canvas {
  background: url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.imgeditor/images/background.png");
  cursor: crosshair;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: scale(1);
  -webkit-transform-origin: 0 0;
  transform: scale(1);
  transform-origin: 0 0;
}
.imgeditorrect {
  cursor: crosshair;
  border: 1px dotted rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.2);
  position: absolute;
  z-index: 100000;
}
.menu-resize {
  width: 242px;
  height: 238px;
  padding: 20px 20px 0 20px;
}
.menu-resize-row-height {
  height: 30px;
  white-space: nowrap;
  margin: 0 0 10px 0;
}
.menu-resize-row-height.center {
  text-align: center;
}
.menu-resize-row-height > * {
  display: inline-block;
  vertical-align: middle;
}
.menu-resize .resize-label {
  width: 70px;
}
.menu-resize .menu_divider {
  margin: 20px 0 20px 0 !important;
}

.bartools .c9-toolbarbutton-glossy {
  height: 100%;
  border-radius: 0;
  border: 0;
  padding: 0 9px;
}
.bartools .c9-toolbarbutton-glossy > div {
  margin-top: 8px;
}
.bartools .c9-toolbarbutton-glossyIcon {
  padding-left: 16px;
}
.bartools .c9-toolbarbutton-glossyIcon .c9-icon {
  margin-left: 10px;
}
.bartools .c9-toolbarbutton-glossyOver {
  border: 0;
  background: #E6E6E6;
}
.bartools .c9-toolbarbutton-glossymenuDown {
  background-color: #ffffff;
  box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.29);
  border: 1px solid #dedede;
  border-width: 0 1px;
  padding: 0 8px 0 8px;
  z-index: 1000000;
}
.btnName {
  margin-right: 0px !important;
  padding-left: 33px !important;
}
.c9-menu-btnEmpty {
  padding-left: 9px;
}
.c9-menu-btnDown:not(.c9-menu-btnmenuDown) {
  box-shadow: none;
  border: 0;
  padding-left: 9px;
  padding-right: 9px;
}
.toolbar-top .c9-divider {
  height: 32px;
  margin-top: -1px !important;
}
.toolbar-top.bottom .c9-divider {
  display: none;
}
.previewbar .hbox {
  left: 39px !important;
}
.previewbar .c9-toolbarbutton-glossy {
  height: 29px !important;
  box-sizing: border-box;
  min-width: 30px !important;
}
.previewbar .locationbar,
.previewbar .hbox .c9-toolbarbutton-glossy {
  margin: 0px 5px 0px 0 !important;
}
.previewbar .hbox .c9-toolbarbutton-glossy:last-child {
  margin: 0 !important;
}
.previewbar .c9-toolbarbutton-glossy .c9-icon {
  top: 1px;
  left: 3px;
}
.previewbar .searchbox.tb_console .sbtb_middle {
  padding-left: 10px;
  height: 23px;
  line-height: 22px;
}
.btn-preview-choice {
  line-height: 22px;
  height: 24px;
  background-position: 5px 5px;
  padding-left: 27px;
}
.btn-preview-choice span {
  top: 12px;
}
.output .c9-toolbarbutton-glossyIcon.runbtn {
  width: 69px !important;
  min-width: 69px !important;
}
.output .c9-toolbarbutton-glossyIcon.restart,
.output .c9-toolbarbutton-glossyIcon.bug {
  min-width: 29px !important;
}
.output .c9-toolbarbutton-glossy.cwd {
  min-width: 53px !important;
}
.output .c9-toolbarbutton-glossy.env {
  min-width: 48px !important;
}
.output .c9-toolbarbutton-glossyIcon.restart .c9-icon {
  left: 5px;
  top: 5px;
}
.output .c9-toolbarbutton-glossyIcon.bug .c9-icon {
  left: 4px;
}
.output .c9-toolbarbutton-glossy {
  height: 27px !important;
  margin-top: -4px !important;
  margin-left: -4px !important;
}
.output .c9-toolbarbutton-glossyIcon .c9-icon {
  left: 7px;
  top: 4px;
}
.output .c9-toolbarbutton-glossy .c9-label {
  padding: 3px 6px 3px 10px;
}
.output .c9-toolbarbutton-glossyIcon .c9-label {
  padding: 3px 3px 0 35px;
}
.output .toolbar .c9-toolbarbutton-glossyOver {
  border: 1px solid #c2c8ca !important;
  background: rgba(255, 255, 255, 0.4) !important;
}
.output .toolbar .c9-toolbarbutton-glossyDown {
  border: 1px solid #c2c8ca !important;
  background: rgba(255, 255, 255, 0.6) !important;
}
.output .c9-toolbarbutton-glossy:last-child {
  margin-right: 0;
}
.envcontainer {
  border-radius: 4px;
  box-shadow: 1px 1px 6px 0px rgba(0, 0, 0, 0.08);
  margin-top: 2px;
  margin-left: 1px;
}
.envcontainer .blackdg {
  border-top: 0 !important;
}
.blackdg .ace_wrapper {
  z-index: 100000;
  padding: 3px 0 0 5px;
  background: white;
  box-sizing: border-box;
  overflow: hidden;
}
.keybindings .blackdg .ace_wrapper {
  height: 24px !important;
  background-color: #efefef;
  padding-left: 4px;
}
.keybindings .blackdg .ace_wrapper .ace_editor {
  height: 24px !important;
  margin-top: -1px !important;
}
.console > .hbox > .console_close_btn {
  width: 26px !important;
  height: 30px !important;
  margin: 11px -4px 0px 3px !important;
  box-sizing: border-box;
}
.console > .hbox > .divider_console {
  display: none;
}
.console > .hbox > .btn_console {
  margin: 7px 0px 0px 0px !important;
  border-radius: 0;
  width: 26px !important;
  height: 31px !important;
  cursor: pointer;
}
.console > .hbox > .btn_consoleOver {
  background: #E6E6E6;
  border: 1px solid transparent;
}
.console > .hbox > .btn_console div {
  margin: 5px 0 0 3px;
}
.console > .hbox > .btn_consoleDown {
  border: 1px solid transparent;
  box-shadow: none;
  background: #E6E6E6;
}
.c9-toolbarbutton-glossyDisabled.light .c9-icon {
  opacity: 0.6;
}
.rbcontainer.themepicker {
  border-radius: 4px;
}
.rbcontainer.themepicker div {
  box-shadow: none;
}
.rbcontainer.themepicker.rbcontainerSelected div:after {
  border: 3px solid #D8D8D8;
  border-radius: 8px;
}
.ace_scroller.ace_scroll-left > .scroll_shadow {
  box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.2) inset !important;
}
.bar-preferences .blackdg .ace_tree-editor {
  box-shadow: none;
  color: #333;
  text-shadow: none;
  background: #efefef;
}
.c9-toolbarbutton-glossy.saving .c9-label,
.c9-toolbarbutton-glossy.saved .c9-label {
  background-position: 0 -523px;
  font-size: 13px;
  line-height: inherit;
  padding: 4px 0 0 0;
  text-transform: none;
  background: none;
  color: #9e9e9e;
}
.c9-toolbarbutton-glossy.saving .c9-icon,
.c9-toolbarbutton-glossy.saved .c9-icon {
  display: none;
}
.dark.session_btn.curbtn .tab_middle {
  margin-top: 3px !important;
}
.session_btn.btnclose .tab_middle .sessiontab_title {
  margin-right: 6px;
  margin-left: -4px;
  position: relative;
  z-index: 1000;
}
.session_btn.btnclose.running .tab_middle .sessiontab_title {
  margin-right: 7px;
}
.session_btn strong {
  margin-right: -1px;
}
.cbcontainerFocus span {
  padding: 1px 2px 1px 3px;
  border: 1px dotted #BBB;
  margin-left: 4px;
  margin-top: 2px;
}
.grouped_checkbox_holder.mount {
  background: #FAFAFA;
  border-radius: 4px;
  border: 1px solid #DEDEDE;
}
.grouped_checkbox_holder.mount .cbcontainer {
  margin-left: 1px !important;
}
.grouped_checkbox_holder.mount .cbcontainerFocus span {
  border: 0;
  margin-left: 0;
}
.grouped_checkbox_holder.mount .cbcontainer:first-child {
  border-radius: 3px 0 0 3px;
}
.grouped_checkbox_holder.mount .cbcontainer:last-child {
  border-radius: 0 3px 3px 0;
}
.grouped_checkbox_holder.mount .cbcontainerDown,
.grouped_checkbox_holder.mount .cbcontainerChecked {
  background: #63acff;
  box-shadow: none;
  margin: -1px !important;
  position: relative;
  top: 0px;
  padding: 2px 0 1px 0;
  height: 27px !important;
}
.grouped_checkbox_holder.mount .cbcontainer span {
  color: #333 !important;
}
.has_apf .grouped_checkbox_holder.mount .cbcontainerOver:not(.cbcontainerChecked),
.has_apf .grouped_checkbox_holder.mount .cbcontainerFocus:not(.cbcontainerChecked) {
  background: #F0F0F0;
  border-radius: 0 3px 3px 0;
  top: 0;
  position: relative;
  margin-left: 1px !important;
  padding: 1px 0 0 0;
  box-shadow: none !important;
}
.has_apf .grouped_checkbox_holder.mount .cbcontainerDown span,
.has_apf .grouped_checkbox_holder.mount .cbcontainerChecked span {
  color: white !important;
}
.immediate .ace_lineWidgetContainer > div {
  border-top: 0 !important;
  border-bottom: 0;
}
.filetree .tree-row > span.caption {
  margin-left: 4px;
}
.filetree .tree-row.heading > span.caption {
  margin-left: 0;
}
.toolbar-top.basic .c9-menu-btnDown.scripts {
  border: 0;
}
.blackdg .dbgVarIcon {
  background-position: 0 -1px;
}
.language_highlight_occurrence_other,
.language_highlight_occurrence_main {
  border-color: #ADADAD;
}
.welcome .label {
  padding: 5px 2px;
}
.c9-menu-bar .c9-mbar-cont .c9-divider-double.extrasdivider {
  display: none;
}
.c9-toolbarbutton-glossy .c9-icon {
  height: 20px;
}
.bk-window.relative,
.bk-window2.relative {
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2) !important;
}
.reportabug {
  width: 378px !important;
}
.reportabug .bk-container {
  padding: 10px;
}
.reportabug #form > .hbox:first-child {
  padding-bottom: 14px !important;
}
.output .c9-divider {
  display: none;
}
#fileUploadSelect {
  top: 300px;
  left: 99px;
  width: 181px;
  height: 24px;
}
#fileUploadSelect.uploadWithFolders {
  left: 118px;
  width: 120px;
  height: 29px;
}
#folderUploadSelect {
  top: 300px;
  left: 243px;
  width: 120px;
  height: 29px;
}
.editor_tab.morepadding .btnsesssioncontainer {
  padding-right: 0;
}
.ace_tree.ace_tree_focus .selected .extrainfo {
  color: #FFFFFF;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.loading-spinner {
  background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/tab-save-spinner-active_flat_light.png);
  background-repeat: no-repeat;
  -webkit-animation: loading-24-spinner 1.2s steps(24) infinite !important;
  -moz-animation: loading-24-spinner 1.2s steps(24) infinite !important;
  -o-animation: loading-24-spinner 1.2s steps(24) infinite !important;
  -ms-animation: loading-24-spinner 1.2s steps(24) infinite !important;
  animation: loading-24-spinner 1.2s steps(24) infinite !important;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .loading-spinner {
    background-image: url(https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/images/tab-save-spinner-active_flat_light@2x.png);
    background-size: 336px 14px;
  }
}
.searchresults .item {
  padding: 5px 3px 1px 5px;
}
.ace_tree .tree-row .checkbox {
  outline: 1px solid rgba(0, 0, 0, 0.16);
  background: white;
  width: 13px;
  height: 13px;
  margin: -2px 5px 0 0px;
  display: inline-block;
  vertical-align: middle;
  pointer-events: auto;
}
.ace_tree .tree-row .checkbox.checked {
  background-position: -2px -2px;
}
.ace_tree .tree-row .checkbox.half-checked {
  background-color: #DDDDDD;
  background-position: -2px -2px;
}
.installer .execute .progress {
  bottom: -44px;
}
.top-test-panel {
  border-bottom: 1px solid transparent;
}
.has_apf .toolbar-top .sbtb_middle {
  height: auto;
  padding: 4px 25px 3px 5px;
  border: 0;
  margin-right: 1px;
}
.top-test-panel {
  border-bottom: 1px solid #dedede;
  box-shadow: none;
}
body .runner-form-header {
  background: whitesmoke;
}
.runtestbtn .icon {
  background-position: 1px 2px;
  height: 22px;
}
.coverage-toolbar {
  background-color: #f7f7f7;
  border-bottom: 1px solid #ECECEC;
  box-sizing: border-box;
}
.coverage-toolbar .label {
  padding: 7px;
}
.coverage-toolbar .black_dropdown {
  margin: 0 !important;
  min-height: 28px !important;
}
@media print, (-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx) {
  .listBP .checked .checkbox {
    background-position: 0px -61px !important;
  }
  .cbblack.cbcontainerChecked .checkbox {
    background-position: 0px -61px;
  }
  .cbblack.cbcontainerDown .checkbox {
    background-position: 0 -41px;
  }
  .cbblack.cbcontainerOver.cbcontainerChecked .checkbox {
    background-position: 0 -81px;
  }
  .cbblack.cbcontainerChecked.cbcontainerDown .checkbox {
    background-position: 0 -101px;
  }
  .cbblack.cbcontainerDisabled.cbcontainerChecked .checkbox {
    background-position: 0 -142px;
  }
  .cbblack.cbcontainerDisabled.cbcontainerDisabled .checkbox {
    background-position: 0 0;
  }
  .session_btn .tab_middle:before {
    background-position: 0 -126px;
    -webkit-mask-position: 0 -95px;
    left: -35px;
  }
  .session_btn .tab_shadow:before {
    left: -35px;
  }
  .session_btn .tab_middle:after {
    background-position: -42px -126px;
    -webkit-mask-position: -42px -95px;
    right: -37px;
  }
  .dark.session_btn.curbtn .tab_middle:before,
  .session_btn.curbtn .tab_middle:before {
    background-position: 0 -126px;
  }
  .dark.session_btn.curbtn .tab_middle:before {
    -webkit-mask-position: 0 -95px;
  }
  .dark.session_btn.curbtn .tab_middle:after,
  .session_btn.curbtn .tab_middle:after {
    background-position: -42px -126px;
  }
  .dark.session_btn.curbtn .tab_middle:after {
    -webkit-mask-position: -42px -95px;
  }
  .session_btn.curbtn .tab_shadow:before {
    background-position: 0 -123px;
  }
  .session_btn.curbtn .tab_shadow:after {
    background-position: -42px -123px;
  }
  .c9-toolbarbutton-glossy .c9-icon {
    height: 19px;
  }
  .runtestbtn .icon {
    height: 21px;
  }
}

/*# sourceURL=https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/../skin/default-ro/flat-light.css */</style><style>    .error_widget_wrapper {        background: inherit;        color: inherit;        border:none    }    .error_widget {        border-top: solid 2px;        border-bottom: solid 2px;        margin: 5px 0;        padding: 10px 40px;        white-space: pre-wrap;    }    .error_widget.ace_error, .error_widget_arrow.ace_error{        border-color: #ff5a5a    }    .error_widget.ace_warning, .error_widget_arrow.ace_warning{        border-color: #F1D817    }    .error_widget.ace_info, .error_widget_arrow.ace_info{        border-color: #5a5a5a    }    .error_widget.ace_ok, .error_widget_arrow.ace_ok{        border-color: #5aaa5a    }    .error_widget_arrow {        position: absolute;        border: solid 5px;        border-top-color: transparent!important;        border-right-color: transparent!important;        border-left-color: transparent!important;        top: -5px;    }</style><script src="./campground.js_files/cloud9_day.js" charset="utf-8" async="" crossorigin="true"></script><style>.ace_snippet-marker {    -moz-box-sizing: border-box;    box-sizing: border-box;    background: rgba(194, 193, 208, 0.09);    border: 1px dotted rgba(211, 208, 235, 0.62);    position: absolute;}</style><style>* { }</style><style id="ace-tm">
/*# sourceURL=ace/css/ace-tm */</style><style id="x">
/*# sourceURL=ace/css/x */</style><style>.ace_autocomplete.ace-tm .ace_marker-layer .ace_active-line {    background-color: #CAD6FA;    z-index: 1;}.ace_autocomplete.ace-tm .ace_line-hover {    border: 1px solid #abbffe;    margin-top: -1px;    background: rgba(233,233,253,0.4);}.ace_autocomplete .ace_line-hover {    position: absolute;    z-index: 2;}.ace_autocomplete .ace_scroller {   background: none;   border: none;   box-shadow: none;}.ace_rightAlignedText {    color: gray;    display: inline-block;    position: absolute;    right: 4px;    text-align: right;    z-index: -1;}.ace_autocomplete .ace_completion-highlight{    color: #000;    text-shadow: 0 0 0.01em;}.ace_autocomplete {    width: 280px;    z-index: 200000;    background: #fbfbfb;    color: #444;    border: 1px lightgray solid;    position: fixed;    box-shadow: 2px 3px 5px rgba(0,0,0,.2);    line-height: 1.4;}</style><style id="ace_repl">
/*# sourceURL=ace/css/ace_repl */</style><style>.no-events * {pointer-events:none!important}</style><style id="filetree">undefined
/*# sourceURL=ace/css/filetree */</style><style>.filetree-icon.page_white_magnify{background-image:url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/page_white_magnify.png")}
.filetree-icon.page_white_code{background-image:url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/page_white_code.png")}
.filetree-icon.page_white_code_red{background-image:url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/page_white_code_red.png")}
.filetree-icon.css{background-image:url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/css.png")}
.filetree-icon.page_white_picture{background-image:url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/page_white_picture.png")}
.filetree-icon.page_white_php{background-image:url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/page_white_php.png")}
.filetree-icon.html{background-image:url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/html.png")}
.filetree-icon.page_white_cup{background-image:url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/page_white_cup.png")}
.filetree-icon.logiql{background-image:url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/logiql.png")}
.filetree-icon.page_white_ruby{background-image:url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/page_white_ruby.png")}
.filetree-icon.page_white_c{background-image:url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/page_white_c.png")}
.filetree-icon.page_white_cplusplus{background-image:url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/page_white_cplusplus.png")}
.filetree-icon.page_white_h{background-image:url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/page_white_h.png")}
.filetree-icon.image{background-image:url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/image.png")}
.filetree-icon.page_white_acrobat{background-image:url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/page_white_acrobat.png")}
.filetree-icon.page_white_coldfusion{background-image:url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/page_white_coldfusion.png")}
.filetree-icon.page_white_database{background-image:url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/page_white_database.png")}
.filetree-icon.page_white_wrench{background-image:url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/page_white_wrench.png")}
.filetree-icon.page_white_zip{background-image:url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/page_white_zip.png")}
.filetree-icon.page_white_compressed{background-image:url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/page_white_compressed.png")}
.filetree-icon.page_white_swoosh{background-image:url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/page_white_swoosh.png")}
.filetree-icon.page_white_text{background-image:url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/page_white_text.png")}
.filetree-icon.page_white_gear{background-image:url("https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/page_white_gear.png")}
</style><style id="ace-cloud9-day">.ace-cloud9-day .ace_gutter {
  background: #ECECEC;
  color: #333;
}

.ace-cloud9-day .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-cloud9-day .ace_fold {
    background-color: #6B72E6;
}

.ace-cloud9-day {
  background-color: #FBFBFB;
  color: black;
}

.ace-cloud9-day .ace_cursor {
  color: black;
}
        
.ace-cloud9-day .ace_invisible {
  color: rgb(191, 191, 191);
}

.ace-cloud9-day .ace_storage,
.ace-cloud9-day .ace_keyword {
  color: rgb(24, 122, 234);
}

.ace-cloud9-day .ace_constant {
  color: rgb(197, 6, 11);
}

.ace-cloud9-day .ace_constant.ace_buildin {
  color: rgb(88, 72, 246);
}

.ace-cloud9-day .ace_constant.ace_language {
  color: rgb(88, 92, 246);
}

.ace-cloud9-day .ace_constant.ace_library {
  color: rgb(6, 150, 14);
}

.ace-cloud9-day .ace_invalid {
  background-color: rgba(255, 0, 0, 0.1);
  color: red;
}

.ace-cloud9-day .ace_support.ace_function {
  color: rgb(60, 76, 114);
}

.ace-cloud9-day .ace_support.ace_constant {
  color: rgb(6, 150, 14);
}

.ace-cloud9-day .ace_support.ace_type,
.ace-cloud9-day .ace_support.ace_class {
  color: rgb(109, 121, 222);
}

.ace-cloud9-day .ace_keyword.ace_operator {
  color: rgb(104, 118, 135);
}

.ace-cloud9-day .ace_string {
  color: rgb(3, 106, 7);
}

.ace-cloud9-day .ace_comment {
  color: rgb(76, 136, 107);
}

.ace-cloud9-day .ace_comment.ace_doc {
  color: rgb(0, 102, 255);
}

.ace-cloud9-day .ace_comment.ace_doc.ace_tag {
  color: rgb(128, 159, 191);
}

.ace-cloud9-day .ace_constant.ace_numeric {
  color: rgb(0, 0, 205);
}

.ace-cloud9-day .ace_variable {
  color: rgb(49, 132, 149);
}

.ace-cloud9-day .ace_xml-pe {
  color: rgb(104, 104, 91);
}

.ace-cloud9-day .ace_entity.ace_name.ace_function {
  color: #0000A2;
}


.ace-cloud9-day .ace_heading {
  color: rgb(12, 7, 255);
}

.ace-cloud9-day .ace_list {
  color:rgb(185, 6, 144);
}

.ace-cloud9-day .ace_meta.ace_tag {
  color:rgb(0, 22, 142);
}

.ace-cloud9-day .ace_string.ace_regex {
  color: rgb(255, 0, 0)
}

.ace-cloud9-day .ace_marker-layer .ace_selection {
  background: rgb(181, 213, 255);
}
.ace-cloud9-day.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px white;
}
.ace-cloud9-day .ace_marker-layer .ace_step {
  background: rgb(247, 237, 137);
}

.ace-cloud9-day .ace_marker-layer .ace_stack {
  background: #BAE0A0;
}

.ace-cloud9-day .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgb(192, 192, 192);
}

.ace-cloud9-day .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.07);
}

.ace-cloud9-day .ace_gutter-active-line {
    background-color : #E5E5E5;
}

.ace-cloud9-day .ace_marker-layer .ace_selected-word {
  background: rgb(250, 250, 255);
  border: 1px solid rgb(200, 200, 250);
}

.ace-cloud9-day .ace_indent-guide {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;
}

/*# sourceURL=ace/css/ace-cloud9-day */</style><script src="./campground.js_files/javascript.js" charset="utf-8" async="" crossorigin="true"></script></head>
<body class="" id="q0">
    <link rel="stylesheet" type="text/css" href="./campground.js_files/loading-flat.css">

<script>
    var loadingIde = document.querySelector("#loadingide");
    document.body.className = "loading " + loadingIde.className;

    var messages = [
        "Share your code by sharing your workspace URL.",
        "Test your code in different browsers with the Sauce Labs plugin.",
        "Each workspace is its own Ubuntu virtual machine.",
        "Run 'dpkg -l' in the terminal to see all packages installed.",
        "Remember to run your code on port 8080, 8081, or 8082.",
        "Use the Collaborate panel when collaborating for optimal teamwork.",
        "It's better up here.",
        "Happy coding!",
        "Everything as you left it.",
        "Thank you Ada Lovelace!",
        "POST /desktop/era",
        "Try using VIM mode!",
        "Not your grandmother's IDE",
        "Makes your laptop cooler"
    ];
    
    var mac_keybindings = [
        "Press Ctrl-Option-Right to select the next instance of a word.",
        "Press Cmd-. to show all keyboard commands.",
        "To rename a variable, highlight it then press Option-Cmd-R.",
        "Press Option-W to close your current IDE tab.",
        "Press Cmd-D to delete the current line of code",
        "Press Option-Tab to go to the next IDE tab.",
        "Press Option-Shift-T to reopen a tab you closed.",
        "Press Option-T to open a new terminal at any time.",
        "Press Cmd-E to search for a file by name.",
        "Press Cmd-Shift-E to search for a function by name.",
        "Press Option-S to switch between a terminal and an editor.",
    ];
    
    var win_keybindings = [
        "Press Ctrl-Alt-Right to select the next instance of a word.",
        "Press Ctrl-. to show all keyboard commands.",
        "To rename a variable, highlight it then press Ctrl-Alt-R.",
        "Press Alt-W to close your current IDE tab.",
        "Press Ctrl-D to delete the current line of code",
        "Press Alt-Shift-T to reopen a tab you closed.",
        "Press Alt-T to open a new terminal at any time.",
        "Press Ctrl-E to search for a file by name.",
        "Press Ctrl-Shift-E to search for a function by name.",
        "Press Alt-S to switch between a terminal and an editor.",
    ];
    
    var isMac = (navigator.platform == "MacIntel" || navigator.platform == "Macintosh" || navigator.platform == "MacPPC");
    var platform_keybindings = isMac ? mac_keybindings : win_keybindings;
    messages = messages.concat(platform_keybindings);
    
    var idx = Math.floor(Math.random() * messages.length);
    if (idx == messages.length) idx = messages.length - 1;
    var msg = messages[idx];
    
    if (~location.hash.indexOf("create")) {
        msg = "Creating Your New Workspace";
        location.hash = location.hash.replace(/&?create/, "");
    }
    
    document.querySelector("#loadingide .cool-message").innerHTML = msg;

    setTimeout(function(){
        var s = document.querySelector("#loadingide .status");
        if (s) s.style.display = "block";
    }, 2000);
    
    window.hideLoader = function(){
        var loader = document.getElementById("loadingcontainer");
        loader.parentNode.removeChild(loader);
        
        document.body.className = document.body.className.replace("loading " + loadingIde.className, "");
    }
</script>

    <script src="./campground.js_files/bootstrap.js"></script>
    <script>
        var plugins = [{"packagePath":"plugins/c9.core/c9","startdate":"2016-09-19T18:32:44.598Z","version":"3.1.3089 (c15a4f6da7e05b28d54a94bdbe126f3133df6bd3)","debug":false,"workspaceId":"learnwithcolt/webdevbootcamp","workspaceDir":"/home/ubuntu/workspace","name":"webdevbootcamp","readonly":true,"isAdmin":false,"staticUrl":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static","hosted":true,"hostname":"webdevbootcamp-learnwithcolt.c9.io","local":false,"env":"devel","home":"/home/ubuntu","platform":"linux","projectId":"2012808","projectName":"webdevbootcamp","configName":"default-ro","dashboardUrl":"https://c9.io/dashboard.html","readOnly":true},{"packagePath":"plugins/c9.core/settings","settings":"defaults","hosted":true,"template":"<settings><user /><project /><state><console expanded=\"false\">{\"type\":\"pane\",\"nodes\":[]}</console></state></settings>"},"plugins/c9.core/ext",{"packagePath":"plugins/c9.core/http-xhr","debug":false},"plugins/c9.core/util","plugins/c9.vfs.client/vfs.ping","plugins/c9.vfs.client/vfs.log",{"packagePath":"plugins/c9.vfs.client/vfs_client","debug":false,"installPath":"~/.c9","dashboardUrl":"https://c9.io/dashboard.html","accountUrl":"https://c9.io/account","rejectUnauthorized":true},{"packagePath":"plugins/c9.vfs.client/endpoint","readonly":true,"region":"usw","pid":"2012808","servers":[{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.6,"ts":1474309964291,"internalUrl":"http://vfs-gce-usw-120-prod:8043/vfs","url":"https://vfs-gce-usw-120-3.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.6,"ts":1474309963876,"internalUrl":"http://vfs-gce-usw-106-prod:8043/vfs","url":"https://vfs-gce-usw-106-3.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.61,"ts":1474309964237,"internalUrl":"http://vfs-gce-usw-84-prod:8043/vfs","url":"https://vfs-gce-usw-84-3.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.61,"ts":1474309963642,"internalUrl":"http://vfs-gce-usw-119-prod:8042/vfs","url":"https://vfs-gce-usw-119-2.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.61,"ts":1474309964201,"internalUrl":"http://vfs-gce-usw-84-prod:8042/vfs","url":"https://vfs-gce-usw-84-2.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.61,"ts":1474309964499,"internalUrl":"http://vfs-gce-usw-94-prod:8041/vfs","url":"https://vfs-gce-usw-94-1.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.61,"ts":1474309963872,"internalUrl":"http://vfs-gce-usw-83-prod:8042/vfs","url":"https://vfs-gce-usw-83-2.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.61,"ts":1474309964161,"internalUrl":"http://vfs-gce-usw-102-prod:8043/vfs","url":"https://vfs-gce-usw-102-3.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.61,"ts":1474309964480,"internalUrl":"http://vfs-gce-usw-84-prod:8041/vfs","url":"https://vfs-gce-usw-84-1.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.61,"ts":1474309964144,"internalUrl":"http://vfs-gce-usw-112-prod:8041/vfs","url":"https://vfs-gce-usw-112-1.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.61,"ts":1474309964088,"internalUrl":"http://vfs-gce-usw-120-prod:8042/vfs","url":"https://vfs-gce-usw-120-2.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.61,"ts":1474309964402,"internalUrl":"http://vfs-gce-usw-93-prod:8044/vfs","url":"https://vfs-gce-usw-93-4.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.61,"ts":1474309963662,"internalUrl":"http://vfs-gce-usw-94-prod:8044/vfs","url":"https://vfs-gce-usw-94-4.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.61,"ts":1474309964272,"internalUrl":"http://vfs-gce-usw-121-prod:8043/vfs","url":"https://vfs-gce-usw-121-3.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.61,"ts":1474309963806,"internalUrl":"http://vfs-gce-usw-88-prod:8044/vfs","url":"https://vfs-gce-usw-88-4.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.61,"ts":1474309964221,"internalUrl":"http://vfs-gce-usw-120-prod:8041/vfs","url":"https://vfs-gce-usw-120-1.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.61,"ts":1474309963564,"internalUrl":"http://vfs-gce-usw-79-prod:8042/vfs","url":"https://vfs-gce-usw-79-2.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.62,"ts":1474309963701,"internalUrl":"http://vfs-gce-usw-79-prod:8043/vfs","url":"https://vfs-gce-usw-79-3.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.62,"ts":1474309963638,"internalUrl":"http://vfs-gce-usw-94-prod:8042/vfs","url":"https://vfs-gce-usw-94-2.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.62,"ts":1474309964074,"internalUrl":"http://vfs-gce-usw-83-prod:8041/vfs","url":"https://vfs-gce-usw-83-1.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.62,"ts":1474309963657,"internalUrl":"http://vfs-gce-usw-87-prod:8043/vfs","url":"https://vfs-gce-usw-87-3.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.62,"ts":1474309963653,"internalUrl":"http://vfs-gce-usw-121-prod:8042/vfs","url":"https://vfs-gce-usw-121-2.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.62,"ts":1474309963820,"internalUrl":"http://vfs-gce-usw-112-prod:8043/vfs","url":"https://vfs-gce-usw-112-3.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.62,"ts":1474309964140,"internalUrl":"http://vfs-gce-usw-104-prod:8042/vfs","url":"https://vfs-gce-usw-104-2.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.62,"ts":1474309963572,"internalUrl":"http://vfs-gce-usw-119-prod:8043/vfs","url":"https://vfs-gce-usw-119-3.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.62,"ts":1474309964409,"internalUrl":"http://vfs-gce-usw-122-prod:8044/vfs","url":"https://vfs-gce-usw-122-4.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.62,"ts":1474309963991,"internalUrl":"http://vfs-gce-usw-106-prod:8041/vfs","url":"https://vfs-gce-usw-106-1.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.62,"ts":1474309963787,"internalUrl":"http://vfs-gce-usw-78-prod:8043/vfs","url":"https://vfs-gce-usw-78-3.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.62,"ts":1474309963687,"internalUrl":"http://vfs-gce-usw-93-prod:8042/vfs","url":"https://vfs-gce-usw-93-2.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.62,"ts":1474309963953,"internalUrl":"http://vfs-gce-usw-83-prod:8044/vfs","url":"https://vfs-gce-usw-83-4.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.62,"ts":1474309964445,"internalUrl":"http://vfs-gce-usw-118-prod:8043/vfs","url":"https://vfs-gce-usw-118-3.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.62,"ts":1474309963908,"internalUrl":"http://vfs-gce-usw-96-prod:8043/vfs","url":"https://vfs-gce-usw-96-3.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.62,"ts":1474309964436,"internalUrl":"http://vfs-gce-usw-93-prod:8043/vfs","url":"https://vfs-gce-usw-93-3.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.62,"ts":1474309963713,"internalUrl":"http://vfs-gce-usw-104-prod:8041/vfs","url":"https://vfs-gce-usw-104-1.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.62,"ts":1474309963863,"internalUrl":"http://vfs-gce-usw-78-prod:8041/vfs","url":"https://vfs-gce-usw-78-1.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.62,"ts":1474309963917,"internalUrl":"http://vfs-gce-usw-79-prod:8044/vfs","url":"https://vfs-gce-usw-79-4.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.62,"ts":1474309964287,"internalUrl":"http://vfs-gce-usw-120-prod:8044/vfs","url":"https://vfs-gce-usw-120-4.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.62,"ts":1474309963847,"internalUrl":"http://vfs-gce-usw-112-prod:8042/vfs","url":"https://vfs-gce-usw-112-2.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.62,"ts":1474309964195,"internalUrl":"http://vfs-gce-usw-96-prod:8041/vfs","url":"https://vfs-gce-usw-96-1.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.62,"ts":1474309964268,"internalUrl":"http://vfs-gce-usw-121-prod:8044/vfs","url":"https://vfs-gce-usw-121-4.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.63,"ts":1474309964209,"internalUrl":"http://vfs-gce-usw-102-prod:8044/vfs","url":"https://vfs-gce-usw-102-4.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.63,"ts":1474309963728,"internalUrl":"http://vfs-gce-usw-78-prod:8042/vfs","url":"https://vfs-gce-usw-78-2.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.63,"ts":1474309964098,"internalUrl":"http://vfs-gce-usw-118-prod:8044/vfs","url":"https://vfs-gce-usw-118-4.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.63,"ts":1474309964558,"internalUrl":"http://vfs-gce-usw-104-prod:8044/vfs","url":"https://vfs-gce-usw-104-4.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.63,"ts":1474309963650,"internalUrl":"http://vfs-gce-usw-87-prod:8044/vfs","url":"https://vfs-gce-usw-87-4.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.63,"ts":1474309963587,"internalUrl":"http://vfs-gce-usw-84-prod:8044/vfs","url":"https://vfs-gce-usw-84-4.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.63,"ts":1474309963653,"internalUrl":"http://vfs-gce-usw-96-prod:8044/vfs","url":"https://vfs-gce-usw-96-4.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.63,"ts":1474309964227,"internalUrl":"http://vfs-gce-usw-86-prod:8042/vfs","url":"https://vfs-gce-usw-86-2.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.63,"ts":1474309964536,"internalUrl":"http://vfs-gce-usw-106-prod:8044/vfs","url":"https://vfs-gce-usw-106-4.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.63,"ts":1474309963815,"internalUrl":"http://vfs-gce-usw-119-prod:8041/vfs","url":"https://vfs-gce-usw-119-1.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.63,"ts":1474309964014,"internalUrl":"http://vfs-gce-usw-87-prod:8041/vfs","url":"https://vfs-gce-usw-87-1.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.63,"ts":1474309964138,"internalUrl":"http://vfs-gce-usw-70-prod:8042/vfs","url":"https://vfs-gce-usw-70-2.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.63,"ts":1474309963905,"internalUrl":"http://vfs-gce-usw-102-prod:8042/vfs","url":"https://vfs-gce-usw-102-2.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.63,"ts":1474309964190,"internalUrl":"http://vfs-gce-usw-121-prod:8041/vfs","url":"https://vfs-gce-usw-121-1.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.63,"ts":1474309963566,"internalUrl":"http://vfs-gce-usw-94-prod:8043/vfs","url":"https://vfs-gce-usw-94-3.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.63,"ts":1474309963971,"internalUrl":"http://vfs-gce-usw-88-prod:8042/vfs","url":"https://vfs-gce-usw-88-2.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.63,"ts":1474309964314,"internalUrl":"http://vfs-gce-usw-119-prod:8044/vfs","url":"https://vfs-gce-usw-119-4.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.64,"ts":1474309963865,"internalUrl":"http://vfs-gce-usw-78-prod:8044/vfs","url":"https://vfs-gce-usw-78-4.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.64,"ts":1474309963618,"internalUrl":"http://vfs-gce-usw-70-prod:8044/vfs","url":"https://vfs-gce-usw-70-4.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.64,"ts":1474309964231,"internalUrl":"http://vfs-gce-usw-122-prod:8042/vfs","url":"https://vfs-gce-usw-122-2.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.64,"ts":1474309964142,"internalUrl":"http://vfs-gce-usw-87-prod:8042/vfs","url":"https://vfs-gce-usw-87-2.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.64,"ts":1474309964180,"internalUrl":"http://vfs-gce-usw-86-prod:8041/vfs","url":"https://vfs-gce-usw-86-1.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.64,"ts":1474309963966,"internalUrl":"http://vfs-gce-usw-102-prod:8041/vfs","url":"https://vfs-gce-usw-102-1.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.64,"ts":1474309963802,"internalUrl":"http://vfs-gce-usw-122-prod:8043/vfs","url":"https://vfs-gce-usw-122-3.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.64,"ts":1474309964144,"internalUrl":"http://vfs-gce-usw-86-prod:8044/vfs","url":"https://vfs-gce-usw-86-4.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.64,"ts":1474309963789,"internalUrl":"http://vfs-gce-usw-106-prod:8042/vfs","url":"https://vfs-gce-usw-106-2.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.64,"ts":1474309963616,"internalUrl":"http://vfs-gce-usw-79-prod:8041/vfs","url":"https://vfs-gce-usw-79-1.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.65,"ts":1474309963580,"internalUrl":"http://vfs-gce-usw-122-prod:8041/vfs","url":"https://vfs-gce-usw-122-1.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.65,"ts":1474309963714,"internalUrl":"http://vfs-gce-usw-118-prod:8041/vfs","url":"https://vfs-gce-usw-118-1.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.65,"ts":1474309963896,"internalUrl":"http://vfs-gce-usw-118-prod:8042/vfs","url":"https://vfs-gce-usw-118-2.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.65,"ts":1474309964115,"internalUrl":"http://vfs-gce-usw-88-prod:8043/vfs","url":"https://vfs-gce-usw-88-3.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.65,"ts":1474309963845,"internalUrl":"http://vfs-gce-usw-112-prod:8044/vfs","url":"https://vfs-gce-usw-112-4.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.66,"ts":1474309963938,"internalUrl":"http://vfs-gce-usw-104-prod:8043/vfs","url":"https://vfs-gce-usw-104-3.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.66,"ts":1474309964333,"internalUrl":"http://vfs-gce-usw-88-prod:8041/vfs","url":"https://vfs-gce-usw-88-1.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.66,"ts":1474309964505,"internalUrl":"http://vfs-gce-usw-83-prod:8043/vfs","url":"https://vfs-gce-usw-83-3.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.67,"ts":1474309963792,"internalUrl":"http://vfs-gce-usw-93-prod:8041/vfs","url":"https://vfs-gce-usw-93-1.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.67,"ts":1474309964415,"internalUrl":"http://vfs-gce-usw-70-prod:8043/vfs","url":"https://vfs-gce-usw-70-3.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.67,"ts":1474309964341,"internalUrl":"http://vfs-gce-usw-86-prod:8043/vfs","url":"https://vfs-gce-usw-86-3.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.68,"ts":1474309963854,"internalUrl":"http://vfs-gce-usw-96-prod:8042/vfs","url":"https://vfs-gce-usw-96-2.c9.io/vfs"},{"region":"usw","version":"13","packageVersion":"3.1.3083","load":0.71,"ts":1474309963733,"internalUrl":"http://vfs-gce-usw-70-prod:8041/vfs","url":"https://vfs-gce-usw-70-1.c9.io/vfs"}],"updateServers":true,"strictRegion":false},{"packagePath":"plugins/c9.ide.auth/auth","accessToken":"token","ideBaseUrl":"https://c9.io","apiUrl":"https://api.c9.io","userId":"1000231"},{"packagePath":"plugins/c9.core/api","apiUrl":"https://api.c9.io","projectId":"2012808"},"plugins/c9.ide.editors/document",{"packagePath":"plugins/c9.ide.editors/editors","defaultEditor":"ace"},"plugins/c9.ide.editors/editor","plugins/c9.ide.editors/imgview",{"packagePath":"plugins/c9.ide.imgeditor/imgeditor","staticPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.imgeditor"},"plugins/c9.ide.editors/urlview","plugins/c9.ide.editors/tab",{"packagePath":"plugins/c9.ide.editors/tabmanager","loadFilesAtInit":false},{"packagePath":"plugins/c9.ide.editors/metadata"},"plugins/c9.ide.editors/pane","plugins/c9.ide.editors/undomanager","plugins/c9.ide.newresource/open","plugins/c9.ide.undo/undo",{"packagePath":"plugins/c9.ide.openfiles/openfiles","staticPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic","defaultShow":false},{"packagePath":"plugins/c9.ide.metrics/metrics","hosted":true},"plugins/c9.ide.keys/commands",{"packagePath":"plugins/c9.ide.ace/ace","staticPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic","workerPrefix":"/static"},{"packagePath":"plugins/c9.ide.ace.gotoline/gotoline","staticPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.ace.gotoline"},{"packagePath":"plugins/c9.ide.ace.statusbar/statusbar","staticPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic"},"plugins/c9.ide.ace.keymaps/keymaps","plugins/c9.ide.ace.keymaps/cli","plugins/c9.ide.ace.emmet/emmet",{"packagePath":"plugins/c9.ide.find/find","basePath":"/home/ubuntu/workspace"},{"packagePath":"plugins/c9.ide.find.replace/findreplace","staticPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.find.replace"},{"packagePath":"plugins/c9.ide.ui/ui","staticPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.ui"},"plugins/c9.ide.ui/anims","plugins/c9.ide.ui/tooltip",{"packagePath":"plugins/c9.ide.ui/menus","autoInit":true},"plugins/c9.ide.ui/forms",{"packagePath":"plugins/c9.ide.ui/widgets.list","staticPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic"},"plugins/c9.ide.ui/widgets.tree","plugins/c9.ide.ui/widgets.datagrid","plugins/c9.ide.ui/widgets.terminal","plugins/c9.ide.ui/focus","plugins/c9.ide.ui/lib_apf","plugins/c9.ide.dialog/dialog","plugins/c9.ide.dialog.common/alert","plugins/c9.ide.dialog.common/alert_internal","plugins/c9.ide.dialog.common/confirm","plugins/c9.ide.dialog.common/filechange","plugins/c9.ide.dialog.common/fileoverwrite","plugins/c9.ide.dialog.common/fileremove","plugins/c9.ide.dialog.common/info","plugins/c9.ide.dialog.common/question","plugins/c9.ide.dialog.common/upsell",{"packagePath":"plugins/c9.ide.dialog.common/error","staticPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic"},{"packagePath":"plugins/c9.ide.dialog.common/notification","staticPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic"},{"packagePath":"plugins/c9.ide.dialog.login/login","noLogout":true},"plugins/c9.ide.dialog.wizard/wizard","plugins/c9.fs/net",{"packagePath":"plugins/c9.fs/fs","baseProc":"/home/ubuntu/workspace"},"plugins/c9.fs/fs.errors","plugins/c9.fs/fs.cache.xml",{"packagePath":"plugins/c9.ide.readonly/access_control","dashboardUrl":"https://c9.io/dashboard.html","readonly":true},"plugins/c9.ide.threewaymerge/threewaymerge","plugins/c9.ide.watcher/watcher",{"packagePath":"plugins/c9.ide.watcher/gui","collab":true},{"packagePath":"plugins/c9.ide.language/language","workspaceDir":"/home/ubuntu/workspace","staticPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static","workerPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/../worker/"},"plugins/c9.ide.language.core/keyhandler","plugins/c9.ide.language.core/complete","plugins/c9.ide.language.core/quickfix","plugins/c9.ide.language.core/marker","plugins/c9.ide.language.core/refactor","plugins/c9.ide.language.core/tooltip","plugins/c9.ide.language.core/jumptodef","plugins/c9.ide.language/worker_util_helper",{"packagePath":"plugins/c9.ide.language.generic/generic"},"plugins/c9.ide.language.css/css","plugins/c9.ide.language.html/html","plugins/c9.ide.language.javascript/javascript","plugins/c9.ide.language.javascript.immediate/immediate","plugins/c9.ide.language.javascript.infer/jsinfer",{"packagePath":"plugins/c9.ide.language.javascript.tern/tern","plugins":[{"name":"angular","path":"tern/plugin/angular","enabled":true,"hidden":false},{"name":"doc_comment","path":"tern/plugin/doc_comment","enabled":true,"hidden":true},{"name":"es_modules","path":"tern/plugin/es_modules","enabled":true,"hidden":true},{"name":"modules","path":"tern/plugin/modules","enabled":true,"hidden":true},{"name":"node","path":"tern/plugin/node","enabled":true,"hidden":false},{"name":"requirejs","path":"tern/plugin/requirejs","enabled":true,"hidden":false},{"name":"architect_resolver","path":"./architect_resolver_worker","enabled":true,"hidden":true}],"defs":[{"name":"ecma5","enabled":true,"experimental":false,"firstClass":true,"path":"lib/tern/defs/ecma5.json"},{"name":"jQuery","enabled":true,"experimental":false,"path":"lib/tern/defs/jquery.json"},{"name":"browser","enabled":true,"experimental":false,"firstClass":true,"path":"lib/tern/defs/browser.json"},{"name":"underscore","enabled":false,"experimental":false,"path":"lib/tern/defs/underscore.json"},{"name":"chai","enabled":false,"experimental":false,"path":"lib/tern/defs/chai.json"}]},"plugins/c9.ide.language.javascript.tern/ui","plugins/c9.ide.language.javascript.tern/architect_resolver","plugins/c9.ide.language.javascript.eslint/eslint",{"packagePath":"plugins/c9.ide.language.python/python","pythonPath":"/usr/local/lib/python2.7/dist-packages:/usr/local/lib/python3.4/dist-packages:/usr/local/lib/python3.5/dist-packages"},"plugins/c9.ide.language.go/go",{"packagePath":"plugins/c9.ide.language.jsonalyzer/jsonalyzer","workspaceDir":"/home/ubuntu/workspace","homeDir":"/home/ubuntu","useCollab":true,"useSend":false,"maxServerCallInterval":2000},{"packagePath":"plugins/c9.ide.run.debug/debuggers/socket","nodeBin":"/mnt/shared/sbin/node"},{"packagePath":"plugins/c9.ide.immediate/immediate","staticPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic"},"plugins/c9.ide.immediate/evaluator","plugins/c9.ide.immediate/evaluators/browserjs","plugins/c9.ide.immediate/evaluators/bash",{"packagePath":"plugins/c9.ide.terminal/predict_echo"},{"packagePath":"plugins/c9.ide.terminal.monitor/monitor"},{"packagePath":"plugins/c9.ide.terminal.monitor/message_view","staticPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic"},"plugins/c9.ide.terminal/opentermhere",{"packagePath":"plugins/c9.ide.console/console","staticPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic","defaultState":{"type":"pane","nodes":[{"type":"tab","editorType":"immediate"}]}},{"packagePath":"plugins/c9.ide.layout.classic/layout","staticPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic","dashboardUrl":"https://c9.io/dashboard.html","cdn":true},"plugins/c9.ide.theme.flat/flat-light","plugins/c9.ide.theme.flat/flat-dark",{"packagePath":"plugins/c9.ide.layout.classic/preload","themePrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/../skin/default-ro","defaultTheme":"flat-light"},{"packagePath":"plugins/c9.ide.tree/tree","staticPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic","defaultExpanded":true},{"packagePath":"plugins/c9.ide.tree/favorites","startEmpty":false,"alwaysScope":false,"realRoot":true,"home":"~"},{"packagePath":"plugins/c9.ide.navigate/navigate","loadListAtInit":false},{"packagePath":"plugins/c9.ide.keys/panel"},{"packagePath":"plugins/c9.ide.language.core/outline","staticPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.language"},{"packagePath":"plugins/c9.ide.panels/panels","staticPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic","defaultActiveLeft":"tree"},"plugins/c9.ide.panels/panel","plugins/c9.ide.panels/area","plugins/c9.ide.processlist/processlist",{"packagePath":"plugins/c9.ide.installer/gui","staticPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic"},"plugins/c9.automate/automate","plugins/c9.ide.installer/commands/centos","plugins/c9.ide.installer/commands/darwin","plugins/c9.ide.installer/commands/bash","plugins/c9.ide.installer/commands/npm","plugins/c9.ide.installer/commands/npm-g","plugins/c9.ide.installer/commands/pip","plugins/c9.ide.installer/commands/gem","plugins/c9.ide.installer/commands/zip","plugins/c9.ide.installer/commands/symlink","plugins/c9.ide.installer/commands/message",{"packagePath":"plugins/c9.ide.installer/commands/tar.gz"},"plugins/c9.ide.installer/commands/ubuntu",{"packagePath":"plugins/c9.ide.installer/installer","installSelfCheck":false,"installPath":"~/.c9"},{"packagePath":"plugins/c9.ide.preview/preview","staticPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.preview","defaultPreviewer":"preview.browser","previewUrl":"https://preview.c9users.io/learnwithcolt/webdevbootcamp","local":false},"plugins/c9.ide.preview/previewer","plugins/c9.ide.preview/previewers/raw",{"packagePath":"plugins/c9.ide.preview.browser/browser","local":false,"staticPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.preview.browser"},{"packagePath":"plugins/c9.ide.preview.markdown/markdown","staticPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static","htmlPath":"/plugins/c9.ide.preview.markdown/markdown.html","local":false},"plugins/c9.ide.remote/manager","plugins/c9.ide.remote/documents/htmldocument","plugins/c9.ide.remote/documents/cssdocument","plugins/c9.ide.remote/documents/jsdocument",{"packagePath":"plugins/c9.ide.remote/transports/postmessage","previewBaseUrl":"https://preview.c9users.io"},"plugins/c9.ide.format/format","plugins/c9.ide.format/formatters/jsbeautify","plugins/c9.ide.download/download",{"packagePath":"plugins/c9.ide.info/info","installPath":"~/.c9","user":{"id":"1000231","name":"cyberhedzmedia","fullname":"cyberhedzmedia","email":"cyberhedzmedia@gmail.com","date_add":1453743187284,"active":false,"premium":false,"region":"usw"},"project":{"id":"2012808","name":"webdevbootcamp","contents":"nodejs","descr":"","remote":{"name":"dev_server","type":"docker","state":1,"metadata":{"user":"ubuntu","host":"docker-gce-usw-297-prod","cid":"2112e7e3fa6755f579d5fe31129c6ce721e23f2c80b598c9b9a8deb74a15424e","sshPort":16725,"webPort":47290,"webPorts":"47290,31219,18498","container":{"state":2,"name":"learnwithcolt-webdevbootcamp-2012808","region":"usw","url":"http://docker-gce-usw-297-prod:5000/daemon/containers/2112e7e3fa6755f579d5fe31129c6ce721e23f2c80b598c9b9a8deb74a15424e","image":"ws-nodejs:2015-04-17T13-02-00Z","cpu":1,"disk":10240,"ram":512,"project":2012808,"host":"docker-gce-usw-297-prod","sshPort":16725,"webPort":47290,"webPorts":"47290,31219,18498","last_stopped":0,"id":"2112e7e3fa6755f579d5fe31129c6ce721e23f2c80b598c9b9a8deb74a15424e"},"basePath":"/home/ubuntu","home":"/home/ubuntu"},"date_add":1444888073240,"date_lch":1460428481859,"id":20013002},"premium":true}},{"packagePath":"plugins/c9.ide.help/help","staticPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.help"},{"packagePath":"plugins/c9.ide.guide/guide","staticPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.guide"},{"packagePath":"plugins/c9.ide.guide/default"},"plugins/c9.ide.recentfiles/recentfiles",{"packagePath":"plugins/c9.ide.clipboard/clipboard","local":false},{"packagePath":"plugins/c9.ide.clipboard/html5"},"plugins/c9.ide.behaviors/tabs",{"packagePath":"plugins/c9.ide.behaviors/page","staticPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.behaviors"},{"packagePath":"plugins/c9.ide.login/login","staticPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.login","ideBaseUrl":"https://c9.io","dashboardUrl":"https://c9.io/dashboard.html","accountUrl":"https://c9.io/account","local":false},{"packagePath":"plugins/c9.ide.pubsub/pubsub-client"},{"packagePath":"plugins/c9.ide.collab/notifications/bubble","staticPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.collab/notifications"},"plugins/c9.ide.scm/v1/scm","plugins/c9.ide.scm/v1/scmpanel","plugins/c9.ide.scm/v1/detail","plugins/c9.ide.scm/v1/log","plugins/c9.ide.scm/v1/git","plugins/c9.ide.scm/v1/editor","plugins/c9.ide.scm/mergetool",{"packagePath":"plugins/c9.ide.errorhandler/raygun_error_handler","version":"3.1.3089","revision":"c15a4f6da7e05b28d54a94bdbe126f3133df6bd3","apiKey":"oAWXpk7YEA/159qIzY4HCw=="},{"packagePath":"plugins/c9.ide.collab/connect","enable":true,"debug":false,"localServerFile":true,"nodeBin":"/mnt/shared/sbin/node","nodePath":"/mnt/shared/lib/node_modules","basePath":"/home/ubuntu/workspace"},"plugins/c9.ide.collab/collab","plugins/c9.ide.collab/collabpanel",{"packagePath":"plugins/c9.ide.collab/workspace","hosted":true,"isAdmin":false},"plugins/c9.ide.collab/util",{"packagePath":"plugins/c9.ide.collab/ot/document","minDelay":500,"maxDelay":10000},{"packagePath":"plugins/c9.ide.collab/cursor_layer","staticPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.collab"},"plugins/c9.ide.collab/author_layer",{"packagePath":"plugins/c9.ide.collab/timeslider/timeslider","staticPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.collab/timeslider"},{"packagePath":"plugins/c9.ide.collab/notifications/notifications","hosted":true,"isAdmin":false},"plugins/c9.ide.collab/members/members_panel",{"packagePath":"plugins/c9.ide.collab/share/share","previewUrl":"https://preview.c9users.io/learnwithcolt/webdevbootcamp","local":false},{"packagePath":"plugins/c9.ide.collab/members/members","staticPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic"},{"packagePath":"plugins/c9.ide.collab/chat/chat","staticPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.collab/chat"},{"packagePath":"plugins/c9.ide.language.codeintel/codeintel","preinstalled":true,"paths":{"php":".:./vendor"}},"plugins/c9.vfs.client/vfs.listener","plugins/c9.ide.analytics/cookie",{"packagePath":"plugins/c9.ide.analytics/analytics","secret":"661kw1sv26","flushAt":20,"integrations":{"All":true}},"plugins/c9.ide.analytics/debug",{"packagePath":"plugins/c9.ide.performancestats/stats","writeInterval":300000,"readInterval":10000,"diskRange":[1024,10240,1024],"ramRange":[256,2560,256],"cpuRange":null},"plugins/c9.ide.performancestats/stats_analytics",{"packagePath":"plugins/c9.ide.restore/restore","ideBaseUrl":"https://c9.io","staticPrefix":"https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic"},{"packagePath":"plugins/c9.ide.upgrade/upgrade","accountUrl":"https://c9.io/account","ideBaseUrl":"https://c9.io","defaultProduct":"webide"},{"packagePath":"plugins/c9.ide.help.support/support","baseurl":"https://c9.io","userSnapApiKey":"e3d3b232-1c21-4961-b73d-fbc8dc7be1c3","screenshotSupport":true},{"packagePath":"plugins/c9.ide.language.trace/trace"},{"packagePath":"plugins/c9.ide.language.trace/ui","workspaceDir":"/home/ubuntu/workspace"},"plugins/c9.ide.services/linked-services","plugins/c9.ide.local/c9projectmanager","plugins/c9.ide.abtesting/abtesting",{"packagePath":"plugins/c9.ide.readonly/readonly","shouldShowError":false},"plugins/c9.ide.readonly/save","plugins/c9.ide.readonly/finder","plugins/c9.ide.readonly/preferences","plugins/c9.ide.readonly/proc"];
        var start = Date.now();
    
        
            var staticPrefix = "https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static"
            if (location.href.indexOf("debug=1") > -1) {
                staticPrefix = staticPrefix.replace(/(\/nc-[^\/]+)(\/)/, "$1-uc$2");
                plugins.forEach(function(p) {
                    if (p && p.workerPrefix && /^http/.test(p.workerPrefix))
                        p.workerPrefix = p.workerPrefix.replace(/(\/nc-[^\/]+)(\/)/, "$1-uc$2");
                });
            }
            
                var background = staticPrefix + "/../config/default-ro.js";
            
            var preload = null;
        
        
        var a = auth({
            clientId: "ide_postmessage",
            authorizationUrl: "https://c9.io/api/nc/auth",
            loginHint: location.pathname.split("/")[1],
            background: background,
            preload: preload,
            onLoad: main
        });
        
        var login = a.login;
        delete window.auth;
        
        function main(err, token) {
            
            
            // TODO show message
            if (err) {
                console.error(err);
                alert(err.error);
                return;
            }
            
            plugins.push({
                consumes: [],
                provides: ["auth.bootstrap"],
                setup: function(options, imports, register) {
                    register(null, {
                        "auth.bootstrap": {
                            login: login
                        }
                    });
                }
            });
            
            require(["lib/architect/architect"], function (architect) {
                architect.resolveConfig(plugins, function (err, config) {
                    if (err) throw err;
                    
                    config.forEach(function(plugin) {
                        if ("accessToken" in plugin)
                            plugin.accessToken = token;
                    });
                    
                    var app = architect.createApp(config, function(err, app) {
                        if (err) {
                            console.error("Error while loading:", err.stack || err);
                            if (app && app.services["dialog.error"]) {
                                app.services["dialog.error"].show("Error while loading: " + err.message + ". Please contact support if this persists.");
                            }
                            else {
                                alert(err.message);
                            }
                            window.hideLoader && window.hideLoader();
                        }
                        console.log("Architect app started");
                        
                        window.vfs = app.getService("vfs").vfs;
                    });
                    
                    if (!app) return;
                    
                    app.lut = {};
                    
                    app.on("error", function(err){
                        throw err;
                        debugger;
                    });
                    
                    app.on("service", function(name, plugin, options) {
                        if (name == "plugin.loader" || name == "plugin.installer" 
                          || name == "plugin.debug" || name == "plugin.manager"
                          || name == "plugin.test")
                            plugin.architect = app;
                        if (name == "c9")
                            plugin.startLoadTime = start;
                        if (!plugin.name)
                            plugin.name = name;
                        if (options)
                            app.lut[(options.packagePath || "").replace(/^.*\/home\/.c9\//, "")] = options;
                            
                        // console.log("Service loaded " + name);
                    });
                    app.once("ready", function() {
                        
                        
                        if (app.services.configure)
                            app.services.configure.services = app.services;

                        app.services.c9.ready();
                        app.services.c9.totalLoadTime = Date.now() - start;
                        
                        console.warn("Total Load Time: ", Date.now() - start);
                        
                        if (window.hideLoader)
                            window.hideLoader();
                    });
                });
            });
        }
        
    </script>

<div class="sbios sbiosDisabled" id="q1" style="display: none; z-index: 100000;">
                <div class="filler">
                    <div class="indicator">
                        <div class="indi_left"></div>
                        <div class="indi_middle"></div>
                        <div class="indi_right"></div>
                    </div>
                </div>
                <div class="mainrail"></div>
                <span> </span>
            </div><div class="vsplitbox" id="q3" style="position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px;"><div class="basic" style="position: absolute; height: 50px; display: block; left: 0px; top: 0px; right: 0px;">
            <div class="notificationlabel" style="display: block; z-index: 9999; margin-top: 0px;"><u class="close"></u><div class="c9-readonly">You are in Read-Only Mode. </div></div></div><div class="vsplitbox" style="position: absolute; left: 0px; top: 50px; right: 0px; bottom: 0px;"><div class="c9-menu-bar" style="position: absolute; height: 40px; left: 0px; top: 0px; right: 0px;">
                <div class="c9-mbar-logo">
                    <div class="c9-mbar-bcont">
                        <div class="c9-mbar-cont" id="q2"> <div class="basic fakehbox aligncenter menubar" style="padding : 0 5px 0 3px;position:static" id="q5">
            <div class="c9-simple-btn c9-mbar-minimize c9-simple-btnEmpty"></div><div class="c9-menu-btn c9-menu-btnBool c9btn" style="margin: 0px; min-width: 26px;">Cloud9<div class="c9-fix"></div>
                <div class="icon"></div>
            </div><div class="c9-menu-btn c9-menu-btnBool" style="margin: 0px; min-width: 26px;">File<div class="c9-fix"></div>
                <div class="icon"></div>
            </div><div class="c9-menu-btn c9-menu-btnBool" style="margin: 0px; min-width: 26px;">Edit<div class="c9-fix"></div>
                <div class="icon"></div>
            </div><div class="c9-menu-btn c9-menu-btnBool" style="margin: 0px; min-width: 26px;">Find<div class="c9-fix"></div>
                <div class="icon"></div>
            </div><div class="c9-menu-btn c9-menu-btnBool" style="margin: 0px; min-width: 26px;">View<div class="c9-fix"></div>
                <div class="icon"></div>
            </div><div class="c9-menu-btn c9-menu-btnBool" style="margin: 0px; min-width: 26px;">Goto<div class="c9-fix"></div>
                <div class="icon"></div>
            </div><div class="c9-menu-btn c9-menu-btnBool" style="margin: 0px; min-width: 26px;">Tools<div class="c9-fix"></div>
                <div class="icon"></div>
            </div><div class="c9-menu-btn c9-menu-btnBool " style="margin: 0px; min-width: 26px;">Window<div class="c9-fix"></div>
                <div class="icon"></div>
            </div><div class="c9-menu-btn c9-menu-btnBool " style="margin: 0px; min-width: 26px;">Support<div class="c9-fix"></div>
                <div class="icon"></div>
            </div></div><div class="basic fakehbox aligncenter padding3 bartools" style="padding-top: 1px; height: 25px;" id="q4">
            <div class="c9-divider-double menudivider">
                <div></div>
            </div><div class="c9-toolbarbutton-glossy preview c9-toolbarbutton-glossyBool">
                <div class="c9-icon"> </div>
                <div class="c9-label">Preview</div>
            </div></div><div class="basic fakehbox aligncenter" style="float:right;margin-right:-11px;" id="q14">
            <div class="c9-menu-btn c9-menu-btnBool btnName c9-menu-btnIcon" title="mason stenquist" style="margin: 0px; min-width: 26px; color: rgb(255, 133, 13);">user_340898<div class="c9-fix"></div>
                <div class="icon" style="background-image: url(&quot;https://secure.gravatar.com/avatar/613f10dca5733c9ebbe9632f31ef06db?s=32&amp;d=retro&quot;); background-size: 16px 16px;"></div>
            </div><div class="c9-menu-btn c9-menu-btnBool btnName c9-menu-btnIcon" title="Michael Vexler" style="margin: 0px; min-width: 26px; color: rgb(252, 255, 36);">user_475223<div class="c9-fix"></div>
                <div class="icon" style="background-image: url(&quot;https://secure.gravatar.com/avatar/13d96250b4e80cb6c6d23a81d836cf6c?s=32&amp;d=retro&quot;); background-size: 16px 16px;"></div>
            </div><div class="c9-menu-btn c9-menu-btnBool btnName c9-menu-btnIcon" title="Mauricio Lombard" style="margin: 0px; min-width: 26px; color: rgb(40, 14, 255);">user_695643<div class="c9-fix"></div>
                <div class="icon" style="background-image: url(&quot;https://secure.gravatar.com/avatar/e5a45709c74ce241ecee3f49df415192?s=32&amp;d=retro&quot;); background-size: 16px 16px;"></div>
            </div><div class="c9-menu-btn c9-menu-btnBool btnName c9-menu-btnIcon" title="ralomicron" style="margin: 0px; min-width: 26px; color: rgb(85, 79, 255);">user_1080850<div class="c9-fix"></div>
                <div class="icon" style="background-image: url(&quot;https://secure.gravatar.com/avatar/837a7418c39116fdc37e400a0813dcbe?s=32&amp;d=retro&quot;); background-size: 16px 16px;"></div>
            </div><div class="c9-menu-btn c9-menu-btnBool btnName c9-menu-btnIcon" title="George Skrimpas" style="margin: 0px; min-width: 26px; color: rgb(255, 57, 248);">user_1233925<div class="c9-fix"></div>
                <div class="icon" style="background-image: url(&quot;https://secure.gravatar.com/avatar/6ac608aa698593c0bfac5764b77dcfa0?s=32&amp;d=retro&quot;); background-size: 16px 16px;"></div>
            </div><div class="c9-menu-btn c9-menu-btnBool btnName c9-menu-btnIcon" title="Roman Dubovik" style="margin: 0px; min-width: 26px; color: rgb(255, 28, 204);">user_1273826<div class="c9-fix"></div>
                <div class="icon" style="background-image: url(&quot;https://secure.gravatar.com/avatar/5d20b0f61f0bdd54fab6682116448d1b?s=32&amp;d=retro&quot;); background-size: 16px 16px;"></div>
            </div><div class="c9-menu-btn c9-menu-btnBool btnName c9-menu-btnIcon" title="haoduolan" style="margin: 0px; min-width: 26px; color: rgb(131, 255, 79);">user_1308143<div class="c9-fix"></div>
                <div class="icon" style="background-image: url(&quot;https://secure.gravatar.com/avatar/a9df5dda6bb28781a256cefceeb713d4?s=32&amp;d=retro&quot;); background-size: 16px 16px;"></div>
            </div><div class="c9-menu-btn c9-menu-btnBool btnName c9-menu-btnIcon" title="Olaolu Adisa" style="margin: 0px; min-width: 26px; color: rgb(254, 121, 223);">user_1397059<div class="c9-fix"></div>
                <div class="icon" style="background-image: url(&quot;https://secure.gravatar.com/avatar/afdaf0fa19ad3482113f8ec0508ea296?s=32&amp;d=retro&quot;); background-size: 16px 16px;"></div>
            </div><div class="c9-menu-btn c9-menu-btnBool btnName c9-menu-btnIcon" title="Michael Brand" style="margin: 0px; min-width: 26px; color: rgb(71, 255, 222);">user_1414166<div class="c9-fix"></div>
                <div class="icon" style="background-image: url(&quot;https://secure.gravatar.com/avatar/e9abc6c5186f6083f88eead29897443e?s=32&amp;d=retro&quot;); background-size: 16px 16px;"></div>
            </div><div class="c9-menu-btn c9-menu-btnBool btnName c9-menu-btnIcon" title="Madeline Baker" style="margin: 0px; min-width: 26px; color: rgb(177, 59, 255);">user_1414789<div class="c9-fix"></div>
                <div class="icon" style="background-image: url(&quot;https://secure.gravatar.com/avatar/ae4148b3a384da31c6aace92d64116fe?s=32&amp;d=retro&quot;); background-size: 16px 16px;"></div>
            </div><div class="c9-menu-btn c9-menu-btnBool btnName c9-menu-btnIcon" title="Mark Fu" style="margin: 0px; min-width: 26px; color: rgb(255, 103, 51);">user_1420246<div class="c9-fix"></div>
                <div class="icon" style="background-image: url(&quot;https://secure.gravatar.com/avatar/ad53fb77993bb732cd620f60f2f3ba53?s=32&amp;d=retro&quot;); background-size: 16px 16px;"></div>
            </div><div class="c9-menu-btn c9-menu-btnBool btnName c9-menu-btnIcon" title="Josephine" style="margin: 0px; min-width: 26px; color: rgb(118, 255, 111);">user_1421221<div class="c9-fix"></div>
                <div class="icon" style="background-image: url(&quot;https://secure.gravatar.com/avatar/5891aa52fbee18a1c9c9f0f53b2c90ec?s=32&amp;d=retro&quot;); background-size: 16px 16px;"></div>
            </div><div class="c9-menu-btn c9-menu-btnBool btnName c9-menu-btnIcon" title="Kristof" style="margin: 0px; min-width: 26px; color: rgb(255, 75, 70);">user_1425513<div class="c9-fix"></div>
                <div class="icon" style="background-image: url(&quot;https://secure.gravatar.com/avatar/2bb253de63dfb267c2aa963d173da402?s=32&amp;d=retro&quot;); background-size: 16px 16px;"></div>
            </div><div class="c9-menu-btn c9-menu-btnBool btnName c9-menu-btnIcon" title="Grace" style="margin: 0px; min-width: 26px; color: rgb(99, 57, 255);">user_1427241<div class="c9-fix"></div>
                <div class="icon" style="background-image: url(&quot;https://secure.gravatar.com/avatar/ddadd5fef3e57ba545a2898290aafca8?s=32&amp;d=retro&quot;); background-size: 16px 16px;"></div>
            </div><div class="c9-menu-btn c9-menu-btnBool btnName c9-menu-btnIcon" title="nateW" style="margin: 0px; min-width: 26px; color: rgb(97, 255, 232);">user_1434106<div class="c9-fix"></div>
                <div class="icon" style="background-image: url(&quot;https://secure.gravatar.com/avatar/96614a52166dba20ae90dedae4a84c47?s=32&amp;d=retro&quot;); background-size: 16px 16px;"></div>
            </div><div class="c9-menu-btn c9-menu-btnBool btnName c9-menu-btnIcon" title="A D" style="margin: 0px; min-width: 26px; color: rgb(69, 80, 255);">user_1445662<div class="c9-fix"></div>
                <div class="icon" style="background-image: url(&quot;https://secure.gravatar.com/avatar/9029be945f76ccb3b3be4e03fe4bec90?s=32&amp;d=retro&quot;); background-size: 16px 16px;"></div>
            </div><div class="c9-menu-btn c9-menu-btnBool btnName c9-menu-btnIcon" title="Rachana Rajurwar" style="margin: 0px; min-width: 26px; color: rgb(99, 255, 78);">user_1445682<div class="c9-fix"></div>
                <div class="icon" style="background-image: url(&quot;https://secure.gravatar.com/avatar/b603feefdb07ae5885cfa94bcfc4da6c?s=32&amp;d=retro&quot;); background-size: 16px 16px;"></div>
            </div><div class="c9-menu-btn c9-menu-btnBool btnName c9-menu-btnIcon" title="Neil MacAnanny" style="margin: 0px; min-width: 26px; color: rgb(102, 23, 255);">user_1447307<div class="c9-fix"></div>
                <div class="icon" style="background-image: url(&quot;https://secure.gravatar.com/avatar/000ec88e1e3d5c458c24781559c0c3f6?s=32&amp;d=retro&quot;); background-size: 16px 16px;"></div>
            </div><div class="c9-menu-btn c9-menu-btnBool btnName c9-menu-btnIcon" title="Luan Young" style="margin: 0px; min-width: 26px; color: rgb(255, 231, 35);">user_1449517<div class="c9-fix"></div>
                <div class="icon" style="background-image: url(&quot;https://secure.gravatar.com/avatar/ca4795fb694d6528a8fd9905a8ffc33b?s=32&amp;d=retro&quot;); background-size: 16px 16px;"></div>
            </div><div class="c9-menu-btn c9-menu-btnBool btnName c9-menu-btnIcon" title="Anthony Benites" style="margin: 0px; min-width: 26px; color: rgb(26, 82, 255);">user_1449705<div class="c9-fix"></div>
                <div class="icon" style="background-image: url(&quot;https://secure.gravatar.com/avatar/0f58139ededb54a49f425e8808e9a196?s=32&amp;d=retro&quot;); background-size: 16px 16px;"></div>
            </div><div class="c9-menu-btn c9-menu-btnBool btnName c9-menu-btnIcon" title="cyberhedzmedia" style="margin: 0px; min-width: 26px;">cyberhedzmedia<div class="c9-fix"></div>
                <div class="icon" style="background-image: url(&quot;https://secure.gravatar.com/avatar/a5f919647619a693a20d2d6c455ba6a5?s=32&amp;d=retro&quot;); background-size: 16px 16px;"></div>
            </div><div class="c9-menu-btn" title="Cancel Pending Access Request" style="min-width: 26px;">Cancel Access Request<div class="c9-fix"></div>
                <div class="icon"></div>
            </div><div class="c9-divider-double extrasdivider">
                <div></div>
            </div></div></div>

                        <div class="c9-mbar-round" style="top: 50px;">
                            <a id="backToC9" href="https://c9.io/dashboard.html" class="mainlogo backToC9" target="_blank" title="back to dashboard">Dashboard</a>
                            <div class="c9-activity" id="saveStatus"><div class="light"> </div></div>
                            <!--div id="offlineInfoDiv" class="c9-offlineInfo menu-bk upward moveleft menu-bkFocus">Keep working without<br  />internet. When you're back online, Cloud9 syncs your files for you!<div class="offlineInfoWarn">Some features are disabled.</div></div-->
                        </div>
                    </div>
                </div>
            </div><div class="hsplitbox" style="position: absolute; top: 40px; right: 0px; bottom: 0px; left: 0px;"><div class="basic left" style="position: absolute; width: 236px; min-width: 36px; display: block; left: 0px; top: 0px; bottom: 0px;">
            <div xmlns="http://www.w3.org/1999/xhtml" class="panelsbar" style="display: block;">
                <div xmlns="http://www.w3.org/1999/xhtml" class=" panelsbutton panelsbuttonBool workspace panelsbuttonDown panelsbuttonChecked" title="toggletree (⌘ U)">Workspace</div><div xmlns="http://www.w3.org/1999/xhtml" class="panelsbutton panelsbuttonBool navigate" title="navigate (⌘ E | ⌘ P)">Navigate</div><div xmlns="http://www.w3.org/1999/xhtml" class="panelsbutton panelsbuttonBool commands" title="commands (⌘ .)">Commands</div></div><div class="panel-bar workspace_files" id="q6" style="z-index: 100; position: absolute; top: 0px; right: 0px; bottom: 0px; left: 36px;">
            <div class="header-btn panel-settings header-btnEmpty header-btnBool" style="margin-right: 8px;"></div><div class="basic openfiles" style="display: none;">
            </div><div class="basic filetree real ace_tree" title="Associations"><textarea class="ace_text-input" wrap="off" autocorrect="off" autocapitalize="off" spellcheck="false" style="opacity: 0; top: 0px;"></textarea>
            <div class="ace_tree_scroller" style="top: 0px; left: 0px; right: 10px; bottom: 0px;"><div class="ace_tree_cells" style="margin-top: -13px; margin-left: 0px; width: 189px; height: 794px;"><div class="ace_tree_layer ace_tree_selection-layer"></div><div class="ace_tree_layer ace_tree_cell-layer"><div style="height:22px;" class="tree-row projectRoot even"><span class="toggler open"></span><span class="filetree-icon folder"></span><span class="caption" style="width: auto;px;height: 22px">webdevbootcamp</span></div><div style="height:22px;" class="tree-row  odd"><span style="width:12px" class="tree-indent"></span><span class="toggler closed"></span><span class="filetree-icon folder"></span><span class="caption" style="width: auto;px;height: 22px">APIs</span></div><div style="height:22px;" class="tree-row  even"><span style="width:12px" class="tree-indent"></span><span class="toggler closed"></span><span class="filetree-icon folder"></span><span class="caption" style="width: auto;px;height: 22px">Associations</span></div><div style="height:22px;" class="tree-row  odd"><span style="width:12px" class="tree-indent"></span><span class="toggler closed"></span><span class="filetree-icon folder"></span><span class="caption" style="width: auto;px;height: 22px">Authentication</span></div><div style="height:22px;" class="tree-row  even"><span style="width:12px" class="tree-indent"></span><span class="toggler closed"></span><span class="filetree-icon folder"></span><span class="caption" style="width: auto;px;height: 22px">Databases</span></div><div style="height:22px;" class="tree-row  odd"><span style="width:12px" class="tree-indent"></span><span class="toggler closed"></span><span class="filetree-icon folder"></span><span class="caption" style="width: auto;px;height: 22px">DeployingDemo</span></div><div style="height:22px;" class="tree-row  even"><span style="width:12px" class="tree-indent"></span><span class="toggler closed"></span><span class="filetree-icon folder"></span><span class="caption" style="width: auto;px;height: 22px">Git</span></div><div style="height:22px;" class="tree-row  odd"><span style="width:12px" class="tree-indent"></span><span class="toggler closed"></span><span class="filetree-icon folder"></span><span class="caption" style="width: auto;px;height: 22px">IntroToCommandLine</span></div><div style="height:22px;" class="tree-row  even"><span style="width:12px" class="tree-indent"></span><span class="toggler closed"></span><span class="filetree-icon folder"></span><span class="caption" style="width: auto;px;height: 22px">IntroToExpress</span></div><div style="height:22px;" class="tree-row  odd"><span style="width:12px" class="tree-indent"></span><span class="toggler closed"></span><span class="filetree-icon folder"></span><span class="caption" style="width: auto;px;height: 22px">IntroToNode</span></div><div style="height:22px;" class="tree-row  even"><span style="width:12px" class="tree-indent"></span><span class="toggler closed"></span><span class="filetree-icon folder"></span><span class="caption" style="width: auto;px;height: 22px">IntroToNPM</span></div><div style="height:22px;" class="tree-row  odd"><span style="width:12px" class="tree-indent"></span><span class="toggler closed"></span><span class="filetree-icon folder"></span><span class="caption" style="width: auto;px;height: 22px">MoreExpress</span></div><div style="height:22px;" class="tree-row  even"><span style="width:12px" class="tree-indent"></span><span class="toggler closed"></span><span class="filetree-icon folder"></span><span class="caption" style="width: auto;px;height: 22px">RESTful Routing</span></div><div style="height:22px;" class="tree-row  odd"><span style="width:12px" class="tree-indent"></span><span class="toggler open"></span><span class="filetree-icon folder"></span><span class="caption" style="width: auto;px;height: 22px">YelpCamp</span></div><div style="height:22px;" class="tree-row  even"><span style="width:24px" class="tree-indent"></span><span class="toggler open"></span><span class="filetree-icon folder"></span><span class="caption" style="width: auto;px;height: 22px">Final</span></div><div style="height:22px;" class="tree-row  odd"><span style="width:36px" class="tree-indent"></span><span class="toggler open"></span><span class="filetree-icon folder"></span><span class="caption" style="width: auto;px;height: 22px">middleware</span></div><div style="height:22px;" class="tree-row  even"><span style="width:48px" class="tree-indent"></span><span class="toggler empty"></span><span class="filetree-icon page_white_code"></span><span class="caption" style="width: auto;px;height: 22px">index.js</span></div><div style="height:22px;" class="tree-row  odd"><span style="width:36px" class="tree-indent"></span><span class="toggler open"></span><span class="filetree-icon folder"></span><span class="caption" style="width: auto;px;height: 22px">models</span></div><div style="height:22px;" class="tree-row selected  even"><span style="width:48px" class="tree-indent"></span><span class="toggler empty"></span><span class="filetree-icon page_white_code"></span><span class="caption" style="width: auto;px;height: 22px">campground.js</span></div><div style="height:22px;" class="tree-row  odd"><span style="width:48px" class="tree-indent"></span><span class="toggler empty"></span><span class="filetree-icon page_white_code"></span><span class="caption" style="width: auto;px;height: 22px">comment.js</span></div><div style="height:22px;" class="tree-row  even"><span style="width:48px" class="tree-indent"></span><span class="toggler empty"></span><span class="filetree-icon page_white_code"></span><span class="caption" style="width: auto;px;height: 22px">user.js</span></div><div style="height:22px;" class="tree-row  odd"><span style="width:36px" class="tree-indent"></span><span class="toggler closed"></span><span class="filetree-icon folder"></span><span class="caption" style="width: auto;px;height: 22px">node_modules</span></div><div style="height:22px;" class="tree-row  even"><span style="width:36px" class="tree-indent"></span><span class="toggler closed"></span><span class="filetree-icon folder"></span><span class="caption" style="width: auto;px;height: 22px">public</span></div><div style="height:22px;" class="tree-row  odd"><span style="width:36px" class="tree-indent"></span><span class="toggler closed"></span><span class="filetree-icon folder"></span><span class="caption" style="width: auto;px;height: 22px">routes</span></div><div style="height:22px;" class="tree-row  even"><span style="width:36px" class="tree-indent"></span><span class="toggler closed"></span><span class="filetree-icon folder"></span><span class="caption" style="width: auto;px;height: 22px">views</span></div><div style="height:22px;" class="tree-row  odd"><span style="width:36px" class="tree-indent"></span><span class="toggler empty"></span><span class="filetree-icon page_white_code"></span><span class="caption" style="width: auto;px;height: 22px">app.js</span></div><div style="height:22px;" class="tree-row  even"><span style="width:36px" class="tree-indent"></span><span class="toggler empty"></span><span class="filetree-icon page_white_code"></span><span class="caption" style="width: auto;px;height: 22px">package.json</span></div><div style="height:22px;" class="tree-row  odd"><span style="width:36px" class="tree-indent"></span><span class="toggler empty"></span><span class="filetree-icon page_white_text"></span><span class="caption" style="width: auto;px;height: 22px">readme.md</span></div><div style="height:22px;" class="tree-row  even"><span style="width:36px" class="tree-indent"></span><span class="toggler empty"></span><span class="filetree-icon page_white_code"></span><span class="caption" style="width: auto;px;height: 22px">seeds.js</span></div><div style="height:22px;" class="tree-row  odd"><span style="width:24px" class="tree-indent"></span><span class="toggler closed"></span><span class="filetree-icon folder"></span><span class="caption" style="width: auto;px;height: 22px">v1</span></div><div style="height:22px;" class="tree-row  even"><span style="width:24px" class="tree-indent"></span><span class="toggler closed"></span><span class="filetree-icon folder"></span><span class="caption" style="width: auto;px;height: 22px">v2</span></div><div style="height:22px;" class="tree-row  odd"><span style="width:24px" class="tree-indent"></span><span class="toggler closed"></span><span class="filetree-icon folder"></span><span class="caption" style="width: auto;px;height: 22px">v3</span></div><div style="height:22px;" class="tree-row  even"><span style="width:24px" class="tree-indent"></span><span class="toggler closed"></span><span class="filetree-icon folder"></span><span class="caption" style="width: auto;px;height: 22px">v4</span></div><div style="height:22px;" class="tree-row  odd"><span style="width:24px" class="tree-indent"></span><span class="toggler closed"></span><span class="filetree-icon folder"></span><span class="caption" style="width: auto;px;height: 22px">v5</span></div><div style="height:22px;" class="tree-row  even"><span style="width:24px" class="tree-indent"></span><span class="toggler closed"></span><span class="filetree-icon folder"></span><span class="caption" style="width: auto;px;height: 22px">v6</span></div><div style="height:22px;" class="tree-row  odd"><span style="width:24px" class="tree-indent"></span><span class="toggler closed"></span><span class="filetree-icon folder"></span><span class="caption" style="width: auto;px;height: 22px">v7</span></div><div style="height:22px;" class="tree-row  even"><span style="width:24px" class="tree-indent"></span><span class="toggler closed"></span><span class="filetree-icon folder"></span><span class="caption" style="width: auto;px;height: 22px">v8</span></div></div></div></div><div class="tree-headings" style="height: 0px; right: 10px;"></div><div class="ace_scrollbar ace_scrollbar-v" style="width: 20px; top: 0px; bottom: 0px;"><div class="ace_scrollbar-inner" style="width: 20px; height: 922px;"></div></div><div class="ace_scrollbar ace_scrollbar-h" style="display: none; height: 20px; left: 0px; right: 10px;"><div class="ace_scrollbar-inner" style="height: 20px; width: 0px;"></div></div><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; overflow: hidden;"><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; overflow: visible;">ssssssssssssssssssssssssssssssssssssssssssssssssss</div><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; overflow: visible;">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div></div></div></div></div><div class="splitter vertical w-resize splitterRealtime" style="width: 0px; left: 236px; top: 0px; bottom: 0px; position: absolute;">
                <div> </div>
            </div><div class="hsplitbox" style="position: absolute; left: 236px; top: 0px; bottom: 0px; right: 0px;"><div class="vsplitbox colMain" style="position: absolute; left: 0px; top: 0px; bottom: 0px; right: 36px;"><div class="splitter horizontal n-resize splitterRealtime" style="height: 0px; bottom: 153px; left: 0px; right: 0px; position: absolute; display: block;">
                <div> </div>
            </div><div class="vsplitbox" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 153px;"><div class="hsplitbox" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px;"><div class="vsplitbox" style="position: absolute; left: 0px; top: 0px; bottom: 0px; right: 0px;"><div class="basic codeditorHolder" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px;">
            <div class="editor_tab " style="height: 100%; min-width: 58px; min-height: 60px;" id="q7">
            <div class="btnsesssioncontainer">
                <div class="inside scale" id="432_buttons">
                    
                <div class="c9-simple-btn tabmenubtn c9-simple-btnEmpty"></div><div class="session_btn btnclose" onmousedown="apf.lookup(593).$btnDown(this, event);" onmouseup="apf.lookup(593).$btnUp(this, event)" onmouseover="var o = apf.lookup(593).parentNode;if(apf.lookup(593) != o.$activepage || true) o.$setStyleClass(this, &quot;over&quot;, null, true);" onmouseout="var o = apf.lookup(593);o&amp;&amp;o.$btnOut(this, event);" style="display: none;">
            <div class="tab_shadow"></div>
            <div class="tab_middle">
                <div class="sessiontab_title">-</div>
            <strong> </strong></div>
        </div><div class=" session_btn btnclose  firstbtn  tab1" onmousedown="apf.lookup(592).$btnDown(this, event);" onmouseup="apf.lookup(592).$btnUp(this, event)" onmouseover="var o = apf.lookup(592).parentNode;if(apf.lookup(592) != o.$activepage || true) o.$setStyleClass(this, &quot;over&quot;, null, true);" onmouseout="var o = apf.lookup(592);o&amp;&amp;o.$btnOut(this, event);">
            <div class="tab_shadow"></div>
            <div class="tab_middle">
                <div class="sessiontab_title" title="/YelpCamp/Final/middleware/index.js">index.js</div>
            <strong> </strong></div>
        </div><div class=" session_btn btnclose lastbtn curbtn  tab2 focus" onmousedown="apf.lookup(2870).$btnDown(this, event);" onmouseup="apf.lookup(2870).$btnUp(this, event)" onmouseover="var o = apf.lookup(2870).parentNode;if(apf.lookup(2870) != o.$activepage || true) o.$setStyleClass(this, &quot;over&quot;, null, true);" onmouseout="var o = apf.lookup(2870);o&amp;&amp;o.$btnOut(this, event);">
            <div class="tab_shadow"></div>
            <div class="tab_middle">
                <div class="sessiontab_title" title="/YelpCamp/Final/models/campground.js">campground.js</div>
            <strong> </strong></div>
        </div><div class="c9-simple-btn plus_tab_button c9-simple-btnBool c9-simple-btnEmpty"></div></div>
            </div>
        <div class="session_page  curpage undefinedFocus" id="q15" style="background-color: rgb(241, 241, 241);"> <div class="codeditorHolder ace_editor ace-cloud9-day aceFocus ace_focus" style="position: absolute; left: 0px; right: 0px; top: 7px; bottom: 0px; font-family: Monaco, Menlo, &quot;Ubuntu Mono&quot;, Consolas, source-code-pro, monospace;"><textarea class="ace_text-input" wrap="off" autocorrect="off" autocapitalize="off" spellcheck="false" style="opacity: 0; height: 16px; width: 7.20125px; left: 172.22px; top: 48px;"></textarea><div class="ace_gutter ace_fade-fold-widgets"><div class="ace_layer ace_gutter-layer ace_folding-enabled" style="height: 612px; width: 53px; margin-top: 0px;"><div class="ace_gutter-cell " uid="" style="height: 16px; border-left: 5px solid transparent;">1</div><div class="ace_gutter-cell " uid="" style="height: 16px; border-left: 5px solid transparent;">2</div><div class="ace_gutter-cell " uid="" style="height: 16px; border-left: 5px solid transparent;">3<span class="ace_fold-widget ace_start ace_open" style="height: 16px;"></span></div><div class="ace_gutter-cell " uid="" style="height: 16px; border-left: 5px solid transparent;">4</div><div class="ace_gutter-cell " uid="" style="height: 16px; border-left: 5px solid transparent;">5</div><div class="ace_gutter-cell " uid="" style="height: 16px; border-left: 5px solid transparent;">6</div><div class="ace_gutter-cell " uid="" style="height: 16px; border-left: 5px solid transparent;">7<span class="ace_fold-widget ace_start ace_open" style="height: 16px;"></span></div><div class="ace_gutter-cell " uid="" style="height: 16px; border-left: 5px solid transparent;">8<span class="ace_fold-widget ace_start ace_open" style="height: 16px;"></span></div><div class="ace_gutter-cell " uid="" style="height: 16px; border-left: 5px solid transparent;">9</div><div class="ace_gutter-cell " uid="" style="height: 16px; border-left: 5px solid transparent;">10</div><div class="ace_gutter-cell " uid="" style="height: 16px; border-left: 5px solid transparent;">11</div><div class="ace_gutter-cell " uid="" style="height: 16px; border-left: 5px solid transparent;">12</div><div class="ace_gutter-cell " uid="" style="height: 16px; border-left: 5px solid transparent;">13</div><div class="ace_gutter-cell " uid="" style="height: 16px; border-left: 5px solid transparent;">14<span class="ace_fold-widget ace_start ace_open" style="height: 16px;"></span></div><div class="ace_gutter-cell " uid="" style="height: 16px; border-left: 5px solid transparent;">15<span class="ace_fold-widget ace_start ace_open" style="height: 16px;"></span></div><div class="ace_gutter-cell " uid="" style="height: 16px; border-left: 5px solid transparent;">16</div><div class="ace_gutter-cell " uid="" style="height: 16px; border-left: 5px solid transparent;">17</div><div class="ace_gutter-cell " uid="" style="height: 16px; border-left: 5px solid transparent;">18</div><div class="ace_gutter-cell " uid="" style="height: 16px; border-left: 5px solid transparent;">19</div><div class="ace_gutter-cell " uid="" style="height: 16px; border-left: 5px solid transparent;">20</div><div class="ace_gutter-cell " uid="" style="height: 16px; border-left: 5px solid transparent;">21</div><div class="ace_gutter-cell " uid="" style="height: 16px; border-left: 5px solid transparent;">22</div></div><div class="ace_gutter-active-line" style="top: 48px; height: 16px;"></div></div><div class="ace_scroller" style="left: 53px; right: 0px; bottom: 0px;"><div class="ace_content" style="margin-top: 0px; width: 1234px; height: 612px; margin-left: 0px;"><div class="ace_layer ace_print-margin-layer"><div class="ace_print-margin" style="left: 580.1px; visibility: visible;"></div></div><div class="ace_layer ace_marker-layer"><div class="ace_active-line" style="height:16px;top:48px;left:0;right:0;"></div><div class="ace_selection" style="left:62px;top:162px;height:14px;width:2px;z-index: 10;background-color:rgb(255,57,248);"></div><div class="ace_selection" style="left:60px;top:160px;height:5px;width:6px;z-index: 10;background-color:rgb(255,57,248);"></div></div><div class="ace_layer ace_text-layer" style="padding: 0px 4px;"><div class="ace_line" style="height:16px"><span class="ace_storage ace_type">var</span> <span class="ace_identifier">mongoose</span> <span class="ace_keyword ace_operator">=</span> <span class="ace_identifier">require</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">"mongoose"</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height:16px"></div><div class="ace_line" style="height:16px"><span class="ace_storage ace_type">var</span> <span class="ace_identifier">campgroundSchema</span> <span class="ace_keyword ace_operator">=</span> <span class="ace_keyword">new</span> <span class="ace_identifier">mongoose</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">Schema</span><span class="ace_paren ace_lparen">({</span></div><div class="ace_line" style="height:16px">   <span class="ace_identifier">name</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_variable ace_language">String</span><span class="ace_punctuation ace_operator">,</span></div><div class="ace_line" style="height:16px">   <span class="ace_identifier">image</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_variable ace_language">String</span><span class="ace_punctuation ace_operator">,</span></div><div class="ace_line" style="height:16px">   <span class="ace_identifier">description</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_variable ace_language">String</span><span class="ace_punctuation ace_operator">,</span></div><div class="ace_line" style="height:16px">   <span class="ace_identifier">author</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_paren ace_lparen">{</span></div><div class="ace_line" style="height:16px"><span class="ace_indent-guide">   </span>   <span class="ace_identifier">id</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_paren ace_lparen">{</span></div><div class="ace_line" style="height:16px"><span class="ace_indent-guide">   </span><span class="ace_indent-guide">   </span>   <span class="ace_identifier">type</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_identifier">mongoose</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">Schema</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">Types</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">ObjectId</span><span class="ace_punctuation ace_operator">,</span></div><div class="ace_line" style="height:16px"><span class="ace_indent-guide">   </span><span class="ace_indent-guide">   </span>   <span class="ace_identifier">ref</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_string">"User"</span></div><div class="ace_line" style="height:16px"><span class="ace_indent-guide">   </span>   <span class="ace_paren ace_rparen">}</span><span class="ace_punctuation ace_operator">,</span></div><div class="ace_line" style="height:16px"><span class="ace_indent-guide">   </span>   <span class="ace_identifier">username</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_variable ace_language">String</span></div><div class="ace_line" style="height:16px">   <span class="ace_paren ace_rparen">}</span><span class="ace_punctuation ace_operator">,</span></div><div class="ace_line" style="height:16px">   <span class="ace_identifier">comments</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_paren ace_lparen">[</span></div><div class="ace_line" style="height:16px"><span class="ace_indent-guide">   </span>   <span class="ace_paren ace_lparen">{</span></div><div class="ace_line" style="height:16px"><span class="ace_indent-guide">   </span><span class="ace_indent-guide">   </span>   <span class="ace_identifier">type</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_identifier">mongoose</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">Schema</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">Types</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">ObjectId</span><span class="ace_punctuation ace_operator">,</span></div><div class="ace_line" style="height:16px"><span class="ace_indent-guide">   </span><span class="ace_indent-guide">   </span>   <span class="ace_identifier">ref</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_string">"Comment"</span></div><div class="ace_line" style="height:16px"><span class="ace_indent-guide">   </span>   <span class="ace_paren ace_rparen">}</span></div><div class="ace_line" style="height:16px">   <span class="ace_paren ace_rparen">]</span></div><div class="ace_line" style="height:16px"><span class="ace_paren ace_rparen">})</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height:16px"></div><div class="ace_line" style="height:16px"><span class="ace_identifier">module</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">exports</span> <span class="ace_keyword ace_operator">=</span> <span class="ace_identifier">mongoose</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">model</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">"Campground"</span><span class="ace_punctuation ace_operator">,</span> <span class="ace_identifier">campgroundSchema</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div></div><div class="ace_layer ace_marker-layer"></div><div class="ace_layer ace_cursor-layer ace_slim-cursors"><div class="ace_cursor" style="left: 119.22px; top: 48px; width: 7.20125px; height: 16px;"></div></div></div><div class="scroll_shadow"><div class="ace_corner"></div></div></div><div class="ace_scrollbar ace_scrollbar-v" style="width: 20px; bottom: 0px; display: none;"><div class="ace_scrollbar-inner" style="width: 20px; height: 580px;"></div></div><div class="ace_scrollbar ace_scrollbar-h" style="display: none; height: 20px; left: 53px; right: 0px;"><div class="ace_scrollbar-inner" style="height: 20px; width: 1234px;"></div></div><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; overflow: hidden;"><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; overflow: visible;"></div><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; overflow: visible;">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div></div><div class="ace_gutter-tooltip" style="display: none; top: 474px; left: 239px;">learnwithcolt</div></div><div style="background: inherit; position: absolute; top: 0px; bottom: 0px; left: 0px; right: 0px; z-index: 20000; transition-property: opacity; display: none; opacity: 0;"><div class="ace_progress"><div style="width: 0%; transition: width 200ms;"></div></div></div><div xmlns="http://www.w3.org/1999/xhtml" class=" bar-status" style="position: absolute; right: 5px; bottom: 3px; z-index: 10000; height: 23px; background-color: rgb(251, 251, 251);" id="q16">
                <div class="label" style="cursor: pointer; margin: 1px 10px 4px 3px; min-height: 15px; display: none;"></div><div class="label lbl_row_col" style="cursor: pointer; margin: 1px 10px 4px 3px; min-height: 15px;">4:17</div><div class="label nounderline" style="margin: 1px 10px 4px 3px; display: none; min-height: 15px;"></div><div class="label  labelBool" style="cursor: pointer; margin: 1px 10px 4px 3px; min-height: 15px;">JavaScript</div><div class="label  labelBool" style="cursor: pointer; margin: 1px 10px 4px 3px; min-height: 15px;">Spaces: 3</div><div xmlns="http://www.w3.org/1999/xhtml" class="btn-statusbar-icon btn-statusbar-iconIcon btn-statusbar-iconEmpty btn-statusbar-iconBool" id="q17" style="background-image: url(&quot;https://cdn.c9.io/nc-3.1.3089-c15a4f6d/static/plugins/c9.ide.layout.classic/icons/pref-ico.png&quot;); height: 23px;"></div></div></div></div></div></div></div></div><div class="basic console codeditorHolder" id="q8" style="z-index: 99; position: absolute; height: 153px; right: 0px; bottom: 0px; left: 0px; min-height: 60px; display: block;">
            <div class="hbox" id="q9" style="display: flex; align-items: center; justify-content: flex-end; z-index: 1000; padding: 0px; position: absolute; right: 3px; top: 0px; height: 24px;"><div class="btn_console maximize btn_consoleBool btn_consoleEmpty" style="margin: 2px 2px 0px 0px; box-sizing: border-box;"> 
                <div></div>
            </div><div class="divider_console divider_consoleCaption" style="margin: 3px 0px 0px 3px; box-sizing: border-box; min-height: 2px;"></div><div class="btn_icon_only dim22-22  console_close_btn btn_icon_onlyIcon btn_icon_onlyEmpty" style="margin: 1px 0px 0px 1px; box-sizing: border-box;"></div></div><div class="editor_tab " style="height: 100%; min-width: 58px; min-height: 60px;" id="q10">
            <div class="btnsesssioncontainer">
                <div class="inside  scale" id="441_buttons" style="">
                    
                <div class="session_btn btnclose" onmousedown="apf.lookup(443).$btnDown(this, event);" onmouseup="apf.lookup(443).$btnUp(this, event)" onmouseover="var o = apf.lookup(443).parentNode;if(apf.lookup(443) != o.$activepage || true) o.$setStyleClass(this, &quot;over&quot;, null, true);" onmouseout="var o = apf.lookup(443);o&amp;&amp;o.$btnOut(this, event);" style="display: none;">
            <div class="tab_shadow"></div>
            <div class="tab_middle">
                <div class="sessiontab_title">-</div>
            <strong> </strong></div>
        </div><div class="session_btn btnclose lastbtn firstbtn  firstcurbtn curbtn  tab0" onmousedown="apf.lookup(442).$btnDown(this, event);" onmouseup="apf.lookup(442).$btnUp(this, event)" onmouseover="var o = apf.lookup(442).parentNode;if(apf.lookup(442) != o.$activepage || true) o.$setStyleClass(this, &quot;over&quot;, null, true);" onmouseout="var o = apf.lookup(442);o&amp;&amp;o.$btnOut(this, event);">
            <div class="tab_shadow"></div>
            <div class="tab_middle">
                <div class="sessiontab_title" title="Immediate (Javascript (browser))">Immediate (Javascript (browser))</div>
            <strong> </strong></div>
        </div><div class="c9-simple-btn plus_tab_button c9-simple-btnBool c9-simple-btnEmpty"></div><div class="c9-simple-btn tabmenubtn c9-simple-btnEmpty"></div></div>
            </div>
        <div class="session_page curpage immediate" id="q11" style="background-color: rgb(241, 241, 241);"> <div class="codeditorHolder ace_editor ace-cloud9-day" style="position: absolute; left: 0px; right: 0px; top: 7px; bottom: 0px; font-family: Monaco, Menlo, &quot;Ubuntu Mono&quot;, Consolas, source-code-pro, monospace;"><textarea class="ace_text-input" wrap="off" autocorrect="off" autocapitalize="off" spellcheck="false" style="opacity: 0; height: 16px; width: 7.20125px; left: 25px; top: 32px;"></textarea><div class="ace_gutter ace_fade-fold-widgets"><div class="ace_layer ace_gutter-layer" style="margin-top: 0px; height: 146px; width: 21px;"><div class="ace_gutter-cell  " style="height: 16px;"></div><div class="ace_gutter-cell " style="height: 16px;">1</div><div class="ace_gutter-cell repl_prompt " style="height: 16px;"></div></div><div class="ace_gutter-active-line" style="display: none;"></div></div><div class="ace_scroller" style="left: 21px; right: 0px; bottom: 0px;"><div class="ace_content" style="margin-top: 0px; width: 1266px; height: 146px; margin-left: 0px;"><div class="ace_layer ace_print-margin-layer"><div class="ace_print-margin" style="left: 580.1px; visibility: hidden;"></div></div><div class="ace_layer ace_marker-layer"></div><div class="ace_layer ace_text-layer" style="padding: 0px 4px;"><div class="ace_line" style="height:16px"><span class="ace_comment">Welcome to the Javascript REPL. This REPL allows you to test any single or multi line code in</span></div><div class="ace_line" style="height:16px"><span class="ace_comment">a browser based javascript environment (iframe). It operates similar to your browser console.</span></div><div class="ace_line" style="height:16px"></div></div><div class="ace_layer ace_marker-layer"></div><div class="ace_layer ace_cursor-layer ace_hidden-cursors ace_slim-cursors"><div class="ace_cursor" style="left: 4px; top: 32px; width: 7.20125px; height: 16px;"></div></div></div><div class="scroll_shadow"><div class="ace_corner"></div></div></div><div class="ace_scrollbar ace_scrollbar-v" style="display: none; width: 20px; bottom: 0px;"><div class="ace_scrollbar-inner" style="width: 20px; height: 58px;"></div></div><div class="ace_scrollbar ace_scrollbar-h" style="display: none; height: 20px; left: 21px; right: 0px;"><div class="ace_scrollbar-inner" style="height: 20px; width: 1266px;"></div></div><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; overflow: hidden;"><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; overflow: visible;"></div><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; overflow: visible;">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div></div><div class="ace_gutter-tooltip" style="display: none;"></div></div><div style="background: inherit; position: absolute; top: 0px; bottom: 0px; left: 0px; right: 0px; z-index: 20000; transition-property: opacity; display: none; opacity: 0;"><div class="ace_progress"><div style="width: 0%;"></div></div></div><div xmlns="http://www.w3.org/1999/xhtml" class="bar-status " style="position: absolute; bottom: 3px; right: 5px; z-index: 10000; height: 23px;" id="q12">
                <div class="label labelBool " style="cursor: pointer; margin: 1px 7px 0px 0px; min-height: 15px;">Javascript (browser)</div><div class="btn_console clear btn_consoleEmpty" style="margin: 0px 3px 0px 0px;"> 
                <div></div>
            </div></div></div></div></div></div><div class="splitter vertical w-resize splitterRealtime" style="width: 0px; display: none; right: 36px; top: 0px; bottom: 0px; position: absolute;">
                <div> </div>
            </div><div class="basic right" style="z-index: 100; position: absolute; width: 36px; min-width: 36px; display: block; right: 0px; bottom: 0px; top: 0px;">
            <div xmlns="http://www.w3.org/1999/xhtml" class="panelsbar" style="display: block;">
                <div xmlns="http://www.w3.org/1999/xhtml" class="panelsbutton panelsbuttonBool collab">Collaborate<div class="newnotifs" style="display: none;"></div></div><div xmlns="http://www.w3.org/1999/xhtml" class="panelsbutton panelsbuttonBool outline " title="outline (⌘ ⇧ E)">Outline</div></div></div></div></div></div></div><blockquote class="c9menu" style="margin: 0px 0px 0px 4px; position: absolute;">

            <div class="menu_item  disabled" onmouseup="var o = apf.lookup(106); if (!o || o.disabled) return; o.$up(event)" onmousemove="var o = apf.lookup(106); if (!o || o.disabled) return; o.$over(event)" onmouseout="var o = apf.lookup(106); if (!o || o.disabled) return; o.$out(event)" onmousedown="var o = apf.lookup(106); if (!o || o.disabled) return; o.$down()" onclick="var o = apf.lookup(106); if (!o || o.disabled) return; o.$click()"><span> </span><u> </u>New File</div><div class="menu_item" onmouseup="var o = apf.lookup(299); if (!o || o.disabled) return; o.$up(event)" onmousemove="var o = apf.lookup(299); if (!o || o.disabled) return; o.$over(event)" onmouseout="var o = apf.lookup(299); if (!o || o.disabled) return; o.$out(event)" onmousedown="var o = apf.lookup(299); if (!o || o.disabled) return; o.$down()" onclick="var o = apf.lookup(299); if (!o || o.disabled) return; o.$click()"><span> </span><u> </u>New Immediate Window</div><div class="menu_divider"> </div><div class="menu_item  disabled" onmouseup="var o = apf.lookup(407); if (!o || o.disabled) return; o.$up(event)" onmousemove="var o = apf.lookup(407); if (!o || o.disabled) return; o.$over(event)" onmouseout="var o = apf.lookup(407); if (!o || o.disabled) return; o.$out(event)" onmousedown="var o = apf.lookup(407); if (!o || o.disabled) return; o.$down()" onclick="var o = apf.lookup(407); if (!o || o.disabled) return; o.$click()"><span> </span><u> </u>Recently Closed Tabs</div></blockquote><blockquote class="c9menu mnuSbPrefs" style="position: absolute; display: none;">

            </blockquote><blockquote class="c9menu mnuSbPrefs" style="position: absolute; display: none;">

            </blockquote><iframe nwdisable="nwdisable" style="width: 1px; height: 1px; position: absolute; left: -100px; top: -100px;" src="./campground.js_files/saved_resource.html"></iframe><blockquote class="c9menu" style="position: absolute;">

            <div class="menu_item" onmouseup="var o = apf.lookup(313); if (!o || o.disabled) return; o.$up(event)" onmousemove="var o = apf.lookup(313); if (!o || o.disabled) return; o.$over(event)" onmouseout="var o = apf.lookup(313); if (!o || o.disabled) return; o.$out(event)" onmousedown="var o = apf.lookup(313); if (!o || o.disabled) return; o.$down()" onclick="var o = apf.lookup(313); if (!o || o.disabled) return; o.$click()"><span> </span><u> </u>Refresh File Tree</div><div class="menu_item" onmouseup="var o = apf.lookup(314); if (!o || o.disabled) return; o.$up(event)" onmousemove="var o = apf.lookup(314); if (!o || o.disabled) return; o.$over(event)" onmouseout="var o = apf.lookup(314); if (!o || o.disabled) return; o.$out(event)" onmousedown="var o = apf.lookup(314); if (!o || o.disabled) return; o.$down()" onclick="var o = apf.lookup(314); if (!o || o.disabled) return; o.$click()"><span> </span><u> </u>Collapse All Folders</div><div class="menu_divider"> </div><div class="menu_item check" onmouseup="var o = apf.lookup(409); if (!o || o.disabled) return; o.$up(event)" onmousemove="var o = apf.lookup(409); if (!o || o.disabled) return; o.$over(event)" onmouseout="var o = apf.lookup(409); if (!o || o.disabled) return; o.$out(event)" onmousedown="var o = apf.lookup(409); if (!o || o.disabled) return; o.$down()" onclick="var o = apf.lookup(409); if (!o || o.disabled) return; o.$click()"><span> </span><u> </u>Show Open Files</div><div class="menu_divider"> </div><div class="menu_item check  checked" onmouseup="var o = apf.lookup(415); if (!o || o.disabled) return; o.$up(event)" onmousemove="var o = apf.lookup(415); if (!o || o.disabled) return; o.$over(event)" onmouseout="var o = apf.lookup(415); if (!o || o.disabled) return; o.$out(event)" onmousedown="var o = apf.lookup(415); if (!o || o.disabled) return; o.$down()" onclick="var o = apf.lookup(415); if (!o || o.disabled) return; o.$click()"><span> </span><u> </u>Show Root File System</div><div class="menu_item check" onmouseup="var o = apf.lookup(416); if (!o || o.disabled) return; o.$up(event)" onmousemove="var o = apf.lookup(416); if (!o || o.disabled) return; o.$over(event)" onmouseout="var o = apf.lookup(416); if (!o || o.disabled) return; o.$out(event)" onmousedown="var o = apf.lookup(416); if (!o || o.disabled) return; o.$down()" onclick="var o = apf.lookup(416); if (!o || o.disabled) return; o.$click()"><span> </span><u> </u>Show Home in Favorites</div><div class="menu_item check" onmouseup="var o = apf.lookup(316); if (!o || o.disabled) return; o.$up(event)" onmousemove="var o = apf.lookup(316); if (!o || o.disabled) return; o.$over(event)" onmouseout="var o = apf.lookup(316); if (!o || o.disabled) return; o.$out(event)" onmousedown="var o = apf.lookup(316); if (!o || o.disabled) return; o.$down()" onclick="var o = apf.lookup(316); if (!o || o.disabled) return; o.$click()"><span> </span><u> </u>Show Hidden Files</div></blockquote><blockquote class="c9menu downward moveright " style="position: absolute; display: none; z-index: 195000; top: 400px; overflow-y: auto; max-height: 452px; left: 103px; opacity: 1;" id="q13">

            <div class="menu_item strong disabled" onmouseup="var o = apf.lookup(318); if (!o || o.disabled) return; o.$up(event)" onmousemove="var o = apf.lookup(318); if (!o || o.disabled) return; o.$over(event)" onmouseout="var o = apf.lookup(318); if (!o || o.disabled) return; o.$out(event)" onmousedown="var o = apf.lookup(318); if (!o || o.disabled) return; o.$down()" onclick="var o = apf.lookup(318); if (!o || o.disabled) return; o.$click()"><span> </span><u> </u>Open</div><div class="menu_item" onmouseup="var o = apf.lookup(354); if (!o || o.disabled) return; o.$up(event)" onmousemove="var o = apf.lookup(354); if (!o || o.disabled) return; o.$over(event)" onmouseout="var o = apf.lookup(354); if (!o || o.disabled) return; o.$out(event)" onmousedown="var o = apf.lookup(354); if (!o || o.disabled) return; o.$down()" onclick="var o = apf.lookup(354); if (!o || o.disabled) return; o.$click()"><span> </span><u> </u>Download</div><div class="menu_item disabled" onmouseup="var o = apf.lookup(343); if (!o || o.disabled) return; o.$up(event)" onmousemove="var o = apf.lookup(343); if (!o || o.disabled) return; o.$over(event)" onmouseout="var o = apf.lookup(343); if (!o || o.disabled) return; o.$out(event)" onmousedown="var o = apf.lookup(343); if (!o || o.disabled) return; o.$down()" onclick="var o = apf.lookup(343); if (!o || o.disabled) return; o.$click()"><span> </span><u> </u>Preview</div><div class="menu_divider"> </div><div class="menu_item" onmouseup="var o = apf.lookup(320); if (!o || o.disabled) return; o.$up(event)" onmousemove="var o = apf.lookup(320); if (!o || o.disabled) return; o.$over(event)" onmouseout="var o = apf.lookup(320); if (!o || o.disabled) return; o.$out(event)" onmousedown="var o = apf.lookup(320); if (!o || o.disabled) return; o.$down()" onclick="var o = apf.lookup(320); if (!o || o.disabled) return; o.$click()"><span> </span><u> </u>Refresh</div><div class="menu_item disabled" onmouseup="var o = apf.lookup(321); if (!o || o.disabled) return; o.$up(event)" onmousemove="var o = apf.lookup(321); if (!o || o.disabled) return; o.$over(event)" onmouseout="var o = apf.lookup(321); if (!o || o.disabled) return; o.$out(event)" onmousedown="var o = apf.lookup(321); if (!o || o.disabled) return; o.$down()" onclick="var o = apf.lookup(321); if (!o || o.disabled) return; o.$click()"><span> </span><u> </u>Rename</div><div class="menu_item disabled" onmouseup="var o = apf.lookup(322); if (!o || o.disabled) return; o.$up(event)" onmousemove="var o = apf.lookup(322); if (!o || o.disabled) return; o.$over(event)" onmouseout="var o = apf.lookup(322); if (!o || o.disabled) return; o.$out(event)" onmousedown="var o = apf.lookup(322); if (!o || o.disabled) return; o.$down()" onclick="var o = apf.lookup(322); if (!o || o.disabled) return; o.$click()"><span> </span><u> </u>Delete</div><div class="menu_divider"> </div><div class="menu_item " onmouseup="var o = apf.lookup(324); if (!o || o.disabled) return; o.$up(event)" onmousemove="var o = apf.lookup(324); if (!o || o.disabled) return; o.$over(event)" onmouseout="var o = apf.lookup(324); if (!o || o.disabled) return; o.$out(event)" onmousedown="var o = apf.lookup(324); if (!o || o.disabled) return; o.$down()" onclick="var o = apf.lookup(324); if (!o || o.disabled) return; o.$click()"><span>⌘ X</span><u> </u>Cut</div><div class="menu_item " onmouseup="var o = apf.lookup(325); if (!o || o.disabled) return; o.$up(event)" onmousemove="var o = apf.lookup(325); if (!o || o.disabled) return; o.$over(event)" onmouseout="var o = apf.lookup(325); if (!o || o.disabled) return; o.$out(event)" onmousedown="var o = apf.lookup(325); if (!o || o.disabled) return; o.$down()" onclick="var o = apf.lookup(325); if (!o || o.disabled) return; o.$click()"><span>⌘ C</span><u> </u>Copy</div><div class="menu_item " onmouseup="var o = apf.lookup(326); if (!o || o.disabled) return; o.$up(event)" onmousemove="var o = apf.lookup(326); if (!o || o.disabled) return; o.$over(event)" onmouseout="var o = apf.lookup(326); if (!o || o.disabled) return; o.$out(event)" onmousedown="var o = apf.lookup(326); if (!o || o.disabled) return; o.$down()" onclick="var o = apf.lookup(326); if (!o || o.disabled) return; o.$click()"><span>⌘ V</span><u> </u>Paste</div><div class="menu_item disabled" onmouseup="var o = apf.lookup(327); if (!o || o.disabled) return; o.$up(event)" onmousemove="var o = apf.lookup(327); if (!o || o.disabled) return; o.$over(event)" onmouseout="var o = apf.lookup(327); if (!o || o.disabled) return; o.$out(event)" onmousedown="var o = apf.lookup(327); if (!o || o.disabled) return; o.$down()" onclick="var o = apf.lookup(327); if (!o || o.disabled) return; o.$click()"><span> </span><u> </u>Duplicate</div><div class="menu_divider"> </div><div class="menu_item" onmouseup="var o = apf.lookup(412); if (!o || o.disabled) return; o.$up(event)" onmousemove="var o = apf.lookup(412); if (!o || o.disabled) return; o.$over(event)" onmouseout="var o = apf.lookup(412); if (!o || o.disabled) return; o.$out(event)" onmousedown="var o = apf.lookup(412); if (!o || o.disabled) return; o.$down()" onclick="var o = apf.lookup(412); if (!o || o.disabled) return; o.$click()"><span> </span><u> </u>Add to Favorites</div><div class="menu_item" onmouseup="var o = apf.lookup(413); if (!o || o.disabled) return; o.$up(event)" onmousemove="var o = apf.lookup(413); if (!o || o.disabled) return; o.$over(event)" onmouseout="var o = apf.lookup(413); if (!o || o.disabled) return; o.$out(event)" onmousedown="var o = apf.lookup(413); if (!o || o.disabled) return; o.$down()" onclick="var o = apf.lookup(413); if (!o || o.disabled) return; o.$click()" style="display: none;"><span> </span><u> </u>Remove from Favorites</div><div class="menu_item" onmouseup="var o = apf.lookup(411); if (!o || o.disabled) return; o.$up(event)" onmousemove="var o = apf.lookup(411); if (!o || o.disabled) return; o.$over(event)" onmouseout="var o = apf.lookup(411); if (!o || o.disabled) return; o.$out(event)" onmousedown="var o = apf.lookup(411); if (!o || o.disabled) return; o.$down()" onclick="var o = apf.lookup(411); if (!o || o.disabled) return; o.$click()"><span>⌘ ⌥ L</span><u> </u>Open Terminal Here</div><div class="menu_divider"> </div><div class="menu_item disabled" onmouseup="var o = apf.lookup(329); if (!o || o.disabled) return; o.$up(event)" onmousemove="var o = apf.lookup(329); if (!o || o.disabled) return; o.$over(event)" onmouseout="var o = apf.lookup(329); if (!o || o.disabled) return; o.$out(event)" onmousedown="var o = apf.lookup(329); if (!o || o.disabled) return; o.$down()" onclick="var o = apf.lookup(329); if (!o || o.disabled) return; o.$click()"><span> </span><u> </u>New File</div><div class="menu_item disabled" onmouseup="var o = apf.lookup(330); if (!o || o.disabled) return; o.$up(event)" onmousemove="var o = apf.lookup(330); if (!o || o.disabled) return; o.$over(event)" onmouseout="var o = apf.lookup(330); if (!o || o.disabled) return; o.$out(event)" onmousedown="var o = apf.lookup(330); if (!o || o.disabled) return; o.$down()" onclick="var o = apf.lookup(330); if (!o || o.disabled) return; o.$click()"><span> </span><u> </u>New Folder</div></blockquote><blockquote class="c9menu mnuSbPrefs" style="position: absolute; display: none;">

            </blockquote><iframe id="intercom-frame" style="display: none;" src="./campground.js_files/saved_resource(1).html"></iframe><div id="intercom-container" class="intercom-container intercom-reset"><style type="text/css" id="intercom-styles">#intercom-container .intercom-conversations-fetching .intercom-conversations-spinner,#intercom-container .intercom-sheet-loading .intercom-sheet-spinner{background-image:url(https://js.intercomcdn.com/images/spinner.4d295ead.png);background-size:28px 28px;background-repeat:no-repeat;display:block;width:28px;height:28px}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-conversations-fetching .intercom-conversations-spinner,#intercom-container .intercom-sheet-loading .intercom-sheet-spinner{background-image:url(https://js.intercomcdn.com/images/spinner@2x.2b560838.png)}}.intercom-reset a,.intercom-reset abbr,.intercom-reset acronym,.intercom-reset address,.intercom-reset applet,.intercom-reset article,.intercom-reset aside,.intercom-reset audio,.intercom-reset b,.intercom-reset big,.intercom-reset blockquote,.intercom-reset button,.intercom-reset canvas,.intercom-reset caption,.intercom-reset center,.intercom-reset cite,.intercom-reset code,.intercom-reset dd,.intercom-reset del,.intercom-reset details,.intercom-reset dfn,.intercom-reset div,.intercom-reset div.form,.intercom-reset dl,.intercom-reset dt,.intercom-reset em,.intercom-reset fieldset,.intercom-reset figcaption,.intercom-reset figure,.intercom-reset footer,.intercom-reset form,.intercom-reset h1,.intercom-reset h2,.intercom-reset h3,.intercom-reset h4,.intercom-reset h5,.intercom-reset h6,.intercom-reset header,.intercom-reset hgroup,.intercom-reset i,.intercom-reset iframe,.intercom-reset img,.intercom-reset input,.intercom-reset input[type],.intercom-reset ins,.intercom-reset kbd,.intercom-reset label,.intercom-reset legend,.intercom-reset li,.intercom-reset mark,.intercom-reset menu,.intercom-reset nav,.intercom-reset object,.intercom-reset ol,.intercom-reset p,.intercom-reset pre,.intercom-reset q,.intercom-reset s,.intercom-reset samp,.intercom-reset section,.intercom-reset small,.intercom-reset span,.intercom-reset strike,.intercom-reset strong,.intercom-reset sub,.intercom-reset summary,.intercom-reset sup,.intercom-reset table,.intercom-reset tbody,.intercom-reset td,.intercom-reset textarea,.intercom-reset tfoot,.intercom-reset th,.intercom-reset thead,.intercom-reset time,.intercom-reset tr,.intercom-reset tt,.intercom-reset u,.intercom-reset ul,.intercom-reset var,.intercom-reset video{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size-adjust:none;font-size:100%;font-style:normal;letter-spacing:normal;font-stretch:normal;font-variant:normal;font-weight:400;font:normal normal 100% Helvetica Neue,Helvetica,Arial,sans-serif;text-align:left;-moz-text-align-last:initial;text-align-last:initial;text-decoration:none;-webkit-text-emphasis:none;text-emphasis:none;text-height:auto;text-indent:0;text-justify:auto;text-outline:none;text-shadow:none;text-transform:none;text-wrap:normal;alignment-adjust:auto;alignment-baseline:baseline;-webkit-animation:none 0 ease 0 1 normal;animation:none 0 ease 0 1 normal;-webkit-animation-play-state:running;animation-play-state:running;-webkit-appearance:normal;-moz-appearance:normal;appearance:normal;azimuth:center;-webkit-backface-visibility:visible;backface-visibility:visible;background:none 0 0 auto repeat scroll padding-box transparent;background-color:transparent;background-image:none;baseline-shift:baseline;binding:none;bleed:6pt;bookmark-label:content();bookmark-level:none;bookmark-state:open;bookmark-target:none;border:0 none transparent;border-radius:0;bottom:auto;box-align:stretch;-webkit-box-decoration-break:slice;box-decoration-break:slice;box-direction:normal;box-flex:0.0;box-flex-group:1;box-lines:single;box-ordinal-group:1;box-orient:inline-axis;box-pack:start;box-shadow:none;box-sizing:content-box;-webkit-column-break-after:auto;break-after:auto;-webkit-column-break-before:auto;break-before:auto;-webkit-column-break-inside:auto;break-inside:auto;caption-side:top;clear:none;clip:auto;color:inherit;color-profile:auto;-webkit-column-count:auto;-moz-column-count:auto;column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;column-gap:normal;-webkit-column-rule:medium medium #1f1f1f;-moz-column-rule:medium medium #1f1f1f;column-rule:medium medium #1f1f1f;-webkit-column-span:1;-moz-column-span:1;column-span:1;-webkit-column-width:auto;-moz-column-width:auto;column-width:auto;-webkit-columns:auto auto;-moz-columns:auto auto;columns:auto auto;content:normal;counter-increment:none;counter-reset:none;crop:auto;cursor:auto;direction:ltr;display:inline;dominant-baseline:auto;drop-initial-after-adjust:text-after-edge;drop-initial-after-align:baseline;drop-initial-before-adjust:text-before-edge;drop-initial-before-align:caps-height;drop-initial-size:auto;drop-initial-value:initial;elevation:level;empty-cells:show;fit:fill;fit-position:0 0;float:none;float-offset:0 0;grid-columns:none;grid-rows:none;hanging-punctuation:none;height:auto;hyphenate-after:auto;hyphenate-before:auto;hyphenate-character:auto;hyphenate-lines:no-limit;hyphenate-resource:none;-webkit-hyphens:manual;-ms-hyphens:manual;hyphens:manual;icon:auto;image-orientation:auto;image-rendering:auto;image-resolution:normal;inline-box-align:last;left:auto;line-height:inherit;line-stacking:inline-line-height exclude-ruby consider-shifts;list-style:disc outside none;margin:0;marks:none;marquee-direction:forward;marquee-loop:1;marquee-play-count:1;marquee-speed:normal;marquee-style:scroll;max-height:none;max-width:none;min-height:0;min-width:0;move-to:normal;nav-down:auto;nav-index:auto;nav-left:auto;nav-right:auto;nav-up:auto;opacity:1;orphans:2;outline:medium none invert;outline-offset:0;overflow:visible;overflow-style:auto;padding:0;page:auto;page-break-after:auto;page-break-before:auto;page-break-inside:auto;page-policy:start;-webkit-perspective:none;perspective:none;-webkit-perspective-origin:50% 50%;perspective-origin:50% 50%;position:static;presentation-level:0;punctuation-trim:none;quotes:none;rendering-intent:auto;resize:none;right:auto;rotation:0;rotation-point:50% 50%;ruby-align:auto;ruby-overhang:none;ruby-position:before;ruby-span:none;size:auto;string-set:none;table-layout:auto;top:auto;-webkit-transform:none;transform:none;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-transform-style:flat;transform-style:flat;transition:all 0 ease 0;unicode-bidi:normal;vertical-align:baseline;white-space:normal;white-space-collapse:collapse;widows:2;width:auto;word-break:normal;word-spacing:normal;word-wrap:normal;z-index:auto;text-align:start;filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.intercom-reset address,.intercom-reset article,.intercom-reset aside,.intercom-reset blockquote,.intercom-reset canvas,.intercom-reset center,.intercom-reset dd,.intercom-reset details,.intercom-reset dir,.intercom-reset div,.intercom-reset div.form,.intercom-reset dl,.intercom-reset dt,.intercom-reset fieldset,.intercom-reset figcaption,.intercom-reset figure,.intercom-reset footer,.intercom-reset form,.intercom-reset frame,.intercom-reset frameset,.intercom-reset h1,.intercom-reset h2,.intercom-reset h3,.intercom-reset h4,.intercom-reset h5,.intercom-reset h6,.intercom-reset header,.intercom-reset hgroup,.intercom-reset hr,.intercom-reset menu,.intercom-reset nav,.intercom-reset noframes,.intercom-reset ol,.intercom-reset p,.intercom-reset pre,.intercom-reset section,.intercom-reset summary,.intercom-reset ul{display:block}.intercom-reset li{display:list-item}.intercom-reset table{display:table}.intercom-reset tr{display:table-row}.intercom-reset thead{display:table-header-group}.intercom-reset tbody{display:table-row-group}.intercom-reset tfoot{display:table-footer-group}.intercom-reset col{display:table-column}.intercom-reset colgroup{display:table-column-group}.intercom-reset td,.intercom-reset th{display:table-cell}.intercom-reset caption{display:table-caption}.intercom-reset input,.intercom-reset select{display:inline-block}.intercom-reset b,.intercom-reset strong{font-weight:700}.intercom-reset b>em,.intercom-reset b>i,.intercom-reset em>b,.intercom-reset em>strong,.intercom-reset i>b,.intercom-reset i>strong,.intercom-reset strong>em,.intercom-reset strong>i{font-weight:700;font-style:italic}.intercom-reset input,.intercom-reset textarea{cursor:text}.intercom-reset input::-moz-selection,.intercom-reset textarea::-moz-selection{background-color:#b3d4fc}.intercom-reset input::selection,.intercom-reset textarea::selection{background-color:#b3d4fc}.intercom-reset input::-webkit-input-placeholder,.intercom-reset textarea::-webkit-input-placeholder{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size-adjust:none;font-size:100%;font-style:normal;letter-spacing:normal;font-stretch:normal;font-variant:normal;font-weight:400;font:normal normal 100% Helvetica Neue,Helvetica,Arial,sans-serif;text-align:left;text-align-last:initial;text-decoration:none;-webkit-text-emphasis:none;text-emphasis:none;text-height:auto;text-indent:0;text-justify:auto;text-outline:none;text-shadow:none;text-transform:none;text-wrap:normal;background-color:inherit;color:inherit}.intercom-reset input::-moz-placeholder,.intercom-reset textarea::-moz-placeholder{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size-adjust:none;font-size:100%;font-style:normal;letter-spacing:normal;font-stretch:normal;font-variant:normal;font-weight:400;font:normal normal 100% Helvetica Neue,Helvetica,Arial,sans-serif;text-align:left;-moz-text-align-last:initial;text-align-last:initial;text-decoration:none;text-emphasis:none;text-height:auto;text-indent:0;text-justify:auto;text-outline:none;text-shadow:none;text-transform:none;text-wrap:normal;background-color:inherit;color:inherit}.intercom-reset input:-ms-input-placeholder,.intercom-reset textarea:-ms-input-placeholder{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size-adjust:none;font-size:100%;font-style:normal;letter-spacing:normal;font-stretch:normal;font-variant:normal;font-weight:400;font:normal normal 100% Helvetica Neue,Helvetica,Arial,sans-serif;text-align:left;text-align-last:initial;text-decoration:none;text-emphasis:none;text-height:auto;text-indent:0;text-justify:auto;text-outline:none;text-shadow:none;text-transform:none;text-wrap:normal;background-color:inherit;color:inherit}.intercom-reset input[type=checkbox],.intercom-reset input[type=radio]{cursor:default}.intercom-reset a,.intercom-reset a *,.intercom-reset a span,.intercom-reset button,.intercom-reset button *,.intercom-reset button span,.intercom-reset input[type=reset],.intercom-reset input[type=submit]{cursor:pointer}.intercom-reset a:active,.intercom-reset a:hover,.intercom-reset a:link,.intercom-reset a:visited{color:inherit;background:transparent;text-shadow:none}.intercom-reset button::-moz-focus-inner{border:0;padding:0}.intercom-reset iframe{max-width:100%}.intercom-reset code{font-family:monospace,serif;font-size:1em}#intercom-container .intercom-announcement-body-container a.intercom-h2b-button,#intercom-container .intercom-composer-send-button,#intercom-container .intercom-conversations-new-conversation-button,#intercom-container .intercom-new-anonymous-user input[type=submit],#intercom-container .intercom-small-announcement-body-container a.intercom-h2b-button{box-shadow:inset 0 1px 0 0 hsla(0,0%,100%,.17);background:#82add3;background-image:linear-gradient(180deg,#96c1e7,#82add3);border-radius:3px;text-shadow:0 -1px rgba(0,0,0,.2);text-decoration:none;font-size:14px;line-height:25px;padding:0 9px;display:inline-block;color:#fff;border:1px solid #6e99bf}#intercom-container .intercom-announcement-body-container a.intercom-h2b-button:hover,#intercom-container .intercom-composer-send-button:hover,#intercom-container .intercom-conversations-new-conversation-button:hover,#intercom-container .intercom-new-anonymous-user input[type=submit]:hover,#intercom-container .intercom-small-announcement-body-container a.intercom-h2b-button:hover{background:#6e99bf;background-image:linear-gradient(180deg,#82add3,#6e99bf);border-color:#5a85ab}#intercom-container .intercom-announcement-body-container a.intercom-h2b-button:active,#intercom-container .intercom-composer-send-button:active,#intercom-container .intercom-conversations-new-conversation-button:active,#intercom-container .intercom-new-anonymous-user input[type=submit]:active,#intercom-container .intercom-small-announcement-body-container a.intercom-h2b-button:active{background:#5a85ab;border-color:#5a85ab}#intercom-container .intercom-announcement-body-container a.intercom-h2b-button:disabled,#intercom-container .intercom-composer-send-button:disabled,#intercom-container .intercom-conversations-new-conversation-button:disabled,#intercom-container .intercom-new-anonymous-user input[type=submit]:disabled,#intercom-container .intercom-small-announcement-body-container a.intercom-h2b-button:disabled{box-shadow:0 1px 1px 0 hsla(0,0%,100%,.11),inset 0 0 1px 1px hsla(0,0%,100%,.08);background:#acbbc2;background-image:linear-gradient(180deg,#b6c5cb,#acbbc2);border-color:#a0aeb4}#intercom-container .intercom-conversations-new-conversation-button{padding:2px 12px;font-weight:400;font-size:14px;line-height:30px}body>.intercom-container{z-index:2147483000;position:fixed}.intercom-embed-container{position:relative}@media print{#intercom-container{display:none}}#intercom-container .intercom-launcher{z-index:2147483000;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;position:fixed;bottom:20px;right:20px;width:48px;height:48px;visibility:hidden;-webkit-transform:translateZ(0)}#intercom-container .intercom-launcher-enabled{visibility:visible}#intercom-container .intercom-launcher-inactive{visibility:hidden}#intercom-container .intercom-launcher-badge,#intercom-container .intercom-launcher-initials,#intercom-container .intercom-launcher-preview{opacity:0;visibility:hidden}#intercom-container .intercom-launcher-inactive.intercom-launcher-maximized{opacity:1;visibility:visible}#intercom-container .intercom-launcher-inactive.intercom-launcher-minimized{opacity:0}#intercom-container .intercom-launcher-active.intercom-launcher-with-preview,#intercom-container .intercom-launcher-maximized.intercom-launcher-with-preview{width:330px}#intercom-container .intercom-launcher-active.intercom-launcher-with-badge .intercom-launcher-badge,#intercom-container .intercom-launcher-active.intercom-launcher-with-initials .intercom-launcher-initials,#intercom-container .intercom-launcher-active.intercom-launcher-with-preview .intercom-launcher-preview,#intercom-container .intercom-launcher-maximized.intercom-launcher-with-badge .intercom-launcher-badge,#intercom-container .intercom-launcher-maximized.intercom-launcher-with-initials .intercom-launcher-initials,#intercom-container .intercom-launcher-maximized.intercom-launcher-with-preview .intercom-launcher-preview{opacity:1;visibility:visible}#intercom-container .intercom-launcher.intercom-launcher-with-avatar .intercom-launcher-button{border-width:0;background-size:48px 48px}#intercom-container .intercom-launcher-active.intercom-launcher-with-message .intercom-launcher-button{visibility:visible}#intercom-container .intercom-launcher-button{background-image:url(https://js.intercomcdn.com/images/icon-launcher-support.1465758f.png);background-size:22px 22px;background-repeat:no-repeat;border-radius:50%;position:absolute;bottom:0;right:0;width:48px;height:48px;cursor:pointer;background-position:50%;background-color:#82add3;border:1px solid #5a85ab}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-launcher-button{background-image:url(https://js.intercomcdn.com/images/icon-launcher-support@2x.92602e45.png)}}#intercom-container.intercom-acquire .intercom-launcher-button{background-image:url(https://js.intercomcdn.com/images/icon-launcher-acquire.8a742481.png);background-size:26px 25px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container.intercom-acquire .intercom-launcher-button{background-image:url(https://js.intercomcdn.com/images/icon-launcher-acquire@2x.8a739dbd.png)}}#intercom-container.intercom-learn .intercom-launcher-button{background-image:url(https://js.intercomcdn.com/images/icon-launcher-learn.1f592eb7.png);background-size:22px 20px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container.intercom-learn .intercom-launcher-button{background-image:url(https://js.intercomcdn.com/images/icon-launcher-learn@2x.3e7fa84c.png)}}#intercom-container .intercom-launcher-maximized .intercom-launcher-button{background-image:url(https://js.intercomcdn.com/images/icon-launcher-minimized.3b631d81.png);background-size:22px 22px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-launcher-maximized .intercom-launcher-button{background-image:url(https://js.intercomcdn.com/images/icon-launcher-minimized@2x.43b2eb9d.png)}}#intercom-container .intercom-launcher-badge{border-radius:50%;font-size:12px;line-height:18px;background-color:#ff3c00;text-align:center;color:#fff;position:absolute;width:18px;height:18px;top:0;right:-7px;cursor:pointer}#intercom-container .intercom-launcher-initials{border-radius:50%;font-size:22px;line-height:48px;color:#fff;background-color:#82add3;font-weight:700;text-align:center;cursor:pointer}#intercom-container .intercom-launcher-preview{color:#455a64;position:absolute;bottom:2px;right:60px;max-width:240px;padding:12px 14px;color:#333;border-radius:10px;background:#fff;cursor:pointer}#intercom-container .intercom-launcher-preview,#intercom-container .intercom-launcher-preview .intercom-comment-body{font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-launcher-preview .intercom-container,#intercom-container .intercom-launcher-preview a,#intercom-container .intercom-launcher-preview blockquote,#intercom-container .intercom-launcher-preview code,#intercom-container .intercom-launcher-preview h1,#intercom-container .intercom-launcher-preview h2,#intercom-container .intercom-launcher-preview h3,#intercom-container .intercom-launcher-preview h4,#intercom-container .intercom-launcher-preview h5,#intercom-container .intercom-launcher-preview h6,#intercom-container .intercom-launcher-preview ol,#intercom-container .intercom-launcher-preview p,#intercom-container .intercom-launcher-preview ul{font-size:14px;font-weight:400;line-height:20px;word-wrap:break-word;margin:20px 0}#intercom-container .intercom-launcher-preview .intercom-container:first-child,#intercom-container .intercom-launcher-preview a:first-child,#intercom-container .intercom-launcher-preview blockquote:first-child,#intercom-container .intercom-launcher-preview code:first-child,#intercom-container .intercom-launcher-preview h1:first-child,#intercom-container .intercom-launcher-preview h2:first-child,#intercom-container .intercom-launcher-preview h3:first-child,#intercom-container .intercom-launcher-preview h4:first-child,#intercom-container .intercom-launcher-preview h5:first-child,#intercom-container .intercom-launcher-preview h6:first-child,#intercom-container .intercom-launcher-preview ol:first-child,#intercom-container .intercom-launcher-preview p:first-child,#intercom-container .intercom-launcher-preview ul:first-child{margin-top:0}#intercom-container .intercom-launcher-preview .intercom-container:last-child,#intercom-container .intercom-launcher-preview a:last-child,#intercom-container .intercom-launcher-preview blockquote:last-child,#intercom-container .intercom-launcher-preview code:last-child,#intercom-container .intercom-launcher-preview h1:last-child,#intercom-container .intercom-launcher-preview h2:last-child,#intercom-container .intercom-launcher-preview h3:last-child,#intercom-container .intercom-launcher-preview h4:last-child,#intercom-container .intercom-launcher-preview h5:last-child,#intercom-container .intercom-launcher-preview h6:last-child,#intercom-container .intercom-launcher-preview ol:last-child,#intercom-container .intercom-launcher-preview p:last-child,#intercom-container .intercom-launcher-preview ul:last-child{margin-bottom:0}#intercom-container .intercom-launcher-preview h1,#intercom-container .intercom-launcher-preview h1 a{font-size:14px;font-weight:700;line-height:20px;letter-spacing:normal;margin:27px 0;color:inherit}#intercom-container .intercom-launcher-preview h2,#intercom-container .intercom-launcher-preview h2 a{font-size:14px;line-height:20px;font-weight:700;margin:20px 0 10px;color:inherit}#intercom-container .intercom-launcher-preview ol,#intercom-container .intercom-launcher-preview ul{font-size:14px;-moz-padding-start:40px;-webkit-padding-start:40px;-khtml-padding-start:40px;-o-padding-start:40px;padding-start:40px;padding-left:30px}#intercom-container .intercom-launcher-preview [dir=ltr] ol,#intercom-container .intercom-launcher-preview [dir=ltr] ul{padding-left:30px}#intercom-container .intercom-launcher-preview [dir=rtl] ol,#intercom-container .intercom-launcher-preview [dir=rtl] ul{padding-right:30px}#intercom-container .intercom-launcher-preview ul>li{list-style-type:disc}#intercom-container .intercom-launcher-preview ol>li{list-style-type:decimal}#intercom-container .intercom-launcher-preview li{display:list-item;line-height:20px;margin-bottom:10px;font-weight:400}#intercom-container .intercom-launcher-preview em,#intercom-container .intercom-launcher-preview i{font-style:italic}#intercom-container .intercom-launcher-preview b,#intercom-container .intercom-launcher-preview strong{font-weight:700;line-height:100%}#intercom-container .intercom-launcher-preview pre{font-size:14px;padding:0 0 10px;white-space:pre-wrap}#intercom-container .intercom-launcher-preview img{display:block;max-width:100%;margin:10px 0}#intercom-container .intercom-launcher-preview p+br{display:none}#intercom-container .intercom-launcher-preview a:active,#intercom-container .intercom-launcher-preview a:hover,#intercom-container .intercom-launcher-preview a:link,#intercom-container .intercom-launcher-preview a:visited{text-decoration:underline}#intercom-container .intercom-launcher-preview a:link,#intercom-container .intercom-launcher-preview a:visited{color:#82add3}#intercom-container .intercom-launcher-preview a:active,#intercom-container .intercom-launcher-preview a:hover{color:#5a85ab}#intercom-container .intercom-launcher-preview h2+.ic_button_in_content,#intercom-container .intercom-launcher-preview h2+.ic_social_block,#intercom-container .intercom-launcher-preview h2+blockquote,#intercom-container .intercom-launcher-preview h2+ol,#intercom-container .intercom-launcher-preview h2+p,#intercom-container .intercom-launcher-preview h2+ul,#intercom-container .intercom-launcher-preview h3+.ic_button_in_content,#intercom-container .intercom-launcher-preview h3+.ic_social_block,#intercom-container .intercom-launcher-preview h3+blockquote,#intercom-container .intercom-launcher-preview h3+ol,#intercom-container .intercom-launcher-preview h3+p,#intercom-container .intercom-launcher-preview h3+ul,#intercom-container .intercom-launcher-preview h4+.ic_button_in_content,#intercom-container .intercom-launcher-preview h4+.ic_social_block,#intercom-container .intercom-launcher-preview h4+blockquote,#intercom-container .intercom-launcher-preview h4+ol,#intercom-container .intercom-launcher-preview h4+p,#intercom-container .intercom-launcher-preview h4+ul,#intercom-container .intercom-launcher-preview h5+.ic_button_in_content,#intercom-container .intercom-launcher-preview h5+.ic_social_block,#intercom-container .intercom-launcher-preview h5+blockquote,#intercom-container .intercom-launcher-preview h5+ol,#intercom-container .intercom-launcher-preview h5+p,#intercom-container .intercom-launcher-preview h5+ul,#intercom-container .intercom-launcher-preview h6+.ic_button_in_content,#intercom-container .intercom-launcher-preview h6+.ic_social_block,#intercom-container .intercom-launcher-preview h6+blockquote,#intercom-container .intercom-launcher-preview h6+ol,#intercom-container .intercom-launcher-preview h6+p,#intercom-container .intercom-launcher-preview h6+ul{margin-top:0}#intercom-container .intercom-launcher-preview .intercom-h2b-facebook,#intercom-container .intercom-launcher-preview .intercom-h2b-twitter{max-width:100%}#intercom-container .intercom-launcher-preview iframe[src*="vimeo.com"],#intercom-container .intercom-launcher-preview iframe[src*="wistia.net"],#intercom-container .intercom-launcher-preview iframe[src*="youtube.com"]{width:100%;height:149px;margin:20px auto}#intercom-container .intercom-launcher-preview:after,#intercom-container .intercom-launcher-preview:before{content:'';position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;border-radius:9.5px}#intercom-container .intercom-launcher-preview:before{background:hsla(0,0%,67%,.24);background-image:linear-gradient(180deg,#eee,hsla(0,0%,67%,.24));top:-1px;right:-1px;bottom:-1px;left:-1px}#intercom-container .intercom-launcher-preview:after{background-color:#fff}#intercom-container .intercom-launcher-preview:hover .intercom-launcher-preview-close{opacity:1}#intercom-container .intercom-launcher-button,#intercom-container .intercom-launcher-preview{box-shadow:0 6px 13px 0 rgba(0,0,0,.23)}#intercom-container .intercom-launcher-preview-caret:after,#intercom-container .intercom-launcher-preview-caret:before{left:100%;border:solid transparent;content:"";height:0;width:0;position:absolute;pointer-events:none}#intercom-container .intercom-launcher-preview-caret:after{border-width:5px;margin-top:-5px;bottom:18px;border-left-color:#fff}#intercom-container .intercom-launcher-preview-caret:before{border-width:6px;margin-top:-6px;bottom:17px;border-left-color:#ddd}#intercom-container .intercom-launcher-preview-multi-line{bottom:-8px}#intercom-container .intercom-launcher-preview-multi-line .intercom-launcher-preview-caret:before{bottom:27px}#intercom-container .intercom-launcher-preview-multi-line .intercom-launcher-preview-caret:after{bottom:28px}#intercom-container .intercom-launcher-preview-body{cursor:pointer}#intercom-container .intercom-launcher-preview-body a.intercom-h2b-button,#intercom-container .intercom-launcher-preview-body div.intercom-h2b-facebook,#intercom-container .intercom-launcher-preview-body div.intercom-h2b-twitter,#intercom-container .intercom-launcher-preview-body div.intercom-h2b-video,#intercom-container .intercom-launcher-preview-body img,#intercom-container .intercom-launcher-preview-body ol,#intercom-container .intercom-launcher-preview-body ul,#intercom-container .intercom-launcher-preview-body video{display:none}#intercom-container .intercom-launcher-preview-body a,#intercom-container .intercom-launcher-preview-body b,#intercom-container .intercom-launcher-preview-body h1,#intercom-container .intercom-launcher-preview-body h2,#intercom-container .intercom-launcher-preview-body i,#intercom-container .intercom-launcher-preview-body p{word-wrap:break-word;cursor:pointer;display:inline;margin:0;font-weight:400;font-style:normal}#intercom-container .intercom-launcher-preview-body.intercom-launcher-preview-metadata{font-style:italic}#intercom-container .intercom-launcher-preview-close{background-image:url(https://js.intercomcdn.com/images/icon-preview-close.ec1a68fc.png);background-size:18px 18px;background-repeat:no-repeat;opacity:0;cursor:pointer;position:absolute;top:-9px;left:-9px;width:18px;height:18px}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-launcher-preview-close{background-image:url(https://js.intercomcdn.com/images/icon-preview-close@2x.31f72604.png)}}#intercom-container .intercom-launcher-hovercard-close{cursor:pointer;position:absolute;top:-30px;right:-1px;background-color:rgba(40,45,50,.4);border-radius:40px;visibility:hidden;box-shadow:0 0 20px rgba(0,0,0,.12);padding:6px 10px 5px 22px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;color:#fff;background-position:10px;line-height:12px;background-image:url(https://js.intercomcdn.com/images/icon-close-white@1x.6082a959.png);background-size:8px 8px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-launcher-hovercard-close{background-image:url(https://js.intercomcdn.com/images/icon-close-white@2x.eca653ab.png)}}#intercom-container .intercom-launcher-hovercard-close:hover{background-color:rgba(40,45,50,.5)}#intercom-container .intercom-launcher-hovercard-close-active{visibility:visible}@media (max-width:480px){#intercom-container .intercom-launcher-preview{max-width:200px}}#intercom-container .intercom-launcher-hovercard{display:none;cursor:pointer;position:absolute;right:-5px;bottom:64px;background-color:#fafafb;width:340px;border-radius:5px;border:1px solid rgba(0,0,0,.1);box-shadow:0 0 10px rgba(0,0,0,.08)}#intercom-container .intercom-launcher-hovercard:after,#intercom-container .intercom-launcher-hovercard:before{top:100%;right:20px;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none}#intercom-container .intercom-launcher-hovercard:after{border-color:rgba(250,250,251,0);border-top-color:#fafafb;border-width:8px;margin-left:-5px;right:21px}#intercom-container .intercom-launcher-hovercard:before{border-color:hsla(0,0%,80%,0);border-top-color:rgba(0,0,0,.14);border-width:9px;margin-left:-6px}#intercom-container .intercom-launcher-hovercard-welcome{background-color:#fff;border-radius:5px 5px 0 0;border-bottom:1px solid #dfe0e1;box-shadow:0 1px 1px #f0f0f1;padding:26px 20px;overflow:hidden;cursor:pointer}#intercom-container .intercom-launcher-hovercard-admins{width:115px;position:relative;float:left;height:50px;cursor:pointer;text-align:center}#intercom-container .intercom-launcher-hovercard-admins .intercom-admin-avatar,#intercom-container .intercom-launcher-hovercard-admins .intercom-admin-avatar img{width:46px;height:46px}#intercom-container .intercom-launcher-hovercard-admins .intercom-admin-fallback-avatar{line-height:46px;font-size:18.4px}#intercom-container .intercom-launcher-hovercard-admins .intercom-admin-avatar,#intercom-container .intercom-launcher-hovercard-admins .intercom-admin-fallback-avatar{position:relative;display:inline-block;top:0;vertical-align:top;border:2px solid #fff;cursor:pointer;margin-left:-22px;z-index:2147483002}#intercom-container .intercom-launcher-hovercard-admins .intercom-admin-avatar:first-child,#intercom-container .intercom-launcher-hovercard-admins .intercom-admin-fallback-avatar:first-child{margin-left:0;z-index:2147483003}#intercom-container .intercom-launcher-hovercard-admins .intercom-admin-avatar:last-child,#intercom-container .intercom-launcher-hovercard-admins .intercom-admin-fallback-avatar:last-child{z-index:2147483001}#intercom-container .intercom-launcher-hovercard-text{float:right;width:174px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;cursor:pointer}#intercom-container .intercom-launcher-hovercard-app-name{font-weight:700;font-size:14px;color:#37474f;margin-bottom:7px;cursor:pointer}#intercom-container .intercom-launcher-hovercard-welcome-text{font-size:12px;color:#78909c;line-height:1.5;cursor:pointer}#intercom-container .intercom-launcher-hovercard-textarea{padding:18px 16px;font-size:16px;border-radius:0 0 5px 5px;height:42px;cursor:pointer}#intercom-container .intercom-launcher-hovercard-textarea textarea{width:100%;height:42px;box-sizing:border-box;background-color:#fff;font-weight:400;color:#455a64;resize:none;border:1px solid #cfd8dc;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:20px;padding:10px 70px 5px 14px;border-radius:4px}#intercom-container .intercom-launcher-hovercard-textarea textarea::-webkit-input-placeholder{color:#b0bec5;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-launcher-hovercard-textarea textarea::-moz-placeholder{color:#b0bec5;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-launcher-hovercard-textarea textarea:-ms-input-placeholder{color:#b0bec5;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-messenger{font-family:Helvetica Neue,Helvetica,Arial,sans-serif}#intercom-container .intercom-sheet{z-index:2147483000;visibility:hidden;position:fixed;height:100%;width:368px;bottom:0;right:0}#intercom-container .intercom-sheet-active{visibility:visible}#intercom-container .intercom-sheet-header{z-index:2147483002;box-shadow:0 1px 2px 0 rgba(0,0,0,.12);background:#fff;overflow:hidden;position:absolute;top:0;right:0;width:100%;height:48px}#intercom-container .intercom-sheet-footer{z-index:2147483002;box-shadow:0 -1px 2px 0 rgba(0,0,0,.06);background:#fff;position:absolute;bottom:0;right:0;width:100%;height:48px;text-align:center;-moz-text-align-last:center;text-align-last:center}#intercom-container .intercom-sheet-body{z-index:2147483000;background:#fafafb;background:rgba(250,250,251,.98);border-left:1px solid #dadee2;box-shadow:0 0 4px 1px rgba(0,0,0,.08);position:absolute;top:0;right:0;bottom:0;width:100%}#intercom-container .intercom-sheet-active .intercom-sheet-content{overflow-y:auto}#intercom-container .intercom-sheet-content{z-index:2147483001;position:absolute;top:48px;right:0;bottom:0;width:100%;-webkit-transform:translateZ(0)}#intercom-container .intercom-sheet-content-container{box-sizing:border-box;position:relative;min-height:100%;max-width:620px;margin:0 auto}#intercom-container .intercom-sheet-header-generic-title,#intercom-container .intercom-sheet-header-title-container{z-index:2147483000;position:absolute;left:0;top:0;width:100%;height:100%;text-align:center;-moz-text-align-last:center;text-align-last:center;pointer-events:none}#intercom-container .intercom-sheet-header-generic-title,#intercom-container .intercom-sheet-header-title{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:15px;line-height:48px;font-weight:500;color:#465c66;letter-spacing:.2px;display:inline-block;max-width:200px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#intercom-container .intercom-sheet-header-generic-title.intercom-sheet-header-with-presence,#intercom-container .intercom-sheet-header-title.intercom-sheet-header-with-presence{line-height:20px;padding-top:7px}#intercom-container .intercom-sheet-header-generic-title{display:none;top:-100%;max-width:100%}#intercom-container .intercom-sheet-header-show-generic .intercom-sheet-header-generic-title{display:block;top:0}#intercom-container .intercom-sheet-header-show-generic .intercom-sheet-header-title-container{display:none;top:100%}#intercom-container .intercom-last-active,#intercom-container .intercom-proactive-response-time{position:absolute;z-index:0;text-align:center;color:#90a4ae;font-size:12px;left:0;right:0;bottom:7px;line-height:14px}#intercom-container .intercom-sheet-header-app-name{font-weight:700}#intercom-container .intercom-sheet-header-button{z-index:2147483001;position:relative;margin:0 20px;height:48px}#intercom-container .intercom-sheet-header-button-icon{height:100%;background-position:50%}#intercom-container .intercom-sheet-header-conversations-button{float:left}#intercom-container .intercom-sheet-header-conversations-button .intercom-sheet-header-button-icon{background-image:url(https://js.intercomcdn.com/images/icon-conversations.6e0b2a74.png);background-size:15px 12px;background-repeat:no-repeat;background-position:50%;width:18px;float:left;opacity:.4}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-sheet-header-conversations-button .intercom-sheet-header-button-icon{background-image:url(https://js.intercomcdn.com/images/icon-conversations@2x.9ee78dea.png)}}#intercom-container .intercom-sheet-header-conversations-button .intercom-sheet-header-button-icon:hover{opacity:1;transition:opacity .2s linear}#intercom-container .intercom-sheet-header-close-button{float:right;margin-left:15px}#intercom-container .intercom-sheet-header-close-button .intercom-sheet-header-button-icon{background-image:url(https://js.intercomcdn.com/images/icon-close.c98afabe.png);background-size:13px 13px;background-repeat:no-repeat;width:16px;opacity:.4}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-sheet-header-close-button .intercom-sheet-header-button-icon{background-image:url(https://js.intercomcdn.com/images/icon-close@2x.ef367207.png)}}#intercom-container .intercom-sheet-header-close-button .intercom-sheet-header-button-icon:hover{opacity:1;transition:opacity .2s linear}#intercom-container .intercom-sheet-header-minimize-button{float:right;margin-right:0}#intercom-container .intercom-sheet-header-minimize-button .intercom-sheet-header-button-icon{background-image:url(https://js.intercomcdn.com/images/icon-minimize.d9de03dd.png);background-size:15px 15px;background-repeat:no-repeat;width:16px;opacity:.4}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-sheet-header-minimize-button .intercom-sheet-header-button-icon{background-image:url(https://js.intercomcdn.com/images/icon-minimize@2x.31dc3d95.png)}}#intercom-container .intercom-sheet-header-minimize-button .intercom-sheet-header-button-icon:hover{opacity:1;transition:opacity .2s linear}#intercom-container .intercom-sheet-loading .intercom-sheet-spinner{position:absolute;left:50%;top:50%;margin-left:-14px;margin-top:14px}#intercom-container .intercom-sheet-minimized{opacity:0;visibility:hidden}#intercom-container .intercom-sheet-maximized{width:100%}@media (max-width:460px){#intercom-container .intercom-sheet{width:100%}}@media (-ms-high-contrast:none),screen\0{#intercom-container .intercom-sheet{width:370px}#intercom-container .intercom-sheet-maximized{width:100%}}#intercom-container .intercom-conversation-parts-container{padding:16px}#intercom-container .intercom-conversation-part{padding-bottom:16px}#intercom-container .intercom-conversation-part:after,#intercom-container .intercom-conversation-part:before{content:" ";display:table}#intercom-container .intercom-conversation-part:after{clear:both}#intercom-container .intercom-conversation-part-unread .intercom-comment-by-admin .intercom-comment-timestamp{color:#93979f}#intercom-container .intercom-conversation-part-unread .intercom-comment-by-admin .intercom-comment-readstate{border-radius:50%;background-color:#82add3;width:7px;height:7px;margin-top:6px;overflow:auto}#intercom-container .intercom-conversation-part-failed .intercom-comment-body-container{opacity:.6}#intercom-container .intercom-conversation-part-failed .intercom-comment-body,#intercom-container .intercom-conversation-part-failed .intercom-comment-state{cursor:pointer}#intercom-container .intercom-conversation-part-failed .intercom-comment-metadata{color:#c00}#intercom-container .intercom-sheet-loading .intercom-conversation-parts,#intercom-container .intercom-sheet-loading .intercom-powered-by-container{opacity:0}#intercom-container .intercom-conversation-preview{pointer-events:none}#intercom-container .intercom-conversation-preview .intercom-composer,#intercom-container .intercom-conversation-preview .intercom-sheet-body,#intercom-container .intercom-conversation-preview .intercom-sheet-header{opacity:0}#intercom-container .intercom-conversation-preview .intercom-sheet-content{overflow-y:hidden}#intercom-container .intercom-conversation-preview .intercom-small-announcement{box-shadow:0 1px 10px 0 rgba(0,0,0,.08);pointer-events:auto}#intercom-container .intercom-conversation-part-grouped,#intercom-container .intercom-conversation-part-grouped-first{padding-bottom:2px}#intercom-container .intercom-conversation-part-grouped-first .intercom-comment-metadata,#intercom-container .intercom-conversation-part-grouped-first .intercom-comment-readstate,#intercom-container .intercom-conversation-part-grouped-last .intercom-comment-avatar,#intercom-container .intercom-conversation-part-grouped-last .intercom-comment-caret,#intercom-container .intercom-conversation-part-grouped .intercom-comment-avatar,#intercom-container .intercom-conversation-part-grouped .intercom-comment-caret,#intercom-container .intercom-conversation-part-grouped .intercom-comment-metadata,#intercom-container .intercom-conversation-part-grouped .intercom-comment-readstate{display:none}#intercom-container .intercom-article-card-container{padding:16px 0 0 16px;display:none}#intercom-container .intercom-conversations-item{display:block;padding-top:17px;padding-left:17px;text-decoration:none}#intercom-container .intercom-conversations-item,#intercom-container .intercom-conversations-item *{cursor:pointer}#intercom-container .intercom-conversations-item:hover{background-color:rgba(0,0,0,.02)}#intercom-container .intercom-conversations-item-admin-avatar,#intercom-container .intercom-conversations-item-user-avatar{border-radius:50%;float:left;margin-top:5px;display:inline-block;width:42px;height:42px}#intercom-container .intercom-conversations-item-admin-avatar{color:#fff;line-height:42px;text-align:center;font-size:18px;font-weight:700}#intercom-container .intercom-conversations-item-admin-avatar-no-image{background-color:#82add3}#intercom-container .intercom-conversations-item-user-avatar{background-color:#82add3;background-image:url(https://js.intercomcdn.com/images/icon-user-avatar.cc0ba124.png);background-size:38px 34px;background-repeat:no-repeat;background-position:50%;background-size:18px}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-conversations-item-user-avatar{background-image:url(https://js.intercomcdn.com/images/icon-user-avatar@2x.c98e6549.png)}}#intercom-container .intercom-default-admin-avatar{background-color:#82add3;font-size:13px;font-weight:700;text-align:center;color:#fff;width:28px;height:28px;line-height:28px}#intercom-container .intercom-conversations-item-body-container{margin-left:55px;padding-right:17px;border-bottom:1px solid #e7e7e7;height:80px}#intercom-container .intercom-conversations-item-header{margin-bottom:5px}#intercom-container .intercom-conversations-item-title-container{margin:0 50px 0 0}#intercom-container .intercom-conversations-item-title{color:#60686e;color:rgba(96,104,110,.8);font-size:15px;line-height:22px;font-weight:500;display:block;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#intercom-container .intercom-conversations-item-timestamp{float:right;font-size:12px;line-height:20px;color:#aaa;width:50px;text-align:right}#intercom-container .intercom-conversations-item-summary{color:#60686e;color:rgba(96,104,110,.8);font-size:14px;font-weight:400;line-height:19px;height:40px;overflow:hidden;position:relative;padding-right:15px;word-break:break-word}#intercom-container .intercom-conversations-item-summary.intercom-conversations-item-summary-metadata{font-style:italic}#intercom-container .intercom-conversations-new-conversation-button{margin:8px;font-weight:500;padding:0 18px}#intercom-container .intercom-conversations-new-conversation-button i{background-image:url(https://js.intercomcdn.com/images/icon-compose.ae40ed11.png);background-size:15px 14px;background-repeat:no-repeat;display:inline-block;width:15px;height:15px;margin:0 8px -2px 0}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-conversations-new-conversation-button i{background-image:url(https://js.intercomcdn.com/images/icon-compose@2x.d2936115.png)}}#intercom-container .intercom-conversations-item-unread .intercom-conversations-item-header span{color:#3d4347;font-weight:500;white-space:nowrap}#intercom-container .intercom-conversations-item-unread .intercom-conversations-item-summary{color:#3d4347}#intercom-container .intercom-conversations-item-unread .intercom-conversations-item-readstate{border-radius:50%;background-color:#82add3;width:7px;height:7px;position:absolute;bottom:27px;right:0}#intercom-container .intercom-no-conversations{position:absolute;top:50%;left:0;right:0;margin:-38px auto 0;text-align:center;color:#e4e5e7;display:none}#intercom-container .intercom-no-conversations .intercom-no-conversations-icon{background-image:url(https://js.intercomcdn.com/images/icon-no-conversations.c8479cfc.png);background-size:79px 59px;background-repeat:no-repeat;display:block;width:79px;height:59px;margin:0 auto 10px}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-no-conversations .intercom-no-conversations-icon{background-image:url(https://js.intercomcdn.com/images/icon-no-conversations@2x.3ba90162.png)}}#intercom-container.intercom-learn .intercom-no-conversations .intercom-no-conversations-icon{height:46px;background-image:url(https://js.intercomcdn.com/images/empty-inbox.e63231e3.png);background-size:79px 46px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container.intercom-learn .intercom-no-conversations .intercom-no-conversations-icon{background-image:url(https://js.intercomcdn.com/images/empty-inbox@2x.15a2054e.png)}}#intercom-container .intercom-conversations-empty .intercom-no-conversations{display:block}#intercom-container .intercom-new-message-enabled .intercom-conversations-content{bottom:48px}#intercom-container .intercom-conversations-fetching .intercom-conversations-spinner{position:relative;left:50%;margin-left:-14px;margin-top:40px;margin-bottom:40px}#intercom-container .intercom-attachments{border-top:1px solid #e4e5e7;padding:11px 14px}#intercom-container .intercom-attachments.intercom-attachments-stand-alone{border:none}#intercom-container .intercom-attachment{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%;font-size:14px}#intercom-container .intercom-comment-by-user .intercom-attachments{border-top:1px solid #6e99bf}#intercom-container .intercom-comment{line-height:20px;position:relative;clear:both;max-width:272px}#intercom-container .intercom-comment-by-user{float:right}#intercom-container .intercom-comment-by-admin{float:left;padding-left:38px}#intercom-container .intercom-comment-is-typing-icon{display:none}#intercom-container .intercom-comment-avatar{border-radius:50%;width:28px;height:28px;position:absolute;left:0;top:9px}#intercom-container .intercom-comment-body-container{font-size:14px;font-weight:400;color:#455a64;line-height:20px;border-radius:9px;border-width:1px;border-style:solid;position:relative;max-width:100%}#intercom-container .intercom-comment-body-container .intercom-comment-body{font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-comment-body-container .intercom-container,#intercom-container .intercom-comment-body-container a,#intercom-container .intercom-comment-body-container blockquote,#intercom-container .intercom-comment-body-container code,#intercom-container .intercom-comment-body-container h1,#intercom-container .intercom-comment-body-container h2,#intercom-container .intercom-comment-body-container h3,#intercom-container .intercom-comment-body-container h4,#intercom-container .intercom-comment-body-container h5,#intercom-container .intercom-comment-body-container h6,#intercom-container .intercom-comment-body-container ol,#intercom-container .intercom-comment-body-container p,#intercom-container .intercom-comment-body-container ul{font-size:14px;font-weight:400;line-height:20px;word-wrap:break-word;margin:20px 0}#intercom-container .intercom-comment-body-container .intercom-container:first-child,#intercom-container .intercom-comment-body-container a:first-child,#intercom-container .intercom-comment-body-container blockquote:first-child,#intercom-container .intercom-comment-body-container code:first-child,#intercom-container .intercom-comment-body-container h1:first-child,#intercom-container .intercom-comment-body-container h2:first-child,#intercom-container .intercom-comment-body-container h3:first-child,#intercom-container .intercom-comment-body-container h4:first-child,#intercom-container .intercom-comment-body-container h5:first-child,#intercom-container .intercom-comment-body-container h6:first-child,#intercom-container .intercom-comment-body-container ol:first-child,#intercom-container .intercom-comment-body-container p:first-child,#intercom-container .intercom-comment-body-container ul:first-child{margin-top:0}#intercom-container .intercom-comment-body-container .intercom-container:last-child,#intercom-container .intercom-comment-body-container a:last-child,#intercom-container .intercom-comment-body-container blockquote:last-child,#intercom-container .intercom-comment-body-container code:last-child,#intercom-container .intercom-comment-body-container h1:last-child,#intercom-container .intercom-comment-body-container h2:last-child,#intercom-container .intercom-comment-body-container h3:last-child,#intercom-container .intercom-comment-body-container h4:last-child,#intercom-container .intercom-comment-body-container h5:last-child,#intercom-container .intercom-comment-body-container h6:last-child,#intercom-container .intercom-comment-body-container ol:last-child,#intercom-container .intercom-comment-body-container p:last-child,#intercom-container .intercom-comment-body-container ul:last-child{margin-bottom:0}#intercom-container .intercom-comment-body-container h1,#intercom-container .intercom-comment-body-container h1 a{font-size:14px;font-weight:700;line-height:20px;letter-spacing:normal;margin:27px 0;color:inherit}#intercom-container .intercom-comment-body-container h2,#intercom-container .intercom-comment-body-container h2 a{font-size:14px;line-height:20px;font-weight:700;margin:20px 0 10px;color:inherit}#intercom-container .intercom-comment-body-container ol,#intercom-container .intercom-comment-body-container ul{font-size:14px;-moz-padding-start:40px;-webkit-padding-start:40px;-khtml-padding-start:40px;-o-padding-start:40px;padding-start:40px;padding-left:30px}#intercom-container .intercom-comment-body-container [dir=ltr] ol,#intercom-container .intercom-comment-body-container [dir=ltr] ul{padding-left:30px}#intercom-container .intercom-comment-body-container [dir=rtl] ol,#intercom-container .intercom-comment-body-container [dir=rtl] ul{padding-right:30px}#intercom-container .intercom-comment-body-container ul>li{list-style-type:disc}#intercom-container .intercom-comment-body-container ol>li{list-style-type:decimal}#intercom-container .intercom-comment-body-container li{display:list-item;line-height:20px;margin-bottom:10px;font-weight:400}#intercom-container .intercom-comment-body-container em,#intercom-container .intercom-comment-body-container i{font-style:italic}#intercom-container .intercom-comment-body-container b,#intercom-container .intercom-comment-body-container strong{font-weight:700;line-height:100%}#intercom-container .intercom-comment-body-container pre{font-size:14px;padding:0 0 10px;white-space:pre-wrap}#intercom-container .intercom-comment-body-container img{display:block;max-width:100%;margin:10px 0}#intercom-container .intercom-comment-body-container p+br{display:none}#intercom-container .intercom-comment-body-container a:active,#intercom-container .intercom-comment-body-container a:hover,#intercom-container .intercom-comment-body-container a:link,#intercom-container .intercom-comment-body-container a:visited{text-decoration:underline}#intercom-container .intercom-comment-body-container a:link,#intercom-container .intercom-comment-body-container a:visited{color:#82add3}#intercom-container .intercom-comment-body-container a:active,#intercom-container .intercom-comment-body-container a:hover{color:#5a85ab}#intercom-container .intercom-comment-body-container h2+.ic_button_in_content,#intercom-container .intercom-comment-body-container h2+.ic_social_block,#intercom-container .intercom-comment-body-container h2+blockquote,#intercom-container .intercom-comment-body-container h2+ol,#intercom-container .intercom-comment-body-container h2+p,#intercom-container .intercom-comment-body-container h2+ul,#intercom-container .intercom-comment-body-container h3+.ic_button_in_content,#intercom-container .intercom-comment-body-container h3+.ic_social_block,#intercom-container .intercom-comment-body-container h3+blockquote,#intercom-container .intercom-comment-body-container h3+ol,#intercom-container .intercom-comment-body-container h3+p,#intercom-container .intercom-comment-body-container h3+ul,#intercom-container .intercom-comment-body-container h4+.ic_button_in_content,#intercom-container .intercom-comment-body-container h4+.ic_social_block,#intercom-container .intercom-comment-body-container h4+blockquote,#intercom-container .intercom-comment-body-container h4+ol,#intercom-container .intercom-comment-body-container h4+p,#intercom-container .intercom-comment-body-container h4+ul,#intercom-container .intercom-comment-body-container h5+.ic_button_in_content,#intercom-container .intercom-comment-body-container h5+.ic_social_block,#intercom-container .intercom-comment-body-container h5+blockquote,#intercom-container .intercom-comment-body-container h5+ol,#intercom-container .intercom-comment-body-container h5+p,#intercom-container .intercom-comment-body-container h5+ul,#intercom-container .intercom-comment-body-container h6+.ic_button_in_content,#intercom-container .intercom-comment-body-container h6+.ic_social_block,#intercom-container .intercom-comment-body-container h6+blockquote,#intercom-container .intercom-comment-body-container h6+ol,#intercom-container .intercom-comment-body-container h6+p,#intercom-container .intercom-comment-body-container h6+ul{margin-top:0}#intercom-container .intercom-comment-body-container .intercom-h2b-facebook,#intercom-container .intercom-comment-body-container .intercom-h2b-twitter{max-width:100%}#intercom-container .intercom-comment-body-container iframe[src*="vimeo.com"],#intercom-container .intercom-comment-body-container iframe[src*="wistia.net"],#intercom-container .intercom-comment-body-container iframe[src*="youtube.com"]{width:100%;height:149px;margin:20px auto}#intercom-container .intercom-comment .intercom-lwr-composer{border-radius:0 0 8px 8px}#intercom-container .intercom-comment-body{padding:12px 17px}#intercom-container .intercom-comment-body p{margin:1em 0 0}#intercom-container .intercom-comment-body p:first-child{margin-top:0}#intercom-container .intercom-comment-body pre span{color:inherit!important;background-color:inherit!important;font-weight:inherit!important;word-wrap:break-word}#intercom-container .intercom-comment-metadata-container{padding:2px 2px 0}#intercom-container .intercom-comment-metadata{font-size:12px;line-height:20px;color:#b0bec5;float:left}#intercom-container .intercom-comment-by-admin .intercom-comment-metadata{margin-right:6px}#intercom-container .intercom-comment-caret:after,#intercom-container .intercom-comment-caret:before{top:19px;border:solid transparent;content:"";height:0;width:0;position:absolute;pointer-events:none}#intercom-container .intercom-comment-caret:after{border-width:3px;margin-top:1px}#intercom-container .intercom-comment-caret:before{border-width:4px}#intercom-container .intercom-comment-by-user{text-align:right}#intercom-container .intercom-comment-by-user .intercom-comment-body-container{display:inline-block;background-color:#82add3;color:#fff}#intercom-container .intercom-comment-by-user .intercom-comment-body-container a,#intercom-container .intercom-comment-by-user .intercom-comment-body-container a:active,#intercom-container .intercom-comment-by-user .intercom-comment-body-container a:hover,#intercom-container .intercom-comment-by-user .intercom-comment-body-container a:link,#intercom-container .intercom-comment-by-user .intercom-comment-body-container a:visited{color:#fff}#intercom-container .intercom-comment-by-user .intercom-comment-metadata{float:right}#intercom-container .intercom-comment-by-user .intercom-comment-caret:after,#intercom-container .intercom-comment-by-user .intercom-comment-caret:before{left:100%}#intercom-container .intercom-comment-by-user .intercom-comment-caret:after{border-width:4px;margin-top:-1px;border-left-color:#82add3}#intercom-container .intercom-comment-by-admin .intercom-comment-body-container{box-shadow:0 1px 2px 0 rgba(234,236,238,.8);background-color:#fff;border-color:#dadee2}#intercom-container .intercom-comment-by-admin .intercom-comment-caret:after,#intercom-container .intercom-comment-by-admin .intercom-comment-caret:before{right:100%}#intercom-container .intercom-comment-by-admin .intercom-comment-caret:after{border-right-color:#fff}#intercom-container .intercom-comment-by-admin .intercom-comment-caret:before{border-right-color:#dadee2}#intercom-container .intercom-comment-by-interbot .intercom-comment-body-container{box-shadow:none;background-color:#e6eef4;border-color:#e6eef4}#intercom-container .intercom-comment-by-interbot .intercom-comment-avatar{border-radius:0}#intercom-container .intercom-comment-by-interbot .intercom-comment-caret:after,#intercom-container .intercom-comment-by-interbot .intercom-comment-caret:before{border-right-color:#e6eef4}#intercom-container .intercom-upload-comment.intercom-upload-is-uploading .intercom-comment-body-container{opacity:.6}#intercom-container .intercom-upload-comment.intercom-upload-is-uploading .intercom-comment-body-container a,#intercom-container .intercom-upload-comment.intercom-upload-is-uploading .intercom-comment-body-container a:active,#intercom-container .intercom-upload-comment.intercom-upload-is-uploading .intercom-comment-body-container a:hover,#intercom-container .intercom-upload-comment.intercom-upload-is-uploading .intercom-comment-body-container a:link,#intercom-container .intercom-upload-comment.intercom-upload-is-uploading .intercom-comment-body-container a:visited{text-decoration:none;cursor:default}#intercom-container .intercom-upload-comment .intercom-upload-body{padding-left:50px}#intercom-container .intercom-upload-comment .intercom-upload-body:before{content:' ';position:absolute;left:0;top:8px;bottom:8px;width:37px;border-right:1px solid #fff;border-right:1px solid hsla(0,0%,100%,.3);background-image:url(https://js.intercomcdn.com/images/icon-upload-white.f4e8f08e.png);background-size:16px 15px;background-position:50%;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-upload-comment .intercom-upload-body:before{background-image:url(https://js.intercomcdn.com/images/icon-upload-white@2x.751fc11c.png)}}#intercom-container .intercom-upload-comment.intercom-upload-image{max-width:266px}#intercom-container .intercom-upload-comment.intercom-upload-image .intercom-comment-body-container{background-color:transparent}#intercom-container .intercom-upload-comment.intercom-upload-image .intercom-comment-caret{display:none}#intercom-container .intercom-upload-comment.intercom-upload-image .intercom-upload-body{padding:0}#intercom-container .intercom-upload-comment.intercom-upload-image .intercom-upload-body:before{display:none}#intercom-container .intercom-upload-comment.intercom-upload-image .intercom-upload-body img{margin:0;border-radius:4px}#intercom-container .intercom-upload-comment .intercom-attachment-progress-bar{border-radius:4px;position:relative;display:inline-block;width:50px;height:6px;border:1px solid #ccc;vertical-align:middle;background-color:#fff;margin:0 5px}#intercom-container .intercom-upload-comment .intercom-attachment-progress-percentage{transition:width .4s;width:0;border-radius:3px;background-color:#82add3;position:absolute;top:0;left:0;bottom:0}#intercom-container .intercom-conversation-preview .intercom-comment-metadata{display:none}#intercom-container .intercom-conversation-part-component-spacer{height:8px}#intercom-container .intercom-auto-response{display:none;margin-bottom:16px;padding:16px;border-width:1px 0;border-style:solid;border-top:1px solid #e4e5e7;border-bottom:1px solid #e4e5e7;border-image:linear-gradient(90deg,#edf0f2,#e5e5e5 18%,#e5e5e5 82%,#edf0f2) 1}#intercom-container .intercom-auto-response-acquire{display:none;background-color:rgba(130,173,211,0.1);border-radius:5px;margin-bottom:16px}#intercom-container .intercom-auto-response-active{display:block}#intercom-container .intercom-auto-response-acquire p,#intercom-container .intercom-auto-response p{font-size:14px;font-weight:400;color:#455a64;line-height:20px;font-size:13px;color:#5c6f7a;line-height:18px;text-align:center;padding:5px 0}#intercom-container .intercom-auto-response-acquire p .intercom-comment-body,#intercom-container .intercom-auto-response p .intercom-comment-body{font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-auto-response-acquire p .intercom-container,#intercom-container .intercom-auto-response-acquire p a,#intercom-container .intercom-auto-response-acquire p blockquote,#intercom-container .intercom-auto-response-acquire p code,#intercom-container .intercom-auto-response-acquire p h1,#intercom-container .intercom-auto-response-acquire p h2,#intercom-container .intercom-auto-response-acquire p h3,#intercom-container .intercom-auto-response-acquire p h4,#intercom-container .intercom-auto-response-acquire p h5,#intercom-container .intercom-auto-response-acquire p h6,#intercom-container .intercom-auto-response-acquire p ol,#intercom-container .intercom-auto-response-acquire p p,#intercom-container .intercom-auto-response-acquire p ul,#intercom-container .intercom-auto-response p .intercom-container,#intercom-container .intercom-auto-response p a,#intercom-container .intercom-auto-response p blockquote,#intercom-container .intercom-auto-response p code,#intercom-container .intercom-auto-response p h1,#intercom-container .intercom-auto-response p h2,#intercom-container .intercom-auto-response p h3,#intercom-container .intercom-auto-response p h4,#intercom-container .intercom-auto-response p h5,#intercom-container .intercom-auto-response p h6,#intercom-container .intercom-auto-response p ol,#intercom-container .intercom-auto-response p p,#intercom-container .intercom-auto-response p ul{font-size:14px;font-weight:400;line-height:20px;word-wrap:break-word;margin:20px 0}#intercom-container .intercom-auto-response-acquire p .intercom-container:first-child,#intercom-container .intercom-auto-response-acquire p a:first-child,#intercom-container .intercom-auto-response-acquire p blockquote:first-child,#intercom-container .intercom-auto-response-acquire p code:first-child,#intercom-container .intercom-auto-response-acquire p h1:first-child,#intercom-container .intercom-auto-response-acquire p h2:first-child,#intercom-container .intercom-auto-response-acquire p h3:first-child,#intercom-container .intercom-auto-response-acquire p h4:first-child,#intercom-container .intercom-auto-response-acquire p h5:first-child,#intercom-container .intercom-auto-response-acquire p h6:first-child,#intercom-container .intercom-auto-response-acquire p ol:first-child,#intercom-container .intercom-auto-response-acquire p p:first-child,#intercom-container .intercom-auto-response-acquire p ul:first-child,#intercom-container .intercom-auto-response p .intercom-container:first-child,#intercom-container .intercom-auto-response p a:first-child,#intercom-container .intercom-auto-response p blockquote:first-child,#intercom-container .intercom-auto-response p code:first-child,#intercom-container .intercom-auto-response p h1:first-child,#intercom-container .intercom-auto-response p h2:first-child,#intercom-container .intercom-auto-response p h3:first-child,#intercom-container .intercom-auto-response p h4:first-child,#intercom-container .intercom-auto-response p h5:first-child,#intercom-container .intercom-auto-response p h6:first-child,#intercom-container .intercom-auto-response p ol:first-child,#intercom-container .intercom-auto-response p p:first-child,#intercom-container .intercom-auto-response p ul:first-child{margin-top:0}#intercom-container .intercom-auto-response-acquire p .intercom-container:last-child,#intercom-container .intercom-auto-response-acquire p a:last-child,#intercom-container .intercom-auto-response-acquire p blockquote:last-child,#intercom-container .intercom-auto-response-acquire p code:last-child,#intercom-container .intercom-auto-response-acquire p h1:last-child,#intercom-container .intercom-auto-response-acquire p h2:last-child,#intercom-container .intercom-auto-response-acquire p h3:last-child,#intercom-container .intercom-auto-response-acquire p h4:last-child,#intercom-container .intercom-auto-response-acquire p h5:last-child,#intercom-container .intercom-auto-response-acquire p h6:last-child,#intercom-container .intercom-auto-response-acquire p ol:last-child,#intercom-container .intercom-auto-response-acquire p p:last-child,#intercom-container .intercom-auto-response-acquire p ul:last-child,#intercom-container .intercom-auto-response p .intercom-container:last-child,#intercom-container .intercom-auto-response p a:last-child,#intercom-container .intercom-auto-response p blockquote:last-child,#intercom-container .intercom-auto-response p code:last-child,#intercom-container .intercom-auto-response p h1:last-child,#intercom-container .intercom-auto-response p h2:last-child,#intercom-container .intercom-auto-response p h3:last-child,#intercom-container .intercom-auto-response p h4:last-child,#intercom-container .intercom-auto-response p h5:last-child,#intercom-container .intercom-auto-response p h6:last-child,#intercom-container .intercom-auto-response p ol:last-child,#intercom-container .intercom-auto-response p p:last-child,#intercom-container .intercom-auto-response p ul:last-child{margin-bottom:0}#intercom-container .intercom-auto-response-acquire p h1,#intercom-container .intercom-auto-response-acquire p h1 a,#intercom-container .intercom-auto-response p h1,#intercom-container .intercom-auto-response p h1 a{font-size:14px;font-weight:700;line-height:20px;letter-spacing:normal;margin:27px 0;color:inherit}#intercom-container .intercom-auto-response-acquire p h2,#intercom-container .intercom-auto-response-acquire p h2 a,#intercom-container .intercom-auto-response p h2,#intercom-container .intercom-auto-response p h2 a{font-size:14px;line-height:20px;font-weight:700;margin:20px 0 10px;color:inherit}#intercom-container .intercom-auto-response-acquire p ol,#intercom-container .intercom-auto-response-acquire p ul,#intercom-container .intercom-auto-response p ol,#intercom-container .intercom-auto-response p ul{font-size:14px;-moz-padding-start:40px;-webkit-padding-start:40px;-khtml-padding-start:40px;-o-padding-start:40px;padding-start:40px;padding-left:30px}#intercom-container .intercom-auto-response-acquire p [dir=ltr] ol,#intercom-container .intercom-auto-response-acquire p [dir=ltr] ul,#intercom-container .intercom-auto-response p [dir=ltr] ol,#intercom-container .intercom-auto-response p [dir=ltr] ul{padding-left:30px}#intercom-container .intercom-auto-response-acquire p [dir=rtl] ol,#intercom-container .intercom-auto-response-acquire p [dir=rtl] ul,#intercom-container .intercom-auto-response p [dir=rtl] ol,#intercom-container .intercom-auto-response p [dir=rtl] ul{padding-right:30px}#intercom-container .intercom-auto-response-acquire p ul>li,#intercom-container .intercom-auto-response p ul>li{list-style-type:disc}#intercom-container .intercom-auto-response-acquire p ol>li,#intercom-container .intercom-auto-response p ol>li{list-style-type:decimal}#intercom-container .intercom-auto-response-acquire p li,#intercom-container .intercom-auto-response p li{display:list-item;line-height:20px;margin-bottom:10px;font-weight:400}#intercom-container .intercom-auto-response-acquire p em,#intercom-container .intercom-auto-response-acquire p i,#intercom-container .intercom-auto-response p em,#intercom-container .intercom-auto-response p i{font-style:italic}#intercom-container .intercom-auto-response-acquire p b,#intercom-container .intercom-auto-response-acquire p strong,#intercom-container .intercom-auto-response p b,#intercom-container .intercom-auto-response p strong{font-weight:700;line-height:100%}#intercom-container .intercom-auto-response-acquire p pre,#intercom-container .intercom-auto-response p pre{font-size:14px;padding:0 0 10px;white-space:pre-wrap}#intercom-container .intercom-auto-response-acquire p img,#intercom-container .intercom-auto-response p img{display:block;max-width:100%;margin:10px 0}#intercom-container .intercom-auto-response-acquire p p+br,#intercom-container .intercom-auto-response p p+br{display:none}#intercom-container .intercom-auto-response-acquire p a:active,#intercom-container .intercom-auto-response-acquire p a:hover,#intercom-container .intercom-auto-response-acquire p a:link,#intercom-container .intercom-auto-response-acquire p a:visited,#intercom-container .intercom-auto-response p a:active,#intercom-container .intercom-auto-response p a:hover,#intercom-container .intercom-auto-response p a:link,#intercom-container .intercom-auto-response p a:visited{text-decoration:underline}#intercom-container .intercom-auto-response-acquire p a:link,#intercom-container .intercom-auto-response-acquire p a:visited,#intercom-container .intercom-auto-response p a:link,#intercom-container .intercom-auto-response p a:visited{color:#82add3}#intercom-container .intercom-auto-response-acquire p a:active,#intercom-container .intercom-auto-response-acquire p a:hover,#intercom-container .intercom-auto-response p a:active,#intercom-container .intercom-auto-response p a:hover{color:#5a85ab}#intercom-container .intercom-auto-response-acquire p h2+.ic_button_in_content,#intercom-container .intercom-auto-response-acquire p h2+.ic_social_block,#intercom-container .intercom-auto-response-acquire p h2+blockquote,#intercom-container .intercom-auto-response-acquire p h2+ol,#intercom-container .intercom-auto-response-acquire p h2+p,#intercom-container .intercom-auto-response-acquire p h2+ul,#intercom-container .intercom-auto-response-acquire p h3+.ic_button_in_content,#intercom-container .intercom-auto-response-acquire p h3+.ic_social_block,#intercom-container .intercom-auto-response-acquire p h3+blockquote,#intercom-container .intercom-auto-response-acquire p h3+ol,#intercom-container .intercom-auto-response-acquire p h3+p,#intercom-container .intercom-auto-response-acquire p h3+ul,#intercom-container .intercom-auto-response-acquire p h4+.ic_button_in_content,#intercom-container .intercom-auto-response-acquire p h4+.ic_social_block,#intercom-container .intercom-auto-response-acquire p h4+blockquote,#intercom-container .intercom-auto-response-acquire p h4+ol,#intercom-container .intercom-auto-response-acquire p h4+p,#intercom-container .intercom-auto-response-acquire p h4+ul,#intercom-container .intercom-auto-response-acquire p h5+.ic_button_in_content,#intercom-container .intercom-auto-response-acquire p h5+.ic_social_block,#intercom-container .intercom-auto-response-acquire p h5+blockquote,#intercom-container .intercom-auto-response-acquire p h5+ol,#intercom-container .intercom-auto-response-acquire p h5+p,#intercom-container .intercom-auto-response-acquire p h5+ul,#intercom-container .intercom-auto-response-acquire p h6+.ic_button_in_content,#intercom-container .intercom-auto-response-acquire p h6+.ic_social_block,#intercom-container .intercom-auto-response-acquire p h6+blockquote,#intercom-container .intercom-auto-response-acquire p h6+ol,#intercom-container .intercom-auto-response-acquire p h6+p,#intercom-container .intercom-auto-response-acquire p h6+ul,#intercom-container .intercom-auto-response p h2+.ic_button_in_content,#intercom-container .intercom-auto-response p h2+.ic_social_block,#intercom-container .intercom-auto-response p h2+blockquote,#intercom-container .intercom-auto-response p h2+ol,#intercom-container .intercom-auto-response p h2+p,#intercom-container .intercom-auto-response p h2+ul,#intercom-container .intercom-auto-response p h3+.ic_button_in_content,#intercom-container .intercom-auto-response p h3+.ic_social_block,#intercom-container .intercom-auto-response p h3+blockquote,#intercom-container .intercom-auto-response p h3+ol,#intercom-container .intercom-auto-response p h3+p,#intercom-container .intercom-auto-response p h3+ul,#intercom-container .intercom-auto-response p h4+.ic_button_in_content,#intercom-container .intercom-auto-response p h4+.ic_social_block,#intercom-container .intercom-auto-response p h4+blockquote,#intercom-container .intercom-auto-response p h4+ol,#intercom-container .intercom-auto-response p h4+p,#intercom-container .intercom-auto-response p h4+ul,#intercom-container .intercom-auto-response p h5+.ic_button_in_content,#intercom-container .intercom-auto-response p h5+.ic_social_block,#intercom-container .intercom-auto-response p h5+blockquote,#intercom-container .intercom-auto-response p h5+ol,#intercom-container .intercom-auto-response p h5+p,#intercom-container .intercom-auto-response p h5+ul,#intercom-container .intercom-auto-response p h6+.ic_button_in_content,#intercom-container .intercom-auto-response p h6+.ic_social_block,#intercom-container .intercom-auto-response p h6+blockquote,#intercom-container .intercom-auto-response p h6+ol,#intercom-container .intercom-auto-response p h6+p,#intercom-container .intercom-auto-response p h6+ul{margin-top:0}#intercom-container .intercom-auto-response-acquire p .intercom-h2b-facebook,#intercom-container .intercom-auto-response-acquire p .intercom-h2b-twitter,#intercom-container .intercom-auto-response p .intercom-h2b-facebook,#intercom-container .intercom-auto-response p .intercom-h2b-twitter{max-width:100%}#intercom-container .intercom-auto-response-acquire p iframe[src*="vimeo.com"],#intercom-container .intercom-auto-response-acquire p iframe[src*="wistia.net"],#intercom-container .intercom-auto-response-acquire p iframe[src*="youtube.com"],#intercom-container .intercom-auto-response p iframe[src*="vimeo.com"],#intercom-container .intercom-auto-response p iframe[src*="wistia.net"],#intercom-container .intercom-auto-response p iframe[src*="youtube.com"]{width:100%;height:149px;margin:20px auto}#intercom-container .intercom-auto-response-acquire p a:active,#intercom-container .intercom-auto-response-acquire p a:hover,#intercom-container .intercom-auto-response-acquire p a:link,#intercom-container .intercom-auto-response-acquire p a:visited,#intercom-container .intercom-auto-response p a:active,#intercom-container .intercom-auto-response p a:hover,#intercom-container .intercom-auto-response p a:link,#intercom-container .intercom-auto-response p a:visited{color:#90a4ae}#intercom-container .intercom-auto-response-acquire p{padding-left:18px;padding-top:15px;padding-bottom:0;text-align:left}#intercom-container .intercom-new-email-confirmation-padding p{padding-bottom:15px}#intercom-container .intercom-notification-channels{position:relative;margin-bottom:16px;padding:16px;border:1px solid #e4e5e7;border-radius:5px;text-align:left;background-color:#fff}#intercom-container .intercom-notification-channels .intercom-new-anonymous-user-input-container{margin-top:8px;width:auto}#intercom-container .intercom-notification-channels p{font-weight:400;color:#455a64;line-height:20px;color:#5c6f7a;line-height:24px;text-align:left;font-size:14px;font-weight:500;margin-bottom:20px}#intercom-container .intercom-notification-channels p .intercom-comment-body{font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-notification-channels p .intercom-container,#intercom-container .intercom-notification-channels p a,#intercom-container .intercom-notification-channels p blockquote,#intercom-container .intercom-notification-channels p code,#intercom-container .intercom-notification-channels p h1,#intercom-container .intercom-notification-channels p h2,#intercom-container .intercom-notification-channels p h3,#intercom-container .intercom-notification-channels p h4,#intercom-container .intercom-notification-channels p h5,#intercom-container .intercom-notification-channels p h6,#intercom-container .intercom-notification-channels p ol,#intercom-container .intercom-notification-channels p p,#intercom-container .intercom-notification-channels p ul{font-size:14px;font-weight:400;line-height:20px;word-wrap:break-word;margin:20px 0}#intercom-container .intercom-notification-channels p .intercom-container:first-child,#intercom-container .intercom-notification-channels p a:first-child,#intercom-container .intercom-notification-channels p blockquote:first-child,#intercom-container .intercom-notification-channels p code:first-child,#intercom-container .intercom-notification-channels p h1:first-child,#intercom-container .intercom-notification-channels p h2:first-child,#intercom-container .intercom-notification-channels p h3:first-child,#intercom-container .intercom-notification-channels p h4:first-child,#intercom-container .intercom-notification-channels p h5:first-child,#intercom-container .intercom-notification-channels p h6:first-child,#intercom-container .intercom-notification-channels p ol:first-child,#intercom-container .intercom-notification-channels p p:first-child,#intercom-container .intercom-notification-channels p ul:first-child{margin-top:0}#intercom-container .intercom-notification-channels p .intercom-container:last-child,#intercom-container .intercom-notification-channels p a:last-child,#intercom-container .intercom-notification-channels p blockquote:last-child,#intercom-container .intercom-notification-channels p code:last-child,#intercom-container .intercom-notification-channels p h1:last-child,#intercom-container .intercom-notification-channels p h2:last-child,#intercom-container .intercom-notification-channels p h3:last-child,#intercom-container .intercom-notification-channels p h4:last-child,#intercom-container .intercom-notification-channels p h5:last-child,#intercom-container .intercom-notification-channels p h6:last-child,#intercom-container .intercom-notification-channels p ol:last-child,#intercom-container .intercom-notification-channels p p:last-child,#intercom-container .intercom-notification-channels p ul:last-child{margin-bottom:0}#intercom-container .intercom-notification-channels p h1,#intercom-container .intercom-notification-channels p h1 a{font-size:14px;font-weight:700;line-height:20px;letter-spacing:normal;margin:27px 0;color:inherit}#intercom-container .intercom-notification-channels p h2,#intercom-container .intercom-notification-channels p h2 a{font-size:14px;line-height:20px;font-weight:700;margin:20px 0 10px;color:inherit}#intercom-container .intercom-notification-channels p ol,#intercom-container .intercom-notification-channels p ul{font-size:14px;-moz-padding-start:40px;-webkit-padding-start:40px;-khtml-padding-start:40px;-o-padding-start:40px;padding-start:40px;padding-left:30px}#intercom-container .intercom-notification-channels p [dir=ltr] ol,#intercom-container .intercom-notification-channels p [dir=ltr] ul{padding-left:30px}#intercom-container .intercom-notification-channels p [dir=rtl] ol,#intercom-container .intercom-notification-channels p [dir=rtl] ul{padding-right:30px}#intercom-container .intercom-notification-channels p ul>li{list-style-type:disc}#intercom-container .intercom-notification-channels p ol>li{list-style-type:decimal}#intercom-container .intercom-notification-channels p li{display:list-item;line-height:20px;margin-bottom:10px;font-weight:400}#intercom-container .intercom-notification-channels p em,#intercom-container .intercom-notification-channels p i{font-style:italic}#intercom-container .intercom-notification-channels p b,#intercom-container .intercom-notification-channels p strong{font-weight:700;line-height:100%}#intercom-container .intercom-notification-channels p pre{font-size:14px;padding:0 0 10px;white-space:pre-wrap}#intercom-container .intercom-notification-channels p img{display:block;max-width:100%;margin:10px 0}#intercom-container .intercom-notification-channels p p+br{display:none}#intercom-container .intercom-notification-channels p a:active,#intercom-container .intercom-notification-channels p a:hover,#intercom-container .intercom-notification-channels p a:link,#intercom-container .intercom-notification-channels p a:visited{text-decoration:underline}#intercom-container .intercom-notification-channels p a:link,#intercom-container .intercom-notification-channels p a:visited{color:#82add3}#intercom-container .intercom-notification-channels p a:active,#intercom-container .intercom-notification-channels p a:hover{color:#5a85ab}#intercom-container .intercom-notification-channels p h2+.ic_button_in_content,#intercom-container .intercom-notification-channels p h2+.ic_social_block,#intercom-container .intercom-notification-channels p h2+blockquote,#intercom-container .intercom-notification-channels p h2+ol,#intercom-container .intercom-notification-channels p h2+p,#intercom-container .intercom-notification-channels p h2+ul,#intercom-container .intercom-notification-channels p h3+.ic_button_in_content,#intercom-container .intercom-notification-channels p h3+.ic_social_block,#intercom-container .intercom-notification-channels p h3+blockquote,#intercom-container .intercom-notification-channels p h3+ol,#intercom-container .intercom-notification-channels p h3+p,#intercom-container .intercom-notification-channels p h3+ul,#intercom-container .intercom-notification-channels p h4+.ic_button_in_content,#intercom-container .intercom-notification-channels p h4+.ic_social_block,#intercom-container .intercom-notification-channels p h4+blockquote,#intercom-container .intercom-notification-channels p h4+ol,#intercom-container .intercom-notification-channels p h4+p,#intercom-container .intercom-notification-channels p h4+ul,#intercom-container .intercom-notification-channels p h5+.ic_button_in_content,#intercom-container .intercom-notification-channels p h5+.ic_social_block,#intercom-container .intercom-notification-channels p h5+blockquote,#intercom-container .intercom-notification-channels p h5+ol,#intercom-container .intercom-notification-channels p h5+p,#intercom-container .intercom-notification-channels p h5+ul,#intercom-container .intercom-notification-channels p h6+.ic_button_in_content,#intercom-container .intercom-notification-channels p h6+.ic_social_block,#intercom-container .intercom-notification-channels p h6+blockquote,#intercom-container .intercom-notification-channels p h6+ol,#intercom-container .intercom-notification-channels p h6+p,#intercom-container .intercom-notification-channels p h6+ul{margin-top:0}#intercom-container .intercom-notification-channels p .intercom-h2b-facebook,#intercom-container .intercom-notification-channels p .intercom-h2b-twitter{max-width:100%}#intercom-container .intercom-notification-channels p iframe[src*="vimeo.com"],#intercom-container .intercom-notification-channels p iframe[src*="wistia.net"],#intercom-container .intercom-notification-channels p iframe[src*="youtube.com"]{width:100%;height:149px;margin:20px auto}#intercom-container .intercom-browser-channel-button,#intercom-container .intercom-email-channel-button{font-size:14px;font-weight:400;color:#455a64;line-height:20px;color:#82add3;padding:8px;border-radius:5px;border:1px solid #e4e5e7;background-color:#fff;text-align:center;margin-top:8px;cursor:pointer;display:block}#intercom-container .intercom-browser-channel-button .intercom-comment-body,#intercom-container .intercom-email-channel-button .intercom-comment-body{font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-browser-channel-button .intercom-container,#intercom-container .intercom-browser-channel-button a,#intercom-container .intercom-browser-channel-button blockquote,#intercom-container .intercom-browser-channel-button code,#intercom-container .intercom-browser-channel-button h1,#intercom-container .intercom-browser-channel-button h2,#intercom-container .intercom-browser-channel-button h3,#intercom-container .intercom-browser-channel-button h4,#intercom-container .intercom-browser-channel-button h5,#intercom-container .intercom-browser-channel-button h6,#intercom-container .intercom-browser-channel-button ol,#intercom-container .intercom-browser-channel-button p,#intercom-container .intercom-browser-channel-button ul,#intercom-container .intercom-email-channel-button .intercom-container,#intercom-container .intercom-email-channel-button a,#intercom-container .intercom-email-channel-button blockquote,#intercom-container .intercom-email-channel-button code,#intercom-container .intercom-email-channel-button h1,#intercom-container .intercom-email-channel-button h2,#intercom-container .intercom-email-channel-button h3,#intercom-container .intercom-email-channel-button h4,#intercom-container .intercom-email-channel-button h5,#intercom-container .intercom-email-channel-button h6,#intercom-container .intercom-email-channel-button ol,#intercom-container .intercom-email-channel-button p,#intercom-container .intercom-email-channel-button ul{font-size:14px;font-weight:400;line-height:20px;word-wrap:break-word;margin:20px 0}#intercom-container .intercom-browser-channel-button .intercom-container:first-child,#intercom-container .intercom-browser-channel-button a:first-child,#intercom-container .intercom-browser-channel-button blockquote:first-child,#intercom-container .intercom-browser-channel-button code:first-child,#intercom-container .intercom-browser-channel-button h1:first-child,#intercom-container .intercom-browser-channel-button h2:first-child,#intercom-container .intercom-browser-channel-button h3:first-child,#intercom-container .intercom-browser-channel-button h4:first-child,#intercom-container .intercom-browser-channel-button h5:first-child,#intercom-container .intercom-browser-channel-button h6:first-child,#intercom-container .intercom-browser-channel-button ol:first-child,#intercom-container .intercom-browser-channel-button p:first-child,#intercom-container .intercom-browser-channel-button ul:first-child,#intercom-container .intercom-email-channel-button .intercom-container:first-child,#intercom-container .intercom-email-channel-button a:first-child,#intercom-container .intercom-email-channel-button blockquote:first-child,#intercom-container .intercom-email-channel-button code:first-child,#intercom-container .intercom-email-channel-button h1:first-child,#intercom-container .intercom-email-channel-button h2:first-child,#intercom-container .intercom-email-channel-button h3:first-child,#intercom-container .intercom-email-channel-button h4:first-child,#intercom-container .intercom-email-channel-button h5:first-child,#intercom-container .intercom-email-channel-button h6:first-child,#intercom-container .intercom-email-channel-button ol:first-child,#intercom-container .intercom-email-channel-button p:first-child,#intercom-container .intercom-email-channel-button ul:first-child{margin-top:0}#intercom-container .intercom-browser-channel-button .intercom-container:last-child,#intercom-container .intercom-browser-channel-button a:last-child,#intercom-container .intercom-browser-channel-button blockquote:last-child,#intercom-container .intercom-browser-channel-button code:last-child,#intercom-container .intercom-browser-channel-button h1:last-child,#intercom-container .intercom-browser-channel-button h2:last-child,#intercom-container .intercom-browser-channel-button h3:last-child,#intercom-container .intercom-browser-channel-button h4:last-child,#intercom-container .intercom-browser-channel-button h5:last-child,#intercom-container .intercom-browser-channel-button h6:last-child,#intercom-container .intercom-browser-channel-button ol:last-child,#intercom-container .intercom-browser-channel-button p:last-child,#intercom-container .intercom-browser-channel-button ul:last-child,#intercom-container .intercom-email-channel-button .intercom-container:last-child,#intercom-container .intercom-email-channel-button a:last-child,#intercom-container .intercom-email-channel-button blockquote:last-child,#intercom-container .intercom-email-channel-button code:last-child,#intercom-container .intercom-email-channel-button h1:last-child,#intercom-container .intercom-email-channel-button h2:last-child,#intercom-container .intercom-email-channel-button h3:last-child,#intercom-container .intercom-email-channel-button h4:last-child,#intercom-container .intercom-email-channel-button h5:last-child,#intercom-container .intercom-email-channel-button h6:last-child,#intercom-container .intercom-email-channel-button ol:last-child,#intercom-container .intercom-email-channel-button p:last-child,#intercom-container .intercom-email-channel-button ul:last-child{margin-bottom:0}#intercom-container .intercom-browser-channel-button h1,#intercom-container .intercom-browser-channel-button h1 a,#intercom-container .intercom-email-channel-button h1,#intercom-container .intercom-email-channel-button h1 a{font-size:14px;font-weight:700;line-height:20px;letter-spacing:normal;margin:27px 0;color:inherit}#intercom-container .intercom-browser-channel-button h2,#intercom-container .intercom-browser-channel-button h2 a,#intercom-container .intercom-email-channel-button h2,#intercom-container .intercom-email-channel-button h2 a{font-size:14px;line-height:20px;font-weight:700;margin:20px 0 10px;color:inherit}#intercom-container .intercom-browser-channel-button ol,#intercom-container .intercom-browser-channel-button ul,#intercom-container .intercom-email-channel-button ol,#intercom-container .intercom-email-channel-button ul{font-size:14px;-moz-padding-start:40px;-webkit-padding-start:40px;-khtml-padding-start:40px;-o-padding-start:40px;padding-start:40px;padding-left:30px}#intercom-container .intercom-browser-channel-button [dir=ltr] ol,#intercom-container .intercom-browser-channel-button [dir=ltr] ul,#intercom-container .intercom-email-channel-button [dir=ltr] ol,#intercom-container .intercom-email-channel-button [dir=ltr] ul{padding-left:30px}#intercom-container .intercom-browser-channel-button [dir=rtl] ol,#intercom-container .intercom-browser-channel-button [dir=rtl] ul,#intercom-container .intercom-email-channel-button [dir=rtl] ol,#intercom-container .intercom-email-channel-button [dir=rtl] ul{padding-right:30px}#intercom-container .intercom-browser-channel-button ul>li,#intercom-container .intercom-email-channel-button ul>li{list-style-type:disc}#intercom-container .intercom-browser-channel-button ol>li,#intercom-container .intercom-email-channel-button ol>li{list-style-type:decimal}#intercom-container .intercom-browser-channel-button li,#intercom-container .intercom-email-channel-button li{display:list-item;line-height:20px;margin-bottom:10px;font-weight:400}#intercom-container .intercom-browser-channel-button em,#intercom-container .intercom-browser-channel-button i,#intercom-container .intercom-email-channel-button em,#intercom-container .intercom-email-channel-button i{font-style:italic}#intercom-container .intercom-browser-channel-button b,#intercom-container .intercom-browser-channel-button strong,#intercom-container .intercom-email-channel-button b,#intercom-container .intercom-email-channel-button strong{font-weight:700;line-height:100%}#intercom-container .intercom-browser-channel-button pre,#intercom-container .intercom-email-channel-button pre{font-size:14px;padding:0 0 10px;white-space:pre-wrap}#intercom-container .intercom-browser-channel-button img,#intercom-container .intercom-email-channel-button img{display:block;max-width:100%;margin:10px 0}#intercom-container .intercom-browser-channel-button p+br,#intercom-container .intercom-email-channel-button p+br{display:none}#intercom-container .intercom-browser-channel-button a:active,#intercom-container .intercom-browser-channel-button a:hover,#intercom-container .intercom-browser-channel-button a:link,#intercom-container .intercom-browser-channel-button a:visited,#intercom-container .intercom-email-channel-button a:active,#intercom-container .intercom-email-channel-button a:hover,#intercom-container .intercom-email-channel-button a:link,#intercom-container .intercom-email-channel-button a:visited{text-decoration:underline}#intercom-container .intercom-browser-channel-button a:link,#intercom-container .intercom-browser-channel-button a:visited,#intercom-container .intercom-email-channel-button a:link,#intercom-container .intercom-email-channel-button a:visited{color:#82add3}#intercom-container .intercom-browser-channel-button a:active,#intercom-container .intercom-browser-channel-button a:hover,#intercom-container .intercom-email-channel-button a:active,#intercom-container .intercom-email-channel-button a:hover{color:#5a85ab}#intercom-container .intercom-browser-channel-button h2+.ic_button_in_content,#intercom-container .intercom-browser-channel-button h2+.ic_social_block,#intercom-container .intercom-browser-channel-button h2+blockquote,#intercom-container .intercom-browser-channel-button h2+ol,#intercom-container .intercom-browser-channel-button h2+p,#intercom-container .intercom-browser-channel-button h2+ul,#intercom-container .intercom-browser-channel-button h3+.ic_button_in_content,#intercom-container .intercom-browser-channel-button h3+.ic_social_block,#intercom-container .intercom-browser-channel-button h3+blockquote,#intercom-container .intercom-browser-channel-button h3+ol,#intercom-container .intercom-browser-channel-button h3+p,#intercom-container .intercom-browser-channel-button h3+ul,#intercom-container .intercom-browser-channel-button h4+.ic_button_in_content,#intercom-container .intercom-browser-channel-button h4+.ic_social_block,#intercom-container .intercom-browser-channel-button h4+blockquote,#intercom-container .intercom-browser-channel-button h4+ol,#intercom-container .intercom-browser-channel-button h4+p,#intercom-container .intercom-browser-channel-button h4+ul,#intercom-container .intercom-browser-channel-button h5+.ic_button_in_content,#intercom-container .intercom-browser-channel-button h5+.ic_social_block,#intercom-container .intercom-browser-channel-button h5+blockquote,#intercom-container .intercom-browser-channel-button h5+ol,#intercom-container .intercom-browser-channel-button h5+p,#intercom-container .intercom-browser-channel-button h5+ul,#intercom-container .intercom-browser-channel-button h6+.ic_button_in_content,#intercom-container .intercom-browser-channel-button h6+.ic_social_block,#intercom-container .intercom-browser-channel-button h6+blockquote,#intercom-container .intercom-browser-channel-button h6+ol,#intercom-container .intercom-browser-channel-button h6+p,#intercom-container .intercom-browser-channel-button h6+ul,#intercom-container .intercom-email-channel-button h2+.ic_button_in_content,#intercom-container .intercom-email-channel-button h2+.ic_social_block,#intercom-container .intercom-email-channel-button h2+blockquote,#intercom-container .intercom-email-channel-button h2+ol,#intercom-container .intercom-email-channel-button h2+p,#intercom-container .intercom-email-channel-button h2+ul,#intercom-container .intercom-email-channel-button h3+.ic_button_in_content,#intercom-container .intercom-email-channel-button h3+.ic_social_block,#intercom-container .intercom-email-channel-button h3+blockquote,#intercom-container .intercom-email-channel-button h3+ol,#intercom-container .intercom-email-channel-button h3+p,#intercom-container .intercom-email-channel-button h3+ul,#intercom-container .intercom-email-channel-button h4+.ic_button_in_content,#intercom-container .intercom-email-channel-button h4+.ic_social_block,#intercom-container .intercom-email-channel-button h4+blockquote,#intercom-container .intercom-email-channel-button h4+ol,#intercom-container .intercom-email-channel-button h4+p,#intercom-container .intercom-email-channel-button h4+ul,#intercom-container .intercom-email-channel-button h5+.ic_button_in_content,#intercom-container .intercom-email-channel-button h5+.ic_social_block,#intercom-container .intercom-email-channel-button h5+blockquote,#intercom-container .intercom-email-channel-button h5+ol,#intercom-container .intercom-email-channel-button h5+p,#intercom-container .intercom-email-channel-button h5+ul,#intercom-container .intercom-email-channel-button h6+.ic_button_in_content,#intercom-container .intercom-email-channel-button h6+.ic_social_block,#intercom-container .intercom-email-channel-button h6+blockquote,#intercom-container .intercom-email-channel-button h6+ol,#intercom-container .intercom-email-channel-button h6+p,#intercom-container .intercom-email-channel-button h6+ul{margin-top:0}#intercom-container .intercom-browser-channel-button .intercom-h2b-facebook,#intercom-container .intercom-browser-channel-button .intercom-h2b-twitter,#intercom-container .intercom-email-channel-button .intercom-h2b-facebook,#intercom-container .intercom-email-channel-button .intercom-h2b-twitter{max-width:100%}#intercom-container .intercom-browser-channel-button iframe[src*="vimeo.com"],#intercom-container .intercom-browser-channel-button iframe[src*="wistia.net"],#intercom-container .intercom-browser-channel-button iframe[src*="youtube.com"],#intercom-container .intercom-email-channel-button iframe[src*="vimeo.com"],#intercom-container .intercom-email-channel-button iframe[src*="wistia.net"],#intercom-container .intercom-email-channel-button iframe[src*="youtube.com"]{width:100%;height:149px;margin:20px auto}#intercom-container .intercom-announcement{overflow:hidden}#intercom-container .intercom-announcement-body-container{box-shadow:0 1px 3px 0 rgba(0,0,0,.07);font-size:16px;font-weight:400;color:#455a64;line-height:23px;border-radius:5px;border:1px solid #e4e4e4;background-color:#fff}#intercom-container .intercom-announcement-body-container .intercom-comment-body{font-size:16px;font-weight:400;line-height:23px}#intercom-container .intercom-announcement-body-container .intercom-container,#intercom-container .intercom-announcement-body-container a,#intercom-container .intercom-announcement-body-container blockquote,#intercom-container .intercom-announcement-body-container code,#intercom-container .intercom-announcement-body-container h1,#intercom-container .intercom-announcement-body-container h2,#intercom-container .intercom-announcement-body-container h3,#intercom-container .intercom-announcement-body-container h4,#intercom-container .intercom-announcement-body-container h5,#intercom-container .intercom-announcement-body-container h6,#intercom-container .intercom-announcement-body-container ol,#intercom-container .intercom-announcement-body-container p,#intercom-container .intercom-announcement-body-container ul{font-size:16px;font-weight:400;line-height:23px;word-wrap:break-word;margin:20px 0}#intercom-container .intercom-announcement-body-container .intercom-container:first-child,#intercom-container .intercom-announcement-body-container a:first-child,#intercom-container .intercom-announcement-body-container blockquote:first-child,#intercom-container .intercom-announcement-body-container code:first-child,#intercom-container .intercom-announcement-body-container h1:first-child,#intercom-container .intercom-announcement-body-container h2:first-child,#intercom-container .intercom-announcement-body-container h3:first-child,#intercom-container .intercom-announcement-body-container h4:first-child,#intercom-container .intercom-announcement-body-container h5:first-child,#intercom-container .intercom-announcement-body-container h6:first-child,#intercom-container .intercom-announcement-body-container ol:first-child,#intercom-container .intercom-announcement-body-container p:first-child,#intercom-container .intercom-announcement-body-container ul:first-child{margin-top:0}#intercom-container .intercom-announcement-body-container .intercom-container:last-child,#intercom-container .intercom-announcement-body-container a:last-child,#intercom-container .intercom-announcement-body-container blockquote:last-child,#intercom-container .intercom-announcement-body-container code:last-child,#intercom-container .intercom-announcement-body-container h1:last-child,#intercom-container .intercom-announcement-body-container h2:last-child,#intercom-container .intercom-announcement-body-container h3:last-child,#intercom-container .intercom-announcement-body-container h4:last-child,#intercom-container .intercom-announcement-body-container h5:last-child,#intercom-container .intercom-announcement-body-container h6:last-child,#intercom-container .intercom-announcement-body-container ol:last-child,#intercom-container .intercom-announcement-body-container p:last-child,#intercom-container .intercom-announcement-body-container ul:last-child{margin-bottom:0}#intercom-container .intercom-announcement-body-container h1,#intercom-container .intercom-announcement-body-container h1 a{font-size:37px;font-weight:300;line-height:48px;letter-spacing:.35px;margin:27px 0;color:#82add3}#intercom-container .intercom-announcement-body-container h1:first-child{text-align:center;-moz-text-align-last:center;text-align-last:center}#intercom-container .intercom-announcement-body-container h2,#intercom-container .intercom-announcement-body-container h2 a{font-size:18px;line-height:27px;font-weight:400;margin:20px 0 10px;color:#82add3}#intercom-container .intercom-announcement-body-container ol,#intercom-container .intercom-announcement-body-container ul{font-size:16px;-moz-padding-start:40px;-webkit-padding-start:40px;-khtml-padding-start:40px;-o-padding-start:40px;padding-start:40px;padding-left:40px}#intercom-container .intercom-announcement-body-container [dir=ltr] ol,#intercom-container .intercom-announcement-body-container [dir=ltr] ul{padding-left:40px}#intercom-container .intercom-announcement-body-container [dir=rtl] ol,#intercom-container .intercom-announcement-body-container [dir=rtl] ul{padding-right:40px}#intercom-container .intercom-announcement-body-container ul>li{list-style-type:disc}#intercom-container .intercom-announcement-body-container ol>li{list-style-type:decimal}#intercom-container .intercom-announcement-body-container li{display:list-item;line-height:26px;margin-bottom:10px;font-weight:400}#intercom-container .intercom-announcement-body-container em,#intercom-container .intercom-announcement-body-container i{font-style:italic}#intercom-container .intercom-announcement-body-container b,#intercom-container .intercom-announcement-body-container strong{font-weight:700;line-height:100%}#intercom-container .intercom-announcement-body-container pre{font-size:16px;padding:0 0 10px;white-space:pre-wrap}#intercom-container .intercom-announcement-body-container img{display:block;max-width:100%;margin:10px 0}#intercom-container .intercom-announcement-body-container p+br{display:none}#intercom-container .intercom-announcement-body-container a:active,#intercom-container .intercom-announcement-body-container a:hover,#intercom-container .intercom-announcement-body-container a:link,#intercom-container .intercom-announcement-body-container a:visited{text-decoration:underline}#intercom-container .intercom-announcement-body-container a:link,#intercom-container .intercom-announcement-body-container a:visited{color:#82add3}#intercom-container .intercom-announcement-body-container a:active,#intercom-container .intercom-announcement-body-container a:hover{color:#5a85ab}#intercom-container .intercom-announcement-body-container h2+.ic_button_in_content,#intercom-container .intercom-announcement-body-container h2+.ic_social_block,#intercom-container .intercom-announcement-body-container h2+blockquote,#intercom-container .intercom-announcement-body-container h2+ol,#intercom-container .intercom-announcement-body-container h2+p,#intercom-container .intercom-announcement-body-container h2+ul,#intercom-container .intercom-announcement-body-container h3+.ic_button_in_content,#intercom-container .intercom-announcement-body-container h3+.ic_social_block,#intercom-container .intercom-announcement-body-container h3+blockquote,#intercom-container .intercom-announcement-body-container h3+ol,#intercom-container .intercom-announcement-body-container h3+p,#intercom-container .intercom-announcement-body-container h3+ul,#intercom-container .intercom-announcement-body-container h4+.ic_button_in_content,#intercom-container .intercom-announcement-body-container h4+.ic_social_block,#intercom-container .intercom-announcement-body-container h4+blockquote,#intercom-container .intercom-announcement-body-container h4+ol,#intercom-container .intercom-announcement-body-container h4+p,#intercom-container .intercom-announcement-body-container h4+ul,#intercom-container .intercom-announcement-body-container h5+.ic_button_in_content,#intercom-container .intercom-announcement-body-container h5+.ic_social_block,#intercom-container .intercom-announcement-body-container h5+blockquote,#intercom-container .intercom-announcement-body-container h5+ol,#intercom-container .intercom-announcement-body-container h5+p,#intercom-container .intercom-announcement-body-container h5+ul,#intercom-container .intercom-announcement-body-container h6+.ic_button_in_content,#intercom-container .intercom-announcement-body-container h6+.ic_social_block,#intercom-container .intercom-announcement-body-container h6+blockquote,#intercom-container .intercom-announcement-body-container h6+ol,#intercom-container .intercom-announcement-body-container h6+p,#intercom-container .intercom-announcement-body-container h6+ul{margin-top:0}#intercom-container .intercom-announcement-body-container .intercom-h2b-facebook,#intercom-container .intercom-announcement-body-container .intercom-h2b-twitter{max-width:100%}#intercom-container .intercom-announcement-body-container iframe[src*="vimeo.com"],#intercom-container .intercom-announcement-body-container iframe[src*="wistia.net"],#intercom-container .intercom-announcement-body-container iframe[src*="youtube.com"]{width:100%;height:272px;margin:20px auto}#intercom-container .intercom-announcement-body-container a.intercom-h2b-button{text-decoration:none;padding:6px 18px;font-weight:500;display:table;margin:40px auto;font-size:15px;line-height:31px;color:#fff}#intercom-container .intercom-announcement-body-container .intercom-align-right{text-align:right!important}#intercom-container .intercom-announcement-body-container .intercom-align-right .intercom-h2b-button,#intercom-container .intercom-announcement-body-container .intercom-align-right img{margin-right:0!important}#intercom-container .intercom-announcement-body-container .intercom-align-center{text-align:center!important}#intercom-container .intercom-announcement-body-container .intercom-align-left{text-align:left!important}#intercom-container .intercom-announcement-body-container .intercom-align-left .intercom-h2b-button,#intercom-container .intercom-announcement-body-container .intercom-align-left img{margin-left:0!important}#intercom-container .intercom-announcement-body-container img{margin:10px auto}#intercom-container .intercom-announcement .intercom-lwr-composer{border-radius:0 0 5px 5px}#intercom-container .intercom-announcement-avatar-container{height:30px}#intercom-container .intercom-announcement-avatar{box-shadow:0 1px 2px rgba(0,0,0,.2);border-radius:50%;border:3px solid #fff;position:absolute;width:60px;height:60px;left:50%;margin-left:-30px}#intercom-container .intercom-announcement-body{padding:50px}#intercom-container .intercom-conversation-announcement .intercom-comment{max-width:400px}#intercom-container .intercom-small-announcement{z-index:2147483000;overflow:hidden}#intercom-container .intercom-small-announcement-body-container{box-shadow:0 1px 1px 0 rgba(0,0,0,.04);font-size:15px;font-weight:400;color:#455a64;line-height:23px;border:1px solid #e4e4e4;border-radius:5px;background-color:#fff;position:relative}#intercom-container .intercom-small-announcement-body-container .intercom-comment-body{font-size:15px;font-weight:400;line-height:23px}#intercom-container .intercom-small-announcement-body-container .intercom-container,#intercom-container .intercom-small-announcement-body-container a,#intercom-container .intercom-small-announcement-body-container blockquote,#intercom-container .intercom-small-announcement-body-container code,#intercom-container .intercom-small-announcement-body-container h1,#intercom-container .intercom-small-announcement-body-container h2,#intercom-container .intercom-small-announcement-body-container h3,#intercom-container .intercom-small-announcement-body-container h4,#intercom-container .intercom-small-announcement-body-container h5,#intercom-container .intercom-small-announcement-body-container h6,#intercom-container .intercom-small-announcement-body-container ol,#intercom-container .intercom-small-announcement-body-container p,#intercom-container .intercom-small-announcement-body-container ul{font-size:15px;font-weight:400;line-height:23px;word-wrap:break-word;margin:20px 0}#intercom-container .intercom-small-announcement-body-container .intercom-container:first-child,#intercom-container .intercom-small-announcement-body-container a:first-child,#intercom-container .intercom-small-announcement-body-container blockquote:first-child,#intercom-container .intercom-small-announcement-body-container code:first-child,#intercom-container .intercom-small-announcement-body-container h1:first-child,#intercom-container .intercom-small-announcement-body-container h2:first-child,#intercom-container .intercom-small-announcement-body-container h3:first-child,#intercom-container .intercom-small-announcement-body-container h4:first-child,#intercom-container .intercom-small-announcement-body-container h5:first-child,#intercom-container .intercom-small-announcement-body-container h6:first-child,#intercom-container .intercom-small-announcement-body-container ol:first-child,#intercom-container .intercom-small-announcement-body-container p:first-child,#intercom-container .intercom-small-announcement-body-container ul:first-child{margin-top:0}#intercom-container .intercom-small-announcement-body-container .intercom-container:last-child,#intercom-container .intercom-small-announcement-body-container a:last-child,#intercom-container .intercom-small-announcement-body-container blockquote:last-child,#intercom-container .intercom-small-announcement-body-container code:last-child,#intercom-container .intercom-small-announcement-body-container h1:last-child,#intercom-container .intercom-small-announcement-body-container h2:last-child,#intercom-container .intercom-small-announcement-body-container h3:last-child,#intercom-container .intercom-small-announcement-body-container h4:last-child,#intercom-container .intercom-small-announcement-body-container h5:last-child,#intercom-container .intercom-small-announcement-body-container h6:last-child,#intercom-container .intercom-small-announcement-body-container ol:last-child,#intercom-container .intercom-small-announcement-body-container p:last-child,#intercom-container .intercom-small-announcement-body-container ul:last-child{margin-bottom:0}#intercom-container .intercom-small-announcement-body-container h1,#intercom-container .intercom-small-announcement-body-container h1 a{font-size:22px;font-weight:300;line-height:28px;letter-spacing:.3px;margin:27px 0;color:#82add3}#intercom-container .intercom-small-announcement-body-container h1:first-child{text-align:center;-moz-text-align-last:center;text-align-last:center}#intercom-container .intercom-small-announcement-body-container h2,#intercom-container .intercom-small-announcement-body-container h2 a{font-size:15px;line-height:24px;font-weight:700;margin:20px 0 10px;color:#455a64}#intercom-container .intercom-small-announcement-body-container ol,#intercom-container .intercom-small-announcement-body-container ul{font-size:15px;-moz-padding-start:40px;-webkit-padding-start:40px;-khtml-padding-start:40px;-o-padding-start:40px;padding-start:40px;padding-left:30px}#intercom-container .intercom-small-announcement-body-container [dir=ltr] ol,#intercom-container .intercom-small-announcement-body-container [dir=ltr] ul{padding-left:30px}#intercom-container .intercom-small-announcement-body-container [dir=rtl] ol,#intercom-container .intercom-small-announcement-body-container [dir=rtl] ul{padding-right:30px}#intercom-container .intercom-small-announcement-body-container ul>li{list-style-type:disc}#intercom-container .intercom-small-announcement-body-container ol>li{list-style-type:decimal}#intercom-container .intercom-small-announcement-body-container li{display:list-item;line-height:22px;margin-bottom:10px;font-weight:400}#intercom-container .intercom-small-announcement-body-container em,#intercom-container .intercom-small-announcement-body-container i{font-style:italic}#intercom-container .intercom-small-announcement-body-container b,#intercom-container .intercom-small-announcement-body-container strong{font-weight:700;line-height:100%}#intercom-container .intercom-small-announcement-body-container pre{font-size:15px;padding:0 0 10px;white-space:pre-wrap}#intercom-container .intercom-small-announcement-body-container img{display:block;max-width:100%;margin:10px 0}#intercom-container .intercom-small-announcement-body-container p+br{display:none}#intercom-container .intercom-small-announcement-body-container a:active,#intercom-container .intercom-small-announcement-body-container a:hover,#intercom-container .intercom-small-announcement-body-container a:link,#intercom-container .intercom-small-announcement-body-container a:visited{text-decoration:underline}#intercom-container .intercom-small-announcement-body-container a:link,#intercom-container .intercom-small-announcement-body-container a:visited{color:#82add3}#intercom-container .intercom-small-announcement-body-container a:active,#intercom-container .intercom-small-announcement-body-container a:hover{color:#5a85ab}#intercom-container .intercom-small-announcement-body-container h2+.ic_button_in_content,#intercom-container .intercom-small-announcement-body-container h2+.ic_social_block,#intercom-container .intercom-small-announcement-body-container h2+blockquote,#intercom-container .intercom-small-announcement-body-container h2+ol,#intercom-container .intercom-small-announcement-body-container h2+p,#intercom-container .intercom-small-announcement-body-container h2+ul,#intercom-container .intercom-small-announcement-body-container h3+.ic_button_in_content,#intercom-container .intercom-small-announcement-body-container h3+.ic_social_block,#intercom-container .intercom-small-announcement-body-container h3+blockquote,#intercom-container .intercom-small-announcement-body-container h3+ol,#intercom-container .intercom-small-announcement-body-container h3+p,#intercom-container .intercom-small-announcement-body-container h3+ul,#intercom-container .intercom-small-announcement-body-container h4+.ic_button_in_content,#intercom-container .intercom-small-announcement-body-container h4+.ic_social_block,#intercom-container .intercom-small-announcement-body-container h4+blockquote,#intercom-container .intercom-small-announcement-body-container h4+ol,#intercom-container .intercom-small-announcement-body-container h4+p,#intercom-container .intercom-small-announcement-body-container h4+ul,#intercom-container .intercom-small-announcement-body-container h5+.ic_button_in_content,#intercom-container .intercom-small-announcement-body-container h5+.ic_social_block,#intercom-container .intercom-small-announcement-body-container h5+blockquote,#intercom-container .intercom-small-announcement-body-container h5+ol,#intercom-container .intercom-small-announcement-body-container h5+p,#intercom-container .intercom-small-announcement-body-container h5+ul,#intercom-container .intercom-small-announcement-body-container h6+.ic_button_in_content,#intercom-container .intercom-small-announcement-body-container h6+.ic_social_block,#intercom-container .intercom-small-announcement-body-container h6+blockquote,#intercom-container .intercom-small-announcement-body-container h6+ol,#intercom-container .intercom-small-announcement-body-container h6+p,#intercom-container .intercom-small-announcement-body-container h6+ul{margin-top:0}#intercom-container .intercom-small-announcement-body-container .intercom-h2b-facebook,#intercom-container .intercom-small-announcement-body-container .intercom-h2b-twitter{max-width:100%}#intercom-container .intercom-small-announcement-body-container iframe[src*="vimeo.com"],#intercom-container .intercom-small-announcement-body-container iframe[src*="wistia.net"],#intercom-container .intercom-small-announcement-body-container iframe[src*="youtube.com"]{width:100%;height:162px;margin:20px auto}#intercom-container .intercom-small-announcement-body-container a.intercom-h2b-button{text-decoration:none;padding:6px 18px;font-weight:500;display:table;margin:20px auto;font-size:15px;line-height:31px;color:#fff}#intercom-container .intercom-small-announcement-body-container .intercom-align-right{text-align:right!important}#intercom-container .intercom-small-announcement-body-container .intercom-align-right .intercom-h2b-button,#intercom-container .intercom-small-announcement-body-container .intercom-align-right img{margin-right:0!important}#intercom-container .intercom-small-announcement-body-container .intercom-align-center{text-align:center!important}#intercom-container .intercom-small-announcement-body-container .intercom-align-left{text-align:left!important}#intercom-container .intercom-small-announcement-body-container .intercom-align-left .intercom-h2b-button,#intercom-container .intercom-small-announcement-body-container .intercom-align-left img{margin-left:0!important}#intercom-container .intercom-small-announcement-body-container img{margin:10px auto}#intercom-container .intercom-small-announcement .intercom-lwr-composer{border-radius:0 0 5px 5px}#intercom-container .intercom-small-announcement-avatar-container{height:20px}#intercom-container .intercom-small-announcement-avatar{z-index:2147483001;box-shadow:0 1px 2px rgba(0,0,0,.2);border-radius:50%;border:2px solid #fff;position:absolute;width:40px;height:40px;left:50%;margin-left:-22px}#intercom-container .intercom-small-announcement-body{padding:26px 23px}#intercom-container .intercom-conversation-preview .intercom-small-announcement-body-container{box-shadow:0 1px 10px 0 rgba(0,0,0,.08);max-height:320px}#intercom-container .intercom-conversation-preview .intercom-small-announcement-body-container:after{z-index:2147483002;background:linear-gradient(hsla(0,0%,100%,0),#fff 47px);border-radius:0 0 5px 5px;content:"";position:absolute;top:240px;height:81px;width:100%}#intercom-container .intercom-new-anonymous-user-disabled{opacity:.5}#intercom-container .intercom-new-anonymous-user-input-container{position:relative;margin:0 auto;padding:5px 0;width:240px}#intercom-container .intercom-new-anonymous-user-input-container-acquire{position:relative;margin:0 auto;padding:15px}#intercom-container .intercom-new-email-confirmation-padding .intercom-new-anonymous-user-input-container-acquire{padding-top:0}#intercom-container .intercom-new-anonymous-user,#intercom-container .intercom-new-anonymous-user p{-webkit-transform:translateZ(0);transform:translateZ(0)}#intercom-container .intercom-new-anonymous-user input[type=email]{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:15px;line-height:32px;color:#60686e;height:34px;width:100%;padding:0 42px 0 8px;border:1px solid #e4e5e7;border-radius:2px;background-color:#fff}#intercom-container .intercom-new-anonymous-user input[type=email]::-webkit-input-placeholder{color:#aeb4b9;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:15px;font-weight:400;line-height:32px}#intercom-container .intercom-new-anonymous-user input[type=email]::-moz-placeholder{color:#aeb4b9;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:15px;font-weight:400;line-height:32px}#intercom-container .intercom-new-anonymous-user input[type=email]:-ms-input-placeholder{color:#aeb4b9;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:15px;font-weight:400;line-height:32px}#intercom-container .intercom-new-anonymous-user input[type=email].intercom-new-anonymous-user-email-invalid{border-color:#d76060;background-color:#fcedee}#intercom-container .intercom-new-anonymous-user-acquire input[type=email]{border:1px solid #82add3;font-size:14px}#intercom-container .intercom-new-anonymous-user input[type=submit]{background:#82add3;background-image:url(https://js.intercomcdn.com/images/icon-tick.a3893a3e.svg),linear-gradient(180deg,#96c1e7,#82add3);background-repeat:no-repeat;background-position:50%;position:absolute;padding:0;margin:0;top:9px;right:4px;width:34px;height:24px}#intercom-container .intercom-new-anonymous-user input[type=submit]:hover{background:#6e99bf;background-image:url(https://js.intercomcdn.com/images/icon-tick.a3893a3e.svg),linear-gradient(180deg,#82add3,#6e99bf);background-repeat:no-repeat;background-position:50%}#intercom-container .intercom-new-anonymous-user input[type=submit]:disabled{background:#acbbc2;background-image:url(https://js.intercomcdn.com/images/icon-tick.a3893a3e.svg),linear-gradient(180deg,#b6c5cb,#acbbc2);background-repeat:no-repeat;background-position:50%}#intercom-container .intercom-new-anonymous-user-acquire input[type=submit]{top:19px;right:19px}#intercom-container .intercom-new-anonymous-user-acquire input[type=submit]:disabled{background:#82add3;background-image:url(https://js.intercomcdn.com/images/icon-tick.a3893a3e.svg),linear-gradient(180deg,#96c1e7,#82add3);background-repeat:no-repeat;background-position:50%;border-color:#82add3}#intercom-container .intercom-new-email-confirmation-padding input[type=submit]{top:4px}#intercom-container .intercom-art-emp-email-form{position:relative;background-color:#fff;border-radius:1px;border:0;box-shadow:-1px -1px 2px 0 rgba(0,0,0,.1),1px 1px 2px 0 rgba(0,0,0,.1)}#intercom-container .intercom-art-emp-email-text-container{display:table;height:100%;min-height:65px;margin-left:12%}#intercom-container .intercom-art-emp-email-text-container p{height:30px;text-align:left;display:table-cell;vertical-align:middle;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;font-weight:500}#intercom-container .intercom-art-emp-email-icon-container{position:absolute;height:33px;margin-top:-16px;top:50%;width:15%}#intercom-container .intercom-art-emp-email-form-container{width:88%;margin-left:12%}#intercom-container .intercom-art-emp-email-form-container p{text-align:left;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;font-weight:500;padding-bottom:8px}#intercom-container .intercom-art-emp-response-container{padding:0;border:none}#intercom-container .intercom-art-emp-response-container .intercom-art-emp-email-form{padding:16px}#intercom-container .intercom-art-emp-email-form-container input[type=email]{border:1px solid #cfd8dc;border-radius:4px;font-size:14px}#intercom-container .intercom-art-emp-email-form-container input[type=email]:focus{border-color:#74beff;box-shadow:0 0 4px 0 rgba(75,171,255,.38)}#intercom-container .intercom-art-emp-email-form-container input[type=email]:focus.intercom-new-anonymous-user-email-invalid{border-color:#d76060;box-shadow:none}#intercom-container .intercom-art-emp-email-input{position:relative}#intercom-container input[type=submit].intercom-art-emp-email-submit{position:absolute;top:3px;right:3px;height:26px;width:35px}#intercom-container input[type=submit].intercom-art-emp-email-submit:disabled{background:#82add3;background-image:url(https://js.intercomcdn.com/images/icon-tick.a3893a3e.svg),linear-gradient(180deg,#96c1e7,#82add3);background-repeat:no-repeat;background-position:50%;border-color:#82add3}#intercom-container .intercom-composer{z-index:2147483001;position:absolute;bottom:0;left:0;right:0;max-width:336px;margin:0 auto;padding:16px}#intercom-container .intercom-composer.intercom-composer-inactive{display:none}#intercom-container .intercom-powered-by-enabled .intercom-composer{padding:8px 6px 0}#intercom-container .intercom-conversation-announcement .intercom-composer{width:616px;max-width:616px}#intercom-container .intercom-composer-upload-error{display:none;padding-bottom:10px;text-align:center;color:#c00;font-size:13px}#intercom-container .intercom-composer-textarea-container{min-height:32px}#intercom-container .intercom-composer-disabled .intercom-composer-textarea-container{opacity:.5}#intercom-container .intercom-composer-textarea{position:relative;overflow:hidden;border-radius:4px;border:1px solid #cfd8dc}#intercom-container .intercom-composer-textarea pre,#intercom-container .intercom-composer-textarea textarea{box-sizing:border-box;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:20px;min-height:40px;max-height:200px;width:100%;height:100%;padding:10px 70px 5px 14px;border-radius:4px}#intercom-container .intercom-composer-textarea textarea{background:#fff;position:absolute;top:0;left:0;font-weight:400;color:#455a64;resize:none;border:none}#intercom-container .intercom-composer-textarea textarea::-webkit-input-placeholder{color:#b0bec5;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-composer-textarea textarea::-moz-placeholder{color:#b0bec5;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-composer-textarea textarea:-ms-input-placeholder{color:#b0bec5;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-composer-textarea textarea:active,#intercom-container .intercom-composer-textarea textarea:focus{box-shadow:inset 0 2px 1px rgba(0,0,0,.06)}#intercom-container .intercom-composer-textarea pre>span,#intercom-container .intercom-composer-textarea textarea{white-space:pre;white-space:pre-wrap;word-wrap:break-word}#intercom-container .intercom-composer-textarea pre{margin:0}#intercom-container .intercom-composer-textarea pre>span{visibility:hidden}#intercom-container .intercom-composer-textarea.intercom-composer-focused{border-color:#74beff;box-shadow:0 0 4px 0 rgba(75,171,255,.38)}#intercom-container .intercom-composer-send-button{border-radius:4px;font-size:13px;margin-left:8px;height:40px;float:right;display:none}#intercom-container .intercom-composer-action-button{z-index:2147483001;opacity:.4;background-position:50%;display:none;height:15px;width:15px;position:relative;float:right;cursor:pointer;top:7px;margin:0 2px 0 0;padding:5px}#intercom-container .intercom-composer-action-button:first-child{margin-right:12px}#intercom-container .intercom-composer-action-button.intercom-composer-emoji-button-active,#intercom-container .intercom-composer-action-button:hover{opacity:.8;transition:opacity .2s linear}#intercom-container .intercom-composer-upload-button{background-image:url(https://js.intercomcdn.com/images/icon-upload.d2842ae1.png);background-size:15px 14px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-composer-upload-button{background-image:url(https://js.intercomcdn.com/images/icon-upload@2x.d8d0039b.png)}}#intercom-container .intercom-composer-emoji-button{z-index:2147483001;opacity:.4;background-image:url(https://js.intercomcdn.com/images/icon-emoji.03826508.png);background-size:15px 15px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-composer-emoji-button{background-image:url(https://js.intercomcdn.com/images/icon-emoji@2x.fba93a3f.png)}}#intercom-container .intercom-conversation-announcement .intercom-composer{border:1px solid #dadee2;border-bottom:none;border-radius:4px 4px 0 0}#intercom-container .intercom-composer-press-enter-to-send{display:none;text-align:right;width:100%;box-sizing:border-box;line-height:22px;color:#b6c2c9;font-size:13px}#intercom-container .intercom-powered-by-enabled .intercom-composer-press-enter-to-send{position:absolute;padding-bottom:2px;bottom:0;left:8px;right:8px;width:auto}@media (max-width:700px){#intercom-container .intercom-conversation-announcement .intercom-composer{box-sizing:border-box;width:100%;border:none;border-radius:0}}#intercom-container.intercom-embed-container .intercom-composer{box-sizing:border-box;width:100%}#intercom-container.intercom-embed-container .intercom-conversation-announcement .intercom-composer{width:95%}#intercom-container .intercom-emoji-selector{z-index:2147483001;box-shadow:0 0 3px 1px rgba(0,0,0,.1);background-color:#fff;border-radius:3px;border:1px solid #d0d4d8;position:absolute;bottom:calc(100% - 13px);right:10px;margin:0 0 16px;display:none;font-size:22px}#intercom-container .intercom-emoji-selector:after,#intercom-container .intercom-emoji-selector:before{top:100%;right:26px;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none}#intercom-container .intercom-emoji-selector:after{border-color:hsla(0,0%,94%,0);border-top-color:#fff;border-width:7px;margin-right:-12px}#intercom-container .intercom-emoji-selector:before{border-color:hsla(0,0%,67%,0);border-top-color:#aaa;border-width:8px;margin-right:-13px}#intercom-container .intercom-emoji-selector-panel-small{background-color:#fff;width:144px;line-height:0;bottom:0;border-radius:3px}#intercom-container .intercom-emoji-selector-panel-small .intercom-emoji-image{background-image:url(https://js.intercomcdn.com/images/emoji-spritemap-16.bc0d768e.png);background-size:464px 464px;background-repeat:no-repeat;border-radius:3px;border:10px solid;color:#fff;background-color:#fff;border-color:#fff;cursor:pointer}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-emoji-selector-panel-small .intercom-emoji-image{background-image:url(https://js.intercomcdn.com/images/emoji-spritemap-32.93b83e6d.png)}}#intercom-container .intercom-emoji-selector-panel-small .intercom-emoji-image:hover{background-color:#ededed;border-color:#ededed;color:#ededed}#intercom-container .intercom-emoji-selector-panel-large{box-shadow:0 -1px 3px 0 rgba(0,0,0,.1);background-color:#fff;height:220px;width:322px;overflow-y:auto;display:none;border-radius:0 0 3px 3px}#intercom-container .intercom-emoji-selector-panel-large.active{display:block}#intercom-container .intercom-emoji-selector-panel-large .intercom-emoji-icon{color:#60686e;margin:5px;width:30px;line-height:30px;display:inline-table;text-align:center;cursor:pointer}#intercom-container .intercom-emoji-selector-panel-large .intercom-emoji-icon:hover{background-color:#ededed}#intercom-container .intercom-large-emoji-panel-top-mask{background:linear-gradient(#fff,hsla(0,0%,100%,0) 20px);height:20px;width:100%;position:absolute;top:35px;left:0;content:"";pointer-events:none;display:none}#intercom-container .intercom-large-emoji-panel-bottom-mask{background:linear-gradient(hsla(0,0%,100%,0),#fff 20px);height:20px;width:100%;position:absolute;bottom:0;left:0;content:"";border-radius:0 0 3px 3px;pointer-events:none;display:block}#intercom-container .intercom-emoji-selector-panel-header{background-color:#fafafb;height:35px;width:322px;text-align:center;border-radius:3px}#intercom-container .intercom-emoji-selector-panel-header .intercom-emoji-group-icon{z-index:2147483001;position:relative;color:#60686e;line-height:30px;width:45px;margin-top:5px;text-align:center;display:inline-block;border-radius:3px 3px 0 0;cursor:pointer}#intercom-container .intercom-emoji-selector-panel-header .intercom-emoji-group-icon:hover{background-color:#ededed}#intercom-container .intercom-emoji-selector-panel-header .intercom-emoji-group-icon.active{z-index:2147483002;background-color:#fff;box-shadow:0 -1px 3px 0 rgba(0,0,0,.1);border-bottom:none}#intercom-container .intercom-lwr-composer{width:100%;height:54px;border-top:1px solid #e4e5e7;display:none;overflow:hidden;min-width:120px}#intercom-container .intercom-lwr-composer-active{display:block}#intercom-container .intercom-lwr-composer-options:after,#intercom-container .intercom-lwr-composer-options:before{content:" ";display:table}#intercom-container .intercom-lwr-composer-options:after{clear:both}#intercom-container .intercom-lwr-composer-option{background-color:#fdfdfd;position:relative;float:left;height:54px}#intercom-container .intercom-lwr-composer-enabled .intercom-lwr-composer-option,#intercom-container .intercom-lwr-composer-enabled .intercom-lwr-composer-option svg{cursor:pointer}#intercom-container .intercom-lwr-composer-enabled .intercom-lwr-composer-option:hover{background-color:#f7f7f7}#intercom-container .intercom-lwr-composer-option svg{position:absolute;left:50%;top:50%;width:16px;height:16px;margin-left:-8px;margin-top:-8px;background-color:transparent;shape-rendering:geometricPrecision}#intercom-container .intercom-lwr-composer-options-thumbs .intercom-lwr-composer-option{width:50%}#intercom-container .intercom-lwr-composer-options-emotions .intercom-lwr-composer-option{width:33.33%}#intercom-container .intercom-lwr-composer-option-selected .intercom-lwr-composer-icon{fill:#82add3}#intercom-container .intercom-lwr-composer-option .intercom-lwr-option-background{fill:#fdfdfd}#intercom-container .intercom-lwr-composer-enabled .intercom-lwr-composer-option:hover .intercom-lwr-option-background{fill:#f7f7f7}#intercom-container .intercom-powered-by{width:100%;color:#b0bec5;text-align:center;clear:both;font-weight:500;line-height:22px;padding:7px}#intercom-container .intercom-powered-by span{font-size:13px;text-decoration:none}#intercom-container .intercom-powered-by u{text-decoration:underline}#intercom-container .intercom-powered-by a:active,#intercom-container .intercom-powered-by a:active u,#intercom-container .intercom-powered-by a:hover,#intercom-container .intercom-powered-by a:hover u{color:#b0bec5}#intercom-container .intercom-upload-remove{background-image:url(https://js.intercomcdn.com/images/icon-upload-remove.b3413d69.png);background-size:14px 14px;background-repeat:no-repeat;opacity:.8;display:inline-block;vertical-align:middle;cursor:pointer;width:14px;height:14px;right:-22px;top:2px}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-upload-remove{background-image:url(https://js.intercomcdn.com/images/icon-upload-remove@2x.644a85e2.png)}}#intercom-container .intercom-upload-remove:hover{opacity:1}#intercom-container .intercom-unread-counter{border-radius:50%;border:2px solid #fff;font-size:11px;line-height:16px;background-color:#82add3;text-align:center;color:#fff;position:absolute;width:16px;height:16px;top:11px;left:11px;cursor:pointer;display:none}#intercom-container .intercom-unread-counter.intercom-unread-counter-active{display:block}#intercom-container .intercom-is-typing:after,#intercom-container .intercom-is-typing:before{content:" ";display:table}#intercom-container .intercom-is-typing:after{clear:both}#intercom-container .intercom-is-typing-icon{background-image:url(https://js.intercomcdn.com/images/icon-is-typing.4a0dc2a4.gif);background-size:38px 18px;background-repeat:no-repeat;height:18px;cursor:default}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-is-typing-icon{background-image:url(https://js.intercomcdn.com/images/icon-is-typing@2x.0f7bf1a7.gif)}}#intercom-container .intercom-is-typing .intercom-comment-body{min-width:38px;padding-left:12px}#intercom-container.intercom-ie8 .intercom-sheet-content{clip:rect(-9999px,9999px,9999px,-9999px)}#intercom-container.intercom-ie8 .intercom-conversation,#intercom-container.intercom-ie8 .intercom-conversations,#intercom-container.intercom-ie8 .intercom-sheet-loading{border-left:1px solid #dadee2}#intercom-container.intercom-ie8 .intercom-app-profile,#intercom-container.intercom-ie8 .intercom-sheet-header{border-bottom:1px solid #dadee2}#intercom-container.intercom-ie8 .intercom-composer,#intercom-container.intercom-ie8 .intercom-sheet-footer{border-top:1px solid #dadee2}#intercom-container.intercom-ie8 .intercom-launcher.intercom-launcher-with-badge .intercom-launcher-button-with-avatar,#intercom-container.intercom-ie8 .intercom-launcher.intercom-launcher-with-notification .intercom-launcher-button-with-avatar{display:none}#intercom-container.intercom-ie8 .intercom-launcher.intercom-launcher-with-badge .intercom-launcher-button-without-avatar,#intercom-container.intercom-ie8 .intercom-launcher.intercom-launcher-with-notification .intercom-launcher-button-without-avatar{visibility:visible}#intercom-container.intercom-ie8 .intercom-launcher.intercom-launcher-with-badge .intercom-launcher-badge,#intercom-container.intercom-ie8 .intercom-launcher.intercom-launcher-with-notification .intercom-launcher-badge{right:0}#intercom-container.intercom-ie8 .intercom-lwr-composer-enabled .intercom-lwr-composer-option:hover,#intercom-container.intercom-ie8 .intercom-lwr-composer-option-selected.intercom-lwr-composer-option{background-color:#f7f7f7}#intercom-container.intercom-ie8 .intercom-comment{display:block;float:none;max-width:100%;width:100%;box-sizing:border-box}#intercom-container.intercom-ie8 .intercom-comment-by-admin .intercom-comment-body-container,#intercom-container.intercom-ie8 .intercom-comment-by-user .intercom-comment-body-container{max-width:272px;float:right;clear:both}#intercom-container.intercom-ie8 .intercom-comment-metadata-container{clear:both}#intercom-container.intercom-ie8 .intercom-comment-by-admin .intercom-comment-body-container{float:left}#intercom-container.intercom-ie8 .intercom-lwr-composer-option svg{display:none}#intercom-container.intercom-ie8 .intercom-lwr-composer-option .intercom-lwr-icon{position:absolute;left:50%;top:50%;width:18px;height:18px;margin-left:-9px;margin-top:-9px;background-repeat:no-repeat}#intercom-container.intercom-ie8 .intercom-lwr-composer-option.intercom-lwr-composer-option-thumbs-up .intercom-lwr-icon{background-image:url(https://js.intercomcdn.com/images/icon-thumbs-up.ef2a83d6.png)}#intercom-container.intercom-ie8 .intercom-lwr-composer-option.intercom-lwr-composer-option-thumbs-down .intercom-lwr-icon{background-image:url(https://js.intercomcdn.com/images/icon-thumbs-down.289ff01a.png)}#intercom-container.intercom-ie8 .intercom-lwr-composer-option.intercom-lwr-composer-option-happy .intercom-lwr-icon{background-image:url(https://js.intercomcdn.com/images/icon-emotion-happy.445136ff.png)}#intercom-container.intercom-ie8 .intercom-lwr-composer-option.intercom-lwr-composer-option-neutral .intercom-lwr-icon{background-image:url(https://js.intercomcdn.com/images/icon-emotion-neutral.4bc254cc.png)}#intercom-container.intercom-ie8 .intercom-lwr-composer-option.intercom-lwr-composer-option-sad .intercom-lwr-icon{background-image:url(https://js.intercomcdn.com/images/icon-emotion-sad.82ef651a.png)}#intercom-container.intercom-ie8 .intercom-autoresponse-icon{border:none;background-color:#fafafa}#intercom-container.intercom-ie8 .intercom-autoresponse-icon i{background:url(https://js.intercomcdn.com/images/icon-info.e879e16e.png);width:32px;height:32px;margin:2px}@-webkit-keyframes $name{0%{-webkit-transform:scale(0);transform:scale(0)}80%{-webkit-transform:scale(1.2);transform:scale(1.2)}to{-webkit-transform:scale(1);transform:scale(1)}}@-keyframes $name{0%{-webkit-transform:scale(0);transform:scale(0)}80%{-webkit-transform:scale(1.2);transform:scale(1.2)}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes $name{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(0);transform:scale(0)}80%{-webkit-transform:scale(1.2);transform:scale(1.2)}to{-webkit-transform:scale(1);transform:scale(1);background-color:transparent;border-color:transparent}}@-keyframes $name{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(0);transform:scale(0)}80%{-webkit-transform:scale(1.2);transform:scale(1.2)}to{-webkit-transform:scale(1);transform:scale(1);background-color:transparent;border-color:transparent}}@-webkit-keyframes $name{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}50%{opacity:0}75%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-keyframes $name{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}50%{opacity:0}75%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes $name{0%{opacity:0;-webkit-transform:translate(10px);transform:translate(10px)}50%{-webkit-transform:translate(-5px) scale(1.05);transform:translate(-5px) scale(1.05)}to{opacity:1;-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}}@-keyframes $name{0%{opacity:0;-webkit-transform:translate(10px);transform:translate(10px)}50%{-webkit-transform:translate(-5px) scale(1.05);transform:translate(-5px) scale(1.05)}to{opacity:1;-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}}@-webkit-keyframes $name{0%{opacity:1;-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}50%{-webkit-transform:translate(-5px) scale(.95);transform:translate(-5px) scale(.95)}to{opacity:0;-webkit-transform:translate(10px) scale(0);transform:translate(10px) scale(0)}}@-keyframes $name{0%{opacity:1;-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}50%{-webkit-transform:translate(-5px) scale(.95);transform:translate(-5px) scale(.95)}to{opacity:0;-webkit-transform:translate(10px) scale(0);transform:translate(10px) scale(0)}}@-webkit-keyframes $name{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}@-keyframes $name{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}@-webkit-keyframes $name{0%{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}@-keyframes $name{0%{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}#intercom-container .intercom-launcher.intercom-launcher-minimized{transition:opacity,.1s}#intercom-container .intercom-launcher.intercom-launcher-minimized .intercom-launcher-button{-webkit-animation:intercom-launcher-minimize .1s linear 0s both;animation:intercom-launcher-minimize .1s linear 0s both;transition:background-image 0s linear .1s}#intercom-container .intercom-launcher.intercom-launcher-maximized .intercom-launcher-button{-webkit-animation:intercom-launcher-maximize .1s linear 0s both;animation:intercom-launcher-maximize .1s linear 0s both}#intercom-container .intercom-launcher.intercom-launcher-with-updated-avatar .intercom-launcher-button{-webkit-animation:intercom-launcher-show-avatar .15s ease-out 1s both;animation:intercom-launcher-show-avatar .15s ease-out 1s both}#intercom-container .intercom-launcher-enabled.intercom-launcher-with-updated-avatar .intercom-launcher-button,#intercom-container .intercom-launcher-maximized.intercom-launcher-with-updated-avatar .intercom-launcher-button{-webkit-animation:intercom-launcher-hide-and-show-avatar .3s ease-out 1s both;animation:intercom-launcher-hide-and-show-avatar .3s ease-out 1s both;transition:background-image 0s linear 1.15s,background-size 0s linear 1.15s,border-width 0s linear 1.15s}#intercom-container .intercom-launcher.intercom-launcher-with-badge .intercom-launcher-badge{-webkit-animation:intercom-launcher-show-badge .3s ease-out 1.5s both;animation:intercom-launcher-show-badge .3s ease-out 1.5s both}#intercom-container .intercom-launcher-enabled.intercom-launcher-with-updated-avatar.intercom-launcher-with-initials .intercom-launcher-initials,#intercom-container .intercom-launcher.intercom-launcher-with-updated-avatar.intercom-launcher-with-initials .intercom-launcher-initials{-webkit-animation:intercom-launcher-show-avatar .3s ease-out 1s both;animation:intercom-launcher-show-avatar .3s ease-out 1s both}#intercom-container .intercom-launcher.intercom-launcher-with-preview .intercom-launcher-preview{-webkit-animation:intercom-launcher-show-preview .3s ease-in-out 1.5s both;animation:intercom-launcher-show-preview .3s ease-in-out 1.5s both}#intercom-container .intercom-launcher.intercom-launcher-with-preview .intercom-launcher-update-preview{-webkit-animation:intercom-launcher-update-preview .3s ease-out 1s both;animation:intercom-launcher-update-preview .3s ease-out 1s both}#intercom-container .intercom-launcher.intercom-launcher-with-preview .intercom-launcher-preview-close{transition:opacity .1s ease-in}#intercom-container .intercom-conversation-parts{transition:opacity .2s}#intercom-container .intercom-conversation-preview .intercom-sheet-header,#intercom-container .intercom-sheet-loading .intercom-conversation-parts{transition:none}@-webkit-keyframes $name{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-keyframes $name{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}#intercom-container .intercom-conversations-fetching .intercom-conversations-spinner,#intercom-container .intercom-sheet-loading .intercom-sheet-spinner{-webkit-animation:intercom-spin 1s infinite linear;animation:intercom-spin 1s infinite linear}@-webkit-keyframes $name{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.5);transform:scale(1.5)}to{-webkit-transform:scale(1);transform:scale(1)}}@-keyframes $name{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.5);transform:scale(1.5)}to{-webkit-transform:scale(1);transform:scale(1)}}#intercom-container .intercom-lwr-composer-option-pop svg{-webkit-animation:intercom-lwr-composer-option-bounce .2s ease-in 0 both;animation:intercom-lwr-composer-option-bounce .2s ease-in 0 both}#intercom-container .intercom-announcement a.intercom-h2b-button,#intercom-container .intercom-announcement a.intercom-h2b-button:hover,#intercom-container .intercom-small-announcement a.intercom-h2b-button,#intercom-container .intercom-small-announcement a.intercom-h2b-button:hover{transition:background-color .05s linear}#intercom-container .intercom-announcement-body-container a.intercom-h2b-button,#intercom-container .intercom-composer-send-button,#intercom-container .intercom-conversations-new-conversation-button,#intercom-container .intercom-new-anonymous-user input[type=submit],#intercom-container .intercom-small-announcement-body-container a.intercom-h2b-button{transition:background-color .1s linear}#intercom-container .intercom-sheet{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:bottom right;transform-origin:bottom right;transition:opacity .1s linear .15s,-webkit-transform .25s ease-in-out;transition:transform .25s ease-in-out,opacity .1s linear .15s;transition:transform .25s ease-in-out,opacity .1s linear .15s,-webkit-transform .25s ease-in-out}#intercom-container .intercom-sheet-minimized{-webkit-transform:scale(0);transform:scale(0);transition:opacity .1s linear,visibility 0s linear .25s,-webkit-transform .25s ease-in-out;transition:transform .25s ease-in-out,opacity .1s linear,visibility 0s linear .25s;transition:transform .25s ease-in-out,opacity .1s linear,visibility 0s linear .25s,-webkit-transform .25s ease-in-out}#intercom-container .intercom-emoji-sub-icon{background-image:url(https://js.intercomcdn.com/images/emoji-spritemap-16.bc0d768e.png);background-size:464px 464px;background-repeat:no-repeat;position:relative;top:2px;margin:1px}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-emoji-sub-icon{background-image:url(https://js.intercomcdn.com/images/emoji-spritemap-32.93b83e6d.png)}}#intercom-container .intercom-sticker-comment-body{padding:0}#intercom-container .intercom-sticker-user-comment,#intercom-container .intercom-sticker-user-comment .intercom-comment-metadata,#intercom-container .intercom-sticker-user-comment .intercom-sticker-comment-body{float:right}#intercom-container .intercom-sticker-admin-comment{padding-left:38px}#intercom-container .intercom-sticker-image{width:96px;height:96px;min-width:96px;min-height:96px}#intercom-container .intercom-sticker-native{font-size:96px;line-height:1.1}#intercom-container .intercom-interblocks-video-reply{display:block;width:100%;border-radius:4px;box-shadow:0 1px 2px 0 rgba(0,0,0,.8);z-index:0;background-color:#000}#intercom-container .intercom-video-reply{position:relative}#intercom-container .intercom-video-reply:hover div{opacity:1;transition:opacity .4s ease}#intercom-container .intercom-video-reply-controls{position:absolute;bottom:0;height:64px;width:100%;z-index:1}#intercom-container .intercom-video-reply-controls-shading{position:absolute;opacity:0;background-image:linear-gradient(transparent,rgba(0,0,0,.7));height:100%;width:100%}#intercom-container .intercom-video-reply-controls-bar{position:absolute;width:100%;height:40px;bottom:0}#intercom-container .intercom-video-reply-controls-playpausebutton{position:absolute;width:39px;left:0;height:100%;opacity:0;background-position:50%;cursor:pointer}#intercom-container .intercom-video-reply-controls-playpausebutton.intercom-paused{background-image:url(https://js.intercomcdn.com/images/video-play.c58d0cd9.png);background-size:11px 12px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-video-reply-controls-playpausebutton.intercom-paused{background-image:url(https://js.intercomcdn.com/images/video-play@2x.2d812ec3.png)}}#intercom-container .intercom-video-reply-controls-playpausebutton.intercom-unpaused{background-image:url(https://js.intercomcdn.com/images/video-pause.89fbbc4a.png);background-size:10px 12px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-video-reply-controls-playpausebutton.intercom-unpaused{background-image:url(https://js.intercomcdn.com/images/video-pause@2x.e29315ed.png)}}#intercom-container .intercom-video-reply-controls-mutebutton{position:absolute;width:45px;height:100%;right:0;background-position:50%;cursor:pointer}#intercom-container .intercom-video-reply-controls-mutebutton.intercom-muted{opacity:1;background-image:url(https://js.intercomcdn.com/images/video-muted.e00bd7de.png);background-size:19px 18px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-video-reply-controls-mutebutton.intercom-muted{background-image:url(https://js.intercomcdn.com/images/video-muted@2x.77d304f4.png)}}#intercom-container .intercom-video-reply-controls-mutebutton.intercom-unmuted{opacity:0;background-image:url(https://js.intercomcdn.com/images/video-unmuted.677f36b3.png);background-size:19px 18px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-video-reply-controls-mutebutton.intercom-unmuted{background-image:url(https://js.intercomcdn.com/images/video-unmuted@2x.2855eea9.png)}}#intercom-container .intercom-video-reply-controls-progressbar{position:absolute;height:2px;width:180px;bottom:19px;left:39px;opacity:0;border-radius:1px;background:hsla(0,0%,100%,.5)}#intercom-container .intercom-image-only-comment-body{padding:0;margin:10px 0}#intercom-container .intercom-image-only-comment-body img{border-radius:4px}#intercom-container .intercom-image-only-user-comment,#intercom-container .intercom-image-only-user-comment .intercom-comment-metadata{float:right}#intercom-container .intercom-image-only-admin-comment{padding-left:38px}#intercom-container .intercom-interblocks-content-card{display:none;width:334px;max-height:136px;max-width:100%;overflow:hidden;border-radius:20px;font-size:16px;border:1px solid #e0e0e0}#intercom-container .intercom-interblocks-content-card:hover{box-shadow:0 2px 4px rgba(0,0,0,.5)}#intercom-container .intercom-interblocks-article-card{width:334px;max-height:176px;max-width:100%;overflow:hidden;border-radius:4px;font-size:16px;border:1px solid #e0e0e0;background-color:#fff;box-shadow:0 1px 2px 0 rgba(234,236,238,.8)}#intercom-container .intercom-interblocks-card-title{display:none}#intercom-container .intercom-interblocks-article-title{color:#519dd4;margin:16px 18px 12px;line-height:1.3;overflow:hidden}#intercom-container .intercom-interblocks-article-body{margin:0 18px 12px;font-size:14px;color:#65757c;line-height:1.3}#intercom-container .intercom-interblocks-article-author{margin:10px 18px;height:24px;line-height:normal;display:-webkit-flex;display:-ms-flexbox;display:flex;vertical-align:middle}#intercom-container .intercom-interblocks-article-author-avatar{width:16px;height:16px;display:inline-block;vertical-align:middle}#intercom-container img.intercom-interblocks-article-author-avatar-image{width:16px;height:16px;border-radius:50%;margin:0}#intercom-container .intercom-interblocks-article-author-name{color:#455a64;margin:0 0 0 5px;font-size:12px;font-weight:500;overflow:hidden}#intercom-container .intercom-interblocks-article-written-by{color:#8897a4;margin:0 0 0 5px;font-size:12px;overflow:hidden;vertical-align:middle}#intercom-container .intercom-message .intercom-interblocks-article-card{box-shadow:0 1px 10px 0 rgba(0,0,0,.08)}#intercom-container .intercom-message .intercom-interblocks-card-title{display:block;text-align:center;color:#74848b;font-size:12px;font-weight:500;margin:8px 0}@-webkit-keyframes fade-in{0%{opacity:0}25%{opacity:0}50%{opacity:0}75%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}25%{opacity:0}50%{opacity:0}75%{opacity:0}to{opacity:1}}.intercom-prevent-scroll{overflow:hidden}.intercom-installation-overlay{z-index:2147482999;position:absolute;top:0;left:0;width:100vw;height:100vh;background-color:rgba(53,53,53,.9);text-align:center;-webkit-animation-name:fade-in;animation-name:fade-in;-webkit-animation-duration:.75s;animation-duration:.75s}.intercom-installation-content{position:relative;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);color:#fff;font-size:16px;font-family:Helvetica,sans-serif;font-weight:700;text-align:inherit}.intercom-installation-icon{width:50px;height:50px;background:#65cc93;border-radius:50%;display:inline-block;background-size:25px 21px;background-position:50%;background-repeat:no-repeat;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAqCAYAAADxughHAAAAAXNSR0IArs4c6QAAAutJREFUaAXVmUloVEEQhidGXCBeogdxQQTxIrgggqgREQRFEQRB0ZOQQ0RB8OAhag6e3fCsghdvLkcFMV7FswsibicVJe5LRCdfQx5pXup1V/VMXjoNP9Ov+q+q/0+GTE2n0Zgiq9lsHgaXQMcUkTxeJuL3g3/Arctg2nhW5hFE7wDDwF/XeZieufQxeYjdBH74Drz9LfYzxtiZ7hC5Cnz2hEvbOwRnZ2qh0UDcMvBOUi7EHhDrys4MohaCV8Cy7mZlBOVzwWOLA7g/weZsjCCmCzwElvUX8q6cTMxE0D2LA7j/wcGcTHQi6KbRhKMfzclEB4KuJpg4lY0JJwQD5xJMXMzNxMkEE9fIyWdoRExfgonb5OQzXyHGn2S1fgYhzsrmLYUYaZKNmXkEYU6yCZK7k5OFROptBFWTLEfiekJ0nlBOFyJ5KXgLzugywizquEl2CFjWG8iLwpUDpyQvAa9BsQYC9OgRRSyTbNHzPZvl0eJVBJIXg5dFNe+1vyonFCc/ZZL9Qt6aUN3g2WjTF5748vZEsEDpkORukDLJ9pRK6R9puAA8B7F1XFOVIqmT7E5NfZFD0/ngWcyBd35MLDQahDc5kyyNBz2R2u0RyQzJbpK9oS3i8cR6Uo/KGMVWgA9eUc3WfRfoKxcldkWTXOKcLtdJfqbwSvCx1CD26Mz0Fk3Zn40lCOcXivy2vdJkNfgkNAuFnJlDoD9EqjibuEmWhmuB9RO4uMqs0CuG3STb2bbfglSIButA7GJMVKcM3odXzyRLo/Xgq1KYhdbaJCv95GMx1G0A3ywqI9ynnKdPsjHBoXMa94DvEYGa49Ym2ZBI7RkqtwDr9wjfXGuTrFaohoeqrcBdTVqX+6ORPslqxFk5CNoGfhmcOOPpk6xVoIWPsO3gt8KMu5NNn2QtolK5TiD4EzDjPu0PpNavNQ+hu8FwhZnWJ9k63WBiD3BvIX+1b5Kt2cxeXBRmztfZu+29MLIPuP99T+qd7AgPy3DCIsoWuwAAAABJRU5ErkJggg==)}.intercom-installation-heading{font-size:30px;font-weight:700;text-align:inherit;margin:20px 0}.intercom-installation-message{font-weight:700;text-align:inherit;margin:10px 0}.intercom-installation-message:before{content:'\2014';margin-right:5px}.intercom-installation-button{margin-top:20px;padding:1.3em 2.2em;border:1px solid #fff;border-radius:20%/50%;background:none;font-size:12px;color:#fff;text-transform:uppercase;cursor:pointer;outline:0}.intercom-installation-button:hover{color:#ddd;border-color:#ddd}.intercom-installation-arrow{position:absolute;right:85px;bottom:32px;width:40px;height:40px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAABeJJREFUeAHtnG2oFFUYx+9qaUFvlr1qpJZJL3YDKygSK7EXjajECK5ElERCkBVGUMQNevlSVB/6VJTUhwpKqChCUlIyRE0uJdKrKBFo9iJadhPz9vvv3VmOszN7Zs7uzM7unAeee87MOc/znOfnmd2ZOWftGxkZmYge2+fFicAYrE5G+52svVGfAJ6IzvIs3AgI4AkeoBs8WQUzcLa7i3JbBgDP44vkonKjcMteAINv4NvcXJTbSgAP1BDcWm4UbtkL4P6a6Swu4+lubsprZQIUhQfKi8Ixc2bdlWgg+6gc7+iqlGaagX8ZmQve3caxr9oIMONOC6ZfrfyJcpzNzrcbBAC2NwTxQaPZV20EgLcxBHAPx3pG9mIhoM9AyfejRf3vRGqP1Y98JZZAHEAZLGMWzoi19A1VAs0AHkOPFUAc61lZCABpChonj1rMfbMIQG9nDMFhzl/oKUUTCC5hta6N7tI3nvPvAdE/oUQAMgF+HtEenLqAyltArAQnfBkiAJxzUZsMhsz8oUkAetstBA/Tvsi08XWDAHCetQBU80F0vmHmqwEBwMwUoQTyD32uDex8aRAAzNYEANVlP3qVYVrKqvktHAB4O6hYyuNoXwXEBZZ+5WoGyDRUXxZJ5RAdl5SLkiVbgHyUlJ7Rb9DitjzNQJljgElTfZ/O/j2ipgogNqUhZ/TVkkBhNisxlns6MvUJfKcBJW31XwwKsUTKOIbQ53KHSNCx6A60FVmDcUcX64kvgJInOwHxrtHYLf3VTfcT6NG5J0BA4gYAlcTyXMdAwAq6WZHbILpBvyHXBBoBKo18P1oIOFtR2yhr8XV1XiCJZc5ApaF73Hvzil+NQ0C9UG23fIzDy7NOhBhhgMrjP3Qg69h1/wTT04le7WchG3C6GM1kNwR+owAqDz1BLawnmXWFYMsVNUPZje9n0BntzAV/cQCVil7N3dzOeLG+CDQGXYfmId8QZBCdGTughA34aAZQuejKmpfQXUO3VGscBJqKh69RvYnJS34k0Br0C3R9pVLZniYwYx6if7/FRrt0b8L3Oku/huZUAGXNgPTm5dUGT/md2EWo9eg2VHCrSvK/Um+QhABlp5261+NnQ4OTJidSA5QvBrWSomib0gVgD6pSex6Dci71CWgS2UunuUDckqSz+rgC1CWsWXCJnPSY/E4+1wBxa5K8nADKMbPwHIpN6Kk67jHZTT5zgPidLa+oV/o2m2o7zndSuR09mMiguzqdznBXM0mm2YbtDFCOgahvxvttQbq0fRLjFsSzm42/JYByDMQ3KJY1C9LFbVMYuyCeGZdDywDlGIgvUzwUF6TLz09n/J8BMfKzvi0ABQiIL1E8rHoPirb3aQm34XaobQAFDYgvUjyCjui4x+RS8vkUiPp9dV2cb2PqHiIqBLmD0yvQ4JegEb269pS+OG9ksvytDDIBKMdAvIziA/QsHfeY6Nl8ARCH23oJm5BwvpnjK9CvzPM9Ur+OPKpbYDIDKFBA/IVC/53AazruITlELm8qn8wu4TAsLmntKRTI2HuqsE1Bjw8zrgEmxzsaX6Yz0ARAwE84vhh91zzfZXXdXSwJ4HVs7MzGRWjczypoKqws7Ri0cGAQjUe1zvJHYXEdObBiPiQwxgno82hWq35HYnA7ejw8AQp3TF6TUa3KaXWuSPJ04WA1GxDkxqED6JcFoPhCs7EWvg2A/ehT6JYOwHyl8IDSDBCAk9D70A/RrL94XidGonvkRJ3SJJpXXxKcTCwtvGthS6pXTvql/UloK+vWekRbzL2ebpjLKcDV5tBTUP3+71s0qayk41HlpBaTNUBsWzsCuNotlnqDU26PcjH5FeX0agaykMs29QqjBzi65+YW4A27/GuWHeBGoM0H3gEXeLIpM8Ah8teree2hcZayAtwGsXnA+9OZXM2wjAB/IHftwPqtVXiyLxvAHeQseNpj6CUJAeM+8GfqU5PY+D4GgRrAXZTnG6d9NSkBwGlfi9ZivLgQAN4ZLnbeJicC/wMLmKUehkIagAAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-size:40px 40px}#intercom-container .intercom-sheet-loading .intercom-app-profile-container{visibility:hidden}#intercom-container .intercom-app-profile-container.new-intercom-app-profile-container{padding:0}#intercom-container .intercom-app-profile{padding:20px 12px 26px;background-color:#fff;overflow:hidden;box-shadow:0 0 3px rgba(0,0,0,.2);border-radius:5px}#intercom-container .intercom-app-profile.new-intercom-app-profile{border-radius:0}#intercom-container .intercom-app-profile-team{text-align:center;color:#455a64;font-weight:500;font-size:15px;line-height:1.8}#intercom-container .intercom-app-profile-expectations .intercom-last-active,#intercom-container .intercom-app-profile-expectations .intercom-proactive-response-time{position:relative;bottom:auto;color:#90a4ae}#intercom-container .intercom-active-admins{text-align:center;color:#364850;padding-top:24px}#intercom-container .intercom-active-admin{display:inline-block}#intercom-container .intercom-admin-avatar,#intercom-container .intercom-admin-avatar img{width:48px;height:48px}#intercom-container .intercom-admin-fallback-avatar{line-height:48px;font-size:19.2px}#intercom-container .intercom-app-profile-text{padding:14px 30px 0;text-align:center;font-size:14px;font-weight:400;color:#455a64;line-height:20px;font-size:13px;color:#78909c;line-height:19px}#intercom-container .intercom-app-profile-text .intercom-comment-body{font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-app-profile-text .intercom-container,#intercom-container .intercom-app-profile-text a,#intercom-container .intercom-app-profile-text blockquote,#intercom-container .intercom-app-profile-text code,#intercom-container .intercom-app-profile-text h1,#intercom-container .intercom-app-profile-text h2,#intercom-container .intercom-app-profile-text h3,#intercom-container .intercom-app-profile-text h4,#intercom-container .intercom-app-profile-text h5,#intercom-container .intercom-app-profile-text h6,#intercom-container .intercom-app-profile-text ol,#intercom-container .intercom-app-profile-text p,#intercom-container .intercom-app-profile-text ul{font-size:14px;font-weight:400;line-height:20px;word-wrap:break-word;margin:20px 0}#intercom-container .intercom-app-profile-text .intercom-container:first-child,#intercom-container .intercom-app-profile-text a:first-child,#intercom-container .intercom-app-profile-text blockquote:first-child,#intercom-container .intercom-app-profile-text code:first-child,#intercom-container .intercom-app-profile-text h1:first-child,#intercom-container .intercom-app-profile-text h2:first-child,#intercom-container .intercom-app-profile-text h3:first-child,#intercom-container .intercom-app-profile-text h4:first-child,#intercom-container .intercom-app-profile-text h5:first-child,#intercom-container .intercom-app-profile-text h6:first-child,#intercom-container .intercom-app-profile-text ol:first-child,#intercom-container .intercom-app-profile-text p:first-child,#intercom-container .intercom-app-profile-text ul:first-child{margin-top:0}#intercom-container .intercom-app-profile-text .intercom-container:last-child,#intercom-container .intercom-app-profile-text a:last-child,#intercom-container .intercom-app-profile-text blockquote:last-child,#intercom-container .intercom-app-profile-text code:last-child,#intercom-container .intercom-app-profile-text h1:last-child,#intercom-container .intercom-app-profile-text h2:last-child,#intercom-container .intercom-app-profile-text h3:last-child,#intercom-container .intercom-app-profile-text h4:last-child,#intercom-container .intercom-app-profile-text h5:last-child,#intercom-container .intercom-app-profile-text h6:last-child,#intercom-container .intercom-app-profile-text ol:last-child,#intercom-container .intercom-app-profile-text p:last-child,#intercom-container .intercom-app-profile-text ul:last-child{margin-bottom:0}#intercom-container .intercom-app-profile-text h1,#intercom-container .intercom-app-profile-text h1 a{font-size:14px;font-weight:700;line-height:20px;letter-spacing:normal;margin:27px 0;color:inherit}#intercom-container .intercom-app-profile-text h2,#intercom-container .intercom-app-profile-text h2 a{font-size:14px;line-height:20px;font-weight:700;margin:20px 0 10px;color:inherit}#intercom-container .intercom-app-profile-text ol,#intercom-container .intercom-app-profile-text ul{font-size:14px;-moz-padding-start:40px;-webkit-padding-start:40px;-khtml-padding-start:40px;-o-padding-start:40px;padding-start:40px;padding-left:30px}#intercom-container .intercom-app-profile-text [dir=ltr] ol,#intercom-container .intercom-app-profile-text [dir=ltr] ul{padding-left:30px}#intercom-container .intercom-app-profile-text [dir=rtl] ol,#intercom-container .intercom-app-profile-text [dir=rtl] ul{padding-right:30px}#intercom-container .intercom-app-profile-text ul>li{list-style-type:disc}#intercom-container .intercom-app-profile-text ol>li{list-style-type:decimal}#intercom-container .intercom-app-profile-text li{display:list-item;line-height:20px;margin-bottom:10px;font-weight:400}#intercom-container .intercom-app-profile-text em,#intercom-container .intercom-app-profile-text i{font-style:italic}#intercom-container .intercom-app-profile-text b,#intercom-container .intercom-app-profile-text strong{font-weight:700;line-height:100%}#intercom-container .intercom-app-profile-text pre{font-size:14px;padding:0 0 10px;white-space:pre-wrap}#intercom-container .intercom-app-profile-text img{display:block;max-width:100%;margin:10px 0}#intercom-container .intercom-app-profile-text p+br{display:none}#intercom-container .intercom-app-profile-text a:active,#intercom-container .intercom-app-profile-text a:hover,#intercom-container .intercom-app-profile-text a:link,#intercom-container .intercom-app-profile-text a:visited{text-decoration:underline}#intercom-container .intercom-app-profile-text a:link,#intercom-container .intercom-app-profile-text a:visited{color:#82add3}#intercom-container .intercom-app-profile-text a:active,#intercom-container .intercom-app-profile-text a:hover{color:#5a85ab}#intercom-container .intercom-app-profile-text h2+.ic_button_in_content,#intercom-container .intercom-app-profile-text h2+.ic_social_block,#intercom-container .intercom-app-profile-text h2+blockquote,#intercom-container .intercom-app-profile-text h2+ol,#intercom-container .intercom-app-profile-text h2+p,#intercom-container .intercom-app-profile-text h2+ul,#intercom-container .intercom-app-profile-text h3+.ic_button_in_content,#intercom-container .intercom-app-profile-text h3+.ic_social_block,#intercom-container .intercom-app-profile-text h3+blockquote,#intercom-container .intercom-app-profile-text h3+ol,#intercom-container .intercom-app-profile-text h3+p,#intercom-container .intercom-app-profile-text h3+ul,#intercom-container .intercom-app-profile-text h4+.ic_button_in_content,#intercom-container .intercom-app-profile-text h4+.ic_social_block,#intercom-container .intercom-app-profile-text h4+blockquote,#intercom-container .intercom-app-profile-text h4+ol,#intercom-container .intercom-app-profile-text h4+p,#intercom-container .intercom-app-profile-text h4+ul,#intercom-container .intercom-app-profile-text h5+.ic_button_in_content,#intercom-container .intercom-app-profile-text h5+.ic_social_block,#intercom-container .intercom-app-profile-text h5+blockquote,#intercom-container .intercom-app-profile-text h5+ol,#intercom-container .intercom-app-profile-text h5+p,#intercom-container .intercom-app-profile-text h5+ul,#intercom-container .intercom-app-profile-text h6+.ic_button_in_content,#intercom-container .intercom-app-profile-text h6+.ic_social_block,#intercom-container .intercom-app-profile-text h6+blockquote,#intercom-container .intercom-app-profile-text h6+ol,#intercom-container .intercom-app-profile-text h6+p,#intercom-container .intercom-app-profile-text h6+ul{margin-top:0}#intercom-container .intercom-app-profile-text .intercom-h2b-facebook,#intercom-container .intercom-app-profile-text .intercom-h2b-twitter{max-width:100%}#intercom-container .intercom-app-profile-text iframe[src*="vimeo.com"],#intercom-container .intercom-app-profile-text iframe[src*="wistia.net"],#intercom-container .intercom-app-profile-text iframe[src*="youtube.com"]{width:100%;height:149px;margin:20px auto}#intercom-container .intercom-app-profile-text p{text-align:center;font-size:13px;color:#78909c;line-height:19px}#intercom-container .intercom-app-profile-text p a:link,#intercom-container .intercom-app-profile-text p a:visited{color:#78909c}#intercom-container .intercom-image-viewable{cursor:zoom-in}#intercom-container .intercom-zoomed-image{z-index:2147483004;position:fixed;cursor:zoom-out;transition:all .3s ease}#intercom-container .intercom-zoomed-image-placeholder{background-color:#e4e5e7;border-radius:4px}#intercom-container .intercom-image-viewer-overlay{z-index:2147483003;position:fixed;top:0;right:0;bottom:0;left:0;background:#000;cursor:zoom-out;opacity:0}#intercom-container .intercom-admin-avatar{overflow:hidden;text-align:center;background-color:#fff}#intercom-container .intercom-admin-avatar,#intercom-container .intercom-admin-avatar img{margin:0 auto;border-radius:50%}#intercom-container .intercom-admin-fallback-avatar{color:#fff;text-align:center;font-weight:500;background-color:#82add3}#intercom-container .intercom-knowledgebase-article-body{z-index:2147483004;position:fixed;top:10%;right:10%;bottom:10%;left:10%;height:80%;width:80%;max-width:640px;margin:0 auto;border-radius:5px}#intercom-container .intercom-knowledgebase-article-overlay{z-index:2147483003;position:fixed;top:0;right:0;bottom:0;left:0;background:#000;opacity:.8}#intercom-container .intercom-video-launcher-hovercard-textarea{left:17px;padding:0;position:absolute;transition:bottom .2s ease}#intercom-container .intercom-video-launcher-hovercard-textarea textarea{background-color:#fff;border:1px solid #cfd8dc;border-radius:4px;box-sizing:border-box;color:#455a64;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;height:42px;line-height:20px;padding:10px 10px 5px 14px;resize:none;width:200px;transition:opacity .2s ease}#intercom-container .intercom-video-launcher-hovercard-textarea textarea::-webkit-input-placeholder{color:#b0bec5;font-size:14px;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:400;line-height:20px}#intercom-container .intercom-video-launcher-hovercard-textarea textarea::-moz-placeholder{color:#b0bec5;font-size:14px;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:400;line-height:20px}#intercom-container .intercom-video-launcher-hovercard-textarea textarea:-ms-input-placeholder{color:#b0bec5;font-size:14px;font-style:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:400;line-height:20px}#intercom-container .intercom-video-launcher-video-area:before{content:"";position:absolute;width:100%;height:320px;background:linear-gradient(180deg,rgba(46,46,46,.5) 0,hsla(0,0%,48%,0) 17%,hsla(0,0%,48%,0) 65%,rgba(46,46,46,.4) 86%);border-radius:5px}#intercom-container .intercom-launcher-hovercard-videolauncher{position:absolute;right:-5px;bottom:64px;width:234px;overflow:hidden}#intercom-container .intercom-video-launcher-hovercard-video-plain{border-radius:5px;cursor:pointer;outline:0}#intercom-container .intercom-launcher-video-topbar{height:16px;left:17px;position:absolute;top:14px;width:200px}#intercom-container .intercom-launcher-video-topbar-status-text-container{left:30px;line-height:12px;position:absolute;top:-1px;transition:opacity .1s ease}#intercom-container .intercom-launcher-video-topbar-status-text{color:#fff;cursor:pointer;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:18px}#intercom-container .intercom-launcher-video-topbar-status-icon-container{cursor:pointer}#intercom-container .intercom-launcher-video-topbar-status-icon{width:19px;height:18px;cursor:pointer}#intercom-container .intercom-launcher-video-topbar-muted-icon{background-image:url(https://js.intercomcdn.com/images/video-muted.e00bd7de.png);background-size:19px 18px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-launcher-video-topbar-muted-icon{background-image:url(https://js.intercomcdn.com/images/video-muted@2x.77d304f4.png)}}#intercom-container .intercom-launcher-video-topbar-unmuted-icon{background-image:url(https://js.intercomcdn.com/images/video-unmuted.677f36b3.png);background-size:19px 18px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-launcher-video-topbar-unmuted-icon{background-image:url(https://js.intercomcdn.com/images/video-unmuted@2x.2855eea9.png)}}#intercom-container .intercom-launcher-video-topbar-replay-icon{background-image:url(https://js.intercomcdn.com/images/video-replay_360.c3bc501b.png);background-size:19px 18px;background-repeat:no-repeat}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-launcher-video-topbar-replay-icon{background-image:url(https://js.intercomcdn.com/images/video-replay_360@2x.26b8f034.png)}}#intercom-container .intercom-launcher-video-topbar-close-icon{background-image:url(https://js.intercomcdn.com/images/icon-close-white@1x.6082a959.png);background-size:15px 15px;background-repeat:no-repeat;background-position:50%;cursor:pointer;height:30px;width:30px;position:absolute;right:-6px;top:-4px;transition:opacity .1s ease}@media (-webkit-min-device-pixel-ratio:1.3),(min--moz-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){#intercom-container .intercom-launcher-video-topbar-close-icon{background-image:url(https://js.intercomcdn.com/images/icon-close-white@2x.eca653ab.png)}}#intercom-container .intercom-launcher-video-muted-text,#intercom-container .intercom-launcher-video-replay-text,#intercom-container .intercom-launcher-video-unmuted-text{cursor:pointer}#intercom-container .intercom-launcher-video-topbar-text-muted{float:left;visibility:visible}#intercom-container .intercom-launcher-hovercard-video-overlay{background-color:#000;border-radius:5px;display:none;height:320px;opacity:.35;pointer-events:none;position:absolute;right:0;top:0;width:234px}#intercom-container .intercom-launcher-hovercard-video-overlay.intercom-launcher-hovercard-video-overlay-nocaret{height:320px}#intercom-container .intercom-launcher-overlay-admin-information-container{bottom:87px;display:none;height:48px;left:17px;position:absolute}#intercom-container .intercom-launcher-overlay-video-admin-avatar{border-radius:50%;cursor:pointer;display:inline-block;float:left;height:48px;vertical-align:top;width:48px}#intercom-container .intercom-launcher-overlay-video-admin-name{color:#fff;cursor:pointer;display:inline-block;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:15px;line-height:48px;padding-left:5px}#intercom-container .intercom-video-launcher-admin-upload-time{color:#fff;cursor:pointer;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;padding-bottom:5px}#intercom-container .intercom-sheet-loading .intercom-app-video-admin-profile-container{visibility:hidden}#intercom-container .intercom-admin-profile{box-shadow:0 0 3px rgba(0,0,0,.2);border-radius:5px;background-color:#fff}#intercom-container .intercom-app-profile-container{padding:16px 16px 0}#intercom-container .intercom-admin-profile-data-container{padding:20px 12px 12px;background-color:#fff;overflow:hidden}#intercom-container .intercom-admin-profile-data{text-align:center}#intercom-container .intercom-admin-profile-data .intercom-admin-avatar,#intercom-container .intercom-admin-profile-data .intercom-admin-avatar img{width:48px;height:48px}#intercom-container .intercom-admin-profile-data .intercom-admin-fallback-avatar{line-height:48px;font-size:19.2px}#intercom-container .intercom-active-admin-name{font-size:12px;color:#90a4ae;text-align:center;padding-top:7px;width:80px;overflow:hidden;text-overflow:ellipsis}#intercom-container .intercom-admin-profile-text-container{padding-bottom:10px;text-align:center;font-size:14px;font-weight:400;color:#455a64;line-height:20px;font-size:13px;color:#78909c;line-height:19px}#intercom-container .intercom-admin-profile-text-container .intercom-comment-body{font-size:14px;font-weight:400;line-height:20px}#intercom-container .intercom-admin-profile-text-container .intercom-container,#intercom-container .intercom-admin-profile-text-container a,#intercom-container .intercom-admin-profile-text-container blockquote,#intercom-container .intercom-admin-profile-text-container code,#intercom-container .intercom-admin-profile-text-container h1,#intercom-container .intercom-admin-profile-text-container h2,#intercom-container .intercom-admin-profile-text-container h3,#intercom-container .intercom-admin-profile-text-container h4,#intercom-container .intercom-admin-profile-text-container h5,#intercom-container .intercom-admin-profile-text-container h6,#intercom-container .intercom-admin-profile-text-container ol,#intercom-container .intercom-admin-profile-text-container p,#intercom-container .intercom-admin-profile-text-container ul{font-size:14px;font-weight:400;line-height:20px;word-wrap:break-word;margin:20px 0}#intercom-container .intercom-admin-profile-text-container .intercom-container:first-child,#intercom-container .intercom-admin-profile-text-container a:first-child,#intercom-container .intercom-admin-profile-text-container blockquote:first-child,#intercom-container .intercom-admin-profile-text-container code:first-child,#intercom-container .intercom-admin-profile-text-container h1:first-child,#intercom-container .intercom-admin-profile-text-container h2:first-child,#intercom-container .intercom-admin-profile-text-container h3:first-child,#intercom-container .intercom-admin-profile-text-container h4:first-child,#intercom-container .intercom-admin-profile-text-container h5:first-child,#intercom-container .intercom-admin-profile-text-container h6:first-child,#intercom-container .intercom-admin-profile-text-container ol:first-child,#intercom-container .intercom-admin-profile-text-container p:first-child,#intercom-container .intercom-admin-profile-text-container ul:first-child{margin-top:0}#intercom-container .intercom-admin-profile-text-container .intercom-container:last-child,#intercom-container .intercom-admin-profile-text-container a:last-child,#intercom-container .intercom-admin-profile-text-container blockquote:last-child,#intercom-container .intercom-admin-profile-text-container code:last-child,#intercom-container .intercom-admin-profile-text-container h1:last-child,#intercom-container .intercom-admin-profile-text-container h2:last-child,#intercom-container .intercom-admin-profile-text-container h3:last-child,#intercom-container .intercom-admin-profile-text-container h4:last-child,#intercom-container .intercom-admin-profile-text-container h5:last-child,#intercom-container .intercom-admin-profile-text-container h6:last-child,#intercom-container .intercom-admin-profile-text-container ol:last-child,#intercom-container .intercom-admin-profile-text-container p:last-child,#intercom-container .intercom-admin-profile-text-container ul:last-child{margin-bottom:0}#intercom-container .intercom-admin-profile-text-container h1,#intercom-container .intercom-admin-profile-text-container h1 a{font-size:14px;font-weight:700;line-height:20px;letter-spacing:normal;margin:27px 0;color:inherit}#intercom-container .intercom-admin-profile-text-container h2,#intercom-container .intercom-admin-profile-text-container h2 a{font-size:14px;line-height:20px;font-weight:700;margin:20px 0 10px;color:inherit}#intercom-container .intercom-admin-profile-text-container ol,#intercom-container .intercom-admin-profile-text-container ul{font-size:14px;-moz-padding-start:40px;-webkit-padding-start:40px;-khtml-padding-start:40px;-o-padding-start:40px;padding-start:40px;padding-left:30px}#intercom-container .intercom-admin-profile-text-container [dir=ltr] ol,#intercom-container .intercom-admin-profile-text-container [dir=ltr] ul{padding-left:30px}#intercom-container .intercom-admin-profile-text-container [dir=rtl] ol,#intercom-container .intercom-admin-profile-text-container [dir=rtl] ul{padding-right:30px}#intercom-container .intercom-admin-profile-text-container ul>li{list-style-type:disc}#intercom-container .intercom-admin-profile-text-container ol>li{list-style-type:decimal}#intercom-container .intercom-admin-profile-text-container li{display:list-item;line-height:20px;margin-bottom:10px;font-weight:400}#intercom-container .intercom-admin-profile-text-container em,#intercom-container .intercom-admin-profile-text-container i{font-style:italic}#intercom-container .intercom-admin-profile-text-container b,#intercom-container .intercom-admin-profile-text-container strong{font-weight:700;line-height:100%}#intercom-container .intercom-admin-profile-text-container pre{font-size:14px;padding:0 0 10px;white-space:pre-wrap}#intercom-container .intercom-admin-profile-text-container img{display:block;max-width:100%;margin:10px 0}#intercom-container .intercom-admin-profile-text-container p+br{display:none}#intercom-container .intercom-admin-profile-text-container a:active,#intercom-container .intercom-admin-profile-text-container a:hover,#intercom-container .intercom-admin-profile-text-container a:link,#intercom-container .intercom-admin-profile-text-container a:visited{text-decoration:underline}#intercom-container .intercom-admin-profile-text-container a:link,#intercom-container .intercom-admin-profile-text-container a:visited{color:#82add3}#intercom-container .intercom-admin-profile-text-container a:active,#intercom-container .intercom-admin-profile-text-container a:hover{color:#5a85ab}#intercom-container .intercom-admin-profile-text-container h2+.ic_button_in_content,#intercom-container .intercom-admin-profile-text-container h2+.ic_social_block,#intercom-container .intercom-admin-profile-text-container h2+blockquote,#intercom-container .intercom-admin-profile-text-container h2+ol,#intercom-container .intercom-admin-profile-text-container h2+p,#intercom-container .intercom-admin-profile-text-container h2+ul,#intercom-container .intercom-admin-profile-text-container h3+.ic_button_in_content,#intercom-container .intercom-admin-profile-text-container h3+.ic_social_block,#intercom-container .intercom-admin-profile-text-container h3+blockquote,#intercom-container .intercom-admin-profile-text-container h3+ol,#intercom-container .intercom-admin-profile-text-container h3+p,#intercom-container .intercom-admin-profile-text-container h3+ul,#intercom-container .intercom-admin-profile-text-container h4+.ic_button_in_content,#intercom-container .intercom-admin-profile-text-container h4+.ic_social_block,#intercom-container .intercom-admin-profile-text-container h4+blockquote,#intercom-container .intercom-admin-profile-text-container h4+ol,#intercom-container .intercom-admin-profile-text-container h4+p,#intercom-container .intercom-admin-profile-text-container h4+ul,#intercom-container .intercom-admin-profile-text-container h5+.ic_button_in_content,#intercom-container .intercom-admin-profile-text-container h5+.ic_social_block,#intercom-container .intercom-admin-profile-text-container h5+blockquote,#intercom-container .intercom-admin-profile-text-container h5+ol,#intercom-container .intercom-admin-profile-text-container h5+p,#intercom-container .intercom-admin-profile-text-container h5+ul,#intercom-container .intercom-admin-profile-text-container h6+.ic_button_in_content,#intercom-container .intercom-admin-profile-text-container h6+.ic_social_block,#intercom-container .intercom-admin-profile-text-container h6+blockquote,#intercom-container .intercom-admin-profile-text-container h6+ol,#intercom-container .intercom-admin-profile-text-container h6+p,#intercom-container .intercom-admin-profile-text-container h6+ul{margin-top:0}#intercom-container .intercom-admin-profile-text-container .intercom-h2b-facebook,#intercom-container .intercom-admin-profile-text-container .intercom-h2b-twitter{max-width:100%}#intercom-container .intercom-admin-profile-text-container iframe[src*="vimeo.com"],#intercom-container .intercom-admin-profile-text-container iframe[src*="wistia.net"],#intercom-container .intercom-admin-profile-text-container iframe[src*="youtube.com"]{width:100%;height:149px;margin:20px auto}#intercom-container .intercom-admin-profile-text{text-align:center;font-size:13px;color:#78909c;line-height:19px}#intercom-container .intercom-admin-profile-text a:link,#intercom-container .intercom-admin-profile-text a:visited{color:#78909c}</style><div id="intercom-launcher" class="intercom-launcher intercom-launcher-active intercom-launcher-with-message intercom-launcher-with-updated-avatar intercom-launcher-with-avatar intercom-launcher-with-badge intercom-launcher-with-preview" style="display: block;"><div class="intercom-launcher-button" style="background-image: url(&quot;https://static.intercomassets.com/avatars/78334/square_128/profile-1462411562-1462463933.jpg?1462463933&quot;);">
  <div class="intercom-launcher-initials"></div>
</div>
<div class="intercom-launcher-badge">1</div>
<div class="intercom-launcher-preview intercom-launcher-preview-multi-line">
  <div class="intercom-launcher-preview-body"><p>It's great to see you've been using Cloud9 for a while now, cyberhedz…</p></div>
  <div class="intercom-launcher-preview-caret"></div>
  <div class="intercom-launcher-preview-close"></div>
</div>
</div><div id="intercom-messenger" class="intercom-messenger intercom-messenger-inactive"></div></div><div class="notifications-bubble" style="display: none; position: absolute; z-index: 300000; width: 200px;">
                    <div class="noise_bg"></div>
                    <div class="close-notifier"></div>
                    <div class="notifications-content"> </div>
                </div></body><style></style></html>