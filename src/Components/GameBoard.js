import React, {useState} from "react";
import "../Game.css"
import Header from "./Header";
import Footer from "./Footer";
import Circles from "./Circles";
import {isWinner,isDraw} from "../Helper"
import {gameStatePlaying,
    Player1,
    Player2,
    noPlayer,
    gameStateIdle,
    gameStateDraw,
    gameStateWin,
} from "../Constants";
import { useEffect } from "react";


const GameBoard = () => {

    const [gameBoardState, updateGameBoardState] = useState(Array(16).fill(noPlayer));
    const [currentPlayer, setCurrentPlayer] = useState(Player1);
    const [gameState, setGameState] = useState(gameStatePlaying);
    const [winPlayer,setWinPlayer] = useState(noPlayer);

    console.log(gameBoardState);

    useEffect(() =>{
        initBoard();
    },[]);
    
    
    
    const initBoard = () => { 
        setCurrentPlayer(Player1);
        updateGameBoardState(Array(16).fill(noPlayer));
    }

 


    const clicked = (id) => {

        if (gameState !== gameStatePlaying) return ;
 



        if ( gameBoardState[id] === 0) {
        gameBoardState[id] = currentPlayer;

        updateGameBoardState(gameBoardState);

        if(isWinner(gameBoardState, id, currentPlayer)){
            setGameState(gameStateWin);
            setWinPlayer(currentPlayer);
        }

        if( isDraw (gameBoardState, id, currentPlayer)){
            setGameState(gameStateDraw);
            setWinPlayer(noPlayer);
        }

        setCurrentPlayer(currentPlayer === Player1 ? Player2 : Player1);

        console.log(gameBoardState);

   

        }
    
    }


    const renderCircle=(id) =>{
        return <Circles id={id} className={`player${gameBoardState[id]}`} ClickingCircle={clicked}/>
    }




    return (

    <>  
    <Header gameState={gameState} currentPlayer={currentPlayer} winPlayer={winPlayer}/>
    
    <div className = 'GameBoard'>
        {renderCircle(0)}
        {renderCircle(1)}
        {renderCircle(2)}
        {renderCircle(3)}
        {renderCircle(4)}
        {renderCircle(5)}
        {renderCircle(6)}
        {renderCircle(7)}
        {renderCircle(8)}
        {renderCircle(9)}
        {renderCircle(10)}
        {renderCircle(11)}
        {renderCircle(12)}
        {renderCircle(13)}
        {renderCircle(14)}
        {renderCircle(15)}
        </div>
        <Footer onClickEvent={initBoard}/>
        </> 
        )
}

export default GameBoard