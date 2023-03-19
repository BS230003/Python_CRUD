
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";


MongoClient.connect(url, function(err, db) {
  console.log("MongoClient.connect started!");
    
  if (err) throw err;
  console.log("Database created / connected!");
  dbo = db.db("mydb");
  
  
    // dbo.collection("students").insertOne({"name":"C Fischer","marks":98}, function(err, res) {
    //     if (err) throw err;
    //     console.log("1 document inserted");
    // });

    // dbo.collection("students").insertMany([{"name":"B Bannach","marks":100}, {"name":"C Hensel", "marks":99}], function(err, res) {
    //   if (err) throw err;
    //   console.log("2 / many document inserted");
    // }); 


    // delete function
    dbo.collection ("students").deleteOne({"name": "D Hensel"}, function (err, res) {
      if (err) throw err;
      console.log ("record deleted ? ", res);
      
    });

    // read array and print each 
    dbo.collection ("students").find ({}).toArray ( function (err, result) {  
      console.log (" ==== Reading result cursor... ,");
      for (const rowx of result )
        console.log (rowx.name, rowx.marks) ;
    

      console.log (" ==== Total Records " , result.length) ;
      db.close ();
	  console.log("Database closed.. ");
    });

    
});




/*
var dbo ;
var myDb;

function OpenDatabase ()
{
  MongoClient.connect(url, function(err, db) {
  console.log("MongoClient.connect started!");
    
  if (err) throw err;
  console.log("Database created / connected!");
  myDb = db;
  dbo = db.db("mydb");
  
  });
}


function CloseDatabase ()
{
  myDb.close();
}

function readDatabase ()
{
  dbo = myDb.db("mydb");
  var results = dbo.collection ("students").find ({});
    results.forEach (row => {
     console.log (row);        
  });

}

function RunTheTest ()
{
  OpenDatabase ();
  readDatabase ();
  //CloseDatabase ();
}

RunTheTest ();

*/
