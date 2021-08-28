import {createTask, getImages, getTasks} from "./service.js";


/*________________________________________________________________________*/
const btn = document.querySelector("#btn");
let i = 0;
btn.addEventListener('click', async () => {
     const myProm = await getImages(i++);
     onData(myProm);
})

function onData (data) {
    data.forEach(el => {
        const img = document.createElement('img');
        img.src = el.thumbnail;
        document.querySelector('#result').appendChild(img);
    })
}

/*_______________________________________________________________________*/

/*____________________________________________________________________*/
const get_tsk_btn = document.querySelector(".get-tasks");
get_tsk_btn.addEventListener('click',  () => {
    const myProm = getTasks(i++);
    myProm.then(onDataTasks);
})

function onDataTasks (data) {
    data.forEach(el => {
        const li = document.createElement('li');
        li.innerHTML = el.title;
        document.querySelector('#result').appendChild(li);
    })
}
/*_________________________________________________________________*/

createTask("Hello!!").then(tsk => {
    return console.log(tsk);
});