// // components/JivoChat.js
// "use client"
// import { useEffect } from 'react';

// const JivoChat = () => {
//   useEffect(() => {
//     const loadJivoChatScript = () => {
//       const script = document.createElement('script');
      
//       script.src = "//code.jivosite.com/widget/kd9uAKn19v";
//       script.async = true;
//       document.body.appendChild(script);
//       script.onload = () => {
//         if (window.JivoChat) {
//           window.JivoChat.on('onMessage', (message) => {
//             console.log('New message received:', message);

//           });
//           window.JivoChat.setSettings({
//             soundEnabled: true
//           });
//         }
//       };

//       return () => {
//         document.body.removeChild(script);
//       };
//     };

//     loadJivoChatScript();
//   }, []);

//   return null;
// };

// export default JivoChat



"use client";
import { useEffect } from "react";

const JivoChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.jivosite.com/widget/kd9uAKn19v"; // your widget ID
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

// ✅ Function to manually open chat window
export const openLiveChat = () => {
  if (typeof window !== "undefined" && window.jivo_api) {
    window.jivo_api.open();
  } else {
    console.warn("JivoChat not loaded yet!");
  }
};

export default JivoChat;
