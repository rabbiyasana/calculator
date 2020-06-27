function solution(num){
     var inp=document.getElementById("sol");
    sol.value+=num;

}

function clearres(){
var inp=document.getElementById("sol");
sol.value =""
}

function getr(){
    var eq=document.getElementById("sol");
      sol.value=eval(sol.value);
}