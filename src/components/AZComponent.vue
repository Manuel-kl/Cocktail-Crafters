<template>
  <nav
    class="shadow-md shadow-black lg:shadow-none grid grid-cols-2 gap-x-3 lg:gap-x-0 bg-white lg:bg-green p-5 bg-opacity-50 lg:bg-opacity-0 absolute right-1/4 lg:right-auto top-0 lg:top-auto lg:relative lg:flex-row z-50 lg:inline-flex"
  >
    <router-link
      @click="hideLetters"
      class="relative inline-flex items-center justify-center lg:px-4 py-2 text-sm text-white font-semibold lg:text-black font-roboto-condensed bg-green ease transition-all duration-300 lg:bg-opacity-10 ring-1 ring-white w-14 lg:w-fit lg:ring-green lg:hover:bg-green lg:hover:text-white focus:z-20 focus:outline-offset-0"
      :to="`/cocktails/a`"
      active-class="  lg:bg-green bg-opacity-100 text-sm text-green lg:text-white  lg:hover:text-white  bg-black lg:bg-opacity-100 ease transition-all duration-300 "
      >A</router-link
    >
    <router-link
      @click="hideLetters"
      class="relative inline-flex items-center justify-center lg:px-4 py-2 text-sm font-semibold text-white lg:text-black font-roboto-condensed bg-green ease transition-all duration-300 lg:bg-opacity-10 ring-1 ring-white w-14 lg:w-fit lg:ring-green lg:hover:bg-green lg:hover:text-white focus:z-20 focus:outline-offset-0"
      :to="`/cocktails/b`"
      active-class="  lg:bg-green bg-opacity-100 text-green  lg:text-white lg:hover:text-green  bg-black lg:bg-opacity-100 ease transition-all duration-300 "
      >B</router-link
    >
    <router-link
      @click="hideLetters"
      class="relative inline-flex items-center justify-center lg:px-4 py-2 text-sm font-semibold text-white lg:text-black font-roboto-condensed bg-green ease transition-all duration-300 lg:bg-opacity-10 ring-1 ring-white w-14 lg:w-fit lg:ring-green lg:hover:bg-green lg:hover:text-white focus:z-20 focus:outline-offset-0"
      :to="`/cocktails/c`"
      active-class="  lg:bg-green bg-opacity-100 text-green  lg:text-white lg:hover:text-green  bg-black lg:bg-opacity-100 ease transition-all duration-300 "
      >C</router-link
    >
    <router-link
      @click="hideLetters"
      class="relative inline-flex items-center justify-center lg:px-4 py-2 text-sm font-semibold text-white lg:text-black font-roboto-condensed bg-green ease transition-all duration-300 lg:bg-opacity-10 ring-1 ring-white w-14 lg:w-fit lg:ring-green lg:hover:bg-green lg:hover:text-white focus:z-20 focus:outline-offset-0"
      :to="`/cocktails/d`"
      active-class="  lg:bg-green bg-opacity-100 text-green  lg:text-white lg:hover:text-green  bg-black lg:bg-opacity-100 ease transition-all duration-300 "
      >D</router-link
    >
    <router-link
      @click="hideLetters"
      class="relative inline-flex items-center justify-center lg:px-4 py-2 text-sm font-semibold text-white lg:text-black font-roboto-condensed bg-green ease transition-all duration-300 lg:bg-opacity-10 ring-1 ring-white w-14 lg:w-fit lg:ring-green lg:hover:bg-green lg:hover:text-white focus:z-20 focus:outline-offset-0"
      :to="`/cocktails/e`"
      active-class="  lg:bg-green bg-opacity-100 text-green  lg:text-white lg:hover:text-green  bg-black lg:bg-opacity-100 ease transition-all duration-300 "
      >E</router-link
    >
    <router-link
      @click="hideLetters"
      class="relative inline-flex items-center justify-center lg:px-4 py-2 text-sm font-semibold text-white lg:text-black font-roboto-condensed bg-green ease transition-all duration-300 lg:bg-opacity-10 ring-1 ring-white w-14 lg:w-fit lg:ring-green lg:hover:bg-green lg:hover:text-white focus:z-20 focus:outline-offset-0"
      :to="`/cocktails/f`"
      active-class="  lg:bg-green bg-opacity-100 text-green  lg:text-white lg:hover:text-green  bg-black lg:bg-opacity-100 ease transition-all duration-300 "
      >F</router-link
    >
    <router-link
      @click="hideLetters"
      class="relative inline-flex items-center justify-center lg:px-4 py-2 text-sm font-semibold text-white lg:text-black font-roboto-condensed bg-green ease transition-all duration-300 lg:bg-opacity-10 ring-1 ring-white w-14 lg:w-fit lg:ring-green lg:hover:bg-green lg:hover:text-white focus:z-20 focus:outline-offset-0"
      :to="`/cocktails/g`"
      active-class="  lg:bg-green bg-opacity-100 text-green  lg:text-white lg:hover:text-green  bg-black lg:bg-opacity-100 ease transition-all duration-300 "
      >G</router-link
    >
    <router-link
      @click="hideLetters"
      class="relative inline-flex items-center justify-center lg:px-4 py-2 text-sm font-semibold text-white lg:text-black font-roboto-condensed bg-green ease transition-all duration-300 lg:bg-opacity-10 ring-1 ring-white w-14 lg:w-fit lg:ring-green lg:hover:bg-green lg:hover:text-white focus:z-20 focus:outline-offset-0"
      :to="`/cocktails/h`"
      active-class="  lg:bg-green bg-opacity-100 text-green  lg:text-white lg:hover:text-green  bg-black lg:bg-opacity-100 ease transition-all duration-300 "
      >H</router-link
    >
    <router-link
      @click="hideLetters"
      class="relative inline-flex items-center justify-center lg:px-4 py-2 text-sm font-semibold text-white lg:text-black font-roboto-condensed bg-green ease transition-all duration-300 lg:bg-opacity-10 ring-1 ring-white w-14 lg:w-fit lg:ring-green lg:hover:bg-green lg:hover:text-white focus:z-20 focus:outline-offset-0"
      :to="`/cocktails/i`"
      active-class="  lg:bg-green bg-opacity-100 text-green  lg:text-white lg:hover:text-green  bg-black lg:bg-opacity-100 ease transition-all duration-300 "
      >I</router-link
    >
    <router-link
      @click="hideLetters"
      class="relative inline-flex items-center justify-center lg:px-4 py-2 text-sm font-semibold text-white lg:text-black font-roboto-condensed bg-green ease transition-all duration-300 lg:bg-opacity-10 ring-1 ring-white w-14 lg:w-fit lg:ring-green lg:hover:bg-green lg:hover:text-white focus:z-20 focus:outline-offset-0"
      :to="`/cocktails/j`"
      active-class="  lg:bg-green bg-opacity-100 text-green  lg:text-white lg:hover:text-green  bg-black lg:bg-opacity-100 ease transition-all duration-300 "
      >J</router-link
    >
    <router-link
      @click="hideLetters"
      class="relative inline-flex items-center justify-center lg:px-4 py-2 text-sm font-semibold text-white lg:text-black font-roboto-condensed bg-green ease transition-all duration-300 lg:bg-opacity-10 ring-1 ring-white w-14 lg:w-fit lg:ring-green lg:hover:bg-green lg:hover:text-white focus:z-20 focus:outline-offset-0"
      :to="`/cocktails/k`"
      active-class="  lg:bg-green bg-opacity-100 text-green  lg:text-white lg:hover:text-green  bg-black lg:bg-opacity-100 ease transition-all duration-300 "
      >K</router-link
    >
    <router-link
      @click="hideLetters"
      class="relative inline-flex items-center justify-center lg:px-4 py-2 text-sm font-semibold text-white lg:text-black font-roboto-condensed bg-green ease transition-all duration-300 lg:bg-opacity-10 ring-1 ring-white w-14 lg:w-fit lg:ring-green lg:hover:bg-green lg:hover:text-white focus:z-20 focus:outline-offset-0"
      :to="`/cocktails/l`"
      active-class="  lg:bg-green bg-opacity-100 text-green  lg:text-white lg:hover:text-green  bg-black lg:bg-opacity-100 ease transition-all duration-300 "
      >L</router-link
    >
    <router-link
      @click="hideLetters"
      class="relative inline-flex items-center justify-center lg:px-4 py-2 text-sm font-semibold text-white lg:text-black font-roboto-condensed bg-green ease transition-all duration-300 lg:bg-opacity-10 ring-1 ring-white w-14 lg:w-fit lg:ring-green lg:hover:bg-green lg:hover:text-white focus:z-20 focus:outline-offset-0"
      :to="`/cocktails/m`"
      active-class="  lg:bg-green bg-opacity-100 text-green  lg:text-white lg:hover:text-green  bg-black lg:bg-opacity-100 ease transition-all duration-300 "
      >M</router-link
    >
    <router-link
      @click="hideLetters"
      class="relative inline-flex items-center justify-center lg:px-4 py-2 text-sm font-semibold text-white lg:text-black font-roboto-condensed bg-green ease transition-all duration-300 lg:bg-opacity-10 ring-1 ring-white w-14 lg:w-fit lg:ring-green lg:hover:bg-green lg:hover:text-white focus:z-20 focus:outline-offset-0"
      :to="`/cocktails/n`"
      active-class="  lg:bg-green bg-opacity-100 text-green  lg:text-white lg:hover:text-green  bg-black lg:bg-opacity-100 ease transition-all duration-300 "
      >N</router-link
    >
    <router-link
      @click="hideLetters"
      class="relative inline-flex items-center justify-center lg:px-4 py-2 text-sm font-semibold text-white lg:text-black font-roboto-condensed bg-green ease transition-all duration-300 lg:bg-opacity-10 ring-1 ring-white w-14 lg:w-fit lg:ring-green lg:hover:bg-green lg:hover:text-white focus:z-20 focus:outline-offset-0"
      :to="`/cocktails/o`"
      active-class="  lg:bg-green bg-opacity-100 text-green  lg:text-white lg:hover:text-green  bg-black lg:bg-opacity-100 ease transition-all duration-300 "
      >O</router-link
    >
    <router-link
      @click="hideLetters"
      class="relative inline-flex items-center justify-center lg:px-4 py-2 text-sm font-semibold text-white lg:text-black font-roboto-condensed bg-green ease transition-all duration-300 lg:bg-opacity-10 ring-1 ring-white w-14 lg:w-fit lg:ring-green lg:hover:bg-green lg:hover:text-white focus:z-20 focus:outline-offset-0"
      :to="`/cocktails/p`"
      active-class="  lg:bg-green bg-opacity-100 text-green  lg:text-white lg:hover:text-green  bg-black lg:bg-opacity-100 ease transition-all duration-300 "
      >P</router-link
    >
    <router-link
      @click="hideLetters"
      class="relative inline-flex items-center justify-center lg:px-4 py-2 text-sm font-semibold text-white lg:text-black font-roboto-condensed bg-green ease transition-all duration-300 lg:bg-opacity-10 ring-1 ring-white w-14 lg:w-fit lg:ring-green lg:hover:bg-green lg:hover:text-white focus:z-20 focus:outline-offset-0"
      :to="`/cocktails/q`"
      active-class="  lg:bg-green bg-opacity-100 text-green  lg:text-white lg:hover:text-green  bg-black lg:bg-opacity-100 ease transition-all duration-300 "
      >Q</router-link
    >
    <router-link
      @click="hideLetters"
      class="relative inline-flex items-center justify-center lg:px-4 py-2 text-sm font-semibold text-white lg:text-black font-roboto-condensed bg-green ease transition-all duration-300 lg:bg-opacity-10 ring-1 ring-white w-14 lg:w-fit lg:ring-green lg:hover:bg-green lg:hover:text-white focus:z-20 focus:outline-offset-0"
      :to="`/cocktails/r`"
      active-class="  lg:bg-green bg-opacity-100 text-green  lg:text-white lg:hover:text-green  bg-black lg:bg-opacity-100 ease transition-all duration-300 "
      >R</router-link
    >
    <router-link
      @click="hideLetters"
      class="relative inline-flex items-center justify-center lg:px-4 py-2 text-sm font-semibold text-white lg:text-black font-roboto-condensed bg-green ease transition-all duration-300 lg:bg-opacity-10 ring-1 ring-white w-14 lg:w-fit lg:ring-green lg:hover:bg-green lg:hover:text-white focus:z-20 focus:outline-offset-0"
      :to="`/cocktails/s`"
      active-class="  lg:bg-green bg-opacity-100 text-green  lg:text-white lg:hover:text-green  bg-black lg:bg-opacity-100 ease transition-all duration-300 "
      >S</router-link
    >
    <router-link
      @click="hideLetters"
      class="relative inline-flex items-center justify-center lg:px-4 py-2 text-sm font-semibold text-white lg:text-black font-roboto-condensed bg-green ease transition-all duration-300 lg:bg-opacity-10 ring-1 ring-white w-14 lg:w-fit lg:ring-green lg:hover:bg-green lg:hover:text-white focus:z-20 focus:outline-offset-0"
      :to="`/cocktails/t`"
      active-class="  lg:bg-green bg-opacity-100 text-green  lg:text-white lg:hover:text-green  bg-black lg:bg-opacity-100 ease transition-all duration-300 "
      >T</router-link
    >
    <router-link
      @click="hideLetters"
      class="relative inline-flex items-center justify-center lg:px-4 py-2 text-sm font-semibold text-white lg:text-black font-roboto-condensed bg-green ease transition-all duration-300 lg:bg-opacity-10 ring-1 ring-white w-14 lg:w-fit lg:ring-green lg:hover:bg-green lg:hover:text-white focus:z-20 focus:outline-offset-0"
      :to="`/cocktails/u`"
      active-class="  lg:bg-green bg-opacity-100 text-green  lg:text-white lg:hover:text-green  bg-black lg:bg-opacity-100 ease transition-all duration-300 "
      >U</router-link
    >
    <router-link
      @click="hideLetters"
      class="relative inline-flex items-center justify-center lg:px-4 py-2 text-sm font-semibold text-white lg:text-black font-roboto-condensed bg-green ease transition-all duration-300 lg:bg-opacity-10 ring-1 ring-white w-14 lg:w-fit lg:ring-green lg:hover:bg-green lg:hover:text-white focus:z-20 focus:outline-offset-0"
      :to="`/cocktails/v`"
      active-class="  lg:bg-green bg-opacity-100 text-green  lg:text-white lg:hover:text-green  bg-black lg:bg-opacity-100 ease transition-all duration-300 "
      >V</router-link
    >
    <router-link
      @click="hideLetters"
      class="relative inline-flex items-center justify-center lg:px-4 py-2 text-sm font-semibold text-white lg:text-black font-roboto-condensed bg-green ease transition-all duration-300 lg:bg-opacity-10 ring-1 ring-white w-14 lg:w-fit lg:ring-green lg:hover:bg-green lg:hover:text-white focus:z-20 focus:outline-offset-0"
      :to="`/cocktails/w`"
      active-class="  lg:bg-green bg-opacity-100 text-green  lg:text-white lg:hover:text-green  bg-black lg:bg-opacity-100 ease transition-all duration-300 "
      >W</router-link
    >
    <router-link
      @click="hideLetters"
      class="relative inline-flex items-center justify-center lg:px-4 py-2 text-sm font-semibold text-white lg:text-black font-roboto-condensed bg-green ease transition-all duration-300 lg:bg-opacity-10 ring-1 ring-white w-14 lg:w-fit lg:ring-green lg:hover:bg-green lg:hover:text-white focus:z-20 focus:outline-offset-0"
      :to="`/cocktails/x`"
      active-class="  lg:bg-green bg-opacity-100 text-green  lg:text-white lg:hover:text-green  bg-black lg:bg-opacity-100 ease transition-all duration-300 "
      >X</router-link
    >
    <router-link
      @click="hideLetters"
      class="relative inline-flex items-center justify-center lg:px-4 py-2 text-sm font-semibold text-white lg:text-black font-roboto-condensed bg-green ease transition-all duration-300 lg:bg-opacity-10 ring-1 ring-white w-14 lg:w-fit lg:ring-green lg:hover:bg-green lg:hover:text-white focus:z-20 focus:outline-offset-0"
      :to="`/cocktails/y`"
      active-class="  lg:bg-green bg-opacity-100 text-green  lg:text-white lg:hover:text-green  bg-black lg:bg-opacity-100 ease transition-all duration-300 "
      >Y</router-link
    >
    <router-link
      @click="hideLetters"
      class="relative inline-flex items-center justify-center lg:px-4 py-2 text-sm font-semibold text-white lg:text-black font-roboto-condensed bg-green ease transition-all duration-300 lg:bg-opacity-10 ring-1 ring-white w-14 lg:w-fit lg:ring-green lg:hover:bg-green lg:hover:text-white focus:z-20 focus:outline-offset-0"
      :to="`/cocktails/z`"
      active-class="  lg:bg-green bg-opacity-100 text-green  lg:text-white lg:hover:text-green  bg-black lg:bg-opacity-100 ease transition-all duration-300 "
      >Z</router-link
    >
  </nav>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  hideLetters: {
    type: Function,
  },
});
</script>