import { Router } from 'express';
import getAllBooks from './controllers/getAllBooks';
import addNewBook from './controllers/addNewBook';
import getBookById from './controllers/getBookById';

const appRouter = Router();

appRouter.get('/library', getAllBooks)
appRouter.get('/library/:book_id', getBookById)
appRouter.post('/library', addNewBook)


export default appRouter;
