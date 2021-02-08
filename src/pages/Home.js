import React from 'react';
import { Layout } from '../layout';
import { News } from '../components/news';

const Home = () => (
    <Layout>
        <div className='space-y-2'>
            <h1 className='text-2xl'>Limited House</h1>
            <p className='animate-bounce'>stick around</p>
            <br/><br/>
            
            <div>
                <h2 className='text-4xl text-green-800'> Escolha o sítio de notícias</h2>
                <News/>
            </div>
        </div>
    </Layout>
)

export default Home;