let key = 'key';


let url = new URL(location.href);
let post = url.searchParams.get('title');

let div = document.createElement('div');
div.classList.add('viagra');
document.body.appendChild(div);

fetch(`https://jsonplaceholder.typicode.com/posts/${post}`)
  .then(response => response.json())
  .then(post => {
    for (const key in post) {
      let div1 = document.createElement('div');
      div1.classList.add('aka');
      div1.innerHTML = <h2>`${key}: ${post[key]}`</h2>;
      div.append(div1);
    }
  });

let lio = document.createElement('div');
lio.classList.add('dildo');
document.body.appendChild(lio);


fetch(`https://jsonplaceholder.typicode.com/posts/${post}/comments`)
  .then(response => response.json())
  .then(post => {
    for (const key in post) {
      let hub = document.createElement('div');
      hub.classList.add('dolg');
      if (typeof post[key] !== 'object') {
        hub.innerText = `${key} - ${post[key]}`;
        lio.append(hub)
      }else {
        for (const item in post){
          if (post[key][item] !== 'object'){
            hub.innerText = `${post[key].body}`;
            lio.append(hub);
          }
        }

      }

    }
  });
