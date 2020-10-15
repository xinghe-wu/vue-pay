import keyboard from './pay'
var zfcPassword = {
    install(Vue, options) {
        Vue.component('vue-pay', keyboard)
    }
}

export default zfcPassword