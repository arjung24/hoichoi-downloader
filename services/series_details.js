const rp = require('request-promise');

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
    json: true,
  };
  const response = await rp(options);
  return response;
};

module.exports = { getDetails };
