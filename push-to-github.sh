#!/bin/bash

# 색상 정의
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}======================================"
echo "🚀 GitHub Push 자동화 스크립트"
echo -e "======================================${NC}"
echo ""

# Git 설정
echo -e "${YELLOW}📝 Git 설정 중...${NC}"
git config --global user.name "paulslife2017-hue"
git config --global user.email "paulslife2017-hue@users.noreply.github.com"
git config --global credential.helper store

# 현재 상태 확인
echo -e "\n${BLUE}📊 현재 프로젝트 상태:${NC}"
echo "   브랜치: $(git branch --show-current)"
echo "   커밋: $(git log --oneline | wc -l)개"
echo "   파일: $(find . -type f ! -path './.git/*' | wc -l)개"
echo ""

# 리모트 재설정
echo -e "${YELLOW}🔗 GitHub 리모트 재설정 중...${NC}"
git remote remove origin 2>/dev/null
git remote add origin https://github.com/paulslife2017-hue/myungdong-igaja.git
echo -e "${GREEN}✅ 리모트 설정 완료${NC}"
echo ""

# 브랜치 확인
echo -e "${YELLOW}🌿 브랜치 확인 중...${NC}"
git branch -M main
echo -e "${GREEN}✅ main 브랜치로 설정 완료${NC}"
echo ""

# 사용자에게 확인
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${YELLOW}⚠️  중요: GitHub Personal Access Token 필요!${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "1. 먼저 GitHub에서 Token을 생성하세요:"
echo "   👉 ${BLUE}https://github.com/settings/tokens/new${NC}"
echo ""
echo "   설정:"
echo "   - Note: Vercel Deployment"
echo "   - Expiration: 90 days"
echo "   - Scopes: ☑️ repo (전체 체크)"
echo ""
echo "2. 생성된 Token을 복사하세요 (한 번만 표시됩니다!)"
echo ""
echo "3. 아래에서 비밀번호 입력 시 Token을 붙여넣으세요"
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# 사용자 확인
read -p "Token을 준비했습니까? (y/N): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "\n${YELLOW}❌ 취소되었습니다.${NC}"
    echo ""
    echo "Token을 생성한 후 다시 실행하세요:"
    echo "   ./push-to-github.sh"
    echo ""
    exit 0
fi

echo ""
echo -e "${YELLOW}🚀 GitHub에 Push 중...${NC}"
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo "Username: paulslife2017-hue"
echo "Password: [Personal Access Token 붙여넣기]"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Push 실행
git push -u origin main

# 결과 확인
if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}======================================"
    echo "✅ GitHub Push 성공!"
    echo -e "======================================${NC}"
    echo ""
    echo -e "${GREEN}🎉 축하합니다! 모든 파일이 GitHub에 업로드되었습니다.${NC}"
    echo ""
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${YELLOW}📍 다음 단계: Vercel 배포${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo ""
    echo "1. Vercel 접속:"
    echo "   👉 ${BLUE}https://vercel.com/new${NC}"
    echo ""
    echo "2. Import Git Repository 클릭"
    echo ""
    echo "3. 'myungdong-igaja' 선택"
    echo ""
    echo "4. 프로젝트 설정:"
    echo "   - Framework Preset: ${GREEN}Other${NC}"
    echo "   - Build Command: ${GREEN}(비워두기)${NC}"
    echo "   - Output Directory: ${GREEN}./${NC}"
    echo ""
    echo "5. ${GREEN}Deploy${NC} 버튼 클릭!"
    echo ""
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo ""
    echo "📁 업로드된 파일 확인:"
    echo "   👉 ${BLUE}https://github.com/paulslife2017-hue/myungdong-igaja${NC}"
    echo ""
    echo -e "${GREEN}======================================"
    echo "프로젝트 배포 준비 완료! 🚀"
    echo -e "======================================${NC}"
    echo ""
else
    echo ""
    echo -e "${RED}======================================"
    echo "❌ Push 실패"
    echo -e "======================================${NC}"
    echo ""
    echo -e "${YELLOW}문제 해결:${NC}"
    echo ""
    echo "1. Personal Access Token이 올바른지 확인"
    echo "   - Token 권한: repo 전체 체크"
    echo "   - Token 만료 여부 확인"
    echo ""
    echo "2. 다시 시도:"
    echo "   ${BLUE}./push-to-github.sh${NC}"
    echo ""
    echo "3. 또는 GitHub Desktop 사용:"
    echo "   👉 ${BLUE}https://desktop.github.com/${NC}"
    echo ""
    exit 1
fi
