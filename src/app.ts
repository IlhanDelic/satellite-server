import express, {Application, Response, Request, NextFunction} from 'express';
import * as controller from './control'
const app: Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("hello");
});

app.get('/', controller.hi);
app.get('/sum', controller.sum);
app.post('/hello', controller.hello);

app.listen(process.env.PORT || 5000, () => console.log("running"));