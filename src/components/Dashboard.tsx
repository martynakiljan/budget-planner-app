import type { DashboardProps } from '../types/type'
import { Link } from 'react-router-dom'

const Dashboard = ({ count }: DashboardProps) => {
	const total = count.income - count.expense

	return (
		<main className='bg-gray-100 min-h-screen py-8'>
			<div className='container mx-auto px-6'>
				{/* Główny kafelek */}
				<div className='bg-white rounded-2xl shadow-md p-8 text-center max-w-md mx-auto mb-12'>
					<h2 className='text-lg font-semibold text-gray-700 mb-2'>Total</h2>
					<p className='text-3xl font-bold text-gray-900 mb-4'> {total}$</p>
					<button className='text-sm text-blue-600 hover:underline'>View details</button>
				</div>

				{/* Dwa dolne kafelki */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
					{/* Income card */}
					<div className='bg-white rounded-2xl shadow-md p-8'>
						<h3 className='text-xl font-semibold text-gray-800 mb-2'>Incomes</h3>
						<p className='text-2xl font-bold text-green-600 mb-4'> {count.income}$ </p>
						<Link to='/incomes#history' className='text-sm text-blue-600 hover:underline'>
							Add or manage your income
						</Link>
					</div>

					{/* Expense card */}
					<div className='bg-white rounded-2xl shadow-md p-8'>
						<h3 className='text-xl font-semibold text-gray-800 mb-2'>Expenses</h3>
						<p className='text-2xl font-bold text-red-600 mb-4'> {count.expense}$ </p>
						<button className='text-sm text-blue-600 hover:underline'>Add or manage your expenses</button>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Dashboard
