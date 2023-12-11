import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counterSlice";
import { reset } from "./redux/counterSlice";

function Couter() {
  //use hook state for geting value from store [useSelector]
  const count = useSelector((state) => state.counterReducer.value);
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center mt-5"
        style={{
          width: "100%",
          height: "100%",
          color: "red",
          fontSize: "50px",
          fontWeight: "bold",
        }}
      >
        Counter App
      </div>
      <div
        className="border rounded p-5 text-center shadow text-center mb-3 mt-5"
        style={{ width: "500px", margin: "auto" }}
      >
        <h1 className="mt-2" style={{ fontSize: "50px", color: "white" }}>
          {count}
        </h1>
        <div>
          <button
            onClick={() => dispatch(increment())}
            className="btn btn-primary"
            style={{ fontWeight: "bold" }}
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="btn btn-danger ms-3"
            style={{ fontWeight: "bold" }}
          >
            Reset
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="btn btn-warning ms-3"
            style={{ fontWeight: "bold" }}
          >
            Decrement
          </button>

          <button
            onClick={() => dispatch(incrementByAmount(5))}
            className="btn btn-success mt-4"
            style={{ fontWeight: "bold" }}
          >
            IncrementBy5
          </button>
        </div>
      </div>
    </>
  );
}

export default Couter;
