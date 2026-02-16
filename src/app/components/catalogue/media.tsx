'use client'

import { BodyWrapper } from '../body-wrapper'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

interface IMediaDevice {
  videoUrl: string
}

export const MediaDevice = ({ videoUrl }: IMediaDevice) => {
  const { ref, entry } = useInView({
    threshold: Array.from({ length: 101 }, (_, i) => i / 100),
  })

  const [scale, setScale] = useState(0.5)

  useEffect(() => {
    if (entry) {
      const ratio = entry.intersectionRatio
      const calculatedScale = 0.5 + ratio * 0.5
      setScale(calculatedScale)
    }
  }, [entry])

  return (
    <BodyWrapper className="my-14">
      <section>
        <div
          ref={ref}
          className="flex-1 rounded-2xl transition-transform duration-200 ease-out px-10"
          style={{
            transform: `scale(${scale})`,
          }}
        >
          <iframe
            loading="lazy"
            className="w-full rounded-xl aspect-video"
            src={videoUrl}
            title="YouTube video"
            allowFullScreen
          />
        </div>
      </section>
    </BodyWrapper>
  )
}
