<template>
    <div class="nk-sidebar"  style="width: 15rem;"  data-content="sidebarMenu">
        <div class="nk-sidebar-inner" data-simplebar="init"><div class="simplebar-wrapper" style="margin: -24px -28px -32px;"><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style="right: 0px; bottom: 0px;"><div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style="height: auto; overflow: hidden scroll;"><div class="simplebar-content" style="padding: 24px 28px 32px;">
            <ul class="nk-menu nk-menu-md">
                <li class="nk-menu-heading">
                    <h6 class="overline-title text-primary-alt">Dashboards</h6>
                </li><!-- .nk-menu-heading -->
                <li class="nk-menu-item">
                    <Link :href="route('dashboard')" class="nk-menu-link" data-original-title="" title="">
                        <span class="nk-menu-icon"><em class="icon ni ni-dashboard"></em></span>
                        <span class="nk-menu-text">Main page</span>
                    </Link>
                </li><!-- .nk-menu-item -->
                <li class="nk-menu-item has-sub">
                    <a href="#" class="nk-menu-link nk-menu-toggle" data-original-title="" title="">
                        <span class="nk-menu-icon"><em class="icon ni ni-tile-thumb"></em></span>
                        <span class="nk-menu-text">Projects</span>
                    </a>
                    <ul class="nk-menu-sub">
                        <li class="nk-menu-item">
                            <a href="html/project-card.html" class="nk-menu-link" data-original-title="" title=""><span class="nk-menu-text">Project Cards</span></a>
                        </li>
                        <li class="nk-menu-item">
                            <a href="html/project-list.html" class="nk-menu-link" data-original-title="" title=""><span class="nk-menu-text">Project List</span></a>
                        </li>
                    </ul><!-- .nk-menu-sub -->
                </li><!-- .nk-menu-item -->
            </ul><!-- .nk-menu -->
        </div></div></div></div><div class="simplebar-placeholder" style="width: auto; height: 1090px;"></div></div><div class="simplebar-track simplebar-horizontal" style="visibility: hidden;"><div class="simplebar-scrollbar" style="width: 0px; display: none;"></div></div><div class="simplebar-track simplebar-vertical" style="visibility: visible;"><div class="simplebar-scrollbar" style="height: 28px; transform: translate3d(0px, 0px, 0px); display: block;"></div></div></div>
    </div>
</template>
<script>
import { Link } from '@inertiajs/vue3';
import ApplicationLogo from '@/Components/ApplicationLogo.vue'
export default{
    components: {Link, ApplicationLogo},
    mounted(){
        window.NioApp.TGL.ddmenu();
    }
}
</script>