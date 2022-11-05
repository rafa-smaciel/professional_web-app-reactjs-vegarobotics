import React from 'react';
import VideoS from '../../assets/videohome.mp4';
import * as S from './styles';

function Video() {
    return (
        <S.Container>
        <video id="videoBanner" className="video-banner" autoPlay muted loop>
           <source src={VideoS} type='video/mp4'></source>
        </video>
        </S.Container>
    );
}
export default Video;