<template>
  <div class="flex h-full w-full divide-x">
    <div
      :class="`h-full w-full flex flex-col`"
      :style="`height:${windowSize.height.value - 176}px`"
    >
      <h1 class="p-2 text-xs border-b border-zinc-800 text-zinc-500">preview list</h1>
      <Markdown
        v-if="
          store.document.afterList != '' ||
          store.document.beforeList != '' ||
          store.list.markdown != '## Contents\n\n'
        "
        class="markdown-body h-full"
        :source="store.document.full"
        :html="true"
        :breaks="true"
      />
      <div class="w-full h-full flex flex-col justify-center items-center" v-else>
        <p class="mb-2">nothing to see, your contents is empty.</p>
        <div class="flex flex-row justify-center items-center gap-3 text-white">
          <NuxtLink
            to="/before"
            class="whitespace-nowrap w-full py-1 px-[0.35em] bg-[#101010] hover:bg-[#4A4169] text-center text-zinc-500 hover:text-white rounded border border-zinc-500 hover:border-[#FF60AC]"
          >
            start by introduction
          </NuxtLink>
          <NuxtLink
            to="/content"
            class="whitespace-nowrap w-full py-1 px-[0.35em] bg-[#101010] hover:bg-[#4A4169] text-center text-zinc-500 hover:text-white rounded border border-zinc-500 hover:border-[#FF60AC]"
          >
            start directly by list
          </NuxtLink>
        </div>
      </div>
      <div
        v-if="
          store.document.afterList != '' ||
          store.document.beforeList != '' ||
          store.list.markdown != '## Contents\n\n'
        "
        class="min-h-[42px] flex justify-center items-center noselect border-t border-zinc-600 cursor-pointer"
        ref="parent"
      >
        <div
          class="w-min whitespace-nowrap flex justify-center items-center noselect gap-2 text-xs"
          @click="copyToclipboard()"
        >
          <i class="mdi mdi-language-markdown text-green-500 text-3xl" /> copy this
          markdown
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useWindowSize } from "vue-window-size";
import Markdown from "vue3-markdown-it";
import { store } from "../composables/store";

import "github-markdown-css/github-markdown.css";

const windowSize = useWindowSize();

const copyToclipboard = () => {
  navigator.clipboard.writeText(
    document.querySelector('.markdown-body').innerHTML
  );
};
</script>
<style>
.markdown-body {
  @apply bg-[#181818] w-full border-0 px-2 py-1 h-full overflow-auto;
}
</style>
