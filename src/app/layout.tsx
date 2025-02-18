import type { Metadata } from 'next'
import '@/assets/styles/globals.scss'
import Header from '@/widgets/header/Header'
import Footer from '@/widgets/footer/Footer'
import Provider from '@/features/provider/Provider'
import { ToastContainer } from 'react-toastify'

export const metadata: Metadata = {
	title: 'Behoof - Лучшие цены в интернет-магазинах ',
	description: 'Generated by create next app'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body>
				<Provider>
					<Header />
					<main>{children}</main>
					<Footer />
					<ToastContainer position='top-right' className='toast__custom' />
				</Provider>
			</body>
		</html>
	)
}
