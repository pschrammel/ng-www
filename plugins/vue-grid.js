import Vue from 'vue'
import NoSSR from 'vue-no-ssr'

import VueGridLayout from 'vue-grid-layout'
import Header from '../components/Header'
import Text from '../components/Text'
import Image from '../components/Image'

Vue.component('grid-layout', VueGridLayout.GridLayout)
//Vue.component('responsive-grid-layout', VueGridLayout.ResponsiveGridLayout)
Vue.component('grid-item', VueGridLayout.GridItem)
Vue.component('gheader', Header)
Vue.component('gtext', Text)
Vue.component('gimage', Image)
Vue.component('no-ssr', NoSSR)
