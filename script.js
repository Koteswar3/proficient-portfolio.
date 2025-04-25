// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Get theme button
  const themeButton = document.getElementById('themeButton');

  // Check if button exists
  if (!themeButton) {
    console.error('Theme button not found. Check ID "themeButton" in index.html.');
    return;
  }

  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeButton.textContent = 'Light Mode';
  } else {
    themeButton.textContent = 'Dark Mode';
  }

  // Toggle theme on click
  themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeButton.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  });
});