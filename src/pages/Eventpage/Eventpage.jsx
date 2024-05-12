import React, { useEffect } from 'react';
import { fetchEventData } from '../../api';
import { useEventStore } from '../../stores/useStore';
import './eventpage.css';
import EventCard from '../../components/EventPageCard/EventPageCard';


export default function Eventpage() {
  const { events, setEvents } = useEventStore();

  useEffect(() => {
    fetchEventData()
      .then(data => {
        console.log(data);
        setEvents(data.events) 
      })
      .catch(error => {
        console.error(`Error fetching events:`, error)
      })
  }, []);

  useEffect(() => {
    
  }, [events]);

  return (
    <div className='event-wrapper'>
      <div className="title-container">
        <h1 className='page-title'>Events</h1>
        <input className='page-input'></input>
      </div>
      <div className="events-container">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <EventCard event={event} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}


