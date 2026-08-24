import mongoose, { Schema } from 'mongoose';

const documentSchema = new Schema(
  {
    name: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    teamId: { type: Schema.Types.ObjectId, ref: 'Team' },
    points: { type: Number, default: 0 },
    score: { type: Number, default: 0 },
    type: { type: String },
    duration: { type: Number },
    description: { type: String },
    date: { type: Date },
    email: { type: String },
  },
  { timestamps: true, strict: false },
);

export const User = mongoose.models.User || mongoose.model('User', documentSchema);
export const Team = mongoose.models.Team || mongoose.model('Team', documentSchema);
export const Activity = mongoose.models.Activity || mongoose.model('Activity', documentSchema);
export const Leaderboard = mongoose.models.Leaderboard || mongoose.model('Leaderboard', documentSchema);
export const Workout = mongoose.models.Workout || mongoose.model('Workout', documentSchema);