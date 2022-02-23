<template>
  <transition @before-enter="beforeEnter" @enter="enter">
    <div :data-theme="userPreferences().theme">
      <div
        :class="`bg-background-${userPreferences().theme}-faded bg-top font-sans-serif min-h-100`"
        style="width: 100vw;"
      >
        <NavBar />

        <router-view v-slot="{ Component }">
          <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @before-leave="beforeLeave"
            @leave="leave"
          >
            <component :is="Component"/>
          </transition>
        </router-view>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
  import NavBar from './components/NavBar.vue';
  import { userPreferences } from './store/userPreferences'
  import gsap from 'gsap'

  const beforeEnter = (el: any) => {
    gsap.from(el, {
      opacity: 0,
      translateY: 100,
      delay: 0.5
    })
  }

  const enter = (el: any, done: any) => {
    gsap.to(el, {
      opacity: 1,
      translateY: 0,
      duration: 1,
      delay: 0.5
    })
  }

  const beforeLeave = (el: any) => {
    gsap.from(el, {
      y: 0,
      opacity: 1,
      z: 0,
      ease: 'power.in',
      delay: 0.5
    })
  }

  const leave = (el: any, done: any) => {
    gsap.to(el, {
      duration: 0.5,
      y: -100,
      z: 0,
      opacity: 0,
      onComplete: done,
    })
  }

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.noise {
  width: 400px;
  height: 100px;
  background: linear-gradient(23deg, rgba(216,189,103,0.8) 0%, rgba(220,220,220,0.8) 55%, rgba(216,189,103,0.8) 100%), url(https://grainy-gradients.vercel.app/noise.svg);
}

.noiseDense {
  width: 400px;
  height: 100px;
  background: linear-gradient(23deg, rgba(216,189,103,1) 0%, rgba(220,220,220,1) 55%, rgba(216,189,103,1) 100%), url(https://grainy-gradients.vercel.app/noise.svg);
}


/* route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
