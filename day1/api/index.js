// How to fetch Data from server.

function fetchDataFromServer() {
  fetch("https://dummyjson.com/users")
    .then((response) => response.json())
    .then((json) => printData(json));

}

function printData(data) {
  // console.log(data);
  // let ele = document.getElementById("code");
  // let tempData = data.filter((a) => a.id < 50);
  // ele.innerHTML = JSON.stringify(tempData, null, 4);

  //console.log(data);
   let{limit, skip, total, users} = data;
   console.log(users);

  // let name = users.map((ele) => {
  //   return {
  //     ele

  //   }
  // })

  // let x =0;
  // let age = users.reduce((a,b) => {
  //   x += a.age + b.age;
    
  // }, 0);
  // console.log(x);
  // console.log(age / users.length)

  let obj = users.map((user) => {
      return ({name:[user.firstName.concat(user.lastname)].join(" ")});
  })

  let filter = obj.filter((user) => {
    return user.age < 50;
  })



  console.log(f)
}
// let text = "name";
// function getFullName(item) {
//   return text.concat([item.firstname,item.lastname].join(" "));
// }

fetchDataFromServer();
