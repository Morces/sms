// Import Web Vitals
import { getCLS, getFID, getLCP, getTTFB } from 'web-vitals';

// Define a function to send vitals data to your analytics tool
function sendToAnalytics({ name, delta, id }) {
  // Replace this with your analytics integration (e.g., Google Analytics)
  console.log(`Vital ${name} had a value of ${delta} for id ${id}`);
}

// Measure and report web vitals
getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
