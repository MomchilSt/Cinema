import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VuetifyToast from '../../node_modules/vuetify-toast-snackbar'

Vue.use(Vuetify)
Vue.use(VuetifyToast, {
    x: 'right',
	y: 'bottom',
})

const opts = { 
    theme: { dark: true }
}

export default new Vuetify(opts)