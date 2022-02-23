<template>
  <div class="text-base-content">

    <h1>{{ msg }}dd</h1>

    <p>
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p>See <code>README.md</code> for more information.</p>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">
        Vite Docs
      </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>

    <button class="btn bg-neutral rounded" @click="count++">count is: {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>

    <transition-group
      appear
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <div v-for="i in count" :key="i" :data-index="i">
        <p>poop {{i}}</p>
      </div>
    </transition-group>

  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import gsap from 'gsap'

  const beforeEnter = (el: any) => {
    el.style.transform = 'transalteY(-60px)'
    el.style.opacity = 0
  }

  const enter = (el: any, done: any) => {
    gsap.to(el, {
      duration: 1,
      y: 0,
      opacity: 1,
      onComplete: done,
      delay: el.dataset.index * 0.05,
      ease: 'bounce.out'
    })

  }

  const afterEnter = () => {

  }

  defineProps<{ msg: string }>()

  const count = ref(5)
</script>


<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
