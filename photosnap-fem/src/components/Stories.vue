<template>
    <div class="stories">
        <div v-for="storyItem in storiesItems" class="stories__item" :style="{ backgroundImage: `url(${storyItem.icon})` }">
            <div class="stories__content">
                <div class="stories__title">{{ storyItem.title }}</div>
                <div class="stories__aurthor">by {{ storyItem.author }}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            storiesItems: [
                {title: 'The Mountains', author: 'John Appleseed', icon: require('../assets/images/mountains.jpg')},
                {title: 'Sunset Cityscapes', author: 'Benjamin Cruz', icon: require('../assets/images/cityscapes.jpg')},
                {title: '18 Days Voyage', author: ' Alexei Borodin', icon: require('../assets/images/18-days-voyage.jpg')},
                {title: 'Architecturals', author: 'Samantha Brooke', icon: require('../assets/images/architecturals.jpg')},
            ],
        }
    }
}
</script>
<style lang="scss">
    .stories {
        display: grid;
        grid-template-columns: repeat(5, 25%);
        height: 500px;
        width: 1440px;
        margin: 0 auto;


        &__item {
            height: 100%;
            background-size: cover;
            background-repeat: no-repeat;
            display: flex;
            align-items: self-end;
        }

        &__content {
            padding: 40px;
        }
    }
</style>