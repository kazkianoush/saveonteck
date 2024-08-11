
var cart = [];
let open = false;
// products add here
function createProducts(){


var products = [
    {
      imgSrc: "pictures/mobile.webp",
      desc: "",
      title: "phone",
      price: "C$45"
    }
    // Add more product objects as needed
  ];


  var productContainer = document.getElementById("products");

products.forEach(function(product) {
  var card = document.createElement("div");
  card.className = "card";
  

  
  var img = document.createElement("div");
  img.className = "img";
  img.innerHTML = "<img src='" + product.imgSrc + "' alt=''>";

  var desc = document.createElement("div");
  desc.className = "desc";
  desc.textContent = product.desc;

  var title = document.createElement("div");
  title.className = "title";
  title.textContent = product.title;

  var box = document.createElement("div");
  box.className = "box";

  

  var price = document.createElement("div");
  price.className = "price";
  price.textContent = product.price;

  var buyNowBtn = document.createElement("button");
  buyNowBtn.className = "btn";
  buyNowBtn.textContent = "Buy Now";

 

  var filename = product.title.toLowerCase().replace(/\s/g, "_") + ".html";
  console.log(filename);

  buyNowBtn.addEventListener("click", function() {
    transition("products/" + filename);
  });

  card.addEventListener("click", function() {
    transition("products/" + filename);
  });


  



  // Assuming you're running this JavaScript in the browser, you can redirect using:

  box.appendChild(price);
 
  box.appendChild(buyNowBtn);
  

  card.appendChild(img);
  card.appendChild(desc);
  card.appendChild(title);
  card.appendChild(box);

  productContainer.appendChild(card);
});


}

function updateCartDisplay() {
  var cartContent = document.getElementById("cart-content");
  var cartPanel = document.getElementById("cart-panel");
  console.log("hello");

  // Clear the current content of the cart
  cartContent.innerHTML = "";

  // Loop through the cart items and add them to the cart content
  cart.forEach(function(item) {
    var cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    var shirtImage = document.createElement("div");
    shirtImage.className = "shirt-image";
    shirtImage.innerHTML = '<img src="' + item.picture + '" alt="Shirt">';

    var shirtDetails = document.createElement("div");
    shirtDetails.className = "shirt-details";

    var itemName = document.createElement("div");
    itemName.className = "shirt-name";
    itemName.textContent = item.title;

    var itemPrice = document.createElement("div");
    itemPrice.className = "shirt-price";
    itemPrice.textContent = item.price;

    

    shirtDetails.appendChild(itemName);
    shirtDetails.appendChild(itemPrice);
    

    cartItem.appendChild(shirtImage);
    cartItem.appendChild(shirtDetails);

    cartContent.appendChild(cartItem);

    console.log(cartPanel);
  });
}












function transition(address) {  

      event.preventDefault(); // Prevent the default behavior of the button
      
      console.log("button clicked");
      
      $("*").addClass("blackout");
  
      setTimeout(function() {
        console.log("clicked");
        window.location.href = address;
      }, 1000);
  }







  $(document).ready(function() {
      $(".menu-cart").click(function() {
        setTimeout(function() {
          if(!open){
            $(".cart-panel").addClass("cart-open");
            open = true;
          } else {
            $(".cart-panel").removeClass("cart-open");
            open = false;
          }
          
        }, 200); // Set the delay in milliseconds (e.g., 200ms)
      });
    // Open the cart panel with a delay
    
    // Close the cart panel with a delay
    $(".cart-close").click(function() {
      setTimeout(function() {
        $(".cart-panel").removeClass("cart-open");
        open = false;
      }, 200); // Set the delay in milliseconds (e.g., 200ms)
    });
  });
  


  document.addEventListener('DOMContentLoaded', () => {

  const dbutton = document.getElementById("buy-btn"); // Replace with your button's actual ID

 dbutton.addEventListener('click', function() {
  const timestamp = new Date().toISOString(); // Get the current timestamp in ISO format
  console.log('Button clicked at:', timestamp);

  // If you want to display the timestamp on the page:
  // const timestampElement = document.getElementById('timestamp-display'); // Replace with an appropriate element ID
  // timestampElement.innerText = 'Button clicked at: ' + timestamp;
});
  });
