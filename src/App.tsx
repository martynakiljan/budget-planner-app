import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Breadcrumbs from './components/Breadcrumbs'
import Dashboard from './components/Dashboard'
import Incomes from './components/Incomes'
import Expenses from './components/Expenses'
import './styles/custom.scss'
import { useFormManager } from './hooks/useFormManager'

function App() {
	const { formData, errors, onChange, onSubmit, history, count } = useFormManager()

	return (
		<>
			<Header />
			<Breadcrumbs />
			<Routes>
				<Route path='/' element={<Dashboard count={count} />} />
				<Route path='/dashboard' element={<Dashboard count={count} />} />
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
						/>
					}
				/>
			</Routes>
		</>
	)
}

export default App
