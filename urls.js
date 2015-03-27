var fs = require("fs"),
    csv = require("fast-csv");

// fetch the json
 function getJSON(){
     var string = '';
     
     var request = require('request');
     request('http://projects.betanyc.us/projects')
        .on('data', function(data){
          if (data)
            string += data;
        })
        .on('end', function(){
          makeCSV(string)
      });
      
 }
 
// write it out as a csv
 function makeCSV(string){
   
   // get the json
   all = JSON.parse(string);
   
   // just projects with a homepage please
   var projects = all.filter(function(n){ return n.homepage});
   
   // let's make that into a csv
  var output = fs.createWriteStream("urls.csv"),
      writer = csv.createWriteStream({headers: true}),
      tasks = [],
      errors = 0;
  
  var csvStream = csv.format({headers: true}),
      writableStream = fs.createWriteStream("urls.csv");

  writableStream.on("finish", function(){
    console.log("Done writing csv!");
  });
  
  csvStream.pipe(writableStream);
  for (var row = 0; row < projects.length; row++) 
    csvStream.write({
      "Project": projects[row]['name'],
      "Domain Name": projects[row]['homepage'] 
    });
  csvStream.end();
  
}




getJSON();