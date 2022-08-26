//   На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let key = 'key';
let div = document.createElement('div');


let url = new URL(location.href);
let boos = JSON.parse(url.searchParams.get('title'));
console.log(boos)

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
  .then(response => response.json())
  .then(posts => {
    for (const post in posts) {

    }


  });
