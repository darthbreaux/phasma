var request = require("request");
var base_url = "http://localhost/";

describe("ServerOk", function() {
  describe("GET /", function() {
    it("Returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        console.log("Server status: " + response.statusCode);
        done();
      });
    });
  });
});
