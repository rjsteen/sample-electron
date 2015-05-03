var remote = require('remote');
var Menu = remote.require('menu');
var MenuItem = remote.require('menu-item');

var menu = new Menu();
var shell = require('shell');
menu.append(new MenuItem({ label: 'MenuItem1', click: function() { 
 shell.openExternal('https://github.com');} }));
menu.append(new MenuItem({ type: 'separator' }));
menu.append(new MenuItem({ label: 'MenuItem2', click: function() { alert('watman'); } }));

window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  menu.popup(remote.getCurrentWindow());
}, false);
