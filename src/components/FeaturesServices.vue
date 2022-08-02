<template>
    <div class="featServices">
        <div class="featServices__item" v-for="service in featServiceItems">
            <div class="featServices__icon"><img :src="service.icon" /></div>

            <div class="featServices__content">
                <div class="featServices__title h3">{{service.title}}</div>
                <div class="featServices__copy">{{service.copy}}</div>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            featServiceItems: [
                {title: '100% Responsive', copy: 'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.', icon: require('../assets/images/responsive.svg')},
                {title: 'No Photo Upload Limit', copy: 'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.', icon: require('../assets/images/no-limit.svg')},
                {title: 'Available to Embed', copy: 'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.', icon: require('../assets/images/embed.svg')},
                {title: 'Custom Domain', copy: 'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!', icon: require('../assets/images/custom-domain.svg')},
                {title: 'Boost Your Exposure', copy: 'Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.', icon: require('../assets/images/boost-exposure.svg')},
                {title: 'Drag & Drop Image', copy: 'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.', icon: require('../assets/images/drag-drop.svg')},
            ],
        }
    },
}
</script>
<style lang="scss">
@import '../assets/styles/variable.scss';

    .featServices {
        width: $mobile;
        margin: 0 auto;
        display: grid;
        column-gap: 30px;
        row-gap: 103px;
        grid-template-columns: 100%;
        padding:160px 0;

        @media(min-width: $tablet) {
            grid-template-columns: repeat(2, 340px);
            width: $tablet;
            column-gap: 11px;
            justify-content: center;
        }

        @media(min-width: $desktop) {
            grid-template-columns: repeat(3, 350px);
            width: $container;
        }

        &__item {
            display: grid;
            grid-template-columns: 100%;
            text-align: center;
            row-gap: 48px;
            padding: 0 32px;

            @media(min-width: $tablet) {
                padding: 0;
            }
        }

        &__icon {
            display: grid;
            align-items: center;
            width: 72px;
            height: 72px;
            margin: 0 auto;
        }

        &__content {
            display: grid;
            row-gap: 16px;
        }

        &__title {
            font-weight: bold;
        }

        &__copy {
            opacity: .6;
            line-height: 25px;
        }
    }
</style>