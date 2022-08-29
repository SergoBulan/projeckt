let key = 'key';
let div = document.createElement('div');
div.classList.add('onlifans');
document.body.append(div);

let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));

fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`)
  .then(response => response.json())
  .then(users => {
    for (const user in users) {
      if (typeof users[user] !== 'object') {
        let hub = document.createElement('div');
        hub.classList.add('selti');
        hub.innerText = `${user}: ${users[user]}`;
        div.append(hub);
      } else {
        for (const item in users[user]) {
          if (typeof users[user][item] !== 'object') {
            let hub = document.createElement('div');
            hub.classList.add('prist17')
            hub.innerText = `${item}: ${users[user][item]}`;
            div.append(hub);
          } else {
            for (const prison in users[user][item]) {
              if (typeof users[user][item][prison] !== 'object') {
                let hub = document.createElement('div');
                hub.classList.add('livstixs')
                hub.innerText = `${prison}: ${users[user][item][prison]}`;
                div.append(hub);
              }
            }
          }
        }
      }

    }
    let button = document.createElement('button');
    button.innerText = 'Oll info in this click';
    button.classList.add('donate')
    div.appendChild(button);
    button.onclick = function (e) {
      e.preventDefault()
      fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(response => response.json())
        .then( posts=> {

          let div2 = document.createElement('div');
          div2.classList.add('titleInfo');
          document.body.append(div2);

          for (const post of posts) {
            let divList = document.createElement('div');
            divList.classList.add('deedee');
            divList.innerText = `${post.title}`
            div2.append(divList);

            let klick = document.createElement('button');
            klick.innerText = 'lets go';
            klick.classList.add('alicia');
            divList.appendChild(klick);
            klick.onclick = function (e) {
              e.preventDefault()
              location.href = `posts.html?title=${post.id}`;
            }
          }
          div2.appendChild(divList);

        })
    }
  });
