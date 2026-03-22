# 🚨 "Branch main not found" 에러 해결

## 문제
```
Branch "main" not found in the connected Git repository.
```

Vercel에서 이 에러가 나타나는 이유는 **GitHub 리포지토리가 완전히 비어있기** 때문입니다.

---

## ✅ 해결 방법 (가장 쉬운 순서)

### 🥇 방법 1: 자동 스크립트 사용 (추천!)

프로젝트에 자동화 스크립트가 준비되어 있습니다:

```bash
./push-to-github.sh
```

이 스크립트가 자동으로:
- Git 설정 완료
- 리모트 URL 재설정
- main 브랜치 생성
- GitHub에 푸시

**필요한 것:**
- GitHub Personal Access Token만 준비하세요!
- 👉 https://github.com/settings/tokens/new

---

### 🥈 방법 2: 수동으로 단계별 실행

#### 1단계: Personal Access Token 생성

1. https://github.com/settings/tokens/new 접속
2. 설정:
   - **Note**: `Vercel Deployment`
   - **Expiration**: `90 days`
   - **Select scopes**: ☑️ **repo** (전체 체크)
3. **Generate token** 클릭
4. 🚨 **토큰 복사** (다시 볼 수 없습니다!)

#### 2단계: Git 설정 및 Push

터미널에서 다음 명령어를 **순서대로** 실행:

```bash
cd /home/user/webapp

# Git 사용자 설정
git config --global user.name "paulslife2017-hue"
git config --global user.email "paulslife2017-hue@users.noreply.github.com"

# Credential helper 설정 (토큰 저장)
git config --global credential.helper store

# 리모트 재설정
git remote remove origin
git remote add origin https://github.com/paulslife2017-hue/myungdong-igaja.git

# 브랜치 확인
git branch -M main

# Push!
git push -u origin main
```

#### 3단계: 인증 정보 입력

```
Username: paulslife2017-hue
Password: [복사한 Personal Access Token 붙여넣기]
```

---

### 🥉 방법 3: GitHub Desktop (가장 쉬움!)

#### 단계 1: GitHub Desktop 설치
- https://desktop.github.com/ 다운로드

#### 단계 2: 로컬 리포지토리 추가
1. **File** → **Add Local Repository**
2. **Choose** → `/home/user/webapp` 선택
3. **Add Repository**

#### 단계 3: Publish
1. 상단 **Publish repository** 버튼 클릭
2. Name: `myungdong-igaja`
3. ☑️ Keep this code private (선택사항)
4. **Publish Repository** 클릭

완료! 이제 GitHub에 모든 파일이 업로드됩니다.

---

## 🔍 Push 성공 확인

### 1. GitHub에서 확인
https://github.com/paulslife2017-hue/myungdong-igaja

다음이 보여야 합니다:
- ✅ index.html
- ✅ styles.css
- ✅ script.js
- ✅ images/ 폴더
- ✅ 총 20개 커밋
- ✅ main 브랜치

### 2. 파일 크기 확인
- 전체 프로젝트: ~37MB
- images/gallery/: ~18MB (12개 이미지)

---

## 🚀 Push 성공 후: Vercel 배포

### 1. Vercel 접속
https://vercel.com/new

### 2. Import Repository
1. **Import Git Repository** 클릭
2. `paulslife2017-hue/myungdong-igaja` 검색
3. **Import** 클릭

### 3. 프로젝트 설정
```
Framework Preset: Other
Root Directory: ./
Build Command: (비워두기)
Output Directory: ./
Install Command: (비워두기)
```

### 4. Deploy!
**Deploy** 버튼 클릭 → 약 1-2분 후 완료

배포 URL 예시: `https://myungdong-igaja.vercel.app`

---

## 🎯 배포 완료 확인

Vercel 배포 후 다음을 테스트하세요:

- [ ] 홈페이지 로딩
- [ ] **갤러리 이미지 12개 표시** (중요!)
- [ ] 언어 전환 (한국어/영어/일본어)
- [ ] **구글맵 언어 전환** (방금 수정됨!)
- [ ] 모바일 네비게이션 (≤768px)
- [ ] 플로팅 버튼 (WhatsApp, LINE)
- [ ] Google Maps 지도 표시

---

## 💡 꿀팁

### Push가 느린 경우
- **정상입니다!** 18MB 이미지 업로드 중
- 약 1-3분 소요
- 인터넷 연결 확인

### "Authentication failed" 에러
```bash
# Credential 초기화 후 재시도
git config --global --unset credential.helper
git config --global credential.helper store
git push -u origin main
```

### 권한 문제
- Token 생성 시 **repo** 전체 체크 확인
- Token 만료 여부 확인
- 새 Token 생성 후 재시도

---

## 📞 추가 지원

### 자동 스크립트 실행
```bash
cd /home/user/webapp
./push-to-github.sh
```

### 수동 가이드 확인
```bash
./fix-github-branch.sh
```

### GitHub 문서
- Token 생성: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
- GitHub Desktop: https://docs.github.com/en/desktop

### Vercel 문서
- 배포 가이드: https://vercel.com/docs/deployments/overview

---

## 📊 프로젝트 현재 상태

```
✅ 준비 완료:
├── Git 커밋: 20개
├── 파일: 28개
├── 이미지: 12개 (18MB)
├── 구글맵 언어 전환: 수정 완료 ✨
└── 모든 기능: 테스트 완료

⏳ 남은 작업:
├── GitHub에 Push
└── Vercel에서 Deploy

예상 시간: 5분
```

---

## 🎉 성공 시나리오

1. ✅ GitHub Push 완료
2. ✅ GitHub에서 파일 확인
3. ✅ Vercel Import 성공
4. ✅ Vercel Deploy 완료
5. ✅ 사이트 접속 가능
6. ✅ 이미지 모두 표시
7. ✅ 언어 전환 동작
8. 🎊 **완료!**

---

**최종 업데이트**: 2026-03-22  
**상태**: GitHub Push 대기 중  
**추천 방법**: `./push-to-github.sh` 실행
