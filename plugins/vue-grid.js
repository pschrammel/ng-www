import Vue from 'vue'
import VueGridLayout from 'vue-grid-layout'
import NoSSR from 'vue-no-ssr'

import Header from '../components/Header'
import Text from '../components/Text'

Vue.component('grid-layout', VueGridLayout.GridLayout)
//not working Vue.component('responsive-grid-layout', VueGridLayout.ResponsiveGridLayout)
Vue.component('grid-item', VueGridLayout.GridItem)
Vue.component('gheader', Header)
Vue.component('gtext', Text)
Vue.component('no-ssr', NoSSR)
