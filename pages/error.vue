<script setup>
const error = useError()
</script>

<template>
        <div class="flex items-center justify-center">
                <h1>{{ error.statusCode }}</h1>
                <h2>{{ error.message }}</h2>
                <NuxtLink to="/">
                        Home page
                </NuxtLink>
        </div>
</template>