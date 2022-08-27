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
      if (typeof users[user] !== 'object') {
        let hub = document.createElement('div');
        hub.innerText = `${user} - ${users[user]}`;
        div.append(hub);
      } else {
          for (const item in users[user]) {
            if (typeof users[user][item] !== 'object') {
              let hub = document.createElement('div');
              hub.innerText = `${item} - ${users[user][item]}`;
              div.append(hub);
           } else {
             for (const prison in users[user][item]) {
               if (typeof users[user][item][prison] !== 'object') {
                  let hub = document.createElement('div');
                  hub.innerText = `${prison} - ${users[user][item][prison]}`;
                  div.append(hub);
              }
            }
          }
        }
      }

    }
    let button = document.createElement('button');
    button.innerText = 'trus for user'
    div.appendChild(button);
    button.onclick = function (e) {
      e.preventDefault()
      fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(response => response.json())
        .then( posts=> {

          let div2 = document.createElement('div');
          div2.classList.add('titleInfo');
          div.append(div2);

          for (const post of posts) {
            let divList = document.createElement('div');
            divList.innerText = `${post.title}`
            div2.append(divList);

            let klick = document.createElement('button');
              klick.innerText = 'lets go'
              div2.appendChild(klick);
                klick.onclick = function (e) {
                e.preventDefault()
                location.href = `posts.html?title=${post.id}`;
              }
          }
          div2.appendChild(divList);





        })
    }
  });



// let klick = document.createElement('button');
// klick.innerText = 'lets go'
// div2.appendChild(klick);
// klick.onclick = function (e) {
//   e.preventDefault()
//   localStorage.setItem(key, JSON.stringify(posts))
//   location.href = `posts.html?title=${JSON.stringify(posts)}`;
//}
    // let a = document.createElement('a');
    // a.href = `posts.html?title=${JSON.stringify(posts)}`;
    // a.innerText = ' lets go ';
    // div2.appendChild(a);





// fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
      //   .then(response => response.json())
      //   .then(posts => {
      //     for (const post of posts){
      //       let div = document.createElement('div');
      //       div.innerText = `${post.id} ${post.name}`;
      //
      //
      //       let a = document.createElement('a');
      //       a.href = `posts.html?data=${JSON.stringify(post)}`;
      //       a.innerText = ' info post';
      //       div.appendChild(a);
      //
      //
      //       document.body.appendChild(div);
      //     }
      //   });



// fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`)
//   .then(response => response.json())
//   .then(users = function litUsers(users) {
//     console.log(users);
//     if (typeof user !== 'object'){
//       let div = document.createElement('div');
//       document.body.append(div)
//       for (const user in users){
//         litUsers(user)
//       }
//     }


  //   let button = document.createElement('button');
  //   button.innerText = 'trus for user'
  //   div.appendChild(button);
  //   button.onclick = function (e){
  //     e.preventDefault()
  //     localStorage.setItem(key,JSON.stringify(user))
  //     location.href = `posts.html?data=${JSON.stringify(user)}`;
  //
  //     fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
  //       .then(response => response.json())
  //       .then(users => {
  //         for (const user of users){
  //           let div = document.createElement('div');
  //           div.innerText = `${user.id} ${user.name}`;
  //
  //           document.body.appendChild(div);
  //         }
  //       });
  //
  //   }
  //
  //
  //
  // });
  //
  //
// let button = document.createElement('button');
// button.innerText = 'lie for user'
// div.appendChild(button);
// button.onclick = function (e){
//     e.preventDefault()
//     localStorage.setItem(key,JSON.stringify(user))
//     location.href = `posts.html?data=${JSON.stringify(user)}`;
// }


// let div = document.createElement('div')'
//document.body.appendChild(div)

// let key = 'key';
// let div = document.createElement('div');
// document.body.append(div);
//
// let url = new URL(location.href);
// let user = JSON.parse(url.searchParams.get('data'));
//
//
// fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`)
//   .then(response => response.json())
//   .then(users => {
//     for (const user in users) {
//       if (typeof user !== 'object') {
//         let div = document.createElement('div')
//         div.innerText = `${user.id} ${user.name}`;
//         document.body.append(div);
//       }
//
//
//     }
//   });
// let button = document.createElement('button');
// button.innerText = 'trus for user'
// div.appendChild(button);
// button.onclick = function (e){
//   e.preventDefault()
//   localStorage.setItem(key,JSON.stringify(user))
//   location.href = `posts.html?data=${JSON.stringify(user)}`;



// let div2 = document.createElement('div');
// div2.classList.add('titleInfo');
// div.append(div2);



// for (const post in posts) {
//   let list = document.createElement('li');
//   list.inner = `${post.title}`;
//   titlePost.append(list);
// }

// let list = document.createElement('li');
// list.innerText = `${post.title}`;
// titlePost.append(list);


// let klick = document.createElement('button');
// klick.innerText = 'trus for user'
// .appendChild(klick);
// klick.onclick = function (e) {
//   e.preventDefault()
//   localStorage.setItem(key, JSON.stringify(post))
//   location.href = `posts.html?title=${JSON.stringify(post)}`;

//
// localStorage.setItem(key, JSON.stringify(post))
//
//
// location.href = `posts.html?title=${JSON.stringify(post)}`;




// }
