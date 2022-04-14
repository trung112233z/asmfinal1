function random(){
    var a = Math.round(Math.random() * 10);
    document.getElementById("a").value = a;

    var b = Math.round(Math.random() * 10);
    document.getElementById("b").value = b;

    var c = Math.round(Math.random() * 10);
    document.getElementById("c").value = c;
}

function lockButton(check){
    document.getElementById("giaiPT").disabled = check;
}

var soLanGiai = 0;
function dem(){
    soLanGiai++;
    document.getElementById("soLanGiai").innerHTML = soLanGiai;
}

function time(){
    var tgian = new Date();
    var ngay = tgian.getDate();
    var thang = tgian.getMonth()+1;
    var nam = tgian.getFullYear();
    var gio = tgian.getHours();
    var phut = tgian.getMinutes();
    var giay = tgian.getSeconds();
    var str = `Bây giờ là ${ngay}/${thang}/${nam} ${gio}:${phut}:${giay}`;
    document.getElementById("time").innerHTML = str;
}
setInterval("time()",1000);

function giai(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;

    if(a == 0){
        if(b == 0){
            if(c == 0){
                document.getElementById("ketqua").innerHTML = `Phương trình có vô số nghiệm`;
            }else{
                document.getElementById("ketqua").innerHTML = `Phương trình vô nghiệm`; 
            }
        }else{
            var x = -c/b;
            document.getElementById("ketqua").innerHTML = `Phương trình trở thành phương trình bậc 1 có nghiệm: <br> x = ${x.toFixed(2)}`;
        }
    }else{
        var delta = Math.pow(b,2) - 4*a*c;
        if(delta < 0){
            document.getElementById("ketqua").innerHTML = `Phương trình vô nghiệm`;
        }else if(delta == 0){
            var x = -b / (2*a);
            document.getElementById("ketqua").innerHTML = `Phương trình có nghiệm kép: <br> x1=x2= ${x.toFixed(2)}`;
        }else{
            var x1 = (-b - Math.sqrt(delta))/(2*a);
            var x2 = (-b + Math.sqrt(delta))/(2*a);
            document.getElementById("ketqua").innerHTML = ` Phương trình có 2 nghiệm: <br> x1 = ${x1.toFixed(2)} <br> và x2 = ${x2.toFixed(2)}`;
        }
    }
}