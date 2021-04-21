window.onload = function () {
  //获取节点
  const getAllSelect = document.querySelector('#region-radio-wrapper');
  getdata(getAllSelect, sourceData);
  getAllSelect.addEventListener(
    'click',
    e => {
      let inputAll = document.querySelectorAll(
        '#region-radio-wrapper > span> input'
      );
      //判断是否选中元素
      if (e.target.type != 'checkbox') {
        return 0;
      }

      let inputArr = [];
      for (let i = 0; i < inputAll.length; i++) {
        if (inputAll[i].checked == true) {
          inputArr.push(inputAll[i].value);
        }
      }
      updata(getdata(inputArr, sourceData));
    },
    false
  );
};
//根据checkbox选项获取选中项，同时获取所有数据进行排序
function getdata(data, sourceData) {
  let arrs = [];
  //如果数组不为空，使用选项框的value作为筛选条件
  if (data.length != 0) {
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < sourceData.length; j++) {
        if (sourceData[j].region == data[i]) {
          arrs.push(sourceData[j]);
        }
      }
    }
  }
  //返回筛选后的数据
  return arrs;
}

//渲染新的表格
function updata(data) {
  console.log(data);
  let thHeader = new Array();
  if (data.length != 0) {
    for (let i = 0; i < data.length; i++) {
     
    }
  }

  let th = document.createElement('th');
}
