<script setup>
    import Layout from '../Shared/Layout.vue';
    import commentArticle from '../Components/comments/comment-article.vue';
    import commentForm from '../Components/comments/comment-form.vue';
    import backLink from '../Components/backLink.vue';
    import inventory from '../products.json';
    import { shoppingCard } from '../Stores/ShoppingCardStore';

    const product = inventory.products[0];
</script>
<template>
    <Layout>
        <template #content>
            <div class="w-full px-6 py-4 bg-white rounded-lg border-2 border-gray-50 shadow-lg text-black">
                
                <backLink url="/products"></backLink>

                <h1 class="font-bold text-3xl py-6 text-black">Product Details</h1>

                <div class="w-full flex-col flex md:flex-row justify-between">
                    <section class="md:w-5/12">
                        
                        <main class="px-4 border-2 rounded-lg">
                            <img :src="product.imageSrc" alt="">
                        </main>
                        <div class="mt-2 border-2 rounded-lg">
                            <ul class="flex items-center">
                                <li class="opacity-60 hover:opacity-100 px-2">
                                    <img :src="product.imageSrc" alt="">
                                </li>
                                <li class="opacity-60 hover:opacity-100 px-2">
                                    <img :src="product.imageSrc" alt="">
                                </li>
                                <li class="opacity-60 hover:opacity-100 px-2">
                                    <img :src="product.imageSrc" alt="">
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section class="md:w-3/5 py-4 md:px-10 flex flex-col justify-between">
                        <header>
                            <h1 class="font-bold text-4xl">Lorem ipsum dolor sit amet.</h1>
                            <h2 class="py-2 text-gray-500 font-medium">
                                By
                                <a href="#" class="text-indigo-500 px-1">Zoetis company.</a>
                            </h2>
                            <Link href="/" class="px-3 py-1 border border-blue-300 rounded-full text-blue-300 text-xs uppercase font-semibold"
                                  style="font-size: 10px">
                                  Animals
                            </Link>
                        </header>
                        <div class="py-4 md:py-0 ">
                            <div>
                                <h2 class="text-4xl font-medium text-indigo-500 rounded-lg">
                                    {{ product . price }}
                                    <span class="text-xs">Da</span>
                                </h2>

                            </div>
                        </div>
                        <div>
                            <h1 class="text-3xl font-medium py-4">Description</h1>
                            <p class="md:px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tempore
                                eligendi adipisci architecto ratione ex distinctio, quod, tenetur facere impedit laborum
                                exercitationem error saepe in laudantium reiciendis soluta, qui quas!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae voluptatibus
                                maiores perspiciatis illum consequatur dicta, quae modi ullam quaerat,
                                aspernatur accusamus mollitia qui! Corporis culpa possimus quis. Quo, aut.
                            </p>
                        </div>
                        <div class="mt-10">
                            <button @click="shoppingCard.addToCard(product);" class="w-full py-3 px-4 text-white font-medium text-xl bg-indigo-500 hover:bg-indigo-400 rounded-lg">Add
                                to cart</button>
                        </div>
                    </section>
                </div>
                <div class="mt-10">

                   <h1 class="font-medium text-3xl py-4">Comments</h1> 

                <!-- {{-- comments --}} -->

                    <commentArticle></commentArticle>
                    <commentArticle></commentArticle>

                <!-- {{--comment form --}} -->

                    <commentForm></commentForm>

                </div>
            </div>
        </template>
    </Layout>
</template>
