getLocalStorageCount();
// window.onload = function () {window.location.reload()}
var a=window.location.search.split("=");
var test=document.getElementById('test');
var addToCart=document.getElementById("addToCart");
var lenthOfStoreCount=localStorage.getItem('ProductInCart')
lenthOfStoreCount=JSON.parse(lenthOfStoreCount)
var cartCount=document.getElementById('cartCount');
cartCount.innerHTML=lenthOfStoreCount.length;
console.log(lenthOfStoreCount.length);
// test.innerHTML+=a[1];

function getLocalStorageCount(){
    let cartCount=document.getElementById("cartCount");
    let webtask=localStorage.getItem("localtask");
    if(webtask==null){
        cartCount.innerHTML="";
    }else{
        cartCount.innerHTML=webtask.length;
    }
}



var http = new XMLHttpRequest();
http.open("GET","https://5d76bf96515d1a0014085cf9.mockapi.io/product",true);
    http.onreadystatechange= function(){
        if(this.readyState === 4){  
            var productItems;          
            var responeArr=JSON.parse(this.responseText);
            
            var a=window.location.search.split("=");
            productDetailData(responeArr[a[1]-1],responeArr);
            // console.log(proudctItems[a[1]-1]);
            // productItemData(responeArr);
        }
    }
    http.send();

    function productItemData(data){
        // console.log(data);
    }    
   function productDetailData(data,data1){
    productItemData(data1);
       var productDetail=document.getElementById('productDetail');
       var divSetter=document.createElement('div');
       divSetter.className="d-flex p-5 flex-wrap ";
       divSetter.innerHTML=`    
       <div class="col-sm-12 col-md-6 col-lg-6 px-3 d-flex py-3  justify-content-lg-center  justify-content-md-center pb-3 my-5 "
       style="height: 450px; ">
            <img class="img-fluid " src="${data.preview}" alt="" style="height: 100%;" id="mainImg">
        </div>
    <div class="col-sm-12 pt-5 col-md-6 col-lg-6 px-0 d-flex flex-column justify-content-center px-2 " style="height: 450px;">
       <h1 class="headingTitleProduct font-weight-bold mt-5 pt-3">${data.name}</h1>
       <p ><b class="Pprice ">Brand:</b> ${data.brand}</p>
       <p class="Pprice">Price: <span class="text-primary">${data.price}</span> </p>
       <p class="font-weight-bold Pprice">Description</p>
       <p class="font-weight-light " style="font-size: 9px;" >${data.description}</p>
       <div class="container">
           <div class="row ">
               <div class="col-12 ">
                   <div class="row  d-flex justify-content-start flex-wrap">
                       <div class="col-2 px-0 pr-3">
                           <img class="cardImg img-fluid px-0 "
                               src="${data.photos[0]}"
                               alt="" style="height:90px;" onclick="onClickFun(this)">
                       </div>
                       <div class="col-2 px-0 pr-3">
                           <img class="cardImg img-fluid px-0"
                               src="${data.photos[1]}"
                               alt="" style="height:90px;" onclick="onClickFun(this)">
                       </div>
                       <div class="col-2 px-0 pr-3">
                           <img class="cardImg img-fluid px-0"
                               src="${data.photos[2]}"
                               alt="" style="height:90px;" onclick="onClickFun(this)">
                       </div>
                       
                   </div>
                   <a href="cartpage.html?id=${data.id}" onclick="addingToCart(${data.id})" id="addToCart"><button type="button" class="text-capitalize btn btn-dark mt-5 Pprice">Add to cart</button>
                   </a>
                   
               </div>
           </div>
       </div>
   </div>`;
   productDetail.appendChild(divSetter);

   }

//    Image click Function ...........//
   function onClickFun(data){
    mainImg.src=data.src;
    // console.log(data.src);cartpage.html?id=${data.id}
}


function addingToCart(data){
   console.log(data1);
    var counter;
    var cartCount=document.getElementById("cartCount");
    let productNumbers=localStorage.getItem('cartNumbers');
    productNumbers=parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem("cartNumbers",productNumbers+1);
        cartCount.innerHTML=productNumbers;
    }else
    {
        localStorage.setItem("cartNumbers",1);
        cartCount.innerHTML=productNumbers;
    }
    
}


   
      


