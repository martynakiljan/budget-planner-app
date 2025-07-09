
import React from 'react'
import type { FieldValues } from '../types/type'
import DatePicker from 'react-datepicker'

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


				<div>
					<label className='block text-sm font-medium text-gray-700 mb-1'>Date</label>
					<DatePicker
						selected={formData.date ? new Date(formData.date.split('.').reverse().join('-')) : null}
						onChange={(date: Date | null) => {
							if (!date) return
							const formatted = date.toLocaleDateString('pl-PL')
							onChange({ target: { name: 'date', value: formatted } } as React.ChangeEvent<HTMLInputElement>)
						}}
						dateFormat='dd.MM.yyyy'
						className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm'
						showPopperArrow
						placeholderText='Wybierz datę'
						isClearable
					/>
				</div>
				<div></div>

		
				<div className='col-span-1 md:col-span-2'>
					<button
						type='submit'
						disabled={isDisabled}
						className={`w-full px-6 py-2 rounded-lg text-white ${
							isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
						}`}>
						Add {formType}
					</button>
				</div>
			</form>
		</div>
	)
}

export default IncomeExpenseForm
