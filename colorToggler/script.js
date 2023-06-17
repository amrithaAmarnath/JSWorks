function toggleRed(){
    let cbox=document.querySelector('#id_colorbox')
    cbox.classList.replace("bg-dark","bg-danger");
}  
function toggleGreen(){
    let cbox=document.querySelector('#id_colorbox')
    cbox.classList.remove("bg-dark");
   
}