// var a=window.location.search.split("=");
// console.log(a);

var http = new XMLHttpRequest();
http.open("GET","https://5d76bf96515d1a0014085cf9.mockapi.io/product",true);
    http.onreadystatechange= function(){
        if(this.readyState === 4){  
                    
        var responeArr=JSON.parse(this.responseText);
            
        var a=window.location.search.split("=");
        // productOnCart(responeArr,a)
        // console.log(responeArr)
        storeItems(responeArr,a)
        }
    }
    http.send();

    function storeItems(responeArr,a){
        // console.log(responeArr);
        var storedItem;
        let cartItems=localStorage.getItem('ProductInCart');
      
        if(cartItems==null){
            storedItem=[];
        }else{
            storedItem=JSON.parse(cartItems)
        }   
        storedItem.push(a[1])
        var removedDuplicateFromStore=[...new Set(storedItem)];
        if(removedDuplicateFromStore.includes(null)){
            // alert('yes null')
            var a=removedDuplicateFromStore.indexOf(null)
            removedDuplicateFromStore.splice(a,1);
        }
        localStorage.setItem('ProductInCart',JSON.stringify(removedDuplicateFromStore));
        // console.log(removedDuplicateFromStore);
        for(var i=0;i<removedDuplicateFromStore.length;i++){
            // productOnCart(responeArr[i+1])
            productOnCart(responeArr[removedDuplicateFromStore[i]-1]);
        }

       

    }

    function productOnCart(responeArr){   
        var productSection=document.getElementById('productSection');
        var divSetter=document.createElement('div');
        divSetter.innerHTML=`<div
        class="d-flex justify-content-around border border-light shadow rounded p-2 mb-3 m-1 align-items-center">
        <div class=" border border-dark rounded shadow">
            <img src="${responeArr.preview}" class=""
                alt="" style="height: 60px; width: 50px;">
        </div>
        <div class="text-uppercase w-50">
            <p class="font-weight-bold"><small>${responeArr.name}</small></p>
            <p ><small><b>${responeArr.brand}</b></small></p>
        </div>
        <div class="text-uppercase">
            <p class="font-weight-bold text-info">Price</p>
            <p id="price${responeArr.id}">${responeArr.price}</p>
        </div>
        <div class="flex-grow-0 ">
        <input type="hidden" id="${responeArr.id}" name="" value="${responeArr.price}">
            <span>
                <select id="quantity${responeArr.id}" onchange="getValue()">
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
            </span>
        </div>
    </div>`;
    productSection.appendChild(divSetter);
        function getvalue(){

           return document.getElementById('data').selectedIndex;
        }
        
    }

var lenthOfStoreCount=localStorage.getItem('ProductInCart')
lenthOfStoreCount=JSON.parse(lenthOfStoreCount)
var cartCount=document.getElementById('cartCount');
cartCount.innerHTML=lenthOfStoreCount.length;
console.log(lenthOfStoreCount.length);
 

  