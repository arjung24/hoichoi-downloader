const rp = require('request-promise');

const configs = require('../configs/config.json');

const queryString = {
  site: 'hoichoitv',
  includeContent: true,
  moduleOffset: 0,
  moduleLimit: 4,
  languageCode: 'en',
  countryCode: 'US',
};

const getDetails = async (path) => {
  const options = {
    uri: 'https://prod-api-cached-2.viewlift.com/content/pages',
    qs: { path, ...queryString },
    headers: {
      'x-api-key': configs['x-api-key'],
    },
    json: true,
  };
  const response = await rp(options);
  return response;
};

module.exports = { getDetails };
