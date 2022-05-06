<template>
    <form @submit="onSubmit" class="formgroup-inline mt-2">
        <div class="field">
            <label for="name" class="p-sr-only">Name</label>
            <InputText
                id="name"
                type="text"
                class="inputfield"
                placeholder="Name"
                v-model="name"
            />
        </div>
        <div class="field">
            <label for="age" class="p-sr-only">Age</label>
            <InputText
                id="age"
                type="number"
                class="inputfield"
                placeholder="Age"
                v-model="age"
            />
        </div>
        <div class="field">
            <label for="imageUrl" class="p-sr-only">Image Url</label>
            <InputText
                id="imageUrl"
                type="text"
                class="inputfield"
                placeholder="Image URL"
                v-model="image"
            />
        </div>
        <Button class="button" type="submit">Submit</Button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            age: null,
            image: '',
        };
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
            if (this.name == '' || this.age == null || this.image == '') {
                console.log('Required Field');
            } else {
                const newPet = {
                    name: this.name,
                    age: this.age,
                    image: this.image,
                    isFavorite: false,
                };
                this.$emit('add-pet', newPet);
                this.name = '';
                this.age = '';
                this.image = '';
            }
        },
    },
};
</script>

<style></style>
