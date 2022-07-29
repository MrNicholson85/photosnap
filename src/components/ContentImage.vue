<template>
    <div class="ContentImage" :class="{imgLeft: theme === 'imgLeft'}">
        <div class="ContentImage__columns">
            <div class="ContentImage__mobileImage" v-if="isMobile()">
                <slot name="mobileImage" :style="{ backgroundImage: `url(${createImage})` }"></slot>
            </div>
            <div v-if="theme !== imgLeft" class="ContentImage__right">
                <slot name="image" :style="{ backgroundImage: `url(${createImage})` }">
                </slot>
            </div>
            <div class="ContentImage__left">
                <slot class="ContentImage__title" name="title">Module Title</slot>
                <slot class="ContentImage__content" name="content">Module Content</slot>
                <slot class="ContentImage__link" name="link">Module Link</slot>
            </div>
            <div v-if="theme === imgLeft" class="ContentImage__right">
                <slot name="image" :style="{ backgroundImage: `url(${createImage})` }">
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
    
    .ContentImage {
        background-color: $pureWhite;
        color: $pureBlack;
        max-height: 690px;
        overflow: hidden;

        @media (min-width: $tablet) {
            max-height: 600px;
        }

        &__mobileImage {
            div {
                background-size: contain;
                height: 271px;
            }
        }

        &.imgLeft {
            .ContentImage__columns {
                grid-template-columns: 830px auto;

                a {
                    color: $pureBlack;
                }

                .ContentImage__right {
                    div {
                        max-height: 271px;
                        background-size: contain;
                        width: 100%;
                        background-repeat: no-repeat;

                        @media (min-width: $tablet) {
                            max-height: 690px;
                        }
                    }
                }
            }
        }

        &__columns {
            display: block;
            width: $desktop;
            margin: 0 auto;
            align-items: center;

            @media (min-width: $tablet) {
                 display: grid;
                grid-template-columns: 610px auto;
            }
        }

        &__right {
            position: relative;

            div {
                height: 600px;
            }
        }

        &__left {
            position: relative;
            padding: 72px 31px;

            @media(min-width: $tablet) {
                padding: 0 111px;
            }

            h1 {
                display: block;
                width: 275px;
                margin-top: 0;

                @media(min-width: $tablet) {
                    width: 387px;
                }
            }

            p {
                display: block;
                width: 327px;
                margin-bottom: 48px;
            }

            a {
                display: flex;
                gap: 18px;
                color: $pureBlack;
                font-size: 12px;
                letter-spacing: 2px;
                text-decoration: none;
                
                div {
                    border-bottom: transparent;
                    transition: all .2s ease-in-out;

                    &:hover {
                        border-bottom: 1px solid $pureBlack;
                    }
                 }
            }
        }

        &__link {
            div {
                border-bottom: transparent;
                transition: all .2s ease-in-out;

                &:hover {
                    border-bottom: 1px solid $pureBlack;
                }
            }
        }
    }
</style>