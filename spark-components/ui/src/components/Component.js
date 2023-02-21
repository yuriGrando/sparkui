import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'spark-components',

  setup () {
    return () => h(QBadge, {
      class: 'spark-components',
      label: 'spark-components'
    })
  }
}
