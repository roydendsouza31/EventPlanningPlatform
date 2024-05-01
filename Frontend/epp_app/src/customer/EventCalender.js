import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";

const EventCalendar = ({ events, handleDateClick }) => {
  const handleEventClick = async (info) => {
    const eventId = info.event.id;
    try {
      await axios.delete(`http://localhost:5000/api/events/${eventId}`);
      info.event.remove(); // Remove the event from the calendar on successful deletion
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  const handleEventDrop = async (info) => {
    const eventId = info.event.id;
    const updatedEvent = { id: eventId, start: info.event.startStr };
    try {
      await axios.put(
        `http://localhost:5000/api/events/${eventId}`,
        updatedEvent
      );
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  const handleEventResize = async (info) => {
    const eventId = info.event.id;
    const updatedEvent = {
      id: eventId,
      start: info.event.startStr,
      end: info.event.endStr,
    };
    try {
      await axios.put(
        `http://localhost:5000/api/events/${eventId}`,
        updatedEvent
      );
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  const handleEventReceive = async (info) => {
    const { title, start } = info.event;
    try {
      const response = await axios.post("http://localhost:5000/api/events", {
        title,
        start,
      });
      info.event.setProp("id", response.data._id); // Set the event ID returned from the server
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={events}
      editable={true}
      selectable={true}
      eventClick={handleEventClick}
      eventDrop={handleEventDrop}
      eventResize={handleEventResize}
      select={handleDateClick}
      eventReceive={handleEventReceive}
    />
  );
};

export default EventCalendar;
