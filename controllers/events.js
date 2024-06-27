import { response } from 'express';
import Event from '../models/Event.js';

const getEvents = ( req, res = response ) => {
  res.json({
    ok: true,
    msg: 'Get events'
  });
};

const createEvent = async( req, res = response ) => {

  const event = new Event( req.body );
  
  try {
    event.user = req.uid;
    const eventSaved = await event.save();

    res.json({
      ok: true,
      event: eventSaved
    });

  } catch ( error ) {
    console.log( error );

    res.status( 500 ).json({
      ok: false,
      msg: 'Contact the Administrator'
    });
  };
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