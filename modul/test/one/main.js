fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    let divOsn = document.createElement('div');
    for (const user of users){
      let div = document.createElement('div');
      div.classList.add('piss');
      div.innerHTML = <h2>`${user.id} ${user.name}`</h2>;


      let a = document.createElement('a');
      a.href = `details.html?data=${JSON.stringify(user)}`;
      a.innerText = 'Info USER';
      div.appendChild(a);

      divOsn.appendChild(div);
    }
    document.body.append(divOsn)
  });
