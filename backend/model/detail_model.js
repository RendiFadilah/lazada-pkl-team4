const db = require('../confiq/database');

const findItemDetails = (id , callback) => {
    db.query({
        sql: "SELECT * FROM detail_products WHERE id  = ?",
        values: [id]
    }, function(err,result) {
        callback(err,result)
    })
}


// const ItemDetails = ( post, callback) => {
//     db.query({
//         sql: "INSERT INTO detail_products SET ?",
//         values: {
//             name: post.name,
//             rating: post.rating,
//             brand: post.brand,
//             price: post.price,
//             price_sale: post.price_sale,
//             discount: post.discount,    
//             color: post.color,
//             size: post.size
//         }
//     }, function(err,result){
//         if(err) throw console.log("error when insert itemDetails");
//         callback(err,result)
//     })
// }

module.exports = {
    findItemDetails,
    
};