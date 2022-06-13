<template>
  <div class="flex h-full w-full divide-x">
    <i
      v-if="false"
      class="h-full min-w-[54px] mdi mdi-arrow-left-bold flex justify-center items-center cursor-pointer"
    />
    <div
      :class="`h-full w-full flex flex-col justify-center items-center p-4 gap-4 text-sm leading-tight`"
      :style="`height:${windowSize.height.value - 176}px`"
    >
      <img
        src="/awesome.png"
        alt=""
        class="max-w-[150px] sm:max-w-[200px] "
      />
      <div class="flex flex-col gap-3 max-w-[300px] sm:max-w-[400px]">
        <p>
          create awesome markdown lists by steps, with minimalist and organized way.
        </p>
        <div class="flex flex-row justify-center items-center gap-3 text-white">
          <NuxtLink to="/before"
            class="w-full p-[0.35em] bg-[#101010] hover:bg-[#4A4169] text-center text-zinc-500 hover:text-white rounded border border-zinc-500 hover:border-[#FF60AC]"
          >
            start by an list introduction
          </NuxtLink>
          <NuxtLink to="/content"
            class="w-full p-[0.35em] bg-[#101010] hover:bg-[#4A4169] text-center text-zinc-500 hover:text-white rounded border border-zinc-500 hover:border-[#FF60AC]"
          >
            start directly by list contents
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script async setup lang="ts">
import { useWindowSize } from "vue-window-size";

const windowSize = useWindowSize();
</script>
<style scoped>
@font-face {
  font-family: "orbitron";
  src: url("/Orbitron.ttf");
}

h1 {
  font-family: orbitron;
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
   supported by Chrome, Edge, Opera and Firefox */
}

.delete {
  color: red !important;
}
</style>
