Mlab import and export database commands
mongoexport --db tjmaxx --collection purchasedOrderDetails --out tjmaxx.json
mongoexport --db tjmaxx --collection returnInvoiceDetails --out tjmaxx1.json
mongoimport -h ds121163.mlab.com:21163 -d tjmaxx -c purchasedOrderDetails -u admin -p admin1 --file tjmaxx.json
mongoimport -h ds121163.mlab.com:21163 -d tjmaxx -c returnInvoiceDetails -u admin -p admin1 --file tjmaxx1.json

//to connect to shell
mongo ds121163.mlab.com:21163/advanceautoparts -u admin -p admin1

advanceautoparts database

mongoimport -h ds139775.mlab.com:39775 -d advanceautoparts -c products -u admin -p admin1 --file aapproducts.json
mongoimport -h ds139775.mlab.com:39775 -d advanceautoparts -c purchasedOrderDetails -u admin -p admin1 --file aappurchaseOrderDettails.json
mongoimport -h ds139775.mlab.com:39775 -d advanceautoparts -c returnInvoiceDetails -u admin -p admin1 --file returnInvoiceDetails.json
mongo ds139775.mlab.com:39775/advanceautoparts -u admin -p admin1
