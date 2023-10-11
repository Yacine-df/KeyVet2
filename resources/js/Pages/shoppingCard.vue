<script setup>
import Layout from '../Shared/Layout.vue';
import productItemCard from '../Components/market/productItemCard.vue';
import orderDetails from '../Components/market/orderDetails.vue';
import { shoppingCard } from '../Stores/ShoppingCardStore';

const products = shoppingCard.products;

</script>
<template>
    <Layout>
        <template #content>
            <div class="w-full px-6 py-4 bg-white rounded-lg border-2 border-gray-50 shadow-lg">
                <h1 class="font-bold text-3xl py-6 text-black">Card Details</h1>
                <div class="w-full flex-col flex md:flex-row justify-between">
                    <section class="md:w-3/5 py-4">
                        <ul>
                            <productItemCard :products="products"></productItemCard>
                        </ul>
                    </section>
                    <section class="md:w-5/12">
                            <orderDetails :products="products"></orderDetails>
                    </section>
                </div>
           </div>
        </template>
    </Layout>
</template>