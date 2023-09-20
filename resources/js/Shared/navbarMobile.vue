<script setup>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    defineProps({mobileMenuOpen:Boolean})
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

</script>

<template>
    <div class="lg:hidden" @click="mobileMenuOpen = false">
        <Transition enter-from-class="transition duration-200 opacity-0"
            enter-to-class="transition duration-200 opacity-100" leave-from-class="transition duration-200 opacity-100"
            leave-to-class="transition duration-200 opacity-0">
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
</template>

<style lang="scss" scoped>

</style>
