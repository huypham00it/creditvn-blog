<script setup>
const logoUrl = computed(() => {
    return `/images/logo2.png`;
});
</script>

<template>
    <div class="bg-yellow-200 lg:pt-10 lg:pb-3 flex justify-center p-4 lg:px-0">
        <div class="w-full lg:w-10/12">
            <div>
                <div class="text-[14px] lg:text-[16px] grid grid-cols-12">
                    <div class="col-span-12 lg:col-span-4">
                        <NuxtImg class="h-12" :src="logoUrl" alt="" />
                        <div class="mt-3">Hỗ trợ người dùng tìm ra và lựa chọn được sản phẩm tài chính phù hợp</div>
                    </div>
                    <div class="hidden lg:block col-span-12 lg:col-span-2 mt-4">
                        <!-- <a class="block" href="/">Về Credit.vn</a>
                        <a class="block" href="/">Điểm tín dụng</a>
                        <a class="block" href="/">Dịch vụ</a> -->
                    </div>
                    <div class="hidden lg:block col-span-12 lg:col-span-2 mt-4">
                        <!-- <a class="block" href="/">Blog</a>
                        <a class="block" href="/">Đối tác</a>
                        <a class="block" href="/">Trợ giúp</a> -->
                    </div>
                    <div class="hidden lg:block col-span-12 lg:col-span-1 mt-4">

                    </div>
                    <div class="col-span-12 lg:col-span-3 mt-4">
                        <p class="break-words">credit.vn@gmail.com</p>
                        <p>70 Nguyễn Phi Khanh,</p>
                        <p>Tân Định, Quận 1, TP.HCM</p>
                    </div>
                </div>
            </div>
            <div class="text-[12px] lg:text-[14px] text-center mt-6 lg:mt-10">
                Powered by RIO Technology @ 2023 Credit.vn
            </div>

        </div>
    </div>
    
</template>
<style lang="scss" scoped></style>
