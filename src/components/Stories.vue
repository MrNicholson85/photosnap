<template>
    <div class="stories">
        <div v-for="storyItem in storiesItems" class="stories__item" :style="{ backgroundImage: `url(${storyItem.icon})` }">
            <div class="stories__content">
                <div class="stories__content-title">{{ storyItem.title }}</div>
                <div class="stories__content-author">by {{ storyItem.author }}</div>
                <div class="stories__content-divider"></div>
                <a href="">Read Story <img :src="arrowWhite"/></a>
            </div>
        </div>
    </div>
</template>
<script>
import arrowWhite from '../assets/images/arrow-white.svg';

export default {
    data () {
        return {
            storiesItems: [
                {title: 'The Mountains', author: 'John Appleseed', icon: require('../assets/images/mountains.jpg')},
                {title: 'Sunset Cityscapes', author: 'Benjamin Cruz', icon: require('../assets/images/cityscapes.jpg')},
                {title: '18 Days Voyage', author: ' Alexei Borodin', icon: require('../assets/images/18-days-voyage.jpg')},
                {title: 'Architecturals', author: 'Samantha Brooke', icon: require('../assets/images/architecturals.jpg')},
            ],
            arrowWhite
        }
    }
}
</script>
<style lang="scss">
    @import '../assets/styles/variable.scss';

    .stories {
        display: grid;
        grid-template-columns: 100%;
        margin: 0 auto;

        @media(min-width: $tablet) {
            grid-template-columns: repeat(2, 50%);
        }
 
        @media(min-width: $desktop) {
            grid-template-columns: repeat(5, 25%);
            width: $desktop;
        }


        &__item {
            position: relative;
            height: 375px;
            background-size: cover;
            background-repeat: no-repeat;
            display: flex;
            align-items: self-end;
            border-bottom: none;
            transition: all .2s ease-in-out;

            @media(min-width: $tablet) {
                height: 500px;
            }

            &:hover {
                    transform: translateY(-24px);
                &::after {
                    content: "";
                    position: absolute;
                    height: 6px;
                    background: $mainAccent;
                    width: 100%;
                    z-index: 2;
                }
            }

            &::before {
                content: "";
                background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0.27%, rgba(0, 0, 0, 0.661222) 100%);
                height: 350px;
                width: 100%;
                position: absolute;
                z-index: 1;
            }
        }

        &__content {
            width: 100%;
            padding: 40px;
            color: $pureWhite;
            position: relative;
            z-index: 2;

            @media(min-width: $tablet) {

            }

            &-title {
                font-size: 18px;
                line-height: 25px;
            }

            &-author {
                font-size: 13px;
            }

            &-divider {
                width: 100%;
                height: 2px;
                background: #FFFFFF;
                opacity: 0.25;
                margin-bottom: 20px;
                margin-top: 16px;
            }

            a {
                display: flex;
                justify-content: space-between;
                font-size: 12px;
                color: $pureWhite;
                text-decoration: none;
                text-transform: uppercase;
                letter-spacing: 2px;
                align-items: center;
            }
        }
    }
</style>