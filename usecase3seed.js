const mongoClient = require('mongodb').MongoClient,
      url = "mongodb://localhost:27017/";
const data = [
    {
        "product_id":"we123",
        "product_name":"Driveworks",
        "barcode_no":"61377450000599",
        "brand":"Driveworks",
        "category":"Wheel Bearing Hub Assembly",
        "image":"https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage//186/thumb/10895566_dwk_nt590253_pri_thmb.jpg",
        "price":"$56.99"
      },
      {
        "product_id":"py123",
        "product_name":"Pyle",
        "barcode_no":"192379357608",
        "brand":"Pyle",
        "category":"Water Resistant Radio Sheild",
        "image":"https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage//1145/thumb/10240107_pye_plmrcw2_pri_thmb.jpg",
        "price":"$24.99"
      },
      {
        "product_id":"kn1234",
        "product_name":"K&N",
        "barcode_no":"843990058534",
        "brand":"K&N",
        "category":"Cabin Air Filter",
        "image":"https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage//10/thumb/11413080_knn_vf2040_pri_thmb.jpg",
        "price":"$41.99"
      },
      {
        "product_id":"cr1234",
        "product_name":"Carquest Wearever",
        "barcode_no":"m",
        "brand":"Carquest",
        "category":"Brake Rotor - Rear",
        "image":"https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage//2352/thumb/10563839_cwd_yh290610_pri_thmb.jpg",
        "price":"$63.99"
      },
      {
        "product_id":"de1234",
        "product_name":"ACDelco",
        "barcode_no":"71181370040412",
        "brand":"ACDelco",
        "category":"Iridium Spark plug",
        "image":"https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage//960/thumb/11664411_acd_41130_pri_thmb.jpg",
        "price":"$29"
      }
    ];

    mongoClient.connect(url,(err,client)=>{

    if(err) throw err;
    else{
      const db = client.db('advanceautoparts');

      db.collection('products').insertMany(data,(err,result)=>{
        if(err) throw err;
        else console.log('data inserted');
      })
    }

    });
