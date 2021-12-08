const boton=document.querySelector('button')
boton.addEventListener('click',()=>{
    let usuario=document.querySelector('#login').value
    let contra=document.querySelector('#password').value
    console.log('el usuario igresado es', usuario, '\n', 'La contraseña ingresa', contra)
})

