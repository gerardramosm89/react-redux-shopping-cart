# A simple react-redux shopping cart application!
##### To install this application
Download or clone the repo
run 
```
npm install
```
This assumes that webpack is installed globally. After running `npm install` and if you get a "webpack command not found" or something similar. try `sudo npm install -g webpack`, it should install and webpack should run properly.

then run
```
webpack
```
to build the bundle.js, then run 
```
npm start
```
to start the server

##### Then you can start adding books and whatnot to your cart!

Features include
1) Being able to add new books to your cart
2) Calculate totals based on books and quantity of books added to cart
3) Being able to delete from the cart
4) Being able to delete from the books list
5) Incrementing or decrementing quantity of books already in the card
6) Popup modal showing the totals of everything in cart
7) Cart badge follows how much quantity is in your cart

#### Short Demo:
![redux-cart](https://github.com/gerardramosm89/react-redux-shopping-cart/blob/master/public/images/cart.gif?raw=true)
