import React from 'react';
import VideoS from '../../assets/videohome.mp4';
import * as S from './styles';

function Video() {
    return (
        <S.Container>
            <S.Text>
                {/* <a>Hello World</a> */}
            </S.Text>
            <S.Video>
                <video id="videoBanner" className="Video" autoPlay muted loop>
                    <source src={VideoS} type='video/mp4'></source>
                </video>
            </S.Video>
        </S.Container>
    );
}
export default Video;