const formatSeriesDetails = (data) => {
  const contentData = data.modules.filter((p) => p.contentData !== null)[0]
    .contentData[0];

  return {
    id: data.id,
    name: data.metadataMap.title,
    moduleIds: data.moduleIds,
    episodes: contentData.seasons.map((p) => {
      return {
        id: p.id,
        title: p.title,
        episodes: p.episodes.map((o) => {
          return {
            id: o.id,
            vId: o.gist.id,
            title: o.title,
          };
        }),
      };
    }),
  };
};

module.exports = { formatSeriesDetails };
