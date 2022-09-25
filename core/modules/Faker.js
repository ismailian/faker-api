const { faker } = require('@faker-js/faker');

/**
 * faker module
 */
class Faker {

    /**
     * default constructor
     */
    constructor() {}

    /**
     * generate n number of emails
     * @param {*} count 
     */
    emails(count = 10) {
        const emails = [];
        for (let i = 0; i < count; i++) {
            emails.push(faker.internet.email());
        }
        return emails;
    }

    /**
     * generate n number of names
     * @param {*} count 
     */
    names(count = 10) {
        const names = [];
        for (let i = 0; i < count; i++) {
            names.push(faker.name.findName());
        }
        return names;
    }

    /**
     * generate n number of name/email combo
     * @param {*} count 
     */
    nameEmail(count = 10) {
        const nameEmailList = [];
        for (let i = 0; i < count; i++) {
            const name = faker.name.findName();
            const email = faker.internet.email(name.split(' ')[1]);
            nameEmailList.push({ name, email });
        }
        return nameEmailList;
    }

}

module.exports = Faker;