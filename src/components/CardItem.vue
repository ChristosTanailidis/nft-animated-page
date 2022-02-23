<template>
  <div class="text-base-content">
    <div :style="selected ? 'width: 280px' : '-webkit-filter: blur(2px); filter: blur(2px);'" >
      <div class="p-2 rounded-lg bg-neutral bg-opacity-80" :class="selected ? '' : 'transform ease-in-out duration-500 hover:scale-110'">
        <div :class="`flex z-0 max-w-sm w-full shadow-md rounded-lg overflow-hidden mx-auto transform ease-in-out duration-500`">
          <div v-if="!selected" class="z-20 absolute top-1/2 left-1/4 transform -translate-x-10 -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><rect fill="none" height="24" width="24"/><g><polygon points="17.77,3.77 16,2 6,12 16,22 17.77,20.23 9.54,12"/></g></svg>
          </div>
          <div class="overflow-hidden w-full rounded relative transform transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item movie-card">
            <div class="absolute inset-0 z-10 transition translate-y-2 duration-300 ease-in-out bg-gradient-to-t bg-opacity-30 from-black to-transparent" />
            <div class="relative cursor-pointer group z-10 pt-3 space-y-6">
              <div class="flex-col w-full">
                <div style="height: 250px" />
                <div class="space-y-2 detail_info">
                  <div class="absolute pt-2 z-10 absolute botom-0 left-8">
                    <p class="text-xs mb-1">
                      Current Bid:
                    </p>
                    <p class="text-xs text-center">
                      {{item?.bid}} {{item?.bidCurrency}}
                    </p>
                  </div>
                  <div class="absolute pl-3 z-10 absolute botom-0 right-8">
                    <p class="text-xs mb-1">
                      Remaining Time:
                    </p>
                    <p class="text-xs text-center">
                      {{timer}}
                    </p>
                  </div>
                  <div
                    style="width: 250px; height: 50px; -webkit-backdrop-filter: blur(3px);  backdrop-filter: blur(3px);"
                    class="z-10 m-1.5 overview rounded bg-opacity-50 bg-base-100"
                  />

                  <div
                    class="absolute w-full pt-2 z-10 absolute flex justify-around items-center botom-0"
                  >
                    <div>
                      <div
                        :class="item ? item.title.length > 10 ? 'mb-0 text-md text-left' : 'mb-0 text-2xl text-left' : null"
                        class="font-bold text-left">
                        {{item?.title}}
                      </div>
                      <div :class="item ? item.user.length > 12 ? 'mb-0 text-sm text-left' : 'mb-0 text-lg text-left' : null">
                        {{item?.user}}
                      </div>
                    </div>
                    <button class="btn btn-sm bg-gradient-to-r from-primary via-gray-200 to-primary text-primary-content border-none ">
                      Place a bid
                    </button>
                  </div>
                  <div
                    style="width: 100%; height: 70px; -webkit-backdrop-filter: blur(3px);  backdrop-filter: blur(3px);"
                    class="flex flex-col z-10 bg-opacity-50 bg-base-300"
                  />
                </div>
              </div>
            </div>
            <img
              class="absolute inset-0 h-full w-full object-cover"
              :src="item?.img"
              :style="selected ? 'filter: grayscale(0)' : 'filter: grayscale(0.3)'"
            >
            <div class="poster__footer flex flex-row relative space-x-4 z-10">
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref, computed } from 'vue'
import NFT from '../models/NFT'

const props = defineProps({
  item: {
    type: Object as PropType<NFT>,
    required: true
  },
  selected: Boolean
})

const item = ref(props.item)

const flag = ref(false)

setInterval(() => {
  flag.value = !flag.value
}, 500)

// Update the count down every 1 second
const timer = computed(() => {
    // Get today's date and time
    const now = new Date().getTime();

    flag.value

    // Find the distance between now and the count down date
    const distance = new Date(item.value?.dateOfEnd.toString()).getTime() - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return `${days}d ${hours > 9 ? hours : `0${hours}`}:${minutes > 9 ? minutes : `0${minutes}`}:${seconds > 9 ? seconds : `0${seconds}`}`
})
</script>
