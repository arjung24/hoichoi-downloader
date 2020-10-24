const path = require("path");

const { getStatusInfo } = require("./get_status_info");
const { download } = require("./download");

const downloadEpisodes = async (data) => {
  for (let i = 0; i < data.episodes.length; i++) {
    for (let j = 0; j < data.episodes[i].episodes.length; j++) {
      const streamingUrl = await getStatusInfo(
        data.episodes[i].episodes[j].vId
      );
      console.log(
        `${data.episodes[i].title} : ${data.episodes[i].episodes[j].title}`
      );
      await download({
        url: streamingUrl,
        path: `${data.name}/${data.episodes[i].title}`,
        fileName: data.episodes[i].episodes[j].title,
        number: j + 1,
      });
    }
  }
};

module.exports = { downloadEpisodes };
