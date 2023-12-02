import Header from '../components/Header';
function UploadLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="uploadLayoutContent">{children}</div>
        </div>
    );
}
export default UploadLayout;
