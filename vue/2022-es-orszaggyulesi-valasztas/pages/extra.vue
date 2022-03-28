<template>
  <div class="page">
    <div class="container">
      <h4 class="p-2">
        Válassza ki azokat a kérdéseket, amelyek különösen fontosak az Ön számára :
      </h4>

      <div v-if="!zeroAnswers">
        <div class="d-grid p-2">
          <NuxtLink to="/results/" class="btn btn-secondary" @click.native="next" >>> Kihagyás >></NuxtLink>
        </div>
        <div class="list-group" v-for="question in questions" v-bind:key="question.id">
          <div v-if="answered[question.id]" class="list-group-item list-group-item-action m-1">
          <!-- <div class="list-group-item list-group-item-action m-1"> -->
            <label class="checkbox inline">
              <input type="checkbox" class="custom-control-input" v-model="weights[question.id]">
                {{ question.name }} <small>({{ answer(question.id) }})</small>
            </label>
          </div>
        </div>
      </div>

      <div v-if="zeroAnswers">
        <div class="alert alert-warning" role="alert">
          Nem válaszoltak kérdésekre:<br/>
          <NuxtLink to="/question/1/">Futtassa a választási kalkulátort az elejétől</NuxtLink>
        </div>
      </div>

      <div class="d-grid p-2">
        <NuxtLink to="/results/" class="btn btn-primary" @click.native="next" >>> Eredmények  >></NuxtLink>
      </div>
    </div>

    <Analytics />
  </div>
</template>

<script>
import Analytics from "~/components/Analytics.vue"

export default {
  async asyncData ({ $content }) {
    const questions = await $content('questions_classic').fetch()
    return { questions }
  },

  head: function() {
    return {
      title: 'Voksmonitor 2022 - fontos kérdések ',
      meta: [
        {
          hid: 'extra',
          name: 'Fontos kérdések ',
          description: 'Voksmonitor 2022 - fontos kérdések '
        }
      ]
    }
  },

  computed: {
    answered: function() {
      let $this = this
      let out = {}
      this.questions.forEach(question => {
        let a = $this.$store.getters.getAnswer(question.id)
        if (Math.abs(a) == 1) {
          out[question.id] = true
        } else {
          out[question.id] = false
        }
      })
      return out
    },
    weights: function() {
      return this.$store.getters.getWeights
    },
    zeroAnswers: function () {
      if (Object.keys(this.$store.getters.getAnswers) == 0) {
        return true
      } else {
        return false
      }
    }
  },

  methods: {
    answer: function(id) {
      let a = this.$store.getters.getAnswer(id)
      if (a == 1) {
        return 'Igen'
      }
      if (a == -1) {
        return 'Nem'
      }
      return ''
    },
    next: function () {
      let payload = false
      // fake selection
      // if (parseInt(this.radio) == 1) {
      //   this.answers.forEach(item => {
      //     if(parseInt(item.id) < 5000) {
      //       payload.push(item.id)
      //     }
      //   })
      // } else {
      //   this.answers.forEach(item => {
      //     payload.push(item.id)
      //   })
      // }
      if (parseInt(this.radio) == 2) {
        payload = true
      }
      this.$store.commit('storeComparableSwitch', payload)
      this.$store.commit('storeWeights', this.weights)
      this.$router.push({ path: '/results/' })
    },
  },
  components: {
    Analytics
  }
}
</script>

<style scoped>
  .page {
    /* size depends on sizes of header */
    min-height: calc(100vh - 40px - 18px);
  }
</style>
