# 🔍 Google Search Console 사이트맵 설정 가이드

## ⚠️ 오류 해결: "사이트맵에 접근 중 오류가 발생했습니다"

### 문제 원인
커스텀 도메인(`myeongdonghairsalon.co.kr`)이 아직 Vercel에서 활성화되지 않았습니다.

---

## ✅ 해결 방법

### 1단계: Vercel 배포 URL 확인
1. Vercel Dashboard 접속: https://vercel.com/dashboard
2. 프로젝트 선택: `myungdong-igaja`
3. Domains 탭에서 **기본 URL** 확인
   - 예: `myungdong-igaja.vercel.app`

### 2단계: 사이트 접속 테스트
브라우저에서 다음 URL로 접속해보세요:
```
https://myungdong-igaja.vercel.app/
https://myungdong-igaja.vercel.app/sitemap.xml
```

**✅ 성공**: XML 파일이 보이면 정상
**❌ 실패**: 404 오류가 나면 Vercel 재배포 필요

### 3단계: Google Search Console 사이트맵 제출

#### A. 기존 사이트맵 삭제
1. Google Search Console 접속
2. 왼쪽 메뉴 > **색인 생성** > **Sitemap**
3. 오류가 난 사이트맵 선택 후 **삭제**

#### B. 새 사이트맵 제출
1. **새 사이트맵 추가** 입력란에 다음 입력:
   ```
   https://myungdong-igaja.vercel.app/sitemap.xml
   ```
2. **제출** 버튼 클릭
3. 상태가 **"성공"**으로 변경될 때까지 대기 (보통 수 분~수 시간)

---

## 📋 확인 체크리스트

- [ ] Vercel 프로젝트가 정상 배포됨 (Status: Ready)
- [ ] 사이트맵 URL이 브라우저에서 열림
- [ ] URL에 `https://`가 포함됨
- [ ] Google Search Console에 올바른 URL 제출됨
- [ ] 사이트맵 상태가 "성공"으로 표시됨

---

## 🔄 커스텀 도메인 연결 후 (나중에)

커스텀 도메인 `www.myeongdonghairsalon.co.kr`이 Vercel에서 활성화되면:

1. **사이트맵 파일 업데이트** 필요 (도메인 변경)
2. **Google Search Console**에 새 속성 추가:
   - 도메인 속성: `myeongdonghairsalon.co.kr`
   - URL 접두어 속성: `https://www.myeongdonghairsalon.co.kr`
3. **사이트맵 다시 제출**:
   ```
   https://www.myeongdonghairsalon.co.kr/sitemap.xml
   ```

---

## 🆘 여전히 오류가 나는 경우

### 오류 1: "사이트맵을 가져올 수 없음"
- **원인**: URL이 잘못되었거나 사이트가 배포되지 않음
- **해결**: Vercel Dashboard에서 배포 상태 확인

### 오류 2: "사이트맵을 읽을 수 없음"
- **원인**: XML 형식 오류
- **해결**: 사이트맵 파일을 XML Validator로 검증

### 오류 3: "DNS 오류"
- **원인**: 도메인이 아직 연결되지 않음
- **해결**: Vercel 기본 URL(`*.vercel.app`)을 먼저 사용

---

## 📞 참고 링크

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Google Search Console**: https://search.google.com/search-console
- **DNS 전파 확인**: https://dnschecker.org/
- **사이트맵 테스트**: https://www.xml-sitemaps.com/validate-xml-sitemap.html

---

## 📅 업데이트 이력

- 2026-03-22: Vercel 기본 URL로 사이트맵 업데이트
- 이전: 커스텀 도메인 사용 (오류 발생)

---

**✅ 완료 상태**
- [x] 사이트맵 URL을 Vercel 기본 도메인으로 변경
- [x] robots.txt 업데이트
- [x] 가이드 문서 작성

**🎯 다음 단계**
1. Google Search Console에서 새 사이트맵 제출
2. 커스텀 도메인 연결 (선택사항)
3. 검색 노출 확인 (1~2주 소요)
