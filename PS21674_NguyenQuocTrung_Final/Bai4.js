function validate(){
    const studentIdCtrl = document.getElementById("studentId");
    const nameCtrl = document.getElementById("name");
    const emailCtrl = document.getElementById("email");
    const nationalityCtrl = document.getElementById("nationality");
    const noteCtrl = document.getElementById("note");

    const genderCtrls = document.getElementsByName("gender");
    const favoritesCtrls = document.getElementsByName("favorites[]");

    let isValid = true;
//mã sinh viên
    if(isEmpty(studentIdCtrl.value)){
        studentIdCtrl.classList.remove("valid");
        studentIdCtrl.classList.add("invalid");
        isValid = false;
        removeAutoFill(studentIdCtrl)
    }else{
        studentIdCtrl.classList.remove("invalid");
        studentIdCtrl.classList.add("valid");
    }
//họ và tên
if(isEmpty(nameCtrl.value)){
    nameCtrl.classList.remove("valid");
    nameCtrl.classList.add("invalid");
    isValid = false;
    removeAutoFill(nameCtrl)
}else{
    nameCtrl.classList.remove("invalid");
    nameCtrl.classList.add("valid");
}
//email
if(isEmpty(emailCtrl.value) || !isEmail(emailCtrl.value)){
    emailCtrl.classList.remove("valid");
    emailCtrl.classList.add("invalid");
    isValid = false;
    removeAutoFill(emailCtrl)
}else{
    emailCtrl.classList.remove("invalid");
    emailCtrl.classList.add("valid");
}
//giới tính
if(!isChecked(genderCtrls)){
    for (const element of genderCtrls){
        element.classList.remove("valid");
        element.classList.add("invalid-rc");
    }
    isValid = false;
}else{
    genderCtrls.forEach((element) => {
        element.classList.remove("invalid-rc");
        element.classList.add("valid");
    });
}

//sở thích
if(!isChecked(favoritesCtrls)){
    for (const element of favoritesCtrls){
        element.classList.remove("valid");
        element.classList.add("invalid-rc");
    }
    isValid = false;
}else{
    favoritesCtrls.forEach((element) => {
        element.classList.remove("invalid-rc");
        element.classList.add("valid");
    });
}
//quốc tịch
if(isEmpty(nationalityCtrl.value)){
    nationalityCtrl.classList.remove("valid");
    nationalityCtrl.classList.add("invalid");
    isValid = false;
}else{
    nationalityCtrl.classList.remove("invalid");
    nationalityCtrl.classList.add("valid");
}
//ghi chú
if(noteCtrl.value > 200){
    noteCtrl.classList.remove("valid");
    noteCtrl.classList.add("invalid");
    isValid = false;
}else{
    noteCtrl.classList.remove("invalid");
    noteCtrl.classList.add("valid");
}

    if(isValid){
        alert('Thông tin đăng ký thành công');
    }
}
function isEmpty(value){
    if(!!!value || value.length <= 0){
        return true;
    }
    return false;
}
function isEmail(value){
    return value.match(/^\S+\@\S+\.\S+$/);
}
function isChecked(ctrls){
    for (const ctrl of ctrls){
        if(ctrl.checked){
            return true;
        }
    }
    return false;
}
function removeAutoFill(control){
    const old = control.value;
    control.value = old + " ";
    control.value = old;
}