
document.addEventListener('DOMContentLoaded', function() {
    const usersContainer = document.querySelector(".users");

    function pintarEnPantalla() {
        usersContainer.innerHTML = ''; // Limpiar el contenido existente

        const usuariosGuardados = JSON.parse(localStorage.getItem("listaUsuarios"));
        if (usuariosGuardados === null || usuariosGuardados.length === 0) {
            usersContainer.innerHTML = `<p>No hay usuarios registrados</p>`;
        } else {
            let cont = 15
            for (const usuario of usuariosGuardados) {
                const userElement = document.createElement('div');
                userElement.classList.add('col');
                userElement.innerHTML = 
                    `<div class="card" style="width: 18rem;>
                        <div class="card-body">
                            <div class="card-header">
                                <img src="https://picsum.photos/id/${cont}/200/200" class="card-img-top" alt="imagen">
                            User ${usuario.id}
                            </div> 
                            
                            <p>Nombre: ${usuario.Nombre}</p>
                            <p>Apellido: ${usuario.Apellido}</p>
                            <p>Correo: ${usuario.Correo}</p>
                        </div>
                    </div>`
                    cont++
                ;
                usersContainer.appendChild(userElement);
            }
        }
    }

    pintarEnPantalla();
});

for (user of savedUsers) {
    let userCard = document.getElementById('cardID')

    userCard.innerHTML += `<div class ="card mt-5 m-3 rounded" style="width:300px;">
    <img src="https://picsum.photos/id/${cont}/200/200" class="card-img-top p-3" alt="">
    <div class="card-body" id="cardID">${user.userName}<br> ${user.userEmail}</div></div>`

console.log(user);

}
