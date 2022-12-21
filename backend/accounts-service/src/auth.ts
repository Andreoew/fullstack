import bcrypt from 'bcryptjs';
import jwt, { VerifyOptions } from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';

//const privates = path.dirname('.src/keys/private.key')
//console.log(privates)

const privatekey = fs.readFileSync('./src/keys/private.key', 'utf8');
const publickey = fs.readFileSync('./src/keys/public.key', 'utf8');
const jwtExpires = parseInt(`${process.env.JWT_EXPIRES}`);
const jwtAlgorithm = "RS256";


function hashPassword(password: string){
    return bcrypt.hashSync(password, 10);
}

function comparePassword(password: string, hashPassword: string){
  return bcrypt.compare(password, hashPassword);
}

type Token = { accountId: number };

function sign(accountId: number){
  const token: Token = {accountId}
  return jwt.sign(token, privatekey, { expiresIn: jwtExpires, algorithm: jwtAlgorithm })
}

async function verify(token: string){
  try {
    const decoded: Token = await jwt.verify(token, publickey, {algorithm: [jwtAlgorithm]} as VerifyOptions) as Token;
    return { accountId: decoded.accountId };
  } catch (error) {
    console.log(`verify: ${error}`);
    return null;
  }
}

export default { hashPassword, comparePassword, sign, verify };