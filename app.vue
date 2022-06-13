<template>
  <div
    :style="`width:${windowSize.width}px; height:${windowSize.height}px; overflow:hidden;`"
    class="w-full grid grid-rows-1 text-zinc-500"
  >
    <MoleculeMenu v-bind="topMenu" />
    <NuxtPage />
    <MoleculeMenu v-bind="bottomMenu" />
  </div>
</template>
<script setup lang="ts">
import { useWindowSize } from "vue-window-size";
import { IMenu } from "./components/molecule/menu.vue";
import { store } from "./composables/store";

const windowSize = useWindowSize();
const route = useRoute();

let topMenu = ref<IMenu>();
let bottomMenu = ref<IMenu>();

const changeMenu = () => {
  const actualRoute = route.name as string;
  if (["index"].some((item) => actualRoute.includes(item))) {
    topMenu.value = {
      home: false,
      before: false,
      content: false,
      after: false,
      preview: false,
    };
    bottomMenu.value = {
      home: false,
    };
  }
  if (["before"].some((item) => actualRoute.includes(item))) {
    topMenu.value = { before: false, content: false, after: false, preview: false };
    bottomMenu.value = { home: false, before: false };
  }
  if (["content"].some((item) => actualRoute.includes(item))) {
    topMenu.value = { content: false, after: false, preview: false };
    bottomMenu.value = { home: false, before: false, content: false };
  }
  if (["after"].some((item) => actualRoute.includes(item))) {
    topMenu.value = { after: false, preview: false };
    bottomMenu.value = { home: false, before: false, content: false, after: false };
  }
  if (["preview"].some((item) => actualRoute.includes(item))) {
    topMenu.value = { preview: false };
    bottomMenu.value = {
      home: false,
      before: false,
      content: false,
      after: false,
      preview: false,
    };
  }
};

changeMenu();

watch(
  () => route.name,
  () => {
    changeMenu();
  },
  { deep: true }
);

watchEffect(() => store.list.generateMarkdown());
watchEffect(
  () =>
    (store.document.full =
      store.document.beforeList + '\n' + store.list.markdown + '\n' + store.document.afterList)
);
</script>
<style>
#__nuxt {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply w-full min-h-screen h-full flex justify-center items-center content-center bg-[#181818] text-[white];
}
container-app {
  @apply w-full m-4 flex flex-col gap-2;
}
input,
textarea {
  all: unset;
}
::-webkit-scrollbar {
  width: 9px;
  border-left: 1px solid #52525b;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: #303030;
  background-clip: padding-box;
}
</style>
