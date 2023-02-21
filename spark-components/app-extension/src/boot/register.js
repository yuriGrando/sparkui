import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-spark-components'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
