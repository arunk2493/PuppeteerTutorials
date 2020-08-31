import fetch from 'node-fetch';
var expect = require('chai').expect;
const nodeFetchMatchers = require('node-fetch-response-matchers');
const chai = require('chai');
chai.use(nodeFetchMatchers);

describe("Node fetch Demo",function () {
    it("Sample Get CAll with input using Json - 2",async () => {
        const response =  fetch('https://reqres.in/api/users?page=2');
        expect(response).to.be.successful();

    })
    it("Sample Get CAll with input using Json - 4",async () => {
        const response = await fetch(`https://reqres.in/api/users?page=2`);
        const json = await response.json();

        console.log(json);
    })
    it("Sample Post CAll with input using Json - 1",async () => {
        const body1 = {
            name: "morpheus",
            job: "leader"
        };
        const response = await fetch(`https://reqres.in/api/users`, {
            method: 'POST',
            body: JSON.stringify(body1),
            headers: {'Content-Type': 'application/json'}
        });
        const json = await response.json();

        console.log(json);
    })
    it("Sample Post CAll with input using Json - 2-assertionss",async () => {
        const body11 = require('../data/api-test-data.json');
        const response = fetch(`https://reqres.in/api/users`, {
            method: 'POST',
            body: JSON.stringify(body11),
            headers: {'Content-Type': 'application/json'}
        });
        await  expect(response).to.be.successful();
        console.log('----------------')
        await expect(response).to.haveBodyText( {
            name: "morpheus",
            job: "leader",
            id: "87",
            createdAt: "2020-07-31T15:55:39.317Z"
        });
        console.log('After')
    })
});
