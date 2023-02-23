<template>
  <div class="min-h-screen flex flex-col justify-between">
    <AppTopBar />
    <NuxtErrorBoundary>
      <main class="flex-grow">
        <slot />
      </main>
    </NuxtErrorBoundary>
    <AppFooter />
  </div>
</template>

<script setup></script>

<script></script>
<style lang="scss" scoped></style>
