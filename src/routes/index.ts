import { Router, Request, Response } from 'express';

const routes = Router();
routes.get('/hello', (_: Request, res: Response) => {
  res.status(200).json({ message: 'Hello world!' });
});

export default routes;
