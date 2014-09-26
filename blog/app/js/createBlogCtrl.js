var app = angular.module('blog');

app.controller('createBlogCtrl', function($scope, blogService) {
		
		$scope.blogcontent;
		$scope.disabled = false;
		$scope.showUpdate = false;
		$scope.blogs = [];
		var editObjectId;

		var getBlogs = function(){
			blogService.getBlogs().
				then(function(data){
					$scope.blogs = data;
					console.log($scope.blogs);
				});
		}
		getBlogs();

		$scope.submitBlog = function(){
			blogService.postBlog($scope.blogtitle, $scope.blogcontent).
				then(function(){
					getBlogs();
					$scope.blogcontent = "";
					$scope.blogtitle = "";
					$scope.disabled = false;
				});
		}

		$scope.deleteBlog = function(){
			console.log(this);
			blogService.deleteBlog(this.blog).
				then(function(){
			 		getBlogs();
				});
			
		}

		$scope.editBlog = function(){
			//get post by objectId
			//set blogcontent to object.content same for title
			//show Update button and call function that does put request by objectId
			$scope.blogcontent = this.blog.content;
			$scope.blogtitle = this.blog.title;
			editObjectId = this.blog.objectId;
			if(!$scope.disabled){
				$scope.disabled = !$scope.disabled;
			}
			$scope.showUpdate = true;

		}

		$scope.updateBlog = function(){
			blogService.updateBlog(editObjectId, $scope.blogtitle, $scope.blogcontent).
				then(function(){
					getBlogs();
					editObjectId = "";
					$scope.blogtitle = "";
					$scope.blogcontent = "";
					$scope.showUpdate = false;
					$scope.disabled = false;
				});

		}
	});