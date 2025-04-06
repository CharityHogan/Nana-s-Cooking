function toggleTheme() {
    document.body.classList.toggle('dark-mode');

    // Optional: Save preference in local storage
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
}

// Optional: Remember user’s choice on reload
window.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
        document.body.classList.add('dark-mode');
    }
});
