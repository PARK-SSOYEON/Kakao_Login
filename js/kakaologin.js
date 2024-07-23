// SDK를 초기화 합니다. 사용할 앱의 JavaScript 키를 설정해야 합니다.
Kakao.init('{key}');

// SDK 초기화 여부를 판단합니다.
console.log(Kakao.isInitialized());

function kakaoLogin() {
  Kakao.Auth.login({
    success: function (response) {
      //로그인 성공 시 토큰 수신하여 저장
      const accessToken = response.access_token;
      console.log('Access Token:', accessToken);

      //사용자 정보 가져오기 위함
      Kakao.API.request({
        url: '/v2/user/me',
        success: function (response) {

          sessionStorage.setItem('profileImage', response.kakao_account.profile.profile_image_url);
          sessionStorage.setItem('nickname', response.properties.nickname);
          sessionStorage.setItem('accessToken', accessToken); // 토큰 저장

          displayUserProfile();
        },
        fail: function (error) {
          console.log(error);
        },
      })
    },
    fail: function (error) {
      console.log(error);
    },
  })
}

function kakaoLogout(){
  if (Kakao.Auth.getAccessToken()) {
    Kakao.API.request({
      url: '/v1/user/unlink',
      success: function (response) {
        console.log(response);
        sessionStorage.removeItem('profileImage');
        sessionStorage.removeItem('nickname');
        sessionStorage.removeItem('accessToken'); // 토큰 삭제

        document.getElementById('userProfile').style.display = 'none';
      },
      fail: function (error) {
        console.log(error);
      },
    })
    Kakao.Auth.setAccessToken(undefined);
  } else {
    alert("Not logged in");
  }
}

function displayUserProfile() {
  const profileImage = sessionStorage.getItem('profileImage');
  const nickname = sessionStorage.getItem('nickname');

  if (profileImage && nickname) {
    document.getElementById('profileImage').src = profileImage;
    document.getElementById('nickname').textContent = nickname;

    document.getElementById('userProfile').style.display = 'block';
  }
}

// 페이지 로드 시 세션 스토리지에 저장된 사용자 정보를 표시
window.onload = function() {
  const accessToken = sessionStorage.getItem('accessToken');
  if (accessToken) {
    Kakao.Auth.setAccessToken(accessToken);
    displayUserProfile();
  }
};
