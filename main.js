

var clothing_section=document.getElementById('clothing_section');
var proudctItems=[];
function createHomeClothsSection(data){
  var clothProduct=document.getElementById('clothProduct');
  var divSetter=document.createElement('a');
  divSetter.className="col-md-4 col-12 col-lg-4 my-3 rounded-top rounded-lg d-inline";
  divSetter.href=`productDetail.html?id=${data.id}`;
  divSetter.id=`${data.id}`;

  divSetter.innerHTML=`<div class="card  d-flex flex-column divSetter px-0  border border-dark shadow-md " >
  <figure class="figcard"><img src="${data.preview}" class="card-img-top rounded-top img-fluid" alt="..." style="height:40.5rem;"></figure>
  <div class="card-body d-flex flex-column flex-fill" style="height:150px;">
    <h5 class="card-title text-truncate w-100">${data.name}</h5>
    <p class="card-text">${data.brand}</p>
    <h6 class="card-text Pprice">Rs:${data.price}</h6>
</div>`;
clothProduct.appendChild(divSetter);

}
function createHomeAssSection(data){
  var clothProduct=document.getElementById('accessories');
  var divSetter=document.createElement('a');
  divSetter.className="col-md-4 col-12 col-lg-4 my-3 rounded-top rounded-lg d-inline";
  divSetter.setAttribute("style","height:auto");
  divSetter.href=`productDetail.html?id=${data.id}`;
  divSetter.id=`${data.id}`;

  divSetter.innerHTML=`<div class="card  d-flex flex-column divSetter px-0  border border-dark shadow-md " >
  <figure class="figcard"><img src="${data.preview}" class="card-img-top rounded-top img-fluid" alt="..." style="height:450px;"></figure>
  <div class="card-body d-flex flex-column flex-fill" style="height:150px;">
    <h5 class="card-title text-truncate w-100">${data.name}</h5>
    <p class="card-text">${data.brand}</p>
    <h6 class="card-text Pprice">Rs:${data.price}</h6>
</div>`;
clothProduct.appendChild(divSetter);

}

var http = new XMLHttpRequest();
http.open("GET","https://5d76bf96515d1a0014085cf9.mockapi.io/product",true);
    http.onreadystatechange= function(){
        if(this.readyState === 4){
            var responeArr=JSON.parse(this.responseText);
            // pro=responeArr;
            proudctItems=responeArr;
            for(var i=0;i<proudctItems.length-5;i++){
              createHomeClothsSection(proudctItems[i]);
              // console.log(proudctItems[i]);                
          }
            
            
        }
    }
    http.send();
var http = new XMLHttpRequest();
http.open("GET","https://5d76bf96515d1a0014085cf9.mockapi.io/product",true);
    http.onreadystatechange= function(){
        if(this.readyState === 4){
            var responeArr=JSON.parse(this.responseText);
            // pro=responeArr;
            proudctItems=responeArr;
            for(var i=0;i<proudctItems.length;i++){
              if(i>=5){

                createHomeAssSection(proudctItems[i]);
                // console.log(proudctItems[i]);                
              }
          }
            
            
        }
    }
    http.send();
    
//  ===============================productDetailPage====================================================

var lenthOfStoreCount=localStorage.getItem('ProductInCart')
lenthOfStoreCount=JSON.parse(lenthOfStoreCount)
var cartCount=document.getElementById('cartCount');
cartCount.innerHTML=lenthOfStoreCount.length;
console.log(lenthOfStoreCount.length);
 













    
    
