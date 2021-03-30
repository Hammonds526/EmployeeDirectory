import axios from "axios";

export const get = () => axios.get('https://randomuser.me/api/?results=100&nat=us');

// const API = {get};

// export default API;
