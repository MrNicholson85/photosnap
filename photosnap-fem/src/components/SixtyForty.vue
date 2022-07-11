<template>
    <div class="SixtyForty" :class="{imgLeft: theme === 'imgLeft'}">
        <div class="SixtyForty__columns">
            <div class="SixtyForty__left">
                <slot class="SixtyForty__title" name="title">Module Title</slot>
                <slot class="SixtyForty__content" name="content">Module Content</slot>
                <slot class="SixtyForty__link" name="link">Module Link</slot>
            </div>
            <div class="SixtyForty__right">
                <slot name="image">
                   <img :src="createImage" />
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
    
    .SixtyForty {
        background-color: $pureBlack;
        color: $pureWhite;
        max-height: 650px;
        overflow: hidden;

        &__columns {
            display: grid;
            grid-template-columns: 610px auto;
            width: $desktop;
            margin: 0 auto;
            align-items: center;

            &::before {
                content: '';
                position: absolute;
                left: 0;
                width: 6px;
                height: 304px;
                background: $mainAccent;
            }
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