<script setup>
const Logo = computed(() => {
    return `/images/logo-dark.svg`
})

defineProps({
    link: {
        type: Boolean
    },
    class: {
        type: String
    }
})

</script>

<template>
    <div class="flex items-center h-full">
        <NuxtLink v-if="link" to="/" class="block h-full">
            <NuxtImg class="block h-full w-auto" :class="class" :src="Logo" alt="Creditvn" />
        </NuxtLink>
        <NuxtImg class="block h-full w-auto" :class="class" v-else :src="Logo" alt="Creditvn" />
    </div>
</template>
<style>
</style>