import { createResourceRouter } from './resource.js';
import { Leaderboard } from '../models/index.js';

export const leaderboardRouter = createResourceRouter(Leaderboard, { score: -1 });