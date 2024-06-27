import { response } from 'express';

const createUser = ( req, res = response ) => {
  res.json({
    ok: true,
    msg: 'Register'
  });
};

const loginUser = ( req, res = response ) => {
  res.json({
    ok: true,
    msg: 'Login'
  });
};


const revalidateToken = ( req, res = response ) => {
  res.json({
    ok: true,
    msg: 'Renew'
  });
};

export { createUser, loginUser, revalidateToken };