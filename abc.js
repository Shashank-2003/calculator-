function add()
{
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;
    let res=parseInt(num1)+parseInt(num2);
    console.log(res);
    document.getElementById('res').innerHTML='<h1>Result:'+ res +'</h1>';
}
function subtract()
{
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;
    let res=parseInt(num1)-parseInt(num2);
    console.log(res);
    document.getElementById('res').innerHTML='<h1>Result:'+ res +'</h1>';
}
function sqrnum1()
{
    let num1=document.getElementById('num1').value;
    let res=parseInt(num1)*parseInt(num1);
    console.log(res);
    document.getElementById('res').innerHTML='<h1>Result:'+ res +'</h1>';
}
function sqrnum2()
{
    let num2=document.getElementById('num2').value;
    let res=parseInt(num2)*parseInt(num2);
    console.log(res);
    document.getElementById('res').innerHTML='<h1>Result:'+ res +'</h1>';
}
function max()
{
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;
    if(num1>num2)
    res=num1;
    else
    res=num2;
    console.log(res);
    document.getElementById('res').innerHTML='<h1>Result:'+res+'</h1>';
}
function min()
{
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;
    if(num1>num2)
    res=num2;
    else
    res=num1;
    console.log(res);
    document.getElementById('res').innerHTML='<h1>Result:'+res+'</h1>';
}
function quotient()
{
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;
    res=~~(num1/num2);
    console.log(res);
    document.getElementById('res').innerHTML='<h1>Result:'+res+'</h1>';
}
function remainder()
{
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;
    res=num1 % num2;
    console.log(res);
    document.getElementById('res').innerHTML='<h1>Result:'+res+'</h1>';
}