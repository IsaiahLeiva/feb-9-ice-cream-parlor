const iceCream = [{ name: 'Cookie Dough', image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg', price: 1 }, { name: 'Vanilla', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg', price: 1 }, { name: 'Strawberry', image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg', price: 2 }]

const vessels = [{ name: 'Waffle Cone', image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg', price: 2 }, { name: 'Waffle Bowl', image: 'http://images.wbmason.com/350/L_JOY66050.jpg', price: 4 }]

const toppings = [{ name: 'Sprinkles', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg', price: 1 }, { name: 'Chocolate Chips', image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360', price: 2 }]

//ANCHOR: When you select an ice cream or a vessel utilize the find method to add it to the cart array.

//ANCHOR: Every time you add something to your cart the total should be updated, you can render this to the screen similar to what a receipt would look like.

let cart = []

function drawFlavors() {
    let template = '';
    for (let i = 0; i < iceCream.length; i++) {
        const item = iceCream[i];
        item += ` 
        <div id="flavors" class="menu-item col-md-6" onclick="buyiceCream(${flavor.id})">
            <img class="img-fluid"
            src="https://images.unsplash.com/photo-1572829214292-1f9b1aa3b1ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hvY29sYXRlJTIwaWNlJTIwY3JlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="Cookie-dough">
            <div class="d-flex justify-content-between p-2">
            <h2><b>${item.name}</b></h2>
            <h3>$${item.price}</h3>
            </div>
        </div>
        `
    }
    document.getElementById('iceCream').innerHTML = template
}

function buyiceCream(icFlavors) {
    let itemToAdd = iceCream.find(fi => fi.id == icFlavors)
    console.log('adding', itemToAdd)
    cart.push(itemToAdd)
    total += itemToAdd.price
    drawCart()
}