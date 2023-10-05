
interface BoardCell {
  row: number;
  column: number;
  opened: boolean;
  flagged: boolean;
  mined: boolean;
  exploded: boolean;
  nearmines: number;
}

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

const cloneboard = (board: any) => {
  return board.map((rows:any) => {
    return rows.map((field:any) => {
      return {...field}
    })
  })
}
const getneighbors = (board:any, row:number, column:number) => {
  const neighbors: any[] = [];
  const rows = [row - 1, row, row + 1];
  const columns = [column - 1, column, column + 1];
  rows.forEach(r => {
    columns.forEach(c => {
      const diferent = r !== row || c !== column;
      const validrow = r >= 0 && r < board.length;
      const valicolumn = c >= 0 && c < board[0].length; // Correção aqui
      if (diferent && validrow && valicolumn) {
        // console.debug('')
        neighbors.push(board[r][c]);
      }
    });
  });
  return neighbors;
};

const salveneighborhood =  (board:any, row:number, column:number) =>{
  return getneighbors(board, row, column).filter((neighbor:any) => !neighbor.mined);
}

const opoenfield = (board: any, row: number, column: number) => {
  const field = board[row][column];

  if (!field.opened) {
    field.opened = true;
    if (field.mined) {
      field.exploded = true;
    } else if (salveneighborhood(board, row, column)) {
      getneighbors(board, row, column).forEach((n) => opoenfield(board, n.row, n.column)); // Aqui ocorre a recursão
    } else {
      const negihbors = getneighbors(board, row, column);
      field.nearmines = negihbors.filter((n) => n.mined).length;
    }
  }
};




const fields = (board: BoardCell[][]) => ([] as BoardCell[]).concat(...board);

const hadexplosion = (board: BoardCell[][]) =>
  fields(board).filter((field) => field.exploded).length > 0;

const pendding = (field: BoardCell) => (field.mined && !field.flagged) || (!field.mined && field.opened)
const wongame = (board: BoardCell[][]) => fields(board).filter(pendding).length===0

const showmines =  (board: BoardCell[][]) => fields(board).filter(field => field.mined).forEach(field => field.opened =true)

export {
  creatminedboard,
  cloneboard,
  opoenfield,
  hadexplosion,
  wongame,
  showmines
}