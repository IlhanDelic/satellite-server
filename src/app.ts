import express, {Application, Response, Request, NextFunction} from 'express';
import * as controller from './control'
const app: Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("hello");
});

app.get('/', controller.hi);
app.post('/hello', controller.hello);

app.listen(process.env.PORT, () => console.log("running"));