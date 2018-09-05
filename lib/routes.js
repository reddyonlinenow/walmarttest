'use strict';

const Controllers = require('./controllers');


exports.getRoutesArray = (settings) => {
  return [
    {
      method: 'GET',
      path: '/search/{query}',
      config: Controllers.search.get(settings)
    }
  ];
};
