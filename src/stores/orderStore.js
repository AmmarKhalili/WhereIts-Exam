import { create } from 'zustand';

export const useOrderStore = create((set) => ({
  orders: [],

  addOrder: (event, numberOfTickets) => {
    console.log("Lägger till order:", { event, numberOfTickets });

    const newOrder = {
      event,
      tickets: [],
      section: generateRandomSection(), 
      receiptId: generateReceiptId() 
    };

    
    for (let i = 0; i < numberOfTickets; i++) {
      
      const ticket = {
        section: newOrder.section, 
        seatNumber: 200 + i + 1 
      };

      newOrder.tickets.push(ticket); 
    }

    set((state) => ({
      orders: [...state.orders, newOrder]
    }));
  }
}));

const generateRandomSection = () => {
  const sections = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const randomIndex = Math.floor(Math.random() * sections.length);
  return sections[randomIndex];
};

const generateReceiptId = () => {
  const characters = 'LINUSARVIKA1337';
  const length = 5;
  let receiptId = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    receiptId += characters.charAt(randomIndex);
  }
  return receiptId;
};

