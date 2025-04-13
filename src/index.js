import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import { fileURLToPath } from 'url';
import router from './routes/appRouter.js';
import errorRouter from './routes/errorRouter.js';
import path from 'path';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('views', './src/views');
app.set('layout', './layout');

//connect to the port
let port = process.env.PORT;
if (port == null || port === ""){
  port = 3000;
}

app.use('/', router);
app.use('/', errorRouter);

app.listen(port, () => {
  console.log(`Server running on port: http://localhost:${port}`);
});
