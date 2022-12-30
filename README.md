winnie
======

Easy smart contracts for simple services.

development
===========

clone, install, run.

```bash
git clone https://github.com/winnie
cd winnie

npm install
npm run start
```

docs
----

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

&copy; [mit](https://github.com/trmml/winnie/blob/main/LICENSE)
