import { useState } from 'react'
import { validate } from '../helpers/validate'
import type { FieldValues } from '../types/type'

export const useFormManager = () => {
	const [formData, setFormData] = useState<Record<string, FieldValues>>({
		income: { id: '', name: '', amount: '', date: '' },
		expense: { id: '', name: '', amount: '', date: '' },
	})

	const [errors, setErrors] = useState<Record<string, FieldValues>>({
		income: { id: '', name: '', amount: '', date: '' },
		expense: { id: '', name: '', amount: '', date: '' },
	})

	const [history, setHistory] = useState<Record<string, FieldValues[]>>({
		income: [],
		expense: [],
	})

	const [count, setCount] = useState<{ income: number; expense: number }>({
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

		const newErrors: FieldValues = {
			name: validate('name', current.name),
			amount: validate('amount', current.amount),
			date: validate('date', current.date),
			id: '',
		}

		const hasErrors = Object.values(newErrors).some(err => err !== '')
		if (hasErrors) {
			setErrors(prev => ({ ...prev, [type]: newErrors }))
			return
		}

		const numericAmount = parseFloat(current.amount)
		if (isNaN(numericAmount)) return

		const newEntry = {
			...current,
			id: crypto.randomUUID(),
		}

		setCount(prev => ({ ...prev, [type]: prev[type] + numericAmount }))
		setHistory(prev => ({ ...prev, [type]: [...prev[type], newEntry] }))
		setFormData(prev => ({
			...prev,
			[type]: { name: '', amount: '', date: '', id: '' },
		}))
		setErrors(prev => ({
			...prev,
			[type]: { id: '', name: '', amount: '', date: '' },
		}))
	}

	const handleDelete = (type: 'income' | 'expense', idToDelete: string) => {
		const entry = history[type].find(i => i.id === idToDelete)
		if (!entry) return

		const amount = parseFloat(entry.amount)
		if (isNaN(amount)) return

		setHistory(prev => ({
			...prev,
			[type]: prev[type].filter(i => i.id !== idToDelete),
		}))

		setCount(prev => ({
			...prev,
			[type]: prev[type] - amount,
		}))
	}

	return {
		formData,
		errors,
		onChange,
		onSubmit,
		history,
		count,
		handleDelete,
	}
}
