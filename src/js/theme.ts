// Define a function to set the theme preference in localStorage
function setThemePreference(theme) {
  // Check if localStorage is supported
  if (typeof localStorage !== 'undefined') {
    // Add theme preference to localStorage
    localStorage.setItem('theme', theme);
  } else {
    console.error('localStorage is not supported in this browser.');
  }
}

// Example: Assuming you have a function to toggle themes
function toggleTheme() {
  const currentTheme = localStorage.getItem('theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  // Apply the new theme
  setThemePreference(newTheme);
  // Additional logic to apply the theme to your UI
  applyTheme(newTheme);
}

// Function to apply the theme to your UI
function applyTheme(theme) {
  // Example: Apply the theme by toggling a CSS class on the body element
  document.body.classList.toggle('dark-theme', theme === 'dark');
}

// Example: Call setThemePreference when the user changes their theme preference
// Assuming you have a UI element to change themes, like a button
const themeToggleButton = document.getElementById('theme-toggle-button');
themeToggleButton.addEventListener('click', toggleTheme);

  