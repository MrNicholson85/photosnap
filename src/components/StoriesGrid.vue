<template>
    <div class="storiesGrid">
        <div v-for="storyItem in storiesItems" class="storiesGrid__item" :style="{ backgroundImage: `url(${storyItem.icon})` }">
            <div class="storiesGrid__content">
                <div class="storiesGrid__content-date">{{ storyItem.date }}</div>
                <div class="storiesGrid__content-title">{{ storyItem.title }}</div>
                <div class="storiesGrid__content-author">by {{ storyItem.author }}</div>
                <div class="storiesGrid__content-divider"></div>
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
                {date: 'April 16th 2020', title: 'The Mountains', author: 'John Appleseed', icon: require('../assets/images/mountains.jpg')},
                {date: 'April 14th 2020', title: 'Sunset Cityscapes', author: 'Benjamin Cruz', icon: require('../assets/images/cityscapes.jpg')},
                {date: 'April 11th 2020', title: '18 Days Voyage', author: ' Alexei Borodin', icon: require('../assets/images/18-days-voyage.jpg')},
                {date: 'April 9th 2020', title: 'Architecturals', author: 'Samantha Brooke', icon: require('../assets/images/architecturals.jpg')},

                {date: 'April 7th 2020', title: 'World Tour 2019', author: 'Timothy Wagner', icon: require('../assets/images/world-tour.jpg')},
                {date: 'April 3rd 2020', title: 'Unforeseen Corners', author: 'William Malcolm', icon: require('../assets/images/unforeseen-corners.jpg')},
                {date: 'March 29th 2020', title: 'King on Africa: Part II', author: 'Tim Hillenburg', icon: require('../assets/images/king-on-africa.jpg')},
                {date: 'March 21th 2020', title: 'The Trip to Nowhere', author: 'Felicia Rourke', icon: require('../assets/images/trip-to-nowhere.jpg')},

                {date: 'March 19th 2020', title: 'Rage of The Sea', author: 'Mohammed Abdul', icon: require('../assets/images/rage-of-the-sea.jpg')},
                {date: 'March 16th 2020', title: 'Running Free', author: 'Michellez', icon: require('../assets/images/running-free.jpg')},
                {date: 'March 11th 2020', title: 'Behind the Waves', author: 'Lamarr Wilson', icon: require('../assets/images/behind-the-waves.jpg')},
                {date: 'March 9th 2020', title: 'Calm Waters', author: 'Samantha Brooke', icon: require('../assets/images/calm-waters.jpg')},

                {date: 'March 5th 2020', title: 'The Mountains', author: 'Benjamin Cruz', icon: require('../assets/images/milky-way.jpg')},
                {date: 'March 4th 2020', title: 'Sunset Cityscapes', author: 'Mohammed Abdul', icon: require('../assets/images/dark-forest.jpg')},
                {date: 'March 1st 2020', title: '18 Days Voyage', author: 'Michelle', icon: require('../assets/images/somwarpet.jpg')},
                {date: 'February 25th 2020', title: 'Architecturals', author: 'William Malcolm', icon: require('../assets/images/land-of-dreams.jpg')},
            ],
            arrowWhite
        }
    }
}
</script>
<style lang="scss">
    @import '../assets/styles/variable.scss';

    .storiesGrid {
        display: grid;
        grid-template-columns: 100%;
        margin: 0 auto;

        @media(min-width: $desktop) {
            grid-template-columns: repeat(4, 25%);
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
            z-index: 1;
            cursor: pointer;

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