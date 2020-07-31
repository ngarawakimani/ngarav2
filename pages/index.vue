<template>
  <div class="container px-0 py-4" id="home">
    <Navbar/>
    <Hero/>
    <Services/>
    <!-- <Technologies/> -->
    <ContactUs/>
    <VueElevator :word="word" :duration="duration" :mainAudio="mainAudio" :endAudio="endAudio"></VueElevator>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Hero from '@/components/Hero'
  import Services from '@/components/Services'
  import Technologies from '@/components/Technologies'
  import { VueElevator } from 'vue-elevator'
  import ContactUs from '@/components/ContactUs'

  export default {
    components: {
      Navbar,
      VueElevator
    },
    head: {
      title: 'Kenyan Craftsmen of Web and Mobile Apps.',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Kenyan Craftsmen of Web and Mobile Apps' }
      ]
    },
    data () {
      return {
        word: "Go to Top",
        duration: 4000,
        mainAudio: "http://tholman.com/elevator.js/music/elevator.mp3",
        endAudio: "http://tholman.com/elevator.js/music/ding.mp3",
      }
    }
  }
</script>

<style scoped>
</style>
