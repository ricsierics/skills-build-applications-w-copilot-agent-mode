import ResourcePage from './ResourcePage.jsx'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const activitiesEndpoint = codespaceName ? `https://${codespaceName}-8000.app.github.dev/api/activities/` : 'http://localhost:8000/api/activities/'

export default function Activities() {
  return <ResourcePage resource="activities" endpoint={activitiesEndpoint} title="Activities" description="Recent effort, recorded."
    renderItem={(item) => 
      <article className="resource-item" key={item._id}>
        <div>
          <h2>{item.type || 'Training session'}</h2>
          <p>{item.date ? new Date(item.date).toLocaleDateString() : 'Date not recorded'} · {item.duration || 0} minutes</p>
        </div>
        <div className="item-meta"><strong>{item.points || 0}</strong> points</div>
      </article>} 
  />
}
