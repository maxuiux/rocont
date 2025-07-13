document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.querySelector(
        '[data-button-hamburger="button-hamburger"]'
    )
    const sidebar = document.querySelector('[data-sidebar-active]')
    const body = document.body

    if (!hamburgerBtn || !sidebar) return

    const toggleSidebar = () => {
        const isActive = sidebar.getAttribute('data-sidebar-active') === 'true'
        if (isActive) {
            sidebar.setAttribute('data-sidebar-active', 'false')
            body.classList.remove('overflow-sidebar')
        } else {
            sidebar.setAttribute('data-sidebar-active', 'true')
            body.classList.add('overflow-sidebar')
        }
    }

    const closeSidebar = () => {
        sidebar.setAttribute('data-sidebar-active', 'false')
        body.classList.remove('overflow-sidebar')
    }

    hamburgerBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        toggleSidebar()
    })

    document.addEventListener('click', (e) => {
        const isClickInsideSidebar = sidebar.contains(e.target)
        const isClickOnHamburger = hamburgerBtn.contains(e.target)
        const isActive = sidebar.getAttribute('data-sidebar-active') === 'true'

        if (isActive && !isClickInsideSidebar && !isClickOnHamburger) {
            closeSidebar()
        }
    })
})
