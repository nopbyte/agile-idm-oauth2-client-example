module.exports = {
  authorizationURL: 'http://localhost:3000/oauth2/dialog/authorize',
  tokenURL: 'http://localhost:3000/oauth2/token',
  clientID: "MyAgileClient2",
  clientSecret: "Ultrasecretstuff",
  callbackURL: "http://localhost:3002/auth/example/callback",
  userInfoUrl: 'http://localhost:3000/oauth2/api/userinfo',
  "tls": {
    "key": "./certs/server.key",
    "cert": "./certs/server.crt"
  },
  "https_port": 1444,
  "http_port": 3002
}