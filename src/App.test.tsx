import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

describe("Tests for TritonTrack", () => {
  test("Create an Expense", () => {
    render(<App />);

    const nameInput = screen.getByLabelText("Name");
    const costInput = screen.getByLabelText("Cost");
    const submitButton = screen.getByTestId("expense-save-button");

    fireEvent.change(nameInput,  { target: { value: "Food" } });
    fireEvent.change(costInput,  { target: { value: "20" } });
    fireEvent.click(submitButton);

    const expectName = screen.getByText("Food");
    const expectCost = screen.getByText("$20");

    // Change for Lab 5
    expect(expectName).not.toBeInTheDocument();
    expect(expectCost).toBeInTheDocument();

    const expectRemaining = screen.getByText(/Remaining:\s*\$/);
    const expectExpenseTotal = screen.getByText(/Spent so far:\s*\$/);

    expect(expectRemaining).toHaveTextContent("Remaining: $980");
    expect(expectExpenseTotal).toHaveTextContent("Spent so far: $20");
  });

  test("Delete an Expense", () => {
    render(<App />);
  
    const nameInput = screen.getByLabelText("Name");
    const costInput = screen.getByLabelText("Cost");
    const submitButton = screen.getByTestId("expense-save-button");
  
    fireEvent.change(nameInput,  { target: { value: "Food" } });
    fireEvent.change(costInput,  { target: { value: "20" } });
    fireEvent.click(submitButton);

    const expectName = screen.getByText("Food");
    const expectCost = screen.getByText("$20");

    const deleteButton = screen.getByText("x");
    fireEvent.click(deleteButton);
  
    expect(expectName).not.toBeInTheDocument();
    expect(expectCost).not.toBeInTheDocument();
  
    const expectRemaining = screen.getByText(/Remaining:\s*\$/);
    const expectExpenseTotal = screen.getByText(/Spent so far:\s*\$/);
  
    expect(expectRemaining).toHaveTextContent("Remaining: $1000");
    expect(expectExpenseTotal).toHaveTextContent("Spent so far: $0");
  });

  test("Change the Budget", async () => {
    render(<App />);

    const budgetInput = screen.getByLabelText("Budget");
    const budgetSubmitButton = screen.getByTestId("budget-save-button");
  
    fireEvent.change(budgetInput,  { target: { value: "2000" } });
    fireEvent.click(budgetSubmitButton);

    const expectBudget = screen.getByText(/Budget:\s*\$/);
    expect(expectBudget).toHaveTextContent("Budget: $2000");
  });

  test("Budget Balance Verification", () => {
    render(<App />);
  
    const nameInput = screen.getByLabelText("Name");
    const costInput = screen.getByLabelText("Cost");
    const expenseSubmitButton = screen.getByTestId("expense-save-button");
  
    fireEvent.change(nameInput,  { target: { value: "Food" } });
    fireEvent.change(costInput,  { target: { value: "20" } });
    fireEvent.click(expenseSubmitButton);

    const expectBudget1 = screen.getByText(/Budget:\s*\$/);
    const expectRemaining1 = screen.getByText(/Remaining:\s*\$/);
    const expectExpenseTotal1 = screen.getByText(/Spent so far:\s*\$/);

    expect(expectBudget1).toHaveTextContent("Budget: $1000");
    expect(expectRemaining1).toHaveTextContent("Remaining: $980");
    expect(expectExpenseTotal1).toHaveTextContent("Spent so far: $20");

    const budgetInput = screen.getByLabelText("Budget");
    const budgetSubmitButton = screen.getByTestId("budget-save-button");
  
    fireEvent.change(budgetInput,  { target: { value: "2000" } });
    fireEvent.click(budgetSubmitButton);

    const expectBudget2 = screen.getByText(/Budget:\s*\$/);
    const expectRemaining2 = screen.getByText(/Remaining:\s*\$/);
    const expectExpenseTotal2 = screen.getByText(/Spent so far:\s*\$/);

    expect(expectBudget2).toHaveTextContent("Budget: $2000");
    expect(expectRemaining2).toHaveTextContent("Remaining: $1980");
    expect(expectExpenseTotal2).toHaveTextContent("Spent so far: $20");

    const deleteButton = screen.getByText("x");
    fireEvent.click(deleteButton);
  
    const expectBudget3 = screen.getByText(/Budget:\s*\$/);
    const expectRemaining3 = screen.getByText(/Remaining:\s*\$/);
    const expectExpenseTotal3 = screen.getByText(/Spent so far:\s*\$/);
  
    expect(expectBudget3).toHaveTextContent("Budget: $2000");
    expect(expectRemaining3).toHaveTextContent("Remaining: $2000");
    expect(expectExpenseTotal3).toHaveTextContent("Spent so far: $0");
  });

});