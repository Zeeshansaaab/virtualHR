import './bootstrap';
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import MasterLayout from '@/Layouts/AuthenticatedLayout.vue';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Virtual HR';
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        let parts = name.split('::')
        let type = false
        if (parts.length > 1) {
            type = parts[0]
        }
        if (type) {
            let nameVue = parts[1].split('.')[0]
            return import("../../Modules/" + parts[0] + "/Resources/assets/js/Pages/" + nameVue + ".vue")
        }else {
            return import(`./Pages/${name}`)
        }
    },
    setup({ el, App, props, plugin }) {
        const Vue = createApp({ 
            render: () => {
                return h(App, props)
            },
        });
        Vue.use(plugin)
        .mixin({ methods: { route } })
        .component('master-layout', MasterLayout)
        .use(ZiggyVue, Ziggy);
        Vue.mount(el);
        return Vue;
    },
    progress: {
        color: '#4B5563',
    },
});
