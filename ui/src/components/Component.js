import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'my-spark',

  setup () {
    return () => h(QBadge, {
      class: 'my-spark',
      label: 'my-spark'
    })
  }
}
