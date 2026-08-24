import { createResourceRouter } from './resource.js';
import { User } from '../models/index.js';

export const usersRouter = createResourceRouter(User);