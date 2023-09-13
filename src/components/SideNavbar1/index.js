import {GrDocument} from 'react-icons/gr'
import {AiOutlineSetting,AiOutlineBell} from 'react-icons/ai'
import {BsPersonCircle} from 'react-icons/bs'
import './index.css'

const SideNavbar1 = () => (
    <div className='sideNavbarContainer'>
        
        <GrDocument className='docImg' />
        
        <div className='footerContainer'>
            < AiOutlineSetting className='docImg'/>
            <AiOutlineBell className='docImg' />
            <BsPersonCircle className='docImg' />
            
        </div>
    </div>
)
export default SideNavbar1

