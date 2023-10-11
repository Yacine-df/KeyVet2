<script setup>
    import Layout from '../Shared/Layout.vue';
    import {library} from '@fortawesome/fontawesome-svg-core';
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
    import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
    import {ref} from 'vue';
    import cardDropDown from '../Components/market/cardDropDown.vue';
    import productCard from '../Components/market/productCard.vue';
    import productFilter from '../Components/market/productFilter.vue';
    import productStore from '../products.json';
    import {shoppingCard} from '../Stores/ShoppingCardStore';

    library.add(faCartShopping);

    const cardOpened = ref(false);
    const products = productStore.products;
</script>

<template>
    <Layout>
        <template #content>
            <div class="grid grid-cols-12 gap-2">
                <aside class="col-span-12 md:col-span-2 bg-white text-black rounded-lg shadow-md md:h-96">
                    <h1 class="text-xl py-4 text-black font-bold text-center">Filters</h1>
                    <!-- Filters -->
                       <productFilter filterName="Categories" :subCategories="['collis','Covid','toxic']"></productFilter>
                    
                       <productFilter filterName="Product Nature" :subCategories="['Vaccin','Liquid','serup']"></productFilter>
                    <!-- end filters -->
                </aside>
                <div class="col-span-12 md:col-span-10 rounded-lg">
                    <section class="w-full bg-white rounded-lg px-6 shadow-2xl">
                        <div class="flex items-center justify-between">
                            <h1 class="text-3xl py-6 text-black font-bold">
                                Our Products
                            </h1>
                            <!-- shoppin card -->
                            <div class="relative py-6">
                                <button href="" class="flex items-center justify-center"
                                    @click.prevent.stop="cardOpened = ! cardOpened">
                                    <h1 class="font-bold text-blue-900 px-2">Shopping Card</h1>
                                    <span v-if="shoppingCard.products.length" class="absolute flex h-2 w-2 top-4 right-0">
                                        <span
                                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                        <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-800"></span>
                                    </span>
                                    <font-awesome-icon icon="fa-solid fa-cart-shopping"
                                        class="text-xl text-blue-900"></font-awesome-icon>
                                </button>

                                <cardDropDown  v-if="shoppingCard.products.length" :cardOpened="cardOpened" :products="shoppingCard.products"></cardDropDown>
                                
                            </div>

                            <!-- end shopping card -->
                        </div>
                        <div class="md:flex items-center justify-between py-4 px-4">
                            <div class="flex items-center justify-center py-1">
                                <label for="search"></label>
                                <input class="bg-gray-100 rounded-full py-2 px-6 text-black" type="text"
                                    placeholder="search for product ...">
                            </div>

                        </div>
                        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 py-2">
                           
                            <productCard :products="products"></productCard>

                        </div>
                    </section>
                </div>

            </div>
        </template>
    </Layout>
</template>
