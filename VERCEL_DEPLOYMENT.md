# 🚀 Vercel 배포 가이드

## ✅ 준비 완료 사항

1. **이미지 다운로드 완료**: 12개의 갤러리 이미지가 로컬에 저장됨 (`/images/gallery/`)
2. **Vercel 설정 추가**: `vercel.json` 파일 생성 완료
3. **Git 커밋 완료**: 모든 변경사항이 로컬 Git에 커밋됨
4. **이미지 용량**: 총 18MB (최적화된 크기)

---

## 📋 배포 단계

### 1단계: GitHub에 Push

터미널에서 다음 명령어를 실행하세요:

```bash
cd /home/user/webapp

# GitHub 토큰을 사용하여 push (인증 필요)
git push origin main
```

**인증 오류 발생 시:**
- GitHub Personal Access Token이 필요합니다
- [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens) 에서 토큰 생성
- 권한: `repo` (전체 저장소 접근)

**또는 GitHub Desktop 사용:**
1. GitHub Desktop 열기
2. Repository → Push origin

---

### 2단계: Vercel 배포

#### 방법 A: Vercel Dashboard (추천 ⭐)

1. **Vercel 계정 준비**
   - [vercel.com](https://vercel.com)에서 로그인
   - GitHub 계정으로 연동

2. **프로젝트 Import**
   - Dashboard에서 "Add New..." → "Project" 클릭
   - "Import Git Repository" 선택
   - `paulslife2017-hue/myungdong-igaja` 선택

3. **프로젝트 설정**
   ```
   Framework Preset: Other
   Root Directory: ./
   Build Command: (비워두기)
   Output Directory: ./
   Install Command: (비워두기)
   ```

4. **환경 변수** (필요 없음 - 정적 사이트)

5. **Deploy 클릭!** 🎉

#### 방법 B: Vercel CLI

```bash
# Vercel CLI 설치 (처음 한 번만)
npm install -g vercel

# 로그인
vercel login

# 배포
cd /home/user/webapp
vercel --prod
```

---

## 🔍 배포 확인

배포 완료 후 다음 항목들을 확인하세요:

### 필수 체크리스트
- [ ] 홈페이지 로딩 확인
- [ ] 갤러리 이미지 12개 모두 표시되는지 확인
- [ ] 언어 전환 (한국어/영어/일본어) 동작 확인
- [ ] 모바일 반응형 디자인 확인
- [ ] 하단 네비게이션 바 표시 확인 (모바일)
- [ ] 플로팅 버튼 (WhatsApp, LINE) 표시 확인
- [ ] Google Maps 지도 로딩 확인
- [ ] "찾아가기" 버튼 동작 확인

### 성능 체크
- [ ] 이미지 로딩 속도 (3초 이내 권장)
- [ ] 모바일 페이지 속도 (Lighthouse 점수 90+ 권장)
- [ ] SEO 점수 확인

---

## 🎯 배포 후 최적화 (선택사항)

### 1. 커스텀 도메인 설정

Vercel Dashboard에서:
1. Project Settings → Domains
2. "Add Domain" 클릭
3. 도메인 입력 (예: `leekaja-myeongdong.com`)
4. DNS 레코드 설정:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### 2. 성능 모니터링

Vercel에서 자동으로 제공:
- Analytics (방문자 통계)
- Speed Insights (성능 분석)
- Web Vitals (사용자 경험 지표)

### 3. 이미지 최적화 (추가 개선)

현재 이미지 크기: 1.3-1.8 MB

**더 최적화하려면:**
```bash
# ImageMagick 사용 (선택사항)
cd images/gallery
for img in *.jpg; do
  convert "$img" -quality 85 -resize 1200x1600\> "optimized-$img"
done
```

---

## 🐛 문제 해결

### 이미지가 안 보이는 경우
1. **브라우저 캐시 삭제**: Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)
2. **Vercel 배포 로그 확인**: Dashboard → Deployments → 최근 배포 클릭
3. **파일 경로 확인**: 모든 이미지가 `/images/gallery/` 경로에 있는지 확인

### 갤러리 필터가 안 되는 경우
1. `script.js` 파일이 로드되는지 확인 (개발자 도구 → Network 탭)
2. 콘솔 에러 확인 (개발자 도구 → Console 탭)

### 모바일 네비게이션이 안 보이는 경우
1. 화면 너비 768px 이하인지 확인 (개발자 도구 → Responsive 모드)
2. `styles.css`의 미디어 쿼리 확인

---

## 📊 현재 프로젝트 상태

```
✅ 완료된 작업:
├── 갤러리 이미지 12개 로컬 다운로드
├── Vercel 배포 설정 (vercel.json)
├── .gitignore 파일 추가
├── README.md 업데이트
├── Git 커밋 완료
└── 모든 기능 테스트 완료

⏳ 남은 작업:
├── GitHub에 Push (인증 필요)
└── Vercel에서 배포
```

---

## 📞 추가 지원

문제가 발생하면:
1. Vercel 공식 문서: https://vercel.com/docs
2. GitHub 이슈 생성
3. Vercel 커뮤니티: https://github.com/vercel/vercel/discussions

---

## 🎉 배포 성공 후

배포 URL 예시: `https://myungdong-igaja.vercel.app`

**다음 단계:**
1. Google Search Console에 사이트 등록
2. Google Analytics 설정
3. 네이버/다음 검색 등록
4. 소셜 미디어에 공유

---

**생성일**: 2026-03-22  
**프로젝트**: 이가자 명동 미용실 웹사이트  
**Repository**: https://github.com/paulslife2017-hue/myungdong-igaja
