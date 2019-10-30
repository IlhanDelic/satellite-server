import express, {Application, Response, Request, NextFunction} from 'express';
const app: Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("hello");
});
app.listen(process.env.PORT, () => console.log("running"));