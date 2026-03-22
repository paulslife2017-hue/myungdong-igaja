# 이가자 명동 미용실 웹사이트

명동의 프리미엄 헤어살롱 & 헤드스파 전문점 공식 웹사이트

## 🚀 Vercel 배포 방법

### 1. GitHub 리포지토리 준비
```bash
# 이미 GitHub에 push되어 있는 경우 이 단계는 생략
git add .
git commit -m "feat: Vercel 배포를 위한 로컬 이미지 및 설정 추가"
git push origin main
```

### 2. Vercel 배포

#### 방법 A: Vercel Dashboard (추천)
1. [Vercel](https://vercel.com)에 로그인
2. "New Project" 클릭
3. GitHub 리포지토리 import
4. 프로젝트 설정:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (기본값)
   - **Build Command**: 비워두기 (정적 사이트)
   - **Output Directory**: `./` (기본값)
5. "Deploy" 클릭

#### 방법 B: Vercel CLI
```bash
# Vercel CLI 설치 (처음 한 번만)
npm i -g vercel

# 로그인
vercel login

# 배포
vercel --prod
```

### 3. 커스텀 도메인 설정 (선택사항)
1. Vercel Dashboard → 프로젝트 선택
2. Settings → Domains
3. 도메인 추가 및 DNS 설정

## 🎨 주요 기능

- ✅ 다국어 지원 (한국어, 영어, 일본어)
- ✅ 모바일 최적화 UI/UX
- ✅ 포트폴리오 갤러리 (12개 이미지, 카테고리별 필터링)
- ✅ 플로팅 연락 버튼 (WhatsApp, LINE)
- ✅ 하단 모바일 네비게이션
- ✅ Google Maps 통합 (다국어)
- ✅ SEO 최적화

## 📁 프로젝트 구조

```
webapp/
├── index.html              # 메인 HTML
├── styles.css             # 스타일시트
├── script.js              # JavaScript
├── translations-complete.js # 다국어 번역
├── images/
│   └── gallery/           # 갤러리 이미지 (12개)
│       ├── headspa-1.jpg
│       ├── headspa-2.jpg
│       ├── headspa-3.jpg
│       ├── cut-1.jpg
│       ├── cut-2.jpg
│       ├── cut-3.jpg
│       ├── color-1.jpg
│       ├── color-2.jpg
│       ├── color-3.jpg
│       ├── perm-1.jpg
│       ├── perm-2.jpg
│       └── perm-3.jpg
├── vercel.json            # Vercel 설정
└── README.md              # 이 파일
```

## 📱 연락처

- **전화**: +82-10-5894-7690
- **WhatsApp**: +82-10-5894-7690
- **LINE**: @leekaja
- **주소**: 서울 중구 명동8길 27, 5층

## 🛠️ 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Hosting**: Vercel
- **Version Control**: Git, GitHub
- **Images**: AI-generated with Nano-Banana Pro

## 📝 라이선스

© 2024 LEEKAJA Hair Myeongdong. All rights reserved.
