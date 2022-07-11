; (function($) {
    jQuery.fn.extend({
        showTip: function(settings) {
            let myTimer = null
            $(this).each(function() {
                //初始化配置信息
                var options = jQuery.extend({
                    flagCss: "tip",
                    flagWidth: $(this).outerWidth(),
                    flagInfo: $(this).attr("title"),
                    isAnimate: false
                },
                    settings);
                if (!options.flagInfo) {
                    return;
                }

                $(this).removeAttr("title");
                $(this).mouseenter(function() {
                    //设置提示信息最小宽度为163
                    options.flagWidth = (parseInt(options.flagWidth) > 100) ? 100 : parseInt(options.flagWidth);
                    var oToolTip = null
                    if ($('#myTitle').length === 0) {
                        var oTip = $("<div id='myTitle' class='ui-slider-tooltip  ui-corner-all'></div>");
                        var oPointer = $("<div class='ui-tooltip-pointer-down'><div class='ui-tooltip-pointer-down-inner'></div></div>");
                        var oTipInfo = $("<div><center id='flagInfo'>" + options.flagInfo + "</center></div>").attr("class", options.flagCss).css("width", options.flagWidth + "px");
                        //合并提示信息
                        oToolTip = $(oTip).append(oTipInfo).append(oPointer);
                    } else {
                        oToolTip = null
                        var oTip = $("<div id='myTitle' class='ui-slider-tooltip  ui-corner-all'></div>");
                        var oPointer = $("<div class='ui-tooltip-pointer-down'><div class='ui-tooltip-pointer-down-inner'></div></div>");
                        var oTipInfo = $("<div><center id='flagInfo'>" + options.flagInfo + "</center></div>").attr("class", options.flagCss).css("width", options.flagWidth + "px");
                        //合并提示信息
                        oToolTip = $(oTip).append(oTipInfo).append(oPointer);
                    }

                    //添加淡入效果
                    if (options.isAnimate) {
                        $(oToolTip).fadeIn("slow");
                    }
                    $(this).after(oToolTip);

                    //计算提示信息的top、left和width
                    var position = $(this).position();
                    var oTipTop = eval(position.top - $(oTip).outerHeight() - 8);
                    var oTipLeft = position.left;
                    $(oToolTip).css("top", oTipTop + "px").css("left", oTipLeft + "px");

                    console.log(`*****<<<  111  47行 ~/test/testProject/pc-template/src/views/testPage/tooltip2.js  21:08:36`);
                    console.log(`22222***** $('#myTitle') ***** 48行 ~/test/testProject/pc-template/src/views/testPage/tooltip2.js  21:09:07`);
                    console.log($('#myTitle'));
                   

                    $(this).mouseleave(function() {
                        leave()
                    });

                    $('#myTitle').mouseenter(function(e) {
                        console.log(`*****<<<  title进入  50行 ~/test/testProject/pc-template/src/views/testPage/tooltip2.js  21:06:25`);
                        clearTimeout(myTimer)
                    })
                    $('#myTitle').mouseleave(function(e) {
                        console.log(`*****<<<  title离开  54行 ~/test/testProject/pc-template/src/views/testPage/tooltip2.js  21:08:02`);
                        e.preventDefault()
                        leave()
                    })
                });

            });



            function leave() {
                console.log(`*****<<<  进入  58行 ~/test/testProject/pc-template/src/views/testPage/tooltip2.js  21:04:22`);
                console.log(`%c $('#myTitle').length` + '', 'background:#000;color:#bada55', $('#myTitle').length);

                if ($('#myTitle').length === 0) {
                    return
                }

                myTimer = setTimeout(() => {
                    $('#myTitle').remove()
                }, 1000);
            }
            return this;
        }
    })
})(jQuery);