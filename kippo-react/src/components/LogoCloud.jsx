import { useRef, useState } from 'react'
import { useI18n } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'
import { LOGOS, logoSvg } from '../data/logos'

export default function LogoCloud() {
    const { t } = useI18n()
    const [pausedTop, setPausedTop] = useState(false)
    const [pausedBottom, setPausedBottom] = useState(false)

    const lcMid = Math.ceil(LOGOS.length / 2)
    const topLogos = LOGOS.slice(0, lcMid)
    const bottomLogos = LOGOS.slice(lcMid)

    const topItems = topLogos.concat(topLogos)
    const bottomItems = bottomLogos.concat(bottomLogos)

    return (
        <section className="logo-cloud" aria-label="Logo cloud">
            <div className="logo-cloud__inner">
                <div className="logo-cloud__head">
                    <Reveal as="h2" className="logo-cloud__title">
                        {t('logocloud.title')}
                    </Reveal>
                </div>
                <div className="logo-cloud__rows">
                    <div
                        className={`marquee${pausedTop ? ' is-paused' : ''}`}
                        aria-hidden="true"
                        onMouseEnter={() => setPausedTop(true)}
                        onMouseLeave={() => setPausedTop(false)}
                    >
                        <div className="marquee__track" data-row="top">
                            {topItems.map((logo, i) => (
                                <span
                                    key={`top-${i}`}
                                    className="lc-logo"
                                    dangerouslySetInnerHTML={{ __html: logoSvg(logo) }}
                                />
                            ))}
                        </div>
                    </div>
                    <div
                        className={`marquee marquee--reverse${pausedBottom ? ' is-paused' : ''}`}
                        aria-hidden="true"
                        onMouseEnter={() => setPausedBottom(true)}
                        onMouseLeave={() => setPausedBottom(false)}
                    >
                        <div className="marquee__track" data-row="bottom">
                            {bottomItems.map((logo, i) => (
                                <span
                                    key={`bottom-${i}`}
                                    className="lc-logo"
                                    dangerouslySetInnerHTML={{ __html: logoSvg(logo) }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}