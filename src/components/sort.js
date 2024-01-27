import { isNumber } from "../utils/common";

// 内部的数字做出排序并且没有重复项目
function getSortNumber(list) {
  //第一步，如何做去壳
  const flatList = list.flat(Infinity);
  // 第二步，如何做去重
  const uniqueList = [...new Set(flatList)];
  //第三步，如何去掉非数字的部分
  const numberList = uniqueList.filter((element) => isNumber(element));
  //第四步，如何做排序
  const sortList = numberList.sort((a, b) => a - b);
  return sortList;
}

export { getSortNumber };
