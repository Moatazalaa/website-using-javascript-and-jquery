
        let returnData=[];


let httpReq = new XMLHttpRequest();
httpReq.open("GET","https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2RPbeGs-N6OlsunBMRElBhtS9iwSCBeFlFXdXXmyXEOYp8XF9dZdzLDKo")
httpReq.send();
httpReq.onreadystatechange = function(){
    if(httpReq.readyState == 4 && httpReq.status == 200)
    {
         returnData  =  JSON.parse(httpReq.response).results;
         
     //    data =returnData.results
         
      displayData(returnData);
      

      
    }
}



function displayData(input){
    var temp = ``;
    for (var i = 0; i<input.length; i++){
        temp += `<div class=" col-lg-4 col-md-6 col-sm-12 mb-5  ">
        <div class="main-box  ">
          <div class="img-box ">
              <img class=" img-fluid " src="https://image.tmdb.org/t/p/w500`+input[i].poster_path+`" alt="">
          </div>
          <div class="content-box  p-2">
            <div class="layer d-flex align-items-center ">
              <div class="info p-0 text-center">
             
                  <h2>`+input[i].title+`</h2>
                  <p>`+input[i].overview+`</p>
                  <p>`+input[i].vote_average+`</p>
                  <p>`+input[i].release_date+`</p>
                  
              </div>
              </div>
          </div>
        </div>
      </div>`
      document.getElementById("demo").innerHTML = temp;
      
  }
}

function searchMovie(term){
    let temp =``;
    for (let i = 0; i < returnData.length; i++) {
        if(returnData[i].title.toLowerCase().includes(term.toLowerCase()))
        {
            temp += `<div class=" col-lg-4 col-md-6 col-sm-12 mb-5  ">
        <div class="main-box  ">
          <div class="img-box ">
              <img class=" img-fluid " src="https://image.tmdb.org/t/p/w500`+returnData[i].poster_path+`" alt="">
          </div>
          <div class="content-box  p-2">
            <div class="layer d-flex align-items-center ">
              <div class="info p-0 text-center">
             
                  <h2>`+returnData[i].title+`</h2>
                  <p>`+returnData[i].overview+`</p>
                  <p>`+returnData[i].vote_average+`</p>
                  <p>`+returnData[i].release_date+`</p>
                  
              </div>
              </div>
          </div>
        </div>
      </div>`
        }
        document.getElementById("demo").innerHTML = temp;
        
    }
}

function validateForm(userName){
    let userNameRegex = /^[A-Z][a-z]{3,8}/;

    if(userNameRegex.test(userName) == true){
        return true;
    }
    else{
        return false;
    }
}

let nameValue=document.querySelector("#name").value;



    if(validateForm(nameValue) == true)
    {
        $("submitBtn").animate({backgroundColor:green},1000)
    }
    else{
        
        console.log("false");
    }










$(".fa-align-justify").click(function(){
    
    let barLeft =$(".bar").css("left");
    
    
    let leftMove = $(".nav-tab-menu").innerWidth();
    console.log(leftMove);
    
    if(barLeft =="0px"){
    $(".bar").animate({left:-leftMove},1000);
    $("#changeIcon").removeClass("fa-times");
    $(".item2").animate({marginTop:180,opacity:1},30)
$(".item3").animate({marginTop:180,opacity:1},30)
$(".item5").animate({marginTop:180,opacity:1},30)
$(".item6").animate({marginTop:1800,opacity:1},30)
}
else{
    $(".bar").animate({left:0},1000);
    $("#changeIcon").addClass("fa-times");
    $(".item1").animate({marginTop:0,opacity:1},3000)
$(".item2").animate({marginTop:0,opacity:1},3000)
$(".item3").animate({marginTop:0,opacity:1},3000)
$(".item5").animate({marginTop:0,opacity:1},3000)
$(".item6").animate({marginTop:0,opacity:1},3000)
}
    

    
})
