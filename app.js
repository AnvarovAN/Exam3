let $form = document.querySelector("#form");
let $list = document.querySelector('#list')
const $size = document.querySelectorAll('.size-wrapper__input'),
$incl = document.querySelectorAll('#includes li'),
$thickPaste = document.querySelector('.pizza_thick'),
$sizePaste = document.querySelector('.pizza_size'),
$elPaste = document.querySelector('.pizza_el'),
$addPaste = document.querySelector('.pizza_add'),
pizza = document.querySelectorAll('.hold__input'),
added = document.querySelectorAll('.hold__inputt'),
opt = document.querySelector('.form-select');



let userArray = [

]
$form.addEventListener("submit", (evt)=> {
    evt.preventDefault()
    // var styles = {
    //         listId: {
    //                 padding: "10px",
    //                 marginLeft: "31.9%",
    //                 width: "400px",
    //                 border: "#000 1px solid"
    //         }
    //     }
    //     for(let i = 0; i < pizza.length; i++){
    // if(pizza[i].checked){
    //     $incl[i].textContent = pizza[i].value
    // }else{
    //     $incl[i].textContent = ""
    // }


    let { user_name, user_phone, user_email, size,  thikness, } = evt.target.elements
    
    let pizza_arr = [];
    let price_pizza = [];
    
    for(let i = 0; i < pizza.length; i++){
    if(pizza[i].checked){
        pizza_arr.push(pizza[i].value)
        price_pizza.push(Number(pizza[i].dataset.price2))
    }
}



let arr = [];
let price_arr = [];
for(let i = 0; i < added.length; i++){
    if(added[i].checked){
        arr.push(added[i].value)
        price_arr.push(Number(added[i].dataset.price1))
        }
}
let arr1 = [];
let price_arr1 = [];
for(let i = 0; i < $size.length; i++){
    if($size[i].checked){
        arr1.push($size[i].value)
        price_arr1.push(Number($size[i].dataset.price))
        }
}

let arr2 = [];
let price_arr2 = [];
for(let i = 0; i < opt.length; i++){
    if(opt[i].selected){
        arr2.push(opt[i].value)
        price_arr2.push(Number(opt[i].dataset.price))
        }
}
let num1 = price_pizza.map(i=>x+=i, x=0).reverse()[0],
num2 = price_arr.map(i=>x+=i, x=0).reverse()[0] ,
num3 = price_arr2.map(i=>x+=i, x=0).reverse()[0],
num4 = price_arr1.map(i=>x+=i, x=0).reverse()[0],
sum = num1 + num2 + num3 + num4;

console.log(sum);
    
    let newObj = {
        
            id: userArray.length + 1,
            name: user_name.value.trim(),
            phone: user_phone.value.trim(),
            email: user_email.value.trim(),
            thick: thikness.value.trim(),
            size: size.value.trim(),
            on: pizza_arr.join(', '),
            add: arr.join(', '),
            Total: sum
            // size: size.dataset.size.trim(),
    
            
    }
    // let elObj = {
    //     thick:  ,
    //     size: 
    //     pizza: ,
    //     add:  ,
        
    // }
            // id: userArray.length + 1,
            // name: user_name.value.trim(),
            // phone: user_phone.value.trim(),
            // email: user_email.value.trim()
    userArray.push(newObj)
    // console.log(userArray);
    renderFunction(userArray, $list); 

})

var renderFunction = (array , element)=>{
    element.innerHTML = null
    for(let i = 0; i < array.length; i++ ){
        element.innerHTML += `
<li class="spat">
            <p class="uxlash_nima">Order: ${array[i].id}</p>
            <p class="uxlash_nima">Name: ${array[i].name}</p>
            <p class="uxlash_nima">Phone: ${array[i].phone}</p>
            <p class="uxlash_nima">Email: ${array[i].email}</p>
                <hr class="hrr">
            <p class="uxlash_nima">Dough thikness: ${array[i].thick}</p>
            <p class="uxlash_nima">Size: ${array[i].size}</p>
            <p class="uxlash_nima">on Pizza: ${array[i].on}</p>
            <p class="uxlash_nima">Added: ${array[i].add}</p>
            <p class="uxlash_nima">Total: ${array[i].Total}$</p>
            </li>
        `
        
    }
}