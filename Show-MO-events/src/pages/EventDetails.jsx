// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const EventDetail = () => {
//   const { id } = useParams();
//   const [event, setEvent] = useState(null);

//   useEffect(() => {
//     const fetchEvent = async () => {
//       try {
//         const response = await fetch(`/api/events/${id}`);
//         const data = await response.json();
//         setEvent(data);
//       } catch (error) {
//         console.error('Error fetching event:', error);
//       }
//     };

//     fetchEvent();
//   }, [id]);

//   if (!event) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{event.name}</h2>
//       <p>Category: {event.eventCategory.name}</p>
//       <p>Description: {event.eventDetails.description}</p>
//       <p>Contact Email: {event.eventDetails.contactEmail}</p>
//     </div>
//   );
// };

// export default EventDetail;
