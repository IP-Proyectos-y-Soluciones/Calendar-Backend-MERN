import { response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import { generateJWT } from '../helpers/jwt.js';

const createUser = async( req, res = response ) => {

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

      if ( user ) {
        return res.status( 400 ).json({
          ok: false,
          msg: 'User already exists',
        });
      };

    user = new User( req.body );

    // Encriptar contraseña
    const salt = bcrypt.genSaltSync();
    user.password =  bcrypt.hashSync( password, salt );
  
    // Guardar usuario
    await user.save();

    // Generar JWT
    const token = await generateJWT( user.id, user.name );
  
    res.status( 201 ).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token
    });

  } catch ( error ) {
    console.log( error );

    res.status( 500 ).json({
      ok: false,
      msg: 'Contact administrator',
    });
  };
};

const loginUser = async( req, res = response ) => {

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if ( !user ) {
      return res.status(400).json({
        ok: false,
        msg: 'The user does not exist with that email'
      });
    };

    // Confirmar los passwords
    const validPassword = bcrypt.compareSync( password, user.password );

    if ( !validPassword ) {
      return res.status( 400 ).json({
        ok: false,
        msg: 'Incorrect password'
      });
    };

    // Generar JWT
    const token = await generateJWT( user.id, user.name );

    res.json({
      ok: true,
      uid: user.id,
      name: user.name,
      token
    });

  } catch ( error ) {
    console.log( error );

    res.status( 500 ).json({
      ok: false,
      msg: 'Contact administrator',
    });
  };
};


const revalidateToken = async( req, res = response ) => {

  const { uid, name } = req;

  // Generar JWT
  const token = await generateJWT( uid, name );

  // Obtener información del usuario, y remover el password
  const user = await User.findById( uid );

  res.json({
    ok: true,
    token,
    uid,
    name: user.name,
  });
};

export { createUser, loginUser, revalidateToken };