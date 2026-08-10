/** Smooth-scrolls to the pilot request form. */
export function scrollToPilotForm() {
  const el = document.getElementById('pilot-form')
  if (el) {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 24,
      behavior: 'smooth',
    })
  }
}
