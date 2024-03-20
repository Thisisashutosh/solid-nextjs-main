import React from "react";

const index = () => {
  return (
    <div>
      <div className="cardcontainer w-90 p-5 md:w-5/12 md:p-0 lg:w-4/12">
        <ul id="cards">
          <li className="card" id="card1">
            <div className="card-body">
              <h2>Card 1</h2>
            </div>
          </li>
          <li className="card" id="card2">
            <div className="card-body">
              <h2>Card 2</h2>
            </div>
          </li>
          <li className="card" id="card3">
            <div className="card-body">
              <h2>Card 3</h2>
            </div>
          </li>
          <li className="card" id="card4">
            <div className="card-body">
              <h2>Card 4</h2>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default index;
