/**
 * @author Beatacao
 */
import eleui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import BCheckbox from '../packages/base/checkbox/index'
import BDatepicker from '../packages/base/datepicker/index'
import BRadio from '../packages/base/radio/index'
import BSelect from '../packages/base/select/index'
import BTag from '../packages/base/tag/index'
import BTip from '../packages/base/tip/index'
import BInput from '../packages/base/input/index'
import BTextarea from '../packages/base/textarea/index'

// import MetaInfo from '../packages/meta-info/index'
// import BLoadingBar from '../packages/loading-bar/index'

const components = [
  BInput,
  BTextarea,
  BCheckbox,
  BDatepicker,
  BRadio,
  BSelect,
  BTag,
  BTip
]

const install = function (Vue) {
  if (install.installed) return
  Vue.use(eleui)
  components.map(component => Vue.component(component.name, component))
//   MetaInfo.install(Vue)
//   Vue.prototype.$loading = BLoadingBar
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  BInput,
  BTextarea,
  BCheckbox,
  BDatepicker,
  BRadio,
  BSelect,
  BTag,
  BTip
//   MetaInfo,
//   BLoadingBar
}