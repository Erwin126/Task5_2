const add_to_cart1= document.getElementById("cart1-btn");
const add_to_cart2= document.getElementById("cart2-btn");
const add_to_cart3= document.getElementById("cart3-btn");
const add_to_cart4= document.getElementById("cart4-btn");
const add_to_cart5= document.getElementById("cart5-btn");
const confirm= document.getElementById("confirm_order-btn");
const cart_items= document.querySelector("item");
const delete_button= document.getElementById("delete-btn");
const delivery_option= document.getElementById("delivery_options");
const discount_field= document.getElementById("discount_coupon");
const train_option= "train";
const uber_option= "uber";
const reference_number= document.getElementById("reference_number");
const Name= document.getElementById("Name");
const Surname= document.getElementById("Surname");
const none= null;
const VAT= 1.15;
const apple= document.getElementById("apple");
const red_grape= document.getElementById("red_grape");
const orange= document.getElementById("orange");
const strawberries= document.getElementById("strawberries");
const green_lemon= document.getElementById("green_lemon");
const shopping_cart_total= document.getElementById("shopping_cart_total");
const background_color= document.getElementById("animate-btn");
const Form= document.getElementById("form");
//The const declaration has been created on top. There are 24 const above.
function Display(){
 Form.changeinnerHTML= form;
 Name.changeinnerHTML= Name;
 Surname.changeinnerHTML= Surname;
 delivery_option.changeinnerHTML= delivery_option;
 discount_coupon.changeinnerHTML= discount_coupon;
 reference_number.changeinnerHTML= reference_number;
 add_to_cart1.changeinnerHTML= add_to_cart;
 add_to_cart2.changeinnerHTML= add_to_cart;
 add_to_cart3.changeinnerHTML= add_to_cart;
 add_to_cart4.changeinnerHTML= add_to_cart;
 add_to_cart5.changeinnerHTML= add_to_cart;
 delete_button.changeinnerHTML= delete-btn;
 confirm.changeinnerHTML= confirm-order_btn;
 background_color.changeinnerHTML= animate-btn;
//The display form field, Name, Surname,delivery options,discount coupon, reference number.
//The buttons have been added. The add to cart buttons aswell as delete-button, confirm and the animate button.
//The word form will display.
$("Form").click(function delivery_dropdown(){
  $("delivery_option").delivery_option.localStorage.click(train_option);
  $("delivery_option").delivery_option.localStorage.click(uber_option);
  $("delivery_option").delivery_option.localStorage.click(none);
});
//A jquery function has been created. The delivery option are the train, uber and none. 
function delivery_details(){
  if(delivery_option.train){
   discount="10%";
  }else if(delivery_option.uber){
   discount="15%";
  }else{
   discount="0%";
  }
};
//The discount funtion is above. There are 3-types of discounts 10%, 15% and 0%.
function discount(){
    if (delivery_details==="10%".discount_field){
    answer="yes";
    }else if(delivery_details==="15%".discount_field){
    answer="yes";
    }else{
    answer="No";
    }
};
//The discount function is above. If there is a 10% and 15% than the answer is yes.
let apples_ = apple_fruit;
let apple_cost = 1;
//The declarations are above.
function apples_1(){
 apple_total= apple_cost*20*VAT;
 onclick=(add_to_cart1).alert("The current total is"+ apple_total);
 
};
// The apples_ function is above. There is an onclick method and a VAT calcultion. 
let red_grapes = red_grape_fruit;
let red_grape_cost= 1;
//The declaration is above.
function red_grapes_(){
  red_grape_total= red_grape_cost*20*VAT;
  onclick=(add_to_cart2).alert("The current total is"+ red_grape_total);
};
//The red_grapes_function is above. It includes VAT.
let oranges = orange_fruit;
let orange_cost= 1;
//The declarations are above.
function oranges_(){
  orange_total= orange_cost*20*VAT;
  onclick=(add_to_cart3).alert("The current total is"+ orange_total);
};
//The oranges_function and the VAT is included.
let strawberry = strawberry_fruit;
let strawberries_cost= 1;
//The declarations are above.
function strawberries1(){
  strawberries_total= strawberries_cost*10*VAT;
  onclick=(add_to_cart4).alert("The current total is"+ strawberries_total);
};
//The strawberries1 function is above. There is an onclick is attached to the add_to_cart button.
let green_lemon_ = green_lemon;
let green_lemon_cost= 1;
// The declarations are above.
function green_lemons_(){
  green_lemon_total= green_lemon_cost*15*VAT;
  onclick=(add_to_cart5).alert("The current total is"+ green_lemon_total);
};
// The green_lemons_function has an onclick method aswell as VAT.
let add_to_cart_map= new Map_1();
let value_1= apples_;
let value_2= red_grapes_;
let value_3= oranges_;
let value_4= strawberries1;
let value_5= green_lemons_;
let key_1= key1;
let key_2= key2;
let key_3= key3;
let key_4= key4;
let key_5= key5;
//The declarations are above.The keys aswell as the values are above.The map is at the top.
//The function is below. The add to cart function will add the values.
function add_to_cart_(){
add_to_cart_map.sessionStorage.setItem(apples_1);
add_to_cart_map.sessionStorage.setItem(red_grapes_);
add_to_cart_map.sessionStorage.setItem(oranges_);
add_to_cart_map.sessionStorage.setItem(strawberries1);
add_to_cart_map.sessionStorage.setItem(green_lemons_);
//The items have been set to sessionStorage.
for(let [key,value] of add_to_cart_map){
  console.log(key +'='+ value);
  console.log(key_1+'='+ value_1);
  console.log(key_2+'='+ value_2);
  console.log(key_3+'='+ value_3);
  console.log(key_4+'='+ value_4);
  console.log(key_5+'='+ value_5);
}
//The keys are above aswell as a value.
for (let key of add_to_cart_map.key()){
  console.log(key);
  console.log(key_1);
  console.log(key_2);
  console.log(key_3);
  console.log(key_4);
  console.log(key_5);
}
//The keys are above.
for (let value of add_to_cart_map.values()){
  console.log(value);
  console.log(value_1);
  console.log(value_2);
  console.log(value_3);
  console.log(value_4);
  console.log(value_5);
}
//The values are above.
for (let [key,value] of add_to_cart_map.entries()){
  console.log(key+'='+value);
  console.log(key_1+'='+ value_1);
  console.log(key_2+'='+ value_2);
  console.log(key_3+'='+ value_3);
  console.log(key_4+'='+ value_4);
  console.log(key_5+'='+ value_5);
}}
//Both the keys and values have been combined.
function remove_from_cart(){
  add_to_cart_map.sessionStorage.removeItem(apples_);
  add_to_cart_map.sessionStorage.removeItem(red_grapes_);
  add_to_cart_map.sessionStorage.removeItem(oranges_);
  add_to_cart_map.sessionStorage.removeItem(strawberries1);
  add_to_cart_map.sessionStorage.removeItem(green_lemons_);
  onclick=(delete_button).add_to_cart_map
//The remove_from_cart function is above. RemoveItem has been applied to the function.
for(let [key,value] of add_to_cart_map){
  console.log(key +'='+ value);
  console.log(key_1+'='+ value_1);
  console.log(key_2+'='+ value_2);
  console.log(key_3+'='+ value_3);
  console.log(key_4+'='+ value_4);
  console.log(key_5+'='+ value_5);
  }
//The keys and values have been combined.
for (let key of add_to_cart_map.key()){
  console.log(key);
  console.log(key_1);
  console.log(key_2);
  console.log(key_3);
  console.log(key_4);
  console.log(key_5);
  }
//The map keys are above.
for (let value of add_to_cart_map.values()){
  console.log(value);
  console.log(value_1);
  console.log(value_2);
  console.log(value_3);
  console.log(value_4);
  console.log(value_5);
  }
//The values are above.
for (let [key,value] of add_to_cart_map.entries()){
  console.log(key+'='+value);
  console.log(key_1+'='+ value_1);
  console.log(key_2+'='+ value_2);
  console.log(key_3+'='+ value_3);
  console.log(key_4+'='+ value_4);
  console.log(key_5+'='+ value_5);
  }
}
// The function confirm_ has onclick on the confirm.
$("Shopping cart.html").click(function hide_and_show(){
if(click("hide/show")){$("hide/show").click(function hide(){
$("red_grape_image").hide(200);
})
}else if(click("hide/show")){$("hide/show").click(function show(){
$("red_grape_image").show(200);
})}
});
// The function has hide and show function. The hide/show button has two functions. The it will hide and show images.
function animation(){
  
}
//The animation button.
$("Shopping cart").trigger(function change_background(){
$("animate").click("background-color:","blue");
});
// The function will change background-color. There is a trigger method.
function order(){
  confirm.alert=("keyword:generate");
  onclick=(confirm);
}
//The resources:
//https://stackoverflow.com/
//https://api.jquery.com/
//https://w3school.com/
//>https://api.jquery.com/




 

