var app = angular.module('blog');

app.service('blogService', function($http, $q){
	var urlString = 'https://api.parse.com/1/classes/blog'
	
	this.postBlog = function(blogTitle, blogContent) {
		
		return $http.post(urlString, {title: blogTitle, content: blogContent});
	}

	this.getBlogs = function(){
		var deferred = $q.defer();
		$http.get(urlString + '?order=-createdAt').
			then(function(data){
				deferred.resolve(data.data.results);
			});
		return deferred.promise;
	}

	this.updateBlog = function(objectId, blogTitle, blogContent) {
		return $http.put(urlString + '/' + objectId, {title: blogTitle, content: blogContent} );
	}

	this.deleteBlog = function(blog){
		console.log(blog.objectId);
		return $http.delete(urlString + '/' + blog.objectId);
	}
});