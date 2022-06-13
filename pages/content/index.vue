<template>
  <div class="flex h-full w-full divide-x divide-zinc-800 text-white">
    <div
      :class="`h-full w-full flex flex-col`"
      :style="`height:${windowSize.height.value - 176}px`"
    >
      <h1
        class="p-[0.375rem] text-xs border-b border-zinc-600 text-zinc-500 leading-tight"
      >
        content list
      </h1>
      <div
        :class="`w-[${windowSize.width.value - 12}px] h-full `"
        style="overflow-y: scroll"
      >
        <draggable
          v-if="store.list.data.length > 0"
          v-model="store.list.data"
          @start="drag = true"
          @end="drag = false"
          item-key="id"
          class="flex flex-col divide-y divide-zinc-600 border-b border-zinc-600"
          handle=".handle"
        >
          <template #item="{ element }">
            <div class="flex flex-row w-full min-h-[42px] divide-x divide-zinc-800">
              <div
                class="min-w-[27px] min-h-full flex flex-col justify-center items-center cursor-grab handle text-zinc-400 handle"
              >
                <i class="mdi mdi-drag-vertical" />
              </div>
              <div :class="`flex flex-col justify-center w-full px-3`">
                <input
                  type="text"
                  placeholder="Content Name"
                  v-model="element.name"
                  class="w-full cursor-text"
                />
              </div>
              <div class="flex flex-row divide-x divide-zinc-800">
                <i
                  class="min-w-[42px] mdi mdi-delete flex justify-center items-center cursor-pointer text-red-500"
                  @click="removeItem(element.id)"
                />
                <i
                  class="min-w-[42px] mdi mdi-arrow-right-bold flex justify-center items-center cursor-pointer text-blue-500"
                  @click="$router.push(`/content/item-${element.id}`)"
                />
              </div>
            </div>
          </template>
        </draggable>
        <div v-else class="h-full flex flex-col justify-center items-center">
          <div class="text-zinc-400">content list is empty</div>
          <div class="text-xs text-zinc-500">
            add a content topic by an click at green button
          </div>
        </div>
      </div>
      <div
        class="min-h-[42px] flex justify-center items-center noselect border-t border-zinc-600 cursor-pointer"
        @click="addItem()"
        ref="parent"
      >
        <div
          class="w-min whitespace-nowrap flex justify-center items-center noselect gap-2"
        >
          <i class="mdi mdi-playlist-plus text-green-500 text-xl" />
        </div>
      </div>
    </div>
  </div>
</template>
<script async setup lang="ts">
import draggable from "vuedraggable";
import { useWindowSize } from "vue-window-size";
import { store } from "../../composables/store";

const windowSize = useWindowSize();

const addItem = () => {
  store.list.data.push({
    id: store.list.data.length,
    name: "",
    items: [],
  });
};

const removeItem = (id: number) => {
  store.list.data = store.list.data.filter((item) => item.id != id);
};

let drag = ref(false);
</script>
<style>
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
   supported by Chrome, Edge, Opera and Firefox */
}
</style>
