var num1 = 0;
var tOPerac = 0;

function insert(num)
{
    var numero = document.getElementById('displayNumber').innerHTML;

    if (!isNaN(num) && numero === "0" || document.getElementById('AC').innerHTML === "CE")
    {

        document.getElementById('displayNumber').innerHTML = num;
        if (document.getElementById('AC').innerHTML === "CE")
            {
                document.getElementById('AC').innerHTML = "AC";
            }
 
    }
    else
    {
        document.getElementById('displayNumber').innerHTML = numero + num;
    }
}

function oper(soper)
{
    var numero = parseFloat(document.getElementById('displayNumber').innerHTML)
    if (!num1)
    {
        num1 = numero;
        document.getElementById('displayNumber').innerHTML = 0;
        document.getElementById('previous').innerHTML = num1 + " " + soper;
    }
    else
    {
        if (tOPerac === 1) {num1 += numero} else if (tOPerac === 2) {num1 -= numero}else if (tOPerac === 3) {num1 *= numero} else {num1 /= numero}
        document.getElementById('displayNumber').innerHTML = 0;
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
    document.getElementById('displayNumber').innerHTML = "0";
    document.getElementById('previous').innerHTML = "0";
    num1 = 0;
    if (document.getElementById('AC').innerHTML === "CE")
    {
        document.getElementById('AC').innerHTML = "AC";
    }
}

function back()
{
    var displayNumber = document.getElementById('displayNumber').innerHTML;
    if (document.getElementById('displayNumber').innerHTML != 0)
    {
        document.getElementById('displayNumber').innerHTML = displayNumber.substring(0, displayNumber.length -1);
    }
    if (displayNumber.length === 1)
    {
        document.getElementById('displayNumber').innerHTML = "0";
    }
    if (document.getElementById('AC').innerHTML === "CE")
    {
        document.getElementById('AC').innerHTML = "AC";
        document.getElementById('displayNumber').innerHTML = "0";
    }
}

function calculate()
{
    var numero = parseFloat(document.getElementById('displayNumber').innerHTML)

    if (tOPerac === 0) {num1 = numero}else if (tOPerac === 1) {num1 += numero} else if (tOPerac === 2) {num1 -= numero}else if (tOPerac === 3) {num1 *= numero} else {num1 /= numero}

    document.getElementById('previous').innerHTML = "0";
    document.getElementById('AC').innerHTML = "CE";
    document.getElementById('displayNumber').innerHTML = num1;
    if (num1 === Infinity || num1 === -Infinity)
    {
        document.getElementById('displayNumber').innerHTML = "💀💀💀💀💀💀💀💀💀💀";
         document.getElementById('previous').innerHTML = "💀"
        console.log("💀💀💀💀💀💀💀💀💀💀")
    }
    if (isNaN(num1))
    {
        document.getElementById('displayNumber').innerHTML = "❦Iunah❦";
        document.getElementById('previous').innerHTML = "❦I Love You So Much My Darling❦"
        console.log("❦Love of my life❦");
    }
    num1 = 0;
}
