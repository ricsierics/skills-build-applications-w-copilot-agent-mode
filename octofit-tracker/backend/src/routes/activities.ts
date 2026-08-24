import { createResourceRouter } from './resource.js';
import { Activity } from '../models/index.js';

export const activitiesRouter = createResourceRouter(Activity);