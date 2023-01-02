Sting
======

[Reverse auction](https://en.wikipedia.org/wiki/Reverse_auction) market.

Development
===========

Clone, install, run.

```bash
git clone https://github.com/sting
cd sting

npm install
npm run start
```

Documentation
-------------

### `POST /register`
new user

```
username: String
password: String
```

### `POST /post`
new post

```
body: String
price: Number
```

todo
----

- [ ] delete post

testing
-------

```
$ npm install --save-dev
$ npm run test
```

license
=======

&copy; [mit](https://github.com/trmml/sting/blob/main/LICENSE)
