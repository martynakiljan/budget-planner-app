import { useState } from 'react'
import { validate } from '../helpers/validate'
import type { FieldValues } from '../types/type'

export const useFormManager = () => {
	const [formData, setFormData] = useState<Record<string, FieldValues>>({
		income: { name: '', amount: '', date: '' },
		expense: { name: '',  amount: '', date: '' },
	})

	const [errors, setErrors] = useState<Record<string, FieldValues>>({
		income: { name: '',  amount: '', date: '' },
		expense: { name: '',  amount: '', date: '' },
	})

	const [history, setHistory] = useState<Record<string, FieldValues[]>>({
		income: [],
		expense: [],
	})

	const [count, setCount] = useState<Record<string, number>>({
		income: 0,
		expense: 0,
	})

	const onChange = (type: 'income' | 'expense') => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[type]: {
				...prev[type],
				[name]: value,
			},
		}))

		setErrors(prev => ({
			...prev,
			[type]: {
				...prev[type],
				[name]: validate(name, value),
			},
		}))
	}

	const onSubmit = (type: 'income' | 'expense') => (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const current = formData[type]

		const newErrors: FieldValues = Object.keys(current).reduce((acc, key) => {
			acc[key] = validate(key, current[key])
			return acc
		}, {} as FieldValues)

		setErrors(prev => ({ ...prev, [type]: newErrors }))

		const hasErrors = Object.values(newErrors).some(err => err !== '')
		const numericAmount = parseFloat(current.amount)

		if (!hasErrors && !isNaN(numericAmount)) {
			setCount(prev => ({ ...prev, [type]: prev[type] + numericAmount }))
			setHistory(prev => ({ ...prev, [type]: [...prev[type], current] }))
			setFormData(prev => ({
				...prev,
				[type]: Object.fromEntries(Object.keys(current).map(key => [key, ''])),
			}))
		}
	}

	return {
		formData,
		errors,
		onChange,
		onSubmit,
		history,
		count,
	}
}
