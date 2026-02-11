// to select all boxes
const boxes = document.querySelectorAll('.box');

// to select Image
const image = document.querySelector('.image');

boxes.forEach(box => {
    box.addEventListener('dragover',e=>{
        e.preventDefault()
        box.classList.add('hovering')
    })

     box.addEventListener('dragleave',()=>{
        box.classList.remove('hovering')
    })

    box.addEventListener('drop',()=>{
        box.appendChild(image)
        box.classList.remove('hovering')

    })
});