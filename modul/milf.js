//   На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let key = 'key';


let url = new URL(location.href);
let post = url.searchParams.get('title');

let div = document.createElement('div');
document.body.appendChild(div)

fetch(`https://jsonplaceholder.typicode.com/posts/${post}`)
  .then(response => response.json())
  .then(post => {
    for (const key in post) {
      let div1 = document.createElement('div');
      div1.classList.add('titleInfo');
      div1.innerText = `${key} ${post[key]}`
      div.append(div1);
      }
  });

fetch(`https://jsonplaceholder.typicode.com/posts/${post}/comments`)
  .then(response => response.json())
  .then(post => {
    for (const key in post) {
      let hub = document.createElement('div');
      hub.classList.add('comentari')
        if (typeof post[key] !== 'object') {
          hub.innerText = `${key} - ${post[key]}`;
          div.append(hub)
        }else {
          for (const item in post){
              if (post[key][item] !== 'object'){
                hub.innerText = `${post[key].body}`
                div.append(hub)
            }
          }

        }


    }
  });


