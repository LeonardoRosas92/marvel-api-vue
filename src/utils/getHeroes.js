import marvelApi from '@/api/marvelApi'
import getHash from "@/utils/md5"

const getHeroes = async (offset) => {
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

export default getHeroes;