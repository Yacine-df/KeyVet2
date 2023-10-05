<script setup>
import Logo from './Logo.vue';
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

        <!-- logo goes here -->
        <div class="flex lg:flex-1">

            <Logo></Logo>

        </div>
        <!--start humburger icon -->
        <div class="flex lg:hidden">
            <slot name="HumbergerIcon"></slot>
            
        </div>
        <!--end humburger icon -->

        <div class="hidden lg:flex lg:gap-x-12">
            <a v-for="item in navigation" :key="item.name" :href="item.href"
                class="text-sm font-semibold leading-6 hover:text-blue-500">{{ item . name }}</a>
        </div>


        <div class="hidden lg:flex lg:flex-1 lg:justify-end">

             <slot name="mode"></slot>

            <a href="#" class="text-sm p-2 font-semibold leading-6 hover:text-blue-500">
                Register
            </a>
            <a href="#"
                class="text-sm leading-8 rounded-md  px-3 py-1 font-semibold  shadow-sm text-blue-500 hover:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                Log in
                <span aria-hidden="true">&rarr;
                </span>
            </a>

        </div>
    </nav>

</template>

