const mongoClient = require('mongodb').MongoClient,
      url = "mongodb://localhost:27017/";
const data = [
  { "order_id":"OR100001",
    "barcode_no":"031655337913",
    "barcode_type":"UPC",
    "order_details":{
      "products":[{
          "product_id":"we123",
          "product_name":"Driveworks",
          "brand":"Driveworks",
          "category":"Wheel Bearing Hub Assembly",
          "image":"https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage//186/thumb/10895566_dwk_nt590253_pri_thmb.jpg",
          "price":"$56.99"
        },
        {
          "product_id":"py123",
          "product_name":"Pyle",
          "brand":"Pyle",
          "category":"Water Resistant Radio Sheild",
          "image":"https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage//1145/thumb/10240107_pye_plmrcw2_pri_thmb.jpg",
          "price":"$24.99"
        },
        {
          "product_id":"kn1234",
          "product_name":"K&N",
          "brand":"K&N",
          "category":"Cabin Air Filter",
          "image":"https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage//10/thumb/11413080_knn_vf2040_pri_thmb.jpg",
          "price":"$41.99"
        },
        {
          "product_id":"cr1234",
          "product_name":"Carquest Wearever",
          "brand":"Carquest",
          "category":"Brake Rotor - Rear",
          "image":"https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage//2352/thumb/10563839_cwd_yh290610_pri_thmb.jpg",
          "price":"$63.99"
        },
        {
          "product_id":"de1234",
          "product_name":"ACDelco",
          "brand":"ACDelco",
          "category":"Iridium Spark plug",
          "image":"https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage//960/thumb/11664411_acd_41130_pri_thmb.jpg",
          "price":"$29"
        }]
    }
  }
]

    mongoClient.connect(url,(err,client)=>{

    if(err) throw err;
    else{
      const db = client.db('advanceautoparts');

      db.collection('purchasedOrderDetails').insertMany(data,(err,result)=>{
        if(err) throw err;
        else console.log('data inserted');
      })
    }

    });
