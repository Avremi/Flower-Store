


let path=require('path');
let data=require(__dirname+'/data/data.json');

const express=require("express");
let app=express();
app.set('view engine','ejs');

app.use(express.static('public'));

app.get('/',function(req,res){
    res.render('index',{'userType':'anonymous','username':null});
})

app.listen(8080, function () {
    console.log('Listening on port 8080!');
  });


  app.post("/login",function(req,res){

    //check validation
  });

  app.get("/getMenu",function(req,res){

    let username=req.username;
    let userType=getUserType(username);
    res.render('partial/menu',{'username':username,'userType':userType});
  });


  app.get('/gridFlowers',function(req,res){
    res.render('partial/flowerGrid');
});

app.get('/userGrid',async function(req,res){
    await sleep(3000);
    let username="";
    let userType="";//i have
    res.render('partial/userGrid',{'username':username,'userType':userType});
});


app.get('/branchGrid',function(req,res){
    res.render('partial/branchGrid');
});


  app.get('/flowers',function(req,res){
      let userType=getUserType(req.userName);
      if(userType=="Admin"||"worker" || "client" ){
        res.json(data.flowers);
      }
     else{
         res.status(404);
         res.send();
     }
  });

  app.get('/branches',function(req,res){
    let userType=getUserType(req.userName);
    if(userType== "Admin"){
        res.json(data.branches);
    }
    else{
        res.status(404);
         res.send();
    }
});

app.get('/users', async function(req,res){
    await sleep(3000);
    let userType=getUserType(req.userName);
    if(userType=="Admin"||userType=="worker"){
        let usersList=permitedUsers(userType);
        res.json(data.users);
    }
    else{
        res.status(404);
         res.send();
    }
});

function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}


  function getUserType(userName){
      data.users.forEach(element => {
          if(element.credential.username==userName){
              return element.userType;
          }
          
      });
      return null;
  }

  function permitedUsers(userType){
       //I have to implement
  }

  app.get('/login',function(req,res){
      let username=""
      let password=""//i ahve t ofetch teses data
      
      if(false){
        res.status(404);

      }
      else{
        res.status(200)

      }
      res.send();
  })