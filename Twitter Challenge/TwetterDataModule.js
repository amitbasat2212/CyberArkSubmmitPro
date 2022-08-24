

const TwetterModule=()=>{
    let posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    counterPosts =parseInt(posts[posts.length-1].id.charAt(1))
    counterComments =6;

        
    const GetPosts = ()=>{
        return posts;
    }

    const AddPost = (text)=>{
        posts.push({text:text,id:"p"+(counterPosts+1),comments:[]})
        counterPosts++;
    }

    const GetPostById=(idPost)=>{
        for(var i=0;i<posts.length;i++){
            if(posts[i].id==idPost){
                return posts[i]
            }
        }
    }

    const GetComments =(idComment)=>{
        for(var i=0;i<posts.length;i++){
            for(var j=0;j<posts[i].comments.length;j++){
                if(idComment==posts[i].comments[j].id){
                    return posts[i].comments[j]
                }
            }
        }
    }

    const RemovePost = (idPost)=>{
        var index
      //  posts.filter(data=>posts[data].id!=idPost)
      for(var i=0;i<posts.length;i++){
        if(posts[i].id==idPost){
            index =i;
        }
      }
      posts.splice(index,1);
    }

    const AddComment=(PostId,Text)=>{
        for(var i=0;i<posts.length;i++){
            if(posts[i].id==PostId){
                posts[i].comments.push({id:"c"+(counterComments+1),text:Text})
     
            }
        }
        counterComments++;
    }


    const RemoveComment=(IdPost,idComment)=>{
        let indexComment=999;
        let indexPost=0;
        for(var i=0;i<posts.length;i++){
          if(posts[i].id==IdPost){
            for(var j=0;j<posts[i].comments.length;j++){
                if(idComment==posts[i].comments[j].id){
                    indexComment=j
                    indexPost=i;
                }
            }
          }
        }
        if(indexComment!=999){
          posts[indexPost].comments.splice(indexComment,1)
        };
    }


    return{
        RemovePost:RemovePost,
        GetComments:GetComments,
        GetPostById:GetPostById,
        AddPost:AddPost,
        GetPosts:GetPosts,
        AddComment:AddComment,
        RemoveComment:RemoveComment
    }

}

const Twetter = TwetterModule();
// console.log(Twetter.GetPosts())
// console.log(Twetter.GetPostById("p1"))
// console.log(Twetter.GetComments("c4"))
Twetter.AddPost("hello world2")
Twetter.RemovePost("p2")
Twetter.AddPost("hello world")
Twetter.RemovePost("p1")    
Twetter.AddComment("p3","gogo gaga" )
Twetter.AddComment("p3","gogo gaga" )
Twetter.RemoveComment("p3","c2" )
console.log(Twetter.GetPosts())



