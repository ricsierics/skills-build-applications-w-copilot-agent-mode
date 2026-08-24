import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

export default function ResourcePage({ resource, title, description, endpoint, renderItem }) {
  const [items, setItems] = useState([])
  const [state, setState] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true
    fetchCollection(resource, endpoint).then((data) => {
      if (active) { setItems(data); setState('ready') }
    }).catch((requestError) => {
      if (active) { setError(requestError.message); setState('error') }
    })
    return () => { active = false }
  }, [resource, endpoint])

  return (
    <section>
      <div className="resource-header">
        <div><p className="section-kicker">OCTOFIT / {resource}</p><h1>{title}</h1></div>
        <p>{description}</p>
      </div>
      {state === 'loading' && <p className="state">Loading {resource}...</p>}
      {state === 'error' && <p className="state state--error">{error}. Check that the API is running on port 8000.</p>}
      {state === 'ready' && items.length === 0 && <p className="state">No {resource} found yet.</p>}
      {state === 'ready' && items.length > 0 && <div className="resource-list">{items.map((item, index) => renderItem(item, index))}</div>}
    </section>
  )
}
