function ChangeText() {
    document.getElementById("demo").innerHTML = "Hello Wordl!!";
}
function Alertfun() {
    alert("Hello");
}
function validateForm() {
    
    var store = document.getElementById("sname").value;
    //var industryname = document.getElementById("industry").value;
    var checkBox = document.getElementById("checkbx").value;
    var companyName = document.getElementById("companyname").value;
    var vatNum = document.getElementById("vatnum").value;
    var zipCode = document.getElementById("zip").value;
    var cityName = document.getElementById("city").value;
    var countryName = document.getElementById("country").value;
    var inDstry = document.getElementById("industry").value

    //if (store.trim() == "") {

       // document.getElementById("snamedemo").style.display = "block";
        //document.getElementById("snamedemo").innerHTML = "** Please Enter Your Store Name.";
        //return false;

   // }
   // else {
      //  document.getElementById("snamedemo").style.display = "none";
      //return true;
   // }

    //if (inDstry === "industry") {
        //document.getElementById("indsdemo").innerHTML = "** Please Select Your Industry.";
       // document.getElementById("indsdemo").style.display = "block";
        //return false;
   // }
   // else {
           // document.getElementById("indsdemo").style.display = "none";
            //return true;
       // }
alert("Registration Completed Successfully");
        
    }
function addItems(){
    
    var items          = document.getElementById('listitems').value;
    var alllistitems    = document.getElementById('add-items-list');
    if(items =="")
    {
        alert("Add any item");
    }
    else{

    
    var listLi         = document.createElement('li');
    
    listLi.innerText   = items;
    alllistitems.appendChild(listLi);
    document.getElementById('listitems').value ="";
    }

}

//video script 
    var videos = document.getElementById("myVideo");
    var bttn = document.getElementById("myBttn");
    
function playMyVideo() {
    
  if (videos.pause) {
    videos.play();
    bttn.innerHTML = "Pause";
  } else {
    videos.pause();
    bttn.innerHTML = "Play";
  }
}




