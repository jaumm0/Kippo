import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'

export default function ProjectCard({ project, index }) {
  const { t, lang } = useI18n()

  const imgStyle = project.cover
    ? { backgroundImage: `url('${project.cover}')` }
    : { '--c1': project.c1, '--c2': project.c2 }

  return (
    <Reveal as="article" index={index} className="project">
      <div
        className={`project__img${project.cover ? ' project__img--cover' : ''}`}
        style={imgStyle}
      >
        <span className="project__init">{project.init}</span>
      </div>
      <div className="project__body">
        <h3 className="project__title">{project.title[lang]}</h3>
        <p className="project__text">{project.summary[lang]}</p>
        <div className="project__tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <Link className="project__more" to={`/projeto/${project.id}`}>
          <span>{t('work.more')}</span> <span className="arrow" aria-hidden="true">→</span>
        </Link>
      </div>
    </Reveal>
  )
}