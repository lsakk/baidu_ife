//获取节点
const getAllSelect = document.querySelectorAll('#region-select > input');

//设置监听事件
for (let i = 0; i < getAllSelect.length; i++) {
  getAllSelect[i].addEventListener(
    'click',
    function () {
      console.log(getselect(getAllSelect));
    },
    false
  );
}

//获取选中项
function getselect(el) {
  const check_val = [];
  if (el.length == 0) {
    console.log('最少选择一项');
    return;
  }
  for (let i = 0; i < el.length; i++) {
    if (el[i].checked) {
      check_val.push(el[i].value);
    }
  }
  return check_val;
}

//根据select选项获取数据
function getdata() {}

//渲染新的表格
function updata(data) {}
