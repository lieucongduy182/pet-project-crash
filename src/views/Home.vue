<template>
    <div class="home">
        <PetList :pets="pets" />
    </div>
</template>

<script>
import PetList from '@/components/PetList.vue';
export default {
    name: 'HomeView',
    components: {
        PetList,
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
                    isFavorite: true,
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
};
</script>
