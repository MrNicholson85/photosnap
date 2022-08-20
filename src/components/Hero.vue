<template>
    <div class="hero" :class="{imgLeft: theme === 'imgLeft'}">
        <div class="hero__mobileImg" v-if="isMobile()" :style="{ backgroundImage: `url(${createImage})` }">
        </div>
        <div class="hero__columns">
            <div class="hero__left">
                <slot class="hero__title" name="title">Module Title</slot>
                <slot class="hero__content" name="content">Module Content</slot>
                <slot class="hero__link" name="link">Module Link</slot>
            </div>
            <div class="hero__right">
                <slot name="image"  :style="{ backgroundImage: `url(${createImage})` }">
                </slot>
            </div>
        </div>
    </div>
</template>
<script>
    import createImage from '@/assets/images/create-and-share.jpg';

    export default {
        props: ['theme'],
        data () {
            return {
                createImage,
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
    
    .hero {
        display: block;
        background-color: $pureBlack;
        color: $pureWhite;
        overflow: hidden;

        @media(min-width: $tablet) {
            height: 490px;
        }

        &__mobileImg {
            display: block;
            background-size: cover;
            height: 249px;
            width: 100%;
            background-repeat: no-repeat;

            @media(min-width: $tablet) {
                display: none;
            }
        }

        &__columns {
            display: grid;
            width: $mobile;
            margin: 0 auto;
            align-items: center;

            @media(min-width: $tablet) {
                width: $tablet;
                grid-template-columns: 495px auto;
            }

            @media(min-width: $desktop) {
                width: $desktop;
                grid-template-columns: 610px auto;
            }

            
            &::before {
                position: relative;
                content: '';
                background: $mainAccent;
                width: 128px;
                height: 6px;
                left: 33px;

                @media(min-width: $tablet) {
                    position: absolute;
                    left: 0;
                    width: 6px;
                    height: 304px;
                }
            }
        }

        &__right {
            position: relative;
            display: none;

            @media(min-width: $tablet) {
                display: block;
            }

            img {
                height: 490px;
                object-fit: cover;
                width: 100%;
            }
        }

        &__left {
            position: relative;
            padding: 72px 33px;

            @media (min-width: $tablet) {
                padding: 0px 54px;
            }

            @media (min-width: $desktop) {
                padding: 0 111px;
            }

            h1 {
                display: block;
                margin-top: 0;
                margin-left: 0;
                margin-right: 0;
                width: 318px;

                @media (min-width: $tablet) {
                    width: 387px;
                }
            }

            p {
                display: block;
                
                @media (min-width: $tablet) {
                    font-size: 12px;
                    opacity: .6;
                    margin: 0;
                    margin-bottom: 48px;
                }

                @media (min-width: $desktop) {
                    font-size: 15px;
                    width: 327px;
                    margin-bottom: 48px;
                }
            }

            a {
                display: flex;
                gap: 18px;
                color: $pureWhite;
                text-decoration: none;
                font-size: 12px;
                letter-spacing: 2px;

                &:hover {
                    color: $lightGrey;
                }
            }
        }
    }
</style>