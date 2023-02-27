<script setup>
import PageHeader from '@/Components/Layout/PageHeader.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Dashboard" />

    <master-layout>
        <PageHeader/>
        <div class="nk-block">
            <div class="card card-bordered">
                <div class="card-inner">
                    Welcome to logged in dashboard
                </div>
            </div>
        </div>
    </master-layout>
</template>
