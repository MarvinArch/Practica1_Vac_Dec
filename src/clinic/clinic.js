let viewdata=()=>{
    let identification=document.querySelector("input[name='identification']").value
    let name=document.querySelector("input[name='name']").value
    let lastname=document.querySelector("input[name='lastname']").value
    let address=document.querySelector("input[name='address']").value
    console.log("Numero de Identificacion", identification, '\n', "Nombres", name)
    console.log("Apellidos", lastname, '\n', "Direccion", address)
}