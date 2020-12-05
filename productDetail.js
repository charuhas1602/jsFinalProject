
var a=window.location.search.split("=");
var test=document.getElementById('test');
// test.innerHTML+=a[1];

var proudctItems=[];

// console.log(proudctItems);
// var http = new XMLHttpRequest();
// http.open("GET","https://5d76bf96515d1a0014085cf9.mockapi.io/product",true);
//     http.onreadystatechange= function(){
//         if(this.readyState === 4){
//             var responeArr=JSON.parse(this.responseText);
//             proudctItems=responeArr;
           
            
//         }
//     }
//     http.send();
var http = new XMLHttpRequest();
http.open("GET","https://5d76bf96515d1a0014085cf9.mockapi.io/product",true);
    http.onreadystatechange= function(){
        if(this.readyState === 4){
            var responeArr=JSON.parse(this.responseText);
            proudctItems=responeArr; 
            var a=window.location.search.split("=");
            productDetailData(proudctItems[a[1]-1]);
            console.log(proudctItems[a[1]-1]);

        }
    }
    http.send();
    
   function productDetailData(data){
       var productDetail=document.getElementById('productDetail');
       var divSetter=document.createElement('div');
       divSetter.className="d-flex p-5 flex-wrap ";
       divSetter.innerHTML=`    
       <div class="col-sm-12  col-md-6 col-lg-6 px-3 d-flex pb-3  justify-content-lg-center   justify-content-md-center pb-3 "
       style="height: 450px;">
       <img class="img-fluid "
           src="${data.preview}"
           alt="" style="height: 100%;" id="mainImg">
   </div>
   <div class="col-sm-12 pt-5 col-md-6 col-lg-6 px-0 d-flex flex-column justify-content-center px-2 " style="height: 450px;">
       <h1>${data.name}</h1>
       <p ><b class="Pprice ">Brand:</b> ${data.brand}</p>
       <p class="Pprice">Price: <span class="text-primary">${data.price}</span> </p>
       <p class="font-weight-bold Pprice">Description</p>
       <p class="font-weight-light">${data.description}</p>
       <div class="container">
           <div class="row ">
               <div class="col-12 ">
                   <div class="row w-100 d-flex justify-content-start flex-wrap">
                       <div class="col-2 px-0">
                           <img class="cardImg img-fluid px-0 "
                               src="${data.photos[0]}"
                               alt="" style="height:90px;" onclick="onClickFun(this)">
                       </div>
                       <div class="col-2 px-0">
                           <img class="cardImg img-fluid px-0"
                               src="${data.photos[1]}"
                               alt="" style="height:90px;" onclick="onClickFun(this)">
                       </div>
                       <div class="col-2 px-0">
                           <img class="cardImg img-fluid px-0"
                               src="${data.photos[2]}"
                               alt="" style="height:90px;" onclick="onClickFun(this)">
                       </div>
                       
                   </div>
                   <button type="button" class="text-capitalize btn btn-dark mt-5 Pprice">Add to cart</button>
               </div>
           </div>
       </div>
   </div>`;
   productDetail.appendChild(divSetter);

   }

   function onClickFun(data){
    mainImg.src=data.src;
    console.log(data.src);
}
















    
    
