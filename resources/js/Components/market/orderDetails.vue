<script setup>
import orderedItem from './orderedItem.vue';
    defineProps({
        order:Object
    })
    
</script>
<template>
    <div class="bg-gray-50 text-black px-6 rounded-lg py-4">
        <h1 class="py-4 font-medium">Order summary</h1>

            <orderedItem :products="order.products"></orderedItem>
            
        <div class="flex items-center justify-between px-4">
            <span class="font-bold">Discount</span>
            <span class="font-medium text-sm">{{ order.discount }}%</span>
        </div>
        <div class="flex items-center justify-between px-4 py-2">
            <span class="font-bold text-xl">Total</span>
            <span class="font-medium text-xl">{{ order.total }} Da</span>
        </div>
        <div class="px-4 py-2 w-full">
            <button class="py-2 bg-indigo-600 w-full rounded-lg text-white font-medium">Checkout</button>
        </div>
    </div>
</template>
