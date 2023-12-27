export function resetTest() {
  localStorage.setItem("attempts", JSON.stringify([]));
  localStorage.removeItem("finalAttempt");
  location.reload();
}
