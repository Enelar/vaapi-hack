# vaapi-hack

a chrome extension to stream yt videos in smplayer [with vaapi-enabled mpv backend] to avoid sluggish sw-decoded VP9 and overheating cpu on linux

##### Tested on Ubuntu 16.04 with Intel i965 Kabylake / libva 1.7.0



**server setup:**

	
> npm install -g forever

> cd *vaapi-hack*  &&  npm install

> forever start app.js

     
 
 **chrome extension:**
	
   enable `Developer mode` in   `chrome://extensions`
  
   click  `Load unpacked extension`  and navigate to `chrome-extension/app/dist`
   


