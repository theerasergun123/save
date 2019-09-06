function result(){
    var in1 = $('#num1').val();
    var in2 = $('#num2').val();
    var oper = $('#operator').val();
    var exp = in1 + oper + in2;
     $('h1').html(eval(exp));
    
}


    