const fs = require('fs');
const http = require('http');

http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    console.log(`URL: ${req.url} Method: ${req.method}`);

    //for data fetching
    
    if(req.url ==='/signup'||req.url==="/login"&&req.method==='GET'){
        res.setHeader('Content-Type', 'application/json');
        let data = fs.readFileSync('../Database/Data.json','utf-8');
        res.end(data);

    } else if(req.url==='/signup'&&req.method==='POST'){
        res.setHeader('Content-Type', 'application/json');
        let body="";
        req.on('data',chunk=>{body+=chunk.toString()})
        req.on('end',async()=>{

            try{
                let data = JSON.parse(body);
                let fileData = fs.readFileSync('../Database/Data.json','utf-8');
                let currentData = fileData?JSON.parse(fileData):[];
                currentData.push(data);                
            fs.writeFileSync('../Database/Data.json',JSON.stringify(currentData,null,2));
            res.end(JSON.stringify({message:"Data Stored sccessfully!"}))
            }
            catch(err){
                res.end(JSON.stringify({message:"Error occered in storing data: "+err}))
            }
        })

    }else{
        res.end('<>Page Not Found</>');
    }


}).listen(3000,()=>{console.log("Server is listening at port 3000")})
