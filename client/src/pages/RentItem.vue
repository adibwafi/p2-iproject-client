<script>
import { mapActions } from 'pinia';
import { mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

import RentItemCard from '../components/RentItemCard.vue';

export default {
    name: "RentItems",
    components: { RentItemCard },
    computed: {
        ...mapState(useCounterStore, ['rentitems', 'items'])
    },
    methods: {
        ...mapActions(useCounterStore, ['getRentItems', 'getItems'])
    },
    created() {
        this.getRentItems()
        this.getItems()
    }

}
</script>

<template>
    <!-- ======= Portfolio Details Section ======= -->
    <section id="portfolio-details" class="portfolio-details">
        <div class="container">

            <div class="row gy-4">

                <div class="col-lg-8">
                    <RentItemCard v-for="rentitem in rentitems" :key="rentitem.id" :rentitem="rentitem"/>
                </div>

                <div class="col-lg-4">
                    <div class="portfolio-info">
                        <h3>Booking List</h3>
                        <ul>
                            <li><strong>Brand</strong>: brand</li>
                            <li><strong>Type</strong>: type</li>
                            <li><strong>Status</strong>: status</li>
                        </ul>
                    </div>
                    <div class="portfolio-description mb-3">
                        <h2 style="text-align:center">Rp. price</h2>
                        <p>

                        </p>
                    </div>
                </div>

            </div>

        </div>
    </section><!-- End Portfolio Details Section -->
</template>