import { useState } from 'react'
import type { DashboardProps } from '../types/type'
import { Link } from 'react-router-dom'

const Dashboard = ({ count, incomeHistory, expenseHistory }: DashboardProps) => {
	const total = count.income - count.expense
	const [showModal, setShowModal] = useState(false)

	return (
		<main className='bg-gray-100 min-h-screen py-8'>
			<div className='container mx-auto px-6'>
				<div className='bg-white rounded-2xl shadow-md p-8 text-center max-w-md mx-auto mb-12'>
					<h2 className='text-lg font-semibold text-gray-700 mb-2'>Total</h2>
					<p className='text-3xl font-bold text-gray-900 mb-4'>
						{total >= 0 ? '' : '-'}
						{Math.abs(total)}$
					</p>
					<button onClick={() => setShowModal(true)} className='text-sm text-blue-600 hover:underline'>
						View details
					</button>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
					<div className='bg-white rounded-2xl shadow-md p-8'>
						<h3 className='text-xl font-semibold text-gray-800 mb-2'>Incomes</h3>
						<p className='text-2xl font-bold text-green-600 mb-4'>{count.income}$</p>
						<Link to='/incomes#history' className='text-sm text-blue-600 hover:underline'>
							Add or manage your income
						</Link>
					</div>
					<div className='bg-white rounded-2xl shadow-md p-8'>
						<h3 className='text-xl font-semibold text-gray-800 mb-2'>Expenses</h3>
						<p className='text-2xl font-bold text-red-600 mb-4'>{count.expense}$</p>
						<Link to='/expenses#history' className='text-sm text-blue-600 hover:underline'>
							Add or manage your expenses
						</Link>
					</div>
				</div>
			</div>

			{showModal && (
				<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
					<div className='bg-white rounded-2xl p-8 w-full max-w-3xl max-h-[80vh] overflow-y-auto shadow-lg'>
						<h2 className='text-xl font-semibold text-gray-800 mb-4'>All Transactions</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							<div>
								<h3 className='text-lg font-bold text-green-700 mb-2'>Incomes</h3>
								{incomeHistory.length === 0 ? (
									<p className='text-gray-500'>No incomes yet.</p>
								) : (
									incomeHistory.map((item, index) => (
										<div key={index} className='mb-3 border-b pb-2'>
											<p className='text-gray-800 font-semibold'>{item.name}</p>
											<p className='text-sm text-gray-600'>
												€{item.amount} – {item.date}
											</p>
										</div>
									))
								)}
							</div>
							<div>
								<h3 className='text-lg font-bold text-red-700 mb-2'>Expenses</h3>
								{expenseHistory.length === 0 ? (
									<p className='text-gray-500'>No expenses yet.</p>
								) : (
									expenseHistory.map((item, index) => (
										<div key={index} className='mb-3 border-b pb-2'>
											<p className='text-gray-800 font-semibold'>{item.name}</p>
											<p className='text-sm text-gray-600'>
												€{item.amount} – {item.date}
											</p>
										</div>
									))
								)}
							</div>
						</div>
						<div className='mt-6 text-right'>
							<button
								onClick={() => setShowModal(false)}
								className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>
								Close
							</button>
						</div>
					</div>
				</div>
			)}
		</main>
	)
}

export default Dashboard
