<template>
    <UsersSidebar v-if="module == 'users'"/>
    <!-- <RolesSidebar v-if="module == 'users'"/> -->
    <CoreSidebar v-else/>
</template>
<script>
import UsersSidebar from 'modules/Users/Resources/assets/js/Components/Layout/Sidebar.vue'
import CoreSidebar from '@/Components/Layout/CoreSidebar.vue';
export default{
    components:{CoreSidebar, UsersSidebar},
    computed:{
        module(){
            return this.$page.props.ziggy.module;
        }
    }
}
</script>