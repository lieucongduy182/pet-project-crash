<template>
    <div class="grid">
        <div
            v-for="(pet, index) in pets"
            :key="index"
            class="col-12 sm:col-3 md:col-6 lg:col-3"
        >
            <PetItem
                @remove-pet="$emit('remove-pet', pet.id)"
                @add-favorite="$emit('add-favorite', pet.id)"
                :pet="pet"
            />
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
    emits: ['remove-pet', 'add-favorite'],
};
</script>

<style></style>
