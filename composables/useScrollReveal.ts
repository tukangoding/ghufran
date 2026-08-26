export function useScrollReveal() {
  if (import.meta.server) {
    return { observe: () => {}, observeAll: () => {} }
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  )

  function observe() {
    nextTick(() => {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        observer.observe(el)
      })
    })
  }

  function observeAll() {
    observe()
  }

  return { observe, observeAll }
}
