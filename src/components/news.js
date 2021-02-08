import React from 'react';
import { Noticia, Noticia2, Noticia3 } from './noticia'

const News = () => (
    <div class='inline-flex mt-40'>
        <div class='left-1/4'>
            <Noticia/>
        </div>
        <div class='left-1/2' >
            <Noticia2/>
        </div>
        <div class='right-1/4'>
            <Noticia3/>
        </div>
    </div>
);

export { News, Noticia, Noticia2, Noticia3 };