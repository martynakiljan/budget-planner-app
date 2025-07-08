import imgIncome from '../images/income.png'
import type { FormProps } from '../types/type'
import { useRef, useState, useEffect } from 'react'
import IncomeExpenseForm from './IncomeExpenseForm'

const Incomes = ({ formIncomes, onChange, onSubmit, errors, count, incomeHistory }: FormProps) => {
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

	const [search, setSearch] = useState('')

	const isDisabled = Object.values(formIncomes).some(val => val === '') || Object.values(errors).some(err => err !== '')

	return (
		<main className='bg-gray-100 min-h-screen py-8'>
			<div className='container mx-auto px-6 space-y-8'>
				{/* Tytuł i opis */}
				<div>
					<h1 className='text-2xl font-bold text-gray-800 mb-1'>Incomes</h1>
					<p className='text-gray-600 text-sm'>Here's a summary of your financial status.</p>
				</div>

				{/* Pole szukania */}
				<div className='max-w-md'>
					<label className='block text-sm font-medium text-gray-700 mb-1'>Search</label>
					<input
						type='text'
						placeholder='Search incomes...'
						value={search}
						onChange={e => setSearch(e.target.value)}
						className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>
				</div>

				{/* Total income i wykres */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
					{/* Total Income card */}
					<div className='bg-white rounded-2xl shadow-md p-8 text-center'>
						<h2 className='text-lg font-semibold text-gray-700 mb-2'>Total Income</h2>
						<p className='text-3xl font-bold text-green-600 mb-4'>{count} $ </p>
						<button onClick={scrollToHistory} className='text-sm text-blue-600 hover:underline'>
							View details
						</button>
					</div>

					{/* Placeholder na wykres */}
					<div className='bg-white rounded-2xl shadow-md p-4 h-64 flex items-center justify-center'>
						<img src={imgIncome} />
					</div>
				</div>

				{/* Formularz dodawania dochodu */}
				<div className='bg-white rounded-2xl shadow-md p-8'>
					<h3 className='text-xl font-semibold text-gray-800 mb-6'>Add New Income</h3>
					<IncomeExpenseForm
						formData={formIncomes}
						errors={errors}
						onChange={onChange}
						onSubmit={onSubmit}
						isDisabled={isDisabled}
						formType='income'
					/>

					<div className='mt-8'>
						<button className='px-6 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-600'>Export to Excel</button>
					</div>
				</div>
				<div className='mt-12'>
					<h3 className='text-xl font-semibold text-gray-800 mb-4' ref={historyRef}>
						History:
					</h3>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{incomeHistory.length === 0 ? (
							<p className='text-gray-500'>No incomes yet.</p>
						) : (
							incomeHistory.map((income, index) => (
								<div key={index} className='bg-white rounded-xl shadow p-6'>
									<h4 className='text-lg font-bold text-gray-800 mb-1'>{income.name}</h4>
					
									<p className='text-green-600 font-semibold mb-1'>€{income.amount}</p>
									<p className='text-gray-400 text-sm'>Date: {income.date}</p>
								</div>
							))
						)}
					</div>
				</div>
			</div>
		</main>
	)
}

export default Incomes
