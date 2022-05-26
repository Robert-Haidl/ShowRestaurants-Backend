const express = require('express');
const router = express.Router();
const Restaurant = require('../model/Restaurant');

router.get('/getRestaurants', async (req, res) => {
    const find = await Restaurant.find()
    //if(!find) return res.status(404).send('No restaurants found!');
    const restaurantList = [];
    find.forEach(restaurant => {
        restaurantList.push({
            name: restaurant.name,
            category: restaurant.name,
            price: restaurant.price,
            taste: restaurant.taste,
            ambiente: restaurant.ambiente,
            service: restaurant.service,
            impression: restaurant.impression,
            price_quality: restaurant.price_quality,
            carpark: restaurant.carpark,
            address: restaurant.address
        });
    })
    res.json(restaurantList);
    
});






module.exports = router;