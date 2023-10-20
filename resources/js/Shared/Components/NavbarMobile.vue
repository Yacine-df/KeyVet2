<script setup>
import Logo from './Logo.vue';
import { Link } from '@inertiajs/vue3';

defineProps({
    mobileMenuOpen:Boolean,
    navigation:Object
})


</script>

<template>
    <div class="lg:hidden">

        <Transition enter-from-class="transition duration-200 opacity-0"
            enter-to-class="transition duration-200 opacity-100" leave-from-class="transition duration-200 opacity-100"
            leave-to-class="transition duration-200 opacity-0">
            <div v-if="mobileMenuOpen"
                class="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    
                    <Logo></Logo>
                    
                    <div>
                        <slot name="HumbergerIcon"></slot>

                    </div>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <Link v-for="item in navigation" :key="item.name" :href="item.href"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                {{ item . name }}
                            </Link>
                        </div>
                        <div class="py-6">

                            <Link href="#"
                                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log
                                in
                            </Link>
                            <Link href="#"
                                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                Register
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

