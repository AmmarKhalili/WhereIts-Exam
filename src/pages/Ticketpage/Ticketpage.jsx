import React from 'react';
import { useOrderStore } from '../../stores/orderStore';
import TicketCard from '../../components/TicketCard/TicketCard';
import './ticketpage.css';

function Ticketpage() {
  const { orders } = useOrderStore();

  return (
    <div className='ticket-page'>
      <div className="ticketsl">
        {orders.map((order, orderIndex) => (
          order.tickets.map((ticket, ticketIndex) => (
            <div
              key={`${orderIndex}-${ticketIndex}`}
            >
              <TicketCard
                order={order}
                ticket={ticket}
              />
            </div>
          ))
        ))}
      </div>
    </div>
  );
}

export default Ticketpage;

