const classes=[
    'card text-white bg-primary mb-3',
    'card text-white bg-secondary mb-3',
    'card text-white bg-success mb-3',
]
const delito=[
    'Violacion',
    'Robo',
    'Cohecho',
    'Agresión',
    'Ataque'
]
const grado=[
    'Agrabado',
    'Leve',
    'Cuasi'
]
const descripcion=[
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quod voluptate pariatur tempora? Sunt amet consectetur aliquid. Praesentium quam molestias minima quis rerum eligendi! Quod voluptatibus vel explicabo iste ab.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, blanditiis? Distinctio officiis nobis hic blanditiis, ipsam mollitia atque cumque expedita. Modi veritatis autem explicabo, molestias delectus facilis dolore voluptas quo?', 
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur sed totam odit, quam temporibus error repellendus rem, sapiente perspiciatis praesentium aliquam quod unde culpa ullam cupiditate aliquid modi, necessitatibus omnis!',   
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia architecto totam facere dolorem qui eaque recusandae soluta ullam accusamus impedit harum doloribus sequi, iure repudiandae culpa voluptatem voluptates eius? Quis.',
];
const containerCases=document.querySelector('.container2');
const classLista=[
    'card text-white bg-primary mb-3',
    'card text-white bg-secondary mb-3',
    'card text-white bg-danger mb-3',
];
function appearingCases(){
    const delitoElegido=delito[Math.floor(Math.random()*delito.length)]
    const gradoElegido=grado[Math.floor(Math.random()*grado.length)];
    const descripcionElegida=descripcion[Math.floor(Math.random()*descripcion.length)]
    const divCard=document.createElement('div');
    divCard.className='card text-dark bg-light mb-3'
    divCard.style.maxWidth='18rem'
    divCard.innerHTML+=`
      <div class="card-header">${delitoElegido}</div>
      <div class="card-body">
        <h5 class="card-title">${gradoElegido}</h5>
        <p class="card-text">${descripcionElegida}</p>
    </div>
    `;
    setTimeout(()=>{
        const classDelito=classLista[Math.floor(Math.random()*classLista.length)]
        divCard.className=classDelito;
        divCard.style.maxWidth='18rem'
    },2000)
    containerCases.appendChild(divCard)
}
setInterval(()=>{
    appearingCases()
},1000)
setTimeout(()=>{

})