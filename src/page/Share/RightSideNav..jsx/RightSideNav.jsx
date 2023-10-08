import {FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter} from 'react-icons/fa'
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'


const RightSideNav = () => {
    return (
        <div className=''>
            <h2 className='text-3xl ml-3'>Login With</h2>
           <div className='p-4  space-y-3 mb-6'>
            
            <button className= 'btn btn-outline w-full '>
              <FaGoogle></FaGoogle>
             Google
            </button>
           
            <button className= 'btn btn-outline w-full'>
              <FaGithub></FaGithub>
               Github
            </button>
           
           </div> 
           <div className='p-4  mb-6'>
            <h2 className="text-3xl">Find Us On</h2>
            <a className='p-4  flex text-lg items-center   border rounded-t-lg'>
                <FaFacebook className='mr-2'></FaFacebook>
                Facebook
            </a>
            <a className='p-4  flex text-lg items-center   border '>
                <FaTwitter className='mr-2'></FaTwitter>
                Twitter
            </a>
            <a className='p-4  flex text-lg items-center   border rounded-b-lg'>
                <FaInstagram className='mr-2'></FaInstagram>
                Instagram
            </a>
          </div>
          {/* q zone */}
          
            
           <div className='p-4  space-y-3 mb-6'>
            <h2 className='text-3xl ml-3'>Q zone</h2>
           <img src={qZone1} alt="" />
           <img src={qZone2} alt="" />
           <img src={qZone3} alt="" />
           
           </div> 
        </div>
    );
};

export default RightSideNav;