// src/components/IncomeExpenseForm.tsx
import React from 'react'
import type { FieldValues } from '../types/type'

type Props = {
	formData: FieldValues
	errors: FieldValues
	onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
	isDisabled: boolean
	formType: 'income' | 'expense'
}

const IncomeExpenseForm = ({ formData, errors, onChange, onSubmit, isDisabled, formType }: Props) => {
	const capitalized = formType.charAt(0).toUpperCase() + formType.slice(1)

	return (
		<div className='bg-white rounded-2xl shadow-md p-8'>
			<h3 className='text-xl font-semibold text-gray-800 mb-6'>Add New {capitalized}</h3>
			<form className='grid grid-cols-1 md:grid-cols-2 gap-6' onSubmit={onSubmit}>
				{/* Name */}
				<div>
					<label className='block text-sm font-medium text-gray-700 mb-1'>Name</label>
					<input
						name='name'
						value={formData.name}
						onChange={onChange}
						type='text'
						placeholder={`${capitalized} Name`}
						className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm'
					/>
					{errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
				</div>


				{/* Amount */}
				<div>
					<label className='block text-sm font-medium text-gray-700 mb-1'>Amount</label>
					<input
						name='amount'
						value={formData.amount}
						onChange={onChange}
						type='number'
						placeholder={`${capitalized} Amount in Euros`}
						className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm'
					/>
					{errors.amount && <p className='text-red-500 text-sm mt-1'>{errors.amount}</p>}
				</div>

				{/* Date */}
				<div>
					<label className='block text-sm font-medium text-gray-700 mb-1'>Date</label>
					<input
						name='date'
						value={formData.date}
						onChange={onChange}
						type='text'
						placeholder='dd.mm.rrrr'
						className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm'
					/>
					{errors.date && <p className='text-red-500 text-sm mt-1'>{errors.date}</p>}
				</div>

				{/* Submit */}
				<button
					type='submit'
					disabled={isDisabled}
					className={`px-6 py-2 rounded-lg text-white ${
						isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
					}`}>
					Add {formType}
				</button>
			</form>


		</div>
	)
}

export default IncomeExpenseForm
