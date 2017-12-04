/**
 * @author Chris Board - Boardies IT Solutons
 * @description Creates a 3-dot context menu on tables, <p> tags and heading tags (e.g. h1, h2 etc).
 * @copyright (c) Boardies IT Solutions - December 2017
 */

$(document).mouseup(function (e) {
    var div = $(".context-menu-container");
    if (!div.is(e.target) && div.has(e.target).length === 0)
    {
        div.hide();
    }
});

function ContextMenu(contextContainerID, menuItemClickCallback)
{
    this.contextMenuContainer = $('.context-menu[data-container-id="'+contextContainerID+'"]');

    this.contextMenuContainer.click(function(e){

        var self = this;
        var parent = $(this);

        //var menuPos = $(this).offset();

        //Show hide the context menu
        var contextMenuID = "#" + $(this).attr("data-container-id");
        var contextMenu = $(contextMenuID);


        //Use e.clientX get the cursor position and subtract the context menu width so that it appears on the left of
        //the cursor, minus another 15 take the extra padding into account so the menu doesn't appear
        //directly under the cursor
        var menuPos = {left: e.clientX - contextMenu.width() - 15, top: contextMenu.offset().top + e.clientY};

        if (!isElementInViewport(contextMenu)) {
            alert("View not visible");
            var rightEdgePos = contextMenu.width() + contextMenu.offset().left;
            var screenWidth = $(window).width();


            var leftShiftOver = menuPos.left - (screenWidth - rightEdgePos);
            var showPos = menuPos.left - leftShiftOver - 10; //Subtract an extra 10 so it has some margin space

            contextMenu.css({top: menuPos.top, left: showPos, position: 'absolute'});
        }
        else
        {
            contextMenu.css({top: menuPos.top, left: menuPos.left, position: 'absolute'});
        }

        contextMenu.find("ul > li").click(function(){
            menuItemClickCallback($(this), parent);
            contextMenu.hide();

            //Remove the click event otherwise a new one keep getting created, so an additional call event will be called
            //each time the menu opens and closes
            contextMenu.find("ul > li").unbind("click");
        });
        contextMenu.show();

    });

    this.destroy = function() {
        this.contextMenuContainer.unbind("click");
    };
}

function isElementInViewport (el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}