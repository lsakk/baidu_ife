var checkboxDiv1 = document.querySelector('#region-radio-wrapper');
var checkboxDiv2 = document.querySelector('#product-radio-wrapper');
var checkboxOption1 = [
  {
    value: 1,
    text: '华东',
  },
  {
    value: 2,
    text: '华北',
  },
  {
    value: 3,
    text: '华南',
  },
];
var checkboxOption2 = [
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
//还有另一种方法：容器innerHTML = 生成好的html集合。
//我直接用的textContent，这样可以防止xss攻击。
function generate(checkboxDiv, checkboxOption) {
  var span1 = document.createElement('span');
  checkboxDiv.appendChild(span1);
  var inputAll = document.createElement('input');
  span1.textContent = '全选：';
  span1.appendChild(inputAll);
  inputAll.setAttribute('checkbox-type', 'all');
  inputAll.setAttribute('what', '全选');
  inputAll.type = 'checkbox';
  for (i = 0; i < checkboxOption.length; i++) {
    var span = document.createElement('span');
    checkboxDiv.appendChild(span);
    var input = document.createElement('input');
    span.innerHTML = '&nbsp&nbsp&nbsp' + checkboxOption[i]['text'] + '：';
    span.appendChild(input);
    input.setAttribute('checkbox-type', 'one');
    input.setAttribute('what', checkboxOption[i]['text']);
    input.type = 'checkbox';
  }

  var inputC = input;
  inputC.checked = true;

  checkboxDiv.onclick = function (e) {
    var source = e.target;
    if (source.type == 'checkbox') {
      var customA = source.getAttribute('checkbox-type');
      var input2 = source.parentNode.parentNode
        .querySelector('span:nth-of-type(2)')
        .querySelector('input');
      var input3 = source.parentNode.parentNode
        .querySelector('span:nth-of-type(3)')
        .querySelector('input');
      var input4 = source.parentNode.parentNode
        .querySelector('span:nth-of-type(4)')
        .querySelector('input');
      if (customA == 'all') {
        if (source.checked == true) {
          if (
            //有一个不是true
            input2.checked != true ||
            input3.checked != true ||
            input4.checked != true
          ) {
            source.checked = true;
            input2.checked = true;
            input3.checked = true;
            input4.checked = true;
          }
        } else {
          e.preventDefault(); //也可以用source.checked = true;
        }
      } else {
        if (
          //全是true
          input2.checked == true &&
          input3.checked == true &&
          input4.checked == true
        ) {
          inputAll.checked = true;
        }
        if (inputAll.checked == true) {
          if (
            input2.checked != true ||
            input3.checked != true ||
            input4.checked != true
          ) {
            inputAll.checked = false;
          }
        }
        if (
          input2.checked == false &&
          input3.checked == false &&
          input4.checked == false
        ) {
          e.preventDefault(); //也可以用source.checked = true;
        }
      }
    }
  };
}
generate(checkboxDiv1, checkboxOption1);
generate(checkboxDiv2, checkboxOption2);
