/* 
* steps to use firebase
1. create a firebase project on console.firebase.google.com
2. install firebase npm install firebase
3. regiater firebase application
4.copy firebase Init with config from firebase project settings into a file firebase.init.js
5. export default app from firebase.init.js
6. import getAuth from go to docs/build/auth/web and create const auth = getAuth(app) at App.js
7. import app firebase.init.js into your App.js
8. turn on google authentication firebase> authentication>google sign in
9. create google provider at App() into App.js
*/