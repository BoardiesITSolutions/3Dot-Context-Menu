# 3-dot Context Menu

Thanks for taking a look at our 3-dot context menu for web 
development. 

The 3-dot context menu allows a simple and lightweight
implementation for showing 3 vertical dots allowing the user
to click and show a menu. Below is a screenshot showing an example of what it looks like

![3dot-context-menu example](https://boardiesitsolutions.com/images/3dot-context-menu.png)

## Requirements
Jquery is required and most modern browsers should support
the library. We've tested on the latest versions of Google
Chrome, Internet Explorer, Microsoft Edge and Firefox. 

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
var varContextMenu = null;
$(document).ready(function(){
    varContextMenu = new ContextMenu("context-menu-items", function (menu_item, parent)
         {
             alert("Menu Item Clicked: " + menu_item.text() + "\nRecord ID: " + parent.attr("data-row-id"));
         });
});
```

## Customising 3-dot context menuu

You can also add a 3rd parameter to the ContextMenu call which is an
options array. At the moment this options array only has one available
option, but its done this way so its future proofed if there are new
customisation options to be added in the future. 

<<<<<<< HEAD
The options array has one option which is to define an open call back,
i.e. when the 3-dot menu is clicked, just before the context menu is
opened, you'll receive a callback first to allow you to modify the menu
such as disabling menu items (discussed later on). 

You can create the context menu with the options array as follows:

```
var varContextMenu = null;
$(document).ready(function(){
    var options = {
        openCallBack: function(contextMenu) {
            console.log("Opening context menu call back called");
        }
    };
    varContextMenu = new ContextMenu("context-menu-items", function (menu_item, parent)
         {
             alert("Menu Item Clicked: " + menu_item.text() + "\nRecord ID: " + parent.attr("data-row-id"));
         }, options);
});
```

In the `openCallback` function you'll get passed back to you a parameter.
The parameter is the context menu object that is linked to the 3-dot 
anchor point. Don't forget though, if multiple 3-dot menus are linked
to the same `context-menu-container` and you manipulate the menu items
in the callback, when opening the context menu from another 3-dot context
menu, if its the same id, the same manipulated items will be shown, but
can be amended again if required by using the `openCallback` function. 

## Disabling menu items
You can disable a menu item from being clickable dynamically. This 
can be done in two ways. You can either disable a menu item from within
the `openCallBack` method or by calling the disable method by 
the contextMenu object, in the example above this would be `varContextMenu`. 

The method for disabling a menu item is `disableMenuItem(param)`. The 
parameter of this method is the menu item that should be disabled. This 
can be a number (the position of the item within the menu (its 0 indexed)).
The parameter can also be a string, the string being the text of the menu
item. 

Below is how you would disable the menu item from the `openCallBack` 
method

```
var options = {
    openCallBack: function(contextMenu) {
        contextMenu.disableMenuItem(0); //Delete the first menu item
    }
}
```

There is also a function to re-enable the menu item which is 
`enableMenuItem(param)`. This works in exactly the same way as the 
disableMenuItem function, but this would likely only be used within
the `openCallBack()` method. The paramater can be again a number to 
indicate the menu item in what position to be re-enabled, or a string
which is the text value of the menu item to re-enabled. 

```
var options = {
    openCallBack: function(contextMenu) {
        contextMenu.hideMenuItem(0); //Delete the first menu item
    }
}
```

There is also a function to reshow the menu item which is `showMenuItem(param)`. This works in exactly the same way as the hideMenuItem function, but this would likely only be used witin the `openCallBak()` method. The parameter can again be a number to indicate the menu item in what position to be re-shown, or a string which is the text value of the menu item to be reshown. 

## Hide Menu Items
You can hide a menu item from being shown dynamically. This can be done in two ways. You can either a disable a menu item from within the `openCallBack` method, or by calling the hideMenuItem method by the contextMenu object, in the example above this would be `varContextMenu`. 

The method for hiding a menu item is `hideMenuItem(param)`. The parameter of this method is the menu item that should be disabled. This can be a number (the position of the item within the menu (its 0 indexed)). The parameter can also be a s tring, t he string being the text oof the menu item. 

Below is how you would hide the menu item from the open `openCallBack` method. 



## CSS Classes available for menu items
There are two CSS classes available that provide a different background
colour to the menu item. The two classes available are warning and danger. 
These could be used to provide a warning to the user that by that 
clicking the menu item could have an undesired affect. For example, 
say you have a menu item "Delete my Account" this item could have
the class "danger" which would show a red background on hover. 

The CSS is pretty straight forward for the menu so it should be
fairly straight forward to modify or add new classes for your own needs. 

##Reloading dynamic data where the context menu would be re-created
If you dynamically load data, such as in our example a table
make sure you call `destory()` on the contextMenuReturn object
before re-creating your view. If you don't do this, the click
handler for the menu might not fire, it might fire multiple
times depending on your browser.

# Reporting bugs/feature requests/getting help
If you want to report an issue, have a feature request
or just want to get some help, you can either use the issue
tracker within GitHub or our support portal at https://support.boardiesitsolutions.com.

We would love for the open source community to contribute to this project
and if you would like to, please check out our contributing guidelines
[here](CONTRIBUTE.md).  
 
