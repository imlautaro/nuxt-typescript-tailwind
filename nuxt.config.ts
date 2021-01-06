export default {
    srcDir: 'src',
    components: true,
    buildModules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/typescript-build',
        '@nuxtjs/color-mode'
    ],
    modules: [
        '@nuxtjs/google-fonts',
    ],
    target: 'static',
    colorMode: {
        classSuffix: ''
    },
    googleFonts: {
        families: {
            Inter: [400, 500, 700]
        }
    },
    server: {
        host: '0.0.0.0'
    }
}
