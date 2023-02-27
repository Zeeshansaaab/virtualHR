<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';

const props = defineProps({
    align: {
        default: 'right',
    },
    width: {
        default: '48',
    },
    contentClasses: {
        default: () => ['py-1', 'bg-white'],
    },
    links: array
});

const closeOnEscape = (e) => {
    if (open.value && e.key === 'Escape') {
        open.value = false;
    }
};

onMounted(() => document.addEventListener('keydown', closeOnEscape));
onUnmounted(() => document.removeEventListener('keydown', closeOnEscape));

const widthClass = computed(() => {
    // return {
    //     48: 'w-48',
    // }[props.width.toString()];
});

// const alignmentClasses = computed(() => {
//     if (props.align === 'left') {
//         return 'origin-top-left left-0';
//     } else if (props.align === 'right') {
//         return 'origin-top-right right-0';
//     } else {
//         return 'origin-top';
//     }
// });

const open = ref(false);
</script>

<template>
    <li class="nk-menu-item has-sub">
        <transition enter-active-class="transition ease-out duration-200"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95">
            <ul class="nk-menu-sub">
                <li class="nk-menu-item" v-for="(value, index) in links" :key="index">
                    <a :href="value.route" class="nk-menu-link" data-original-title="" title="">
                        <span class="nk-menu-text">{{ value.title }}</span>
                    </a>
                </li>
            </ul><!-- .nk-menu-sub -->
        </transition>
    </li>
</template>
