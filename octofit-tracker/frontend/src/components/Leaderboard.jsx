import ResourcePage from './ResourcePage.jsx'

export default function Leaderboard() {
  return <ResourcePage resource="leaderboard" title="Leaderboard" description="Progress has a pulse." renderItem={(item, index) => <article className="resource-item" key={item._id}><div><h2>{item.name || item.userId || 'Athlete'}</h2><p>Rank {item.rank || index + 1}</p></div><div className="item-meta"><strong>{item.points || item.score || 0}</strong> points</div></article>} />
}
