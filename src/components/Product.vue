<template>
    <div class="bg-white overflow-hidden rounded-md shadow">
        <div class="h-48 relative" :style="{'background-image': `url(${data.images[0]})`, 'background-size': 'cover', 'background-position': 'center'}"></div>
        <div class="flex flex-col gap-4 p-4 text-sm">
            <div class="flex flex-col">
                <span class="font-bold text-lg">{{ data.name }}</span>
                <span class="text-gray-600">{{ data.description }}</span>
            </div>
            <div class="flex gap-4">
                <button class="border border-indigo-600 font-medium hover:bg-indigo-600 hover:bg-opacity-10 px-4 py-2 rounded text-indigo-600">Add to cart</button>
                <button class="text-indigo-600">View details</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: ['data']
})
</script>
