export default {
    srcDir: 'src',
    components: true,
    buildModules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/typescript-build',
        '@nuxtjs/color-mode',
        '@nuxtjs/pwa'
    ],
    modules: [
        '@nuxtjs/google-fonts',
    ],
    pwa: {
        manifest: {
            name: 'E-Commerce',
            short_name: 'E-Commerce',
            theme_color: '#4F46E5'
        }
    },
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
