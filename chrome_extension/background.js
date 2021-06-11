var oDefaultIni = {
    //win、tab、popup
	"openAppMode": 'win'
};


//设置浏览器右边扩展图标的角标文字和脚本背景
chrome.browserAction.setBadgeText({text: 'F'});
chrome.browserAction.setBadgeBackgroundColor({color: '#4688F1'});

// if(!localStorage['appInit']) {
// 	localStorage['appInit'] = JSON.stringify(oDefaultIni);
// }

// var config = JSON.parse(localStorage['appInit'] || {});

// 设置项
var config = oDefaultIni;
chrome.runtime.onInstalled.addListener(function() {
    //初始化完成
    }
);


chrome.browserAction.onClicked.addListener(function( tab ) {
	openApp();
});

function openApp() {
	var appUrl = chrome.extension.getURL("flutter_app.html");
    
    if(config.openAppMode === 'tab') {
        //打开新的标签
        chrome.tabs.create({"url":appUrl, "selected":true});
    }else if(config.openAppMode === 'win') {
       //type: enum of "normal", "popup", "panel"
      
        const winWidth=375;
        const winHeight=667;

        var left=parseInt((screen.width/2-winWidth/2));
        
        chrome.windows.create({
        
        url: appUrl,
        type: "popup",
        width: winWidth,
        height: winHeight,
        left:left,
        });

    }else {
        //在图标下面弹窗。  点击窗口外的地方后，窗口会关闭。
        chrome.browserAction.setPopup({
            popup: "index.html"
        });  
    } 
}