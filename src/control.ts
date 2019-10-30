import {Response, Request} from "express";

export let hi =(req: Request, res: Response) => {
    res.send("hello, there");
};

export let hello =(req: Request, res: Response) => {
    res.send("how are you?");
};

