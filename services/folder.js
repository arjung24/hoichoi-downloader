const fs = require("fs");
const path = require("path");

const baseUrl = path.join(__dirname, "..", "downloads");

const createNewFolder = async (dirPath) =>
  new Promise((resolve, reject) => {
    if (!fs.existsSync(dirPath)) {
      fs.mkdir(dirPath, { recursive: true }, (err) => {
        if (err) reject(err);
        resolve();
      });
    } else {
      throw new Error("Folder already exists or videos already downloaded.");
    }
    resolve();
  });

const createFolders = async (data) => {
  await createNewFolder(`${baseUrl}/${data.name}`);
  for (let i = 0; i < data.episodes.length; i++) {
    await createNewFolder(`${baseUrl}/${data.name}/${data.episodes[i].title}`);
  }
};
module.exports = { createFolders };
