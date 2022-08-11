import { createStore } from 'vuex'
import {getHeroes , getHeroeInfo} from '@/utils/getHeroes';
export default createStore({
  state: {
    characters : [],
    character : null,
    offset: 0
  },
  getters: {
    getCharacters(state){
      return state.characters
    },
    getCharacter(state){
      return state.character
    },
    getOffset(state){
      return state.offset
    }
  },
  mutations: {
    setCharacters(state, characters){
      const charactersFilter = characters.filter( character => {
        if (!character.thumbnail.path.includes('image_not_available') && character.description != "") {
          return character;
        }
      })
      state.characters = [...state.characters, ...charactersFilter];
      state.offset = state.offset + 100;
    },
    setCharacter(state, character){
      state.character = character
    }
  },
  actions: {
    async getCharactersApi ({commit, state}) {
        const data = await getHeroes(state.offset);
        const results = data.results;
        commit('setCharacters', results)
    },
    async getCharacterInfoApi({commit} , id){
        const data = await getHeroeInfo(id);
        commit('setCharacter', data);
    }
  }
})
