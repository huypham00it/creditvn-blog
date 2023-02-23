<script setup>
const { blogs } = useBlog();
const { toSlug } = useString();
const route = useRoute();

const blog = computed(() => {
  return blogs.find((b) => toSlug(b.title) === route.params.blog);
});

onMounted(() => {
  if (!blog.value) {
    throw createError({
      statusCode: 404,
      message: "Không tồn tại Blog :(",
    });
  }
});

useHead({
  title: blog.value?.title ?? "Credit.vn",
});
</script>

<template>
  <h1>custom page</h1>
</template>
