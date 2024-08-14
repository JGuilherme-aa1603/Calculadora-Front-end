var num1 = 0;
var operType = 0;

function insert(num)
{
    var number = document.getElementById('displayNumber').innerHTML;

    if (!isNaN(num) && number === "0" || document.getElementById('AC').innerHTML === "CE")
    {

        document.getElementById('displayNumber').innerHTML = num;
        if (document.getElementById('AC').innerHTML === "CE")
            {
                document.getElementById('AC').innerHTML = "AC";
            }
        return;
    }
    document.getElementById('displayNumber').innerHTML = number + num;
}

function oper(operS)
{
    var number = parseFloat(document.getElementById('displayNumber').innerHTML)
    if (!num1)
    {
        num1 = number;
        document.getElementById('displayNumber').innerHTML = 0;
        document.getElementById('previous').innerHTML = num1 + " " + operS;
    }
    else
    {
        if (operType === 1) {num1 += number} else if (operType === 2) {num1 -= number}else if (operType === 3) {num1 *= number} else {num1 /= number}
        document.getElementById('displayNumber').innerHTML = 0;
        document.getElementById('previous').innerHTML = num1 + " " + operS;
    }

    if (document.getElementById('AC').innerHTML === "CE")
        {
            document.getElementById('AC').innerHTML = "AC";
        }
    if (operS === '+') {operType = 1} else if (operS === '-') {operType = 2} else if (operS === '*') {operType = 3} else {operType = 4}

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
    var number = parseFloat(document.getElementById('displayNumber').innerHTML)

    if (operType === 0) {num1 = number}else if (operType === 1) {num1 += number} else if (operType === 2) {num1 -= number}else if (operType === 3) {num1 *= number} else {num1 /= number}

    document.getElementById('previous').innerHTML = "0";
    document.getElementById('AC').innerHTML = "CE";
    document.getElementById('displayNumber').innerHTML = num1;
    if (num1 === Infinity || num1 === -Infinity)
    {
        document.getElementById('displayNumber').innerHTML = "💀💀💀💀💀💀💀💀💀💀";
         document.getElementById('previous').innerHTML = "💀"
        console.log("💀💀💀💀💀💀💀💀💀💀")
    }
    else if (isNaN(num1))
    {
        document.getElementById('displayNumber').innerHTML = "❦Iunah❦";
        document.getElementById('previous').innerHTML = "❦I Love You So Much My Darling❦"
        console.log("❦Love of my life❦");
    }
    num1 = 0;
}
