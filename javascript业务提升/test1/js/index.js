(function(doc, tools) {
    const docObj = {
        'result': doc.getElementsByClassName('result')[0],
        'fInput': doc.getElementsByTagName('input')[0],
        'sInput': doc.getElementsByTagName('input')[1],
        'button_group': doc.getElementsByClassName('button-group')[0]
    }
    let {result, fInput, sInput, button_group} = docObj

    function init() {
        bindEvent()
    }

    function bindEvent() {
        button_group.addEventListener('click', onBtnClick, false)
    }

    function onBtnClick(ev) {
        const tar = tools.getTarget(ev)
        const tagName = tar.tagName.toLowerCase()

        if(tagName === 'button') {
            let method = tar.getAttribute('data-method')
            let fVal = tools.digitalize(fInput.value)
            let sVal = tools.digitalize(sInput.value)
            
            renderResult(compute[method](fVal, sVal))
        }
    }

    function renderResult(fn) {
        result.innerText = fn
    }

    init()
})(document, tools);