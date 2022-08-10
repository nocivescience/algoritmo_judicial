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
conat 
const containerCases=document.querySelector('.container2');
function appearingCases(){
    containerCases.innerHTML+=`
    <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
      <div class="card-header">Header</div>
      <div class="card-body">
        <h5 class="card-title">Light card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    `;
}
setInterval(()=>{
    appearingCases()
},1000)