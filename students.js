

let arrayOfStudents = [];

function student(firstName,lastName,address) {
  this.id = arrayOfStudents.length + 1
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = this.firstName + ' ' + this.lastName;
  this.address = address;
}
function newStudents(firstName,lastName,address) {
  let newStudent = new student(firstName,lastName,address);
  arrayOfStudents.push(newStudent);
}


let Ajay = new newStudents('Ajaygopal','Jayaprakash','Palakkad');
let Parthi = new newStudents('Parthipan','Neelamegam','Erode');
let Arjun = new newStudents('Arjun','Jayaprakash','Palakkad');
let suraj = new newStudents('Suraj','Kumar','Coimbatore');
let Abhiram = new newStudents('Abhiram','N.R','Thrissur');
let Anuroop = new newStudents('Anuroop','K','Kozhikode');
let vishnu = new newStudents('Vishnu','N.B','Malappuram');
let sidharth = new newStudents('Sidharth','R.Nair','Ernakulam')

let table = document.getElementById('tablebody');
function renderTable(object) {
  for(let student of object) {
    table.innerHTML += `<tr><td>${student.id}</td><td>${student.firstName}</td><td>${student.lastName}</td><td>${student.fullName}</td><td>${student.address}</td></tr>`
  }
}

renderTable(arrayOfStudents);

function search() {
  let newlist = [];
  let input = document.getElementById('searchbox').value;
  if(input.length === 0) {
    alert('Enter something to search')
  }else {
    for(let student of arrayOfStudents) {
      for(let key in student) {
        if(input == student[key]) {
          newlist.push(student);
        }
      }
    }
    if(newlist.length === 0) {
      alert('Not found');
    }else {
      table.innerHTML = '';
      renderTable(newlist);
    }
  }
}

function addStudent() {
  let firstName = document.getElementById('first_name').value;
  let lastName = document.getElementById('last_name').value;
  let address = document.getElementById('address').value;
  if(firstName.length === 0 || lastName.length === 0 || address.length === 0) {
    alert('Enter all details');
  }else {
    for(let student of arrayOfStudents) {
      if(firstName == student.firstName && lastName == student.lastName && address == student.address) {
        alert('student already exist')
        break;
      }else {
        newStudents(firstName,lastName,address);
        break;
      }
    }
  }
  table.innerHTML = '';
  renderTable(arrayOfStudents);
  document.getElementById('first_name').value = '';
  document.getElementById('last_name').value = '';
  document.getElementById('address').value = '';
}


document.getElementById('search').addEventListener('click',search);

document.getElementById('showall').addEventListener('click',function() {
  document.getElementById('searchbox').value = '';
  table.innerHTML = '';
  renderTable(arrayOfStudents);
});

document.getElementById('submit').addEventListener('click',addStudent);