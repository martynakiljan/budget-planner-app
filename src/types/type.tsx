export type FieldValues = {
	[key: string]: string
}

export type FormProps = {
	formIncomes: FieldValues
	formExpenses: FieldValues
	errors: FieldValues
	incomeHistory: FieldValues[]
	expenseHistory: FieldValues[]
	count: number
	onChange: (type: 'income' | 'expense') => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
	onSubmit: (type: 'income' | 'expense') => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export type DashboardProps = {
	count: {
		income: number
		expense: number
	}
}