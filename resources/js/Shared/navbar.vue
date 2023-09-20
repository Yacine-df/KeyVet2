<script setup>
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
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">

        <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5">
                <img class="h-10 w-auto" src="build/assets/images/keyvet.png" alt="" />
            </a>
        </div>
        <!--start humburger icon -->
        <div class="flex lg:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
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
</template>

<style lang="scss" scoped>

</style>
