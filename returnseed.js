const mongoClient = require('mongodb').MongoClient,
      url = "mongodb://localhost:27017/";
const data = [
  {
    "order_id":"OR100001",
    "return_invoice_barcodeNo":"715676017633",
    "barcode_no":"031655337913",
    "barcode_type":"UPC",
    "order_details":{
      "products":[{
          "product_id":"we123",
          "product_name":"Driveworks",
          "brand":"Driveworks",
          "category":"Wheel Bearing Hub Assembly",
          "image":"https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage//186/thumb/10895566_dwk_nt590253_pri_thmb.jpg"
        },
        {
          "product_id":"py123",
          "product_name":"Pyle",
          "brand":"Pyle",
          "category":"Water Resistant Radio Sheild",
          "image":"https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage//1145/thumb/10240107_pye_plmrcw2_pri_thmb.jpg"

        }
    ]
    }
  }
]

    mongoClient.connect(url,(err,client)=>{

    if(err) throw err;
    else{
      const db = client.db('advanceautoparts');

      db.collection('returnInvoiceDetails').insertMany(data,(err,result)=>{
        if(err) throw err;
        else console.log('data inserted');
      })
    }

    });
