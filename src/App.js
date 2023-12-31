import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { publicRoute } from './routes';
import { DefaultLayout, UploadLayout } from './components/Layouts';

// public route
function App() {
    return (
        <Router>
            <div className="App">
                {/* 
                <Link to="/">Home Page Link Button</Link>
                <br></br>
                <br></br>
                <Link to="/following">Following Link Button</Link>
                <br></br>
                <br></br>
                <Link to="/explore">Explore Link Button</Link>
                <br></br>
                <br></br>
                <Link to="/upload">Upload Link Button</Link>
                */}
                <Routes>
                    {publicRoute.map(function (value, index) {
                        // note: if name variable layout, it will not recieve default layout
                        // note: have to name variable with capitalize the first letter => Layout
                        //const Layout = value.layout === null ? Fragment : DefaultLayout;

                        //solution 2
                        //note: search cách dùng biến let và const
                        // case dưới, nếu đặt biến là const => k work, sai => phải dùng let, ex: let Layout
                        let Layout = DefaultLayout;
                        if (value.layout === null) {
                            Layout = Fragment;
                        } else if (value.layout) {
                            Layout = value.layout;
                        }

                        //solution 3
                        /*let Layout = DefaultLayout;
                        if (value.layout) {
                            Layout = value.layout;
                        } else if (value.layout === null) {
                            Layout = Fragment;
                        }*/

                        return (
                            <Route
                                key={index}
                                path={value.path}
                                element={
                                    <Layout>
                                        <value.element />
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
