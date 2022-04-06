import React from "react";
import { Form } from "react-bootstrap";
import moment from "moment";

function DatepickerComponent(props) {
  const {  setSearchDate } = props;
  return (
    <div>
      <div className="row">
        <div >
          <Form.Group controlId="search_date">
            <Form.Label>Select Date</Form.Label>
            <Form.Control
              type="date"
              name="search_date"
              min="2010-01-01"
              max={moment().format("YYYY-MM-DD")}
              placeholder="Date for Photo"
              defaultValue={moment().format("YYYY-MM-DD")}
              onChange={(e) =>{
                setSearchDate(moment(e.target.value).format("YYYY-MM-DD"))

              }
              }
            />
          </Form.Group>
        </div>
      </div>
    </div>
  );
}

export default DatepickerComponent;
