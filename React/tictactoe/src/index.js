import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {

//     render() {
//         return (
//             <button 
//                 className="square" 
//                 onClick={() => this.props.onClick() }
//             > 
//                 {this.props.value}
//             </button>
//         );
//     }
// }

// 函数式组件
function Square(props) {
    return (
        <button
            className="square" 
            onClick={() => props.onClick() }
        > 
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         squares: Array(9).fill(null),
    //         XIsNext: true
    //     }
    // }

    

    renderSquare(i) {
        return (
        <Square 
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />);
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            history:[{
                squares: Array(9).fill(null)
            }],
            XIsNext: true,
            stepNumber: 0, //这个值代表我们当前正在查看哪一项历史记录。
        }
    }

    handleClick(i) {
        /**注意，我们调用了 .slice() 方法创建了 squares 数组的一个副本，而不是直接在现有的数组上进行修改。 */
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        // 如果游戏已经有胜负，或者该空格以及被占用了
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        squares[i] = this.state.XIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            XIsNext: !this.state.XIsNext,
            stepNumber: history.length
        })
    }

    jumpTo(step){
        this.setState({
            stepNumber: step,
            XIsNext: (step % 2) === 0
        })
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        // 
        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });
        // 
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        }
        else {
            status = 'Next player: ' + (this.state.XIsNext ? 'X' : 'O');
        }


        return (
            <div className="game">
                <div className="game-board">
                    <Board 
                        squares={current.squares}
                        onClick={(i) => {this.handleClick(i)}}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);



function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}