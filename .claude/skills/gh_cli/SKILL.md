---
name: gh-cli
description: GitHub CLI로 프로젝트 저장소 생성, 코드 백업, 푸시 및 GitHub Pages 배포를 요청받았을 때 사용하는 스킬.
---

# GitHub 백업 스킬 (gh CLI)

GitHub CLI(gh)와 Git을 사용하여 프로젝트를 관리한다.
명령어는 macOS zsh에서 Bash 도구로 실행한다.

## 저장소 생성
사용자의 저장소 이름과 공개 여부를 확인한 후 gh repo create 명령어로 생성한다.
공개 저장소 여부를 임의로 결정하지 않는다.

## 로컬 초기화 및 첫 push
git status로 먼저 확인한다.
필요한 경우에만 git init을 실행한다.
git add, git commit, git branch, git remote, git push를 적절히 사용한다.
기존 remote나 브랜치를 덮어쓰지 않는다.

## 변경사항 백업
변경 파일을 먼저 확인하고 비밀키, 토큰, .env, node_modules 등이 업로드되지 않도록 점검한다.
사용자에게 커밋과 푸시 내용을 확인받고 실행한다.

## GitHub Pages 배포
Vite 프로젝트라면 배포용 빌드와 GitHub Actions 워크플로우를 확인한다.
필요한 base 경로를 설정하고 사용자 승인 후 배포한다.
배포 상태는 gh CLI로 확인한다.

## 저장소 목록
gh repo list

## 인증 확인
gh auth status

## 보안 원칙
저장소 삭제, 공개 여부 변경, 비밀정보 업로드는 자동 실행하지 않는다.
토큰은 절대 출력하지 않는다.
사용자 승인 후에만 원격 저장소를 생성하거나 push 및 배포한다.
