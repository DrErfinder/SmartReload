# SmartReload
Automatically reload Websites during development. Using PHP + jQuery AJAX
## Description
This script checks if changes have been made to any files on the servers Webspache periondically.
If so, it triggers a reload of the Site (no cacheing, directly from the server).
That way, ererytime you make a change and save your file the site wil be reloadet.
## Requirements
* A Webserver with PHP.
* A website with jQuery included.
## Installation
1. Download "SmartReload.php" and "SmartReload.js" and plache them in your servers webspace root.
2. Include the following Code in every (sub-)pages you want SmartReload functionality:  
```html
<script src="/SmartReload.js"></script>
```
3. Make sure you have jQuery installed.
## Compatibility
Has been testet on Windwos
- On the Client-side with 
  - Google Chrome,
  - Mozilla Firefox and 
  - Microsoft Edge.
- On the Server-side with
  - Microsoft IIS
  - XAMPP
