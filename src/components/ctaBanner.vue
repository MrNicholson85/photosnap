<template>
    <div class="ctaBanner" :style="{ backgroundImage: `url(${backgroundImage})` }">
        <div class="ctaBanner__container">
            <div class="ctaBanner__title h1">
                We’re in beta. Get your invite today!
            </div>
            <div class="ctaBanner__inviteLink">
                <a href="#">Get an Invite</a> <img :src="arrowWhite"/>
            </div>
        </div>
    </div>
</template>
<script>
import backgroundImage from '@/assets/images/bg-beta.jpg';
import arrowWhite from '../assets/images/arrow-white.svg';

export default {
    data() {
        return {
            backgroundImage,
            arrowWhite
        }
    },
}
</script>
<style lang="scss">
@import '../assets/styles/variable.scss';

    .ctaBanner {
        position: relative;
        display: flex;
        background-size: cover;
        height: 280px;

        &::before {
            position: absolute;
            content: '';
            background: $mainAccent;
            width: 128px;
            height: 6px;
            left: 33px;
            z-index: 1;

            @media (min-width: $tablet) {
                width: 6px;
                height: 280px;
                left: 0;
            }
        }

        &::after {
            content: '';
            position: absolute;
            background-color: rgba(0,0,0, .2);
            height: 100%;
            width: 100%;
            z-index: 0;
        }
        
        &__container {
            width: $mobile;
            padding: 64px 33px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 100%;
            justify-content: space-between;
            align-items: center;
            z-index: 1;
            row-gap: 20px;

            @media (min-width: $tablet) {
                grid-template-columns: 400px auto;
                padding: 68px 0;
                width: $tablet;
                justify-content: space-around;
            }

            @media(min-width: $desktop) {
                width: $container;
            }
        }

        &__title {
            color: $pureWhite;
        }

        &__inviteLink {
            a {
                color: $pureWhite;
                text-transform: uppercase;
                text-decoration: none;
                border-bottom: 1px transparent;
                margin-right: 10px;
                transition: ease-in-out .2s all;

                &:hover {
                    border-bottom: 1px $pureWhite solid;
                }
            }
        }
    }
</style>