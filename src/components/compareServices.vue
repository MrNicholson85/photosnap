<template>
    <div class="compareServices">
        <div class="compareServices__titles">
            <span>The Features</span>
            <span>Basic</span>
            <span>Pro</span>
            <span>Business</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
@import '../assets/styles/variable.scss';

.compareServices {
    width: $mobile;
    margin: 0 auto;
    padding-top: 80px;

    @media(min-width: $tablet) {
        width: 731px;
    }

    &__titles {
        display: grid;
        grid-template-columns: auto 140px 140px 140px;
        border-bottom: $pureBlack 1px solid;
        padding-bottom: 23px;
    }
}
</style>