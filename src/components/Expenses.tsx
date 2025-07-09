import imgExpenses from '../images/expenses.png'
import IncomeExpenseForm from './IncomeExpenseForm'
import { useRef, useEffect } from 'react'
import type { ExpenseFormProps } from '../types/type'
import { Trash2 } from 'lucide-react'

const Expenses = ({
	formExpenses,
	onChange,
	onSubmit,
	errors,
	count,
	expenseHistory,
	handleDelete,
}: ExpenseFormProps) => {
	const historyRef = useRef<HTMLDivElement | null>(null)

	const scrollToHistory = () => {
		historyRef.current?.scrollIntoView({ behavior: 'smooth' })
	}

	useEffect(() => {
		if (window.location.hash === '#history') {
			setTimeout(() => {
				historyRef.current?.scrollIntoView({ behavior: 'smooth' })
			}, 100)
		}
	}, [])

	console.log(formExpenses, errors)

	const isDisabled =
		['name', 'amount', 'date'].some(key => formExpenses[key] === '') || Object.values(errors).some(err => err !== '')

	return (
		<main className='bg-gray-100 min-h-screen py-8'>
			<div className='container mx-auto px-6 space-y-8'>
				<div>
					<h1 className='text-2xl font-bold text-gray-800 mb-1'>Expenses</h1>
					<p className='text-gray-600 text-sm'>Here's a summary of your financial status.</p>
				</div>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
					<div className='bg-white rounded-2xl shadow-md p-8 text-center'>
						<h2 className='text-lg font-semibold text-gray-700 mb-2'>Total Expenses</h2>
						<p className='text-3xl font-bold text-red-600 mb-4'>€{count}</p>
						<button onClick={scrollToHistory} className='text-sm text-blue-600 hover:underline'>
							View details
						</button>
					</div>

					<div className='bg-white rounded-2xl shadow-md p-4 h-64 flex items-center justify-center'>
						<img src={imgExpenses} />
					</div>
				</div>
				<IncomeExpenseForm
					formData={formExpenses}
					errors={errors}
					onChange={onChange}
					onSubmit={onSubmit}
					isDisabled={isDisabled}
					formType='expense'
				/>

				{expenseHistory.map(expense => (
					<div key={expense.id} className='relative bg-gray-50 rounded-xl shadow p-6'>
						<button
							onClick={() => handleDelete(expense.id!)}
							className='absolute top-2 right-2 text-gray-400 hover:text-red-600'
							aria-label='Delete income'>
							<Trash2 size={18} />
						</button>

						<h4 className='text-lg font-bold text-gray-800 mb-1'>{expense.name}</h4>
						<p className='text-red-600 font-semibold mb-1'> - €{expense.amount}</p>
						<p className='text-gray-400 text-sm'>Date: {expense.date}</p>
					</div>
				))}
			</div>
		</main>
	)
}

export default Expenses
