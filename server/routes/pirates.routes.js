const Controller = require('../controllers/pirates.controller');
 
module.exports = app => {
    app.get('/api/pirates', Controller.findAll);
    app.get('/api/pirates/:id', Controller.findOneSingle);
    app.put('/api/pirates/:id', Controller.updateExisting);
    app.post('/api/pirates', Controller.createNew);
    app.delete('/api/pirates/:id', Controller.deleteAnExisting);
}
