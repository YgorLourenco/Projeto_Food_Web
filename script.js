// Armazenou na variavel a função de selecionar todos os itens da classe section-1-icons
const icons = document.querySelectorAll('.section-1-icons i');
let i = 1

// Cria um intervalo para colocar e tirar uma classe de um HTML
// Coloca a mudança dentro e por fora coloca o tempo que e para a acontecer a mudança
// Esta tirando a classe change da lista de icons e colocando de volta
setInterval(() => {
    i++
    const icon = document.querySelector('section-1-icons .change')
    icon.classList.remove('change')
    
    // Essa condição vai servir para colocar um contador para mudar a classe change entre os itens da lista
    if(i > icons.length){
        icons[0].classList.add('change')
        i = 1
    } else {
        icon.nextElementSibling.classList.add('change')
    }
},4000)

