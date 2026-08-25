import { useInView, type IntersectionOptions } from 'react-intersection-observer'

export function useSectionInView(options?: IntersectionOptions) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    ...options,
  })

  return { ref, inView }
}
