//获取节点
const getAllSelect = document.querySelector('#region-radio-wrapper');

//监听事件
getAllSelect.addEventListener(
  'click',
  e => {
    let el = e.target || window.event;
    if (el.nodeName === 'INPUT') {
      updata(getdata());
    }
  },
  false
);

//根据checkbox选项获取选中项，同时获取所有数据进行排序
function getdata() {
  let arrs = Array();
  //获取节点，循环判断
  let el = document.querySelectorAll('#region-radio-wrapper input');
  for (let index = 0; index < el.length; index++) {
    if (el[index].checked && el[index].value == sourceData[index].region) {
      arrs.push(sourceData[index]);
    }
  }
  return arrs;
}

//渲染新的表格
function updata(data) {
  //获取表格包裹div节点
  let el = document.querySelector('#table-wrapper');
  //每次更新数据的时候先清空表单中的所有内容
  el.innerHTML = '';
  let table = document.createElement('table');
  let tr = document.createElement('tr');
  tr.innerHTML =
    '<td>地区</td><td>商品</td><td>一月份</td><td>二月份</td><td>三月份</td><td>四月份</td>';
  el.appendChild(table);
  table.appendChild(tr);
}
