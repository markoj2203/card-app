import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Card from "./Card";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const CardData = () => {
  const [startDate, setStartDate] = useState(new Date());

  const dispatch = useDispatch();

  const changeName = (e) => {
    dispatch({ type: "USERNAME", payload: e.target.value });
  };

  return (
    <div className="ui equal width form">
      <div className="control-group">
        <div className="row">
          <div className="column">
            <Card />
          </div>
        </div>
      </div>

      <div className="control-group">
        <label className="control-label">Name</label>
        <div className="row">
          <div className="column">
            <input
              type="text"
              placeholder="Please type name..."
              onChange={changeName}
            />
          </div>
        </div>
      </div>
      <div className="control-group">
        <label className="control-label">Card Number</label>
        <div className="row">
          <div className="column p-1">
            <input
              style={{ width: "80%" }}
              type="text"
              className="input-block-level"
              autoComplete="off"
              maxLength="4"
              pattern="\d{4}"
              title="First four digits"
              required
            />
          </div>
          <div className="column p-1">
            <input
              style={{ width: "80%" }}
              type="text"
              className="input-block-level"
              autoComplete="off"
              maxLength="4"
              pattern="\d{4}"
              title="Second four digits"
              required
            />
          </div>
          <div className="column p-1">
            <input
              style={{ width: "80%" }}
              type="text"
              className="input-block-level"
              autoComplete="off"
              maxLength="4"
              pattern="\d{4}"
              title="Third four digits"
              required
            />
          </div>
          <div className="column p-1">
            <input
              style={{ width: "80%" }}
              type="text"
              className="input-block-level"
              autoComplete="off"
              maxLength="4"
              pattern="\d{4}"
              title="Fourth four digits"
              required
            />
          </div>
        </div>
      </div>
      <div class="control-group">
        <label class="control-label">Card Expiry Date</label>
        <div class="controls">
          <div class="row-fluid">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>
      </div>

      <div class="control-group">
        <div class="controls">
          <div class="row-fluid">
            <button
              style={{ float: "right" }}
              type="button"
              class="btn btn-primary"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardData;
