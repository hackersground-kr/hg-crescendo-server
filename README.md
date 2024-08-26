# `{{ 팀 이름 }}` - `{{ 제품/서비스 이름 }}`

해커그라운드 해커톤에 참여하는 `{{ 팀 이름 }}` 팀의 `{{ 제품/서비스 이름 }}`입니다.

## 참고 문서

> 아래 두 링크는 해커톤에서 앱을 개발하면서 참고할 만한 문서들입니다. 이 문서들에서 언급한 서비스 이외에도 더 많은 서비스들이 PaaS, SaaS, 서버리스 형태로 제공되니 참고하세요.

- [순한맛](./REFERENCES_BASIC.md)
- [매운맛](./REFERENCES_ADVANCED.md)

## 제품/서비스 소개

<!-- 아래 링크는 지우지 마세요 -->
[제품/서비스 소개 보기](TOPIC.md)
<!-- 위 링크는 지우지 마세요 -->

## 오픈 소스 라이센스

<!-- 아래 링크는 지우지 마세요 -->
[오픈소스 라이센스 보기](./LICENSE)
<!-- 위 링크는 지우지 마세요 -->

## 설치 방법

> **아래 제공하는 설치 방법을 통해 심사위원단이 여러분의 제품/서비스를 실제 Microsoft 애저 클라우드에 배포하고 설치할 수 있어야 합니다. 만약 아래 설치 방법대로 따라해서 배포 및 설치가 되지 않을 경우 본선에 진출할 수 없습니다.**

### 사전 준비 사항

## 환경 설정 - 1

**사전 준비 사항 목록**

- GitHub Account
- GitHub CLI
- Azure CLI
- Azure Developer CLI
- Azure Account
- Azure Resource Group
- java 17
- intelliJ

## 환경 설정 - 2

0. 환경 설정

0-1. 자바 & 인텔리제이 설치

0-1-1. window에서 설치

https://nazzang19.tistory.com/127

https://velog.io/@bi-sz/IntelliJ-환경-구성하기

0-1-2. mac에서 설치

https://gymdev.tistory.com/72

https://how-can-i.tistory.com/127

0-2. brew 설치 (mac)

아래 명령어를 터미널에 입력합니다.

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

0-3. AZD, AZ, GH 설치

아래 명령어 중 자신의 컴퓨터에 맞는 명령어를 터미널에 입력합니다.

0-3-1. AZD CLI

```
# 맥
brew tap azure/azd && brew install azd
```

```
# 윈도우
winget install microsoft.azd
```

0-3-2. AZ CLI

```
# 맥
brew update && brew install azure-cli
```

```
# 윈도우
$ProgressPreference = 'SilentlyContinue'; Invoke-WebRequest -Uri https://aka.ms/installazurecliwindows -OutFile .\AzureCLI.msi; Start-Process msiexec.exe -Wait -ArgumentList '/I AzureCLI.msi /quiet'; Remove-Item .\AzureCLI.msi
```

0-3-3. GH CLI

```
# 맥
brew install gh
```

```
# 윈도우
winget install gh
```


## 시작하기

1. 이 리포지토리를 자신의 GitHub 계정으로 포크합니다.

1-1. 우측 상단 4개의 버튼 중 3번째 버튼 Fork를 눌러 포크할 수 있습니다.

![스크린샷 2024-08-26 오전 2.48.33.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/82b25d19-e5e4-4e03-aadd-b62221b6ba72/1de3a3a3-e14d-4867-9671-b09fcbb1037c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-08-26_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_2.48.33.png)

     1-2. 그대로 아래 creat fork을 클릭합니다.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/82b25d19-e5e4-4e03-aadd-b62221b6ba72/3c4afd4f-64e9-4bbe-9a37-13647fe3f237/image.png)

     1-3. 자신의 리포지토리로 이동합니다.

2. 포크한 리포지토리에서 자신의 컴퓨터로 클론합니다.

2-1. 초록색 Code를 눌러서 나온 HTTPS 링크를 복사하고,

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/82b25d19-e5e4-4e03-aadd-b62221b6ba72/06761558-9caa-4c67-9452-5f2449fc10dd/image.png)

2-2. 터미널에 아래 명령어를 입력합니다.

```
git clone (복사한 url)
```

2-3. 디렉토리 이동

```
cd hg-crescendo-server
```

3. 터미널에서 아래 명령어를 입력하여 현재 리포지토리의 위치를 확인합니다

```
git remote
```

---

4 아래 명령어를 차례대로 하나씩 실행시켜 Azure 및 GitHub에 로그인합니다.

```
# Azure Developer CLI login
azd auth login
# 성공 메시지가 나오면 창을 닫고 터미널로 돌아갑니다.

# Azure CLI login
az login

# Select a subscription and tenant (Type a number or Enter for no changes):
# 라는 출력이 나온다면 사용할 구독을 선택하고 엔터를 클릭합니다. (파란색이 선택되었다는 의미)
# 성공 메시지가 나오면 창을 닫고 터미널로 돌아갑니다.

# GitHub CLI login
GITHUB_TOKEN=
gh auth login

# GitHub.com을 선택하고 엔터를 클릭합니다.
# HTTPS를 선택하고 엔터를 클릭합니다.
# y를 누르고 엔터를 클릭합니다.
# Login with a web browser를 선택하고 엔터를 클릭합니다.
# 4자리-4자리 코드가 나오면 복사를 하고, 엔터를 눌러 웹사이트를 엽니다.
# 컨티뉴를 누르고, 복사한 코드를 붙여넣기 하고 컨티뉴를 누릅니다.
# Authorize github을 클릭합니다
# 성공 메시지가 나오면 창을 닫고 터미널로 돌아갑니다.
```

4-1. 로그인이 끝났다면 아래 명령어를 통해 제대로 로그인이 되어 있는지 확인합니다.

```
# Azure Developer CLI
azd auth login --check-status

# Azure CLI
az account show

# GitHub CLI
gh auth status
```

5. 아래 명령어를 차례대로 하나씩 실행시켜 배포 환경을 준비합니다.

```
# mac
AZURE_ENV_NAME="{{ GITHUB_ID }}"
# window
$AZURE_ENV_NAME = "{{ GITHUB_ID }}"

# {{ }} 를 모두 지우고 " " 안에 자신의 깃헙 아이디를 적어주세요

# 공통
azd init -e $AZURE_ENV_NAME
# Use code in the current directory를 선택하고 엔터를 클릭합니다.
# Confirm and continue initializing my app를 선택하고 엔터를 클릭합니다.
```

5-1. 다음과 같은 메시지가 출력됩니다!!
```
SUCCESS: Your app is ready for the cloud!
```
