import Header from '../components/Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div>
                <Sidebar></Sidebar>
                <div className="defaultLayoutContainer">
                    <h1 className="defaultLayoutContent">{children}</h1>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
