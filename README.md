# SmartReload
Automatically reload Websites during development. Using PHP + jQuery AJAX + Cookies.
 
## Description
This script checks if changes have been made to any files on the servers Webspache periondically.
If so, it triggers a reload of the Site (no cacheing, directly from the server).
That way, ererytime you make a change and save your file the site wil be reloadet.
It also scrols automaticly to the last possition.
 
## Requirements
* A Webserver with PHP (testet with v7.3.1).
* A website with
  * [jQuery](https://jquery.com/download/) included (testet with v3.3.1).
  * [js-cookie](https://github.com/js-cookie/js-cookie) included (testet with v2.2.0).

## Installation
1. Download "SmartReload.php" and "SmartReload.js" and plache them in your servers webspace root.
2. Include the following Code in every (sub-)pages where you want SmartReload functionality:  
```html
<script src="/SmartReload.js"></script>
```
3. Make sure you have jQuery + js-cookie installed.
 
## Compatibility
Has been testet on Windwos
- On the Client-side with 
  - Google Chrome,
  - Mozilla Firefox and 
  - Microsoft Edge.
- On the Server-side with
  - Microsoft IIS and
  - Apache (XAMPP)
 
However it should work with derivats of the Browsers above and with Apache on other Systems.
 
## Help
If your having problems with the Software here are some tips:
- Make sure you have the full jQuery (NO "slim"-version, the "min"-version has no effect on functionality).
- You visit your your Website via "localhost" or "example.com" and not via "file:///index.html".
- PHP is working.

Still not working? Feel free to open a issue.

## License
I'm using the 
[WTFPL – Do What the Fuck You Want to Public License](http://www.wtfpl.net/)

![WTFPL Badge](/wtfpl-badge.png)
