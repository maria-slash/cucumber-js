const assert = require('assert')
const axios = require('axios')

const { When, Then } = require('@cucumber/cucumber')
const { Greeter } = require('../../../src/greeter')
const URL='http://localhost:4001/'
When('the greeter says {word}', function (word) {
  this.whatIHeard = new Greeter().sayWord("abc");
});

Then('I should have heard {string}', function (expectedResponse) {
  assert.equal(this.whatIHeard, expectedResponse)
});

When('I retrieve hello {word}', async function (word) {
  const response =  await axios.get(`${URL}name/${word}`);
  this.response = {
    status: response.status,
    data: response.data
  }
});


Then('I get a {string} response', async function (expectedResponse) {
  assert.equal(this.response.status, expectedResponse);
});

Then('the response is:', async function (expectedResponse) {
  assert.equal(this.response.data.title, expectedResponse);
});
