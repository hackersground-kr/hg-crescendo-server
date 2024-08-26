# `Crescendo` - `해바라기`

해커그라운드 해커톤에 참여하는 `Crescendo` 팀의 `해바라기`입니다.

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

- powershell, 터미널 등은 컴퓨터 내의 검색을 통해 찾을 수 있습니다.

## 환경 설정 - 2

0. 환경 설정

0-1. 자바 & 인텔리제이 설치

0-1-1. window에서 자바 설치

https://www.oracle.com/java/technologies/downloads/
오라클에서
<img width="641" alt="스크린샷 2024-08-26 오후 5 32 38" src="https://github.com/user-attachments/assets/5d168890-4318-4553-a10c-2af7a551445e">
<br>
자바 17을 다운받습니다. 설치할 때는 따로 설정할 내용을 없습니다.

<img width="267" alt="스크린샷 2024-08-26 오후 5 34 09" src="https://github.com/user-attachments/assets/3d529075-92ae-4cdc-bcee-1c9bf567017f"><br>
<img width="487" alt="스크린샷 2024-08-26 오후 5 34 31" src="https://github.com/user-attachments/assets/6327a6a4-60ad-450a-a8bc-f4dd242ce9df"><br>
<img width="605" alt="스크린샷 2024-08-26 오후 5 34 46" src="https://github.com/user-attachments/assets/0262ad10-129b-4555-841f-1d9bf3bbeb31"><br>

변수 명에는 JAVA_HOME, 값에는 아까 JDK17을 설치한 경로를 입력합니다. 사진과 같이 입력하면 됩니다.
<img width="623" alt="스크린샷 2024-08-26 오후 5 35 08" src="https://github.com/user-attachments/assets/448f180f-1cf5-42f6-81e8-ba5912231764"><br>

다음과 같이 입력합니다.
<img width="620" alt="스크린샷 2024-08-26 오후 5 35 57" src="https://github.com/user-attachments/assets/eee7f27f-d752-4eb5-86b4-42b6ae776ac4"><br>

시스템 변수 중, 변수가 Path인 것을 찾아 편집을 클릭합니다.
<img width="612" alt="스크린샷 2024-08-26 오후 5 36 52" src="https://github.com/user-attachments/assets/130494f8-3e2a-4c49-bd7a-e0dd99332fd4"><br>

새로 만들기를 클릭합니다.
<img width="538" alt="스크린샷 2024-08-26 오후 5 37 38" src="https://github.com/user-attachments/assets/5f555481-4e67-46bf-a1f9-8d7e4cd28b7d"><br>


입력 창에 %JAVA_HOME%\bin\ 을 입력하고 확인 버튼을 클릭합니다.
<img width="534" alt="스크린샷 2024-08-26 오후 5 38 45" src="https://github.com/user-attachments/assets/ee163a99-49db-43fc-8728-2debad570bb6"><br>

---------

0-1-2. mac에서 자바 설치

오라클 홈페이지에서 맥 os 자바 17을 설치한다.
https://www.oracle.com/java/technologies/downloads/

터미널에서 아래 명령어를 차례로 입력합니다.
```
cd /Library/Java/JavaVirtualMachines

cd jdk-17.jdk/Contents/Home/

pwd
```
입력 후 나온 주소를 복사한다.

다음 명령어를 통해 편집기를 연다. 읽기모드로 실행되므로 키보드의 i 를 눌러 INSERT 모드로 변환한 후 다음을 입력한다
```
vi ~/.bash_profile
```

다음 내용을 .bash_profile 에 붙여넣어 JAVA 경로를 설정한다.
주의 ** JAVA_HOME의 값은 아까 복사한 주소이다
```
JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home
PATH=$PATH:$JAVA_HOME/bin
export JAVA_HOME
export PATH
```

모두 입력 후 esc를 누르고 :wq!를 입력하여 빠져나온다.

다음 명령어를 입력하여 환경변수를 적용한다.
```
source .bash_profile
```

```
# 환경변수 설정 확인
echo $JAVA_HOME

# 자바 버전 확인
java -version
```


0-1-3. 인텔리제이 설치
아래 링크에서 각자의 운영체제에 맞는 버전 설치
https://www.jetbrains.com/ko-kr/idea/download/?section=mac


윈도우서 다운로드할 때 설정입니다.
<img width="489" alt="스크린샷 2024-08-27 오전 5 49 44" src="https://github.com/user-attachments/assets/ec453e0e-c33e-417a-b02a-f36b8e2bc13a">

--------

0-2. brew 설치 (mac)

아래 명령어를 터미널에 입력합니다.

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

0-2. winget 설치 (window)

다음 링크에서 winget을 설치합니다.
https://apps.microsoft.com/detail/9nblggh4nns1?rtc=1&hl=ko-kr&gl=KR#activetab=pivot:overviewtab
파워셀에 winget을 입력했을 때 정보가 나온다면 설치되어있는 것입니다.

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
winget install -e --id Microsoft.AzureCLI
```

0-3-3. GH CLI

```
# 맥
brew install gh
```

```
# 윈도우
winget install -e --id GitHub.cli
```


## 시작하기

1. 이 리포지토리를 자신의 GitHub 계정으로 포크합니다.

1-1. 우측 상단 버튼 Fork를 눌러 포크할 수 있습니다.

![1](https://github.com/hackersground-kr/hg-crescendo-server/blob/main/images/az1.png)

     1-2. 그대로 아래 creat fork을 클릭합니다.

![image.png](https://github.com/hackersground-kr/hg-crescendo-server/blob/main/images/az2.png)

     1-3. 자신의 리포지토리로 이동합니다.

2. 포크한 리포지토리에서 자신의 컴퓨터로 클론합니다.

2-1. 초록색 Code를 눌러서 나온 HTTPS 링크를 복사하고,

![image.png](https://github.com/hackersground-kr/hg-crescendo-server/blob/main/images/az3.png)

2-2. 터미널 또는 파워셀에 아래 명령어를 입력합니다.

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
# GITHUB_TOKEN=
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
# window (** powershell, 띄어쓰기 주의)
$AZURE_ENV_NAME = "{{ GITHUB_ID }}"

# {{ }} 를 모두 지우고 " " 안에 자신의 깃헙 아이디를 적어주세요

# 공통
azd init -e $AZURE_ENV_NAME
# Use code in the current directory를 선택하고 엔터를 클릭합니다.
# Confirm and continue initializing my app를 선택하고 엔터를 클릭합니다.
```



5-1. 다음과 같은 메시지가 출력됩니다
```
SUCCESS: Your app is ready for the cloud!
```


## 환경설정 끝났다면

https://portal.azure.com/#home 에 접속합니다.

1. DB 생성하기

![png](https://github.com/hackersground-kr/hg-crescendo-server/blob/main/images/az4.png)

1-1. Cosmos DB를 검색합니다. +만들기를 클릭합니다

1-2. Others 에 PostgreSQL 을 선택합니다. (만들기 클릭)

![png](https://github.com/hackersground-kr/hg-crescendo-server/blob/main/images/az5.png)

1-3-1. 할당된 리소스 그룹을 선택합니다.

1-3-2. 데이터베이스 이름을 설정합니다.

1-3-3. 위치는 Korea Central (한국 중부) 를 선택합니다.

1-3-4. postgreSQL 16버전을 선택합니다.

1-3-5. 데이터베이스에 사용할 password를 입력합니다. (까먹지 마세요)

** db네임은 변경하지 않습니다. (citus)

1-3-6. 네트워킹으로 넘어갑니다

![image.png](https://github.com/hackersground-kr/hg-crescendo-server/blob/main/images/az6.png)

1-4. 다음 버튼을 클릭하여 네트워킹 아이피 전체허용을 해줍니다.

![image.png](https://github.com/hackersground-kr/hg-crescendo-server/blob/main/images/az7.png)

1-5. 만듭니다.

![png](https://github.com/hackersground-kr/hg-crescendo-server/blob/main/images/az8.png)


---


다시 azure portal로 돌아갑니다.

![png](https://github.com/hackersground-kr/hg-crescendo-server/blob/main/images/az11.png))

3. 서버 배포하기 + 깃 액션 적용하기

3-1. 리소스 만들기

3-1-1. app service를 검색합니다.

3-1-2. 만들기 → 웹앱

3-1-3. 할당된 리소스 그룹을 선택합니다

3-1-4. 고유한 호스트 이름(서버의 도메인 주소)를 설정할 수 있습니다. (선택사항, 필수 X, 만약 켠다면 도메인 이름이 복잡해집니다.)

3-1-5. 코드 → 자바 17 → java SE 그리고 korea Central을 선택합니다.

![image.png](https://github.com/hackersground-kr/hg-crescendo-server/blob/main/images/az12.png)

3-1-6. 네트워킹이 만약 이렇게 설정되어있지 않다면 아래와 같이 설정합니다.

![pn](https://github.com/hackersground-kr/hg-crescendo-server/blob/main/images/az13.png)

3-1-7. 검토 및 만들기를 합니다.

다시 cosmosDB - postgre로 돌아갑니다.

3-1-8 ai 사용

애저 포털에서 openAI 검색 및 +만들기
이름은 아무렇게나, 지역은 korea central 선택하고 생성합니다. 

3-1-8-1

리소스 관리 - 키 값 및 엔드포인트에 들어가면 키가 2개가 생성된걸 확인할 수 있습니다.
<img width="763" alt="스크린샷 2024-08-27 오전 7 16 45" src="https://github.com/user-attachments/assets/4828c264-a084-4aeb-8812-96ef0c411c3c">



3-2-0. DB 연결 및 환경변수

3-2-0-1. 설정 - 연결 문자열 - JDBC의 url을 ‘?’전까지만 복사합니다.

![png](https://github.com/hackersground-kr/hg-crescendo-server/blob/main/images/az9.png)




아까 만든 웹앱 소스에서 설정 -  환경변수에서 +추가를 클릭합니다.

1번째 이름: DB_URL, 값: 방금 복사한 데이터베이스 url

2번쨰 이름: DB_PW, 값: 자신의 db 비밀번호

3번째 이름: CHATGPT_API_KEY, 값: openai의 key 1 또는 2(선택)

이렇게 총 3개를 만들고 적용합니다.



3-2. git Actions 설정하기

3-2-1. 배포 → 배포 센터에 들어갑니다

3-2-2. 소스 : GitHub

3-2-3. 포크해온 리포지토리와 main 분기를 선택합니다

3-2-4. 설정을 마쳤다면 저장을 누릅니다. 깃액션이 활성화됩니다.



3-2-5-1. intellij에서 자신이 포크한 폴더 경로를 열어줍니다. (hg-crescendo-server)

![image.png](https://github.com/hackersground-kr/hg-crescendo-server/blob/main/images/az14.png)

3-2-5-2. intelliJ에서 터미널을 열고 아래의 명령어를 입력합니다.

```
git pull
```

3-2-6. .github/workflows 폴더에 yml파일이 두개가 있습니다. 원래 있던 파일을 삭제합니다.

3-2-7. 새로 생긴 yml 파일에 내용을 다음과 같이 변경합니다. 복사 붙여넣기를 하셔도 괜찮습니다. 

단 ** 주의할 점

1. 가장 아래에서 2번째에 app-name 은 당신의 웹앱 리소스 네임으로 변경하셔야합니다. 
2. client-id, tanant-id, subscription-id는 자신이 발급받은 키를 쓰셔야 합니다. 이전 파일 지웠어도 깃허브 commit 기록 보면 찾을 수 있습니다.

```
# Docs for the Azure Web Apps Deploy action: https://github.com/Azure/webapps-deploy
# More GitHub Actions for Azure: https://github.com/Azure/actions

name: Build and deploy WAR app to Azure Web App - sh-study-azure

on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Set up Java version
        uses: actions/setup-java@v4
        with:
          java-version: '17'
          distribution: 'microsoft'

      - name: Build with Gradle
        run: |
          cd crescendo-server
          ./gradlew bootJar

      - name: check build completed
        run: ls -al crescendo-server/build/libs

      - name: Upload artifact for deployment job
        uses: actions/upload-artifact@v4
        with:
          name: java-app
          path: 'crescendo-server/build/libs/crescendo-server-0.0.1-SNAPSHOT.jar'

  deploy:
    runs-on: ubuntu-latest
    needs: build
    environment:
      name: 'Production'
      url: ${{ steps.deploy-to-webapp.outputs.webapp-url }}
    permissions:
      id-token: write #This is required for requesting the JWT

    steps:
      - name: Download artifact from build job
        uses: actions/download-artifact@v4
        with:
          name: java-app

      - name: Check Download Complete
        run: ls -al

      - name: Login to Azure
        uses: azure/login@v2
        with:
          client-id: ${{ secrets.AZUREAPPSERVICE_CLIENTID_yourKey }}
          tenant-id: ${{ secrets.AZUREAPPSERVICE_TENANTID_yourKey }}
          subscription-id: ${{ secrets.AZUREAPPSERVICE_SUBSCRIPTIONID_yourKey }}

      - name: Deploy to Azure Web App
        id: deploy-to-webapp
        uses: azure/webapps-deploy@v3
        with:
          app-name: 'sh-crescendo-server'
          package: 'crescendo-server-0.0.1-SNAPSHOT.jar'
```

3-2-8. 모두 변경했다면 다음 명령어를 차례대로 하나씩 실행합니다.

```
git add .
git commit -m "edit yml2"
git push
```

배포 완료 후 확인 방법

CI/CD 로그에 앱 서비스 링크 혹은

![png](https://github.com/hackersground-kr/hg-crescendo-server/blob/main/images/az15.png)

배포한 웹앱 소스에 도메인을 통해 확인할 수 있습니다.
![image.png](https://github.com/hackersground-kr/hg-crescendo-server/blob/main/images/az16.png)
