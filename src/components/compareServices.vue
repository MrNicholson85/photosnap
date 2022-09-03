<template>
    <div class="compareServices">
        <div class="compareServices__titles">
            <div class="h4 heavy">THE FEATURES</div>

            <div class="compareServices__tier-titles">
                <span class="h4 heavy compareServices__tier">BASIC</span>
                <span class="h4 heavy compareServices__tier">PRO</span>
                <span class="h4 heavy compareServices__tier">BUSINESS</span>
            </div>
        </div>
        <div v-for="rows in serverceRows" class="compareServices__row">
            <div class="compareServices__title h4 heavy">
                {{rows.title}}
            </div>
            <div class="compareServices__tiers">
                <div class="compareServices__teirCheck"><p>Basic</p><img v-if="rows.basicTeir === true" :src="checkmark" alt="checkmark"></div>
                <div class="compareServices__teirCheck"><p>Pro</p><img v-if="rows.proTeir === true" :src="checkmark" alt="checkmark"></div>
                <div class="compareServices__teirCheck"><p>Businesss</p><img v-if="rows.businessTeir === true" :src="checkmark" alt="checkmark"></div>
            </div>
        </div>
    </div>
</template>
<script>
import checkmark from '../assets/images/check.svg';

export default {
    data() {
        return {
            checkmark,
            serverceRows: [
                {title: 'UNLIMITED STORY POSTING', basicTeir: true, proTeir: true, businessTeir: true },
                {title: 'UNLIMITED PHOTO UPLOAD', basicTeir: true, proTeir: true, businessTeir: true },
                {title: 'EMBEDDING CUSTOM CONTENT', basicTeir: false, proTeir: true, businessTeir: true },
                {title: 'CUSTOMIZE METADATA', basicTeir: false, proTeir: true, businessTeir: true },
                {title: 'ADVANCED METRICS', basicTeir: false, proTeir: false, businessTeir: true },
                {title: 'PHOTO DOWNLOADS', basicTeir: false, proTeir: false, businessTeir: true },
                {title: 'SEARCH ENGINE INDEXING', basicTeir: false, proTeir: false, businessTeir: true },
                {title: 'CUSTOM ANALYTICS', basicTeir: false, proTeir: false, businessTeir: true },
            ]
        }
    },    
}
</script>
<style lang="scss">
@import '../assets/styles/variable.scss';

.compareServices {
    width: 315px;
    margin: 0 auto;
    padding-top: 80px;
    padding-bottom: 160px;

    @media(min-width: $tablet) {
        width: 731px;
    }

    &__tiers {
        display: grid;
        grid-template-columns: repeat(3, 100px);

        @media (min-width: $tablet) {
            display: flex;
            justify-content: space-around;
            width: 100%;
        }
    }

    &__row {
        border-bottom: $pureBlack 1px solid;
        padding-bottom: 23px;
        align-items: center;
        padding-top: 23px;
        border-bottom: #D8D8D8 1px solid;

        @media(min-width: $tablet) {
            display: grid;
            grid-template-columns: auto 427px;
            padding-left: 24px;
        } 
    }

    &__titles {
        border-bottom: $pureBlack 1px solid;
        padding-bottom: 23px;
        align-items: center;

        @media(min-width: $tablet) {
            display: grid;
            grid-template-columns: auto 414px;
            padding-left: 24px;
        } 

        span {
            text-align: center;
        }
    }

    &__tier-titles {
        display: flex;
        justify-content: space-around;
    }

    &__tier {
        display: none;

        @media(min-width: $tablet) {
            display: block;
        }
    }

    &__teirCheck {
        display: inline-block;
        position: initial;

        @media (min-width: $desktop) {
        display: grid;
        justify-content: center;
        }

        p {
            display: block;
            color: $pureBlack;
            opacity: 0.6;

            @media(min-width: $tablet) {
                display: none;
            }
        }
    }
}
</style>