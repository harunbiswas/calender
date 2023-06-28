import { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import CalenderItem from "./CalenderItem";

export default function Calender() {
  const [firstMon, setFirstMon] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  });
  const [lasttMon, setLastMon] = useState({
    year: new Date().getFullYear(),
    month: firstMon.month + 1,
  });

  const [selectDate, setSelectDate] = useState([]);
  const selectHandler = (e) => {
    setSelectDate((prev) => {
      if (prev.length === 0) {
        return [e];
      } else if (prev.length === 1) {
        if (prev[0] < e) {
          return [...prev, e];
        } else {
          return [e, ...prev];
        }
      } else if (prev.length === 2) {
        if (prev[1] > e) {
          return [e];
        } else {
          prev.pop();
          if (prev[0] < e) {
            return [...prev, e];
          } else {
            return [e, ...prev];
          }
        }
      }
    });
  };

  const firstArrow = () => {
    setFirstMon((prev) => {
      return { ...prev, month: prev.month - 1 };
    });
    setLastMon((prev) => {
      return { ...prev, month: prev.month - 1 };
    });
  };
  const lastArrow = () => {
    setFirstMon((prev) => {
      return { ...prev, month: prev.month + 1 };
    });
    setLastMon((prev) => {
      return { ...prev, month: prev.month + 1 };
    });
  };

  const submitHandler = () => {
    const data = {
      start: new Date(selectDate[0]),
      end: new Date(selectDate[1]),
    };
    console.log(data);
  };

  const [screenW, setScreenW] = useState(window.innerWidth);
  useEffect(() => {
    setScreenW(window.innerWidth);
  }, [screenW]);

  return (
    <div className="calender-wrp">
      <div className="calender">
        <div className="calender-head">
          <a href="#">check in</a>
          <strong>Select Date: 10 to 12</strong>
        </div>
        <div className="calender-body">
          <div className="arrow-btns">
            <button onClick={firstArrow}>
              <BsArrowLeft />
            </button>
            <button onClick={lastArrow}>
              <BsArrowRight />
            </button>
          </div>
          <CalenderItem
            data={firstMon}
            select={{ selectDate, handler: selectHandler }}
          />
          {screenW > 600 && (
            <CalenderItem
              data={lasttMon}
              select={{ selectDate, handler: selectHandler }}
            />
          )}
        </div>
        <div className="calender-footer">
          <div className="calender-footer-color">
            <div>
              <span className="cheap"></span> <p>Cheap = $48</p>
            </div>
            <div>
              <span className="medium"></span> <p>Medium = $56</p>
            </div>
            <div>
              <span className="expensive"></span> <p>Expensive = $84</p>
            </div>
          </div>
          <div className="calender-footer-btns">
            <button className="cancel">Cancel</button>
            <button onClick={submitHandler} className="success">
              Cera le offerte!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
