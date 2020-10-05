window.onload = function () {
  //所有的框框
  let section = document.querySelectorAll('section');
  //间距
  let margin = 10;
  //求出列数
  let sectionWidth = section[0].offsetWidth;
  let screenWidth = window.innerWidth;
  let cols = parseInt(screenWidth / (sectionWidth + 60));
  //旧列数值
  let oldCols = cols;

  function waterFall() {
    screenWidth = window.innerWidth;
    cols = parseInt(screenWidth / (sectionWidth + 60));
    if (cols !== oldCols) {
      waterFallChange();
    };
  }

  function waterFallChange() {
    //创建一个数组 目的用于存放高度值
    let heightArr = [];
    section.forEach((item, index) => {
      let sectionHeight = item.offsetHeight;
      if (index < cols) {
        heightArr[index] = sectionHeight;
        item.style.position = "relative"
        item.style.top = 0;
        item.style.left = 0;
        item.style.marginTop = margin + 'px';
        item.style.marginLeft = margin + 'px';

      } else {
        //最小高度值
        let minH = Math.min(...heightArr);
        //最小高度索引值
        let mIndex = heightArr.findIndex(item => item == minH);
        item.style.position = "absolute"
        item.style.top = minH + margin + 'px';
        item.style.left = mIndex * sectionWidth == 0 ? mIndex * sectionWidth + 'px' : mIndex * sectionWidth + margin + 'px';
        item.style.marginLeft = margin + 'px';
        item.style.marginTop = margin + 'px';
        //最新最小高度值
        heightArr[mIndex] += sectionHeight + margin;
      }
    })
    oldCols = cols;
  }
  window.onresize = waterFall;

  waterFallChange();
}