export function resetTest() {
    // Reset the attempts
    localStorage.setItem('attempts', JSON.stringify([]));
    // Reset the final attempt
    localStorage.removeItem('finalAttempt');
    // Reload the page
    location.reload();
  }