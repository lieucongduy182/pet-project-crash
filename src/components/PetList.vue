<template>
    <div class="grid">
        <div
            v-for="(pet, index) in pets"
            :key="index"
            class="col-12 sm:col-3 md:col-6 lg:col-3"
        >
            <PetItem :pet="pet" />
        </div>
    </div>
</template>
<script>
import PetItem from './PetItem.vue';
export default {
    props: ['pets'],
    components: {
        PetItem,
    },
};
</script>

<style></style>
