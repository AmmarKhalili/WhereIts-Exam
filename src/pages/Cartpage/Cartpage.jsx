import React, { useState } from 'react';
import { useOrderStore } from '../../stores/orderStore'; 
import { useTicketStore } from '../../stores/ticketStore'; 
import CartEventCard from '../../components//CartEventCard/CartEventCard';

import './cartpage.css';


function Cartpage() {
  const { cart, increaseTickets, decreaseTickets, clearCart } = useTicketStore();
  const { addOrder } = useOrderStore();
  const [orderStatus, setOrderStatus] = useState('');

  const totalPris = calculateTotalPris(cart);

  const handleSendOrder = () => {
    if (cart.length === 0) {
      setOrderStatus('Din varukorg är tom!');
    } else {
      sendOrder(cart, addOrder, clearCart, setOrderStatus);
    }
  };

  return (
    <div className='cart-container'>
      <h1>Order</h1>
      <ul>
        {cart.map((item, index) => (
          <CartEventCard
            key={index}
            event={item.event}
            numberOfTickets={item.numberOfTickets}
            increaseTickets={() => increaseTickets(index)}
            decreaseTickets={() => decreaseTickets(index)}
          />
        ))}
      </ul>
      <div className="bottom">
        <p className='pris'>Totalt värde på order</p>
        <p className='Total'>{totalPris} sek</p>
        {orderStatus && <p className='pris'>{orderStatus}</p>}
        <button className='sendButton' onClick={handleSendOrder}>Skicka order</button>
      </div>
    </div>
  );
}

function calculateTotalPris(cart) {
  return cart.reduce((total, item) => total + (item.event.price * item.numberOfTickets), 0);
}

function sendOrder(cart, addOrder, clearCart, setOrderStatus) {
  cart.forEach(item => {
    addOrder(item.event, item.numberOfTickets);
  });
  clearCart();
  setOrderStatus('Din order är skickad!');
}

export default Cartpage;

