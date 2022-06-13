<template>
  <div class="flex flex-col h-full w-full">
    <div
      :class="`h-full w-full flex flex-col divide-y divide-zinc-600`"
      :style="`height:${windowSize.height.value - 176}px`"
    >
      <h1 class="p-2 text-xs border-b border-zinc-800 text-zinc-500">
        before list
      </h1>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        v-model="store.document.beforeList"
        class="h-full px-2 py-1 text-white"
      />

      <Markdown class="markdown-body h-full" :source="store.document.beforeList" :html="true" :breaks="true" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useWindowSize } from "vue-window-size";
import Markdown from "vue3-markdown-it";
import { store } from "../composables/store";

import "github-markdown-css/github-markdown.css";

const windowSize = useWindowSize();
</script>

<style lang="scss" scoped>
.markdown-body {
  @apply bg-[#181818] w-full border-0 px-2 py-1 h-full overflow-auto;
}
</style>
