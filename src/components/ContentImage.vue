<template>
    <div class="ContentImage" :class="{imgLeft: theme === 'imgLeft'}">
        <div class="ContentImage__columns">
            <div v-if="theme !== imgLeft" class="ContentImage__right">
                <slot name="image">
                   <img :src="createImage" />
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
    }
</script>
<style lang="scss">
    @import '../assets/styles/variable.scss';
    
    .ContentImage {
        background-color: $pureWhite;
        color: $pureBlack;
        max-height: 600px;
        overflow: hidden;

        &.imgLeft {
            .ContentImage__columns {
                grid-template-columns: 830px auto;

                a {
                    color: $pureBlack;
                }
            }
        }

        &__columns {
            display: grid;
            grid-template-columns: 610px auto;
            width: $desktop;
            margin: 0 auto;
            align-items: center;
        }

        &__right {
            position: relative;

            img {
                object-fit: cover;
            }
        }

        &__left {
            position: relative;
            padding: 0 111px;

            h1 {
                display: block;
                width: 387px;
                margin-top: 0;
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