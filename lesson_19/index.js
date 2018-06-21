// const checkAuth = (callback) => {
//   setTimeout(() => {
//     callback( {isAuth: true} );
//   }, 2000);
// };
// const getUser = (authInfo, callback) => {
//   if (!authInfo.isAuth) {
//     callback(null);
//     return;
//   }
//   setTimeout(() => {
//     callback( {name: 'Max'} );
//   }, 2000);
// };


// checkAuth((authInfo) => {
//   getUser(authInfo, (user) => {
//     console.log(user.name);
//   });
// });

const checkAuth = () => {
  return new Promise(function(resolve, reject)
    {
      setTimeout(() => {
        resolve( {isAuth: true} );
      }, 2000);
    }
    
};

const getUser = (authInfo) => {
  return new Promise(function(resolve, reject)
    {
      if (!authInfo.isAuth) {
          resolve(null);
          return;
      }
      setTimeout(() => {
          reject( {name: 'Max'} );
      }, 2000);
    }
});

checkAuth()
.then((res) =>{
  return getUser(res);
})
.then((res) =>{
  console.log(res);
});




/*first version*/
// let isAuth = true;
//  new Promise(function(resolve, reject) {
// if (!isAuth) {
//     setTimeout(() => reject (isAuth), 2000);
//   }

//   setTimeout(() => resolve(isAuth), 2000);

// }).then((result) => {
//   name = "Max";
//   return name;
  

// }).then((name) => {
 
//   console.log(name);

// }).catch((isAuth) => {
//   console.log('null');
// });



/*second version*/

// function checkA(authInfo)
// {
  
//   return new Promise(function(resolve, reject)
//   {
//     //resolve(authInfo.isAuth);
//     if(authInfo.isAuth){

//       resolve(authInfo.isAuth);
//     }
//       reject(authInfo.isAuth);
//   });
// }
// setTimeout(() => {
//     checkA( {isAuth: true})
//     .then(function(isAuth)
//     {
//      console.log("Max");
//     })
//     .catch(function(isAuth)
//     {
//       console.log(null);
//     });
//   }, 2000);