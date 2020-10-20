import React, { useState } from "react";
import { useSelector } from "react-redux";
import ChipImg from "../images/chip.png";
import VisaImg from "../images/visa.png";
import DiscoverImg from "../images/discover.png";
import MasterImg from "../images/master.png";

const style = {
  borderRadius: "25px",
  background:
    "linear-gradient(90deg, rgba(185,183,214,1) 0%, rgba(198,198,245,1) 41%, rgba(129,234,255,1) 83%)",
  padding: "20px",
  width: "350px",
  height: "200px",
};

const Card = () => {
  const [firstGroupNum, setFirstGroupNum] = useState("xxxx");
  const [secondGroupNum, setSecondGroupNum] = useState("xxxx");
  const [thirdGroupNum, setThirdGroupNum] = useState("xxxx");
  const [fourtGroupNum, setFourtGroupNum] = useState("xxxx");
  const [image, setImage] = useState(VisaImg);

  const userName = useSelector((state) => state.userName);
  const expDate = useSelector((state) => state.expDate);

  const handleChange = (event) => {
    event.preventDefault();
    const cardName = event.target.value.toLowerCase();

    if (cardName === "visa") {
      setImage(VisaImg);
    } else if (cardName === "discover") {
      setImage(DiscoverImg);
    } else {
      setImage(MasterImg);
    }
  };

  return (
    <div>
      <div style={style}>
        <img
          style={{
            marginTop: "30px",
            marginLeft: "10px",
            width: "50px",
            height: "50px",
          }}
          src={ChipImg}
        />
        <img
          style={{
            float: "right",
            width: "50px",
            height: "50px",
          }}
          src={image}
        />
        <div style={{ width: "100%", padding: "1%" }}>
          <div className="row" style={{ paddingLeft: "10%" }}>
            <div className="column" style={{ padding: "5%" }}>
              <b>{firstGroupNum}</b>
            </div>
            <div className="column" style={{ padding: "5%" }}>
              <b>{secondGroupNum}</b>
            </div>
            <div className="column" style={{ padding: "5%" }}>
              <b>{thirdGroupNum}</b>
            </div>
            <div className="column" style={{ padding: "5%" }}>
              <b>{fourtGroupNum}</b>
            </div>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div>
            <div style={{ float: "left" }}>
              <b>{userName}</b>
            </div>
            <div style={{ float: "right" }}>
              <b>{expDate}</b>
            </div>
          </div>
        </div>
      </div>
      <div>
        <select name="list" onChange={handleChange}>
          <option>Visa</option>
          <option>Discover</option>
          <option>Master</option>
        </select>
      </div>
    </div>
  );
};

export default Card;
