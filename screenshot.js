'use strict';
chrome.storage.local.get(['payload'], function(result){
  document.getElementById("create-screenshot").innerHTML = result.payload;
  html2canvas(document.getElementById("create-screenshot"), 
    {width: "fit-content", allowTaint: true}).then(function(canvas) {
    
    document.getElementById("screenshot-img").src = canvas.toDataURL();
    //Comment the below line to retain the original table
    document.getElementById("create-screenshot").style.display = "none";
  });;
})


