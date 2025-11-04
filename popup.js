document.getElementById("getTitle").addEventListener("click", async () => {
  // Get the active tab
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Display its title inside the popup
  document.getElementById("title").textContent = tab.title;
});
