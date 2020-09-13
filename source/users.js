"use strict"

const email_validator = require('email-validator')

class Posts {
    constructor() {
	this.posts = []
    }

    //sets the entire dataset
    set(dataSet) {
	this.posts = dataSet
    }
    
    //fetches the post from the author 'name'
    get(name) {
	return this.posts.filter(x => {
	    return (x.author == name)
	})
    }
    
    fetchPost(uid) {
	var flist =  this.posts.filter(x => {
	    return (x['uid'] == uid)
	})
	return flist
    }

    //validate the comments array
    validate(comments) {
	let emails = comments.map(x => {
	    return x.username
	})

	console.log(emails)
	
	let invalid_list = emails.filter(x => {
	    return !email_validator.validate(x)
	})
	
	return (invalid_list.length == 0)
    }    
    
}

module.exports = new Posts()
