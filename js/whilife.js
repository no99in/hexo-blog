
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre span').forEach((block) => {
        hljs.highlightBlock(block)
    })
})

