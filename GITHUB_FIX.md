# 🚨 GitHub 빈 리포지토리 문제 해결 가이드

## 문제 상황
```
The provided GitHub repository does not contain the requested branch or commit reference.
Please ensure the repository is not empty.
```

이 오류는 GitHub 리포지토리가 비어있어서 Vercel이 코드를 가져올 수 없다는 의미입니다.

---

## ✅ 해결 방법 (3가지 옵션)

### 🥇 옵션 1: GitHub Desktop 사용 (가장 쉬움!)

#### 단계 1: GitHub Desktop 설치
1. https://desktop.github.com/ 다운로드
2. 설치 후 GitHub 계정으로 로그인

#### 단계 2: 로컬 리포지토리 추가
1. **File** → **Add Local Repository** 클릭
2. **Choose** 버튼 클릭
3. `/home/user/webapp` 폴더 선택
4. **Add Repository** 클릭

#### 단계 3: GitHub에 퍼블리시
1. 상단의 **Publish repository** 버튼 클릭
2. 설정 확인:
   - Name: `myungdong-igaja`
   - Description: 이가자 명동 미용실 공식 웹사이트
   - ☑️ Keep this code private (원하면 체크 해제)
3. **Publish Repository** 클릭

#### 단계 4: 완료!
- GitHub에 모든 파일이 업로드되었습니다
- 이제 Vercel에서 배포 가능합니다

---

### 🥈 옵션 2: 터미널에서 강제 푸시

#### 단계 1: GitHub Personal Access Token 생성
1. https://github.com/settings/tokens 접속
2. **Generate new token** → **Generate new token (classic)** 클릭
3. 설정:
   - Note: `Vercel Deployment Token`
   - Expiration: `90 days` (또는 원하는 기간)
   - ☑️ **repo** (전체 체크)
4. **Generate token** 클릭
5. 🚨 **토큰을 복사하세요** (다시 볼 수 없음!)

#### 단계 2: Git Credential 설정
```bash
cd /home/user/webapp
git config --global credential.helper store
```

#### 단계 3: 강제 푸시
```bash
git push -u origin main --force
```

#### 단계 4: 인증 정보 입력
```
Username: paulslife2017-hue
Password: [복사한 Personal Access Token 붙여넣기]
```

#### 단계 5: 완료!
- 푸시가 성공하면 GitHub에 모든 파일이 업로드됩니다

---

### 🥉 옵션 3: 리포지토리 재생성 (문제가 계속되는 경우)

#### 단계 1: 기존 리포지토리 삭제
1. https://github.com/paulslife2017-hue/myungdong-igaja 접속
2. **Settings** (톱니바퀴 아이콘) 클릭
3. 맨 아래로 스크롤 → **Delete this repository** 클릭
4. 확인 문구 입력: `paulslife2017-hue/myungdong-igaja`
5. **I understand the consequences, delete this repository** 클릭

#### 단계 2: 새 리포지토리 생성
1. https://github.com/new 접속
2. 설정:
   - Repository name: `myungdong-igaja`
   - Description: `이가자 명동 미용실 공식 웹사이트`
   - Public 선택
   - ❌ **Add a README file 체크 해제** (중요!)
   - ❌ **Add .gitignore 체크 해제**
   - ❌ **Choose a license 선택 안 함**
3. **Create repository** 클릭

#### 단계 3: 리모트 URL 재설정 및 푸시
```bash
cd /home/user/webapp
git remote set-url origin https://github.com/paulslife2017-hue/myungdong-igaja.git
git push -u origin main --force
```

#### 단계 4: 인증 정보 입력
```
Username: paulslife2017-hue
Password: [Personal Access Token]
```

---

## 🎯 Push 성공 후 Vercel 배포

### 1. Vercel 접속
- https://vercel.com/login 접속
- GitHub 계정으로 로그인

### 2. 프로젝트 Import
1. **Add New...** → **Project** 클릭
2. **Import Git Repository** 섹션에서
3. `paulslife2017-hue/myungdong-igaja` 찾기
4. **Import** 클릭

### 3. 프로젝트 설정
```
Framework Preset: Other
Root Directory: ./
Build Command: (비워두기)
Output Directory: ./
Install Command: (비워두기)
```

### 4. Deploy!
- **Deploy** 버튼 클릭
- 약 1-2분 후 배포 완료
- 배포 URL: `https://myungdong-igaja.vercel.app` (예시)

---

## 📋 체크리스트

### Push 전 확인사항
- [ ] 로컬 Git 커밋 완료 (19개 커밋 확인됨)
- [ ] GitHub Personal Access Token 생성
- [ ] Git credential helper 설정

### Push 후 확인사항
- [ ] GitHub 리포지토리에 파일 업로드 확인
- [ ] 이미지 폴더 (`images/gallery/`) 업로드 확인
- [ ] 총 18MB 파일 업로드 확인

### Vercel 배포 확인사항
- [ ] 갤러리 이미지 12개 표시
- [ ] 언어 전환 (한국어/영어/일본어) 동작
- [ ] 구글맵 언어 전환 동작 ✅ (방금 수정됨!)
- [ ] 모바일 네비게이션 표시
- [ ] 플로팅 버튼 (WhatsApp, LINE) 표시

---

## 🐛 문제 해결

### 문제 1: "Authentication failed"
**원인**: 잘못된 사용자명 또는 토큰

**해결**:
```bash
# Credential 초기화
git config --global --unset credential.helper
git config --global credential.helper store

# 다시 푸시
git push -u origin main --force
```

### 문제 2: "Permission denied"
**원인**: Personal Access Token 권한 부족

**해결**:
1. https://github.com/settings/tokens
2. 기존 토큰 삭제
3. 새 토큰 생성 시 **repo** 전체 체크
4. 새 토큰으로 다시 시도

### 문제 3: "Large files detected"
**원인**: 18MB 이미지 파일 (GitHub 제한 50MB)

**해결**:
- 문제 없음 (18MB < 50MB)
- 그냥 진행하세요

### 문제 4: 푸시가 느림
**원인**: 18MB 이미지 업로드 중

**해결**:
- 정상입니다 (약 1-3분 소요)
- 인터넷 연결 확인
- 계속 기다리세요

---

## 💡 추천 방법

### 초보자
→ **GitHub Desktop 사용** (옵션 1)

### 개발자
→ **터미널 강제 푸시** (옵션 2)

### 문제가 계속됨
→ **리포지토리 재생성** (옵션 3)

---

## 📞 추가 지원

### GitHub 공식 문서
- Personal Access Token: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
- GitHub Desktop: https://docs.github.com/en/desktop

### Vercel 공식 문서
- Deploying: https://vercel.com/docs/deployments/overview
- GitHub Integration: https://vercel.com/docs/git/vercel-for-github

---

## 📊 현재 프로젝트 상태

```
✅ 준비 완료:
├── 갤러리 이미지 12개 (18MB)
├── Vercel 설정 (vercel.json)
├── Git 커밋 19개
├── 구글맵 언어 전환 수정 완료
└── 모든 기능 테스트 완료

⏳ 남은 작업:
├── GitHub에 Push
└── Vercel에서 Deploy

예상 소요 시간: 5-10분
```

---

**최종 업데이트**: 2026-03-22  
**상태**: GitHub Push 대기 중  
**다음 단계**: 위 3가지 옵션 중 하나 선택하여 진행
