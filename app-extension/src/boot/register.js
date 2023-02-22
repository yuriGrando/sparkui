import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-my-spark'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
