/**
 * 英数字を漢数字に変換
 * ここでは2桁目までしか制御してない(100とかは対象外)
 * @param  {Number} num 英数字
 * @return {String}     [description]
 */
const convertNumToKanjiNum = (num) => {
  const ten = '十';
  const kannum = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  let strA = '';
  let strB = '';
  const leng = num.length;
  if (leng === 1) {
    return kannum[Number(num)];
  }
  if (leng === 2) {
    if (num.charAt(0) === '1') {
      if (num.charAt(1) === '0') {
        strA = ten;
      } else {
        strA = ten;
        strB = kannum[Number(num.charAt(1))];
      }
    } else if (num.charAt(0) === '0') {
      strA = '';
      strB = kannum[Number(num.charAt(1))];
    } else if (num.charAt(1) === '0') {
      strA = kannum[Number(num.charAt(0))];
      strB = ten;
    } else {
      strA = kannum[Number(num.charAt(0))] + ten;
      strB = kannum[Number(num.charAt(1))];
    }
  }

  return strA + strB;
};

/**
 * 全角半角数字を漢数字に変換します
 * @param  {[type]} text [description]
 * @return {[type]}      [description]
 */
const convertZenkakuHankakuNumToKanjiNum = (text) => {
  const n = text.replace(/[Ａ-Ｚａ-ｚ０-９]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xfee0));
  return convertNumToKanjiNum(n);
};

export default text => text.replace(/[0-9０-９]+/g, x => convertZenkakuHankakuNumToKanjiNum(x));
