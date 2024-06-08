const express = require('express');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');
const tokenMiddleware = require('../middleware/auth.middleware');

// Middleware to handle errors
const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: err.message });
};

// Get Products
const getProducts = async (req, res, next) => {
    const { n = 10, page = 1, sortby, order = 'asc', minPrice, maxPrice } = req.query;
    const {  categoryname } = req.params;
    const limit = parseInt(n);
    const pageNum = parseInt(page);

    try {
        const response = await axios.get(`http://20.244.56.144/test/companies/AZO/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000`, {
            params: {
                top: n,
                minPrice: minPrice,
                maxPrice: maxPrice
            },
            headers: {
                'Authorization': req.headers['Authorization']
            }
        });

        let products = response.data.map(product => ({
            ...product,
            id: uuidv4()
        }));

        if (sortby) {
            products = products.sort((a, b) => {
                if (order === 'asc') {
                    console.log("Foe");
                    return a[sortby] > b[sortby] ? 1 : -1;
                } else {
                    return a[sortby] < b[sortby] ? 1 : -1;
                }
            });
        }

        const startIndex = (pageNum - 1) * limit;
        const paginatedProducts = products.slice(startIndex, startIndex + limit);

        res.json(paginatedProducts);
    } catch (error) {
        console.error(error)
        next(error);
    }
};

const getProductById = async (req, res, next) => {
    const { productid } = req.params;
    const {  categoryname } = req.params;

    try {
        const response = await axios.get(`http://20.244.56.144/test/companies/AZO/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000`, {
            params: {
                top: 100, 
                minPrice: 1, 
                maxPrice: 10000
            },
            headers: {
                'Authorization': req.headers['Authorization']
            }
        });
        console.log(response);
        const products = response.data.map(product => ({
            ...product,
            id: uuidv4()
        }));

        const product = products.find(p => p.id === productid);

        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        next(error);
    }
};

module.exports={getProductById,getProducts}