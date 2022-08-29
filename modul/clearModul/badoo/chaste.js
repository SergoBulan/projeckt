fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    let divOsn = document.createElement('div');
    for (const user of users){
      let div = document.createElement('div');
      div.classList.add('piss');
      div.innerText = `${user.id} ${user.name}`;


      let a = document.createElement('a');
      a.href = `../onlik/details.html?data=${JSON.stringify(user)}`;
      a.innerText = 'Info USER';
      div.appendChild(a);

      divOsn.appendChild(div);
    }
    document.body.append(divOsn)
  });
