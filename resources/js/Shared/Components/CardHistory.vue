<script setup>

</script>
<template>
    <div class="mb-8 w-full flex items-center">
        <div class="relative w-full md:w-5/12  backdrop-blur-2xl bg-black/60 rounded-xl px-6 py-4">
            <div
                class="absolute -top-2 -left-1 z-20 flex items-center order-1 bg-blue-800 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto text-white font-semibold text-lg">
                    <slot name="number"></slot>
                </h1>
            </div>
            <h3 class="mb-3 font-bold text-white text-xl">
                <slot name="date"></slot>
            </h3>
            <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                <slot name="event"></slot>
            </p>
        </div>
    </div>
</template>
