const app = require('@@app');
let server = null;

before(function() {
  server = app.listen(3000);
});

after(function() {
  server.close();
});
