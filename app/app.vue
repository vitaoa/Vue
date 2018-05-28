<template>
    <div id="app">
        <cn-header></cn-header>
        <router-view name='main'></router-view>
        <router-view name='sidebar'></router-view>
    </div>
</template>
<script>
    import cnHeader from '@/components//header.vue';

    export default {
        name: 'app',
        components:{
            cnHeader,
        },
    }
</script>
