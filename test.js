function evaluateTicTacToePosition(position) {
  // fill up array
  let subArr = [];
  const array = position.reduce((acc, val) => {
    subArr = Array.from(val, (item) => item || 'Y');
    if (subArr.length !== 3) subArr.push('Y');
    return [...acc, subArr];
  }, []);
  let isEqual = false;
  let result ;
  // columns
  const columns = array
    .reduce((cols, _, idx) => [...cols, array.reduce((acc, val) => [...acc, val[idx]], [])], [])
  const leftDiagonal = array
    .reduce((ld, _, i, arr) => [...ld, arr[i][i]], [])
  const rightDiagonal = array.reverse()
    .reduce((rd, _, i, arr) => [...rd, arr[i][i]], [])
  // console.log(array);
  // console.log(columns);
  // console.log(leftDiagonal);
  // console.log(rightDiagonal);

  const checkArray = array.concat(columns).concat([leftDiagonal,rightDiagonal])
  // console.log(checkArray)
  checkArray.some((e) => {
    isEqual = e.every((val, _, arr) => { if (val === arr[0]) return true; return false; });
    if (isEqual) {
      result = e[0] !== 'Y' ? e[0] : result ;
      return result;
    };
    // console.log(isEqual);
  });
  return result;
}

const m1 = [['X', 'X', 'X'],['O', 'O'], ['O', , ,]]
// const m1 = [[ 'X',   ,'0' ],[    ,'X','0' ],[    ,   ,'X' ]]
// const m1 = [['0', '0', '0'], [, 'X',], ['X', , 'X']]
// const m1 = [[ '0','X','0' ],[    ,'X',    ], [ 'X','0','X' ]]
// const m1 = [[    ,   ,    ],[    ,   ,    ],[    ,   ,    ]]
console.log(evaluateTicTacToePosition(m1))
