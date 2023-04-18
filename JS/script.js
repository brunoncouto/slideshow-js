var slide = document.querySelector(".slideshow");
// Aqui declara-se um array, com o texto que indica o caminho das imagens a serem exibidas
var images = [
    './img/img1.jpg',
    './img/img2.jpg',
    './img/img3.jpg'
];

var time = 2000;
var count = 0;

function moveSlideShow (){
    slide.src = images[count];
    // A estrutra condicional a seguir verifica se a variavel 'count' é menor que a extensão do array
    // Em caso positivo, ela irá aumentar o contador em 1 e exibir a próxima imagem;
    // Em caso negativo, a contagem zera e volta a exibir a primeira imagem
    if(count < images.length - 1){
        count++;
    } else {
        count = 0
    }
    // setTimeOut executa um determinado trecho de código a cada intervalo de tempo;
    // Neste caso, irá executar nosso slide, a cada 2 segundos
    setTimeout("moveSlideShow()", time);
}
// Essa propriedade window.onload é executada sempre que a página é carregada pela primeira vez
window.onload = moveSlideShow;