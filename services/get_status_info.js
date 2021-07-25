const rp = require('request-promise');

// const configs = require('../configs/config.json');

const queryString = {
  deviceType: 'web_browser',
  contentConsumption: 'web',
};

const getStatusInfo = async ({ id, token }) => {
  const options = {
    uri: 'https://prod-api.viewlift.com/entitlement/video/status',
    qs: { ...queryString, id },
    headers: {
      authorization: token,
    },
    json: true,
  };
  const response = await rp(options);
  return response.video.streamingInfo.videoAssets.mpeg[2].url;
};

module.exports = { getStatusInfo };
