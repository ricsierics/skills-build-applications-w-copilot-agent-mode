import { createResourceRouter } from './resource.js';
import { Team } from '../models/index.js';

export const teamsRouter = createResourceRouter(Team);