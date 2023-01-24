import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProfilPage } from '../../components/ProfilPage/ProfilPage.component';
import { Security } from '../../components/Security/Security';
import { Settings } from '../../components/Settings/Settings.component';

export const Profil = () => {
	return (
		<>
			<Routes>
				<Route index element={<ProfilPage />} />
				<Route path='/security' element={<Security />} />
				<Route path='/settings' element={<Settings />} />
			</Routes>
		</>
	);
};
