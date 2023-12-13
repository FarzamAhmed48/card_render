const cards=[
    
        {
        "id": 4,
        "title": "newTitle",
        "price": 205,
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "image_url": "https://i.imgur.com/R2PN9Wq.jpeg"
        },
        {
        "id": 7,
        "title": "Ergonomic Wooden Tuna",
        "price": 743,
        "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "image_url": "https://i.imgur.com/mp3rUty.jpeg"
        },
        {
        "id": 9,
        "title": "Electronic Bronze Chips",
        "price": 808,
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "image_url": "https://i.imgur.com/R3iobJA.jpeg"
        },
        {
        "id": 11,
        "title": "Awesome Bronze Car",
        "price": 382,
        "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "image_url": "https://i.imgur.com/cBuLvBi.jpeg"
        },
        {
        "id": 12,
        "title": "Recycled Rubber Cheese",
        "price": 30,
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "image_url": "https://i.imgur.com/KeqG6r4.jpeg"
        }
        
]
const [one, two ,three, four, five]=cards;
for(let i=0;i<=5;i++){
    if(i==1){
        let obj=document.getElementById("card1");
        const {id,title,price,description,image_url}=one;
        obj.innerHTML=`<img src ="${image_url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description} <b> Rs ${price}</p>
          <a href="#" class="btn btn-primary">Go Somewhere</a>
        </div>`
    }
    else if(i==2){
        let obj=document.getElementById("card2");
        const {id,title,price,description,image_url}=two;
        obj.innerHTML=`<img src ="${image_url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description} <b> Rs ${price}</p>
          <a href="#" class="btn btn-primary">Go Somewhere</a>
        </div>`
    }
    else if(i==3){
        let obj=document.getElementById("card3");
        const {id,title,price,description,image_url}=three;
        obj.innerHTML=`<img src ="${image_url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}<b> Rs ${price}</p>
          <a href="#" class="btn btn-primary">Go Somewhere</a>
        </div>`
    }
    else if(i==4){
        let obj=document.getElementById("card4");
        const {id,title,price,description,image_url}=four;
        obj.innerHTML=`<img src ="${image_url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}<b> Rs ${price}</p>
          <a href="#" class="btn btn-primary">Go Somewhere</a>
        </div>`
    }
    else if(i==5){
        let obj=document.getElementById("card5");
        const {id,title,price,description,image_url}=five;
        obj.innerHTML=`<img src ="${image_url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}<b> Rs ${price}</p>
          <a href="#" class="btn btn-primary">Go Somewhere</a>
        </div>`
    }   
}