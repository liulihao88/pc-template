
export function createVM(Vue) {
    if (typeof document === 'undefined') {
        console.error('[VUX] Alert plugin cannot be used in ssr.')
        return
    }
    const Alert = Vue.extend(AlertComponent)
    const $vm = new Alert({
        el: document.createElement('div')
    })
    document.body.appendChild($vm.$el)
    return $vm
}