import { Link, NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<header className='bg-white shadow-md'>
			<nav className='container mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between py-4 px-4 sm:px-6'>
				<Link to='/' className='flex items-center gap-2 mb-4 sm:mb-0'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='black'
						height='32'
						width='32'
						viewBox='0 0 490.064 490.064'
						className='w-8 h-8'>
						<path d='M332.682,167.764c34.8-32.7,50.7-74.7,57.6-100.7c3.9-14.6,1.6-56.9-41.5-65.6c-21.3-4.3-50.5,1.2-86,12.2 c-11.6,3.6-23.8,3.6-35.4,0c-35.6-11-64.7-16.1-86-12.2c-40.9,7.4-45.4,51-41.5,65.6c6.9,26,22.8,67.9,57.6,100.6 c-57.7,24.5-98.4,83.5-98.4,152.5v149.3c0,10.8,8.3,20.6,19.7,20.6h331.5c11.4,0,19.7-9.7,20.7-20.6v-149.3 C431.082,251.164,390.382,192.164,332.682,167.764z M139.082,55.664c-1-3.7-0.1-11.4,7.5-12c10.9-0.8,31.7-0.8,69.2,10.8 c19.2,5.9,39.4,5.9,58.6,0c37.5-11.6,58.3-12.1,69.2-10.8c10.5,1.2,8.5,8.3,7.5,12c-7.2,26.9-26.2,75.1-73.1,100.1 c-1.5,0-2.9-0.1-4.4-0.1h-57c-1.5,0-2.9,0-4.4,0.1C165.282,130.764,146.282,82.564,139.082,55.664z M390.682,448.964h-291.2 v-128.8c0-67.1,51.8-122.3,117.1-122.3h57c64.2,0,117.1,54.1,117.1,122.3V448.964z' />
						<path d='M245.082,311.464c-8.4,0-15.3-6.9-15.3-15.3s6.9-15.3,15.3-15.3c4.3,0,8.2,1.7,11.2,4.8c5.9,6.3,15.8,6.6,22.1,0.7 c6.3-5.9,6.6-15.8,0.7-22.1c-5.1-5.4-11.4-9.5-18.3-11.9v-6.3c0-8.7-7-15.7-15.7-15.7s-15.7,7-15.7,15.7v6.2 c-18,6.5-31,23.7-31,43.9c0,25.7,20.9,46.7,46.7,46.7c8.4,0,15.3,6.9,15.3,15.3s-6.9,15.3-15.3,15.3c-4.3,0-8.2-1.7-11.2-4.8 c-5.9-6.3-15.8-6.6-22.1-0.7s-6.6,15.8-0.7,22.1c5.1,5.4,11.4,9.5,18.3,11.9v6.3c0,8.7,7,15.7,15.7,15.7s15.7-7,15.7-15.7v-6.2 c18-6.5,31-23.7,31-43.9C291.782,332.364,270.782,311.464,245.082,311.464z' />
					</svg>
					<span className='text-gray-800 text-base sm:text-lg font-semibold leading-tight'>
						Budget planner manager
					</span>
				</Link>

				{/* Menu */}
				<div className='flex flex-col sm:flex-row gap-4 sm:space-x-8'>
					{['Dashboard', 'Incomes', 'Expenses'].map(item => (
						<NavLink
							key={item}
							to={`/${item.toLowerCase()}`}
							className={({ isActive }) =>
								`text-gray-700 font-medium text-sm sm:text-base ${isActive ? 'underline underline-offset-4 color-dark-blue' : ''}`
							}>
							{item}
						</NavLink>
					))}
				</div>
			</nav>
		</header>
	)
}

export default Header
