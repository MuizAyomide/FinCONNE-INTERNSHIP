// Sample array of user objects with names and profile pictures
const users = [
    { name: 'Victor', picture: 'https://i.pravatar.cc/150?img=14' },
    { name: 'John', picture: 'https://i.pravatar.cc/150?img=50' },
    { name: 'Flora', picture: 'https://i.pravatar.cc/150?img=32' },
    { name: 'Gift', picture: 'https://i.pravatar.cc/150?img=46' },
    { name: 'Luke', picture: 'https://i.pravatar.cc/150?img=59' },
    { name: 'Victoria', picture: 'https://i.pravatar.cc/150?img=29' }

  ];
  
  // Function to render the user list to the DOM
  function renderUserList(userArray) {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; //  
  
    userArray.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.classList.add('user');
  
      userDiv.innerHTML = `
        <img src="${user.picture}" alt="${user.name}">
        <h2>${user.name}</h2>
      `;
  
      userList.appendChild(userDiv);
    });
  }
  
  // Function to shuffle the array using Fisher-Yates shuffle algorithm
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Event listener for the shuffle button
  document.getElementById('shuffleButton').addEventListener('click', () => {
    const shuffledUsers = shuffleArray([...users]);
    renderUserList(shuffledUsers);
  });
  
  // render of user list
  renderUserList(users);