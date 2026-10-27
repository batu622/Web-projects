function loadApp(appName) {
  const iframe = document.getElementById("appFrame");
  iframe.src = `./apps/${appName}.html`;
}

window.loadApp = loadApp;
