const PouchDB = require("pouchdb");
PouchDB.plugin(require("pouchdb-adapter-memory"));

class gameDB {
  constructor(name) {
    this.db = new PouchDB(name, { adapter: "memory" });
  }

  addDocuments(doc) {
    this.db.bulkDocs(doc);
  }

  readDocument(documentName) {
    this.db.get(documentName).then(function (doc) {
      console.log(doc);
    });
  }

  getDBInfo() {
    this.db.info().then(function (info) {
      console.log(info);
    });
  }

  getAllDocs() {
    this.db.allDocs().then(function (allDocs) {
      console.log(allDocs);
    });
  }
}

module.exports = gameDB;
