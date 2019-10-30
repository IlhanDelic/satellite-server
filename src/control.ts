import {Response, Request} from "express";

const add = (a:number, b:number): number => a + b;

export let hi =(req: Request, res: Response) => {
    res.send("hello, there");
};

export let hello =(req: Request, res: Response) => {
    res.send("how are you?");
};

export let sum =(req: Request, res: Response) => {
    console.log(add(9,9));
    res.send("check your terminal");
};