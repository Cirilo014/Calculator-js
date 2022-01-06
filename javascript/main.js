function insert(num){

    var number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num;
}

function clean(){
    document.getElementById('result').innerHTML = "";
}

function back(){
   var back =  document.getElementById('result').innerHTML;
   document.getElementById('result').innerHTML = back.substring(0, r.length -1);

}

function operation(){
    var calc = document.getElementById('result').innerHTML;
    if(calc){
        document.getElementById('result').innerHTML = eval(calc);
    }
} 