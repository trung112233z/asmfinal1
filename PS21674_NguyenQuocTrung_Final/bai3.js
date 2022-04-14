function changePrice(){
    var arrPrice = document.getElementsByName('price');
    var obj = document.getElementById('mucgia');
    var priceChoice = obj.value;
    for (i = 0; i < arrPrice.length; i++){
        price = parseFloat(arrPrice[i].innerText);
        if (price < priceChoice || priceChoice == -1){
            arrPrice[i].parentNode.style.display = '';
        }else{
            arrPrice[i].parentNode.style.display = 'none';
        }
    }
    moneyTotal();
} 
function chonhet(){
    var arr = document.getElementsByName("chon");
    for(var i = 0; i < arr.length;i++){
        arr[i].click();
    }
}

function checkQuantity(i){
    var arrQantity = document.getElementsByName('soLuong');
    arrQantity[i].disabled = !arrQantity[i].disabled;
    if (arrQantity[i].disabled == true){
        arrQantity[i].value = 0;
        arrQantity[i].parentNode.nextElementSibling.innerText = '';
    }
    moneyTotal();
}

function calculateMoney(obj){
    var changeQuantity = obj.value;
    var parent = obj.parentNode;
    var changePrice = parent.parentNode.children[2].innerText;
    var money = changePrice * changeQuantity;
    parent.parentNode.children[4].innerText = money;
    moneyTotal();

}



function moneyTotal(){
    var moneyTotal = 0;
    var arrMoney = document.getElementsByName('thanhtien');
    for (var i = 0; i < arrMoney.length; i++){
        if(arrMoney[i].parentNode.style.display == ''){
            var totalCount = arrMoney[i].innerText;
            var money = Number(totalCount);
            moneyTotal += money;
        }
    }
    document.getElementById('tinhtong').innerText = moneyTotal ;
}