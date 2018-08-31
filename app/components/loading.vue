<template>
    <div class="loading">
        <span><img src="images/running.gif" alt=""></span>
    </div>
</template>

<script>
    export default {
        name: 'loading',
        data () {
            return {}
        },
    }
</script>

<style scoped>
    .loading{
        position: fixed;
        top:0;
        left:0;
        z-index:121;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.3);
        display: table;
        vertical-align: middle;
        text-align: center;
    }
    .loading span{
        display: table-cell;
        vertical-align: middle;
    }
</style>
