#!/bin/bash

# GitHub Push Helper Script for Vercel Deployment
# 이가자 명동 미용실 웹사이트

echo "======================================"
echo "🚀 GitHub Push 및 Vercel 배포 도우미"
echo "======================================"
echo ""

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ 오류: index.html 파일을 찾을 수 없습니다."
    echo "   올바른 디렉토리에서 실행해주세요."
    exit 1
fi

# Show current status
echo "📊 현재 Git 상태:"
git status --short
echo ""

# Show recent commits
echo "📝 최근 커밋:"
git log --oneline -3
echo ""

# Confirm push
echo "GitHub에 Push하시겠습니까?"
echo ""
echo "⚠️  주의: GitHub Personal Access Token이 필요합니다."
echo "   토큰이 없다면 다음 링크에서 생성하세요:"
echo "   👉 https://github.com/settings/tokens"
echo ""
read -p "계속하시겠습니까? (y/N): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ 취소되었습니다."
    exit 0
fi

# Attempt push
echo ""
echo "🔄 GitHub에 Push 중..."
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Push 성공!"
    echo ""
    echo "======================================"
    echo "🎉 다음 단계: Vercel 배포"
    echo "======================================"
    echo ""
    echo "1. https://vercel.com 에 접속"
    echo "2. 'New Project' 클릭"
    echo "3. 'myungdong-igaja' 리포지토리 선택"
    echo "4. 설정:"
    echo "   - Framework: Other"
    echo "   - Build Command: (비워두기)"
    echo "   - Output Directory: ./"
    echo "5. 'Deploy' 클릭!"
    echo ""
    echo "📚 자세한 가이드: VERCEL_DEPLOYMENT.md 파일 참고"
    echo ""
else
    echo ""
    echo "❌ Push 실패"
    echo ""
    echo "해결 방법:"
    echo "1. GitHub Personal Access Token 확인"
    echo "2. Git 자격 증명 재설정:"
    echo "   git config credential.helper store"
    echo "   git push origin main"
    echo ""
    echo "또는 GitHub Desktop 사용:"
    echo "   https://desktop.github.com/"
    echo ""
    exit 1
fi
