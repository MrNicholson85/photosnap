<template>
    <div class="hero-internal">
        <div class="hero-internal__Img" :style="{ backgroundImage: `url(${internalHeroImage})` }">
            <div class="hero-internal__content">
                <slot class="hero-internal__sub-title" name="subTitle">Module Sub Title</slot>
                <slot class="hero-internal__title" name="title">Module Title</slot>
                <slot class="hero-internal__author" name="author">Module Author</slot>
                <slot class="hero-internal__copy" name="content">Module Content</slot>
                <slot class="hero-internal__link" name="link">Module Link</slot>
            </div>
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
        &__Img {
            height: 650px;
            background-repeat: no-repeat;
            background-size: cover;
            margin: 0 auto;
            padding: 122px 112px;
            display: flex;
            align-items: center;
        }

        &__content {
            width: 406px;
            color: $pureWhite;

            h1 {
                padding-right: 4px;
            }

            p{
                display: block;
                font-size: 13px;

            }

            .copy {
                display: block;
                opacity: 60%;
            }
        }


    }
</style>