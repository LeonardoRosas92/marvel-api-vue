import marvelApi from '@/api/marvelApi'
import getHash from "@/utils/md5"

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
        return data.data.results[0];
    } catch (error) {
        console.log(error.response.data.message);
    }
}

