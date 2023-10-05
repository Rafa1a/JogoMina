const createBoard = (rows: number, columns: number) => {
    return Array(rows)
      .fill(0)
      .map((_, row) => {
        return Array(columns)
          .fill(0)
          .map((_, column) => {
            return {
              row,
              column,
              opened: false,
              flagged: false,
              mined: false,
              exploded: false,
              nearmines: 0,
            };
          });
      });
  };
const spreadmines = (board:any, minesamount:any) =>{
    const rows = board.length
    const columns = board[0].length
    let minesplanted = 0
    while (minesplanted < minesamount) {
        const rowsel = parseInt((Math.random() * rows).toString(),10)
        const columnset = parseInt((Math.random() * columns).toString(),10)
        if(!board[rowsel] [columnset].mined){
            board[rowsel] [columnset].mined=true
            minesplanted++
        }
    }
} 
const creatminedboard = (rows:number, columns:number, minesamount:number) => {
    const board = createBoard(rows, columns)
    spreadmines(board,minesamount)
    return board
}
export {creatminedboard}