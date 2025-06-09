// The URLs to block from
const URLToBlock = "youtube";
// The query params that will be blocked
const querySelectors = [
    "ytm-rich-section-renderer.rich-section-single-column",
    "ytm-reel-shelf-renderer",
];

console.log(URLToBlock)
console.log(window.location.host)
console.log(window.location.hostname.includes(URLToBlock))

// Only run on the correct URL
if (window.location.hostname.includes(URLToBlock)) {
  // Create the Observer
  const observer = new MutationObserver((mutations, obs) => {
    // Iterate over each query selector
    for (let i = 0; i < querySelectors.length; i++) {
      var currentQuerySelector = querySelectors[i];
      var selectedElements = document.querySelectorAll(currentQuerySelector);
      // Remove each element that matches the current query selector
      for (let x = 0; x < selectedElements.length; x++) {
        selectedElements[x].remove();
      }
    }
  });
  // Execute the observer
  observer.observe(document, {
    childList: true,
    subtree: true,
  });
}
