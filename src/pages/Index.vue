<template>
  <div>
    <!-- first panel -->
    <div class="firstPanel h-screen relative h-screen">
      <div
        style="-webkit-backdrop-filter: blur(3px); backdrop-filter: blur(3px);"
        class="absolute noise right-0 top-0 z-0 w-1/2 h-3/4"
      />
      <div class="flex xl:flex-row flex-col">
        <div
          class="xl:pl-32 pl-5 pr-5 xl:text-left text-center text-left text-base-content z-10 text-4xl xl:text-7xl font-bold w-full xl:w-1/2 w-9/12"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <div class="text-sm text-base-content mt-10 font-light xl:block hidden">
            Quisque diam ipsum, blandit sed pulvinar vitae, consectetur ut sapien. Cras hendrerit mi consectetur mollis tincidunt. Cras orci augue, pharetra sit amet elementum non, egestas nec risus.
          </div>
          <div>
            <button
              class="btn bg-gradient-to-r from-primary via-gray-200 to-primary text-primary-content text-sm"
            >
              Discover
            </button>
            <button
              class="btn ml-2 btn-ghost text-sm"
            >
              Create NFT
              <svg class="fill-current text-base-content" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg>
            </button>
          </div>
        </div>

      </div>
      <div class="text-neutral opacity-100 min-h-screen ">
        <transition
          @before-enter="beforeEnterSelectedCard"
          @enter="enterSelectedCard"
          @before-leave="beforeLeaveSelectedCard"
          @leave="leaveSelectedCard"
        >
          <div :key="carouselIndex" class="ml-2 z-30 selectedCard transform scale-130 cursor-pointer transform -translate-x-24 p-2 absolute top-48 right-48"> <CardItem :item="items[carouselIndex]" :selected="true" /> </div>
        </transition>

        <transition
          @before-enter="beforeEnterNextCard"
          @enter="enterNextCard"
          @before-leave="beforeLeaveNextCard"
        >
          <div :key="nextCarouselIndex" @click="incCarousel()" class="ml-2 z-30 nextCard cursor-pointer p-2 ml-5 absolute top-48 -right-36"> <CardItem :item="items[nextCarouselIndex]" :selected="false" /> </div>
        </transition>
      </div>

      <div
      class="text-base-primary-content flex justify-around bg-gradient-to-b from-base-200 to-base-100 "
      style="height: 160px; width: 100%; position: absolute; left: 0px; top: 700px;"
    >
      <div class="flex items-center">
        <div
          style="height: 80px; width: 80px"
          class="rounded-full flex justify-center items-center noiseDense"
        >
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#000000">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
          </svg>
        </div>
        <div
          class="ml-2 text-base-content text-xl lg:block hidden"
          style="max-width: 10vw"
        >
          Morbi eleifend velit
        </div>
      </div>

      <div class="flex items-center">
        <div
          style="height: 80px; width: 80px"
          class="rounded-full flex justify-center items-center noiseDense"
        >
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#000000">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
          </svg>
        </div>
        <div
          class="ml-2 text-base-content text-xl lg:block hidden"
          style="max-width: 10vw"
        >
          Suspendisse dolor justo, accumsan
        </div>
      </div>

      <div class="flex items-center">
        <div
          style="height: 80px; width: 80px"
          class="rounded-full flex justify-center items-center noiseDense"
        >
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" >
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z"/>
          </svg>
        </div>
        <div
          class="ml-2 text-base-content text-xl lg:block hidden"
          style="max-width: 10vw"
        >
          Curabitur sollicitudin nulla est
        </div>
      </div>
    </div>
    </div>

    <!-- second panel -->
    <div
      class="bg-base-300 bg-opacity-50 lg:pb-28 pb-0"
    >
      <div class="sencondPanel justify-center items-center h-full
        flex flex-col
        lg:flex-row
        ">
        <div class="relative lg:w-1/2 w-full h-96 mb-10">
          <div
            class="
              absolute top-0 right-1/3
              card1 z-10 ml-2 transform cursor-pointer transform p-2"
          >
            <CardItem
              class="
                transform scale-50
                lg:transform lg:scale-75"
              :item="items[0]"
              :selected="true" />
          </div>
          <div
            class="
              absolute top-0 right-1/3
              card2 z-30  ml-2 transform cursor-pointer transform  p-2"
          >
            <CardItem
              class="
                transform scale-50
                lg:transform lg:scale-75"
              :item="items[1]"
              :selected="true" />
          </div>
          <div
            class="
              absolute top-0 right-1/3
              card3 z-20 ml-2 transform cursor-pointer transform p-2"
          >
            <CardItem
              class="
                transform scale-50
                lg:transform lg:scale-75"
              :item="items[2]"
              :selected="true" />
          </div>
          <div
            class="bg-white rounded-full bg-opacity-0 z-0 absolute top-52 right-2/4"
            :style="`
              width: 1px;
              height: 1px;
              box-shadow: 0 0 350px 150px ${userPreferences().theme === 'dark' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)'};`"
          />
        </div>
        <div class="relative h-96 mb-10 w-full lg:w-1/2 text-center lg:text-left ">
          <div class="absolute left-5 top-0 ">
            <div
              class="m-5 text-primary bg-primary-content rounded text-center font-bold"
            >
              Bring to the table win-win survival strategies
            </div>

            <div
              class="m-5 text-6xl text-base-content"
            >
              Podcasting operational change
            </div>

            <div
              class="m-5 text-lg text-base-content"
            >
              Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
            </div>

            <button
              class="btn bg-gradient-to-r from-primary via-gray-200 to-primary text-primary-content text-sm"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- third panel -->
    <div
      class=" w-screen bg-base-300 bg-opacity-50 pb-10"
    >
      <div class="thirdPanel relative">
        <div
          class="
            lg:flex lg:flex-row lg:justify-between
            flex flex-col justify-center
            items-center text-base-content mb-10 pr-5 pl-5 break-all"
        >
          <div
            class="
              lg:text-left lg:w-1/2
              text-center
              text-5xl pb-5"
          >
            Phosfluorescently engage worldwide
          </div>

          <div
            class="
              lg:text-left lg:w-1/2
              text-center
              text-sm pb-5"
          >
            Credibly innovate granular internal or "organic" sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas with optimal networks.
          </div>
        </div>

        <div class="flex justify-center w-screen">
          <div
            class="
              lg:grid lg:grid-cols-3
              grid grid-cols-2
              gap-5 justify-items-center z-10"
          >
            <div
              v-for="(popularItem, index) in popularItems"
              :key="popularItem.id"
              class="
                transform scale-90
                lg:transform lg:scale-100"
            >
              <CardItem
                :class="`
                  gridCard${index}
                  lg:block
                  ${index >= 4 ? 'hidden' : '' }`"
                :item="popularItem"
                :selected="true"
              />
            </div>
          </div>

          <div
              class="bg-white rounded-full bg-opacity-0 z-0 absolute top-1/2"
              :style="`
                width: 1px;
                height: 1px;
                box-shadow: 0 0 350px 150px ${userPreferences().theme === 'dark' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)'};`"
            />
        </div>
        <button
          class="btn mt-7 bg-gradient-to-r from-primary via-gray-200 to-primary text-primary-content text-sm"
        >
          See More
        </button>
      </div>
    </div>

    <!-- fourth panel -->
    <div
      class="w-full bg-base-300 bg-opacity-50 pb-10"
    >
      <div class="fourthPanel">
        <div
          class="
            lg:flex lg:flex-row lg:justify-between
            flex flex-col justify-center
            items-center text-base-content mb-10 pr-5 pl-5 break-all"
        >
          <div
            class="
              lg:text-left lg:w-1/2
              text-center
              text-5xl pb-5"
          >
            Phosfluorescently engage worldwide
          </div>

          <div
            class="
              lg:text-left lg:w-1/2
              text-center
              text-sm pb-5"
          >
            Credibly innovate granular internal or "organic" sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas with optimal networks.
          </div>
        </div>
        <div class="flex justify-center w-full pt-10">
          <div
            class="
              lg:grid-cols-5
              md:grid-cols-3
              grid grid-cols-2
              gap-5 justify-items-start z-10 "
          >
            <div v-for="(creator, index) in creators" :key="creator.id">
              <CreatorItem
                :class="`
                  creatorGridCard${index}
                  lg:block
                  md:${index >= 3 ? 'hidden' : 'block' }
                  ${index >= 2 ? 'hidden' : 'block' }`"
                :creator="creator"
                :selected="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- fifth panel -->
    <div
      class="fifthPanel w-full bg-base-300 pb-10"
    >
      <div
        class="text-5xl text-base-content p-5"
      >
        Trusted By
      </div>
      <div class="
        lg:flex lg:flex-row lg:justify-center
        flex flex-col
        items-center w-full"
      >
        <div v-for="company in companies" class="flex justify-center">
          <img
            :src="company.toString()"
            class="
              w-36 filter grayscale
              "
          />
        </div>
      </div>
    </div>

    <!-- sixth panel -->
    <div
      class="sixthPanel w-full flex justify-center w-screen bg-gradient-to-b from-transparent to-base-300 opacity-50 text-base-content mt-10 pt-10 pb-10"
    >
      <div class="lg:flex lg:flex-row flex flex-col items-start justify-center gap-5">
        <div class="ml-10 flex flex-col w-56 pb-5 justify-start items-center text-left">
          <div class="flex flex-row items-center w-full">
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
          <div class="w-full">
            &copy;Copyrights my thing 2021
          </div>
          <div class="w-full">
            All Rights Reserved
          </div>
          <div class="w-full pt-5 flex text-base-content">
            <!-- facebook -->
            <button class="btn btn-xs btn-ghost text-white ">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="16" height="16"
                viewBox="0 0 16 16"
                style="fill: white"
              >
                <path d="M 7.5 1 C 3.9160714 1 1 3.9160714 1 7.5 C 1 11.083929 3.9160714 14 7.5 14 C 11.083929 14 14 11.083929 14 7.5 C 14 3.9160714 11.083929 1 7.5 1 z M 7.5 2 C 10.543488 2 13 4.4565116 13 7.5 C 13 10.266333 10.967571 12.541024 8.3125 12.933594 L 8.3125 9.0898438 L 9.8652344 9.0898438 L 10.109375 7.5136719 L 8.3125 7.5136719 L 8.3125 6.6503906 C 8.3125 5.9953906 8.5256719 5.4140625 9.1386719 5.4140625 L 10.123047 5.4140625 L 10.123047 4.0371094 C 9.9500469 4.0141094 9.5845781 3.9628906 8.8925781 3.9628906 C 7.4485781 3.9628906 6.6015625 4.7258906 6.6015625 6.4628906 L 6.6015625 7.5117188 L 5.1171875 7.5117188 L 5.1171875 9.0898438 L 6.6035156 9.0898438 L 6.6035156 12.919922 C 3.9897868 12.492118 2 10.237066 2 7.5 C 2 4.4565116 4.4565116 2 7.5 2 z"></path>
              </svg>
            </button>

            <!-- instagram -->
            <button class="btn btn-xs btn-ghost text-white ">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="16" height="16"
                viewBox="0 0 16 16"
                style="fill: white"
              >
                <path d="M 4.773438 1 C 2.695313 1 1 2.695313 1 4.773438 L 1 10.230469 C 1 12.304688 2.695313 14 4.773438 14 L 10.230469 14 C 12.304688 14 14 12.304688 14 10.226563 L 14 4.773438 C 14 2.695313 12.304688 1 10.226563 1 Z M 4.773438 2 L 10.226563 2 C 11.765625 2 13 3.234375 13 4.773438 L 13 10.226563 C 13 11.765625 11.765625 13 10.230469 13 L 4.773438 13 C 3.234375 13 2 11.765625 2 10.230469 L 2 4.773438 C 2 3.234375 3.234375 2 4.773438 2 Z M 11.5 3 C 11.222656 3 11 3.222656 11 3.5 C 11 3.777344 11.222656 4 11.5 4 C 11.777344 4 12 3.777344 12 3.5 C 12 3.222656 11.777344 3 11.5 3 Z M 7.5 4 C 5.574219 4 4 5.574219 4 7.5 C 4 9.425781 5.574219 11 7.5 11 C 9.425781 11 11 9.425781 11 7.5 C 11 5.574219 9.425781 4 7.5 4 Z M 7.5 5 C 8.886719 5 10 6.113281 10 7.5 C 10 8.886719 8.886719 10 7.5 10 C 6.113281 10 5 8.886719 5 7.5 C 5 6.113281 6.113281 5 7.5 5 Z"></path>
              </svg>
            </button>

            <!-- linkedin -->
            <button class="btn btn-xs btn-ghost text-white ">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="16" height="16"
                viewBox="0 0 16 16"
                style=" fill:white;"><path d="M 2.757813 1 C 1.792969 1 1 1.792969 1 2.757813 L 1 12.246094 C 1 13.207031 1.792969 14 2.757813 14 L 12.246094 14 C 13.207031 14 14 13.207031 14 12.246094 L 14 2.757813 C 14 1.792969 13.207031 1 12.246094 1 Z M 2.757813 2 L 12.246094 2 C 12.667969 2 13 2.332031 13 2.757813 L 13 12.246094 C 13 12.667969 12.667969 13 12.246094 13 L 2.757813 13 C 2.332031 13 2 12.667969 2 12.246094 L 2 2.757813 C 2 2.332031 2.332031 2 2.757813 2 Z M 4 3 C 3.449219 3 3 3.449219 3 4 C 3 4.550781 3.449219 5 4 5 C 4.550781 5 5 4.550781 5 4 C 5 3.449219 4.550781 3 4 3 Z M 3 6 L 3 12 L 5 12 L 5 6 Z M 6 6 L 6 12 L 8 12 L 8 9.320313 C 8 8.488281 8.078125 7.742188 9.078125 7.742188 C 10.0625 7.742188 10 8.636719 10 9.375 L 10 12 L 12 12 L 12 9.039063 C 12 7.320313 11.640625 6 9.691406 6 C 8.753906 6 8.28125 6.375 8.023438 6.875 L 8 6.875 L 8 6 Z"></path>
              </svg>
            </button>

            <!-- pinterest -->
            <button class="btn btn-xs btn-ghost text-white ">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="16" height="16"
                viewBox="0 0 50 50"
                style=" fill: white;"><path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609825 4 46 13.390175 46 25 C 46 36.609825 36.609825 46 25 46 C 22.876355 46 20.82771 45.682142 18.896484 45.097656 C 19.75673 43.659418 20.867347 41.60359 21.308594 39.90625 C 21.570728 38.899887 22.648438 34.794922 22.648438 34.794922 C 23.348841 36.132057 25.395277 37.263672 27.574219 37.263672 C 34.058123 37.263672 38.732422 31.300682 38.732422 23.890625 C 38.732422 16.78653 32.935409 11.472656 25.476562 11.472656 C 16.196831 11.472656 11.271484 17.700825 11.271484 24.482422 C 11.271484 27.636307 12.94892 31.562193 15.634766 32.8125 C 16.041611 33.001865 16.260073 32.919834 16.353516 32.525391 C 16.425459 32.226044 16.788267 30.766792 16.951172 30.087891 C 17.003269 29.871239 16.978043 29.68405 16.802734 29.470703 C 15.913793 28.392399 15.201172 26.4118 15.201172 24.564453 C 15.201172 19.822048 18.791452 15.232422 24.908203 15.232422 C 30.18976 15.232422 33.888672 18.832872 33.888672 23.980469 C 33.888672 29.796219 30.95207 33.826172 27.130859 33.826172 C 25.020554 33.826172 23.440361 32.080359 23.947266 29.939453 C 24.555054 27.38426 25.728516 24.626944 25.728516 22.78125 C 25.728516 21.130713 24.842754 19.753906 23.007812 19.753906 C 20.850369 19.753906 19.117188 21.984457 19.117188 24.974609 C 19.117187 26.877359 19.761719 28.166016 19.761719 28.166016 C 19.761719 28.166016 17.630543 37.176514 17.240234 38.853516 C 16.849091 40.52931 16.953851 42.786365 17.115234 44.466797 C 9.421139 41.352465 4 33.819328 4 25 C 4 13.390175 13.390175 4 25 4 z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="ml-10 flex flex-col w-28 pb-5 justify-start items-center text-left">
          <div
            class="w-full font-bold text-white"
          >
            About
          </div>
          <div
            class="w-full text-base-content"
          >
            About us
          </div>
          <div
            class="w-full text-base-content"
          >
            Contact us
          </div>
          <div
            class="w-full text-base-content"
          >
            Comunity
          </div>
          <div
            class="w-full text-base-content"
          >
            FAQ's
          </div>
        </div>

        <div class="ml-10 flex flex-col w-28 pb-5 justify-start items-center text-left">
          <div
            class="w-full font-bold text-white"
          >
            Resources
          </div>
          <div
            class="w-full text-base-content"
          >
            Articel
          </div>
          <div
            class="w-full text-base-content"
          >
            Blogs
          </div>
          <div
            class="w-full text-base-content"
          >
            Event
          </div>
        </div>

        <div class="ml-10 flex flex-col pb-5 justify-start items-center text-left">
          <div
            class="w-full font-bold text-white"
          >
            Join Us
          </div>
          <div
            class="w-full text-base-content"
          >
            <div class="relative text-gray-600 focus-within:text-gray-400">
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="white"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg>
                </button>
              </span>
              <input type="search" name="q" class="py-2 text-sm text-base-content bg-base-100 rounded-lg pl-10 focus:outline-none " placeholder="Enter email..." autocomplete="off">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import { ref, computed, onMounted } from 'vue'
  import CardItem from '../components/CardItem.vue'
  import CreatorItem from '../components/Creator.vue'
  import { userPreferences } from '../store/userPreferences'
  import NFT from '../models/NFT'
  import Creator from '../models/Creator'

  import gsap from 'gsap'
  import ScrollTrigger from 'gsap/ScrollTrigger'
  gsap.registerPlugin(ScrollTrigger)

  const items: NFT[] = [
    {id: '001', title: 'Lil bit', user: 'xXxLordGamerxXx', bid: 0.24, bidCurrency: 'ETH', dateOfEnd: new Date('2021-12-05 12:03:05'), img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/35271885-b64b-49da-b43d-e9aa8fa4d471/ddjkar3-151d9901-ec2c-40be-baa8-d87ded7f24ae.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM1MjcxODg1LWI2NGItNDlkYS1iNDNkLWU5YWE4ZmE0ZDQ3MVwvZGRqa2FyMy0xNTFkOTkwMS1lYzJjLTQwYmUtYmFhOC1kODdkZWQ3ZjI0YWUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.KOD7z7So3UGaeKUnTJJ_bbm5Yntq-9ohqDw3Gv-mJk8'},
    {id: '002', title: 'Elon husk', user: 'wasdasd', bid: 0.11, bidCurrency: 'ETH', dateOfEnd: new Date('2021-10-30 08:02:15'), img: 'https://i.pinimg.com/originals/62/57/d3/6257d3ab7e42e96407944416ca9d3f18.gif'},
    {id: '003', title: 'I SEE YOU', user: 'broDudeGuy66', bid: 0.54, bidCurrency: 'DOGE', dateOfEnd: new Date('2022-01-05 16:08:34'), img: 'https://www.gifcen.com/wp-content/uploads/2021/03/memes-gif-2.gif'},
    {id: '004', title: 'Nyan Cat', user: 'catPearson', bid: 0.09, bidCurrency: 'ETH', dateOfEnd: new Date('2021-12-01 23:15:00'), img: 'https://i.imgur.com/OZbvwFH.gif'},
    {id: '005', title: 'Fire Keeper', user: 'xXxLordGamerxXx', bid: 0.69, bidCurrency: 'DOGE', dateOfEnd: new Date('2022-03-05 19:15:15'), img: 'https://giffiles.alphacoders.com/491/49135.gif'},
    {id: '006', title: 'Girl on fire 🔥', user: 'efi-th0di', bid: 1.57, bidCurrency: 'BIT', dateOfEnd: new Date('2021-12-22 19:40:35'), img: 'https://c.tenor.com/gYGkngUNGesAAAAd/efi-thodi-dancing.gif'}
  ]

  const popularItems: NFT[] = [items[0], items[1], items[2], items[3], items[4],items[5]]

  const creators: Creator[] = [
    {id: '001', name: 'Efi', surname: 'Thodi', price: 10000, image: 'https://i1.prth.gr/images/963x541/files/2021-09-29/efi-thodi.jpg', backgroundImage: 'https://www.ogdoo.gr/media/k2/items/cache/d8c6e20be068ac080a1f67157a9d6247_XL.jpg'},
    {id: '002', name: 'George', surname: 'Smith', price: 500000, image: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed663d153104f0007d6f014%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D15%26cropX2%3D1047%26cropY1%3D48%26cropY2%3D1080', backgroundImage: 'https://sm.ign.com/t/ign_gr/screenshot/default/suicide-squad-2016-poster_pucz.1280.jpg'},
    {id: '003', name: 'Nikos', surname: 'Nikas', price: 125000, image: 'https://cdn.emojidex.com/emoji/seal/Pepe.png?1496036151', backgroundImage: 'https://www.sciline.org/wp-content/uploads/2021/02/cropped-Torrential-Rain-Flooding-and-Climate-Change-2000x834.jpg'},
    {id: '004', name: 'John', surname: 'Doe', price: 70000, image: 'https://www.mobafire.com/images/avatars/yuumi-classic.png', backgroundImage: 'https://m.media-amazon.com/images/I/61DXObmlNpL._AC_SY450_.jpg'},
    {id: '005', name: 'De', surname: 'Kserw', price: 650000, image: 'https://www.dexerto.com/wp-content/uploads/2021/08/18/t1-3.jpg', backgroundImage: 'https://cdn1.dotesports.com/wp-content/uploads/2018/08/11122856/ff913d24-ed61-4bed-aeea-ef2c80f3ff6b.jpg'},
  ]

  const companies: String[] = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png',
    'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png',
    'https://iconape.com/wp-content/files/an/351546/svg/tailwind-css-seeklogo.com.svg'
  ]

  const carouselIndex = ref(0)
  const nextCarouselIndex = computed(() => {
    if(carouselIndex.value === items.length - 1){
      return 0
    }
    return carouselIndex.value + 1
  })
  const incCarousel = () => {
    carouselIndex.value < items.length - 1 ? carouselIndex.value++ : carouselIndex.value = 0
  }

  // <====== Animations for selected card ======>

  const beforeEnterSelectedCard = (el: any) => {
    gsap.from(el, {
      opacity: 1,
      scale: 1.1,
      translateX: 335,
      delay: 0.2
    })
  }

  const enterSelectedCard = (el: any, done: any) => {
    gsap.to(el, {
      opacity: 1,
      scale: 1.3,
      translateX: -100,
      duration: 1,
      delay: 0.2
    })
  }

  const beforeLeaveSelectedCard = (el: any) => {
    gsap.from(el, {
      x: -99,
      opacity: 1,
      scale: 1.3,
      z: 0,
      ease: 'power.in',
      delay: 0.2
    })
  }

  const leaveSelectedCard = (el: any, done: any) => {
    gsap.to(el, {
      duration: 0.5,
      x: -350,
      z: 0,
      opacity: 0,
      onComplete: done,
      scale: 0.8,
      delay: 0.2
    })
  }

  // <====== Animations for next card ======>

  const beforeEnterNextCard = (el: any) => {
    gsap.from(el, {
      x: 300,
      opacity: 1,
      scale: 1,
      delay: 0.2
    })
  }

  const enterNextCard = (el: any, done: any) => {
    gsap.to(el, {
      duration: 1.5,
      x: 0,
      opacity: 1,
      onComplete: done,
      scale: 1,
      ease: 'expo.out',
      delay: 0.2
    })
  }

  const beforeLeaveNextCard = (el: any) => {
    gsap.to(el, {
      opacity: 1,
      x: 0,
      scale: 1,
      delay: 0.2
    })
  }

  // <====== Animations for grid of cards ======>

  onMounted(() => {
    // reveal selected and next card
    gsap.from(".selectedCard", {
      opacity: 1,
      scale: 1.1,
      translateX: 335,
      delay: 0.5
    })

    gsap.from(".nextCard", {
      x: 300,
      opacity: 1,
      scale: 1,
      delay: 0.8
    })

    // open cards on second panel
    gsap.to('.card1',{
      scrollTrigger: {
        trigger: '.card1',
        start: '0px 45%',
        end: '20px 40%',
        scrub: 1,
        toggleActions: 'restart pause reverse pause'
      },
      rotation: 15,
      x: 100,
      y: 10,
      duration: 15,
    })

    gsap.to('.card2',{
      scrollTrigger: {
        trigger: '.card2',
        start: '0px 45%',
        end: '20px 40%',
        scrub: 1,
        toggleActions: 'restart pause reverse pause'
      },
      rotation: -15,
      x: -100,
      y: 20,
      duration: 15,
    })

    gsap.from('.gridCard0, .gridCard1, .gridCard2', {
      scrollTrigger: {
        trigger: '.gridCard0',
        start: '0 95%',
        end: '20px 90%',
        scrub: 1,
      },
      duration: 2,
      opacity: 0,
    })

    gsap.from('.gridCard3, .gridCard4, .gridCard5', {
      scrollTrigger: {
        trigger: '.gridCard0',
        start: '350px 60%',
        end: '400px 40%',
        scrub: 1,
      },
      duration: 2,
      opacity: 0,
    })

    // scrolling through panels
    gsap.from('.sencondPanel', {
      scrollTrigger: {
        trigger: '.sencondPanel',
        start: '0px 45%',
        end: '20px 40%',
        scrub: 1,
      },
      duration: 2,
      opacity: 0,
    })

    gsap.from('.thirdPanel', {
      scrollTrigger: {
        trigger: '.thirdPanel',
        start: '0px 45%',
        end: '20px 40%',
        scrub: 1,
      },
      duration: 2,
      opacity: 0,
    })

    gsap.from('.fourthPanel', {
      scrollTrigger: {
        trigger: '.fourthPanel',
        start: '-250px 45%',
        end: '-200px 40%',
        scrub: 1,
      },
      duration: 2,
      opacity: 0,
    })

    gsap.from('.fifthPanel', {
      scrollTrigger: {
        trigger: '.fifthPanel',
        start: '-250px 45%',
        end: '-200px 40%',
        scrub: 1,
      },
      duration: 2,
      opacity: 0,
    })

    gsap.from('.sixthPanel', {
      scrollTrigger: {
        trigger: '.sixthPanel',
        start: '-420px 49%',
        end: '-400px 46%',
        scrub: 1,
      },
      duration: 2,
      opacity: 0,
    })

  })



</script>