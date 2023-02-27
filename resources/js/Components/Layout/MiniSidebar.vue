<template>
    <div class="nk-apps-sidebar is-dark">
        <div class="nk-apps-brand">
            <ApplicationLogo />
        </div>
        <div class="nk-sidebar-element">
            <div class="nk-sidebar-body">
                <div class="nk-sidebar-content" data-simplebar="init">
                    <div class="simplebar-wrapper" style="margin: 0px;">
                        <div class="simplebar-height-auto-observer-wrapper">
                            <div class="simplebar-height-auto-observer"></div>
                        </div>
                        <div class="simplebar-mask">
                            <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                                <div class="simplebar-content-wrapper" tabindex="0" role="region"
                                    aria-label="scrollable content" style="height: 100%; overflow: hidden scroll;">
                                    <div class="simplebar-content" style="padding: 0px;">
                                        <div class="nk-sidebar-menu">
                                            <!-- Menu -->
                                            <ul class="nk-menu apps-menu">
                                                <li class="nk-menu-item">
                                                    <Link :href="route('dashboard')" class="nk-menu-link" title=""
                                                        data-original-title="Core Module">
                                                        <span class="nk-menu-icon"><em
                                                                class="icon ni ni-template"></em></span>
                                                    </Link>
                                                </li><!-- .nk-menu-item -->
                                                <li class="nk-menu-item">
                                                    <Link :href="route('users', ['users'])" class="nk-menu-link" title=""
                                                        data-original-title="Users Module">
                                                        <span class="nk-menu-icon"><em
                                                                class="icon ni ni-users"></em></span>
                                                    </Link>
                                                </li><!-- .nk-menu-item -->
                                                <!-- <li class="nk-menu-hr"></li>
                                                <li class="nk-menu-item">
                                                    <a href="html/index.html" class="nk-menu-link" title=""
                                                        data-original-title="Analytics Dashboard">
                                                        <span class="nk-menu-icon"><em
                                                                class="icon ni ni-dashboard"></em></span>
                                                    </a>
                                                </li>
                                                <li class="nk-menu-item">
                                                    <a href="html/index-sales.html" class="nk-menu-link" title=""
                                                        data-original-title="Sales Dashboard">
                                                        <span class="nk-menu-icon"><em class="icon ni ni-speed"></em></span>
                                                    </a>
                                                </li>
                                                <li class="nk-menu-item">
                                                    <a href="html/index-crypto.html" class="nk-menu-link" title=""
                                                        data-original-title="Crypto Dashboard">
                                                        <span class="nk-menu-icon"><em
                                                                class="icon ni ni-bitcoin-cash"></em></span>
                                                    </a>
                                                </li>
                                                <li class="nk-menu-item">
                                                    <a href="html/index-invest.html" class="nk-menu-link" title=""
                                                        data-original-title="Invest Dashboard">
                                                        <span class="nk-menu-icon"><em
                                                                class="icon ni ni-invest"></em></span>
                                                    </a>
                                                </li>
                                                <li class="nk-menu-hr"></li>
                                                <li class="nk-menu-item">
                                                    <a href="html/apps/mailbox.html" class="nk-menu-link" title=""
                                                        data-original-title="Mailbox">
                                                        <span class="nk-menu-icon"><em class="icon ni ni-inbox"></em></span>
                                                    </a>
                                                </li>
                                                <li class="nk-menu-item">
                                                    <a href="html/apps/messages.html" class="nk-menu-link" title=""
                                                        data-original-title="Messages">
                                                        <span class="nk-menu-icon"><em class="icon ni ni-chat"></em></span>
                                                    </a>
                                                </li>
                                                <li class="nk-menu-item">
                                                    <a href="html/apps/file-manager.html" class="nk-menu-link" title=""
                                                        data-original-title="File Manager">
                                                        <span class="nk-menu-icon"><em
                                                                class="icon ni ni-folder"></em></span>
                                                    </a>
                                                </li>
                                                <li class="nk-menu-item">
                                                    <a href="html/apps/chats.html" class="nk-menu-link" title=""
                                                        data-original-title="Chats">
                                                        <span class="nk-menu-icon"><em
                                                                class="icon ni ni-chat-circle"></em></span>
                                                    </a>
                                                </li>
                                                <li class="nk-menu-item">
                                                    <a href="html/apps/calendar.html" class="nk-menu-link" title=""
                                                        data-original-title="Calendar">
                                                        <span class="nk-menu-icon"><em
                                                                class="icon ni ni-calendar"></em></span>
                                                    </a>
                                                </li>
                                                <li class="nk-menu-item">
                                                    <a href="html/apps/kanban.html" class="nk-menu-link"
                                                        data-original-title="" title="">
                                                        <span class="nk-menu-icon"><em
                                                                class="icon ni ni-template"></em></span>
                                                    </a>
                                                </li>
                                                <li class="nk-menu-hr"></li>
                                                <li class="nk-menu-item active current-page">
                                                    <a href="html/components.html" class="nk-menu-link" title=""
                                                        data-original-title="Go to Components">
                                                        <span class="nk-menu-icon"><em
                                                                class="icon ni ni-layers"></em></span>
                                                    </a>
                                                </li> -->
                                            </ul>
                                        </div>
                                        <div class="nk-sidebar-footer">
                                            <ul class="nk-menu nk-menu-md">
                                                <li class="nk-menu-item">
                                                    <a href="#" class="nk-menu-link" title="" data-original-title="Settings">
                                                        <span class="nk-menu-icon"><em class="icon ni ni-setting"></em></span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="simplebar-placeholder" style="width: auto; height: 852px;"></div>
                    </div>
                    <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
                        <div class="simplebar-scrollbar" style="width: 0px; display: none;"></div>
                    </div>
                    <div class="simplebar-track simplebar-vertical" style="visibility: visible;">
                        <div class="simplebar-scrollbar"
                            style="height: 25px; transform: translate3d(0px, 0px, 0px); display: block;"></div>
                    </div>
                </div>
                <div class="nk-sidebar-profile nk-sidebar-profile-fixed dropdown">
                    <a href="#" data-toggle="dropdown" data-offset="50,-60">
                        <div class="user-avatar">
                            <span>AB</span>
                        </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-md ml-4">
                        <div class="dropdown-inner user-card-wrap d-none d-md-block">
                            <div class="user-card">
                                <div class="user-avatar">
                                    <span>AB</span>
                                </div>
                                <div class="user-info">
                                    <span class="lead-text">Abu Bin Ishtiyak</span>
                                    <span class="sub-text text-soft">info@softnio.com</span>
                                </div>
                            </div>
                        </div>
                        <div class="dropdown-inner">
                            <ul class="link-list">
                                <li><a href="html/user-profile-regular.html"><em class="icon ni ni-user-alt"></em><span>View
                                            Profile</span></a></li>
                                <li><a href="html/user-profile-setting.html"><em
                                            class="icon ni ni-setting-alt"></em><span>Account Setting</span></a></li>
                                <li><a href="html/user-profile-activity.html"><em
                                            class="icon ni ni-activity-alt"></em><span>Login Activity</span></a></li>
                            </ul>
                        </div>
                        <div class="dropdown-inner">
                            <ul class="link-list">
                                <li><a href="#"><em class="icon ni ni-signout"></em><span>Sign out</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
export default{
    components  :{ApplicationLogo, Link},
    mounted(){
        $('.tooltip').remove();
        NioApp.BS.menutip('a.nk-menu-link');
    }
}
</script>