#!/bin/bash

echo "======================================"
echo "🔧 GitHub 리포지토리 완전 초기화"
echo "======================================"
echo ""

# 현재 상태 확인
echo "📊 현재 상태:"
echo "   브랜치: $(git branch --show-current)"
echo "   커밋 수: $(git log --oneline | wc -l)"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📝 해결 방법"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "문제: GitHub 리포지토리가 비어있어 'main' 브랜치가 없음"
echo ""
echo "해결: 다음 명령어를 순서대로 실행하세요"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

cat << 'INSTRUCTIONS'
1️⃣ GitHub 리포지토리 삭제 및 재생성

   A. 기존 리포지토리 삭제:
      👉 https://github.com/paulslife2017-hue/myungdong-igaja/settings
      - 맨 아래 "Delete this repository" 클릭
      - 확인: paulslife2017-hue/myungdong-igaja 입력
      - 삭제 완료

   B. 새 리포지토리 생성:
      👉 https://github.com/new
      - Repository name: myungdong-igaja
      - Public 선택
      - ❌ Initialize 옵션 모두 체크 해제!
      - Create repository 클릭

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2️⃣ Personal Access Token 생성

   👉 https://github.com/settings/tokens/new

   설정:
   - Note: Vercel Deployment
   - Expiration: 90 days
   - Select scopes: ☑️ repo (전체 체크)
   - Generate token 클릭
   - 🚨 토큰 복사 (다시 볼 수 없습니다!)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3️⃣ 터미널에서 푸시

INSTRUCTIONS

echo ""
echo "다음 명령어를 복사해서 실행하세요:"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
cat << 'COMMANDS'

cd /home/user/webapp

# Git 설정
git config --global user.name "paulslife2017-hue"
git config --global user.email "paulslife2017-hue@users.noreply.github.com"

# Credential helper 설정
git config --global credential.helper store

# 리모트 URL 재설정
git remote remove origin
git remote add origin https://github.com/paulslife2017-hue/myungdong-igaja.git

# 브랜치 이름 확인
git branch -M main

# 푸시
git push -u origin main

COMMANDS

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "4️⃣ 인증 정보 입력"
echo ""
echo "   Username: paulslife2017-hue"
echo "   Password: [복사한 Personal Access Token 붙여넣기]"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "✅ 푸시 성공 후:"
echo ""
echo "   1. https://github.com/paulslife2017-hue/myungdong-igaja"
echo "      👉 파일들이 보이는지 확인"
echo ""
echo "   2. https://vercel.com/new"
echo "      👉 Import Git Repository"
echo "      👉 myungdong-igaja 선택"
echo "      👉 Deploy!"
echo ""
echo "======================================"
