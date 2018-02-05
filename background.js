function resetDefaultSuggestion() {
  chrome.omnibox.setDefaultSuggestion({
    description: 'StackOverFlow.com: Search the StackOverFlow.com for %s'
  });
}

resetDefaultSuggestion();

chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
  // Suggestion code will end up here.
});

chrome.omnibox.onInputCancelled.addListener(function() {
  resetDefaultSuggestion();
});

function navigate(url) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: url});
  });
}

chrome.omnibox.onInputEntered.addListener(function(text) {
	console.log(text)
  navigate("https://stackoverflow.com/search?q=" + text);
});