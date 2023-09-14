import SideNavbar1 from '../SideNavbar1'
import SideBar2 from '../SideBar2'
import MainCard from '../MainCard'
import './index.css'

const OuterCard = () => (
    <div className='outerCardContainer'>
        <SideNavbar1 />
        <SideBar2 />
        <MainCard />
    </div>
)

export default OuterCard