function getParentElements(element, depth) {
  let target = element;
  for (let i = 0; i < depth; i++) {
    target = target.parentElement;
  }
  return target;
}

// The URLs to block from
const UrlPatternToBlock = "youtube";

// The query params that will be blocked
const querySelectors = [
  ".pivot-shorts",
  ".rich-section-content",
  ".reel-shelf-items",
  "ytm-compact-channel-renderer",
];

// Removes elements at a specific depth
const deepLevelRemovalSelectors = [
  { selector: '*[data-style="LIVE"]', depth: 5 },
  { selector: '*[data-style="SHORTS"]', depth: 5 },
  { selector: '*[data-style="SHORTS"]', depth: 5 },
];

// Only run on the correct URL
if (window.location.hostname.includes(UrlPatternToBlock)) {
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
    // Iterate over the deep level query selector
    for (let i = 0; i < deepLevelRemovalSelectors.length; i++) {
      var currentQuerySelector = deepLevelRemovalSelectors[i]["selector"];
      var currentSelectorDepth = deepLevelRemovalSelectors[i]["depth"];
      var selectedElements = document.querySelectorAll(currentQuerySelector);
      // Remove each element that matches the current query selector
      for (let x = 0; x < selectedElements.length; x++) {
        var currentElement = selectedElements[x];
        var parentElementToRemove = getParentElements(
          currentElement,
          currentSelectorDepth
        );
        parentElementToRemove.remove();
      }
    }
  });
  // Execute the observer
  observer.observe(document, {
    childList: true,
    subtree: true,
  });
}
