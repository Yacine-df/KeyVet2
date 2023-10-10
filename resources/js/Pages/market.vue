<script setup>
    import Layout from '../Shared/Layout.vue';
    import {
        library
    } from '@fortawesome/fontawesome-svg-core';
    import {
        FontAwesomeIcon
    } from '@fortawesome/vue-fontawesome';
    import {
        faCartShopping
    } from '@fortawesome/free-solid-svg-icons';


    library.add(faCartShopping);

    const products = [{
            id: 1,
            name: 'Earthen Bottle',
            href: '#',
            price: '4800 DA',
            imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/1/ZE/FT/AT/317547/milkogen-homoeopathy-veterinary-medicine-500x500.png',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
            id: 2,
            name: 'Nomad Tumbler',
            href: '#',
            price: '3500 DA',
            imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/1/ZE/FT/AT/317547/milkogen-homoeopathy-veterinary-medicine-500x500.png',
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
            id: 3,
            name: 'Focus Paper Refill',
            href: '#',
            price: '8900 DA',
            imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/1/ZE/FT/AT/317547/milkogen-homoeopathy-veterinary-medicine-500x500.png',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
            id: 4,
            name: 'Machined Mechanical Pencil',
            href: '#',
            price: '3500 DA',
            imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/1/ZE/FT/AT/317547/milkogen-homoeopathy-veterinary-medicine-500x500.png',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        {
            id: 5,
            name: 'Focus Paper Refill',
            href: '#',
            price: '8900 DA',
            imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/1/ZE/FT/AT/317547/milkogen-homoeopathy-veterinary-medicine-500x500.png',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        // More products...
    ]
</script>

<template>
    <Layout>
        <template #content>
            <div class="relative grid grid-cols-12 gap-2">
                <aside class="col-span-12 md:col-span-2 bg-white text-black rounded-lg shadow-md md:h-96">
                    <h1 class="text-xl py-4 text-black font-bold text-center">Filters</h1>
                    <!-- Filters -->
                    <div class="w-full flex flex-col">
                        <h3 class="px-4 font-semibold text-gray-900">Categories</h3>
                        <ul class="px-4 py-2 flex md:flex-col">
                            <li class="flex items-center px-2 py-1 text-gray-700">
                                <input
                                    class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                    type="checkbox" name="" id="">
                                <a href="#" class=" px-2">covid</a>
                            </li>
                            <li class="flex items-center px-2 py-1 text-gray-700">
                                <input
                                    class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                    type="checkbox" name="" id="">
                                <a href="#" class=" px-2">collis</a>
                            </li>
                            <li class="flex items-center px-2 py-1 text-gray-700">
                                <input
                                    class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                    type="checkbox" name="" id="">
                                <a href="#" class=" px-2">vaccin</a>
                            </li>
                        </ul>
                    </div>
                    <div class="w-full flex flex-col">
                        <h3 class="px-4 font-semibold text-gray-900">Product nature</h3>
                        <ul class="px-4 py-2 flex md:flex-col">
                            <li class="flex items-center px-2 py-1 text-gray-700">
                                <input
                                    class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                    type="checkbox" name="" id="">
                                <a href="#" class=" px-2">vaccine</a>
                            </li>
                            <li class="flex items-center px-2 py-1 text-gray-700">
                                <input
                                    class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                    type="checkbox" name="" id="">
                                <a href="#" class=" px-2">solid</a>
                            </li>
                            <li class="flex items-center px-2 py-1 text-gray-700">
                                <input
                                    class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                    type="checkbox" name="" id="">
                                <a href="#" class=" px-2">serip</a>
                            </li>
                        </ul>
                    </div>
                </aside>
                <div class="col-span-12 md:col-span-10 rounded-lg">
                    <section class="w-full bg-white rounded-lg px-6 shadow-2xl">
                        <h1 class="text-3xl py-6 text-black font-bold">Our Products</h1>
                        <div class="md:flex items-center justify-between py-4 px-4">
                            <div class="flex items-center justify-center py-1">
                                <label for="search"></label>
                                <input class="bg-gray-100 rounded-full py-2 px-6 text-black" type="text"
                                    placeholder="search for product ...">
                            </div>
                            <!-- shoppin card -->
                            <div class="py-4">
                               <a href="" class="flex items-center justify-center" @click.prevent="console.log('clicked')">
                                <h1 class="font-bold text-blue-900 px-2">Shopping Card</h1>
                                    <font-awesome-icon icon="fa-solid fa-cart-shopping" class="text-xl text-blue-900"></font-awesome-icon>
                               </a>
                            </div>
                            <!-- end shopping card -->
                        </div>
                        <div
                            class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 py-2">
                            <a v-for="product in products" :key="product.id" :href="product.href" class="group">
                                <div class="w-full overflow-hidden rounded-lg bg-gray-200 hover:bg-gray-100">
                                    <img :src="product.imageSrc" :alt="product.imageAlt"
                                        class="h-full w-full     object-cover object-center group-hover:opacity-75" />
                                </div>
                                <h3 class="mt-4 text-sm text-gray-700">{{ product . name }}</h3>
                                <p class="mt-1 text-lg font-medium text-gray-900">{{ product . price }}</p>
                            </a>
                        </div>
                    </section>
                </div>
            </div>
            <div v-if="false"
                class="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    dfdss
                </div>
            </div>
        </template>
    </Layout>
</template>
