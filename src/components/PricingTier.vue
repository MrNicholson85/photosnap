<template>
    <div class="pricing_table">
        <div class="pricing_table__sub-toggler">
            <span>Monthly</span>
            <div class="pricing_table__sub-toggle">
                <input type="checkbox" id="switch" />
                <label for="switch">Toggle</label>
            </div>
            <span>Yearly</span>
        </div>
        <div class="pricing_table__teirs">
            <div class="pricing_table__items" 
            v-for="(teirs, key) in pricingTeir"
            :class="[key == 1 ? 'pricing_table__items--feat' : '']">
            <div>
                <h2>{{teirs.title}}</h2>
                <p>{{teirs.copy}}</p>
                <span class="h1">{{teirs.monthPrice}}</span>
                <div class="sub-length">per month</div>
                <button class="btn" :class="[key == 1 ? 'btn--primary-light' : 'btn--primary-dark']">Pick Plan</button>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pricingTeir: [
                {
                    title: 'Basic',
                    copy: 'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
                    monthPrice: '$19.00',
                    yearPrice: '$190.00',
                    promo: 'false'
                },
                {
                    title: 'Pro',
                    copy: 'More advanced features available. Recommended for photography veterans and professionals.',
                    monthPrice: '$39.00',
                    yearPrice: '390.00',
                    promo: 'true'
                },
                {
                    title: 'Business',
                    copy: 'Additional features available such as more detailed metrics. Recommended for business owners.',
                    monthPrice: '$99.00',
                    yearPrice: '990.00',
                    promo: 'false'
                }
            ]
        }
    },
    methods: {
        debug (event) {
            console.log(event)
        }
    },
    computed: {
        console: () => console,
        window: () => window,
    },
}
</script>
<style lang="scss">
@import '../assets/styles/variable.scss';

    .pricing_table {
        width: $mobile;
        margin: 0 auto;
        padding-top: 120px;

        @media(min-width: $tablet) {
            width: $container;
        }

        &__teirs {
            display: grid;
            grid-template-columns: 318px;
            row-gap: 24px;
            justify-content: center;
            align-items: center;
            margin-bottom: 80px;

            @media(min-width: $tablet) {
                grid-template-columns: repeat(3, 350px);
                column-gap: 30px;
                row-gap: 0;
            }
        }

        &__items {
            display: flex;
            align-items: center;
            text-align: center;
            background-color: #F5F5F5;
            padding: 0 40px;
            height: 407px;

            .sub-length {
                opacity: .6;
                font-weight: 100;
            }

            .h1 {
                font-weight: 900;
            }

            h2 {
                margin: 0;
            }

            button {
                width: 100%;
                margin-top: 40px;
            }

            p {
                margin: 0;
                display: block;
                padding-top: 18px;
                padding-bottom: 40px;
                opacity: .6;
            }

            &--feat {
                position: relative;
                height: 407px;
                color: $pureWhite;
                background-color: $pureBlack;

                @media(min-width: $tablet) {
                    height: 470px;
                }

                &::before {
                    content: '';
                    position: absolute;
                    height: 6px;
                    width: 100%;
                    top: 0;
                    left: 0;
                    background: $mainAccent;
                }
            }
        }

        &__sub-toggler {
        padding-bottom: 48px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        &__sub-toggle {
            input[type=checkbox] {
                height: 0;
                width: 0;
                visibility: hidden;
                position: absolute;
            }

            label {
                cursor: pointer;
                text-indent: -9999px;
                width: 64px;
                height: 32px;
                background: #979797;
                display: block;
                border-radius: 100px;
                position: relative;
                margin: 0 32px;

            }

            label:after {
                content: '';
                position: absolute;
                top: 4px;
                left: 5px;
                width: 24px;
                height: 24px;
                background: $pureBlack;
                border-radius: 90px;
                transition: 0.3s;
            }

            input:checked + label {
                background: $pureBlack;
            }

            input:checked + label:after {
                left: calc(100% - 5px);
                transform: translateX(-100%);
                background: $pureWhite;
            }

            label:active:after {
                width: 30px;
            }
        }
    }
</style>