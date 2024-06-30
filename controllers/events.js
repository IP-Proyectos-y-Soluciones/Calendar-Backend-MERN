import { response } from 'express';
import Event from '../models/Event.js';

const getEvents = async( req, res = response ) => {
  try {
    const events = await Event.find().populate( 'user', 'name' );

    res.json({
      ok: true,
      events
    });
  } catch ( error ) {
    console.log( error );

    res.status( 500 ).json({
      ok: false,
      msg: 'Contact the Administrator'
    });
  };
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

const updateEvent = async( req, res = response ) => {
  
  const eventId = req.params.id;
  const uid = req.uid;

  try {
    const event = await Event.findById( eventId );

    if ( !event ) {
      return res.status( 404 ).json({
        ok: false,
        msg: 'Event does not exist for that id'
      });
    };

    if ( event.user.toString() !== uid ) {
      return res.status( 401 ).json({
        ok: false,
        msg: 'You do not have privileges to edit this event'
      });
    };

    const newEvent = {
      ...req.body,
      user: uid
    };

    const eventUpdated = await Event.findByIdAndUpdate( eventId, newEvent, { new: true } );

    res.json({
      ok: true,
      event: eventUpdated
    });

  } catch ( error ) {
    console.log( error );

    res.status( 500 ).json({
      ok: false,
      msg: 'Contact the Administrator'
    });
  };
};

const deleteEvent = async( req, res = response ) => {

  const eventId = req.params.id;
  const uid = req.uid;

  try {
    const event = await Event.findById( eventId );

    if ( !event ) {
      return res.status( 404 ).json({
        ok: false,
        msg: 'Event does not exist for that id'
      });
    };

    if ( !event ) {
      return res.status( 404 ).json({
        ok: false,
        msg: 'Event does not exist for that id'
      });
    };

    if ( event.user.toString() !== uid ) {
      return res.status( 401 ).json({
        ok: false,
        msg: 'You do not have the privilege to delete this event'
      });
    };

    await Event.findByIdAndDelete( eventId );

    res.json({ ok: true });

    if ( event.user.toString() !== uid ) {
      return res.status( 401 ).json({
        ok: false,
        msg: 'You do not have the privilege to delete this event'
      });
    }

    await Event.findByIdAndDelete( eventId );

    res.json({ ok: true });
    
  } catch ( error ) {
    console.log( error );

    res.status( 500 ).json({
      ok: false,
      msg: 'Contact the Administrator'
    });
  };
};


export {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
};