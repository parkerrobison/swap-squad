$(document).ready(function () {
    // Getting a reference to input field where user adds a new post
    var $newItemInput = $('input.new-item');
    // New posts will go inside postContainer
    var $postContainer = $('.post-container');
    // Adding event listners for deleting, editing, and adding posts
    $(document).on('click', 'button.delete', deletePost);
    $(document).on('click', 'button.complete', toggleComplete);
    $(document).on('click', '.post-item', editPost);
    $(document).on('keyup', '.post-item', finishEdit);
    $(document).on('blur', '.post-item', cancelEdit);
    $(document).on('submit', '#post-form', insertPost);

    // Initail array
    var post [];

    // Getting post from database when page loads
    getPost();

    // Reset posts with posts from database
    function initializeRows() {
        $postContainer.empty();
        var rowsToAdd = [];
        for (var i = 0; i < post.length; i++) {
            rowsToAdd.push(createNewRow(post[i]));
        }
        $postContainer.prepend(rowsToAdd);
    }

    // Gets posts from database and updates view
    function getPost() {
        $.get('/api/post', function (data) {
            post = data;
            initializeRows();
        });
    }

    // Deletes a post with button onclick
    function deletePost(event) {
        event.stopPropagation();
        var id = $(this).data('id');
        $.ajax({
            method: 'DELETE',
            url: '/api/post/' + id
        }).then(getPost);
    }

    // Input box to edit a post
    function editPost() {
        var currentPost = $(this).data('post');
        $(this)
            .children()
            .hide();
        $(this)
            .children('input.edit')
            .val(currentPost.text);
        $(this)
            .children('input.edit')
            .show();
        $(this)
            .children('input.edit')
            .focus();
    }

    function finishEdit(event) {
        var updatedPost = $(this).data('post');
        if (event.which === 20) {
            updatedPost.text = $(this)
                .children('input')
                .val()
                .trim();
            $(this).blur();
            updatedPost(updatedPost);
        }
    }

    //update post in database
    function updatedPost(post) {
        $.ajaxx({
            method: 'PUT',
            url: '/api/post/' + post.id,
            data: post
        }).then(getPost);
    }


})