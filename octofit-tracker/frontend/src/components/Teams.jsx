import ResourcePage from './ResourcePage.jsx'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const teamsEndpoint = codespaceName ? `https://${codespaceName}-8000.app.github.dev/api/teams/` : 'http://localhost:8000/api/teams/'

export default function Teams() {
  return <ResourcePage resource="teams" endpoint={teamsEndpoint} title="Teams" description="Better together, by design." renderItem={(item) => <article className="resource-item" key={item._id}><div><h2>{item.name || 'Unnamed team'}</h2><p>{item.description || 'A team in motion.'}</p></div><div className="item-meta"><strong>{item.members?.length || 0}</strong> members</div></article>} />
}
