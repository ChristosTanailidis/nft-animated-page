<template>
  <div class=" text-base-content hover:shadow-none w-52 h-60 relative flex justify-center flex-col mx-auto shadow-2xl z-0 bg-base-300">
    <img class="h-20 w-full opacity-80 absolute top-0 object-cover z-20" style="z-index:-1" :src="creator.backgroundImage" alt="" />
    <div class="profile w-full flex justify-center m-2 text-white">
      <img class="w-28 h-28  mask mask-circle object-cover bg-white" :src="creator.image" alt=""/>
    </div>
    <div class="title flex flex-col justify-center pl-8 pr-8">
      <div class="name break-words font-bold">{{creator.name}} {{creator.surname}}</div>
      <div class="add font-thin font-solid text-sm italic dark">${{creator.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}} </div>
      <button
        class="btn btn-sm mt-5 bg-gradient-to-r from-primary via-gray-200 to-primary text-primary-content text-sm"
      >
        Follow
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import Creator from '../models/Creator';

const props = defineProps({
  creator: {
    type: Object as PropType<Creator>,
    required: true
  },
  selected: Boolean
})
</script>
