import { useI18n } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function Portfolio() {
  const { t } = useI18n()

  return (
    <section className="section section--alt" id="projetos">
      <div className="container">
        <div className="section__head">
          <Reveal as="p" className="section__eyebrow">{t('work.eyebrow')}</Reveal>
          <Reveal as="h2" className="section__title" index={1}>{t('work.title')}</Reveal>
          <Reveal as="p" className="section__desc" index={2}>{t('work.desc')}</Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}