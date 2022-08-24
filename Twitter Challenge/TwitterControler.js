const TweitterRender = TwetterRenderModule();
const TwitterData = TwetterModule();
const posts = TwitterData.GetPosts();
TweitterRender.renderPosts(posts);

//function that catch the event of add post 
//and adding the post  
const post=function(){
    let UserTweet=$('#input').val()
    TwitterData.AddPost(UserTweet);
    TweitterRender.renderPosts(posts);   
   
}

//function that catch the event of delete 
//and deleting the post acording to its id 
$('body').on('click','.delete',function(){
    let IdPost = $(this).closest(".allPost").find('.postsPerPost').attr('data-id');
    TwitterData.RemovePost(String(IdPost))
    TweitterRender.renderPosts(posts);
   
})

//function that catch the event of adding comment 
//and adding the post acording to id post and text
$('body').on('click','.CommentButton',function(){
    let IdPost = $(this).closest(".allPost").find('.postsPerPost').attr('data-id');
    let TextComment = $(this).closest(".allPost").find('.textfornewComment').val();
    TwitterData.AddComment(String(IdPost),String(TextComment))
    TweitterRender.renderPosts(TwitterData.GetPosts());
})

//function that catch the event of delete comment 
//and deleting the comment acording to id post and id comment
$('body').on('click','.delete-comment',function(){
    let IdPost = $(this).closest(".allPost").find('.postsPerPost').attr('data-id');
    let IdComment = $(this).closest(".comments").find('.commentText').attr('data-id');
    TwitterData.RemoveComment(String(IdPost),String(IdComment))
    TweitterRender.renderPosts(posts);
    
})






