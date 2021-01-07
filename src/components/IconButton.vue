<template>
    <button @click="$emit('click')" class="icon-button">
        <slot />
    </button>
</template>

<style lang="postcss">
.icon-button{
    @apply p-2 rounded-full;
}
.icon-button:hover{
    @apply bg-black bg-opacity-5;
}
</style>
