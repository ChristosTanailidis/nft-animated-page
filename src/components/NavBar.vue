<template>
  <div class="text-base-content  p-2">
    <div class="flex justify-between  mt-5 items-center">
      <div class="flex justify-arround items-center">
        <router-link to="/">
          <div class="ml-10 flex items-center">
            <span v-if="userPreferences().theme === 'dark'">
              <lord-icon
                  v-pre
                  src="https://cdn.lordicon.com/vaeagfzc.json"
                  trigger="loop-on-hover"
                  stroke="100"
                  colors="primary:#ccd0e3,secondary:#d8bd67"
                  style="width:50px;height:50px">
              </lord-icon>
            </span>
            <span v-else>
              <lord-icon
                v-pre
                src="https://cdn.lordicon.com/vaeagfzc.json"
                trigger="loop-on-hover"
                stroke="100"
                colors="primary:#1f2937,secondary:#d8bd67"
                style="width:50px;height:50px">
            </lord-icon>
            </span>
            <span class="ml-1 font-bold"> My Thing. </span>
          </div>
        </router-link>

        <div class="flex justify-center ml-10">
          <router-link exact to="/"><button class="hover:bg-neutral-focus hover:text-neutral-content font-bold py-1 px-2 m-1 rounded">Home</button></router-link>
          <router-link to="/home"><button class="hover:bg-neutral-focus hover:text-neutral-content font-bold py-1 px-2 m-1 rounded">Index</button></router-link>
          <router-link exact to="/error"><button class="hover:bg-neutral-focus hover:text-neutral-content font-bold py-1 px-2 m-1 rounded">Wrong Page</button></router-link>
        </div>
      </div>

      <!-- Dark mode switch -->
      <div class="flex justify-center items-center cursor-pointer">
        <span>
          <svg class="h-6 w-6 mr-1 text-base-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </span>
        <input @click="userPreferences().switch()" :checked="userPreferences().theme === 'dark'" type="checkbox" class="toggle toggle-primary">
        <span>
          <svg class="h-6 w-6 ml-1 text-base-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { userPreferences } from '../store/userPreferences'
</script>