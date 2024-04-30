const overlay = document.getElementById('overlay');

export const toggleOverlay = () => {
    if(overlay.classList.contains('hidden')) {
        overlay.classList.remove('hidden')
    } else {
        overlay.classList.add('hidden')
    }
}