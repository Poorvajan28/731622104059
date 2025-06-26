const LoggingMiddleware = (message, level = 'INFO') => {
  const logPayload = {
    clientID: "730eb8f9-bd33-493d-825a-9eba3f4c50f8",
    clientSecret: "AHNFhDHhDaEVZRDC",
    timestamp: new Date().toISOString(),
    level,
    message
  };
  const logStorage = JSON.parse(localStorage.getItem('customLogs') || '[]');
  logStorage.push(logPayload);
  localStorage.setItem('customLogs', JSON.stringify(logStorage));
};

export default LoggingMiddleware;
const LoggingMiddleware = (message, level = 'INFO') => {
  const logPayload = {
    clientID: "730eb8f9-bd33-493d-825a-9eba3f4c50f8",
    clientSecret: "AHNFhDHhDaEVZRDC",
    timestamp: new Date().toISOString(),
    level,
    message
  };
  const logStorage = JSON.parse(localStorage.getItem('customLogs') || '[]');
  logStorage.push(logPayload);
  localStorage.setItem('customLogs', JSON.stringify(logStorage));
};

export default LoggingMiddleware;
