//   На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)



let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));

fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
  .then(response => response.json())
  .then(users => {
    for (const user in users) {

  };