// Выполнить все задачи в теге script. Комментарии, в которых написаны задачи, не стирать, код с решением задачи пишем под комментарием.


// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

// document.querySelector(`input`).addEventListener(`change`, (e) => {document.querySelector(`span`).textContent = e.target.value;
// console.log(`1`)})



// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

// document.querySelector(`.messageBtn`).addEventListener(`click`, function name() {
//     document.querySelector(`.message`).classList.add(`.animate_animated`, `animate_fadeInLeftBig`)
//     document.querySelector(`.message`).style.visibility = `visible`;
//     })




// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

// document.querySelectorAll(`input`).addEventListener(`submit`, function name(e) {
//     e.preventDefault()
//         if (document.querySelectorAll(`input`).value === ``) 
//         {
//             document.querySelectorAll(`input`).classList.add(`.error`)
//             document.querySelectorAll(`input`).style.border = `10рх green solid`
//                        }
//           else {
//             document.querySelectorAll(`input`).classList.remove(`.error`)
//                }
// }
// )