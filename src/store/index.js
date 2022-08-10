import { createStore } from 'vuex'
import getHeroes from '@/utils/getHeroes';
export default createStore({
  state: {
    characters : [],
    offset: 0
  },
  getters: {
  },
  mutations: {
    addCharacters(state, characters){
      const charactersFilter = characters.filter( character => {
        if (!character.thumbnail.path.includes('image_not_available')) {
          return character;
        }
      })
      state.characters = [...state.characters, ...charactersFilter];
      state.offset = state.offset + 100;
    } 
  },
  actions: {
    async getCharacters ({commit, state}) {
        const data = await getHeroes(state.offset);
        const results = data.results;
        console.log(results.length);
        commit('addCharacters', results)
    }
  }
})
