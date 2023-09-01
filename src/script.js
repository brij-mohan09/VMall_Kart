//===================================================================
//Load Dynamic Header & Footer 
//===================================================================
$(function () {
    $("#header").load('/includes/header.html');
    $("#footer").load('/includes/footer.html');
  })
  //===================================================================
  // Login Page
  //===================================================================
  document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
  
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
  
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
  
        if (email === "admin@admin.com" && password === "123456") {
            alert("Login successful");
        } else {
            alert("Incorrect email or password");
        }
    });
  });
  //===================================================================
  // Cart Item Count Increment & Decrement
  //===================================================================
  function increment(){
    /* getting the value*/
    var value=document.getElementById('number').value;
    /* Converting the value into number */
    var num= parseInt(value);
  
    
    /*check the number is a text or number*/
    num= isNaN(num) ? 0 : num; 
  
    /*condition, if the value is less than 10 */
    if(num<10) {
        num++;
        document.getElementById('number').value=num;
    }
  }
  
  function decrement(){
    /* getting the value*/
    var value=document.getElementById('number').value;
    /* Converting the value into number */
    var num= parseInt(value);
  
    
    /*check the number is a text or number*/
    num= isNaN(num) ? 0 : num; 
  
    /*condition, if the value is less than 10 */
    if(num>1) {
        num--;
        document.getElementById('number').value=num;
    }
  }
  //===================================================================
  // Price Range Slider
  //===================================================================
  
  // const priceRangeInput = document.getElementById("range");
  // const selectedPriceSpan = document.getElementById("selectedPrice");
  
  // priceRangeInput.addEventListener("input", function () {
  //   const selectedPrice = this.value;
  //   selectedPriceSpan.innerText = "₹" + selectedPrice;
  // });
  
  