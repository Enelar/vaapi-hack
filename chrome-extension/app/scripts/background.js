'use strict';


const dispatch = function(tab){
  const socket = io.connect('http://127.0.0.1:10002');
  socket.on('connect', ()=> {
    console.log('connected to backend!');
  });
  socket.emit('join', tab.url);
  socket.on('messages', msg =>{
    console.log(msg);
  });
};

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('Installed:', details.previousVersion);
});

chrome.pageAction.onClicked.addListener(dispatch);

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  tab.url.slice(0,32) == 'https://www.youtube.com/watch?v=' ? chrome.pageAction.show(tabId) : {};
});


// chrome.pageAction.setIcon(path, function(){})
