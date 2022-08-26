//   На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let key = 'key';


let url = new URL(location.href);
let post = url.searchParams.get('title');
console.log(post)

fetch(`https://jsonplaceholder.typicode.com/posts/${post}`)
  .then(response => response.json())
  .then(post => {
    for (const key in post) {
      let div = document.createElement('div');
      div.classList.add('titleInfo');
      div.innerText = `${key} ${post[key]}`
      document.body.append(div);
      }
  });
