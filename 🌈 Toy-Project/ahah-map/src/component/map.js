import React, {useEffect} from 'react';

const {kakao} = window;

const KakaoMap = () => {
    const style = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    useEffect(()=>{
        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        const options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };
        const map = new kakao.maps.Map(container, options)
    }, [])

    return(
        <div id="map" style={style}>
        </div>
    )
}

export default KakaoMap;