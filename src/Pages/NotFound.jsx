import { Helmet } from 'react-helmet-async'
import { NavLink } from 'react-router-dom'

function NotFound() {
  return (
    <div data-aos='fade-down' data-aos-duration='1000' className="text-center py-20">
      <Helmet>
        <title>404 - Not Found</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1 className='text-6xl font-bold text-purple-500 mb-4'>404</h1>
      <p className='text-xl text-neutral-600 dark:text-neutral-400 mb-2'>Not Found</p>
      <p className='text-sm text-neutral-500 dark:text-neutral-500 mb-8'>Sepertinya halaman yang Anda cari tidak ada.</p>
      <NavLink
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 duration-300 text-sm font-medium"
      >
        Kembali ke Beranda
      </NavLink>
    </div>
  )
}

export default NotFound