const addtodo = document.querySelector('.add');
const list = document.querySelector('.todos');
const addtodobtn = document.querySelector('.btntodo');
const input = document.querySelector('.input');
const search = document.querySelector('.search input');
// add todo

const generatetodo = todo =>{
   const listitem =  `  <li class="item ">
    <span>${todo}</span>
    <span class="delete">❌</span>
  </li>`;
 list.innerHTML += listitem;

}

addtodo.addEventListener('submit', e =>{
    e.preventDefault();
    const todo = addtodo.add.value.trim();
    if(todo.length){
    generatetodo(todo)
    addtodo.reset();
    }
});

addtodobtn.addEventListener('click', ()=>{
    const todo = input.value.trim();
    if(todo.length){
    generatetodo(todo)
    addtodo.reset();
    }
});
 

// 

// delete todo
  
list.addEventListener('click', e =>{
    if(e.target.classList.contains('delete')){
     e.target.parentElement.remove();
    }
})


// searching
const filterlist  = (searchterm) => {
   Array.from(list.children)
    .filter((todoitem) => !todoitem.textContent.toLowerCase().includes(searchterm))
    .forEach((todoitem) => todoitem.classList.add('filter'));

    Array.from(list.children)
    .filter((todoitem) => todoitem.textContent.toLowerCase().includes(searchterm))
    .forEach((todoitem) => todoitem.classList.remove('filter'));

};


search.addEventListener('keyup', () => {
    const searchterm = search.value.trim().toLowerCase();
    filterlist(searchterm);
});