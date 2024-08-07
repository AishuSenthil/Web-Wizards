// src/api/eventApi.js

export const fetchEvents = async () => {
    const response = await fetch('http://localhost:8080/api/events');
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch events: ${errorText}`);
    }
    return response.json();
};

export const createEvent = async (eventData) => {
    try {
        const response = await fetch('http://localhost:8080/api/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(eventData),
        });
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to create event: ${errorText}`);
        }
        return response.json();
    } catch (error) {
        console.error('Error during fetch operation:', error);
        throw error;
    }
};

export const updateEvent = async (id, eventData) => {
    const response = await fetch(`http://localhost:8080/api/events/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
    });
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to update event: ${errorText}`);
    }
    return response.json();
};

export const deleteEvent = async (id) => {
    const response = await fetch(`http://localhost:8080/api/events/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to delete event: ${errorText}`);
    }
};
