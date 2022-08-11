<template>
    <div class="compareServices">
        <div class="compareServices__titles">
            <div class="h4 heavy">THE FEATURES</div>
            <span class="h4 heavy">BASIC</span>
            <span class="h4 heavy">PRO</span>
            <span class="h4 heavy">BUSINESS</span>
        </div>
        <div v-for="rows in serverceRows" class="compareServices__row">
            <div class="compareServices__title h4 heavy">
                {{rows.title}}
            </div>
            <div class="compareServices__teirCheck"><img v-if="rows.basicTeir === true" :src="checkmark"></div>
            <div class="compareServices__teirCheck"><img v-if="rows.proTeir === true" :src="checkmark"></div>
            <div class="compareServices__teirCheck"><img v-if="rows.businessTeir === true" :src="checkmark"></div>
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
    width: $mobile;
    margin: 0 auto;
    padding-top: 80px;
    padding-bottom: 160px;

    @media(min-width: $tablet) {
        width: 731px;
    }

    &__titles,
    &__row {
        display: grid;
        border-bottom: $pureBlack 1px solid;
        padding-bottom: 23px;
        align-items: center;
        padding-left: 24px;

        @media(min-width: $tablet) {
            display: grid;
            grid-template-columns: auto 140px 140px 140px;
        } 
    }

    &__titles {
        span {
            text-align: center;
        }
    }

    &__row {
        padding-top: 23px;
        border-bottom: #D8D8D8 1px solid;
    }

    &__teirCheck {
        display: grid;
        justify-content: center;
    }
}
</style>