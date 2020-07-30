const db = require("../confiq/database");

const AllDataProducts = (body,callback) => {
    const {searchKey} = body;
      
    console.log(body);
    db.query(
      {
        sql: 'SELECT * FROM  products',
        values: [`%${searchKey}%`,`%${searchKey}%`]
      },
      function(err, result) {
        console.log(result)
        callback(err, result);
      }
      
    );
}

const DetailProducts = (id, callback) => {
  db.query(
    {
      sql: 'SELECT * FROM  products WHERE id = ?',
      values: [id],
    },
    function(err, result) {
      console.log(result)
      callback(err, result[0]);
    }
    
  );
}


const insertDataProducts = (item, callback) =>{
    db.query({
        sql: 'INSERT INTO products SET ?',
        values: {
            name: item.name,
            image: item.image,
            price: item.price,
            discount: item.discount,
            sale: item.sale,  
            flashsale: item.flashsale
        }
    },
    function(err, result) {
        console.log(result)
        callback(err, result);
    })
}


const updateProduct = (item, id, callback) =>{
  db.query({
      sql: 'UPDATE products SET ? WHERE id = ?',
      values: [{...item},id]
  },
  function(err, result) {
      console.log(result)
      callback(err, result);
  })
}

module.exports = {
  updateProduct,
    AllDataProducts,
    insertDataProducts,
    DetailProducts
};
