import { useState } from "react";

interface Expense {
  name: string;
  amount: number | "";
}

function ExpenseTracker() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState<number | "">("");
  const [expenses, setExpenses] = useState<Expense[]>([]);
  return (
    <>
      <div className="flex flex-col items-center w-full h-full justify-evenly">
        <div className="flex flex-col gap-4">
          <h1>Expense Tracker</h1>
          {/* Inputting 2 values here Name of expense and amount */}
          <form
            action=""
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              // Add expense
              if (name && amount) {
                setExpenses([...expenses, { name, amount }]);
                setName("");
                setAmount("");
              }
            }}
          >
            <input
              placeholder="Name of Expense"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-3 text-md"
            />
            <input
              placeholder="Amount of Expense"
              value={Number.isNaN(amount) ? "" : amount.toString()}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              className="p-3 text-md"
            />

            <button
              type="submit"
              className="p-4 bg-teal-400 text-white font-bold"
            >
              Add Expense
            </button>
          </form>
        </div>
        <div>
          {/* Show a list of expenses in table format */}

          <table className="border-2 divide-y-4 text-xl">
            <thead>
              <tr className="divide-x-2 grid gap-2 w-full grid-cols-2 place-items-center">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y-2">
              {expenses.map((expense, id) => {
                return (
                  <tr
                    key={`${expense.name}-${expense.amount}-${id}`}
                    className="divide-x-2 grid gap-2 w-full grid-cols-2 "
                  >
                    <td>{expense.name}</td>
                    <td>{expense.amount} </td>
                  </tr>
                );
              })}
              <tr className="divide-x-2 grid gap-2 w-full grid-cols-2">
                <td>TOTAL</td>
                <td>
                  {expenses.reduce((acc, curr) => acc + (curr.amount || 0), 0)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ExpenseTracker;
