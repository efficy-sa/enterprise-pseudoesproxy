import dotenv from 'dotenv';

dotenv.config();

export const LOGGER_ON = process.env.LOGGER_ON ? Number(process.env.LOGGER_ON) === 1 : false;
const HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3000;

export const SERVER = { HOSTNAME, PORT };
