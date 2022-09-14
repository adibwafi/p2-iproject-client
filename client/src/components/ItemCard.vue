<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default{
    name: "ItemCard",
    props: ['items'],
    methods: {
        
    }
}
</script>

<template>
    <div class="card ps-5 mb-3" style="width: 26rem;">
        <img :src="items.imgUrl"
            class="card-img-top mb-3" alt="img">
        <div class="card-body">
            <div class="journal-txt">
                <h3 style="color: #2596be">{{items.name}}</h3>
                <p class="card-text">Rp. {{items.price}}/Hari</p>
            </div>
        </div>
    </div>

</template>