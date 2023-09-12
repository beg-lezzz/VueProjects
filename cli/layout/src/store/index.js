import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testState: [1, 2, 3],
    testArticles: [
      {
        id: 1,
        img: 'img/article-1.png',
        textMini: 'Let’s Get Solution For Building Construction Work #1',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        header: 'Low Cost Latest Invented Interior Designing Ideas',
        textFull: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
      },

      {
        id: 2,
        img: 'img/article-2.png',
        textMini: 'Let’s Get Solution For Building Construction Work #2',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        header: 'Low Cost Latest Invented Interior Designing Ideas',
        textFull: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
      },

      {
        id: 3,
        img: 'img/article-3.png',
        textMini: 'Let’s Get Solution For Building Construction Work #3',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        header: 'Low Cost Latest Invented Interior Designing Ideas',
        textFull: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
      },

      {
        id: 4,
        img: 'img/article-1.png',
        textMini: 'Let’s Get Solution For Building Construction Work #4',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        header: 'Low Cost Latest Invented Interior Designing Ideas',
        textFull: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
      },

      {
        id: 5,
        img: 'img/article-2.png',
        textMini: 'Let’s Get Solution For Building Construction Work #5',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        header: 'Low Cost Latest Invented Interior Designing Ideas',
        textFull: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
      },

      {
        id: 6,
        img: 'img/article-3.png',
        textMini: 'Let’s Get Solution For Building Construction Work #6',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        header: 'Low Cost Latest Invented Interior Designing Ideas',
        textFull: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
      },

      {
        id: 7,
        img: 'img/article-1.png',
        textMini: 'Let’s Get Solution For Building Construction Work #7',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        header: 'Low Cost Latest Invented Interior Designing Ideas',
        textFull: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
      },

      {
        id: 8,
        img: 'img/article-2.png',
        textMini: 'Let’s Get Solution For Building Construction Work #8',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        header: 'Low Cost Latest Invented Interior Designing Ideas',
        textFull: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
      },

      {
        id: 9,
        img: 'img/article-3.png',
        textMini: 'Let’s Get Solution For Building Construction Work #9',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        header: 'Low Cost Latest Invented Interior Designing Ideas',
        textFull: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
      },

      {
        id: 10,
        img: 'img/article-1.png',
        textMini: 'Let’s Get Solution For Building Construction Work #10',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        header: 'Low Cost Latest Invented Interior Designing Ideas',
        textFull: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
      },

      {
        id: 11,
        img: 'img/article-2.png',
        textMini: 'Let’s Get Solution For Building Construction Work #11',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        header: 'Low Cost Latest Invented Interior Designing Ideas',
        textFull: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
      },

      {
        id: 12,
        img: 'img/article-3.png',
        textMini: 'Let’s Get Solution For Building Construction Work #12',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        header: 'Low Cost Latest Invented Interior Designing Ideas',
        textFull: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
      },

      {
        id: 13,
        img: 'img/article-1.png',
        textMini: 'Let’s Get Solution For Building Construction Work #13',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        header: 'Low Cost Latest Invented Interior Designing Ideas',
        textFull: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
      },

      {
        id: 14,
        img: 'img/article-2.png',
        textMini: 'Let’s Get Solution For Building Construction Work #14',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        header: 'Low Cost Latest Invented Interior Designing Ideas',
        textFull: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
      },

      {
        id: 15,
        img: 'img/article-3.png',
        textMini: 'Let’s Get Solution For Building Construction Work #15',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        header: 'Low Cost Latest Invented Interior Designing Ideas',
        textFull: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
      },

      {
        id: 16,
        img: 'img/article-1.png',
        textMini: 'Let’s Get Solution For Building Construction Work #16',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        header: 'Low Cost Latest Invented Interior Designing Ideas',
        textFull: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
      },

      {
        id: 17,
        img: 'img/article-2.png',
        textMini: 'Let’s Get Solution For Building Construction Work #17',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        header: 'Low Cost Latest Invented Interior Designing Ideas',
        textFull: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
      },

      {
        id: 18,
        img: 'img/article-3.png',
        textMini: 'Let’s Get Solution For Building Construction Work #18',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        header: 'Low Cost Latest Invented Interior Designing Ideas',
        textFull: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
      },

      {
        id: 19,
        img: 'img/article-1.png',
        textMini: 'Let’s Get Solution For Building Construction Work #19',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        header: 'Low Cost Latest Invented Interior Designing Ideas',
        textFull: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
      },

      {
        id: 20,
        img: 'img/article-2.png',
        textMini: 'Let’s Get Solution For Building Construction Work #20',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        header: 'Low Cost Latest Invented Interior Designing Ideas',
        textFull: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
      },

      {
        id: 21,
        img: 'img/article-3.png',
        textMini: 'Let’s Get Solution For Building Construction Work #21',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        header: 'Low Cost Latest Invented Interior Designing Ideas',
        textFull: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
      },

      {
        id: 22,
        img: 'img/article-1.png',
        textMini: 'Let’s Get Solution For Building Construction Work #22',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        header: 'Low Cost Latest Invented Interior Designing Ideas',
        textFull: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
      },

      {
        id: 23,
        img: 'img/article-2.png',
        textMini: 'Let’s Get Solution For Building Construction Work #23',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        header: 'Low Cost Latest Invented Interior Designing Ideas',
        textFull: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
      },

      {
        id: 24,
        img: 'img/article-3.png',
        textMini: 'Let’s Get Solution For Building Construction Work #24',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        header: 'Low Cost Latest Invented Interior Designing Ideas',
        textFull: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
      },

      {
        id: 25,
        img: 'img/article-3.png',
        textMini: 'Let’s Get Solution For Building Construction Work #25',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        header: 'Low Cost Latest Invented Interior Designing Ideas',
        textFull: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
      }
    ]
  },
  getters: {
    getTestState: state => {
      return state.testState
    },
    getTestStateLength: state => {
      return state.testState.length
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
