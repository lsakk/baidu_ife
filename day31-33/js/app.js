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
  table.border = '1';
  let tr1 = document.createElement('tr');
  tr1.innerHTML =
    '<th>地区</th><th>商品</th><th>一月份</th><th>二月份</th><th>三月份</th><th>四月份</th><th>五月份</th><th>六月份</th><th>七月份</th><th>八月份</th><th>九月份</th><th>十一月份</th><th>十二月份</th>';
  el.appendChild(table);
  table.appendChild(tr1);

  for (let i = 0; i < data.length; i++) {
    let tr2 = document.createElement('tr');
    for (let j = 0; j < data[i].sale.length; j++) {
      console.log(j);
    }
    table.appendChild(tr2);
  }

  console.log(data);
}
