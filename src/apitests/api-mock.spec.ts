const nock = require('nock');
var expect = require('chai').expect;

describe("Mock Sample",function () {

    it("Sample Test",async ()=>{
        const scope = nock('https://api.github.com')
            .get('/repos/atom/atom/license')
            .reply(201, {
                license: {
                },
            })
    })
})


