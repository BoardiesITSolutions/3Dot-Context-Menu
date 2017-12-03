# 3-dot Context Menu

Thanks for taking a look at our 3-dot context menu for web 
development. 

The 3-dot context menu allows a simple and lightweight
implementation for showing 3 vertical dots allowing the user
to click and show a menu. 

## Requirements
Jquery is required and most modern browsers should support
the library. We've tested on the latest versions of Google
Chrome, Internet Explorer, Microsoft Edge. The only browser
that doesn't work is the latest Firefox Quantum (we'll get
into that in a bit). 

## Implementing 3-dot Context Menu
Implementing the 3-dot context menu is as straight forward
as adding 1 javascript file and 1 css file with 1 line
of javascript code to implement the menu. 

The 3-dot menu can be added inside &lt;td&gt; tags within 
tables, within &lt;p&gt; tags and html heading tags such as
&lt;h1&gt;, &lt;h2&gt; etc. (up to &lt;h5&gt;). 

In the head tag of your web page add the following

```
<script src="/3dot-context-menu/context-menu.js"></script>
<link href="/3dot-context-menu.css" rel="stylesheet">
```

Add the 3-dot menu to a component within your web page. Below
we're going to do it in a table, but &lt;p&gt; tags and 
heading tags are supported. 

Check the example project included for examples on how
to implement with each tag. 

In a &lt;td&gt; tag add the class `context-menu` and a data
attribute called `date-container-id` with the id value of
the div containing your menu items. For example as below:

```
<td class="context-menu" data-container-id="my-context-menu-items"></td>
```

Then in your document ready function create a new instance
of `ContextMenu` and pass in two parameters. The first parameter
is the id of the div containing your menu items (same value as
in your `data-container-id`) and the second parameter is your
menu item click callback as follows:

```
$(document).ready(function(){
    var varContextMenu = new ContextMenu("context-menu-items", function (menu_item, parent)
         {
             alert("Menu Item Clicked: " + menu_item.text() + "\nRecord ID: " + parent.attr("data-row-id"));
         });
});
```

If you dynamically load data, such as in our example a table
make sure you call `destory()` on the contextMenuReturn object
before re-creating your view. If you don't do this, the click
handler for the menu might not fire, it might fire multiple
times depending on your browser.

# Known Issues
As far as we know there is only 1 known issue as mentioned
above with the latest Firebox browser. 

For some reason in the context-menu.js it fails stating that
`this.contextMenu` is null. At the moment we've not found
what is causing this specific issue as it works with other
browsers but as soon as we find an answer we'll do an update. 

Obviously though, if you know the issue, and fancy contributing
to this project then please feel free to do a pull request. 

# Contributing to the Project
We'd love it if the  open source community would contribute
to this project, fixing any issues, improving the code, adding
new features would all be very welcome. 

My javascript knowledge is somewhat limited so I'm sure
there could be improvements made in places which we would of 
course welcome. 

Please make sure that if you make any changes to the javascript
or CSS that the minified versions are also updated. 

The CSS can be minified by going to https://cssminifier.com/ 
and the javascript can be minified by going to https://jscompress.com/. 

# Reporting bugs/feature requests/getting help
If you want to report an issue, have a feature request
or just want to get some help, you can either use the issue
tracker within GitHub or our support portal at https://support.boardiesitsolutions.com. 
 