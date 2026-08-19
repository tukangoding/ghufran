export function useCustomCursor() {
  if (import.meta.server) return

  const HOVER_SELECTOR = 'a, button, .sk-card, .portfolio-card'

  const cursorDot = document.createElement('div')
  const cursorRing = document.createElement('div')

  cursorDot.className = 'cursor-dot'
  cursorRing.className = 'cursor-ring'

  document.body.appendChild(cursorDot)
  document.body.appendChild(cursorRing)

  let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
  let dot = { x: mouse.x, y: mouse.y }
  let ring = { x: mouse.x, y: mouse.y }

  function lerp(start: number, end: number, speed: number) {
    return start + (end - start) * speed
  }

  function animateCursor() {
    dot.x = lerp(dot.x, mouse.x, 0.18)
    dot.y = lerp(dot.y, mouse.y, 0.18)
    ring.x = lerp(ring.x, mouse.x, 0.08)
    ring.y = lerp(ring.y, mouse.y, 0.08)

    cursorDot.style.transform = `translate(${dot.x}px, ${dot.y}px)`
    cursorRing.style.transform = `translate(${ring.x}px, ${ring.y}px)`

    requestAnimationFrame(animateCursor)
  }

  document.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  })

  document.addEventListener('mouseover', (e) => {
    if (e.target && (e.target as HTMLElement).closest?.(HOVER_SELECTOR)) {
      cursorRing.classList.add('cursor-ring--hover')
    }
  })

  document.addEventListener('mouseout', (e) => {
    if (e.target && (e.target as HTMLElement).closest?.(HOVER_SELECTOR)) {
      cursorRing.classList.remove('cursor-ring--hover')
    }
  })

  document.addEventListener('mouseleave', () => {
    cursorDot.style.opacity = '0'
    cursorRing.style.opacity = '0'
  })

  document.addEventListener('mouseenter', () => {
    cursorDot.style.opacity = '1'
    cursorRing.style.opacity = '1'
  })

  animateCursor()
}
