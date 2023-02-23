<script setup>
const { $api } = useNuxtApp();

const { blogs: blogsData } = useBlog();

const handleSelectTag = (item, index) => {
  active.value = item;
  if (index !== 0) {
    blogs.value = blogsData.filter((blog) => blog.category === item);
  } else {
    blogs.value = blogsData;
  }
};

const tags = ref(["Tất cả", "C.ty tài chính", "Tip vay"]);
const active = ref("Tất cả");

const blogs = computed(() => {
  return blogsData
});

useHead({
  title: "Blog Creditvn"
})

</script>

<template>
  <div class="container mx-auto my-4">
    <header class="text-[#4A1CA7] text-center text-[20px] lg:text-[72px] font-bold">
      CREDIT.VN BLOG
    </header>
    <section class="mt-4 lg:mt-6">
      <div class="flex w-11/12 lg:w-8/12 mx-auto">
        <div
          v-for="(tag, index) in tags"
          :key="index"
          class="text-[14px] lg:text-[16px] h-12 lg:h-20 flex justify-center items-center flex-1 cursor-pointer"
          :class="
            active == tag ? 'bg-[#8353E2FF] text-white' : 'bg-[#CFD2DAFF] not-active'
          "
          @click="handleSelectTag(tag, index)"
        >
          {{ tag }}
        </div>
      </div>
    </section>
    <section class="my-4 lg:my-8">
      <div class="grid grid-cols-2 px-4 md:px-0 lg:grid-cols-3 gap-4 xl:gap-36">
        <div
          v-for="(item, index) in blogs"
          :key="index"
          class="shadow-md rounded-lg"
        >
          <BlogCard :item="item" />
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.not-active + .not-active {
  border-left: 1px solid #8353E2FF;
}
</style>
