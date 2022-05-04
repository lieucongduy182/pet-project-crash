<template>
    <div class="petItem">
        <Card>
            <template #header>
                <img :src="pet.image" style="height: 20em" />
            </template>
            <template #title>
                {{ pet.name }}
            </template>
            <template #subtitle>Age: {{ pet.age }} </template>
            <template #footer>
                <Button
                    icon="pi pi-times"
                    label="Remove"
                    class="p-button-rounded p-button-warning"
                    style="margin-right: 3em"
                />
                <Button
                    icon="pi pi-heart"
                    class="p-button-rounded p-button-danger"
                    style="margin-right: 0.5em"
                />
                <Button
                    icon="pi pi-heart"
                    class="p-button-rounded p-button-danger p-button-outlined"
                />
            </template>
        </Card>
    </div>
</template>

<script>
export default {
    props: ['pet'],
};
</script>

<style></style>
