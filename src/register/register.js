let handleOnClick=()=>{
    window.location.href = "../begin/index.html"
}

const boton=document.querySelector('button')
boton.addEventListener('click',()=>{
    let pass1= document.querySelector("input[name='pass1']").value
    let pass2= document.querySelector("input[name='pass2']").value
   
    if (pass1.localeCompare(pass2)==0) {
        let name=document.querySelector("input[name='name']").value
        let lastname=document.querySelector("input[name='lastname']").value
        let dates=document.querySelector("input[name='dates']").value
        let phone=document.querySelector("input[name='phone']").value
        let sex=document.querySelector("select[name='sex']").value
        let cui=document.querySelector("input[name='cui']").value
        let email=document.querySelector("input[name='email']").value
        let address=document.querySelector("input[name='address']").value
        console.log('el nombre igresado es', name, '\n', 'El apellido ingresado es ', lastname)
        console.log("con fecha de Nacimiento", dates, '\n', 'Sexo de la Presona ', sex)
        console.log("Telefono Registrado", phone, '\n', 'Identificacion No. ', cui)
        console.log("Correo Electronico", email, '\n', 'Direccion Personal ', address)  
          
    } else {
        window.alert("las Contraseñas no coinciden")
    }
    
})