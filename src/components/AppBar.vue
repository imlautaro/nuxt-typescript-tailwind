<template>
    <header class="bg-indigo-600 p-4 shadow text-white">
        <nav class="flex items-center justify-between" role="navigation">
            <div>
                <nuxt-link class="flex gap-4 items-center" to="/">
                    <logotype />
                </nuxt-link>
            </div>
            <ul class="flex gap-4 items-center">
                <li>
                    <nuxt-link to="/sign-in">Login</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="bg-white duration-300 font-medium hover:bg-gray-100 hover:shadow-lg px-4 py-2 rounded shadow-md text-black" to="/sign-up">Sign Up</nuxt-link>
                </li>
            </ul>
        </nav>
    </header>
</template>