import { response } from 'express';


const getEvents = ( req, res = response ) => {
  res.json({
    ok: true,
    msg: 'Get events'
  });
};

const createEvent = ( req, res = response ) => {
  res.json({
    ok: true,
    msg: 'Create event'
  });
};

const updateEvent = ( req, res = response ) => {
  res.json({
    ok: true,
    msg: 'Update event'
  });
};

const deleteEvent = ( req, res = response ) => {
  res.json({
    ok: true,
    msg: 'Delete event'
  });
};


export {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
};