// The URLs to block from
const URLToBlock = "www.youtube.com";
// The query params that will be blocked
const querySelectors = [
    "ytm-rich-section-renderer.rich-section-single-column",
    "ytm-reel-shelf-renderer",
    // "ytd-rich-section-renderer.ytd-rich-grid-renderer"
];

// Only run on the correct URL
if (window.location.hostname === URLToBlock) {
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
