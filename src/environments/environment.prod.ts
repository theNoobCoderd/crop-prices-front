export const environment = {
	production: true,
	apiUrl: "https://api.kozpri.com:8443", // Production API URL
	fireApiKey: '#{FIREBASE_API_KEY}',
	fireAuthDomain: '#{FIREBASE_AUTH_DOMAIN}',
	fireProjectId: "fir-crops-main",
	fireStorageBucket: '#{FIREBASE_MESSAGE_SENDER_ID}',
	fireMessageSenderId: process.env["FIREBASE_MESSAGE_SENDER_ID"],
	fireAppId: '#{FIREBASE_APP_ID}'
};
