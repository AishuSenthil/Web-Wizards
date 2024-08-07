// // src/pages/CreateEvent.jsx
// import { useState, useEffect } from 'react';
// import { fetchCategories, createEvent } from '../api/eventApi';

// const CreateEvent = () => {
//   const [categories, setCategories] = useState([]);
//   const [formData, setFormData] = useState({
//     eventName: '',
//     eventCategory: '',
//     description: '',
//     contactEmail: ''
//   });

//   useEffect(() => {
//     const getCategories = async () => {
//       try {
//         const data = await fetchCategories();
//         setCategories(data);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };

//     getCategories();
//   }, []);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = await createEvent(formData);
//       console.log('Event created:', data);
//     } catch (error) {
//       console.error('Error creating event:', error);
//     }
//   };

//   const formStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '20px'
//   };

//   const divStyle = {
//     display: 'flex',
//     flexDirection: 'column'
//   };

//   const labelStyle = {
//     marginBottom: '5px'
//   };

//   const inputStyle = {
//     padding: '10px',
//     fontSize: '16px'
//   };

//   return (
//     <div>
//       <h2>Create Event</h2>
//       <form onSubmit={handleSubmit} style={formStyle}>
//         <div style={divStyle}>
//           <label htmlFor="eventName" style={labelStyle}>Event Name</label>
//           <input
//             type="text"
//             id="eventName"
//             name="eventName"
//             value={formData.eventName}
//             onChange={handleChange}
//             required
//             minLength="3"
//             maxLength="50"
//             style={inputStyle}
//           />
//         </div>
//         <div style={divStyle}>
//           <label htmlFor="eventCategory" style={labelStyle}>Category</label>
//           <select
//             id="eventCategory"
//             name="eventCategory"
//             value={formData.eventCategory}
//             onChange={handleChange}
//             required
//             style={inputStyle}
//           >
//             <option value="">Select a category</option>
//             {categories.map(category => (
//               <option key={category.id} value={category.id}>{category.name}</option>
//             ))}
//           </select>
//         </div>
//         <div style={divStyle}>
//           <label htmlFor="description" style={labelStyle}>Description</label>
//           <textarea
//             id="description"
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             required
//             maxLength="500"
//             style={inputStyle}
//           ></textarea>
//         </div>
//         <div style={divStyle}>
//           <label htmlFor="contactEmail" style={labelStyle}>Contact Email</label>
//           <input
//             type="email"
//             id="contactEmail"
//             name="contactEmail"
//             value={formData.contactEmail}
//             onChange={handleChange}
//             required
//             style={inputStyle}
//           />
//         </div>
//         <button type="submit" style={inputStyle}>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CreateEvent;
