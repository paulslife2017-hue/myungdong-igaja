# 🔧 사이트맵 오류 해결 가이드

## 오류 메시지
```
사이트맵에 액세스하는 중에 오류가 발생했습니다.
```

이 오류는 구글이 사이트맵 파일에 접근할 수 없다는 의미입니다.

---

## ✅ 해결 방법 (단계별)

### 1단계: 현재 배포 URL 확인

Vercel에서 배포된 URL을 먼저 확인하세요:

1. **Vercel Dashboard** 접속
   - https://vercel.com/dashboard

2. **myungdong-igaja** 프로젝트 클릭

3. **Domains** 섹션에서 현재 URL 확인
   - 예: `myungdong-igaja.vercel.app`
   - 또는: `www.myeongdonghairsalon.co.kr` (도메인 연결 후)

---

### 2단계: 사이트맵 접근 테스트

브라우저에서 다음 URL을 직접 열어보세요:

#### 옵션 A: Vercel 기본 URL
```
https://myungdong-igaja.vercel.app/sitemap.xml
```

#### 옵션 B: 커스텀 도메인
```
https://www.myeongdonghairsalon.co.kr/sitemap.xml
```

**예상 결과:**
- ✅ **정상**: XML 파일 내용이 보임
- ❌ **오류**: 404 Not Found 또는 접근 불가

---

### 3단계: 문제별 해결책

#### 문제 A: 도메인이 아직 연결 안 됨

**증상:**
- `www.myeongdonghairsalon.co.kr`로 접근 불가
- DNS 설정 완료했지만 아직 전파 안 됨

**해결:**
1. DNS 전파 확인: https://dnschecker.org/
2. 입력: `www.myeongdonghairsalon.co.kr`
3. 전파 완료까지 대기 (최대 2시간)

**임시 해결책:**
- Vercel 기본 URL로 먼저 등록
- 예: `https://myungdong-igaja.vercel.app/sitemap.xml`

---

#### 문제 B: 사이트맵 파일이 배포 안 됨

**증상:**
- Vercel URL로도 사이트맵 접근 불가
- 404 Not Found 오류

**해결:**
```bash
# 1. 파일 존재 확인
cd /home/user/webapp
ls -la sitemap.xml

# 2. Git에 추가되었는지 확인
git status

# 3. Git에 커밋 및 푸시
git add sitemap.xml robots.txt
git commit -m "fix: 사이트맵 파일 추가"
git push origin main
```

**Vercel 자동 재배포 확인:**
- Vercel Dashboard → Deployments
- 최신 배포가 "Ready" 상태인지 확인
- 약 1-2분 대기

---

#### 문제 C: robots.txt에서 차단됨

**확인:**
```bash
# robots.txt 내용 확인
cat /home/user/webapp/robots.txt
```

**올바른 내용:**
```txt
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://www.myeongdonghairsalon.co.kr/sitemap.xml

User-agent: Googlebot
Allow: /
```

**만약 `Disallow: /`가 있다면:**
```bash
# robots.txt 수정
git add robots.txt
git commit -m "fix: robots.txt에서 사이트맵 차단 해제"
git push origin main
```

---

#### 문제 D: 구글 서치 콘솔에 잘못된 URL 입력

**확인 사항:**

❌ **잘못된 입력:**
```
sitemap.xml (상대 경로)
/sitemap.xml
www.myeongdonghairsalon.co.kr/sitemap.xml (https:// 없음)
```

✅ **올바른 입력:**
```
https://www.myeongdonghairsalon.co.kr/sitemap.xml
```

또는 (Vercel 기본 URL)
```
https://myungdong-igaja.vercel.app/sitemap.xml
```

---

### 4단계: 구글 서치 콘솔 재등록

#### 방법 1: 올바른 URL로 재등록

1. 구글 서치 콘솔 → **Sitemaps**
2. 기존 사이트맵 삭제 (실패한 것)
3. **새 사이트맵 추가**
4. 입력 (브라우저에서 접근 가능한 URL):
   ```
   https://myungdong-igaja.vercel.app/sitemap.xml
   ```
5. **제출** 클릭

#### 방법 2: 도메인 연결 후 등록

1. DNS 전파 완료까지 대기
2. `https://www.myeongdonghairsalon.co.kr/sitemap.xml` 브라우저에서 확인
3. 구글 서치 콘솔에서 제출

---

## 🔍 디버깅 체크리스트

### Step 1: 파일 존재 확인
```bash
cd /home/user/webapp
ls -la sitemap.xml robots.txt
```

**예상 출력:**
```
-rw-r--r-- 1 user user  376 Mar 22 11:06 robots.txt
-rw-r--r-- 1 user user 2880 Mar 22 11:06 sitemap.xml
```

✅ 파일이 있으면 다음 단계로

---

### Step 2: Git 커밋 확인
```bash
git log --oneline -1 -- sitemap.xml
```

**예상 출력:**
```
17f8b0f feat: 사이트맵 및 robots.txt 업데이트
```

✅ 최근 커밋에 포함되어 있으면 다음 단계로

---

### Step 3: GitHub에 푸시 확인
```bash
git log origin/main --oneline -1 -- sitemap.xml
```

✅ GitHub에도 푸시되어 있으면 다음 단계로

---

### Step 4: Vercel 배포 확인

1. Vercel Dashboard → **myungdong-igaja** 프로젝트
2. **Deployments** 탭
3. 최신 배포 상태 확인:
   - ✅ **Ready** (정상)
   - ⏳ **Building** (빌드 중)
   - ❌ **Error** (오류)

---

### Step 5: 사이트맵 직접 접근 테스트

**브라우저에서 직접 열기:**

1. Vercel URL:
   ```
   https://myungdong-igaja.vercel.app/sitemap.xml
   ```

2. 커스텀 도메인 (연결된 경우):
   ```
   https://www.myeongdonghairsalon.co.kr/sitemap.xml
   ```

**예상 결과:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://www.myeongdonghairsalon.co.kr/</loc>
        ...
    </url>
</urlset>
```

✅ XML 내용이 보이면 정상!

---

## 🚀 빠른 해결 방법

### 가장 흔한 원인: 도메인 미연결

**문제:**
- `myeongdonghairsalon.co.kr` 도메인이 아직 Vercel에 연결 안 됨
- DNS 전파 대기 중

**해결:**

#### 임시 방법: Vercel 기본 URL 사용

1. 구글 서치 콘솔 → **속성 선택**
2. 현재 등록된 속성:
   ```
   myeongdonghairsalon.co.kr
   ```

3. **삭제 후 새로 등록:**
   - 도메인 속성 대신 **URL 접두어** 선택
   - 입력:
     ```
     https://myungdong-igaja.vercel.app
     ```

4. 소유권 확인 (HTML 파일 또는 메타 태그)

5. **Sitemaps** 메뉴에서 제출:
   ```
   sitemap.xml
   ```
   (또는 전체 URL)
   ```
   https://myungdong-igaja.vercel.app/sitemap.xml
   ```

#### 영구 방법: 도메인 연결 완료 후

1. DNS 전파 완료 확인
2. `www.myeongdonghairsalon.co.kr` 접속 테스트
3. 사이트맵 접근 테스트:
   ```
   https://www.myeongdonghairsalon.co.kr/sitemap.xml
   ```
4. 구글 서치 콘솔에 다시 등록

---

## 📋 현재 Vercel 배포 URL 확인 방법

### 방법 1: Vercel Dashboard
1. https://vercel.com/dashboard
2. **myungdong-igaja** 클릭
3. 상단에 표시된 URL 확인

### 방법 2: Domains 설정
1. Project Settings → **Domains**
2. 현재 연결된 도메인 목록:
   - `myungdong-igaja.vercel.app` (기본)
   - `www.myeongdonghairsalon.co.kr` (추가한 경우)

---

## 💡 권장 사항

### 단계별 접근

1. **먼저 Vercel 기본 URL로 테스트**
   ```
   https://myungdong-igaja.vercel.app/sitemap.xml
   ```
   - 접근 가능하면 → Vercel 배포 정상
   - 접근 불가하면 → 파일 배포 문제

2. **Vercel URL로 구글 서치 콘솔 등록**
   - 도메인 연결 완료 전까지 임시 사용

3. **도메인 연결 완료 후**
   - 커스텀 도메인으로 재등록
   - 또는 추가 도메인으로 등록

---

## 🔗 현재 프로젝트 URL

**GitHub:**
```
https://github.com/paulslife2017-hue/myungdong-igaja
```

**Vercel 기본 URL (추정):**
```
https://myungdong-igaja.vercel.app
```

**커스텀 도메인 (연결 후):**
```
https://www.myeongdonghairsalon.co.kr
```

**사이트맵 URL:**
```
https://myungdong-igaja.vercel.app/sitemap.xml
```

---

## 📞 다음 단계

1. **Vercel 배포 확인**
   - Dashboard에서 배포 상태 체크
   - 배포 URL 확인

2. **사이트맵 접근 테스트**
   - 브라우저에서 직접 열어보기

3. **구글 서치 콘솔에 올바른 URL 등록**
   - Vercel URL 사용 (권장)
   - 또는 도메인 연결 완료 후 커스텀 도메인 사용

4. **성공 확인**
   - 구글 서치 콘솔에서 "성공" 상태 확인

---

**생성일**: 2026-03-22  
**문제**: 사이트맵 접근 오류  
**해결**: Vercel 배포 URL 사용
