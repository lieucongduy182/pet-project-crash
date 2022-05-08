<template>
    <form @submit="onSubmit" class="formgroup-inline mt-2">
        <div class="field">
            <label for="name" class="p-sr-only">Name</label>
            <InputText
                id="name"
                type="text"
                class="inputfield"
                placeholder="Name"
                v-model="pet.name"
            />
        </div>
        <div class="field">
            <label for="age" class="p-sr-only">Age</label>
            <InputText
                id="age"
                type="number"
                class="inputfield"
                placeholder="Age"
                v-model="pet.age"
            />
        </div>
        <div class="field">
            <label for="imageUrl" class="p-sr-only">Image Url</label>
            <InputText
                id="imageUrl"
                type="text"
                class="inputfield"
                placeholder="Image URL"
                v-model="pet.image"
            />
        </div>
        <Button class="button" type="submit">Submit</Button>
    </form>
</template>

<script>
export default {
    props: {
        editPetIndex: {
            type: Object,
            require: true,
            default: () => {}
        }
    },
    data() {
        return {
            pet: {
                id: null,
                name: '',
                age: null,
                image: '',
            },
        };
    },
    watch: {
        editPetIndex: {
            deep: true,
            handler(newValue) {
                let data = structuredClone(newValue);
                this.pet = data;
            },
        },
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
            this.$emit('add-pet',this.pet)
        },
    },
};
</script>
