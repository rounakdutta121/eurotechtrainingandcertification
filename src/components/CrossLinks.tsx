import { Link } from 'react-router-dom'
import { SERVICE_PAGES } from '../data/services'

type CrossLinksProps = {
  currentPath: string
}

export function CrossLinks({ currentPath }: CrossLinksProps) {
  const others = SERVICE_PAGES.filter((page) => page.to !== currentPath)

  return (
    <section className="programs-stage">
      <div className="programs-stage-head">
        <span className="section-label">More programs</span>
        <h2>Explore other Eurotech services</h2>
        <p>
          Move between programs anytime, or{' '}
          <Link to="/" className="text-link">
            return home
          </Link>{' '}
          for a full overview.
        </p>
      </div>

      <div className="program-cards program-cards-cross">
        {others.map((page, index) => (
          <Link key={page.to} to={page.to} className="program-card">
            <div
              className="program-card-media"
              style={{ backgroundImage: `url('${page.image}')` }}
            >
              <span className="program-card-icon">0{index + 1}</span>
            </div>
            <h3>{page.title}</h3>
            <p>{page.blurb}</p>
            <span className="go">Open details →</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
