export const validate = (name: string, value: string): string => {
	switch (name) {
		case 'name':
			return value.trim().length >= 3 ? '' : 'Name must be at least 3 characters long'


		case 'amount': {
			const number = parseFloat(value)
			return number > 0 ? '' : 'Amount must be a number greater than 0'
		}

		case 'date': {
	
			const regex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/
			return regex.test(value) ? '' : 'Date must be in format dd.mm.yyyy'
		}

		default:
			return ''
	}
}
