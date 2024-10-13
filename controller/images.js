const axios = require('axios')
const asyncWraper = require("../middleware/async.js")


const getImages = asyncWraper (async (req, res) => {
    //console.log("hi")
    const { query } = await req.body; //Extract the query from the request body
    //console.log(query)

    if (!query) {
        console.log("Error: query is required")
        return res.status(403).send("Query required");
    }

    //console.log(process.env.UNSPLASH_ACCESS_KEY);
    const url = "https://api.unsplash.com/search/photos";
    const params = {
        client_id: process.env.UNSPLASH_ACCESS_KEY, //the access key is stored in environment variables
        query: query,
        per_page: 9,
    };

    const response = await axios.get(url, { params });
    const images = response.data.results.map(({ id, urls, links }) => ({
        id,
        image: urls.small,
        link: links.html,
    }));

    // Send the array of the images as a JSON response
    return res.status(200).json(images);

});



module.exports = { getImages }