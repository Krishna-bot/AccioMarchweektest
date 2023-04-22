const AddUser = document.getElementById('addUser');
const FilterButton = document.getElementById('filter');
const User_name = document.getElementById('name');
const profession = document.getElementById('profession');
const age = document.getElementById('age');
const tableList = document.getElementById('table')

//emprty array
let userArr = [
    { id: 1, User_name: "john", age: "18", profession: "developer" },
    { id: 2, User_name: "jack", age: "20", profession: "developer" },
    { id: 3, User_name: "karen", age: "19", profession: "admin" },
]


AddUser.addEventListener('click', (e) => {
 e.preventDefault();
 let id = 0;
 const Add_user = new User(id,User_name.value, age.value,  profession.value );
 userArr = [...userArr, Add_user];
 console.log(userArr); 
 UI.displayUser(); 


});


class User {
    constructor(id, User_name, age, profession){
        this.id = id;
        this.User_name = User_name;
        this.profession = profession;
        this.age = age;
    }
}

// display in UI
class UI {
    static displayUser(){
        let displayUser = userArr.map((u) =>{
            return `
            <tr>
            <th scope="row">${u.id + 1}</th>
            <td>${u.User_name}</td>
            <td>${u.profession}</td>
            <td>${u.age}</td>
          </tr>
          `
        });

        tableList.innerHTML = displayUser;
    }
}
