import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key":
            process.env.REACT_APP_YOUTUBE_API_KEY,
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};


// import axios from "axios";

// const BASE_URL = "https://www.googleapis.com/youtube/v3/{endpoint}";

// // Configuration for axios
// const options = {
//     params: {
//         hl: "en",
//         gl: "US",
//         key: process.env.REACT_APP_YOUTUBE_API_KEY // Directly add the API key here
//     },
// };

// export const fetchDataFromApi = async (endpoint) => {
//     const { data } = await axios.get(`${BASE_URL}/${endpoint}`, options);
//     return data;
// };

