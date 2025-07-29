import '@styles/Error.css';
import FourZeroFour from '@components/error/FourZeroFour.jsx';
import Oops from '@components/error/Oops.jsx';
import BackToHome from '@components/error/BackToHome.jsx';

function Error() {
    return(
        <div className="errors">
            <FourZeroFour />
            <Oops />
            <BackToHome />
        </div>
    )
}

export default Error;