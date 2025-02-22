export { default as Analytics } from '../../components/Analytics.vue'
export { default as Darujme } from '../../components/Darujme.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Givt } from '../../components/Givt.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Menu } from '../../components/Menu.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as ResultsTable } from '../../components/ResultsTable.vue'
export { default as StoredCalcs } from '../../components/StoredCalcs.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
