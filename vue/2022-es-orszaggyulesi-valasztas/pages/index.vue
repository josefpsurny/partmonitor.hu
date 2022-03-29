<template>
  <div class="">
    <Header />
    <div class="container page top">
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
    </div>
    <div class="footer">
      <Footer />
    </div>
    <Analytics />
  </div>
</template>

<script>
// import Givt from "~/components/Givt.vue"
// import Darujme from "~/components/Darujme.vue"
import Analytics from "~/components/Analytics.vue"
import Footer from "~/components/Footer.vue"
import Header from "~/components/Header.vue"

export default {
  head: function() {
    return {
      title: 'Voksmonitor 2022',
      meta: [
        {
          hid: 'index',
          name: 'Voksmonitor 2022',
          description: 'Voksmonitor 2022'
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
    Analytics,
    Footer,
    Header
  }
}
</script>

<style scoped>
  .page {
    /* size depends on sizes of header */
    min-height: calc(100vh - 40px - 18px);
    max-width: 666px;
  }
  .top {
    min-height: 100vh;
  }
</style>