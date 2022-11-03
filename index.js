const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const partTow = document.getElementById("test")

function display(){
    for(let i = 0 ; i < posts.length ; i++){
        partTow.innerHTML += `<div class="profile">
                
                <img class="avatar" src="${posts[i].avatar}">
               
                <div>    
                <h1>${posts[i].name}</h1>
                <p>${posts[i].location}</p>
                
                </div>
            </div>
            <img class="post" src="${posts[i].post}">
            <div class="icon-all">
               <button id="btn-like"> <img class="ione" src="images/icon-heart.png">
               <button id="btn-comment"> <img class="itwo" src="images/icon-comment.png">
               <button id="btn-dm"> <img class="ithree" src="images/icon-dm.png">
            </div>
            <span id="likeincrement" class="${posts[i].likes}"></span>
            <h3>${posts[i].username}<span class="p3">${posts[i].comment}</span></h3>`
    }
}

display()


const likeBtn = document.getElementById("btn-like")

const likeInc = document.getElementById("likeincrement")

let count = 0

likeBtn.addEventListener("click", function(){
   
   count += 1
   
   likeInc.textContent = count +"   "+ "like"
    
    
    
})

