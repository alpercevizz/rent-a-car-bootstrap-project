
const formEl = document.querySelector("#form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const repassword = document.querySelector("#repassword");
const detailBtn = document.querySelector(".detail");

function success(input) {
    input.className = "form-control is-valid";
}

function error(input, message) {
    input.className = "form-control is-invalid";
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';

}

function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)) {
        success(input);
    }

    else {
        error(input, "Hatalı email adresi !");
    }
}

function checkRequired(inputs) {
    inputs.forEach(function(input) {
        if(input.value === "") {
            error(input, `${input.id} gerekli !`);
            $("#registerModal").modal("hide");
        }

        else {
            success(input);
        }
    });
}

function checkPasswords(input1, input2) {
    if(input1.value !== input2.value) {
        error(input2, "Parolalar eşleşmiyor !");
    }
    
}

function checkLength(input, min, max) {
    if(input.value.length < min) {
        error(input, `${input.id} en az ${min} karakter uzunluğunda olmalıdır.`);
    }

    else if(input.value.length < max) {
        error(input, `${input.id} en fazla ${max} karakter uzunluğunda olmalıdır.`);
    }

    else {
        success(input);
    }
}

function checkPhone(input) {
    var exp = /'\d{10}$/;
    if(!exp.test(input.value)) {
        error(input, "Telefon numarası 10 karakterli olmalıdır.");
    }
}

// formEl.addEventListener("submit", (e)=> {
//     e.preventDefault();
//     checkRequired([username,email,password,repassword,phone]);
//     checkEmail(email);
//     checkLength(username, 7, 15);
//     checkLength(password, 7, 12);
//     checkPasswords(password,repassword);
//     checkPhone(phone);
//     $("#registerBtn").modal("show");
// });

var $ = jQuery;
jQuery(document).ready(function() {
    jQuery(".detail").on("click", function() {
        jQuery("#detailModal").modal("show");
    });

    jQuery("#forgotPassBtn").on("click", ()=> {
        $("#forgotPasswordModal").modal("show");
    });
});






 

 
