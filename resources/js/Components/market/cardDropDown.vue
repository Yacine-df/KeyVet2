<script setup>
import { shoppingCard } from '../../Stores/ShoppingCardStore';
    import {Link} from '@inertiajs/vue3';
    defineProps({
        cardOpened:Boolean,
        products:Array
    })
</script>
<template>
    <Transition enter-active-class="transition ease-out duration-200" enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-100"
        leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <div v-if="cardOpened"
            class="absolute shadow-2xl right-0 z-10 mt-4 w-80 origin-top-right rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <ul class="text-black">
                <li v-for="(product, index) in products" :key="index" class="block px-4 py-3 text-sm hover:bg-gray-100">
                    <div class="flex items-center justify-between">
                        <span class="text-gray-500">{{ product . name }}</span>
                        <span class="realtive text-gray-600 px-2">
                            {{ product . price }} DA
                            <span @click="shoppingCard.removeFromCard(index)" class="absolute cursor-pointer right-1 px-1 text-red-400 text-sm">x</span>
                        </span>
                    </div>
                </li>
            </ul>
            <div class="w-full flex items-center justify-center py-4">
                <Link href="/market/1/card" class="text-blue-900 font-medium hover:text-blue-700">more details</Link>
            </div>
        </div>
    </Transition>
</template>
