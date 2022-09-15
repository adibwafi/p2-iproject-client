<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default{
    name: "ItemCard",
    props: ['items', 'rentitems'],
    methods: {
        ...mapActions(useCounterStore, ['addRentItems']),
        add () {
            this.addRentItems(this.addRentItems)
        }
    }
}
</script>

<template>
    <div class="card ps-5 mb-5" style="width: 26rem;">
        <img :src="items.imgUrl"
            class="card-img-top mb-3" alt="img">
        <div class="card-body">
            <div class="journal-txt">
                <h3 @click.prevent="$router.push(`/items/${items.id}`)" style="color: #2596be">{{items.name}}</h3>
                <p class="card-text">Rp. {{items.price}}/Day</p>
                <button @click.prevent="add" class="btn btn-warning">Add to Rent Items</button>
            </div>
        </div>
    </div>
</template>