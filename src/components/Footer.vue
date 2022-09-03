<template>
    <div class="footer">
        <div class="container">
            <div class="footer__col-1">
                <div class="footer__logo"><img :src="footerLogo" alt="footer logo"/></div>
                <div class="footer__social-icons">
                    <div v-for="(icons, index) in footerIcons" class="footer__icons" :class="icons.title">
                        <div 
                            @mouseover="mouseOver(index)" 
                            @mouseleave="mouseOver(index)"
                            class="div"
                            :class="{ 'div-hover': hover }"
                        >
                            <div v-show="!icons.active"><img :src="icons.icon_white" alt="white-icon"/></div>
                            <div v-show="icons.active"><img :src="icons.icon_hover" alt="hover-icon"/></div>
                        </div>
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
                        <router-link to="/">GET AN INVITE</router-link> <img :src="ctaArrow" alt="cta-arrow"/>
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
                hover: false,
                footerIcons: [
                    {title: 'facebook', icon_hover: require('../assets/images/facebook.svg'), icon_white: require('../assets/images/Facebook-white.svg'), active:false},
                    {title: 'youtube', icon_hover: require('../assets/images/youtube.svg'), icon_white: require('../assets/images/youtube-white.svg'), active:false},
                    {title: 'twitter', icon_hover: require('../assets/images/twitter.svg'), icon_white: require('../assets/images/twitter-white.svg'), active:false},
                    {title: 'pintrest', icon_hover: require('../assets/images/pinterest.svg'), icon_white: require('../assets/images/pintrest-white.svg'), active:false},
                    {title: 'instagram', icon_hover: require('../assets/images/instagram.svg'), icon_white: require('../assets/images/instagram-white.svg'), active:false},
                ],
            }
        },
        methods:{
            mouseOver(index) {
                      this.footerIcons[index].active = !this.footerIcons[index].active;
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
            grid-template-columns: 100%;

            @media(min-width: $tablet) {
                grid-template-columns: 33% 33% auto;
            }
        }

        &__col-1 {
            display: grid;
            row-gap: 20px;
            justify-content: center;

            @media(min-width: $tablet) {
                row-gap: 85px;
                justify-content: left;
            }
        }

        &__social-icons {
            display: flex;
            gap: 13.33px;
            justify-content: center;

            @media(min-width: $tablet) {
                justify-content: left;

            }
        }

        &__nav--inks {
            display: grid;
            row-gap: 20px;
            justify-content: center;
            text-align: center;
            margin-top: 50px;

            @media(min-width: $tablet) {
                justify-content: left;
                text-align: left;
                margin-top: 0;
            }
            
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
            row-gap: 25px;
            justify-content: center;
            text-align: center;

            @media(min-width: $tablet) {
               text-align: right;
                row-gap: 85px;
            }
            
        }

        &__copy-rights {
            opacity: 50.25%;
        }

        &__invite-link {
            margin-top: 119px;

            @media(min-width: $tablet) {
                margin-top: 0;
            }

            a {
                color: $pureWhite;
                font-weight: bold;
                transition: ease-in-out .2s all;
                text-decoration: none;
                border-bottom: 1px transparent solid;
                font-size: 12px;
                letter-spacing: 2px;
                
                @media(min-width: $tablet) {

                }

                &:hover {
                    border-bottom: 1px $pureWhite solid;
                }
            }

            img {
                padding-left: 16px;
            }
        }
    }
</style>