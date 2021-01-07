
interface Product {
    id: number,
    name: string,
    description: string,
    price: number,
    images: Array<string>
}

interface State {
    products: null | Array<Product>
}

export const state = (): State => ({
    products: null
})

export const mutations = {
    setProducts: (state: State, data: Array<Product>) => state.products = data
}

export const actions = {
    async fetchProducts(ctx: any){
        try {
            await fetch('http://localhost:3000/demo-api.json')
                .then(data => data.json())
                .then(({products}) => ctx.commit('setProducts', products))
        } catch (err) {
            ctx.commit('setProducts', null)
        }
    }
}

export const getters = {

}
