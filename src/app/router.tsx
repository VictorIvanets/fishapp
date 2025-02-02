import { createBrowserRouter, Navigate } from 'react-router-dom'
// import Test1 from '../components/test1'
import { StartPage } from '../pages/startpage/index'
import { Login } from '../components/login/index'
import { Register } from '../components/register/index'
import { Suspense } from 'react'
import { PreLoaderGradient } from '../widgets/PreLoader/index'
import { MainPage } from '../pages/mainpage'
import { RequireAuth } from './RequireAuth'
import { MapPage } from '../pages/mappage'
import { SetsPage } from '../pages/setspage'
import { AboutPage } from '../pages/aboutpage'
import { Rules } from '../components/rules'
import { InfoPage } from '../pages/infopage'
import { GaleryPage } from '../pages/galerypage'
import { ChatPage } from '../pages/chat'

export const router = createBrowserRouter(
	[
		{
			path: '/',
			element: (
				<Suspense fallback={<PreLoaderGradient />}>
					<StartPage />
				</Suspense>
			),
			children: [
				{
					path: `login`,
					element: (
						<Suspense fallback={<PreLoaderGradient />}>
							<Login />
						</Suspense>
					),
				},
				{
					path: 'register',
					element: (
						<Suspense fallback={<PreLoaderGradient />}>
							<Register />
						</Suspense>
					),
				},
			],
		},

		{
			path: '/rules',
			element: (
				<Suspense fallback={<PreLoaderGradient />}>
					<Rules />
				</Suspense>
			),
		},

		{
			path: '/main/:login',
			element: (
				<RequireAuth>
					<Suspense fallback={<PreLoaderGradient />}>
						<MainPage />
					</Suspense>
				</RequireAuth>
			),
			children: [
				{ index: true, element: <Navigate to="info" replace /> },

				{
					path: 'info',
					element: <InfoPage />,
				},
				// {
				// 	path: 'chat',
				// 	element: <ChatPage />,
				// },
				{
					path: 'galery',
					element: <GaleryPage />,
				},
				{
					path: 'map',
					element: <MapPage />,
				},
				{
					path: 'sets/:id',
					element: <SetsPage />,
				},
				{
					path: 'about',
					element: <AboutPage />,
				},
			],
		},
		{
			path: 'chat',
			element: (
				<Suspense fallback={<PreLoaderGradient />}>
					<ChatPage />
				</Suspense>
			),
		},
		{
			path: '*',
			element: (
				<Suspense fallback={<PreLoaderGradient />}>
					<StartPage />
				</Suspense>
			),
		},
	],
	{ basename: '/fishapp' },
)
