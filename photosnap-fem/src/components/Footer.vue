<template>
    <div class="footer">
        <div class="container">
            <div class="footer__col-1">
                <div class="footer__logo"><img :src="footerLogo"/></div>
                <div class="footer__social-icons">
                    <div v-for="icons in footerIcons">
                        <img :src="icons.icon"/>
                    </div>
                </div>
            </div>
            <div class="footer__col-2">
                <div class="footer__nav">
                    <div class="footer__nav--inks">
                        <router-link to="/">Home</router-link>
                        <router-link :to="{ name: 'Stories' }">Stories</router-link>
                        <router-link :to="{ name: 'Features'}">Features</router-link>
                        <router-link :to="{ name: 'Pricing'}">Pricing</router-link>
                    </div>
                </div>
            </div>
            <div class="footer__col-3">
                <div class="footer__content">
                    <div class="footer__invite-link">
                        GET AN INVITE <img :src="ctaArrow"/>
                    </div>
                    <div class="footer__copy-rights">
                        Copyright 2019. All Rights Reserved
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import footerLogo from '../assets/images/photosnap-white.svg';
    import ctaArrow from '../assets/images/arrow-white.svg';
    import fbIcon from '../assets/images/facebook.svg';

    export default {
        data () {
            return {
                footerLogo,
                ctaArrow,
                fbIcon,
                footerIcons: [
                    {title: 'facebook', icon: require('../assets/images/facebook.svg')},
                    {title: 'youtube', icon: require('../assets/images/youtube.svg')},
                    {title: 'twitter', icon: require('../assets/images/twitter.svg')},
                    {title: 'pintrest', icon: require('../assets/images/pinterest.svg')},
                    {title: 'instagram', icon: require('../assets/images/instagram.svg')},
                ],
            }
        }
    }
</script>
<style lang="scss">
@import '../assets/styles//variable.scss';
    .footer {
        padding: 64px 0;
        background-color: $pureBlack;
        color: $pureWhite;

        .container {
            display: grid;
            grid-template-columns: 33% 33% auto;
        }

        &__col-1 {
            display: grid;
            row-gap: 85px;
        }

        &__social-icons {
            display: flex;
            gap: 13.33px
        }

        &__nav--inks {
            display: grid;
            row-gap: 20px;
            
            a {
                color: $pureWhite;
                text-decoration: none;
                text-transform: uppercase;
                opacity: 1;
                transition: all .2s ease-in-out;
                font-size: 12px;
                letter-spacing: 2px;

                &:hover {
                    opacity: .3;
                }
            }
        }

        &__content {
            display: grid;
            row-gap: 85px;
            text-align: right;
        }
    }
</style>