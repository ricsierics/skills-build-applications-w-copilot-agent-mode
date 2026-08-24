import ResourcePage from './ResourcePage.jsx'

export default function Users() {
  return <ResourcePage resource="users" title="Users" description="The people powering the plan." renderItem={(item) => <article className="resource-item" key={item._id}><div><h2>{item.name || 'Unnamed user'}</h2><p>{item.email || 'No email recorded'}</p></div><div className="item-meta">{item.goal || 'Keep moving'}</div></article>} />
}
