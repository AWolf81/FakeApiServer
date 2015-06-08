// api.js
var express = require('express');
var router = express.Router();
var uuid = require('node-uuid');

var dummyUsers = [{
		id: uuid.v1(),
		nick: 'Johnny',
		name: 'John Doe',
		email: 'JDoe@dummy.com'
	},
	{
		id: uuid.v1(),
		nick: 'Jane',
		name: 'Jane Doe',
		email: 'JaDoe@dummy.com'
	},
	{
		id: uuid.v1(),
		nick: 'Jade',
		name: 'Jade Doe',
		email: 'JadeDoe@dummy.com'
	}];

// invoked for any requested passed to this router
router.use(function(req, res, next) {
  // .. some logic here .. like any other middleware
  next();
});

function responseMessage(res, msg) {
	return res.format({
		'text/html': function() {
			res.send('<h2>' + msg +'</h2>');
		},
		'application/json': function() {
			res.jsonp({
				status: 200,
				message: msg
			});
		}
	});
}

function responseData(res, data) {
	return res.format({
		'text/html': function() {
			res.send(JSON.stringify(data));
		},
		'application/json': function() {
			res.jsonp({
				status: 200,
				data: data
			});
		}
	});
}

router.get('/', function(req, res) {
	var msg = 'No api endpoint available at api/';
	/*res.json({status: 200,
		message: 'no api endpoint available here'});*/
	responseMessage(res, msg);
});

router.get('/users', function(req, res) {
	responseData(res, dummyUsers);
});

module.exports = router;