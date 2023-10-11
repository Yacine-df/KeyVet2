<script setup>
    defineProps({
        products:Array
    })
</script>
<template>
    <li v-for="product in products" :key="product.id" class="block px-4 py-3 text-sm">
        <div class="flex items-center justify-between py-1">
            <span class="w-4/12 text-gray-500">{{ product . name }}</span>
            <span class="w-4/12 text-gray-500">{{ product . qty }}</span>
            <span class="w-4/12text-gray-600 font-medium text-sm">{{ product . qty * product . price }}
                <span>Da</span></span>
        </div>
        <hr class="mt-1">
    </li>
</template>
