// const add_btn = document.getElementsByClassName(`add-btn`);
// console.log(add_btn);
// const lists = document.getElementById(`todo`)
// for (let i = 0; i < add_btn.length; i++) {

//     add_btn[i].addEventListener(`click`, function (task) {
//         const add_area = document.getElementById(`add-area`);
//         const value = add_area.value
//         console.log(value)

//         const li = document.createElement(`li`);
//         li.innerText = value;
//         lists.appendChild(li);

//         const doneButton = document.createElement('button');
//         doneButton.innerText = '完了';
//         li.appendChild(doneButton);
//         doneButton.addEventListener(`click`, function () {
//             lists.removeChild(li);
//         })

//     })
// };


// チャレンジ問題
const add_btn = document.getElementsByClassName(`add-btn`);
console.log(add_btn);
const lists = document.getElementById(`todo`)
for (let i = 0; i < add_btn.length; i++) {

    add_btn[i].addEventListener(`click`, function (task) {
        const add_area = document.getElementById(`add-area`);
        const value = add_area.value

        if (add_area.value === ``) {
            alert(`空です`)
        } else {
            const li = document.createElement(`li`);
            li.innerText = value;
            lists.appendChild(li);

            const doneButton = document.createElement('button');
            doneButton.innerText = '完了';
            li.appendChild(doneButton);
            add_area.value = ``

            doneButton.addEventListener(`click`, function () {
                lists.removeChild(li);
            })
        };
    })
};