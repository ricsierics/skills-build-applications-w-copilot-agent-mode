import { createResourceRouter } from './resource.js';
import { Workout } from '../models/index.js';

export const workoutsRouter = createResourceRouter(Workout);