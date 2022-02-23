<template>
  <div>
    <div style="height: 400px"/>
    <div
      class="boxA bg-green-100"
    >
      aaa
    </div>

    <div style="height: 400px"/>
    <div
      class="boxB bg-green-200"
    >
      bbb
    </div>

    <div style="height: 400px"/>
    <div
      class="boxC bg-green-300"
    >
      ccc
    </div>
    <div style="height: 1400px"/>

  </div>

</template>

<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import {onMounted } from 'vue';
  import gsap from 'gsap'
  import ScrollTrigger from 'gsap/ScrollTrigger'

  gsap.registerPlugin(ScrollTrigger)
  onMounted(() => {

    // gsap.to(".boxA", {
    //   scrollTrigger: ".boxA", // start the animation when ".box" enters the viewport (once)
    //   x: 500,
    // });

    gsap.to('.boxC',{
      scrollTrigger: {
        trigger: '.boxC',
        start: '10px 80%',
        end: '20px 20%',
        scrub: 1,
        markers: true,
        toggleActions: 'restart pause reverse pause'
      },
      rotation: 180,
      duration: 15
    })
  })





</script>