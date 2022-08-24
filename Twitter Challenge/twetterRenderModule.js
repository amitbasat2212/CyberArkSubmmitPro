
//function renders the posts and comments to the view 
//gets the data from twitterdatamodels
const TwetterRenderModule=()=>{
    const renderPosts =(posts)=>{
        $('#posts').empty();
        for(let i=0;i<posts.length;i++){
            let Post = `<div class="allPost">
            <div id=${posts[i].id}  data-id=${posts[i].id} class="postsPerPost">
            <div class="posttext">${posts[i].text} :</div>
            <button class="delete">delete</button>
            <button class="CommentButton">Add comment</button>
            <input class="textfornewComment" placeholder="write me yout thoghts">
            </div>
            </div>`
            $('#posts').append(Post)
            for(let j=0;j<posts[i].comments.length;j++){
                let comment = `<div class="comments">
                <div class="commentText" data-id=${posts[i].comments[j].id}>${posts[i].comments[j].text}:</div>
                <button class="delete-comment">delete</button>
                </div>`
                $(`#${posts[i].id}`).append(comment)
            }            
        }
    }

    return {
        renderPosts :renderPosts 
    }
}

