const db = require("../confiq/database");

const AllDataLanding = (body,callback) => {
    console.log(body);
    db.query(
      {
        sql: 'SELECT * FROM  products WHERE flashsale = 1',
      },
      function(err, result) {
        console.log(result)
        callback(err, result);
      }
      
    );
}

module.exports = {
    AllDataLanding,
    insertDataLanding
};
