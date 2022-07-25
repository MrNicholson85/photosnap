<template>
    <div class="services">
        <div v-for="item in serviceItems">
            <div class="services__items">
                <div class="services__items-icon"><img :src="item.icon"/></div>
                <h3 class="services__items-title">{{item['title']}}</h3>
                <div class="services__items-copy">{{item['copy']}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
     data () {
        return {
            serviceItems: [
                {
                    title: '100% Responsive',
                    copy: 'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.',
                    icon: require('../assets/images/responsive.svg')
                },
                {
                    title: 'No Photo Upload Limit',
                    copy: 'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
                    icon: require('../assets/images/no-limit.svg')
                },
                {
                    title: 'Available to Embed',
                    copy: 'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.',
                    icon: require('../assets/images/embed.svg')
                },
            ],
        }
    }
}
</script>
<style lang="scss">
@import '../assets/styles/variable.scss';
    .services {
        display: grid;
        grid-template-columns: 100%;
        gap: 30px;
        margin: 0 auto;
        padding: 120px 0;
        text-align: center;

        @media(min-width: $desktop) {
            grid-template-columns: repeat(3, 33%);
            width: $container;
        }

        &__items-icon {
            height: 72px;
            display: flex;
            align-self: center;
            width: 72px;
            margin: 0 auto;
            align-items: center;
            margin-bottom: 48px;
        }

        &__items-copy {
            opacity: .6;
        }
    }
</style>