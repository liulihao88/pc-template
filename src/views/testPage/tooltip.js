let myTimer = null
function _tooltipInit() {
    let $tooltipEl = $('[data-tip]')
    $tooltipEl.on('mousemove', function(e) {
        let tipText = e.target.dataset.tip
        if (!tipText) {
            return
        }
        let scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
        let top = $(e.target).offset().top - scrollTop
        let left = $(e.target).offset().left
        
        let hasTitle = $('body #myTitle').length !== 0
        var oPointer = $('<div style="   border-bottom-width: 0;border-left: 7px dashed transparent;border-right: 7px dashed transparent;border-top: 8px solid #333333;bottom: -8px;display: block;height: 0;left: 50%;margin-left: -7px;position: absolute;width: 0;"><div style="border-left: 6px dashed transparent; border-right: 6px dashed transparent;border-top: 7px solid #333333;left: -6px;top: -9px;position: absolute;"></div></div>');
        if (hasTitle) {
            $('body #myTitle').html(tipText)
            $('#myTitle').append(oPointer)
        } else {
            $('body').append('<div id="myTitle" style="transform-origin: center bottom; z-index: 2065; position:fixed; top: 300px; left:300px; background: #000; color: #fff; padding:4px; border-radius: 2px;" >' + tipText + '</div>')
            $('#myTitle').append(oPointer)
        }
        $('#myTitle').css({
            'left': (left + 'px'),
            'top': (top - 30 + 'px')
        }).show()

        $('#myTitle').mouseenter(function(e) {
            clearTimeout(myTimer)
        })
        $('#myTitle').mouseleave(function(e) {
            e.preventDefault()
            leave()
        })
    })

    $tooltipEl.on('mouseleave', function(e) {
        leave()
    })
}
function leave() {
    if ($('#myTitle').length === 0) {
        return
    }
    myTimer = setTimeout(() => {
        $('#myTitle').hide()
    }, 500);
}

_tooltipInit()
