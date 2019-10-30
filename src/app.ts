import express, {Application, Response, Request, NextFunction} from 'express';
const app: Application = express();
import * as controller from './control'
app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("hello");
});
app.get('/', controller.hi);
app.post('/hello', controller.hello);
app.listen(process.env.PORT, () => console.log("running"));