<template>
    <div class="formgroup-inline mt-2">
        <div class="field">
            <label for="name" class="p-sr-only">Name</label>
            <InputText
                id="name"
                type="text"
                class="inputfield"
                placeholder="Name"
            />
        </div>
        <div class="field">
            <label for="age" class="p-sr-only">Age</label>
            <InputText
                id="age"
                type="number"
                class="inputfield"
                placeholder="Age"
            />
        </div>
        <div class="field">
            <label for="imageUrl" class="p-sr-only">Image Url</label>
            <InputText
                id="imageUrl"
                type="text"
                class="inputfield"
                placeholder="Image URL"
            />
        </div>
        <Button class="button" type="button" value="Submit">Submit</Button>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
