// Сперва раскрасить по дефолту ячейки

const tableSelect = Array.from(document.querySelectorAll('.table-column-select div'));
const tableTotals = Array.from(document.querySelectorAll('.table-column-total div'));
const tableEntitys = document.querySelector('.table-entitys');
const dataEntitysByColumn = JSON.parse(
  document.getElementsByTagName('embed')[0].getAttribute('data-entitys'),
);

tableTotals.shift();
tableSelect.shift();
tableTotals.forEach((htmlElement, index) => {
  let sumAgregate = dataEntitysByColumn[index].reduce((a, b) => Number(a) + Number(b)).toString();
  const prepareString = sumAgregate.replace('-', '');

  if (prepareString.length > 6) {
    sumAgregate = sumAgregate.slice(0, 6);
  }

  htmlElement.innerHTML = sumAgregate;
});

tableSelect.forEach((htmlElement, index) => {
  htmlElement.addEventListener('click', (e) => {
    if (e.target.value) {
      const value = calculateValueByColumn(e.target.value, index);
      tableTotals[index].innerHTML = value;
    }
  });
});

function calculateValueByColumn(operation, index) {
  switch (operation) {
    case 'sum':
      // ...
      break;
    case 'min':
      // ...
      break;
    case 'min':
      // ...
      break;
    case 'avg':
      // ...
      break;

    default:
      break;
  }

  const value = dataEntitysByColumn[index].reduce((a, b) => Number(a) + Number(b)).toString();

  return 100;
}

// setInterval(() => {
//   fetch('http://localhost:5000/entitys/getAll')
//     .then((res) => Promise.resolve(res.json()))
//     .then((res) => {
//       const composeValuesByColumn = {};
//       let replaceHtml = '';
//       Object.keys(res).forEach((entity, index) => {
//         composeValuesByColumn[index] = [];

//         replaceHtml += `<div class="table-column">`;
//         replaceHtml += `<div class="table-row table-row-name">${entity}</div>`;
//         Object.keys(res[entity]).forEach((parameter) => {
//           const value = res[entity][parameter];
//           composeValuesByColumn[index] = composeValuesByColumn[index].concat(value);

//           let color = '';
//           let backgroundColor = 'white';
//           if (value < 0) {
//             color = `rgba(255, 140, 0, ${Math.abs(value)})`;
//           } else if (value === 0) {
//             color = `rgba(255, 255, 255)`;
//           } else if (value > 0) {
//             color = `rgba(0, 0, 0, ${Math.abs(value)})`;
//           }

//           if (Math.abs(value) < 0.15) {
//             backgroundColor = 'black';
//             color = 'red';
//           }

//           replaceHtml += `<div style="color: ${color};background-color: ${backgroundColor}" class="table-row">${res[entity][parameter]}</div>`;
//         });
//         replaceHtml += `</div>`;
//       });

//       replaceHtml += `<div class="table-column">
//                         <div class="table-row table-row-name">Итого:</div>
//                         <div class="table-row"></div>
//                         <div class="table-row"></div>
//                         <div class="table-row"></div>
//                         <div class="table-row"></div>
//                         <div class="table-row"></div>
//                         <div class="table-row"></div>
//                         <div class="table-row"></div>
//                         <div class="table-row"></div>
//                         <div class="table-row"></div>
//                         <div class="table-row"></div>
//                         <div class="table-row"></div>
//                         <div class="table-row"></div>
//                         <div class="table-row"></div>
//                         <div class="table-row"></div>
//                         <div class="table-row"></div>
//                         <div class="table-row"></div>
//                         <div class="table-row"></div>
//                         <div class="table-row"></div>
//                         <div class="table-row"></div>
//                         <div class="table-row"></div>
//                       </div>`;

//       tableEntitys.innerHTML = replaceHtml;
//     });
// }, 1000);

// общий подсчет по параметрам
