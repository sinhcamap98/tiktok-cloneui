import HomePage from '../pages/Home';
import Following from '../pages/Following';
import Explore from '../pages/Explore';
import UpLoad from '../pages/Upload';
import { UploadLayout } from '../components/Layouts';
// public route
const publicRoute = [
    { path: '/', element: HomePage },
    //{ path: '/following', element: Following },
    //{ path: '/@:nickname', element: Following },
    //{ path: '/:testnickname', element: Following },
    { path: '/:testnickname', element: Following },
    { path: '/explore', element: Explore, layout: null },
    { path: '/upload', element: UpLoad, layout: UploadLayout },
    //{ path: '/upload', element: UpLoad, layout: null },
];

// private route
const privateRoute = [];

export { publicRoute, privateRoute };
