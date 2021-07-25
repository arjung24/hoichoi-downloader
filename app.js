const { getDetails } = require('./services/series_details');
const { formatSeriesDetails } = require('./services/format_data');
const { initFolderStructure } = require('./services/folder');
const {
  downloadEpisodes,
  downloadMovie,
} = require('./services/download_videos');

(async () => {
  try {
    const seriesName = process.argv[2].split('hoichoi.tv')[1];
    if (!seriesName) {
      console.error('Series name or path is undefined');
    }

    const seriesDetails = await getDetails(seriesName);
    const data = formatSeriesDetails(seriesDetails);
    console.log('Current Series Name: ', data.name);
    await initFolderStructure(data);
    if (data.movie && data.movie.url) {
      await downloadMovie(data);
    } else {
      await downloadEpisodes(data);
    }

    console.log('Download complete');
  } catch (error) {
    console.error(`Something went wrong. ${error.message}`);
  }
})();
