import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'
import App from './App.vue'
import router from './router'
import pinia from './store'

// 针对ElMessage和ElLoading 等组件引入样式
import 'element-plus/theme-chalk/el-message.css'

// 1. 全局注册elemment-plus：方便和简洁
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// 2. 按需引入：用到哪一个组件再引入，现在已经不用了
// import { ElButton } from 'element-plus'
// app.component(ELButton.name, ElButton)

// 3. 图标的全局注册
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import useLoginStore from './store/login/login'

const app = createApp(App)
app.use(pinia)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
const loginStore = useLoginStore()
loginStore.loadLocalCacheAction()

app.use(router)
// app.use(ElementPlus)
app.mount('#app')
