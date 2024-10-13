const notFound = (req, res) => {
    console.log("Route Does Not Exists");
    return res.status(404).send("not found");
};


module.exports = notFound;