# 배포 가이드 - LEEKAJA Myeongdong Hair Salon Website

## 🚀 배포 준비사항

### 1. 필수 수정 사항

#### 연락처 정보 업데이트
파일: `index.html`

```html
<!-- 전화번호 -->
+82-2-123-4567 → 실제 전화번호로 변경

<!-- WhatsApp -->
+82-10-1234-5678 → 실제 WhatsApp 번호로 변경

<!-- 이메일 -->
info@leekaja-myeongdong.com → 실제 이메일로 변경

<!-- KakaoTalk ID -->
leekajamd → 실제 카카오톡 ID로 변경
```

#### 주소 정보 업데이트
```html
<!-- 주소 -->
서울특별시 중구 명동8길 27, 5층 → 실제 주소로 변경

<!-- 구글맵 좌표 -->
위도: 37.5636 → 실제 위도
경도: 126.9838 → 실제 경도
```

#### 소셜 미디어 링크
```html
<!-- Instagram, Facebook, YouTube 링크 -->
href="#" → 실제 소셜 미디어 URL로 변경
```

#### 지도 Embed 코드
```html
<!-- Google Maps iframe src -->
실제 구글맵 임베드 URL로 변경

<!-- Naver Map, Kakao Map 링크 -->
실제 지도 링크로 변경
```

### 2. 이미지 교체

#### 필요한 이미지 파일
```
/images/
├── hero-banner.webp (1920x800px)
├── og-image.jpg (1200x630px)
├── twitter-image.jpg (1200x600px)
├── salon-front.jpg (800x600px)
├── headspa-room.jpg (800x600px)
├── styling-area.jpg (800x600px)
├── favicon.png (512x512px)
└── apple-touch-icon.png (180x180px)
```

#### 갤러리 이미지
```
/images/gallery/
├── headspa-1.jpg
├── headspa-2.jpg
├── cut-1.jpg
├── cut-2.jpg
├── color-1.jpg
├── color-2.jpg
├── perm-1.jpg
└── perm-2.jpg
```

## 🌐 도메인 설정

### 권장 도메인
- leekaja-myeongdong.com
- leekajamd.com
- 이가자명동.com

### DNS 설정
```
A Record: @ → 서버 IP
CNAME: www → leekaja-myeongdong.com
```

## 📦 호스팅 옵션

### Option 1: Netlify (추천 - 무료)

#### 단계별 배포
```bash
# 1. Netlify CLI 설치
npm install -g netlify-cli

# 2. Netlify 로그인
netlify login

# 3. 배포
cd /home/user/webapp
netlify deploy --prod
```

#### Netlify 설정
```toml
# netlify.toml
[build]
  publish = "."
  
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 2: Vercel (추천 - 무료)

```bash
# 1. Vercel CLI 설치
npm install -g vercel

# 2. Vercel 로그인
vercel login

# 3. 배포
cd /home/user/webapp
vercel --prod
```

### Option 3: GitHub Pages (무료)

```bash
# 1. GitHub 저장소 생성
gh repo create leekaja-myeongdong --public

# 2. Push
git remote add origin https://github.com/USERNAME/leekaja-myeongdong.git
git branch -M main
git push -u origin main

# 3. GitHub Pages 설정
# Settings → Pages → Source: main branch
```

### Option 4: 전통적인 웹 호스팅

#### 파일 업로드 (FTP)
```
1. FTP 클라이언트 사용 (FileZilla 등)
2. 모든 파일을 public_html 또는 www 폴더에 업로드
3. 권한 설정: 파일 644, 폴더 755
```

## 🔧 배포 후 설정

### 1. Google Search Console

```
1. https://search.google.com/search-console 방문
2. 속성 추가 → URL 접두어
3. 소유권 확인 (HTML 파일 업로드 또는 메타태그)
4. Sitemap 제출: https://yourdomain.com/sitemap.xml
```

### 2. Google Analytics

```html
<!-- index.html <head> 섹션에 추가 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 3. Google My Business

```
1. https://business.google.com 방문
2. 비즈니스 프로필 생성
3. 카테고리: Hair Salon, Beauty Salon
4. 정확한 주소 및 영업시간 입력
5. 사진 업로드 (최소 10장)
6. 웹사이트 URL 연결
7. 서비스 메뉴 추가
8. 예약 링크 연결
```

### 4. Naver 검색 등록

```
1. https://searchadvisor.naver.com 방문
2. 사이트 등록
3. 소유 확인
4. Sitemap 제출
5. Naver Place 등록
```

### 5. SSL 인증서

대부분의 현대 호스팅은 무료 SSL 제공:
- Netlify: 자동
- Vercel: 자동
- GitHub Pages: 자동
- cPanel: Let's Encrypt 무료 설치

## 📊 성과 측정 도구 설정

### Google Analytics 목표 설정
```
목표 1: 예약 폼 제출
목표 URL: /booking (감사 페이지)

목표 2: 전화 클릭
이벤트: click, category: contact, action: phone

목표 3: WhatsApp 클릭
이벤트: click, category: contact, action: whatsapp
```

### Facebook Pixel (선택사항)
```html
<!-- 광고 추적을 위한 Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 🔒 보안 설정

### 권장 보안 헤더
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'self'
```

### robots.txt 확인
```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

## 📱 모바일 최적화 확인

### Google Mobile-Friendly Test
```
https://search.google.com/test/mobile-friendly
웹사이트 URL 입력 → 테스트 실행
```

### PageSpeed Insights
```
https://pagespeed.web.dev/
웹사이트 URL 입력 → 분석 실행
목표: Mobile 90+, Desktop 95+
```

## 🎯 론칭 체크리스트

### 기술적 요소
- [ ] 모든 링크 작동 확인
- [ ] 이미지 로딩 확인
- [ ] 모바일 반응형 테스트
- [ ] 브라우저 호환성 테스트 (Chrome, Safari, Firefox, Edge)
- [ ] 폼 제출 테스트
- [ ] 전화번호 클릭 테스트
- [ ] 지도 링크 테스트
- [ ] 404 페이지 설정
- [ ] SSL 인증서 확인
- [ ] 로딩 속도 최적화

### SEO 요소
- [ ] Google Search Console 등록
- [ ] Google Analytics 설정
- [ ] Sitemap 제출
- [ ] robots.txt 확인
- [ ] 메타 태그 확인
- [ ] 구조화된 데이터 검증
- [ ] Hreflang 태그 확인
- [ ] Canonical URL 확인

### 콘텐츠 요소
- [ ] 모든 텍스트 교정
- [ ] 연락처 정보 확인
- [ ] 가격 정보 확인
- [ ] 영업시간 확인
- [ ] 3개 언어 번역 검증
- [ ] 이미지 alt 태그 확인

### 마케팅 요소
- [ ] Google My Business 프로필 완성
- [ ] Naver Place 등록
- [ ] 소셜 미디어 계정 생성
- [ ] Instagram 프로필 최적화
- [ ] Facebook 페이지 생성
- [ ] 초기 블로그 포스트 2-3개 작성

## 🚀 론칭 후 즉시 실행

### 첫 주
```
Day 1: 
- Google Search Console에 색인 요청
- 주요 디렉토리 사이트 등록 시작
- 소셜 미디어 첫 포스트

Day 3:
- 분석 데이터 확인
- 기술적 이슈 수정

Day 7:
- 첫 주 성과 리뷰
- 고객 피드백 수집
```

### 첫 달
```
Week 2:
- 블로그 포스트 발행 (주 1회)
- 백링크 구축 시작
- 인플루언서 협업 Contact

Week 3-4:
- Google Ads 캠페인 시작 (선택)
- Instagram 광고 테스트
- 첫 고객 리뷰 수집 캠페인
```

## 💰 예산 가이드

### 무료 옵션
```
도메인: $10-15/년
호스팅: $0 (Netlify/Vercel/GitHub Pages)
SSL: $0 (무료 포함)
Google Analytics: $0
Google Search Console: $0
합계: ~$15/년
```

### 프리미엄 옵션
```
도메인: $10-15/년
프리미엄 호스팅: $5-20/월
이메일 호스팅: $5-10/월
Google Ads: $300-1000/월 (선택)
소셜 미디어 광고: $200-500/월 (선택)
```

## 🆘 문제 해결

### 웹사이트가 표시되지 않는 경우
1. DNS 설정 확인 (최대 48시간 소요)
2. 호스팅 서버 상태 확인
3. 파일 권한 확인
4. 브라우저 캐시 삭제

### 검색 결과에 나타나지 않는 경우
1. Google Search Console에서 색인 상태 확인
2. robots.txt 차단 여부 확인
3. Sitemap 제출 여부 확인
4. 최소 2-4주 대기 (신규 사이트)

### 성능 문제
1. 이미지 최적화 (WebP 변환)
2. CSS/JS 압축
3. CDN 사용 고려
4. 캐싱 설정 확인

## 📞 기술 지원

추가 지원이 필요한 경우:
- 이메일: support@leekaja-myeongdong.com
- 전화: +82-2-123-4567

---

## 🎉 축하합니다!

이제 **이가자 명동 미용실** 웹사이트가 세계로 나갈 준비가 되었습니다!

**명동 최고의 미용실**로 성장하는 그 날까지 함께하겠습니다! ✂️💇‍♀️