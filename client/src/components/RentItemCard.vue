<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    name: "RentItemCard",
    props: ['rentitem'],
}
</script>

<template>
<div class="card ps-5 mb-5" style="width: 26rem;">
        <img :src="rentitem.Item.imgUrl"
            class="card-img-top mb-3" alt="img">
        <div class="card-body">
            <div class="journal-txt">
                <h3  style="color: #2596be">{{rentitem.Item.name}}</h3>
                <p class="card-text">Rp. {{rentitem.Item.price}}/Day</p>
            </div>
        </div>
    </div>
</template>