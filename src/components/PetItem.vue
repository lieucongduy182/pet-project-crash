<template>
    <div class="petItem">
        <Card>
            <template #header>
                <img :src="pet.image" style="height: 20em; object-fit:cover" />
            </template>
            <template #title>
                {{ pet.name }}
            </template>
            <template #subtitle>Age: {{ pet.age }} </template>
            <template #footer>
                <Button
                    @click="onRemove(pet.id)"
                    icon="pi pi-times"
                    label="Remove"
                    class="p-button-rounded p-button-warning"
                    style="margin-right: 3em"
                />
                <Button
                    @click="addFavorite(pet.id)"
                    icon="pi pi-heart"
                    class="p-button-rounded p-button-danger"
                    :class="[pet.isFavorite ? '' : 'p-button-outlined']"
                    style="margin-right: 0.5em"
                />
            </template>
        </Card>
    </div>
</template>

<script>
export default {
    props: ['pet'],
    methods: {
        onRemove(id) {
            this.$emit('remove-pet', id);
        },
        addFavorite(id) {
            this.$emit('add-favorite', id);
        },
    },
};
</script>
