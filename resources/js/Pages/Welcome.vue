<script setup>
import { Head, Link } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Welcome" />
    <div class="container">
        <div class="row gap-4">
            <div class="col6">
                <Link :href="route('login')">Login</Link>
            </div>
            <div class="col-6">
                <Link :href="route('register')">Register</Link>
            </div>
        </div>
    </div>
</template>
