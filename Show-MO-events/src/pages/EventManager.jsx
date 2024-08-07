// src/pages/EventManager.jsx

import React, { useState, useEffect } from 'react';
import { fetchEvents, createEvent, updateEvent, deleteEvent } from './eventApi';

const EventManager = () => {
    const [events, setEvents] = useState([]);
    const [formData, setFormData] = useState({ id: '', name: '', date: '', time: '', details: '' });
    const [formMode, setFormMode] = useState('create');

    useEffect(() => {
        fetchEventsList();
    }, []);

    const fetchEventsList = async () => {
        try {
            const data = await fetchEvents();
            setEvents(data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            if (formMode === 'create') {
                await createEvent(formData);
                alert('Event created successfully!');
            } else if (formMode === 'update') {
                await updateEvent(formData.id, formData);
                alert('Event updated successfully!');
            }
            setFormData({ id: '', name: '', date: '', time: '', details: '' });
            setFormMode('create');
            fetchEventsList();
        } catch (error) {
            console.error(`Error ${formMode === 'create' ? 'creating' : 'updating'} event:`, error);
            alert(`Failed to ${formMode === 'create' ? 'create' : 'update'} event: ${error.message}`);
        }
    };

    const handleEditClick = (event) => {
        setFormData(event);
        setFormMode('update');
    };

    const handleDeleteClick = async (id) => {
        try {
            await deleteEvent(id);
            alert('Event deleted successfully!');
            fetchEventsList();
        } catch (error) {
            console.error('Error deleting event:', error);
            alert('Failed to delete event: ' + error.message);
        }
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
    };

    const formContainerStyle = {
        width: '45%',
        marginLeft: '20px',
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
    };

    const inputStyle = {
        marginBottom: '10px',
        padding: '10px',
        fontSize: '16px',
    };

    const buttonStyle = {
        padding: '10px',
        fontSize: '16px',
        cursor: 'pointer',
    };

    const eventListStyle = {
        width: '50%',
    };

    const eventItemStyle = {
        marginBottom: '10px',
    };

    const eventButtonStyle = {
        marginLeft: '10px',
        cursor: 'pointer',
    };

    return (
        <div style={containerStyle}>
            <div style={eventListStyle}>
                <h2>Event List</h2>
                <ul>
                    {events.map((event) => (
                        <li key={event.id} style={eventItemStyle}>
                            <strong>{event.name}</strong> - {event.date} {event.time}
                            <button onClick={() => handleEditClick(event)} style={eventButtonStyle}>Edit</button>
                            <button onClick={() => handleDeleteClick(event.id)} style={eventButtonStyle}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div style={formContainerStyle}>
                <h2>Create Event</h2>
                <form onSubmit={handleFormSubmit} style={formStyle}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Event Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        style={inputStyle}
                    />
                    <input
                        type="date"
                        name="date"
                        placeholder="Date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        style={inputStyle}
                    />
                    <input
                        type="time"
                        name="time"
                        placeholder="Time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                        style={inputStyle}
                    />
                    <textarea
                        name="details"
                        placeholder="Details"
                        value={formData.details}
                        onChange={handleInputChange}
                        required
                        style={inputStyle}
                    />
                    <button type="submit" style={buttonStyle}>
                        {formMode === 'create' ? 'Create Event' : 'Update Event'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EventManager;
