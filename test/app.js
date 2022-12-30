let chai = require('chai')
    , chaiHttp = require('chai-http')
    , expect = chai.expect
    , app = require('../app');

let User = require('../models/User')
    , Post = require('../models/Post');

chai.use(chaiHttp);

describe('server', _ => {
    it('runs 200', done => {
        chai.request(app)
            .get('/')
            .end((_, res) => {
                expect(res).to.have.status(200);
                done()
            })
    });
});

describe('user', _ => {
    let seed = Math.round((Math.random() * 10))
        , username = "hunter"+seed;

    it('registers user', done => {
        let user = new User({
            username: username,
            password: "pw"+Math.random()
        })
        .save((e, u) => {
            expect(u.username).to.equal(username);
            done();
        })
    });
});

describe('post', done => {
    let seed = Math.round((Math.random() * 10))
        , body = "something"+seed;

    it('creates post', done => {    
        let post = new Post({
            body: body,
            price: seed
        })
        .save((e, p) => {
            expect(p.price).to.equal(seed.toString());
            done();
        })
    });
});