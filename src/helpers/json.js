const fs = require("fs");

class Json {
  jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
      if (err) {
        return cb && cb(err);
      }
      try {
        const object = JSON.parse(fileData);
        return cb && cb(null, object);
      } catch (err) {
        return cb && cb(err);
      }
    });
  }

  jsonSaver(filePath, data) {
    fs.writeFile(filePath, data, (err) => {
      if (err) {
        throw err;
      }
    });
  }
}

module.exports = Json;
