// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [status, setStatus] = useState();

  const [char, setChar] = useState(true);
  const [char1, setChar1] = useState();
  const [char2, setChar2] = useState();
  const [char3, setChar3] = useState();
  const [char4, setChar4] = useState();
  const [char5, setChar5] = useState();
  const [char6, setChar6] = useState();
  const [char7, setChar7] = useState();
  const [char8, setChar8] = useState();
  const [char9, setChar9] = useState();

  const checkWin = () => {
    if (
      (char1 === "x" && char2 === "x" && char3 === "x") ||
      (char4 === "x" && char5 === "x" && char6 === "x") ||
      (char7 === "x" && char8 === "x" && char9 === "x") ||
      (char1 === "x" && char4 === "x" && char7 === "x") ||
      (char2 === "x" && char5 === "x" && char8 === "x") ||
      (char3 === "x" && char6 === "x" && char9 === "x") ||
      (char1 === "x" && char5 === "x" && char9 === "x") ||
      (char3 === "x" && char5 === "x" && char7 === "x")
    ) {
      setStatus("x is win");
    } else if (
      (char1 === "o" && char2 === "o" && char3 === "o") ||
      (char4 === "o" && char5 === "o" && char6 === "o") ||
      (char7 === "o" && char8 === "o" && char9 === "o") ||
      (char1 === "o" && char4 === "o" && char7 === "o") ||
      (char2 === "o" && char5 === "o" && char8 === "o") ||
      (char3 === "o" && char6 === "o" && char9 === "o") ||
      (char1 === "o" && char5 === "o" && char9 === "o") ||
      (char3 === "o" && char5 === "o" && char7 === "o")
    ) {
      setStatus("o is win");
    } else if (
      char1 &&
      char2 &&
      char3 &&
      char4 &&
      char5 &&
      char6 &&
      char7 &&
      char8 &&
      char9
    ) {
      setStatus("Match Draw");
    }
  };

  const restartGame = () => {
    setChar(true);
    setStatus();
    setChar1();
    setChar2();
    setChar3();
    setChar4();
    setChar5();
    setChar6();
    setChar7();
    setChar8();
    setChar9();
  };

  useEffect(() => {
    checkWin();
  }, [char1, char2, char3, char4, char5, char6, char7, char8, char9]);

  const changeChar1 = () => {
    if (char) {
      setChar1("x");
      setChar(false);
    } else {
      setChar1("o");
      setChar(true);
    }
  };

  const changeChar2 = () => {
    if (char) {
      setChar2("x");
      setChar(false);
    } else {
      setChar2("o");
      setChar(true);
    }
  };

  const changeChar3 = () => {
    if (char) {
      setChar3("x");
      setChar(false);
    } else {
      setChar3("o");
      setChar(true);
    }
  };

  const changeChar4 = () => {
    if (char) {
      setChar4("x");
      setChar(false);
    } else {
      setChar4("o");
      setChar(true);
    }
  };

  const changeChar5 = () => {
    if (char) {
      setChar5("x");
      setChar(false);
    } else {
      setChar5("o");
      setChar(true);
    }
  };

  const changeChar6 = () => {
    if (char) {
      setChar6("x");
      setChar(false);
    } else {
      setChar6("o");
      setChar(true);
    }
  };

  const changeChar7 = () => {
    if (char) {
      setChar7("x");
      setChar(false);
    } else {
      setChar7("o");
      setChar(true);
    }
  };

  const changeChar8 = () => {
    if (char) {
      setChar8("x");
      setChar(false);
    } else {
      setChar8("o");
      setChar(true);
    }
  };
  const changeChar9 = () => {
    if (char) {
      setChar9("x");
      setChar(false);
    } else {
      setChar9("o");
      setChar(true);
    }
  };

  return (
    <div className="bg-gray-50 h-[100vh] w-full flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-1">Tic Tac Toe</h2>
      {status ? (
        <p className="font-medium flex gap-3 mb-4">
          <span>{status}</span>
          <span>|</span>
          <span className="cursor-pointer text-sky-400" onClick={restartGame}>
            Restart Game
          </span>
        </p>
      ) : (
        <p className="text-gray-500 mb-2">Please start</p>
      )}
      <div className="select-none w-72 h-72 border grid grid-rows-3">
        <div className="grid grid-cols-3">
          <button
            disabled={(char1 && true) || (status && true)}
            onClick={changeChar1}
            className="border flex items-center justify-center hover:bg-gray-200 cursor-pointer"
          >
            {char1}
          </button>
          <button
            disabled={(char2 && true) || (status && true)}
            onClick={changeChar2}
            className="border flex items-center justify-center hover:bg-gray-200 cursor-pointer"
          >
            {char2}
          </button>
          <button
            disabled={(char3 && true) || (status && true)}
            onClick={changeChar3}
            className="border flex items-center justify-center hover:bg-gray-200 cursor-pointer"
          >
            {char3}
          </button>
        </div>
        <div className="grid grid-cols-3">
          <button
            disabled={(char4 && true) || (status && true)}
            onClick={changeChar4}
            className="border flex items-center justify-center hover:bg-gray-200 cursor-pointer"
          >
            {char4}
          </button>
          <button
            disabled={(char5 && true) || (status && true)}
            onClick={changeChar5}
            className="border flex items-center justify-center hover:bg-gray-200 cursor-pointer"
          >
            {char5}
          </button>
          <button
            disabled={(char6 && true) || (status && true)}
            onClick={changeChar6}
            className="border flex items-center justify-center hover:bg-gray-200 cursor-pointer"
          >
            {char6}
          </button>
        </div>
        <div className="grid grid-cols-3">
          <button
            disabled={(char7 && true) || (status && true)}
            onClick={changeChar7}
            className="border flex items-center justify-center hover:bg-gray-200 cursor-pointer"
          >
            {char7}
          </button>
          <button
            disabled={(char8 && true) || (status && true)}
            onClick={changeChar8}
            className="border flex items-center justify-center hover:bg-gray-200 cursor-pointer"
          >
            {char8}
          </button>
          <button
            disabled={(char9 && true) || (status && true)}
            onClick={changeChar9}
            className="border flex items-center justify-center hover:bg-gray-200 cursor-pointer"
          >
            {char9}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
