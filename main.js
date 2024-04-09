(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
      


const inputname = document.getElementById('name');
const inputlastname = document.getElementById('lastname');
const inputemail = document.getElementById('email');
const inputclave1 = document.getElementById('clave1');
const inputclave2 = document.getElementById('clave2');
const form = document.getElementById('my-form');
const msgDiv = document.getElementById("msg");
let listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios")) || [];
let maxId = 0;

//entrar en los usuarios para no sobreescribir
for (let i = 0; i < listaUsuarios.length; i++) {
  if (listaUsuarios[i].id > maxId) {
    maxId = listaUsuarios[i].id;
  }
}

let userid = maxId + 1;
if (maxId > 0) {
  userid = maxId + 1;
} else {
  userid = 1;
}

// Contraseña= pa!@#$%3



function onSubmit(e) {
  e.preventDefault()
  const Nombre = inputname.value
  const Apellido =inputlastname.value
  const Correo = inputemail.value
  const Clave1 = inputclave1.value
  const Clave2 = inputclave2.value
  
  let claveV;
  claveV = /^(?=[^\d_].*?\d)\w(\w|[!@#$%]){7,20}/;
    const  validar = claveV.test(Clave1); 
  let emailV;
    emailV = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const validarE = emailV.test(Correo);
  
  switch (true) {
      case !Nombre || !Apellido || !Correo || !Clave1 ||!Clave2:
        // alert("Escribeee")
        msgDiv.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert"> escribeee</div>`
        
          break;
      case validarE === false:
        // alert("correo invaldo")
        msgDiv.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">correo invalido</div>`;
        break ;
      case validar === false:
        msgDiv.innerHTML =`<div class="alert alert-danger alert-dismissible fade show" role="alert"> la contrasena debe </div>`
        break;
      case Clave1 !== Clave2:
        msgDiv.innerHTML = `<div class="alert alert-danger alert-dismissible fade show " role="alert"> las claves deben ser iguales </div>`
        break;  
      default: 
      const Usuarios = { 
        id:userid,
          Nombre,
          Apellido,
          Correo,
          Clave1,
          Clave2,
  } ;
  listaUsuarios.push(Usuarios);
          localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios))
          userid++;
          
          console.log(listaUsuarios);
          
          msgDiv.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
          
          Usuario registrado correctamente <br> User: ${userid} <br> Nombre: ${Usuarios.Nombre} <br> Apellido: ${Usuarios.Apellido}<br> Correo: ${Usuarios.Correo} <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;
          setTimeout(function () {
            window.location.href = "./user.html";
      }, 5000);
      }
      
      
      setTimeout(function () {
          msgDiv.innerHTML = "";
          }, 3000);    
}
      form.addEventListener('submit',onSubmit)

