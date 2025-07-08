import imgExpenses from '../images/expenses.png'
import IncomeExpenseForm from './IncomeExpenseForm'
import { useRef, useState, useEffect } from 'react'
import type { FormProps } from '../types/type'

const Expenses = ({ formExpenses, onChange, onSubmit, errors, count, expenseHistory }: FormProps) => {
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

	const isDisabled =
		Object.values(formExpenses).some(val => val === '') || Object.values(errors).some(err => err !== '')

	return (
		<main className='bg-gray-100 min-h-screen py-8'>
			<div className='container mx-auto px-6 space-y-8'>
				{/* Tytuł i opis */}
				<div>
					<h1 className='text-2xl font-bold text-gray-800 mb-1'>Expenses</h1>
					<p className='text-gray-600 text-sm'>Here's a summary of your financial status.</p>
				</div>

				{/* Total expenses i wykres */}
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

				{/* Formularz */}
				<div className='bg-white rounded-2xl shadow-md p-8'>
					<h3 className='text-xl font-semibold text-gray-800 mb-6'>Add New Expense</h3>
					<IncomeExpenseForm
						formData={formExpenses}
						errors={errors}
						onChange={onChange}
						onSubmit={onSubmit}
						isDisabled={isDisabled}
						formType='expense'
					/>
				</div>

				{/* Historia */}
				<div className='mt-12'>
		
					<div className='bg-white rounded-2xl shadow-md p-8 mt-12'>
						<h3 className='text-xl font-semibold text-gray-800 mb-6' ref={historyRef}>
							History:
						</h3>
						{expenseHistory.length === 0 ? (
							<p className='text-gray-500'>No incomes yet.</p>
						) : (
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
								{expenseHistory.map((expense, index) => (
									<div key={index} className='bg-gray-50 rounded-xl shadow p-6'>
										<h4 className='text-lg font-bold text-gray-800 mb-1'>{expense.name}</h4>
										<p className='text-green-600 font-semibold mb-1'>€{expense.amount}</p>
										<p className='text-gray-400 text-sm'>Date: {expense.date}</p>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</main>
	)
}

export default Expenses
