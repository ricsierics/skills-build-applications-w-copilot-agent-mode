import mongoose from 'mongoose';
import { Activity, Leaderboard, Team, User, Workout } from '../models/index.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.create([
      { name: 'Alex Morgan', email: 'alex.morgan@example.com', goal: 'Build endurance' },
      { name: 'Jordan Lee', email: 'jordan.lee@example.com', goal: 'Improve strength' },
      { name: 'Taylor Rivera', email: 'taylor.rivera@example.com', goal: 'Stay consistent' },
    ]);

    const teams = await Team.create([
      {
        name: 'Trail Blazers',
        description: 'A team focused on outdoor cardio and steady progress.',
        members: [users[0]._id, users[2]._id],
      },
      {
        name: 'Strength Squad',
        description: 'Building strength through consistent training.',
        members: [users[1]._id],
      },
    ]);

    await Activity.create([
      { userId: users[0]._id, teamId: teams[0]._id, type: 'Run', duration: 32, points: 320, date: new Date('2026-08-20') },
      { userId: users[1]._id, teamId: teams[1]._id, type: 'Strength', duration: 45, points: 450, date: new Date('2026-08-21') },
      { userId: users[2]._id, teamId: teams[0]._id, type: 'Cycling', duration: 38, points: 380, date: new Date('2026-08-22') },
    ]);

    await Leaderboard.create([
      { userId: users[0]._id, name: users[0].name, points: 1280, rank: 1 },
      { userId: users[1]._id, name: users[1].name, points: 1120, rank: 2 },
      { userId: users[2]._id, name: users[2].name, points: 980, rank: 3 },
    ]);

    await Workout.create([
      { name: 'Beginner Endurance Run', type: 'Cardio', duration: 30, description: 'A conversational-pace run with a gentle cooldown.' },
      { name: 'Full Body Strength', type: 'Strength', duration: 40, description: 'Squats, rows, presses, and core work at a steady pace.' },
      { name: 'Recovery Mobility', type: 'Mobility', duration: 20, description: 'Low-intensity stretching and mobility for active recovery.' },
    ]);

    console.log('Seeded users, teams, activities, leaderboard, and workouts');
    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
