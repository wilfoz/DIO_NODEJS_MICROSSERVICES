import { Router, Response, Request, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ userName: 'Renan'}];
    res.status(StatusCodes.OK).json({ users });
});

usersRoute.get('/users/:uuid', (req: Request<{ uuid: string | number }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({ uuid });
});

usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    res.status(StatusCodes.CREATED).send(newUser);
});

export default usersRoute;