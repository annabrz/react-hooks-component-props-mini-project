import React from "react"
import Article from "./Article"

function ArticleList({posts}){
     const artPost = posts.map((post)=>{
                return <Article key={post.id} />
            })
            return(
     <div>
        <Article title={posts.title} date={posts.date} preview={posts.preview} />
        <main>
            {artPost}
        </main>
    </div>
   )
}


export default ArticleList
