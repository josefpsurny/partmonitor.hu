<template>
  <div class="container page">
    <h2 class="pt-4">
      Voksmonitor 2022
    </h2>
    <div class="card border-info mb-3 p-4">
      A Voksmonitor 2022 segítségével összehasonlíthatod saját véleményedet az országgyűlési választásokon induló pártok álláspontjával.    </div>
    <hr/>
    <div class="d-grid gap-2">
      <NuxtLink to="/question/1/" class="btn btn-success btn-lg">START</NuxtLink>
    </div>
    <hr/>
    <!-- <h3>Uložené vyplněné kalkulačky</h3>
    <StoredCalcs /> -->
    <!-- <Givt /> -->
    <!-- <Darujme /> -->
    <Analytics />
  </div>
</template>

<script>
// import Givt from "~/components/Givt.vue"
// import Darujme from "~/components/Darujme.vue"
import Analytics from "~/components/Analytics.vue"

export default {
  head: function() {
    return {
      title: 'Volební kalkulačka 2021',
      meta: [
        {
          hid: 'index',
          name: 'Volební kalkulačka 2021',
          description: 'Volební kalkulačka 2021'
        }
      ]
    }
  },

  mounted: function () {
    // this.$store.dispatch('beep')
  },

  components: {
    // Givt,
    // Darujme, 
    Analytics
  }
}
</script>

<style scoped>
  .page {
    /* size depends on sizes of header */
    min-height: calc(100vh - 40px - 18px);
    max-width: 666px;
  }
</style>