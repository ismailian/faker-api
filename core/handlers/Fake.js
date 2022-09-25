const express = require('express');
const Faker = require('../modules/Faker');

/** initiate router */
const FakeHandler = express.Router();

/**
 * GET /api/fake/names
 */
FakeHandler.get('/names', (req, res) => {

    const faker = new Faker();
    const names = faker.names(req.query.count);

    return res.status(200).json({
        status: true,
        names,
    });
});

/**
 * GET /api/fake/emails
 */
FakeHandler.get('/emails', (req, res) => {

    const faker = new Faker();
    const emails = faker.emails(req.query.count);

    return res.status(200).json({
        status: true,
        emails
    });
});

/**
 * GET /api/fake/names-emails
 */
FakeHandler.get('/names-emails', (req, res) => {

    const faker = new Faker();
    const nameEmailList = faker.nameEmail(req.query.count);

    return res.status(200).json({
        status: true,
        list: nameEmailList
    });
});

/** export module */
module.exports = FakeHandler;