import ResourcePage from './ResourcePage.jsx'

export default function Teams() {
  return <ResourcePage resource="teams" title="Teams" description="Better together, by design." renderItem={(item) => <article className="resource-item" key={item._id}><div><h2>{item.name || 'Unnamed team'}</h2><p>{item.description || 'A team in motion.'}</p></div><div className="item-meta"><strong>{item.members?.length || 0}</strong> members</div></article>} />
}
