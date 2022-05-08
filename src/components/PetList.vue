<template>
    <div class="grid">
        <div
            v-for="(pet, index) in pets"
            :key="index"
            class="col-12 sm:col-3 md:col-6 lg:col-3"
        >
            <PetItem
                @edit-pet="$emit('edit-pet', pet)"
                @remove-pet="$emit('remove-pet', pet.id)"
                @add-favorite="$emit('add-favorite', pet.id)"
                :pet="pet"
            />
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import PetItem from './PetItem.vue';
export default {
    props: ['pets'],
    components: {
        PetItem,
    },
    watch: {
        handler(newValue) {
            let data = structedClone(newValue)
            this.pets = data;
        }
    },
    emits: ['remove-pet', 'add-favorite'],
};
</script>

<style></style>
