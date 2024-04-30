/*====================================================================================================================*/
/*####################################################################################################################*/
/*========================================== 20230502 محمد محمد زكي محمد جاد =======================================*/
/*####################################################################################################################*/
/*====================================================================================================================*/
if (NumberOfPage == 1) {

    let colorTheam = localStorage.getItem('main-color');

    if (colorTheam !== null) {
        document.documentElement.style.setProperty('--main-color', localStorage.getItem('main-color'));
        document.documentElement.style.setProperty('--main-color-alt',localStorage.getItem('main-color-alt'));
    }

    let FirstName = document.querySelector('[name=FirstName-1]');
    let SecondName = document.querySelector('[name=SecondName-1]');
    let mail = document.querySelector('[name=mail-1]');
    let pass1 = document.querySelector('[name=Password1-1]');
    let pass2 = document.querySelector('[name=Password2-1]');
    let number = document.querySelector('[name=number-1]');
    let FirstNameError = document.querySelector('.FirstNameError-1');
    let SecondNameError = document.querySelector('.SecondNameError-1');
    let SecondNameError2 = document.querySelector('.SecondNameError2-1');
    let EmailError = document.querySelector('.mail-1');
    let Password1Error = document.querySelector('.Password1Error-1');
    let Password2Error = document.querySelector('.Password2Error-1');
    let Password2Error2 = document.querySelector('.Password2Error2-1');
    let numberError = document.querySelector('.Number-1');
    let noteq = document.querySelector('.noteq-1');
    
    document.forms[0].onsubmit = (e) => {
        FirstNameError.innerHTML = '';
        SecondNameError.innerHTML = '';
        SecondNameError2.innerHTML = '';
        EmailError.innerHTML = '';
        Password1Error.innerHTML = '';
        Password2Error.innerHTML = '';
        Password2Error2.innerHTML = '';
        numberError.innerHTML = '';
        noteq.innerHTML = '';
    
        let fnError = [];
        let snError = [];
        let mailError = [];
        let pass1Error = [];
        let pass2Error = [];
        let noteqpass = [];
        let nuError = [];
    
        if (FirstName.value == '') {
            fnError.push(' You must fill out the field first name');
        }
        if (FirstName.value.length > 20) {
            fnError.push(' you must fill 20 characters or small ');
        }
        fnError.forEach( error => {
            FirstNameError.innerHTML = error;
        });
    
        if (SecondName.value == '') {
            snError.push(' You must fill out the field second name');
        }
        if (SecondName.value.length > 20) {
            snError.push(' you must fill 20 characters or small ');
        }
        snError.forEach( error => {
            SecondNameError.innerHTML = error;
            SecondNameError2.innerHTML = error;
        });
    
        if (mail.value == '') {
            mailError.push('You must fill out the field email');
        }
        if (mail.value.length > 30) {
            mailError.push(' you must fill 30 characters or small ');
        }
        if (mail.value.length < 30 && mail.value != '' && !mail.value.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
            mailError.push(' invalid email must be like example@example.com');
        }
        mailError.forEach( error => {
            EmailError.innerHTML = error;
        });
    
        if (pass1.value != pass2.value) {
            noteqpass.push('The two passwords are not equal ');
        }
        noteqpass.forEach( error => {
            noteq.innerHTML = error;
        })
    
        if (pass1.value == '') {
            pass1Error.push('You must fill out the field password ');
        }
        if (pass1.value.length > 20) {
            pass1Error.push(' you must fill 20 characters or small ');
        }
        pass1Error.forEach( error => {
            Password1Error.innerHTML = error;
        });
    
        if (pass2.value == '') {
            pass2Error.push('You must fill out the field confarm password');
        }
        if (pass2.value.length > 20) {
            pass2Error.push(' you must fill 20 characters or small ');
        }
        pass2Error.forEach( error => {
            Password2Error.innerHTML = error;
            Password2Error2.innerHTML = error;
        });
    
        if (number.value.length != 11 && number.value != '') {
            nuError.push(' you must fill 11 characters only ')
        }
        if (number.value == '') {
            nuError.push('You must fill out the field Phone Number');
        }
        nuError.forEach( error => {
            numberError.innerHTML = error;
        })
    
    
        if (fnError != '' || snError != '' || mailError != '' || pass1Error != '' || pass2Error != '' || noteqpass != '' || nuError != '') {
            e.preventDefault();
        }
    }
    
    // ==================================== Up button And List Header ================================

    let up = document.querySelector(".up-1")
    window.onscroll = () => {
        this.scrollY >= 500 ? up.classList.add("show-1") : up.classList.remove("show-1")
    }
    up.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    let butNav = document.querySelector(".header-1 .dots-1");
    let links = document.querySelector(".header-1 .links-1");
    butNav.addEventListener("click", e => {
        e.stopPropagation();
    });
    links.addEventListener("click", e => {
        e.stopPropagation();
    });
    butNav.addEventListener('click', e => {
        butNav.classList.toggle('active-1');
        links.classList.toggle('active-1');
    });
    document.addEventListener('click', e => {
        if (e.target != butNav || e.target!= links) {
            butNav.classList.remove('active-1');
            links.classList.remove('active-1');
        }
    });
}

if (NumberOfPage == 2) {
    // ==================================== Up button And List Header ================================

    let up = document.querySelector(".up-1")
    window.onscroll = () => {
        this.scrollY >= 500 ? up.classList.add("show-1") : up.classList.remove("show-1")
    }
    up.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    let butNav = document.querySelector(".header-1 .dots-1");
    let links = document.querySelector(".header-1 .links-1");
    butNav.addEventListener("click", e => {
        e.stopPropagation();
    });
    links.addEventListener("click", e => {
        e.stopPropagation();
    });
    butNav.addEventListener('click', e => {
        butNav.classList.toggle('active-1');
        links.classList.toggle('active-1');
    });
    document.addEventListener('click', e => {
        if (e.target != butNav || e.target!= links) {
            butNav.classList.remove('active-1');
            links.classList.remove('active-1');
        }
    });
    
// ====================================== Theam Color =====================================
let colorTheam = localStorage.getItem('main-color');
let colors = document.querySelectorAll('.theam-1 span.color-1');


if (colorTheam !== null) {
    document.documentElement.style.setProperty('--main-color', localStorage.getItem('main-color'));
    document.documentElement.style.setProperty('--main-color-alt',localStorage.getItem('main-color-alt'));
    colors.forEach ( ele => {
        ele.classList.remove('active-1');
        if (ele.dataset.maincolor == localStorage.getItem('main-color')) {
            ele.classList.add('active-1');
        }
    })    
}

colors.forEach( (ele) => {
    ele.addEventListener('click', (e) => {
        colors.forEach( (ele) => { ele.classList.remove('active-1');});
        ele.classList.add('active-1');
        document.documentElement.style.setProperty('--main-color', e.target.dataset.maincolor);
        document.documentElement.style.setProperty('--main-color-alt',e.target.dataset.maincoloralt);
        localStorage.setItem('main-color', e.target.dataset.maincolor);
        localStorage.setItem('main-color-alt',e.target.dataset.maincoloralt);
    });
});
    
// ===================================== Display Food =====================================
const foodItem = [
    {
        id: 1,
        category: 'pizza',
        title: 'Pizza',
        description : 'Chef Chase made it and it is the best food in this section.',
        rating : 4.3,
        price: 10,
        img: 'pizza-1.jpg',
        instructor: 'chef1-1.png',
        user: 500
    },
    {
        id: 2,
        category: 'burger',
        title: 'chicken burger',
        description : 'Chef Tom made it and it is the best food in this section.',
        rating : 4.3,
        price: 6,
        img: 'burger-1.jpg',
        instructor: 'chef3-1.jpg',
        user: 600
    },
    {
        id: 3,
        category: 'burger',
        title: 'peef burger',
        description : 'Chef Ilsa made it and it is the best food in this section.',
        rating : 4.3,
        price: 8,
        img: 'burger2-1.png',
        instructor: 'chef2-1.png',
        user: 433
    },
    {
        id: 4,
        category: 'cake',
        title: 'cacke',
        description : 'Chef Ilsa made it and it is the best food in this section.',
        rating : 4.3,
        price: 10,
        img: 'cake-1.jpg',
        instructor: 'chef2-1.png',
        user: 300
    },
    {
        id: 5,
        category: 'cake',
        title: 'cacke',
        description : 'Chef Ilsa made it and it is the best food in this section.',
        rating : 4.3,
        price: 5,
        img: 'cake2-1.jpg',
        instructor: 'chef2-1.png',
        user: 400
    },
    {
        id: 6,
        category: 'cake',
        title: 'cacke',
        description : 'Chef Chase  made it and it is the best food in this section.',
        rating : 4.3,
        price: 6,
        img: 'cake3-1.jpg',
        instructor: 'chef1-1.png',
        user: 600
    },
    {
        id: 7,
        category: 'juse',
        title: 'juse',
        description : 'Chef Tom made it and it is the best food in this section.',
        rating : 4.3,
        price: 5,
        img: 'juse-1.jpg',
        instructor: 'chef3-1.jpg',
        user: 250
    },
    {
        id: 8,
        category: 'juse',
        title: 'juse',
        description : 'Chef Chase made it and it is the best food in this section.',
        rating : 4.3,
        price: 7,
        img: 'juse2-1.jpg',
        instructor: 'chef1-1.png',
        user: 400
    },
    {
        id: 9,
        category: 'chicken',
        title: 'chicken',
        description : 'Chef Ilisa made it and it is the best food in this section.',
        rating : 4.3,
        price: 10,
        img: 'chicken-1.png',
        instructor: 'chef2-1.png',
        user: 400
    }
];


let categories = [];
foodItem.forEach( item => {
    if (categories.indexOf(item.category) == -1) {
        categories.push(item.category)
    }
});

let contTaps = document.querySelector('.container-section-1 .taps-1 ul');
let display = document.querySelector('.container-section-1 .display-1');

categories.forEach( category => {
    contTaps.innerHTML += `<li data-category="${category}">${category}</li>`;
})
let tabsArry = document.querySelectorAll('.container-section-1 .taps-1 ul li');
tabsArry.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        tabsArry.forEach((ele) => {
            ele.classList.remove("active-1");
        });
        ele.classList.add("active-1");
        display.innerHTML = '';
        createCards(ele.dataset.category);
    });
});


function createCards (category='All') {
    foodItem.forEach( (item, index) => {
        if (category == 'All') {
            card (index,item.img, item.instructor, item.title, item.description, item.price, item.user);
        }else {
            if (item.category == category) {
                card (index, item.img, item.instructor, item.title, item.description, item.price, item.user);
            }
        }
    });
}

createCards();

function card (index,img, instructor, title, description, price, user) {
    display.innerHTML += `
    <div class="container-card-1">
        <div class="card-1">
            <img class="cover-1" src="../images/${img}" alt="">
            <i onclick="order(${index})" class="fa-solid fa-cart-shopping"></i>
            <img class="instructor-1" src="../images/${instructor}" alt="">
            <div class="cont-info-1">
                <h4 class="title-1"> ${title} </h4>
                <p class="description-1"> ${description} </p>
            </div>
            <div class="info-1">
                <span class="c-grey"> ${price} <i class="fa-solid fa-dollar-sign"></i> </span>

                <span class="c-grey"> ${user} <i class="fa-regular fa-user"></i> </span>
            </div>
        </div>
    </div>
    `;
}
let searchInput = document.querySelector('.container-section-1 .cont-search input');
function searchItem () {
    display.innerHTML = '';
    foodItem.forEach( (item, index) => {
        if (item.title.indexOf(searchInput.value) > -1) {
            card (index,item.img, item.instructor, item.title, item.description, item.price, item.user);
        }
    });
}



// ======================================================= Ordered Food ========================================

let OrderedTable = document.querySelector('.cont-order-1 table tbody');
let numberTotal = document.querySelector('.cont-order-1 table tfoot .number-total-1');
function order (index) {
    let Order = '';
    Order = 
    `
        <tr>
            <td>${foodItem[index].id}</td>
            <td><img src="../images/${foodItem[index].img}"/></td>
            <td>${foodItem[index].title}</td>
            <td>${foodItem[index].category}</td>
            <td><img src="../images/${foodItem[index].instructor}"/></td>
            <td>${foodItem[index].rating}</td>
            <td>${foodItem[index].price}$</td>
            <td><button onclick="deleteItem(this,${index})" class="status-1 delete-1"> Delete </button></td>
        </tr>
    `;
    OrderedTable.innerHTML += Order;
    numberTotal.innerHTML = Number(numberTotal.innerText) + foodItem[index].price;
}
function deleteItem (ele, index) {
    ele.parentElement.parentElement.remove();
    numberTotal.innerHTML = Number(numberTotal.innerText) - foodItem[index].price;
}

// ==================================================== Video ====================================================

let chiledUlList = document.querySelectorAll(".list-1 ul li");

let videoTitle = document.querySelector('.preview-1 .info-1');
let theVideo = document.querySelector('.preview-1 .video-1 video')
let theIframe = document.querySelector('.preview-1 .video-1 iframe')
chiledUlList.forEach( (ele) => {
    ele.addEventListener('click',  e => {
        chiledUlList.forEach( (ele) => {
            ele.classList.remove("active-1");
        });
        ele.classList.add("active-1");
        videoTitle.innerText = ele.innerText;
        if (ele.dataset.type == 'url') {
            theVideo.style.display = 'block';
            theIframe.style.display = 'none';
            theVideo.src = ele.dataset.src;
        }else {
            theVideo.style.display = 'none';
            theIframe.style.display = 'block';
            theIframe.src = ele.dataset.src;
        }
    });
});


}

/*====================================================================================================================*/
/*####################################################################################################################*/
/*========================================== محمد أحمد سمير أحمد 20230446   ==========================================*/
/*####################################################################################################################*/
/*====================================================================================================================*/

if (NumberOfPage == 5) {
    var p = document.getElementById('JS2');
    var display = 0;

    function Function2(){
        if(display == 1){
            p.style.display = 'block';
            display = 0;
        }
        else{
            p.style.display = 'none';
            display = 1;
        }
    }
}

/*====================================================================================================================*/
/*####################################################################################################################*/
/*========================================== لؤي إيهاب فتحي السيد 20230430 ==========================================*/
/*####################################################################################################################*/
/*====================================================================================================================*/
if (NumberOfPage == 6) {
    function validateform() {
        let x = document.forms["myform"]['fname'].value;
        let y = document.forms["myform"]["cform"].value;
        if (x == "") {
            alert("Name must be filled out");
            return false;
            
        }
        else {
            if (y == "") {
                alert("Comment cannot be empty ");
                return false;
    
            }
        }
    }
    function saveContent() {
        document.addEventListener("DOMContentLoaded", function () {
          const textArea = document.querySelector("textarea");
          const storageKey = "text";
    
          const init = () => {
            textArea.value = localStorage.getItem(storageKey);
    
            textArea.addEventListener("input", () => {
              localStorage.setItem(storageKey, textArea.value);
            });
          };
    
          init();
        });
        
        
    }
    // Function to save search content to local storage
    function saveContent1() {
        const searchInput = document.getElementById('searchInput').value.trim(); // Assuming there's an input field with the id 'searchInput'
        if (searchInput) {
            let searches = JSON.parse(localStorage.getItem('searches')) || [];
            searches.unshift(searchInput);
            localStorage.setItem('searches', JSON.stringify(searches));
            displaySearchHistory();
        }
    }
    
    // Function to display search history
    function displaySearchHistory() {
        const searchHistory = document.getElementById('searchHistory');
        searchHistory.innerHTML = '';
        const searches = JSON.parse(localStorage.getItem('searches')) || [];
        searches.forEach(search => {
            const li = document.createElement('li');
            li.textContent = search;
            searchHistory.appendChild(li);
        });
    }
    
    // Call displaySearchHistory function when the page loads
}

/*====================================================================================================================*/
/*####################################################################################################################*/
/*========================================== 20230459 محمد ثابت حسني حسين  =========================================*/
/*####################################################################################################################*/
/*====================================================================================================================*/

if (NumberOfPage == 3) {
    let currentItem = null;

    let previousItem = null;


    document.querySelectorAll('.item-3').forEach(item => {
        const itemName = item.querySelector('.name');
        item.addEventListener('mouseover', () => {
            currentItem = item;
        
            itemName.style.opacity = '1';
        
            if (previousItem && previousItem !== currentItem) {
                previousItem.querySelector('.name').style.opacity = '0';
            }
        
            previousItem = currentItem;
        });
        item.addEventListener('mouseleave', () => {
            
            itemName.style.opacity = '0';
        });
    });
}

/*====================================================================================================================*/
/*####################################################################################################################*/
/*========================================== 20230448 محمد أحمد محمد بكر  ==========================================*/
/*####################################################################################################################*/
/*====================================================================================================================*/

if (NumberOfPage == 4) {
    var count=2;
    function validated (){
        var email = document.getElementById('email9');
    var password = document.getElementById('pw9');
    var valid=false;
    var emailArray =["test@email.com"];
    var pwArray =["password123"];
    for (let i = 0 ; i < emailArray,length; i++) {
        if ((email==emailArray[i]) && (password==pwArray[i]))  {
            valid=true;
            break;
            
        }
    }
    if(valid){
    alert("login was succesful");
    window.location="Desserts.html";
    return false;
    }
    var t ="try";
    if(count==1){t='try'}
    if(count>=1){

        alert("invalid email or password"+"you have"+count+t+"left");
            document.loginform9.email.value = "";
            document.loginform9.password.value = "";
            setTimeout("document.myform.loginform9.email.focus()", 25);
            setTimeout("document.loginform9.email.select()", 25);
            count --;
        }

        else {
            alert ("Still incorrect! You have no more tries left!");
            document.loginform9.email.value = "No more tries allowed!";
            document.loginform9.password.value = "";
            document.loginform9.email.disabled = true;
            document.loginform9.password.disabled = true;
            
            return false;
        }
    }
}
