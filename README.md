# ProvaS9

## script teste gerad pelo postman



pm.test("Response status code is 204", function () {
  pm.response.to.have.status(204);
});


pm.test("Response has a valid Content-Type header", function () {
    pm.expect(pm.response.headers.get("Content-Type")).to.exist;
});


pm.test("Response body is null", function () {
    const responseData = xml2Json(pm.response.text());
    pm.expect(responseData).to.be.null;
});


pm.test("Verify that the response body is empty", function () {
    pm.expect(pm.response.text()).to.be.empty;
});


pm.test("Response time is less than 200ms", function () {
  pm.expect(pm.response.responseTime).to.be.below(200);
});
