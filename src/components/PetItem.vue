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
                    @click="onEdit(pet)"
                    icon="pi pi-pencil"
                    label="Edit"
                    class="p-button-rounded p-button-success"
                    style="margin-right: 2em"
                />
                <Button
                    @click="onRemove(pet.id)"
                    icon="pi pi-trash"
                    label="Remove"
                    class="p-button-rounded p-button-warning"
                    style="margin-right: 2em"
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
        onEdit(pet) {
            this.$emit('edit-pet',pet)
        },
        addFavorite(id) {
            this.$emit('add-favorite', id);
        },
    },
};
</script>
