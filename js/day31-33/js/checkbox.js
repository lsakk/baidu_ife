//创建表格选项
const checkboxDiv1 = document.querySelector('#region-radio-wrapper');

let checkboxOption1 = [
  {
    value: 1,
    text: '华东',
  },
  {
    value: 2,
    text: '华南',
  },
  {
    value: 3,
    text: '华北',
  },
];
let checkboxOption2 = [
  {
    value: 1,
    text: '手机',
  },
  {
    value: 2,
    text: '笔记本',
  },
  {
    value: 3,
    text: '智能音箱',
  },
];

//使用textContent，这样可以防止xss攻击。
function generate(checkboxDiv, checkboxOption) {
  let span1 = document.createElement('span');
  checkboxDiv.appendChild(span1);
  span1.textContent = '全选:';
  let inputAll = document.createElement('input');
  span1.appendChild(inputAll);
  inputAll.setAttribute('checkbox-type', 'all');
  inputAll.setAttribute('what', '全选');
  inputAll.type = 'checkbox';
  //循环生成选项框

  //定义
  let input, customA, span;
  for (let i = 0; i < checkboxOption.length; i++) {
    span = document.createElement('span');
    checkboxDiv.appendChild(span);
    input = document.createElement('input');
    span.innerHTML = '&nbsp&nbsp&nbsp' + checkboxOption[i]['text'] + ':';
    span.appendChild(input);
    input.setAttribute('checkbox-type', 'one');
    input.setAttribute('what', checkboxOption[i]['text']);
    input.type = 'checkbox';
  }

  let inputC = input;
  inputC.checked = true;
  checkboxDiv.addEventListener(
    'click',
    e => {
      let source = e.target;
      if (source.type == 'checkbox') {
        customA = source.getAttribute('checkbox-type');
      }
    },
    false
  );
}
generate(checkboxDiv1, checkboxOption1);
