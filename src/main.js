import { createApp } from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

import kLeagueStore from './stores/kLeague.store.js'

createApp(App)
    .use(Vuex)
    .use(kLeagueStore)
    .mount('#app');
