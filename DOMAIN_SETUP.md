# 🌐 Vercel에 .co.kr 도메인 연결 가이드

## 문제
```
The domain you are trying to add is invalid, 
please enter a valid domain name and try again
```

이 오류는 `.co.kr` 도메인을 Vercel에 직접 추가할 때 발생합니다.

---

## ✅ 해결 방법

### 방법 1: www 서브도메인 사용 (추천 ⭐)

Vercel은 루트 도메인(`.co.kr`)보다 서브도메인을 권장합니다.

#### 단계 1: Vercel에 도메인 추가

Vercel Dashboard에서:
```
www.myeongdonghairsalon.co.kr
```
이렇게 `www`를 붙여서 추가하세요.

#### 단계 2: DNS 설정 (가비아/후이즈)

도메인 구매한 곳에서 DNS 레코드 추가:

**CNAME 레코드:**
```
Type:  CNAME
Name:  www
Value: cname.vercel-dns.com
TTL:   3600
```

**A 레코드 (루트 도메인을 www로 리다이렉트):**
```
Type:  A
Name:  @
Value: 76.76.21.21
TTL:   3600
```

---

### 방법 2: 루트 도메인 직접 연결

#### 단계 1: Vercel 네임서버 사용

Vercel Dashboard → Domains → Add → `myeongdonghairsalon.co.kr` 입력

Vercel이 제공하는 네임서버 확인 (예시):
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

#### 단계 2: 도메인 업체에서 네임서버 변경

도메인 구매한 곳(가비아/후이즈 등)에서:

1. **도메인 관리** 접속
2. **네임서버 설정** 클릭
3. Vercel 네임서버로 변경:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```
4. 저장

⚠️ **주의**: 네임서버 변경은 전파까지 최대 24-48시간 소요

---

### 방법 3: A 레코드 직접 연결

#### Vercel의 IP 주소로 A 레코드 설정

**DNS 설정 (가비아/후이즈):**

```
Type:  A
Name:  @
Value: 76.76.21.21
TTL:   3600

Type:  CNAME
Name:  www
Value: cname.vercel-dns.com
TTL:   3600
```

---

## 📋 단계별 가이드 (가비아 기준)

### 1. 가비아에 로그인

https://www.gabia.com/ 로그인

### 2. My가비아 → 도메인 관리

**myeongdonghairsalon.co.kr** 선택

### 3. DNS 정보 → DNS 설정

**DNS 관리 도구** 클릭

### 4. 레코드 추가

#### 옵션 A: www 서브도메인 (추천)

**CNAME 레코드 추가:**
```
호스트명:     www
레코드 타입:  CNAME
레코드 값:    cname.vercel-dns.com
TTL:         3600
```

**A 레코드 추가 (루트 리다이렉트):**
```
호스트명:     @
레코드 타입:  A
레코드 값:    76.76.21.21
TTL:         3600
```

#### 옵션 B: 루트 도메인만

**A 레코드 추가:**
```
호스트명:     @
레코드 타입:  A
레코드 값:    76.76.21.21
TTL:         3600
```

### 5. 저장 및 적용

**적용** 버튼 클릭

---

## 🕐 DNS 전파 시간

- **CNAME 레코드**: 10분 ~ 2시간
- **A 레코드**: 10분 ~ 2시간
- **네임서버 변경**: 24 ~ 48시간

---

## 🔍 DNS 전파 확인

### 방법 1: 온라인 도구
https://dnschecker.org/

도메인 입력:
```
www.myeongdonghairsalon.co.kr
```

**확인 사항:**
- CNAME이 `cname.vercel-dns.com`을 가리키는지
- 전세계 DNS 서버에서 확인 가능한지

### 방법 2: 터미널 명령어

**Windows:**
```cmd
nslookup www.myeongdonghairsalon.co.kr
```

**Mac/Linux:**
```bash
dig www.myeongdonghairsalon.co.kr
```

**예상 결과:**
```
www.myeongdonghairsalon.co.kr. 3600 IN CNAME cname.vercel-dns.com.
```

---

## ✅ Vercel에서 도메인 추가

### 1. Vercel Dashboard 접속

https://vercel.com/dashboard

### 2. 프로젝트 선택

**myungdong-igaja** 프로젝트 클릭

### 3. Settings → Domains

**Add** 버튼 클릭

### 4. 도메인 입력

**옵션 A (추천):**
```
www.myeongdonghairsalon.co.kr
```

**옵션 B:**
```
myeongdonghairsalon.co.kr
```

### 5. Add 클릭

Vercel이 DNS 설정을 확인합니다.

---

## 🎯 최종 설정 요약

### 추천 설정 (www 사용)

**Vercel에 추가할 도메인:**
```
www.myeongdonghairsalon.co.kr
```

**DNS 레코드 (가비아/후이즈):**
```
CNAME    www    cname.vercel-dns.com    3600
A        @      76.76.21.21             3600
```

**결과:**
- `www.myeongdonghairsalon.co.kr` → Vercel 사이트
- `myeongdonghairsalon.co.kr` → `www`로 자동 리다이렉트

---

## 🐛 문제 해결

### 문제 1: "Invalid domain" 계속 발생

**해결:**
1. `www.` 접두사를 붙여서 시도
2. DNS 레코드가 올바르게 설정되었는지 확인
3. DNS 전파 완료까지 기다리기 (최대 2시간)

### 문제 2: DNS 레코드를 추가했는데 안 됨

**확인 사항:**
- 호스트명: `www` (www.를 쓰지 말고 www만)
- 레코드 타입: CNAME
- 값: `cname.vercel-dns.com` (마침표 없이)
- TTL: 3600

### 문제 3: 루트 도메인이 작동 안 함

**해결:**
1. A 레코드 추가:
   ```
   @ → 76.76.21.21
   ```
2. 또는 Vercel 네임서버로 변경

---

## 📞 추가 지원

### Vercel 공식 문서
https://vercel.com/docs/projects/domains/add-a-domain

### 가비아 DNS 가이드
https://customer.gabia.com/manual/dns/

### 후이즈 DNS 가이드
https://www.whois.co.kr/guide/dns

---

## 🎊 완료 확인

설정 완료 후 다음을 확인하세요:

1. **DNS 전파 확인**
   https://dnschecker.org/
   
2. **브라우저에서 접속**
   ```
   https://www.myeongdonghairsalon.co.kr
   https://myeongdonghairsalon.co.kr
   ```

3. **SSL 인증서**
   Vercel이 자동으로 HTTPS 인증서 발급 (약 5분 소요)

---

## 💡 팁

### 도메인 2개 모두 사용하기

**Vercel에 2개 도메인 추가:**
1. `www.myeongdonghairsalon.co.kr` (주 도메인)
2. `myeongdonghairsalon.co.kr` (리다이렉트)

**설정:**
- Vercel이 자동으로 www로 리다이렉트 설정
- 또는 반대로 루트 도메인을 primary로 설정 가능

---

**생성일**: 2026-03-22  
**도메인**: myeongdonghairsalon.co.kr  
**플랫폼**: Vercel
