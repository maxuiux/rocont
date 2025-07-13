document.addEventListener('DOMContentLoaded', () => {
    const iosVideos = document.querySelectorAll('[data-ios-video="ios-video"]')

    iosVideos.forEach((video) => {
        // Отключаем взаимодействие пользователя
        video.style.pointerEvents = 'none'

        // Принудительное воспроизведение через user gesture симуляцию
        const tryPlay = () => {
            video.play().catch(() => {
                // Если не получилось, пробуем снова после взаимодействия
                const unlock = () => {
                    video.play().finally(() => {
                        document.body.removeEventListener('touchstart', unlock)
                        document.body.removeEventListener('click', unlock)
                    })
                }
                document.body.addEventListener('touchstart', unlock, {
                    once: true,
                })
                document.body.addEventListener('click', unlock, { once: true })
            })
        }

        // Проверяем готовность видео
        if (video.readyState >= 3) {
            tryPlay()
        } else {
            video.addEventListener('canplay', tryPlay, { once: true })
        }
    })
})
