// step 1 
let plans = JSON.parse(tasks);
console.log(plans);

// step 2 - create a card with buttons for all elements from json
function updateHTML() {
    for (let plan of plans) {
        document.querySelector("#demo").innerHTML +=
            `
        <div class="card shadow-lg p-3 mb-5 bg-body rounded deleteTask" style="width: 18rem;">
        <input type="submit" value="Task" class="btn btn-info text-white task"> 
        <img src="images/${plan.image}" class="card-img-center" alt="...">
                <div class="card-body ">
                <div class="resize"> 
                     <h5 class="card-title text-center">${plan.taskName}</h5>
                        <p class="card-text text-center">${plan.description}</p>
                        </div>
                        <hr>
                       
                        <p class="card-text"><img src="icons/alert.png" alt="Logo" width="20" height="20" class="d-inline-block align-text-top">Priority level:
                        <span class="priority_level text-white bg-success "><strong> ${plan.importance} </strong></span></p>
                        <input type="submit" value="Priority" class="btn btn-primary priority_btn">
                       
                        
                         <hr>
                        <a href="#" class="btn btn-danger dissapear delete_btn">
                     <img src="icons/delete.png" alt="Logo" width="20" height="20" class="d-inline-block align-text-top">
                     Delete</a>
                     <a href="#" class="btn btn-success">
                     <img src="icons/done.png" alt="Logo" width="20" height="20" class="d-inline-block align-text-top">
                     Done</a>

                </div>
        </div>
    `
    }
}
updateHTML();
addEvent();


// step 3 -create a function to increase the level of priority
function importance(index) {
    if (plans[index].importance != 5) {
        plans[index].importance++;
        document.getElementsByClassName("priority_level")[index].innerHTML = plans[index].importance;
    }
}
// step 4 -create an event to each element
function addEvent() {}
let priority_btns = document.getElementsByClassName("priority_btn");
for (let i = 0; i < priority_btns.length; i++) {
    priority_btns[i].addEventListener("click", function() {
        importance(i);
    })
}

// step 5 - creating a function and an event for an icon to sort the tasks
document.getElementById("sort").onclick = sortByPriority;

function sortByPriority() {
    plans.sort((a, b) => a.importance - b.importance);
    console.table(plans);
    document.getElementById("demo").innerHTML = "";
    updateHTML();
    addEvent();
}


// step 6 - change color according to the priority

// function changeColor() {
//     let important = document.getElementsByClassName("priority_btn").value;
//     let score = 0;
//     if (score < 2) {
//         important.style.backgroundColor = "bg-success";
//     } else if (score >= 2 & score < 4) {
//         important.style.backgroundColor = "bg-warning";
//     } else {
//         important.style.backgroundColor = "bg-danger";
//     }
// }


// const changeColor = document.querySelector(".priority_btn")
// for (let i = 0; i < changeColor.length; i++) {
//     changeColor[i].addEventListener("click", function() {
//         click(i)
//     })
// }

// function click(index) {
//     console.log(index)
//     if (plans[index].importance < 2) {
//         important.style.backgroundColor = "bg-success";
//     } else if (plans[index].importance >= 2 & plans[index].importance < 4) {
//         important.style.backgroundColor = "bg-warning";
//     } else {
//         important.style.backgroundColor = "bg-danger";
//     }
// }


// function changeColor() {
//     let important = document.getElementsByClassName("priority_btn").value;
//     let score = 0;
//     if (score < 2) {
//         important.style.backgroundColor = "bg-success";
//     } else if (score >= 2 & score < 4) {
//         important.style.backgroundColor = "bg-warning";
//     } else {
//         important.style.backgroundColor = "bg-danger";
//     }
// }
// document.querySelector(".priority_level").addEventListener(changeColor);