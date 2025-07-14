document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('[data-phone="number"]')
    const template = '+7 (___) ___-__-__'
    const maskPositions = [4, 5, 6, 9, 10, 11, 13, 14, 16, 17]

    inputs.forEach((input) => {
        input.addEventListener('focus', handleFocus)
        input.addEventListener('input', handleInput)
        input.addEventListener('blur', handleBlur)
        input.addEventListener('keydown', handleKeyDown)
        input.addEventListener('paste', handlePaste)

        function handleFocus() {
            if (!input.value) {
                input.value = template
                setCursorToFirstPlaceholder()
            } else {
                restoreCursor()
            }
        }

        function handleBlur() {
            if (input.value === template) {
                input.value = ''
            }
        }

        function handleInput() {
            const digits = extractDigits(input.value)
            input.value = applyMask(digits)
            restoreCursor()
        }

        function handlePaste(e) {
            e.preventDefault()
            const pasted = (e.clipboardData || window.clipboardData).getData(
                'text'
            )
            const digits = extractDigits(pasted)
            input.value = applyMask(digits)
            restoreCursor()
        }

        function handleKeyDown(e) {
            const selStart = input.selectionStart
            const selEnd = input.selectionEnd
            const fullSelect = selStart === 0 && selEnd === input.value.length
            const isBackspace = e.key === 'Backspace'
            const isDelete = e.key === 'Delete'

            if ((isBackspace || isDelete) && fullSelect) {
                e.preventDefault()
                input.value = template
                setCursorToFirstPlaceholder()
                return
            }

            if (isBackspace && selStart === selEnd) {
                e.preventDefault()
                const digits = extractDigits(input.value)
                const maskIndex = findPrevDigitPosition(selStart)
                if (maskIndex !== -1 && maskIndex < digits.length) {
                    digits.splice(maskIndex, 1)
                    input.value = applyMask(digits)
                    setCursorPosition(maskPositions[maskIndex])
                }
            }

            if (isDelete && selStart === selEnd) {
                e.preventDefault()
                const digits = extractDigits(input.value)
                const maskIndex = findNextDigitPosition(selStart)
                if (maskIndex !== -1 && maskIndex < digits.length) {
                    digits.splice(maskIndex, 1)
                    input.value = applyMask(digits)
                    setCursorPosition(maskPositions[maskIndex])
                }
            }
        }

        // ⬇️ 🔧 Вот здесь учтены и +7 и 8
        function extractDigits(str) {
            const raw = str.replace(/\D/g, '')
            const cleared = raw.replace(/^(\+?7|8)/, '') // удаляет и +7 и 8
            return cleared.split('').slice(0, 10)
        }

        function applyMask(digits) {
            let i = 0
            return template.replace(/_/g, () =>
                i < digits.length ? digits[i++] : '_'
            )
        }

        function findPrevDigitPosition(pos) {
            for (let i = maskPositions.length - 1; i >= 0; i--) {
                if (maskPositions[i] < pos) return i
            }
            return -1
        }

        function findNextDigitPosition(pos) {
            for (let i = 0; i < maskPositions.length; i++) {
                if (maskPositions[i] >= pos) return i
            }
            return -1
        }

        function setCursorToFirstPlaceholder() {
            const pos = input.value.indexOf('_')
            setCursorPosition(pos === -1 ? input.value.length : pos)
        }

        function restoreCursor() {
            const pos = input.value.indexOf('_')
            setCursorPosition(pos === -1 ? input.value.length : pos)
        }

        function setCursorPosition(pos) {
            requestAnimationFrame(() => {
                input.setSelectionRange(pos, pos)
            })
        }
    })
})
