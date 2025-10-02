// 페이지의 모든 콘텐츠가 로드된 후 스크립트를 실행
document.addEventListener('DOMContentLoaded', function () {

    // HTML에서 id가 'caution'인 요소를 찾아서 변수에 저장
    const caution = document.getElementById('caution');

    // 3000밀리초(3초) 후에 지정된 함수를 실행
    setTimeout(function () {
        // caution 요소의 클래스 목록에 'hidden'을 추가하여 CSS 애니메이션을 발동시킴
        caution.classList.add('hidden');
    }, 1000); // (시간을 바꾸고 싶으면 이 숫자를 조절)


    // --- 기존 목차 바로가기 스크립트 ---
    // HTML에서 id가 'shortcut'인 요소를 찾아서 변수에 저장
    const shortcut = document.getElementById('shortcut');

    // 윈도우(브라우저 창)에서 스크롤 이벤트가 발생할 때마다 실행될 함수를 등록
    window.addEventListener('scroll', function () {
        // window.scrollY는 사용자가 수직으로 얼마나 스크롤했는지를 픽셀 단위로 나타냄
        // 스크롤한 거리가 200px보다 크면
        if (window.scrollY > 100) {
            // shortcut 요소의 클래스 목록에 'show'를 추가
            shortcut.classList.add('show');
        } else {
            // 그렇지 않으면(스크롤 거리가 200px 이하이면) 'show' 클래스를 제거
            shortcut.classList.remove('show');
        }
    });

});