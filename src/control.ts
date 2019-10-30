import {Response, Request} from "express";

const add = (a:number, b:number): number => a + b;

export let hi =(req: Request, res: Response) => {
    res.send("hello, there");
};

export let hello =(req: Request, res: Response) => {
    res.send("how are you?");
};

export let sum =(req: Request, res: Response) => {

    res.send("9 + 9 = " + add(9,9));
};