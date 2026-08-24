import ResourcePage from './ResourcePage.jsx'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const workoutsEndpoint = codespaceName ? `https://${codespaceName}-8000.app.github.dev/api/workouts/` : 'http://localhost:8000/api/workouts/'

export default function Workouts() {
  return <ResourcePage resource="workouts" endpoint={workoutsEndpoint} title="Workouts" description="The next good session is here." renderItem={(item) => <article className="resource-item" key={item._id}><div><h2>{item.name || 'Workout'}</h2><p>{item.description || item.type || 'Training plan'}</p></div><div className="item-meta"><strong>{item.duration || 0}</strong> min</div></article>} />
}
