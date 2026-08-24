import { NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

const navigation = [
  ['/', 'Overview'], ['/activities', 'Activities'], ['/leaderboard', 'Leaderboard'],
  ['/teams', 'Teams'], ['/users', 'Users'], ['/workouts', 'Workouts'],
]

function Overview() {
  return (
    <section className="overview">
      <p className="eyebrow">OCTOFIT / TRAINING CONTROL</p>
      <h1>Make today count.</h1>
      <p className="lead-copy">A clear view of the people, movement, and momentum behind your team.</p>
      <div className="overview-grid">
        <NavLink className="overview-link overview-link--coral" to="/activities"><span className="overview-number">01</span><span><strong>Log movement</strong><small>See every activity in one place</small></span><span aria-hidden="true">-&gt;</span></NavLink>
        <NavLink className="overview-link overview-link--blue" to="/leaderboard"><span className="overview-number">02</span><span><strong>Check the board</strong><small>Keep friendly competition visible</small></span><span aria-hidden="true">-&gt;</span></NavLink>
        <NavLink className="overview-link overview-link--green" to="/workouts"><span className="overview-number">03</span><span><strong>Choose a workout</strong><small>Find the next useful session</small></span><span aria-hidden="true">-&gt;</span></NavLink>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="app-shell">
      <header className="topbar"><NavLink className="brand" to="/"><img src="/octofitapp-small.png" alt="OctoFit" /><span>OCTOFIT<span className="brand-dot">.</span></span></NavLink><nav className="main-nav" aria-label="Primary navigation">{navigation.map(([to, label]) => <NavLink key={to} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to={to}>{label}</NavLink>)}</nav></header>
      <main className="page-content"><Routes><Route path="/" element={<Overview />} /><Route path="/activities" element={<Activities />} /><Route path="/leaderboard" element={<Leaderboard />} /><Route path="/teams" element={<Teams />} /><Route path="/users" element={<Users />} /><Route path="/workouts" element={<Workouts />} /></Routes></main>
      <footer className="footer">OCTOFIT TRACKER <span>•</span> KEEP MOVING FORWARD</footer>
    </div>
  )
}

export default App
