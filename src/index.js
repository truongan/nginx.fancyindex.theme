  /// Theme the #list table
  document.getElementById("list").classList.add("table");
  document.getElementsByTagName("thead")[0].classList.add("thead-dark");
  document.getElementById("list").classList.add('table-hover');
  document.getElementById("list").classList.add('table-striped');
  document.getElementById("list").classList.add('table-bordered');

  // Create the breadcrumbs
  var loc = window.location.pathname;
  var segments = loc.split('/');
  var breadcrumbs = '';
  var currentPath = '/';
  for (var i=0; i<segments.length; i++) {
    breadcrumbs += '<li class="breadcrumb-item"><a href="';
      if (segments[i] !== '') {
        currentPath += segments[i] + '/';
        breadcrumbs += currentPath + '">' + window.unescape(segments[i]) ;
      } else if (segments.length -1 !== i) {
        currentPath += '';
        breadcrumbs += currentPath + '">Root' ;
      }
    breadcrumbs += '<\/a></li>';
  }
  document.getElementById('breadcrumbs').innerHTML = breadcrumbs;

  // Theme the icon

var mime = require('mime-to-extensions');

a = [];

link_ele = document.querySelectorAll('#list a');
for (var i = 0; i < link_ele.length; i++) {
    href = link_ele[i].href.match(/\.([^\/\.]+$)/g);
    if (href == null) continue;
    href = href[0];
    if (a.indexOf(href) == -1) a.push(href);
}
console.log(a);
console.log(mime.lookup('.abc'));
a.forEach(e => {
    mime_type = mime.lookup(e);
    if (mime_type == false) mime_type = "unknown";
    mime_type = mime_type.replace('\/', '-')
    var rule = '#list a[href$="' +
        e +
        '"]:before { background-image: url("../mimetypes/' +
        mime_type +
        '.svg") ;}';
    console.log(rule);
    var sheets = window.document.styleSheets[1];
    var x = sheets.insertRule(rule, sheets.cssRules.length);
    console.log(x);
});

require('./history.js');