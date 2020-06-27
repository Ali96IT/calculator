//getNumber
function getNumber(num){
  var result  = document.getElementById("result");
  result.value += num;
}
//clearResult
function clearResult(){
    var result  = document.getElementById("result");
    var answer  = document.getElementById("answer");

    result.value = ""
    answer.value = ""

}
//getResult
function getResult(){
    var result  = document.getElementById("result");
    result = eval(result.value);
    document.getElementById('answer').value = '=' + result;
}
//backspace
function backSpace() {
  
    var number = result.value;
    
    var len = number.length - 1;
    
    var newNumber = number.substring( 0, len );
    
    result.value = newNumber;
  
  }
  //brackets
  var i = 0;
  function brackets(){
    var result_var = document.getElementById('result');
    if(i== 0){
       result_var.value += '(';
       i = 1;
    }
    else if(i == 1) {
      result_var.value += ')';
    }
  }