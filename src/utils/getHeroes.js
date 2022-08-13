import marvelApi from '@/api/marvelApi'
import getHash from "@/utils/md5"
import axios from 'axios'

export const getHeroes = async (offset) => {
    try {
        const { ts, apikey, hash } = getHash()
        const { data } = await marvelApi.get(`/characters`, 
        {
            params: {
                ts,
                apikey,
                hash,
                limit: 100,
                offset
            }
        }
        )
        return data.data;
    } catch (error) {
        console.log(error.response.data.message);
    }
}

export const getHeroeInfo = async (id) => {
    try {
        const { ts, apikey, hash } = getHash()
        const { data } = await marvelApi.get(`/characters/${id}`, 
        {
            params: {
                ts,
                apikey,
                hash,
            }
        }
        )
        const character = data.data.results[0];
        character.comics = await getComics(data.data.results[0].comics.items);
        return character;
    } catch (error) {
        console.log(error.response.data.message);
    }
}

const getComics = async (items) => {
    const { ts, apikey, hash } = getHash()
    const endpoints = items.map(item => item.resourceURI.substring(item.resourceURI.search("/comics")));
    const comics =  
        await axios.all(
            endpoints.map( ( endpoint ) => marvelApi.get(endpoint, { params: { ts, apikey, hash}})
                .then( (comic) => 
                {
                    comic.data.data.results[0];
                    return comic.data.data.results[0];
                }
            ))
        ).then( (comics) => { return comics});
    return comics;
}