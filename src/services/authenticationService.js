export const registerUserService = (request) => {
 
  //const REGISTER_API_ENDPOINT = 'https://reqres.in/api/register';
  const REGISTER_API_ENDPOINT = 'http://examclass.in:4008/api';
  const email = request.formData.email;
  const password = request.formData.password;

  let requestBody = {
    query: `
      query Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          userId
          token
          tokenExpiration
        }
      }
    `,
    variables: {
      email: email,
      password: password
    }
  };


  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  };

  return fetch(REGISTER_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};
/*
export const registerUserService = (request) => {
 
    const REGISTER_API_ENDPOINT = 'https://reqres.in/api/register';
    
    const parameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request.formData)
    };
  
    return fetch(REGISTER_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      });
  };
  */

  export const loginUserService = (request) => {
    const LOGIN_API_ENDPOINT = 'http://localhost:3000/api/v1/login';
  
    const parameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request.user)
    };
  
    return fetch(LOGIN_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      });
  };
  
  