# KAKAO LOGIN

카카오 API를 활용하여 사용자 로그인 기능을 구현한 간단한 프로그램입니다.

## 목차

1. [파일 구조 (File Structure)](#파일-구조-file-structure)
2. [예시 (Screenshot)](#예시-screenshot)
3. [기능 (Features)](#기능-features)
4. [설치 (Installation)](#설치-installation)
5. [실행 (Usage)](#실행-usage)

## 파일 구조 (File Structure)
```bash
project-root/
├── css/
│    └── style.css
├── js/
│    └── kakaologin.js
├── index.html
└── README.md
```

## 예시 (Screenshot)

<img src="img/kakaologin_screenshot.gif" width="1080" height=auto/>

## 기능 (Features)
1. 카카오 로그인 버튼을 클릭하면 카카오 로그인 및 동의 창으로 연결됩니다.
2. 로그인 성공 시 토큰을 수신하여 콘솔창에 표시합니다.
3. 수신한 토큰으로 사용자 정보를 조회하여 세션에 저장합니다.
4. 사용자 프로필 사진과 닉네임을 화면에 표시합니다.
5. 로그아웃 버튼을 클릭하면 로그아웃됩니다.

   
## 설치 (Installation)
```bash
git clone https://github.com/PARK-SSOYEON/Kakao_Login.git
cd Kakao_Login

Kakao.init('{key}'); //key 부분에 개인키 넣기
```

## 실행 (Usage)
```bash
//카카오 디벨로퍼스에 등록한 사이트 도메인으로 연결되도록 자유롭게 실행하면 됩니다.
```
