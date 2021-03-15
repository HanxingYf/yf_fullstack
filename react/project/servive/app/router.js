'use strict';

module.exports = app => {

  require('./router/default')(app)
  require('./router/admin')(app)
};