import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Breadcrumbs from './components/Breadcrumbs'
import Dashboard from './components/Dashboard'
import Incomes from './components/Incomes'
import Expenses from './components/Expenses'
import './styles/custom.scss'
import { useFormManager } from './hooks/useFormManager'

function App() {
	const { formData, errors, onChange, onSubmit, history, count, handleDelete } = useFormManager()

	return (
		<>
			<Header />
			<Breadcrumbs />
			<Routes>
				<Route path='/' element={<Dashboard count={count} incomeHistory={[]} expenseHistory={[]} />} />
				<Route
					path='/dashboard'
					element={<Dashboard count={count} incomeHistory={history.income} expenseHistory={history.expense} />}
				/>
				<Route
					path='/incomes'
					element={
						<Incomes
							count={count.income}
							formIncomes={formData.income}
							errors={errors.income}
							onChange={onChange('income')}
							onSubmit={onSubmit('income')}
							incomeHistory={history.income}
							handleDelete={id => handleDelete('income', id)}
						/>
					}
				/>
				<Route
					path='/expenses'
					element={
						<Expenses
							count={count.expense}
							formExpenses={formData.expense}
							errors={errors.expense}
							onChange={onChange('expense')}
							onSubmit={onSubmit('expense')}
							expenseHistory={history.expense}
							handleDelete={id => handleDelete('expense', id)}
						/>
					}
				/>
			</Routes>
		</>
	)
}

export default App
