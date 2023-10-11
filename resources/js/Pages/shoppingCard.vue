<script setup>
import Layout from '../Shared/Layout.vue';
const products = [{
            id: 1,
            name: 'Earthen Bottle',
            href: '#',
            price: 4800,
            qty:1,
            imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/1/ZE/FT/AT/317547/milkogen-homoeopathy-veterinary-medicine-500x500.png',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
            id: 2,
            name: 'Nomad Tumbler',
            href: '#',
            price: 3500,
            qty:1,
            imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/1/ZE/FT/AT/317547/milkogen-homoeopathy-veterinary-medicine-500x500.png',
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
            id: 3,
            name: 'Focus Paper Refill',
            href: '#',
            price: 8900,
            qty:1,
            imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/1/ZE/FT/AT/317547/milkogen-homoeopathy-veterinary-medicine-500x500.png',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
            id: 5,
            name: 'Focus Paper Refill',
            href: '#',
            price: 8900,
            qty:1,
            imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/1/ZE/FT/AT/317547/milkogen-homoeopathy-veterinary-medicine-500x500.png',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        // More products...
    ]
</script>
<template>
    <Layout>
        <template #content>
            <div class="w-full px-6 py-4 bg-white rounded-lg border-2 border-gray-50 shadow-lg">
                <h1 class="font-bold text-3xl py-6 text-black">Card Details</h1>
                <div class="w-full flex-col flex md:flex-row justify-between">
                    <section class="md:w-3/5 py-4">
                        <ul>
                            <li v-for="product in products" :key="product.id" :href="product.href" class="py-4">
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
                                                <select class="mt-4 px-4 py-1 border border-gray-200 focus:ring-2 focus:ring-blue-500/50 rounded-lg" name="" id="">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <button class="text-gray-400 px-2 mt-4">
                                                X
                                            </button>
                                        </div>
                                    </div>
                            </li>
                        </ul>
                    </section>
                    <section class="md:w-5/12">
                        <div class="bg-gray-50 text-black px-6 rounded-lg py-4">
                            <h1 class="py-4 font-medium">Order summary</h1>
                            <li v-for="product in products" :key="product.id" class="block px-4 py-3 text-sm">
                                <div class="flex items-center justify-between py-1">
                                    <span class="w-4/12 text-gray-500">{{ product . name }}</span>
                                    <span class="w-4/12 text-gray-500">{{ product . qty }}</span>
                                    <span class="w-4/12text-gray-600 font-medium text-sm">{{ product . qty * product . price}} <span>Da</span></span>
                                </div>
                                <hr class="mt-1">
                            </li>
                            <div class="flex items-center justify-between px-4">
                                <span class="font-bold">Discount</span>
                                <span class="font-medium text-sm">10%</span>
                            </div>
                            <div class="flex items-center justify-between px-4 py-2">
                                <span class="font-bold text-xl">Total</span>
                                <span class="font-medium text-xl">23000 da</span>
                            </div>
                            <div class="px-4 py-2 w-full">
                                <button class="py-2 bg-indigo-600 w-full rounded-lg text-white font-medium">Checkout</button>
                            </div>
                        </div>
                    </section>
                </div>
           </div>
        </template>
    </Layout>
</template>