const institutions = require('./database/fakedata.js');

module.exports = {

    index(request, response) {
        const city = request.query.city
        return response.render('index', { city })
    },

    institution(request, response) {
        return response.render('institution')
    },

    institutions(request, response) {
        return response.render('institutions', { institutions })
    },

    createinstitution(request, response) {
        return response.render('create-institution')
    },
}