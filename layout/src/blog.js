let app = new Vue({
    el: '#app',
    data: {
        articles: [
            {
                img: 'img/article-1.png',
                textMini: 'Let’s Get Solution For Building Construction Work #1',
                date: '26 December,2022',
                badge: 'Kitchan Design',
                header:'Low Cost Latest Invented Interior Designing Ideas',
                textFull: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
                    'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
            },

            {
                img: 'img/article-2.png',
                textMini: 'Let’s Get Solution For Building Construction Work #2',
                date: '26 December,2022',
                badge: 'Kitchan Design',
                header:'Low Cost Latest Invented Interior Designing Ideas',
                textFull: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
                    'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
            },

            {
                img: 'img/article-3.png',
                textMini: 'Let’s Get Solution For Building Construction Work #3',
                date: '26 December,2022',
                badge: 'Kitchan Design',
                header:'Low Cost Latest Invented Interior Designing Ideas',
                textFull: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
                    'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
            },

            {
                img: 'img/article-1.png',
                textMini: 'Let’s Get Solution For Building Construction Work #4',
                date: '26 December,2022',
                badge: 'Kitchan Design',
                header:'Low Cost Latest Invented Interior Designing Ideas',
                textFull: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
                    'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
            },

            {
                img: 'img/article-2.png',
                textMini: 'Let’s Get Solution For Building Construction Work #5',
                date: '26 December,2022',
                badge: 'Kitchan Design',
                header:'Low Cost Latest Invented Interior Designing Ideas',
                textFull: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
                    'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
            },

            {
                img: 'img/article-3.png',
                textMini: 'Let’s Get Solution For Building Construction Work #6',
                date: '26 December,2022',
                badge: 'Kitchan Design',
                header:'Low Cost Latest Invented Interior Designing Ideas',
                textFull: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
                    'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
            },
        ],
    },

    computed: {
        getLastPost() {
            return this.articles[0];
        }
    },

    methods: {
    }
})