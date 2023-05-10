import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import './style.css';

// TODO: Add a comment describing the functionality of loadStripe
// Your comment here
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
// this is the public key and it is used to identify the client

const Cart = () => {// this is the cart component
  const [state, dispatch] = useStoreContext();// this is the state and dispatch from the global state
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);// this is the checkout query

  // TODO: Add a comment describing the functionality of the useEffect hook in this instance
  // Your comment here
  useEffect(() => {// this is the use effect hook
    if (data) {// if there is data
      stripePromise.then((res) => { // this is the stripe promise
        res.redirectToCheckout({ sessionId: data.checkout.session });
        // this is the redirect to checkout
      });
      // the code above is redirecting to checkout by using the stripe promise, 
      //which is using the data from the checkout session
    }
  }, [data]);

  // TODO: Add a comment describing what data we are watching and what work should be preformed if that data changes
  // Your comment here
  useEffect(() => {// this is the use effect hook, which is watching the state.cart.length and dispatch
    async function getCart() {//  this is the get cart function
      const cart = await idbPromise('cart', 'get');// this is the cart and it is getting the cart
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
      // this is the dispatch and it is adding multiple to the cart
    }
    // the code above is getting the cart and adding multiple to the cart by using the dispatch

    if (!state.cart.length) {// if there is no state.cart.length
      getCart();// get the cart  
    }// if there is no state.cart.length, then get the cart means that if there is no cart, then get the cart. whcih means that if there is no cart, then get the cart
  }, [state.cart.length, dispatch]);// this is creating the cart and dispatching it

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  // TODO: Add a comment describing the functionality of our submitCheckout function.
  // Your comment here
  function submitCheckout() {// this is the submit checkout function
    const productIds = [];//  this is the product ids

    state.cart.forEach((item) => {// this is the state.cart and it is getting each item
      for (let i = 0; i < item.purchaseQuantity; i++) {// this is the for loop 
        productIds.push(item._id);// this is pushing the item id
      }// the code above is getting the item id
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <span role="img" aria-label="trash">
          🛒
        </span>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>
        [close]
      </div>
      <h2>Shopping Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>

            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Checkout</button>
            ) : (
              <span>(log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added anything to your cart yet!
        </h3>
      )}
    </div>
  );
};

export default Cart;
