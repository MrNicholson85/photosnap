<template>
    <div class="footer">
        <div class="container">
            <div class="footer__col-1">
                <div class="footer__logo"><img :src="footerLogo"/></div>
                <div class="footer__social-icons">
                    <ul>
                        <li><img :src="fbIcon"/></li>
                    </ul>
                </div>
            </div>
            <div class="footer__col-2">
                <div class="footer__nav">
                    <div class="footer__nav--inks" :class="[navToggler ? 'navbar-nav--nav-close' : 'navbar-nav--nav-open']">
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
                fbIcon
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
        }

        &__col-2 {

        }

        &__col-3 {
            text-align: right;
        }
    }
</style>