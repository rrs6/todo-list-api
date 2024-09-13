import { Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";

interface payloadToken {
    id: string,
    iat: number,
    exp: number
}
export async function basicAuthHandler(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization?.split(' ')[1] as string;
    const secret = process.env.SECRET as string;
    jwt.verify(authToken, secret, (err, decode) => {
        if(err)
            return res.status(401).send('Unauthorized');
        const decoded = decode as payloadToken;
        req.body.userId = decoded.id;
        next();
    })
}