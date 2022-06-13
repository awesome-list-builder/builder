<template>
  <div class="flex h-full w-full divide-x divide-zinc-600 text-white">
    <i
      class="h-full min-w-[36px] mdi mdi-arrow-left-bold flex justify-center items-center cursor-pointer text-yellow-500 text-lg"
      @click="$router.go(-1)"
    />
    <div
      :class="`h-full w-full flex flex-col`"
      :style="`height:${windowSize.height.value - 176}px`"
    >
      <h1 class="p-2 text-xs border-b border-zinc-600 text-zinc-500">
        content list - topic
        {{ store.list.data[itemIndex].name }} - item
        {{ store.list.data[itemIndex].items[subItemIndex].name }}
      </h1>
      <div
        :class="`w-[${windowSize.width.value - 12}px] h-full `"
        style="overflow-y: scroll"
      >
        <draggable
          v-if="store.list.data[itemIndex].items[subItemIndex].items.length > 0"
          v-model="store.list.data[itemIndex].items[subItemIndex].items"
          @start="drag = true"
          @end="drag = false"
          item-key="id"
          class="flex flex-col divide-y divide-zinc-600 border-b border-zinc-600"
          handle=".handle"
        >
          <template #item="{ element }">
            <div class="flex flex-row w-full min-h-[54px] divide-x divide-zinc-800">
              <div
                class="min-w-[27px] min-h-full flex flex-col justify-center items-center cursor-grab handle text-zinc-400"
              >
                <i class="mdi mdi-drag-vertical" />
              </div>
              <div
                :class="`flex flex-col justify-center w-full divide-y divide-zinc-800`"
              >
                <div class="px-3 pt-1 pb-2">
                  <label class="text-xs text-zinc-400 leading-tight">Subitem name:</label>
                  <input type="text" v-model="element.name" class="w-full cursor-text" />
                </div>
                <div class="px-3 pt-1 pb-2">
                  <label class="text-xs text-zinc-400 leading-tight">Subitem Link:</label>
                  <input type="text" v-model="element.link" class="w-full cursor-text" />
                </div>
                <div class="px-3 pt-1 pb-2">
                  <label class="text-xs text-zinc-400 leading-tight"
                    >Subitem Description:</label
                  >
                  <input
                    type="text"
                    v-model="element.description"
                    class="w-full cursor-text"
                  />
                </div>
              </div>
              <div class="flex flex-col divide-y divide-zinc-800">
                <i
                  class="min-w-[42px] h-full mdi mdi-delete flex justify-center items-center cursor-pointer text-red-500"
                  @click="removeItem(element.id)"
                />
              </div>
            </div>
          </template>
        </draggable>
        <div v-else class="h-full flex flex-col justify-center items-center">
          <div class="text-zinc-400">
            content list - topic
            {{ store.list.data[itemIndex].name }} - item
            {{ store.list.data[itemIndex].items[subItemIndex].name }}
            is empty
          </div>
          <div class="text-xs text-zinc-500">add a item by an click at green button</div>
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
import { store } from "../../../composables/store";

const windowSize = useWindowSize();
const route = useRoute();

const itemId = Number(route.params.item);
const itemIndex = store.list.data.findIndex((item) => item.id == itemId);

const subItemId = Number(route.params.subitem);
const subItemIndex = store.list.data[itemIndex].items.findIndex(
  (item) => item.id == subItemId
);

const addItem = () => {
  store.list.data[itemIndex].items[subItemIndex].items.push({
    id: store.list.data[itemIndex].items[subItemIndex].items.length,
    name: "",
    link: "",
    description: "",
  });
};

const removeItem = (id: number) => {
  store.list.data[itemIndex].items[subItemIndex].items = store.list.data[itemIndex].items[
    subItemIndex
  ].items.filter((item) => item.id != id);
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
