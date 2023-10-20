<script setup>
import { shoppingCard } from '../../../Stores/ShoppingCardStore';
    defineProps({
        order:Array
    })
    
</script>
<template>
    <li v-for="(product, index) in order.products" :key="index" :href="product.href" class="py-4">
        <div class="flex justify-around">
            <div class="overflow-hidden rounded-lg bg-gray-200 hover:bg-gray-100">
                <img :src="product.imageSrc" :alt="product.imageAlt"
                    class="h-32 object-cover object-center group-hover:opacity-75" />
            </div>
            <div class="flex items-start">
                <div class="flex flex-col items-start justify-start px-2">
                    <h3 class="mt-4 text-sm text-gray-700">{{ product . name }}</h3>
                    <div class="mt-1 text-base font-medium text-gray-600">
                        Unit Price:

                        <span class="px-1">{{ product . price }}</span>

                        <span class="text-sm">DA</span>
                    </div>
                    <div class="text-green-400 pt-8">
                        <span class="text-sm">In Stock</span>
                    </div>
                </div>
                <div class="flex flex-col items-start justify-start px-4 text-black">
                    <select v-model="product.qty" class="mt-4 px-4 py-1 border border-gray-200 focus:ring-2 focus:ring-blue-500/50 rounded-lg"
                        name="qty">
                        <option>1</option>
                        <option>2</option>
                    </select>
                </div>
            </div>
            <div>
                <button @click="shoppingCard.removeFromCard(index)"  class="text-gray-400 px-2 mt-4">
                    X
                </button>
            </div>
        </div>
    </li>
</template>
