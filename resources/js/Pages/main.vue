<script setup>
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { faBars } from '@fortawesome/free-solid-svg-icons';
    import { faXmark } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

    import {
        ref
    } from 'vue'

    library.add(faBars, faXmark);

    const navigation = [{
            name: 'Company',
            href: '#'
        },
        {
            name: 'Blog',
            href: '#'
        },
        {
            name: 'Marketplace',
            href: '#'
        },
        {
            name: 'Features',
            href: '#'
        },
    ]

    const mobileMenuOpen = ref(false)
</script>
<template>
    <div class="bg-white">
        <header class="absolute inset-x-0 top-0 z-50">
            <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">

                <div class="flex lg:flex-1">
                    <a href="#" class="-m-1.5 p-1.5">
                        <img class="h-10 w-auto" src="build/assets/images/keyvet.png" alt="" />
                    </a>
                </div>
                <!--start humburger icon -->
                <div class="flex lg:hidden">
                    <button type="button"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        @click.prevent="mobileMenuOpen = true">

                        <font-awesome-icon icon="fa-solid fa-bars" class="text-3xl text-blue-500"></font-awesome-icon>

                    </button>
                </div>
                <!--end humburger icon -->

                <div class="hidden lg:flex lg:gap-x-12">
                    <a v-for="item in navigation" :key="item.name" :href="item.href"
                        class="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500">{{ item . name }}</a>
                </div>


                <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" class="text-sm p-2 font-semibold leading-6 text-gray-900 hover:text-blue-500">
                        Register
                    </a>
                    <a href="#"
                        class="text-sm leading-8 rounded-md bg-blue-400 px-3 py-1 font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                        Log in
                        <span aria-hidden="true">&rarr;
                        </span>
                    </a>
                </div>
            </nav>
            <div class="lg:hidden" @click="mobileMenuOpen = false">
                <Transition
                enter-from-class="transition duration-200 opacity-0"
                enter-to-class="transition duration-200 opacity-100"
                leave-from-class="transition duration-200 opacity-100"
                leave-to-class="transition duration-200 opacity-0"
                >
                    <div v-if="mobileMenuOpen"
                        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div class="flex items-center justify-between">
                            <a href="#" class="-m-1.5 p-1.5">
                                <img class="h-8 w-auto" src="build/assets/images/keyvet.png" alt="" />
                            </a>
                            <button @click="mobileMenuOpen = false" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                                
                                <font-awesome-icon icon="fa-solid fa-xmark" class="text-3xl text-blue-500"></font-awesome-icon>

                            </button>
                        </div>
                        <div class="mt-6 flow-root">
                            <div class="-my-6 divide-y divide-gray-500/10">
                                <div class="space-y-2 py-6">
                                    <a v-for="item in navigation" :key="item.name" :href="item.href"
                                        class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item . name }}</a>
                                </div>
                                <div class="py-6">
                                    <a href="#"
                                        class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log
                                        in
                                    </a>
                                    <a href="#"
                                        class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        Register
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </header>

        <div class="relative isolate px-6 pt-14 lg:px-8">
            <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true">
                <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#2AAADE] to-[#2aaade] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div>
            <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div class="text-center">

                    <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        <img class="w-auto" src="build/assets/images/keyvet.png" alt="" />
                    </h1>

                    <p class="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt.
                        Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                    <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div
                            class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Announcing our next round of funding. <a href="#"
                                class="font-semibold text-blue-600"><span class="absolute inset-0"
                                    aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true">
                <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#2AAADE] to-[#2aaade] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div>
        </div>
    </div>
</template>
<style>
    
</style>
