<script setup>
    import Navbar from './Components/Navbar.vue';
    import NavbarMobile from './Components/NavbarMobile.vue';
    import Footer from './Components/Footer.vue';
    import PolygonDesign from './PolygonDesign.vue';
    import {navigation} from '../Composables/useNavigation.js'
    import {library} from '@fortawesome/fontawesome-svg-core';
    import { faBars} from '@fortawesome/free-solid-svg-icons';
    import {faXmark} from '@fortawesome/free-solid-svg-icons';
    import {faMoon} from '@fortawesome/free-solid-svg-icons';
    import { faSun } from '@fortawesome/free-solid-svg-icons';
    import { faFacebook } from '@fortawesome/free-brands-svg-icons';
    import { faInstagram } from '@fortawesome/free-brands-svg-icons';
    import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
    import {useStorage} from '../Composables/useStorage.js'; 
    import {ref} from 'vue';
    //register icon that we need
    library.add(faBars, faXmark, faMoon, faSun,faFacebook,faInstagram);
    //navigation menu
    const mobileMenuOpen = ref(false);
    //composable for local storage
    const mode = useStorage('mode');
</script>

<template>
    <div class="transition ease-in-out delay-50 "
        :class="{
            'bg-blue-950 text-white dark:bg-blue-950 dark:text-white': mode == 'dark',
            'bg-white text-black': mode == 'light'
        }">
        <header class="absolute inset-x-0 top-0 z-20">
            
            <Navbar :navigation="navigation">

                <template #HumbergerIcon>

                    <button @click.prevent="mobileMenuOpen = true" type="button"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">

                        <font-awesome-icon icon="fa-solid fa-bars" class="text-3xl text-blue-500"></font-awesome-icon>

                    </button>

                </template>

                <template #mode>

                    <button @click.prevent="mode = 'light'" v-if="mode ==='dark'"    
                        type="button"
                        class="mx-2">

                        <font-awesome-icon  icon="fa-solid fa-sun" class="text-base text-white"></font-awesome-icon>


                    </button>
                    <button @click.prevent="mode = 'dark'" v-if="mode === 'light'"  
                        type="button"
                        class="mx-2">

                        <font-awesome-icon   icon="fa-solid fa-moon" class="text-base text-black"></font-awesome-icon>

                    </button>

                </template>

            </Navbar>

            <NavbarMobile :mobileMenuOpen="mobileMenuOpen" :navigation="navigation">

                <template #HumbergerIcon>
                    <button @click="mobileMenuOpen = false" class="-m-2.5 rounded-md p-2.5 text-gray-700">

                        <font-awesome-icon icon="fa-solid fa-xmark" class="text-3xl text-blue-500"></font-awesome-icon>

                    </button>
                </template>

            </NavbarMobile>
        </header>

        <div class="relative isolate z-10 px-6 pt-6 lg:px-8">

            <PolygonDesign class="-top-40">
                <template #polygon>
                    <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#2AAADE] to-[#2aaade] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
                    </div>
                </template>
            </PolygonDesign>


            <div class="container mx-auto px-4 py-32 sm:py-48 lg:py-32">
                <slot name="content"></slot>

            </div>

            <PolygonDesign class="md:top-[calc(100%-80%)] sm:top-[calc(100%-70rem)]">
                <template #polygon>
                    <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#2AAADE] to-[#2aaade] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
                    </div>
                </template>
            </PolygonDesign>

        </div>
    </div>
    <Footer>
        <template #facebook>
            <font-awesome-icon class="text-xl text-blue-700" icon="fa-brands fa-facebook" />
        </template>
        <template #instagram>
            <font-awesome-icon class="text-xl text-red-700" icon="fa-brands fa-instagram" />
        </template>
    </Footer>
</template>
