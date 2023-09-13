import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allArticles: [
      {
        id: 1,
        header: 'Let’s Get Solution For Building Construction Work #1',
        img: 'img/article-1.png',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 2,
        img: 'img/article-2.png',
        header: 'Let’s Get Solution For Building Construction Work #2',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 3,
        img: 'img/article-3.png',
        header: 'Let’s Get Solution For Building Construction Work #3',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 4,
        img: 'img/article-1.png',
        header: 'Let’s Get Solution For Building Construction Work #4',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 5,
        img: 'img/article-2.png',
        header: 'Let’s Get Solution For Building Construction Work #5',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 6,
        img: 'img/article-3.png',
        header: 'Let’s Get Solution For Building Construction Work #6',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 7,
        img: 'img/article-1.png',
        header: 'Let’s Get Solution For Building Construction Work #7',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 8,
        img: 'img/article-2.png',
        header: 'Let’s Get Solution For Building Construction Work #9',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 9,
        img: 'img/article-3.png',
        header: 'Let’s Get Solution For Building Construction Work #9',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 10,
        img: 'img/article-1.png',
        header: 'Let’s Get Solution For Building Construction Work #10',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 11,
        img: 'img/article-2.png',
        header: 'Let’s Get Solution For Building Construction Work #11',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 12,
        img: 'img/article-3.png',
        header: 'Let’s Get Solution For Building Construction Work #12',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 13,
        img: 'img/article-1.png',
        header: 'Let’s Get Solution For Building Construction Work #13',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 14,
        img: 'img/article-2.png',
        header: 'Let’s Get Solution For Building Construction Work #14',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 15,
        img: 'img/article-3.png',
        header: 'Let’s Get Solution For Building Construction Work #15',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 16,
        img: 'img/article-1.png',
        header: 'Let’s Get Solution For Building Construction Work #16',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 17,
        img: 'img/article-2.png',
        header: 'Let’s Get Solution For Building Construction Work #17',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 18,
        img: 'img/article-3.png',
        header: 'Let’s Get Solution For Building Construction Work #18',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 19,
        img: 'img/article-1.png',
        header: 'Let’s Get Solution For Building Construction Work #19',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 20,
        img: 'img/article-2.png',
        header: 'Let’s Get Solution For Building Construction Work #20',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 21,
        img: 'img/article-3.png',
        header: 'Let’s Get Solution For Building Construction Work #21',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 22,
        img: 'img/article-1.png',
        header: 'Let’s Get Solution For Building Construction Work #22',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 23,
        img: 'img/article-2.png',
        header: 'Let’s Get Solution For Building Construction Work #23',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 24,
        img: 'img/article-3.png',
        header: 'Let’s Get Solution For Building Construction Work #24',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 25,
        img: 'img/article-3.png',
        header: 'Let’s Get Solution For Building Construction Work #25',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      }
    ]
  },
  getters: {
    getAllArticles: state => {
      return state.allArticles
    },
    getAllArticlesLength: state => {
      return state.allArticles.length
    },
    getLastPost: state => {
      return state.allArticles[0]
    },
    getThreePosts: state => {
      return state.allArticles.slice(0, 3)
    },
    getArticleById: (state) => (id) => {
      return state.allArticles.find(article => article.id === Number(id))
    }
  },
  mutations: {
    addElementToTestState (state, element) {
      this.state.testState.push(element)
    }
  },
  actions: {
    addElement ({ commit }) {
      commit('addElementToTestState')
    }
  },
  modules: {
  }
})
