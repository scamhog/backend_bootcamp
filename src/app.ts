// import express, { Application, Request, Response, NextFunction } from 'express';

// const app: Application = express();
// const $PORT = 3000;

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//     console.log(req.ip);
//     res.send('Hello World!');
// });

// app.listen($PORT, () => console.log(`Server is running on port: ${$PORT}`));

// PLAY SANDBOX
function* fibonacci(){
    let tuple = [1,1];
    while(true){
        let n = 0;
        console.log(n = tuple.reduce((n,m)=>{return n+m}));
        yield tuple = [tuple[1], n];
    }
}

let sequence = fibonacci();
for (let index = 0; index < 10; index++)
    sequence.next();