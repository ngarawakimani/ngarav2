<template>
  <div class="container px-0 py-4">
    <Navbar/>
    <Hero/>
    <Services/>
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
      title: 'Demo of @nuxtjs/color-mode',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Demo of using @nuxtjs/color-mode for NuxtJS, supporting dark mode and custom colors' }
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
  p {
    padding: 20px 0;
    margin: 0;
  }
  .container {
    text-align: center;
    padding: 50px;
  }
  .note {
    transition: all .3s;
    display: inline-block;
    padding: 15px 15px;
    border-radius: 5px;
    background-color: var(--bg-secondary);
    color: var(--color-secondary);
  }
</style>
