// 1. api call
// 2. Card layout
// 3. configurable feilds

function nameFormatter(user){
    return`${user.firstName} ${user.lastName}`;
}
function companyPositionFormatter(user){
    return `${user.company.title}`;
}
function companyNameFormatter(user){
    return `${user.company.name}`;
}
let config = [
  {
    key: "Name ",
    value: "name",
    formatter: nameFormatter,
  },
  {
    key: "Age",
    value: "age",
  },
  {
    key: "Phone ",
    value: "phone",
  },
  {
    key: "Blood Group",
    value: "bloodGroup",
  },
  {
    key: "Company",
    value: "name",
    formatter: companyNameFormatter,
  },
  {
    key: "Position",
    value: "name",
    formatter: companyPositionFormatter,
  },
  {
    key: "weight ",
    value: "weight",
  },
];

function fetchDataFromServer() {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((json) => fetchUserData(json));
  }

function fetchUserData(data){
    let{limit, skip, total, users} = data;
    let  container= document.getElementsByClassName("main-conatiner")[0];
    users.map((element) => {
    container.appendChild(userCard(element));
    // console.log(element);
    });
    
}

function userCard(user){
    let cardContainer = document.createElement("div");
    cardContainer.setAttribute("class" , "card")
    let img = document.createElement("img");
    img.setAttribute("class", "card-img");
    img.setAttribute("src" , user.image);
    cardContainer.appendChild(img);
    let detailContainer = document.createElement("container");
    detailContainer.setAttribute("class" , "container")
    config.forEach((element) => {
        let{key , value , formatter} = element;
        if(formatter){
            value = formatter(user);
        }else{
            value = user[value];
        }
        detailContainer.appendChild(createDetailsAttribute(key, value))
    });
    cardContainer.appendChild(detailContainer);


    return cardContainer;
}

function createDetailsAttribute(key, value) {
    let detailDiv = document.createElement("div");
    detailDiv.setAttribute("class", "details");
    let h4 = document.createElement("h4");
    h4.setAttribute("class", "details-header");
    h4.innerText = key;
    let span = document.createElement("span");
    span.textContent = value;
    detailDiv.appendChild(h4);
    detailDiv.appendChild(span);
    return detailDiv;
  }

// function userCard(){
//     return `
//     <div class="card">
//       <img src="user.png" alt="Avatar" class="card-img"style="width:100%">
//       <div class="container">
//         <p>Architect & Engineer</p>
//         <p>Architect & Engineer</p>
//         <p>Architect & Engineer</p>
//         <p>Architect & Engineer</p>
//       </div>
//     </div>
//     `;
// }

fetchDataFromServer();

// fetchUserData();

