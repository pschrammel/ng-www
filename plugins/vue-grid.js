import Vue from 'vue'
import VueGridLayout from 'vue-grid-layout'
import NoSSR from 'vue-no-ssr'

Vue.component('grid-layout', VueGridLayout.GridLayout)
//not working Vue.component('responsive-grid-layout', VueGridLayout.ResponsiveGridLayout)
Vue.component('grid-item', VueGridLayout.GridItem)

Vue.component('no-ssr', NoSSR)
