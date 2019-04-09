const db = require('mariadb');
const db_opts = require('./dbOpt');

let dbc = {
  connected: false,

  init: () => {
    try {
      this.pool = db.createPool(db_opts);
    } finally {
      this.connected = true;
    }
  },
  getConnection: async () => {
    if (this.connected) {
      return await this.pool.getConnection();
    } else {
      throw 'Database is not connected';
    }
  }
};
module.exports = dbc;
