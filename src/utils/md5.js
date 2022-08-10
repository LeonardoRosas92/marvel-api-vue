import md5 from "blueimp-md5";
 
const getHash = () => {
    const ts = new Date().getTime(); 
    const hash = md5(ts+process.env.VUE_APP_PRIVATE_KEY+process.env.VUE_APP_PUBLIC_KEY);
    const parameters = {
        ts : ts,
        apikey : process.env.VUE_APP_PUBLIC_KEY,
        hash : hash
    }
    return parameters;
}

export default getHash;