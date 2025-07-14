document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('[data-header-style]')
    if (!header) return

    let lastScrollY = window.scrollY

    const onScroll = () => {
        const currentScrollY = window.scrollY
        const isActive = currentScrollY > 84

        header.setAttribute('data-header-style', isActive ? 'true' : 'false')

        lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', onScroll)
})
