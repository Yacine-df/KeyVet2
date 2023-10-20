<script setup>
import { Link } from '@inertiajs/vue3';
defineProps({
    url:String
})
</script>
<template>
    <Link :href=url>
        <span class="text-blue-500 font-medium">&larr; Back</span>
    </Link>
</template>