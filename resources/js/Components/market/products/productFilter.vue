<script setup>
    defineProps({
        filterName:String,
        subCategories: Array
    })
</script>
<template>
    <div class="w-full flex flex-col">
        <h3 class="px-4 font-semibold text-gray-900">{{filterName}}</h3>
        <ul class="px-4 py-2 flex md:flex-col">
            <li v-for="(subCategory,index) in subCategories" :key="index" class="flex items-center px-2 py-1 text-gray-700">
                <input class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                    type="checkbox" name="" id="">
                <a href="#" class=" px-2">{{ subCategory }}</a>
            </li>
        </ul>
    </div>
</template>
