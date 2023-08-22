let app = new Vue({
    el: '#app',
    data: {
        products: [
            {
                name: 'Product 1',
                price: 100,
            },
            {
                name: 'Product 2',
                price: 150,
            },
            {
                name: 'Product 3',
                price: 10,
            },
            {
                name: 'Product 4',
                price: 1000,
            },
            {
                name: 'Product 5',
                price: 1200,
            },
            {
                name: 'Product 6',
                price: 1020,
            },
            {
                name: 'Product 7',
                price: 1,
            },
            {
                name: 'Product 8',
                price: 50,
            },
            {
                name: 'Product 9',
                price: 70,
            },
            {
                name: 'Product 10',
                price: 130,
            },
            {
                name: 'Product 11',
                price: 111,
            },
        ],
    },

    methods: {
        sortPrice(route) {
            if (route === 'up') {
                return this.products.sort((a, b) => a.price - b.price);
            } else if (route === 'down') {
                return this.products.sort((a, b) => b.price - a.price);
            }
        },

            sortName(route) {
                if (route === 'up') {
                    return this.products.sort((a, b) => a.name < b.name ? 1 : -1);
                } else if (route === 'down') {
                    return this.products.sort((a, b) => b.name < a.name ? 1 : -1);
                }
            },
    }
})