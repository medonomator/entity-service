// Сперва раскрасить по дефолту ячейки

const tableEntitys = document.querySelector('.table-entitys');

setInterval(() => {
  fetch('http://localhost:5000/entitys/getAll')
    .then((res) => Promise.resolve(res.json()))
    .then((res) => {
      let replaceHtml = '';
      Object.keys(res).forEach((entity) => {
        replaceHtml += `<div class="table-column">`;
        replaceHtml += `<div class="table-row table-row-name">${entity}</div>`;
        Object.keys(res[entity]).forEach((parameter) => {
          replaceHtml += `<div class="table-row">${res[entity][parameter]}</div>`;
        });
        replaceHtml += `</div>`;
      });

      replaceHtml += `<div class="table-column">
                        <div class="table-row table-row-name">Итого:</div>
                        <div class="table-row"></div>
                        <div class="table-row"></div>
                        <div class="table-row"></div>
                        <div class="table-row"></div>
                        <div class="table-row"></div>
                        <div class="table-row"></div>
                        <div class="table-row"></div>
                        <div class="table-row"></div>
                        <div class="table-row"></div>
                        <div class="table-row"></div>
                        <div class="table-row"></div>
                        <div class="table-row"></div>
                        <div class="table-row"></div>
                        <div class="table-row"></div>
                        <div class="table-row"></div>
                        <div class="table-row"></div>
                        <div class="table-row"></div>
                        <div class="table-row"></div>
                        <div class="table-row"></div>
                        <div class="table-row"></div>
                      </div>`;

      tableEntitys.innerHTML = replaceHtml;
    });
}, 1000);

// общий подсчет по параметрам
