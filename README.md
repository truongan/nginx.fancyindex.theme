NGINX FancyIndex Theme
===

A prettier theme for nginx' fancyindex module. Further details about this excellent
module can be found at the dev's [github page](https://github.com/truongan/nginx.fancyindex.theme).

####NOTE:
NGX-FANCYINDEX truncates the file name to 50 characters subtracts 3 and then
appends a "..>" to the truncated name. This can be fixed by recompiling
NGX-FANCYINDEX after changing line 55 of "ngx_http_fancyindex_module.c":

From:

    #define NGX_HTTP_FANCYINDEX_NAME_LEN 50

To:

    #define NGX_HTTP_FANCYINDEX_NAME_LEN 500 (or some other number greater than 50)

#####Usage:
 - Include the contents of 'fancyindex.conf' in your location directive of your nginx conf.
 - copy the remaining items in your web root under 'theme' directory (or any name you choose, just record it for later reference).
  - header.html
  - footer.html
  - css\main.css
  - dist\main.js
  - mimetypes
 - Restart your nginx server.

#####Added/Modified:
 - Mime type icons from [madmaxms](https://github.com/madmaxms/iconpack-obsidian)
 - Slightly better handling of mobile CSS click areas.
 - Added HTML5 History for quicker page transitions.
  - This can be disabled by commenting out the script tag in footer.html

#####Addendums:
 - If you want your 'Parent Directory/' listing back in your file listings:

