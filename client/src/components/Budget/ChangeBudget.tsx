import React, { useState, useContext} from "react";
import { AppContext } from "../../context/AppContext";
import { updateBudget } from "../../utils/budget-utils"

const ChangeBudgetForm = () => {
  const {budget,setBudget} = useContext(AppContext);
  const [newBudget,setNewBudget] = useState<number>(budget);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await updateBudget(newBudget);
      setBudget(newBudget);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="budget">Budget</label>
          <input
            required
            type="text"
            className="form-control"
            id="budget"
            value={newBudget}
            onChange={(e)=>(setNewBudget(e.target.value === "" ? 0 :parseFloat(e.target.value)))}
          ></input>
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3" data-testid="budget-save-button">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default ChangeBudgetForm;
