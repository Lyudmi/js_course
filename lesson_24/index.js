

let email = document.getElementById('email');
email.addEventListener("blur", function() {
    if(this.value!=""){
        if (this.value.search(/^([A-я0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,6}\.)?[a-z]{2,6}$/gi) == -1) { 
            console.log(this.value.search(/^([A-я0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,6}\.)?[a-z]{2,6}$/gi) );
            this.className = "notice";
            notice.innerHTML = 'Адрес электронной почты должен содержать символ @. Введите корректный e-mail адрес!'
            this.classList.add("error");
            email.focus();
        } else {
            console.log(this.value.search(/^([A-я0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,6}\.)?[a-z]{2,6}$/gi) );
            this.classList.remove("error");
            if (this.className == 'notice') { 
                this.className = "";
                        notice.innerHTML = "";
            }
        }

    }else {
        console.log(this.value.search(/^([A-я0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,6}\.)?[a-z]{2,6}$/gi) );
        this.classList.remove("error");
        if (this.className == 'notice') { 
            this.className = "";
            notice.innerHTML = "";
        }
    }
  });

email.addEventListener("focus", function() {
    if (this.value.search(/^([A-я0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,6}\.)?[a-z]{2,6}$/gi) == -1) { 
        console.log(this.value.search(/^([A-я0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,6}\.)?[a-z]{2,6}$/gi) );
        this.className = "notice";
        notice.innerHTML = 'Адрес электронной почты должен содержать символ @. Введите корректный e-mail адрес!'
        this.classList.add("error");
    }
    
  });


//phone
let phone = document.getElementById('phone');
phone.addEventListener("blur", function() {
    if(this.value!=""){
        if (this.value.search(/^\+38(\(0\d{2}\)|0\d{2})[ |]?\d{3}[ |-]?\d{2}[ |-]?\d{2}$/gi) == -1) { 
            console.log(this.value.search(/^\+38(\(0\d{2}\)|0\d{2})[ |]?\d{3}[ |-]?\d{2}[ |-]?\d{2}$/gi) );
            this.className = "notice_phone";
            notice_phone.innerHTML = 'Номер телефона должен быть в формате +38(050)111 11 11. Введите корректный номер телефона!'
            this.classList.add("error");
            
        } else {
            console.log(this.value.search(/^\+38(\(0\d{2}\)|0\d{2})[ |]?\d{3}[ |-]?\d{2}[ |-]?\d{2}$/gi) );
            this.classList.remove("error");
            if (this.className == 'notice_phone') { 
                this.className = "";
                notice_phone.innerHTML = "";
            }
        }

    }else{
        this.classList.remove("error");
            if (this.className == 'notice_phone') { 
                this.className = "";
                notice_phone.innerHTML = "";
            }       
    }    
});

phone.addEventListener("focus", function() {
    if(this.value!=""){
        if (this.value.search(/^\+38(\(0\d{2}\)|0\d{2})[ |]?\d{3}[ |-]?\d{2}[ |-]?\d{2}$/gi) == -1) { 
            console.log(this.value.search(/^\+38(\(0\d{2}\)|0\d{2})[ |]?\d{3}[ |-]?\d{2}[ |-]?\d{2}$/gi) );
            this.className = "notice_phone";
            notice_phone.innerHTML = 'Номер телефона должен быть в формате +38(050)111 11 11. Введите корректный номер телефона!'
            this.classList.add("error");
        }
    }
});


//textarea
let search = document.getElementById('search');

 search.addEventListener('click', function() {
    this.reg = /\b([A-я0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,6}\.)?[a-z]{2,6}\b/igm;
    this.content = document.getElementById('content').value;
    this.email = this.content.match(this.reg);
    this.result = this.content.match(this.reg);
    console.log(this.email.length);
    if(this.email) {
        this.ol = document.getElementById('ol');
        

        for(let i = 0; i < this.email.length; i++ ){
            
                this.li = document.createElement('li');
                this.li.id = i;
                this.li.innerHTML = this.email[i];
            
            this.ol.appendChild(this.li);
        }
    }
    
});