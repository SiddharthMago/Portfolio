function incrementLike() {
    const likeCount = document.getElementById('likeCount');
    likeCount.textContent = parseInt(likeCount.textContent) + 1;
}

function addComment() {
    const commentInput = document.getElementById('commentInput');
    const commentList = document.getElementById('commentList');
    const listItem = document.createElement('li');
    listItem.textContent = commentInput.value;
    commentList.appendChild(listItem);
    commentInput.value = '';
}