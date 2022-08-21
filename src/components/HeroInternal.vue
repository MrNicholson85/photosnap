<template>
    <div class="hero-internal">
        <div class="hero-internal__Img" :style="{ backgroundImage: `url(${internalHeroImage})` }">
            <div class="hero-internal__content">
                <div class="hero-internal__sub-title"><slot name="subTitle">Module Sub Title</slot></div>
                <div class="hero-internal__title"><slot name="title">Module Title</slot></div>
                <div class="hero-internal__author"><slot name="author">Module Author</slot></div>
                <div class="hero-internal__copy"><slot name="content">Module Content</slot></div>
                <div class="hero-internal__link"><slot name="link">Module Link</slot></div>
            </div>
        </div>
        <div v-if="isMobile()" class="hero-internal__mobile-content">
            <div class="hero-internal__sub-title"><slot name="subTitle">Module Sub Title</slot></div>
            <div class="hero-internal__title"><slot name="title">Module Title</slot></div>
            <div class="hero-internal__author"><slot name="author">Module Author</slot></div>
            <div class="hero-internal__copy"><slot name="content">Module Content</slot></div>
            <div class="hero-internal__link"><slot name="link">Module Link</slot> </div>
        </div>
    </div>
</template>
<script>
    import internalHeroImage from '../assets/images/moon-of-appalacia.jpg';

    export default {
        data () {
            return {
                internalHeroImage,
            }
        },
        methods: {
            isMobile() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            );
            }
        }
    }
</script>
<style lang="scss">
    @import '../assets/styles/variable.scss';
    
    .hero-internal {
        width: $mobile;
        margin: 0 auto;

        @media(min-width: $tablet) {
            width: $desktop;
        }

        &__Img {
            height: 317px;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: -250px;
            margin: 0 auto;
            display: flex;
            align-items: center;

            @media(min-width: $tablet) {
                padding: 122px 0 112px 39px;
                height: 650px;
                background-position: -810px;
            }

            @media (min-width: $desktop) {
                background-position: initial;
            }
        }

        &__content {
            display: none;
            
            @media (min-width: $tablet) {
                display: block;
                transform: translateY(60px);
                width: 387px;
                color: $pureWhite;
            }

            @media(min-width: $desktop) {

            }
        }

        &__mobile-content {
            display: block;
            background-color: $pureBlack;
            color: $pureWhite;
            padding: 48px 29px;

            @media(min-width: $tablet) {
                display: none;
            }
        }

        &__title {
            @media(min-width: $tablet) {
                padding-right: 150px;
            }

            @media(min-width: $desktop) {
                padding-right: 0;
            }
        }

        &__author {
            display: block;
            font-size: 13px;
            color: rgba(255, 255, 255, .75);

            span {
                color: rgba(255, 255, 255, 1);
            }
        }

        &__copy {
            display: block;
            opacity: 60%;
        }

        &__link {
            div {
                display: inline-flex;
                align-items: center;
                
                p {
                    border-bottom: 1px solid transparent;
                    
                    &:hover {
                        border-bottom: 1px solid $pureWhite;
                    }
                }
            }

            img {
                
                padding-left: 10px;
            }
        }
    }
</style>