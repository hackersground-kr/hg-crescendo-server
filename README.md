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

> **여러분의 제품/서비스를 Microsoft 애저 클라우드에 배포하기 위한 절차를 구체적으로 나열해 주세요.**
