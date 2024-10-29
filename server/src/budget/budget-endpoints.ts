import { getBudget, updateBudgetServer } from "./budget-utils";
import { Request, Response } from 'express';

export function createBudgetEndpoints(app: any, budget: { amount: number }) {
    // Get the budget
    app.get("/budget", (req: Request, res: Response) => {

        getBudget(res, budget.amount);

    });

    // Update the budget
    app.put("/budget", (req: Request, res: Response) => {

        updateBudgetServer(res, req.body, budget);

    });
}