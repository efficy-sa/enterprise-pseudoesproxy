import { Request, Response, NextFunction } from 'express';

const loggerHandler = (req: Request, res: Response, next: NextFunction) => {
  logger.log(`Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

  res.on('finish', () => {
    logger.log(
      `Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`
    );
  });

  next();
};

const utils = { loggerHandler };
export default utils;
