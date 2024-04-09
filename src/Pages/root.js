import { Outlet} from 'react-router-dom'
import MainNavigation from '../Components/Navigation/MainNavigation';

const RootLayout=()=>{
    return <>
    <MainNavigation/>
    <Outlet/>
    </>
}

export default RootLayout;