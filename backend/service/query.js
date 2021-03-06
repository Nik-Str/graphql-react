const pool = require('./dbConnection');

function queryData(sql) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, con) => {
      if (err) reject(err);
      con.query(sql, (err, res) => {
        if (err) reject(err);
        con.release();
        resolve(res);
      });
    });
  });
}

module.exports = { queryData };
