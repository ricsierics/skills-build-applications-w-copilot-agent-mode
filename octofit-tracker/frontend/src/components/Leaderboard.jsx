import ResourcePage from './ResourcePage.jsx'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const leaderboardEndpoint = codespaceName ? `https://${codespaceName}-8000.app.github.dev/api/leaderboard/` : 'http://localhost:8000/api/leaderboard/'

export default function Leaderboard() {
  return <ResourcePage resource="leaderboard" endpoint={leaderboardEndpoint} title="Leaderboard" description="Progress has a pulse." renderItem={(item, index) => <article className="resource-item" key={item._id}><div><h2>{item.name || item.userId || 'Athlete'}</h2><p>Rank {item.rank || index + 1}</p></div><div className="item-meta"><strong>{item.points || item.score || 0}</strong> points</div></article>} />
}
