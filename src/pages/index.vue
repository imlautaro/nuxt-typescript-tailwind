<template>
    <container class="flex flex-col gap-4 py-4">
        <div v-if="products" class="flex flex-col gap-2">
            <span class="font-medium">Most recents</span>
            <div class="gap-4 grid grid-cols-12">
                <div v-for="product in products" v-bind:key="product.id" class="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3">
                    <product :data="product" />
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <span class="font-medium">All products</span>
            <div class="gap-4 grid grid-cols-12">
                <div class="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3">
                    <div class="bg-white rounded-md shadow">
                        <div class="p-4">
                            <span class="font-bold text-lg">Product name</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <theme-toggler />
    </container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
export default Vue.extend({
    computed: {
        ...mapState(['products'])
    },
    methods: {
        ...mapActions(['fetchProducts'])
    },
    async mounted(){
        await this.fetchProducts()
    }
})
</script>
