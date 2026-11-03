import { SectionIntro } from './SectionIntro'

const demos = [
  {
    title: 'How a Business Objective Becomes a Use Case | Maysano Demo',
    youtubeUrl: 'https://youtu.be/7f37iuqPtIc',
    embedUrl: 'https://www.youtube-nocookie.com/embed/7f37iuqPtIc',
    paragraphs: [
      'Most data product work starts before there is a data product. It starts with a business outcome.',
      'In this Maysano demo, a Business Owner turns a defined objective into a Use Case with AI assistance. They connect the Data Products already available and see which capabilities support the work today.',
      'When an essential capability is missing, Maysano makes the gap visible. That gap becomes a data product candidate for the Data Product Manager to shape, govern and take into delivery.',
      'This is one practical working story of how Maysano connects business objectives, Use Cases, Data Products and delivery work in one managed flow.',
    ],
  },
  {
    title: 'From Business Discussion to Data Product Candidate',
    youtubeUrl: 'https://youtu.be/Z0wZkZbZv0I',
    embedUrl: 'https://www.youtube-nocookie.com/embed/Z0wZkZbZv0I',
    paragraphs: [
      'Most data product work starts before there is a data product. It starts with a business discussion.',
      'A Business Owner and Data Product Manager start with a working note captured from an earlier discussion. They use that context to create and review a data product candidate, place it into lifecycle management, and connect it back to the business objective and use case.',
      'This is not a feature tour. It is one practical working story showing how Maysano connects business context, use cases and data products in one managed flow.',
    ],
  },
] as const

export function ProductDemos() {
  return (
    <section className="section demos-section" id="demos">
      <div className="container">
        <SectionIntro
          eyebrow="PRODUCT DEMOS"
          title="See Maysano in action"
          copy="Short working stories showing how business context becomes managed data product work."
        />

        <div className="demo-grid">
          {demos.map((demo, index) => (
            <article className="demo-feature" key={demo.youtubeUrl}>
              <div className="demo-video">
                <iframe
                  src={demo.embedUrl}
                  title={`Maysano demo: ${demo.title}`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="demo-feature-copy">
                <p className="demo-number">DEMO {String(index + 1).padStart(2, '0')}</p>
                <h3>{demo.title}</h3>
                {demo.paragraphs.map((paragraph, paragraphIndex) => (
                  <p className={paragraphIndex === demo.paragraphs.length - 1 ? 'demo-story-note' : undefined} key={paragraph}>
                    {paragraph}
                  </p>
                ))}
                <a className="text-link demo-watch-link" href={demo.youtubeUrl} target="_blank" rel="noreferrer">
                  Watch on YouTube <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
