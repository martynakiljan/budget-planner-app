export type FieldValues = {
	id?: string
	name: string
	amount: string
	date: string
	[key: string]: string | undefined
}

export type IncomeFormProps = {
	formIncomes: FieldValues
	errors: FieldValues
	incomeHistory: FieldValues[]
	count: number
	onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
	handleDelete: (id: string) => void
}

export type ExpenseFormProps = {
	formExpenses: FieldValues
	errors: FieldValues
	expenseHistory: FieldValues[]
	count: number
	onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
	handleDelete: (id: string) => void
}

export type DashboardProps = {
	count: {
		income: number
		expense: number
	}
	incomeHistory: { [key: string]: string }[]
	expenseHistory: { [key: string]: string }[]
}
