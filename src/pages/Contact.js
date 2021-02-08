import React from 'react';
import { Layout } from '../layout';

const Contact = () => (
    <Layout>
        <form className='flex flex-col space-y-5 w-1/2 m-auto'>
            <h1 className='text-2xl'>Contact Limited House</h1>
            <div className='flex flex-col text-left'>
            <label>Name:</label>
            <input className='p-2 rounded' type='text'></input>
            </div>
            <div className='flex flex-col text-left'>
            <label>E-mail:</label>
            <input className='p-2 rounded' type='e-mail'></input>
            </div>
            <div className='flex flex-col text-left'>
            <label>Message:</label>
            <textarea className='p-2 rounded h-32'></textarea>
            </div>
        </form>
    </Layout>
)

export default Contact;