<template>
  <div class="divide-y divide-zinc-500 text-zinc-500">
    <NuxtLink
      to="/"
      v-if="home"
      class="min-h-[44px] h-[44px] flex justify-center items-center gap-2 mdi mdi-home cursor-pointer noselect bg-[#101010]"
    >
      home
    </NuxtLink>
    <NuxtLink
      v-if="before"
      to="/before"
      class="min-h-[44px] h-[44px] flex justify-center items-center gap-2 mdi mdi-chevron-up cursor-pointer noselect bg-[#101010]"
    >
      before list
    </NuxtLink>
    <NuxtLink
      to="/content"
      v-if="content"
      class="min-h-[44px] h-[44px] flex justify-center items-center gap-2 mdi mdi-text-long cursor-pointer noselect bg-[#101010]"
    >
      content list
    </NuxtLink>
    <NuxtLink
      to="/after"
      v-if="after"
      class="min-h-[44px] h-[44px] flex justify-center items-center gap-2 mdi mdi-chevron-down noselect bg-[#101010]"
    >
      after list
    </NuxtLink>
    <NuxtLink
      to="/preview"
      v-if="preview"
      class="min-h-[44px] h-[44px] flex justify-center items-center gap-2 mdi mdi-eye cursor-pointer noselect bg-[#101010]"
    >
      preview list
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
export interface IMenu {
  home?: boolean;
  before?: boolean;
  content?: boolean;
  after?: boolean;
  preview?: boolean;
}

const {
  home = true,
  before = true,
  content = true,
  after = true,
  preview = true,
} = defineProps<IMenu>();

const route = useRoute();
</script>

<style scoped></style>
