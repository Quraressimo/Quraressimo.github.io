// 페이지의 모든 콘텐츠가 로드된 후 스크립트를 실행
document.addEventListener('DOMContentLoaded', function () {

    // HTML에서 id가 'toc-shortcut'인 요소를 찾아서 변수에 저장
    const Shortcut = document.getElementById('shortcut');

    // 윈도우(브라우저 창)에서 스크롤 이벤트가 발생할 때마다 실행될 함수를 등록
    window.addEventListener('scroll', function () {
        // window.scrollY는 사용자가 수직으로 얼마나 스크롤했는지를 픽셀 단위로 나타냄
        // 스크롤한 거리가 200px보다 크면
        if (window.scrollY > 100) {
            // Shortcut 요소의 클래스 목록에 'show'를 추가
            Shortcut.classList.add('show');
        } else {
            // 그렇지 않으면 'show' 클래스를 제거
            Shortcut.classList.remove('show');
        }
    });

});