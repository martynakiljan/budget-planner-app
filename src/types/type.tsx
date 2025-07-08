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
	onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export type DashboardProps = {
	count: {
		income: number
		expense: number
	}
	incomeHistory: { [key: string]: string }[]
	expenseHistory: { [key: string]: string }[]
}
