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
let main = document.getElementById('main')
let love = document.getElementById('love')
let counter = document.getElementById('count')
// Get the element
function render() {
    posts.map((x, idx) => {
        main.innerHTML += `
	<section class="main">
		<div class="container">
			<img class="avatar avatar-per" src="${x.avatar}">
			<div class="name-location">
				<h2>${x.name}</h2>
				<h4>${x.location}</h4>
			</div>
		</div>
		<img  class="post" src="${x.post}">
        <img width="23.3px" class="padding" onclick="onClick(${idx})" src="./images/icon-heart.png">
        <img width="23.65px" class="padding" src="./images/icon-comment.png">
        <img width="22.38px" class="padding" src="./images/icon-dm.png">
        <h2 class="likes padding" id="count">${x.likes} <span>likes</span></h2>
        <h2 class="likes padding">${x.username} <span>${x.comment}</span></h2>
        <div class="border"></div>
	</section>`
    })
}
render()

let likesArr = []
let no_of_likes = posts.map(x => {
    likesArr.push(x.likes)
})
function onClick(index) {
    let count = Number(likesArr[index])
    count++
    posts[index].likes = count.toString()
    main.innerHTML=" "
    render()

}
