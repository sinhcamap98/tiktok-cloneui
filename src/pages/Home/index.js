//import Video from '../../assets/video';
import CtctlVideo from '../../assets/video/chungtacuahientai.mp4';
import Ctctl2Video from '../../assets/video/chungtacuahientai2.mp4';
import Ccyld1Video from '../../assets/video/cochacyeuladay1.mp4';
import Ccyld2Video from '../../assets/video/cochacyeuladay2.mp4';
import Ccyld3Video from '../../assets/video/cochacyeuladay3.mp4';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
let scm = classNames.bind(styles);

function Home() {
    return (
        <div className={scm('homepage')}>
            {/* 
                <h2>Home page component</h2>
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
                        src="https://v16-webapp-prime.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/ooCs0iCYyAnZPAFBnEFEB3gH3aiQA2hYVyDEI/?a=1988&bti=NDU3ZjAwOg%3D%3D&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=428&bt=214&cs=2&ds=6&ft=I~da4oTzD12NvGURthIxRmvNglBF-UjNS3opiX&mime_type=video_mp4&qs=11&rc=NDloaTU5aDczPGg2aTQ1NUBpMzdwO2w5cjNndTMzODczNEA2YzFhXjFhNjUxYC5fMWAtYSNgYjVtMmQ0aS1gLS1kMTFzcw%3D%3D&btag=e00090000&expire=1726282118&l=20240912024717E77C1A57F444A9282698&ply_type=2&policy=2&signature=8cac50cb27b54b0ae639a029a7af5e2f&tk=tt_chain_token"
                        title="YouTube video player"
                        //frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        //referrerpolicy="strict-origin-when-cross-origin"
                        //allowfullscreen
                        style={{ borderRadius: 16 + 'px' }}
                    ></iframe>
                </div>

                <video src={CtctlVideo} controls autoplay className={scm('content-video')} />
            */}
            {}

            <div>
                <video
                    src={CtctlVideo}
                    controls
                    loop
                    className={scm('content-video')}
                    id="CtctlVideoId"
                    autoPlay
                    muted
                />
            </div>
            <div>
                <video src={Ctctl2Video} controls autoplay className={scm('content-video')} />
            </div>
            <div>
                <video src={Ccyld1Video} controls autoplay className={scm('content-video')} />
            </div>
            <div>
                <video src={Ccyld2Video} controls autoplay className={scm('content-video')} />
            </div>
            <div>
                <video src={Ccyld3Video} controls autoplay className={scm('content-video')} />
            </div>
        </div>
    );
}

export default Home;
