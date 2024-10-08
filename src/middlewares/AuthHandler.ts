import { Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";

interface payloadToken {
    id: string,
    iat: number,
    exp: number
}
export async function authenticatorHandler(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization?.split(' ')[1] as string;
    const secret = process.env.SECRET as string;
    const {memberId} = req.body;
    jwt.verify(authToken, secret, (err, decode) => {
        if(err)
            return res.status(401).send('Unauthorized');
        const decoded = decode as payloadToken;
        if(decoded.id === memberId)
            return next();
        return res.status(401).send('Unauthorized');
    })
}