<template>
    <div class="backdrop" @click="closeModal">
        <div class="modal" :class="{sale: theme === 'sale'}">
            <slot></slot>
            <div class="action">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['theme'],
        methods: {
            closeModal() {
                this.$emit('close')
            }
        }
    }
</script>
<style lang="scss" scoped> 
    .modal {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;

        &.sale {
            background-color: red;
            color: white;
        }
    }

    .backdrop {
        top: 0;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }


</style>