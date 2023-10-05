<script setup>
    import Logo from './Logo.vue';
</script>
<template>
    <footer class="w-full py-4s">
        <div class="flex flex-col items-center justify-center text-center">
            <div class="py-6 flex flex-col items-center justify-center">
                <Logo></Logo>

                <p class="mt-4 font-bold text-base">Algeria, bordj Bou Arreridj, Cmn Yachir</p>
            </div>

            <ul class="flex mb-4">
                <li class="px-1">
                    <a href="">
                        <slot name="facebook"></slot>
                    </a>
                </li>
                <li class="px-1">
                    <a href="">
                        <slot name="instagram"></slot>
                    </a>
                </li>
            </ul>

            <div class="pb-4">
                <p class="text-sm text-gray-400">Copyright © 2023 - All right reserved</p>
                <p class="text-sm text-gray-400">Created By Yacine Diaf</p>
            </div>
        </div>
    </footer>
</template>
