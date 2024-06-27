import { response } from 'express';

const createUser = ( req, res = response ) => {

  const { name, email, password } = req.body;

  if ( name.length < 5 ) {
    return res.status( 400 ).json({
      ok: false,
      msg: 'Name must be longer than 5 characters',
    });
  };

  res.json({
    ok: true,
    msg: 'Register',
    name,
    email,
    password,
  });
};

const loginUser = ( req, res = response ) => {

  const { email, password } = req.body;

  res.json({
    ok: true,
    msg: 'Login',
    email,
    password,
  });
};


const revalidateToken = ( req, res = response ) => {
  res.json({
    ok: true,
    msg: 'Renew'
  });
};

export { createUser, loginUser, revalidateToken };