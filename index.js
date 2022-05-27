let image = document.getElementById("image");
let order_id=document.getElementById("ids")
    let food = document.getElementById("food");
    let order = document.querySelector("button");
    order.addEventListener("click",play);
    console.log("order food");
    function checkcontent(){
        return true;
    }

    function play(){
        let mypromise = new Promise(function(resolve,reject){
            setTimeout(function(){
                let content = checkcontent();
                if (content === true){
                    resolve();
                }else {
                    reject("order unsuccessful");
                }
            },2000)
        })
        mypromise.then(function(res){
               if(food.value=='Pizzas'){
                   image.src="https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272__340.jpg";
                    order_id.innerText="ORDER ID: EH5907239292"
               }else if(food.value=='Burger'){
                   image.src="https://cdn.pixabay.com/photo/2020/03/21/11/17/burger-4953465__340.jpg";
                   order_id.innerText="ORDER ID: FH623566478798615"

               }else if(food.value=='Chicken-Biryani'){
                    image.src="https://cdn.pixabay.com/photo/2022/04/26/11/33/dish-7158169__340.jpg";
                    order_id.innerText="ORDER ID: nqtypp78798615"
               }else {
                   image.src = "https://i.gifer.com/6X3W.gif";
                   order_id.innerText="ORDER ID: QH6UITH7777701000"
               }
            //    order_id.innerText="akkjskljfklskfaskljfkl"
             

            // image.src = "https://cdn.pixabay.com/photo/2022/04/26/11/33/dish-7158169__340.jpg"
        }).catch(function(e){
            console.log("Error:",e);
        })
    }