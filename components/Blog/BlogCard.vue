<script setup>
const { toSlug } = useString()

defineProps({
  item: {
    required: true,
    type: Object,
  },
});
</script>

<template>
  <NuxtLink :to="toSlug(item.title)">
    <div>
      <div class="aspect-video">
        <NuxtImg
          class="block object-cover w-full rounded-t-lg"
          :src="'/images' + item.image"
          :alt="item.title"
        />
      </div>
      <div class="p-3">
        <h4 class="font-bold">{{ item.title }}</h4>
        <p class="text-[14px] lg:text-base">{{ item.description }}</p>
        <p>
          <span class="mr-2 text-yellow-400"
            ><i class="pi pi-star-fill"></i></span
          >{{ item.rating }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>
