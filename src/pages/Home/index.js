import classNames from 'classnames/bind';
import styles from './Home.module.scss';
let scm = classNames.bind(styles);
function Home() {
    return (
        <div className={scm('homepage')}>
            {/* 
                <h2>Home page component</h2>
                <video width="386" height="686" controls>
                    <source
                        src="https://ia800207.us.archive.org/15/items/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
                        type="video/mp4"
                    />
                </video>
                <div>
                <video width="386" height="686" controls autoplay>
                    <source
                        //src="https://ia800207.us.archive.org/15/items/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
                        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>

            <div>
                <iframe
                    autoplay="true"
                    width="386"
                    height="686"
                    src="https://www.youtube.com/embed/LCyo565N_5w?si=0ALlJVVw9J1NknVx"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    style={{ borderRadius: 16 + 'px' }}
                ></iframe>
            </div>
            <div>
                <iframe
                    width="386"
                    height="686"
                    src="https://www.youtube.com/embed/LCyo565N_5w?si=0ALlJVVw9J1NknVx"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    style={{ borderRadius: 16 + 'px' }}
                ></iframe>
            </div>
            */}

            <div>
                <iframe
                    autoPlay={true}
                    width="386"
                    height="686"
                    src="https://www.youtube.com/embed/LCyo565N_5w?si=0ALlJVVw9J1NknVx"
                    title="YouTube video player"
                    //frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    //referrerpolicy="strict-origin-when-cross-origin"
                    //allowfullscreen
                    style={{ borderRadius: 16 + 'px' }}
                ></iframe>
            </div>
            <div>
                <iframe
                    autoPlay
                    width="386"
                    height="686"
                    src="https://www.youtube.com/embed/LCyo565N_5w?si=0ALlJVVw9J1NknVx"
                    title="YouTube video player"
                    //frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    //referrerpolicy="strict-origin-when-cross-origin"
                    //allowfullscreen
                    style={{ borderRadius: 16 + 'px' }}
                ></iframe>
            </div>
        </div>
    );
}

export default Home;
