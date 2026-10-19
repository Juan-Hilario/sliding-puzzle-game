import { Level } from "../Board";
import "../../styles/Menu.css";

type instructionsProps = {
    levels: Level[] | [];
    closeFunction: () => void;
};

function Instructions({ levels, closeFunction }: instructionsProps) {
    return (
        <>
            <div className="instructions-wrapper">
                <div className="instructions">
                    <div className="instructions-top">
                        {" "}
                        <h2>How to Play</h2>
                        <button onClick={() => closeFunction()}>x</button>
                    </div>
                    <ul style={{ textAlign: "left" }}>
                        <li>
                            The goal of the game is to get the big red square
                            into the bottom center of the board, marked in light
                            gray.
                        </li>
                        <li>
                            {" "}
                            To slide the peices around you can drag them with
                            your mouse to an empty space. A piece will only move
                            if there is enough space for it to move.
                        </li>
                        <li>
                            There are only <strong>{levels.length}</strong>{" "}
                            levels at this point, with many more levels to come.
                            All levels are possible.{" "}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Instructions;
