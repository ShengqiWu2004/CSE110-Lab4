# Test Documentation

## Tests for TritonTrack

### Create an Expense

1. The test inputs the name "Food" and the cost "20" in to the add expense form and clicks save.
2. It validates that the new expense with name "Food" and cost "20" is now in the expense list. It also validates that the remaining is updated to "980" and the total spent so far is updated to "20".

### Delete an Expense

1. The test inputs the name "Food" and the cost "20" in to the add expense form and clicks save. 
2. It clicks the delete button in this expense in the expense list. 
3. It validates that the expense with name "Food" and cost "20" is no longer in the expense list. It also validates that the remaining is updated to "1000" and the total spent so far is updated to "0".

### Change the Budget

1. The test inputs the new budget "2000" in to the change budget form and clicks save.
2. It validates that the budget is updated to "2000".

### Budget Balance Verification

1. The test inputs the name "Food" and the cost "20" in to the add expense form and clicks save.
2. It validates that the equation "Budget = Remaining Balance + Total Expenditure" holds true (1000 = 980 + 20).
3. It inputs the new budget "2000" in to the change budget form and clicks save.
4. It validates that the equation "Budget = Remaining Balance + Total Expenditure" holds true (2000 = 1980 + 20).
5. It clicks the delete button in the expense with the name "Food" and the cost "20" in the expense list. 
6. It validates that the equation "Budget = Remaining Balance + Total Expenditure" holds true (2000 = 2000 + 0).