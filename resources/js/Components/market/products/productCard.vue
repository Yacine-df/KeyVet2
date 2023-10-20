<script setup>
import { Link } from '@inertiajs/vue3';
import { shoppingCard } from '../../../Stores/ShoppingCardStore';
defineProps({
    products:Object
})
</script>
<template>
    <Link v-for="(product, index) in products" :key="index" :href="/products/ + product.id" class="group">
        <div class="w-full overflow-hidden rounded-lg bg-gray-200 hover:bg-gray-100">
            <img :src="product.imageSrc" :alt="product.imageAlt"
                class="h-full w-full     object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 class="mt-4 text-sm text-gray-700">{{ product . name }}</h3>

        <div class="flex items-center justify-between">

            <p class="mt-1 text-lg font-medium text-gray-900">{{ product . price }} DA</p>

            <button @click.prevent="shoppingCard.addToCard(product)" class="text-blue-500 text-sm mt-1 font-medium">+ Add to card</button>
        </div>
    </Link>
</template>
