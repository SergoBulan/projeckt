// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//   6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//   котра має детальну інфу про поточний пост.


let key = 'key';
let div = document.createElement('div');
document.body.append(div);

let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));


fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`)
  .then(response => response.json())
  .then(users => {
    for (const user in users) {
      if (typeof user !== 'object') {
        let div = document.createElement('div');
        div.innerText = `${user} - ${users[user]}`;
        document.body.append(div);
      } else {
        for (const item in users[user]) {
          if (typeof item !== 'object') {
            let div = document.createElement('div');
            div.innerText = `${item} - ${users[user][item]}`;
            document.body.append(div);
          } else {
            for (const itemUs in users[user][item]) {
              if (typeof itemUs !== 'object') {
                let div = document.createElement('div');
                div.innerText = `${itemUs} - ${users[user][item][itemUs]}`;
                document.body.append(div);
              }
            }
          }
        }
      }
    }
    let button = document.createElement('button');
    button.innerText = 'trus for user'
    div.appendChild(button);
    button.onclick = function (e){
      e.preventDefault()
      localStorage.setItem(key,JSON.stringify(user))
      location.href = `posts.html?data=${JSON.stringify(user)}`;

      fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(response => response.json())
        .then(users => {
          for (const user of users){
            let div = document.createElement('div');
            div.innerText = `${user.id} ${user.name}`;

            document.body.appendChild(div);
          }
        });

    }



  });










// let button = document.createElement('button');
// button.innerText = 'trus for user'
// div.appendChild(button);
// button.onclick = function (e){
//     e.preventDefault()
//     localStorage.setItem(key,JSON.stringify(user))
//     location.href = `posts.html?data=${JSON.stringify(user)}`;
// }


// let div = document.createElement('div')'
//document.body.appendChild(div)

