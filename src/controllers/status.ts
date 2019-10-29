// this is the file where the other functions come from

import {Request, Response} from "express";

export let hi = (req: Request, res: Response) => { // functie die "hello" print
    res.send("Hello");
}
export let nice = (req: Request, res: Response) => {  // functie die "NICEEE" print
    res.send ("NICEEE");
}

export let wat = (req: Request, res: Response) => {
    res.send("wat?")
}
