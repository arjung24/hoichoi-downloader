const { getDetails } = require("./services/series_details");
const { formatSeriesDetails } = require("./services/format_data");
const { createFolders } = require("./services/folder");
const { downloadEpisodes } = require("./services/download_episodes");

(async () => {
  try {
    const series_name = process.argv[2].split("hoichoi.tv")[1];
    if (!series_name) {
      console.error("Series name or path is undefined");
    }
    console.log("Current Series Name: ", series_name);
    const seriesDetails = await getDetails(series_name);
    const data = formatSeriesDetails(seriesDetails);
    await createFolders(data);
    await downloadEpisodes(data);
    console.log("Download complete");
  } catch (error) {
    console.error(`Something went wrong. ${error.message}`);
  }
})();
