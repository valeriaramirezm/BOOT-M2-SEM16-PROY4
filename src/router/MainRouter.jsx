import { Routes, Route } from 'react-router-dom';
import { Inicio, NuestroMenu, Blog, Contacto, Error404, } from '../pages';

export const MainRouter = () => {

    return (
        <Routes>
            <Route path='/' element={<Inicio />}/>
            <Route path='NuestroMenu' element={<NuestroMenu />} />
            <Route path='Blog' element={<Blog />} />
            <Route path='Contacto' element={<Contacto />} />
            <Route path='*' element={<Error404 />} />
        </Routes>
    )

}

