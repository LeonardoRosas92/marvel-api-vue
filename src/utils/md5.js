import md5 from "blueimp-md5";

const getHash = () => {
    const t = new Date().getTime();
    const hash = md5(t+process.env.PRIVATE_KEY+process.env.PUBLIC_KEY);
    return hash;
}

export default getHash;