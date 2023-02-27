<script>
import { ref, onMounted } from 'vue';
import MiniSidebar from '@/Components/Layout/MiniSidebar.vue';
import Header from '@/Components/Layout/Header.vue';
import BreadCrumb from '@/Components/Layout/BreadCrumb.vue';
import Sidebar from '@/Components/Layout/Sidebar.vue';
export default{
    components: {MiniSidebar, Header, BreadCrumb, Sidebar}
}
// const showingNavigationDropdown = ref(false);
</script>

<template>
    <mini-sidebar></mini-sidebar>
    <div class="nk-main">
        <div class="nk-wrap">
            <Header/>
            <Sidebar/>
            <div class="nk-content pt-1">
                <div class="container-fluid">
                    <div class="nk-content-inner">
                        <div class="nk-content-body">
                            <BreadCrumb/>
                            <slot/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>