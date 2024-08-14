var num1 = 0;
var tOPerac = 0;

function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;

    if (!isNaN(num) && numero === "0" || document.getElementById('AC').innerHTML === "CE")
    {

        document.getElementById('resultado').innerHTML = num;
        if (document.getElementById('AC').innerHTML === "CE")
            {
                document.getElementById('AC').innerHTML = "AC";
            }
 
    }
    else
    {
        document.getElementById('resultado').innerHTML = numero + num;
    }
}

function oper(soper)
{
    var numero = parseFloat(document.getElementById('resultado').innerHTML)
    if (!num1)
    {
        num1 = numero;
        document.getElementById('resultado').innerHTML = 0;
        document.getElementById('previous').innerHTML = num1 + " " + soper;
    }
    else
    {
        if (tOPerac === 1) {num1 += numero} else if (tOPerac === 2) {num1 -= numero}else if (tOPerac === 3) {num1 *= numero} else {num1 /= numero}
        document.getElementById('resultado').innerHTML = 0;
        document.getElementById('previous').innerHTML = num1 + " " + soper;
    }

    if (document.getElementById('AC').innerHTML === "CE")
        {
            document.getElementById('AC').innerHTML = "AC";
        }
    if (soper === '+') {tOPerac = 1} else if (soper === '-') {tOPerac = 2} else if (soper === '*') {tOPerac = 3} else {tOPerac = 4}

}

function clean()
{
    document.getElementById('resultado').innerHTML = "0";
    document.getElementById('previous').innerHTML = "0";
    num1 = 0;
    if (document.getElementById('AC').innerHTML === "CE")
    {
        document.getElementById('AC').innerHTML = "AC";
    }
}

function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if (document.getElementById('resultado').innerHTML != 0)
    {
        document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
    }
    if (resultado.length === 1)
    {
        document.getElementById('resultado').innerHTML = "0";
    }
    if (document.getElementById('AC').innerHTML === "CE")
    {
        document.getElementById('AC').innerHTML = "AC";
        document.getElementById('resultado').innerHTML = "0";
    }
}

function calculate()
{
    var numero = parseFloat(document.getElementById('resultado').innerHTML)

    if (tOPerac === 0) {num1 = numero}else if (tOPerac === 1) {num1 += numero} else if (tOPerac === 2) {num1 -= numero}else if (tOPerac === 3) {num1 *= numero} else {num1 /= numero}

    document.getElementById('previous').innerHTML = "0";
    document.getElementById('AC').innerHTML = "CE";
    document.getElementById('resultado').innerHTML = num1;
    if (num1 === Infinity || num1 === -Infinity)
    {
        document.getElementById('resultado').innerHTML = "💀💀💀💀💀💀💀💀💀💀";
         document.getElementById('previous').innerHTML = "💀"
        console.log("💀💀💀💀💀💀💀💀💀💀")
    }
    if (isNaN(num1))
    {
        document.getElementById('resultado').innerHTML = "❦Iunah❦";
        document.getElementById('previous').innerHTML = "❦I Love You So Much My Darling❦"
        console.log("❦Love of my life❦");
    }
    num1 = 0;
}
