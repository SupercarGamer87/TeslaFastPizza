function onSubmit(){
let stickers = document.getElementsByName('stickers')

stickers.forEach(node=> console.log(node.checked))

for (var i =0; i<stickers.length;i++){
  if(stickers[i].checked){
    console.log(stickers[i].value)
  }
}
}
let stickers = document.getElementsByName('stickers')

stickers.forEach(node =>console.log(node.checked))

 function checkBoxes() {
  for(var i = 0; i<toppers.length; i++) {
    if(toppers[i].checked) {
      console.log(toppers[i].value);
    }
  }
}


let Zip_Code = document.getElementByid('zip')
.value
console.log(zip)

if(zip === "80007"){
  document.getElementById("zip")
  .style.background = "green";
  else{
    document.getElementById("zip")
    .style.background = "red";
  }
}


}








