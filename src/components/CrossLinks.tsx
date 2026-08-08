import { Link } from 'react-router-dom'
import { SERVICE_PAGES } from '../data/services'

type CrossLinksProps = {
  currentPath: string
}

export function CrossLinks({ currentPath }: CrossLinksProps) {
  const others = SERVICE_PAGES.filter((page) => page.to !== currentPath)
  const [featured, ...rest] = others

  return (
    <section className="programs-stage">
      <div className="programs-stage-head">
        <div>
          <span className="section-label">More programs</span>
          <h2>Explore other Eurotech services</h2>
        </div>
        <p>
          Move between programs anytime, or{' '}
          <Link to="/" style={{ color: 'var(--brand-soft)', fontWeight: 600 }}>
            return home
          </Link>{' '}
          for a full overview.
        </p>
      </div>

      <div className="program-mosaic cross-mosaic">
        <Link to={featured.to} className="mosaic-feature">
          <div
            className="mosaic-media"
            style={{ backgroundImage: `url('${featured.image}')` }}
            aria-hidden="true"
          />
          <div className="mosaic-copy">
            <span className="path-index">Next / Program</span>
            <h3>{featured.title}</h3>
            <p>{featured.blurb}</p>
            <span className="go">Open details →</span>
          </div>
        </Link>

        <div className="mosaic-stack">
          {rest.map((page, index) => (
            <Link key={page.to} to={page.to} className="mosaic-row">
              <div
                className="mosaic-media"
                style={{ backgroundImage: `url('${page.image}')` }}
                aria-hidden="true"
              />
              <div className="mosaic-copy">
                <span className="path-index">0{index + 2} / Program</span>
                <h3>{page.title}</h3>
                <p>{page.blurb}</p>
                <span className="go">Open details →</span>
              </div>
            </Link>
          ))}
          <Link to="/" className="mosaic-row mosaic-home">
            <div className="mosaic-copy">
              <span className="path-index">Home</span>
              <h3>Eurotech hub</h3>
              <p>Back to all training and certification pathways.</p>
              <span className="go">Go home →</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
