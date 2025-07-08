import { Link, useLocation } from 'react-router-dom'

const Breadcrumbs = () => {
	const location = useLocation()
	const paths = location.pathname.split('/').filter(Boolean)

	const crumbs = paths.map((segment, index) => {
		const url = '/' + paths.slice(0, index + 1).join('/')

		return (
			<span key={url} className='flex items-center gap-1 capitalize'>
				<span>/</span>
				<Link to={url} className='text-[#0077b6] hover:text-[#023e8a] hover:underline'>
					{segment}
				</Link>
			</span>
		)
	})

	return (
		<div className='bg-white/60 py-4'>
			<nav className='container mx-auto px-6 flex items-center space-x-1 text-[#03045e]'>
				<Link to='/' className='hover:underline font-medium'>
					Home
				</Link>
				{crumbs}
			</nav>
		</div>
	)
}

export default Breadcrumbs
