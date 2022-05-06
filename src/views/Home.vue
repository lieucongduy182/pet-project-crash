<template>
    <div class="home">
        <AddPetItem @add-pet="addPet" />
        <PetList
            @remove-pet="removePet"
            @add-favorite="addFavorite"
            :pets="pets"
        />
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
                // {
                //     id: 1,
                //     name: 'chihuahua',
                //     age: 2,
                //     image: 'https://images.dog.ceo/breeds/germanshepherd/n02106662_13912.jpg',
                //     isFavorite: true,
                // },
                // {
                //     id: 2,
                //     name: 'huskey',
                //     age: 4,
                //     image: 'https://images.dog.ceo/breeds/komondor/n02105505_3706.jpg',
                //     isFavorite: false,
                // },
                // {
                //     id: 3,
                //     name: 'huskey',
                //     age: 4,
                //     image: 'https://images.dog.ceo/breeds/komondor/n02105505_3706.jpg',
                //     isFavorite: true,
                // },
                // {
                //     id: 4,
                //     name: 'huskey',
                //     age: 4,
                //     image: 'https://images.dog.ceo/breeds/komondor/n02105505_3706.jpg',
                //     isFavorite: true,
                // },
            ],
        };
    },
    methods: {
        async addPet(pet) {
            try {
                const response = await this.$http.post('/pets', pet);
                this.pets = [...this.pets, response.data];
            } catch (error) {
                console.log(error);
            }
        },
        async removePet(id) {
            try {
                if (confirm('Are you sure wanna remove this pet')) {
                    const response = await this.$http.delete(`/pets/${id}`);
                    if (response.status === 200) {
                        this.pets = this.pets.filter((pet) => pet.id !== id);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        },
        async addFavorite(id) {
            try {
                const petFavorite = await this.fetchPet(id);
                const updatePetFavorite = {
                    ...petFavorite,
                    isFavorite: !petFavorite.isFavorite,
                };
                const response = await this.$http.put(
                    `/pets/${id}`,
                    updatePetFavorite
                )
                if (response.status == 200) {
                    this.fetchPets();
                }
                // this.pets = this.pets.map((pet) =>
                //     pet.id === id
                //         ? { ...pet, isFavorite: !response.data.isFavorite }
                //         : pet
                // );
            } catch (error) {
                console.log(error);
            }
        },
        async fetchPets() {
            try {
                const response = await this.$http.get(`/pets`);
                if (response.status === 200) {
                    this.pets = response.data;
                }
            } catch (error) {
                console.log(error);
            }
        },
        async fetchPet(id) {
            try {
                const response = await this.$http.get(`/pets/${id}`);
                return response.data;
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
        this.fetchPets();
    },
};
</script>
