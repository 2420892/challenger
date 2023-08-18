<template>
    <div class="lead">
        Copyright &copy; {{currentyear}}
    </div>
</template>

<script>
    export default {
        data(){
            return{
                currentyear:new Date().getFullYear()
            }
        }
    }
</script>

<style scoped>

</style>