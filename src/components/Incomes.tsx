import imgIncome from '../images/income.png'
import type { IncomeFormProps } from '../types/type'
import { useRef, useEffect } from 'react'
import IncomeExpenseForm from './IncomeExpenseForm'
import { Trash2 } from 'lucide-react'

const Incomes = ({ formIncomes, onChange, onSubmit, errors, count, incomeHistory, handleDelete }: IncomeFormProps) => {
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
		['name', 'amount', 'date'].some(key => formIncomes[key] === '') || Object.values(errors).some(err => err !== '')

	return (
		<main className='bg-gray-100 min-h-screen py-8'>
			<div className='container mx-auto px-6 space-y-8'>
				<div>
					<h1 className='text-2xl font-bold text-gray-800 mb-1'>Incomes</h1>
					<p className='text-gray-600 text-sm'>Here's a summary of your financial status.</p>
				</div>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
					<div className='bg-white rounded-2xl shadow-md p-8 text-center'>
						<h2 className='text-lg font-semibold text-gray-700 mb-2'>Total Income</h2>
						<p className='text-3xl font-bold text-green-600 mb-4'>{count} $ </p>
						<button onClick={scrollToHistory} className='text-sm text-blue-600 hover:underline'>
							View details
						</button>
					</div>
					<div className='bg-white rounded-2xl shadow-md p-4 h-64 flex items-center justify-center'>
						<img src={imgIncome} />
					</div>
				</div>
				<IncomeExpenseForm
					formData={formIncomes}
					errors={errors}
					onChange={onChange}
					onSubmit={onSubmit}
					isDisabled={isDisabled}
					formType='income'
				/>

				{incomeHistory.map(income => (
					<div key={income.id} className='relative bg-gray-50 rounded-xl shadow p-6'>
						<button
							onClick={() => handleDelete(income.id!)}
							className='absolute top-2 right-2 text-gray-400 hover:text-red-600'
							aria-label='Delete income'>
							<Trash2 size={18} />
						</button>

						<h4 className='text-lg font-bold text-gray-800 mb-1'>{income.name}</h4>
						<p className='text-green-600 font-semibold mb-1'>€{income.amount}</p>
						<p className='text-gray-400 text-sm'>Date: {income.date}</p>
					</div>
				))}
			</div>
		</main>
	)
}

export default Incomes
