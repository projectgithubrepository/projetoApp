import React from 'react';

const Noticia = (props) => (
    <a href='http://globo.com'><img className='hover:transform max-w-xs' src='https://logospng.org/download/rede-globo/logo-rede-globo-azul-2048.png'/></a>
);

const Noticia2 = (props) => (
    <a href='http://globo.com'><img className='hover:transform w-80' src='//upload.wikimedia.org/wikipedia/pt/thumb/4/41/Logotipo_do_SBT.svg/150px-Logotipo_do_SBT.svg.png'/></a>
);

const Noticia3 = (props) => (
    <a href='http://globo.com'><img className='hover:transform max-w-xs' src='https://upload.wikimedia.org/wikipedia/pt/1/13/Logotipo_da_Rede_Record.png'/></a>
);
export { Noticia, Noticia2, Noticia3};