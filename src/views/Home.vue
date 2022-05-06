<template>
    <div class="home">
        <AddPetItem />
        <PetList @remove-pet="removePet" :pets="pets" />
    </div>
</template>

<script>
import PetList from '@/components/PetList.vue';
import AddPetItem from '@/components/AddPetItem.vue';
export default {
    name: 'HomeView',
    components: {
        PetList,
        AddPetItem,
    },
    data() {
        return {
            pets: [
                {
                    id: 1,
                    name: 'chihuahua',
                    age: 2,
                    image: 'https://images.dog.ceo/breeds/germanshepherd/n02106662_13912.jpg',
                    isFavorite: true,
                },
                {
                    id: 2,
                    name: 'huskey',
                    age: 4,
                    image: 'https://images.dog.ceo/breeds/komondor/n02105505_3706.jpg',
                    isFavorite: false,
                },
                {
                    id: 3,
                    name: 'huskey',
                    age: 4,
                    image: 'https://images.dog.ceo/breeds/komondor/n02105505_3706.jpg',
                    isFavorite: true,
                },
                {
                    id: 4,
                    name: 'huskey',
                    age: 4,
                    image: 'https://images.dog.ceo/breeds/komondor/n02105505_3706.jpg',
                    isFavorite: true,
                },
            ],
        };
    },
    methods: {
        removePet(id) {
            console.log('Home', id);
            if (confirm('Are you sure wanna remove this pet')) {
                this.pets = this.pets.filter((pet) => pet.id !== id);
            }
        },
    },
};
</script>
