"use strict"

var assert = require('assert');
var userPosts  = require('../source/users.js')


describe('Posts', function () {

    var user_posts  = []
    
    //we should be fetching the json array from the json api. For now we use a constant sample array
    beforeEach(function () {
	const DATASET = require('../source/sample.json')
	userPosts.set(DATASET)
	
	const authorName = "Kamren"
	user_posts = userPosts.get(authorName)
    });

    
    describe('User Posts', function () {
	it('verify User post present or not', function () {
	    assert.notEqual(user_posts.length, 0);
	});

	it('verify fetching of post', () => {
	    var sample_post_id = 1 
	    var sample_post = userPosts.fetchPost(sample_post_id)
	    assert.equal(sample_post[0]['uid'], sample_post_id )
	})
	
	it('validate emails in posts', () => {
	    user_posts.map(x => {
		assert.equal(userPosts.validate(x['comments']), true)
	    })	    
	})
	
    });
});
