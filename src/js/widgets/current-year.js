document.addEventListener('DOMContentLoaded', function () {
    const yearElements = document.querySelectorAll('[data-current-year="true"]')

    if (yearElements.length > 0) {
        const currentYear = new Date().getFullYear()

        yearElements.forEach((element) => {
            element.textContent = currentYear
        })
    }
})
