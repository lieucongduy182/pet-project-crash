<template>
    <div class="home">
        <FormInput @add-pet="addPet" :editPetIndex="editPetIndex" />
        <PetList
            @edit-pet="editPet"
            @remove-pet="removePet"
            @add-favorite="addFavorite"
            :pets="pets"
        />
        <Toast position="top-right" />
    </div>
</template>

<script>
import PetList from '@/components/PetList.vue';
import FormInput from '@/components/FormInput.vue';
export default {
    name: 'HomeView',
    components: {
        PetList,
        FormInput,
    },
    data() {
        return {
            pets: [
       
            ],
            editPetIndex: {},
        };
    },
    methods: {
        async addPet(pet) {
            if (pet.id != null) {
                const dataEditPet = {
                    id: pet.id,
                    name: pet.name,
                    age: pet.age,
                    image: pet.image,
                };
                const response = await this.$http.put(
                    `/pets/${pet.id}`,
                    dataEditPet
                );
                if (response.status == 200) {
                    this.fetchPets();
                    this.editPetIndex = {};
                    this.$toast.add({
                        severity: 'success',
                        summary: 'Update Pet Success',
                        life: 3000,
                    });
                }
            } else {
                if (pet.name == '' || pet.age == null || pet.image == '') {
                    console.log('Required Field');
                } else {
                    const newPet = {
                        name: pet.name,
                        age: pet.age,
                        image: pet.image,
                        isFavorite: false,
                    };
                    try {
                        const response = await this.$http.post('/pets', newPet);
                        if (response) {
                            this.fetchPets();
                            this.editPetIndex = {};
                            this.$toast.add({
                                severity: 'success',
                                summary: 'Add Pet Success',
                                life: 3000,
                            });
                        }
                    } catch (error) {
                        console.log(error);
                    }
                }
            }
        },
        editPet(pet) {
            this.editPetIndex = pet;
        },
        async removePet(id) {
            try {
                if (confirm('Are you sure wanna remove this pet')) {
                    const response = await this.$http.delete(`/pets/${id}`);
                    if (response.status === 200) {
                        this.fetchPets();
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
                );
                if (response.status == 200) {
                    this.fetchPets();
                }
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
