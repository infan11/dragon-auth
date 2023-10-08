
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const BreakingNews = () => {
    return (
        <div className='flex '>
            <button className=' bg-purple-600 w-40 p-3 text-white font-Poppins rounded-l-lg'>  Breaking News</button>
        <Marquee className='bg-white rounded-r-lg  text-black' pauseOnHover={true } speed={50}>
        <Link className='mr-12' to='/'>I can be a React component, multiple React components, or just some text.</Link>
        <Link className='mr-12' to='/'>I can be a React component, multiple React components, or just some text.</Link>
        <Link className='mr-12' to='/'>I can be a React component, multiple React components, or just some text.</Link>
        </Marquee>
        </div>
    );
};

export default BreakingNews;