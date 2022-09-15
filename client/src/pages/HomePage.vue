<script>
import { mapActions } from 'pinia';
import { mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

import ItemCard from '../components/ItemCard.vue';

export default {
    components: {
        ItemCard
    },
    computed: {
        ...mapState(useCounterStore, ["items", 'rentitems'])
    },
    methods: {
        ...mapActions(useCounterStore, ["getItems", 'getRentItems'])
    },
    created() {
        this.getItems()
        this.getRentItems()
        
    }
}
</script>

<template>
    <main id="main">
        <!-- ======= Blog Grid ======= -->
        <div id="journal-blog" class="text-left  paddsections">

            <div class="container">
                <div class="section-title text-center">
                    <h2 class="ps-5">featured</h2>
                </div>
            </div>

            <div class="container">
                <div class="journal-block">
                    <div class="row">
                        <ItemCard v-for="items in items" :key="items.id" :items="items" />
                    </div>
                </div>
            </div>
        </div><!-- End Blog Grid -->
    </main><!-- End #main -->
</template>