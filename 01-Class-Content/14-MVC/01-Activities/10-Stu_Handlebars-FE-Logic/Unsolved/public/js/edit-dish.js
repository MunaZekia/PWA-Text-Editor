async function editFormHandler(event) {
  event.preventDefault();
  const dish_name = document.querySelector('#dish_name').value;
  const description = document.querySelector('#description').value;
  const guest_name = document.querySelector('#guest_name').value;
  
  // TODO: What will the value of has_nuts be if the box in the form is checked? 
  // If the box is checked, the value of has_nuts will be true. 
  //If the box is not checked, the value of has_nuts will be false.
  // TODO: What do we call this kind of operator?
    // Ternary operator conditional statement
  const has_nuts = document.querySelector('#has_nuts:checked') ? true : false;

// window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
    // window.location.toString().split('/')[
const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  // TODO: What part of our application will handle this 'put' request?
  // The put request will be handled by the api.js file in the routes folder.
  
  const response = await fetch(`/api/dish/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      dish_name,
      description,
      guest_name,
      has_nuts,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // TODO: What happens if the response is ok?
  // If the response is ok, the user will be redirected to the dish page.
  if (response.ok) {
    document.location.replace(`/dish/${id}`);
  } else {
    alert('Failed to edit dish');
  }
}

document.querySelector('.edit-dish-form').addEventListener('submit', editFormHandler);