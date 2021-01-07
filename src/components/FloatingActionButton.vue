<template>
    <button class="absolute bg-indigo-600 bottom-4 duration-300 fill-current flex gap-2 hover:bg-indigo-500 hover:shadow-lg items-center p-4 px-6 right-4 rounded-full shadow-md text-white" @click="$emit('click')">
        <slot />
        Shopping Cart
    </button>
</template>