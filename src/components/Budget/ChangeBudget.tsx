import React, { useState, useContext} from "react";
import { AppContext } from "../../context/AppContext";
const ChangeBudgetForm = () => {
  const {budget,setBudget} = useContext(AppContext);
  const [newBudget,setNewBudget] = useState<number>(budget);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBudget(newBudget);
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="cost">Budget</label>
          <input
            required
            type="text"
            className="form-control"
            id="cost"
            value={newBudget}
            onChange={(e)=>(setNewBudget(e.target.value === "" ? 0 :parseFloat(e.target.value)))}
          ></input>
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default ChangeBudgetForm;
