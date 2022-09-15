<script>
import { mapActions } from 'pinia';
import { mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default{
    computed: {
        ...mapState(useCounterStore, ['currentItem'])
    },
    methods: {
        ...mapActions(useCounterStore, ['getItemById'])
    },
    mounted() {
        this.getItemById(this.$route.params.id)
    }
}
</script>

<template>
    <!-- ======= Portfolio Details Section ======= -->
    <section id="portfolio-details" class="portfolio-details">
        <div class="container">

            <div class="row gy-4">

                <div class="col-lg-8">
                    <div class="portfolio-details-slider swiper">
                        <div class="swiper-wrapper align-items-center">

                            <div class="swiper-slide h-25">
                                <img :src="currentItem.imgUrl" alt="image">
                            </div>

                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="portfolio-info">
                        <h3>{{ currentItem.name }}</h3>
                        <ul>
                            <li><strong>Brand</strong>: {{ currentItem.brand }}</li>
                            <li><strong>Type</strong>: {{ currentItem.type }}</li>
                            <li><strong>Status</strong>: {{ currentItem.status }}</li>
                        </ul>
                    </div>
                    <div class="portfolio-description mb-3">
                        <h2 style="text-align:center">Rp. {{ currentItem.price }} /Day</h2>
                        <p>
                            The duration of borrowing and equipment at sewakamera is 24 hours.
                            The calculation of the start of the rental period is from the time the tool is ordered or the time it is picked up, whichever comes first.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    </section><!-- End Portfolio Details Section -->
</template>