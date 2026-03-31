export type Lang = "en" | "ko";

export const t = (key: string, lang: Lang): string => {
  return translations[key]?.[lang] ?? key;
};

const translations: Record<string, Record<Lang, string>> = {
  // Page 1
  "title": { en: "Vibe Camp", ko: "바이브 캠프" },
  "subtitle": { en: "Learn to build websites with AI", ko: "AI와 함께 웹사이트 만들기" },
  "whatIsVibe": { en: "What is Vibe Coding?", ko: "바이브 코딩이란?" },
  "vibeDesc": {
    en: "Vibe Coding means using AI tools to help you write code faster and easier. You describe what you want, and AI helps build it!",
    ko: "바이브 코딩은 AI 도구를 사용하여 더 빠르고 쉽게 코드를 작성하는 것입니다. 원하는 것을 설명하면 AI가 만들어 줍니다!"
  },
  "whatWeUse": { en: "What will we use?", ko: "무엇을 사용할까요?" },
  "goalTitle": { en: "Goal of this lesson", ko: "이 수업의 목표" },
  "goal1": { en: "Learn basic coding", ko: "기본 코딩 배우기" },
  "goal2": { en: "Use AI to build faster", ko: "AI를 활용해 더 빠르게 만들기" },
  "goal3": { en: "Publish a real website", ko: "실제 웹사이트 배포하기" },
  "startLesson": { en: "Start Lesson →", ko: "수업 시작 →" },

  // Lesson Selection
  "chooseLesson": { en: "Choose Your Lesson", ko: "수업을 선택하세요" },
  "chooseLessonSubtitle": { en: "Pick a project and start building with AI", ko: "프로젝트를 선택하고 AI와 함께 만들어보세요" },
  "lesson0Title": { en: "Introduction", ko: "소개" },
  "lesson0Desc": { en: "Get started with the basics — HTML, CSS, and how to set up your tools", ko: "기초부터 시작하세요 — HTML, CSS, 그리고 도구 설정 방법" },
  "lesson1Title": { en: "Profile Website Project", ko: "프로필 웹사이트 프로젝트" },
  "lesson1Desc": { en: "Use AI to vibe-code your personal profile page", ko: "AI를 사용하여 나만의 프로필 페이지를 바이브 코딩하세요" },
  "lesson2Title": { en: "Tic Tac Toe Game", ko: "틱택토 게임" },
  "lesson2Desc": { en: "Build a 1v1 game with scores, animations, and win/lose effects", ko: "점수, 애니메이션, 승패 효과가 있는 1대1 게임을 만드세요" },
  "lesson3Title": { en: "Chat AI Web App", ko: "채팅 AI 웹 앱" },
  "lesson3Desc": { en: "Build a chat interface and learn JavaScript interaction", ko: "채팅 인터페이스를 만들고 JavaScript 인터랙션을 배우세요" },
  "backToHome": { en: "Back to Lessons", ko: "수업 목록으로" },

  // Page 2
  "setupTitle": { en: "Setup Checklist", ko: "준비 체크리스트" },
  "setupDesc": { en: "Make sure you have everything ready before we begin!", ko: "시작하기 전에 모든 것이 준비되었는지 확인하세요!" },
  "gmail": { en: "Have a Gmail account", ko: "Gmail 계정 보유" },
  "gmailDesc": { en: "We'll use Google to sign into services", ko: "서비스 로그인에 Google을 사용합니다" },
  "windsurf": { en: "Install Windsurf", ko: "Windsurf 설치" },
  "windsurfDesc": { en: "Our AI-powered code editor", ko: "AI 기반 코드 에디터" },
  "netlify": { en: "Create a Netlify account", ko: "Netlify 계정 생성" },
  "netlifyDesc": { en: "Free hosting for your website", ko: "웹사이트 무료 호스팅" },

  // Page 3
  "htmlTitle": { en: "HTML Basics", ko: "HTML 기초" },
  "htmlDesc": { en: "HTML is the skeleton of every website. Let's learn the basics!", ko: "HTML은 모든 웹사이트의 뼈대입니다. 기초를 배워봅시다!" },
  "titleTag": { en: "title = what shows in the browser tab", ko: "title = 브라우저 탭에 표시되는 내용" },
  "h1Tag": { en: "h1 = the main heading", ko: "h1 = 메인 제목" },
  "pTag": { en: "p = a paragraph of text", ko: "p = 텍스트 단락" },

  // Page 4
  "cssTitle": { en: "CSS Basics", ko: "CSS 기초" },
  "cssDesc": { en: "CSS makes your website beautiful. It controls colors, fonts, and layout!", ko: "CSS는 웹사이트를 아름답게 만듭니다. 색상, 글꼴, 레이아웃을 제어합니다!" },
  "bgColor": { en: "background-color → changes the background", ko: "background-color → 배경색 변경" },
  "textColor": { en: "color → changes the text color", ko: "color → 글자색 변경" },
  "textAlign": { en: "text-align → centers or aligns text", ko: "text-align → 텍스트 정렬" },
  "tryTask": { en: "🎨 Try it yourself!", ko: "🎨 직접 해보세요!" },
  "tryTaskDesc": { en: "Try changing the colors in the CSS above. What happens if you use 'lightblue' or '#ff6b6b'?", ko: "위의 CSS에서 색상을 변경해 보세요. 'lightblue'나 '#ff6b6b'를 사용하면 어떻게 될까요?" },

  // Basics Complete
  "basicsCongrats": { en: "🎉 You've completed the Introduction!", ko: "🎉 소개를 완료했습니다!" },
  "basicsCongratsDesc": { en: "You now know HTML and CSS fundamentals. Pick a project lesson to start building with AI!", ko: "이제 HTML과 CSS 기초를 알게 되었습니다. 프로젝트 수업을 선택하여 AI와 함께 만들어보세요!" },

  // Page 5 - Vibe Coding
  "vibeIntroTitle": { en: "Let's Vibe Code!", ko: "바이브 코딩을 시작하자!" },
  "vibeIntroDesc": { en: "We'll use AI to generate our code. Copy the prompt below, paste it into your AI IDE, and let AI build it for you!", ko: "AI를 사용하여 코드를 생성하겠습니다. 아래 프롬프트를 복사하여 AI IDE에 붙여넣고, AI가 만들어 주게 하세요!" },
  "promptLabel": { en: "Copy this prompt:", ko: "이 프롬프트를 복사하세요:" },
  "promptText": {
    en: "Create a modern personal profile website using HTML and CSS. Include a profile photo placeholder, name, short bio, list of hobbies, and social media links. Use a clean, minimal design with soft colors.",
    ko: "HTML과 CSS를 사용하여 현대적인 개인 프로필 웹사이트를 만들어주세요. 프로필 사진 자리, 이름, 짧은 자기소개, 취미 목록, SNS 링크를 포함해주세요. 부드러운 색상의 깔끔하고 미니멀한 디자인을 사용해주세요."
  },
  "vibeStep1": { en: "Copy the prompt above", ko: "위의 프롬프트를 복사하세요" },
  "vibeStep2": { en: "Paste it into your AI IDE (Windsurf)", ko: "AI IDE (Windsurf)에 붙여넣으세요" },
  "vibeStep3": { en: "AI will generate the code for you", ko: "AI가 코드를 생성해 줍니다" },
  "vibeStep4": { en: "Run the code and see your website!", ko: "코드를 실행하고 웹사이트를 확인하세요!" },

  // Page 6 - Build / Personalize
  "buildTitle": { en: "Personalize Your Profile", ko: "프로필 개인화하기" },
  "buildDesc": { en: "Now make the AI-generated code your own! Update these sections:", ko: "이제 AI가 생성한 코드를 나만의 것으로 만드세요! 다음 섹션을 업데이트하세요:" },
  "name": { en: "Name", ko: "이름" },
  "bio": { en: "Bio", ko: "자기소개" },
  "hobbies": { en: "Hobbies", ko: "취미" },
  "socialLinks": { en: "Social Links", ko: "SNS 링크" },
  "tipsTitle": { en: "💡 Tips to customize", ko: "💡 커스터마이즈 팁" },
  "tip1": { en: "Change colors to match your personality", ko: "자신만의 색상으로 변경하세요" },
  "tip2": { en: "Add a profile image", ko: "프로필 이미지를 추가하세요" },
  "tip3": { en: "Customize the content and layout", ko: "콘텐츠와 레이아웃을 커스터마이즈하세요" },
  "personalizeHow": { en: "How to personalize", ko: "개인화 방법" },
  "personalizeStep1": { en: "Change your name and bio text in the HTML", ko: "HTML에서 이름과 자기소개 텍스트를 변경하세요" },
  "personalizeStep2": { en: "Swap colors in the CSS to match your style", ko: "CSS에서 색상을 자신의 스타일에 맞게 바꾸세요" },
  "personalizeStep3": { en: "Add your own photo or avatar", ko: "자신의 사진이나 아바타를 추가하세요" },
  "personalizeStep4": { en: "Update hobby list and social links", ko: "취미 목록과 SNS 링크를 업데이트하세요" },

  // Page 7
  "deployTitle": { en: "Deploy Your Website!", ko: "웹사이트 배포하기!" },
  "deployDesc": { en: "Let's put your website on the internet for everyone to see!", ko: "모두가 볼 수 있도록 웹사이트를 인터넷에 올려봅시다!" },
  "step1": { en: "Go to Netlify and sign in", ko: "Netlify에 접속하여 로그인하세요" },
  "step2": { en: "Drag and drop your project folder", ko: "프로젝트 폴더를 드래그 앤 드롭하세요" },
  "step3": { en: "Get your live website link!", ko: "라이브 웹사이트 링크를 받으세요!" },
  "congrats": { en: "🎉 You now have a real website!", ko: "🎉 이제 실제 웹사이트가 생겼습니다!" },
  "congratsDesc": { en: "Share it with your friends and family. You're a web developer now!", ko: "친구들과 가족에게 공유하세요. 이제 여러분은 웹 개발자입니다!" },

  // Chat Lesson
  "chatTitle": { en: "Chat AI Web App", ko: "채팅 AI 웹 앱" },
  "chatSubtitle": { en: "Build a real AI chat app using a free API", ko: "무료 API를 사용하여 진짜 AI 채팅 앱 만들기" },
  "chatWhatIs": { en: "What is a Chat App?", ko: "채팅 앱이란?" },
  "chatWhatIsDesc": {
    en: "A chat app lets you send messages and get AI-powered responses! We'll use OpenRouter's free API to connect to a real AI model.",
    ko: "채팅 앱은 메시지를 보내고 AI 응답을 받을 수 있게 합니다! OpenRouter의 무료 API를 사용하여 실제 AI 모델에 연결합니다."
  },
  "chatWhatBuild": { en: "What will we build?", ko: "무엇을 만들까요?" },
  "chatGoal1": { en: "Chat UI with message bubbles", ko: "메시지 말풍선이 있는 채팅 UI" },
  "chatGoal2": { en: "Style with CSS", ko: "CSS로 스타일링하기" },
  "chatGoal3": { en: "Deploy online", ko: "온라인에 배포하기" },
  "chatGoalJs": { en: "Connect to a free AI model via OpenRouter", ko: "OpenRouter를 통해 무료 AI 모델에 연결" },

  "chatHtmlDiffTitle": { en: "How is this different?", ko: "무엇이 다를까요?" },
  "chatHtmlDiffDesc": {
    en: "Unlike previous projects, this app calls a real AI API! Your messages go to an AI model, and it responds. The HTML includes a message area and input — but JavaScript does the heavy lifting:",
    ko: "이전 프로젝트와 달리, 이 앱은 실제 AI API를 호출합니다! 메시지가 AI 모델로 전송되고 응답을 받습니다. HTML에는 메시지 영역과 입력이 포함되지만 JavaScript가 핵심 역할을 합니다:"
  },

  // Chat API Setup
  "chatApiTitle": { en: "Get Your Free API Key", ko: "무료 API 키 받기" },
  "chatApiDesc": { en: "We'll use OpenRouter to access free AI models — no credit card needed!", ko: "OpenRouter를 사용하여 무료 AI 모델에 접근합니다 — 신용카드 불필요!" },
  "chatApiWhat": { en: "What is OpenRouter?", ko: "OpenRouter란?" },
  "chatApiWhatDesc": {
    en: "OpenRouter is a service that gives you access to many AI models through one API. Some models are completely free — perfect for our chat app!",
    ko: "OpenRouter는 하나의 API로 여러 AI 모델에 접근할 수 있게 해주는 서비스입니다. 일부 모델은 완전히 무료 — 우리 채팅 앱에 완벽합니다!"
  },
  "chatApiStep1": {
    en: "Go to openrouter.ai and click 'Sign Up'",
    ko: "openrouter.ai에 접속하고 'Sign Up'을 클릭하세요"
  },
  "chatApiStep2": {
    en: "Sign in with your Google account",
    ko: "Google 계정으로 로그인하세요"
  },
  "chatApiStep3": {
    en: "Go to 'Keys' in the menu and click 'Create Key'",
    ko: "메뉴에서 'Keys'로 가서 'Create Key'를 클릭하세요"
  },
  "chatApiStep4": {
    en: "Copy the key — you'll paste it into the prompt!",
    ko: "키를 복사하세요 — 프롬프트에 붙여넣을 거예요!"
  },

  "chatPromptTitle": { en: "AI Prompt for Chat App", ko: "채팅 앱 AI 프롬프트" },
  "chatPromptDesc": { en: "Copy this prompt and paste it into your AI IDE. Replace YOUR_API_KEY with the key you just got!", ko: "이 프롬프트를 복사하여 AI IDE에 붙여넣으세요. YOUR_API_KEY를 방금 받은 키로 교체하세요!" },
  "chatPromptText": {
    en: `Create a simple AI chat app using HTML, CSS, and JavaScript. 

Features:
- Clean chat UI with message bubbles (user on right, AI on left)
- Input field and send button
- Send messages with Enter key or click
- Connect to OpenRouter API to get AI responses
- Use the free model: deepseek/deepseek-chat-v3-0324:free
- Show a loading indicator while AI is responding

Use this API setup:
- Endpoint: https://openrouter.ai/api/v1/chat/completions
- API Key: YOUR_API_KEY (replace with your key)
- Model: deepseek/deepseek-chat-v3-0324:free

Use a modern, clean design with soft colors and smooth animations.`,
    ko: `HTML, CSS, JavaScript를 사용하여 간단한 AI 채팅 앱을 만들어주세요.

기능:
- 메시지 말풍선이 있는 깔끔한 채팅 UI (사용자는 오른쪽, AI는 왼쪽)
- 입력 필드와 전송 버튼
- Enter 키 또는 클릭으로 메시지 전송
- OpenRouter API에 연결하여 AI 응답 받기
- 무료 모델 사용: deepseek/deepseek-chat-v3-0324:free
- AI가 응답하는 동안 로딩 표시

API 설정:
- 엔드포인트: https://openrouter.ai/api/v1/chat/completions
- API 키: YOUR_API_KEY (본인의 키로 교체)
- 모델: deepseek/deepseek-chat-v3-0324:free

현대적이고 깔끔한 디자인과 부드러운 색상, 부드러운 애니메이션을 사용해주세요.`
  },

  "chatJsTitle": { en: "How Your Chat Works", ko: "채팅이 어떻게 작동하나요" },
  "chatJsDesc": { en: "A quick look at what AI built for you — no need to memorize this!", ko: "AI가 만들어준 것을 간단히 살펴봅시다 — 외울 필요 없어요!" },
  "chatJsPart1": { en: "Gets your message from the input field", ko: "입력 필드에서 메시지를 가져옵니다" },
  "chatJsPart2": { en: "Sends it to the AI model via OpenRouter API", ko: "OpenRouter API를 통해 AI 모델에 전송합니다" },
  "chatJsPart3": { en: "Displays the AI's response as a chat bubble", ko: "AI의 응답을 채팅 말풍선으로 표시합니다" },

  "chatPersonalizeTitle": { en: "Personalize Your Chat App", ko: "채팅 앱 개인화하기" },
  "chatPersonalizeDesc": { en: "Make the AI-generated chat app your own!", ko: "AI가 생성한 채팅 앱을 나만의 것으로 만드세요!" },
  "chatPersonalize1": { en: "Change the color scheme of chat bubbles", ko: "채팅 말풍선의 색상을 변경하세요" },
  "chatPersonalize2": { en: "Add your app name and header", ko: "앱 이름과 헤더를 추가하세요" },
  "chatPersonalize3": { en: "Customize fonts and bubble styles", ko: "글꼴과 말풍선 스타일을 커스터마이즈하세요" },
  "chatPersonalize4": { en: "Give the AI a custom personality in the system prompt", ko: "시스템 프롬프트에서 AI에 맞춤 성격을 부여하세요" },

  "chatUpgradeTitle": { en: "Upgrade Ideas", ko: "업그레이드 아이디어" },
  "chatUpgradeDesc": { en: "Take your chat app to the next level with these prompts!", ko: "이 프롬프트들로 채팅 앱을 다음 단계로 발전시켜 보세요!" },
  "chatUpgrade1": { en: "Rate Limit Timer", ko: "요청 제한 타이머" },
  "chatUpgrade1Desc": { en: "Add a cooldown timer that shows how long until you can send the next message (free models have rate limits!)", ko: "다음 메시지를 보낼 수 있을 때까지의 쿨다운 타이머를 추가하세요 (무료 모델은 요청 제한이 있습니다!)" },
  "chatUpgrade2": { en: "AI Personality", ko: "AI 성격 설정" },
  "chatUpgrade2Desc": { en: "Add a dropdown to switch the AI's personality — friendly, sarcastic, pirate, teacher, etc.", ko: "AI의 성격을 전환하는 드롭다운 추가 — 친근한, 비꼬는, 해적, 선생님 등" },
  "chatUpgrade3": { en: "Custom Theme", ko: "커스텀 테마" },
  "chatUpgrade3Desc": { en: "Let users switch between dark and light mode", ko: "사용자가 다크/라이트 모드를 전환할 수 있게 하기" },
  "chatUpgradeTip": { en: "💡 About rate limits", ko: "💡 요청 제한에 대해" },
  "chatUpgradeTipDesc": { en: "Free models on OpenRouter have rate limits (about 20 requests/minute). Adding a timer helps users know when they can send again!", ko: "OpenRouter의 무료 모델은 요청 제한이 있습니다 (약 20요청/분). 타이머를 추가하면 사용자가 언제 다시 보낼 수 있는지 알 수 있습니다!" },

  "chatCongrats": { en: "🎉 Your AI chat app is live!", ko: "🎉 AI 채팅 앱이 완성되었습니다!" },
  "chatCongratsDesc": { en: "You built a real AI-powered web app! Share it with friends and keep improving.", ko: "진짜 AI 기반 웹 앱을 만들었습니다! 친구들에게 공유하고 계속 개선하세요." },

  // Tic Tac Toe Lesson
  "tttTitle": { en: "Tic Tac Toe Game", ko: "틱택토 게임" },
  "tttSubtitle": { en: "Build a fun 1v1 game with AI", ko: "AI와 함께 재미있는 1대1 게임 만들기" },
  "tttWhatIs": { en: "What is Tic Tac Toe?", ko: "틱택토란?" },
  "tttWhatIsDesc": {
    en: "A classic two-player game where players take turns marking X or O on a 3×3 grid. The first to get three in a row wins!",
    ko: "두 플레이어가 번갈아가며 3×3 격자에 X 또는 O를 표시하는 클래식 게임입니다. 먼저 세 개를 일렬로 놓으면 승리합니다!"
  },
  "tttWhatBuild": { en: "What will we build?", ko: "무엇을 만들까요?" },
  "tttGoal1": { en: "3×3 game board with click interaction", ko: "클릭 인터랙션이 있는 3×3 게임 보드" },
  "tttGoal2": { en: "1v1 turn-based gameplay", ko: "1대1 턴제 게임플레이" },
  "tttGoal3": { en: "Score tracking for both players", ko: "양쪽 플레이어 점수 추적" },
  "tttGoal4": { en: "Win/lose/draw animations", ko: "승리/패배/무승부 애니메이션" },
  "tttGoal5": { en: "Pause and play functionality", ko: "일시정지 및 재개 기능" },

  "tttPromptTitle": { en: "AI Prompt for Tic Tac Toe", ko: "틱택토 AI 프롬프트" },
  "tttPromptDesc": { en: "Copy this prompt and paste it into your AI IDE!", ko: "이 프롬프트를 복사하여 AI IDE에 붙여넣으세요!" },
  "tttPromptText": {
    en: "Create a Tic Tac Toe game using HTML, CSS, and JavaScript. Include: a 3x3 grid board, 1v1 turn-based gameplay (Player X vs Player O), score tracking for both players, a pause/play button, win detection with a highlight animation on the winning row, lose and draw indicators, a reset/new game button, and simple animations for placing marks and game results. Use a clean modern design with smooth transitions.",
    ko: "HTML, CSS, JavaScript를 사용하여 틱택토 게임을 만들어주세요. 포함할 기능: 3x3 격자 보드, 1대1 턴제 게임플레이(Player X vs Player O), 양쪽 플레이어 점수 추적, 일시정지/재개 버튼, 승리 시 줄 하이라이트 애니메이션, 패배 및 무승부 표시, 리셋/새 게임 버튼, 마크 배치와 게임 결과에 대한 간단한 애니메이션. 깔끔하고 현대적인 디자인과 부드러운 전환을 사용해주세요."
  },

  "tttJsTitle": { en: "How Your Game Works", ko: "게임이 어떻게 작동하나요" },
  "tttJsDesc": { en: "A quick look at what AI built for you — no need to memorize this!", ko: "AI가 만들어준 것을 간단히 살펴봅시다 — 외울 필요 없어요!" },
  "tttJsPart1": { en: "Track board state in an array (9 cells)", ko: "배열로 보드 상태 추적 (9칸)" },
  "tttJsPart2": { en: "Switch turns between X and O", ko: "X와 O 사이의 턴 전환" },
  "tttJsPart3": { en: "Check win conditions (rows, columns, diagonals)", ko: "승리 조건 확인 (행, 열, 대각선)" },
  "tttJsPart4": { en: "Update scores and show results", ko: "점수 업데이트 및 결과 표시" },

  "tttPersonalizeTitle": { en: "Personalize Your Game", ko: "게임 개인화하기" },
  "tttPersonalizeDesc": { en: "Make the AI-generated game your own!", ko: "AI가 생성한 게임을 나만의 것으로 만드세요!" },
  "tttPersonalize1": { en: "Change X and O to emojis or custom symbols", ko: "X와 O를 이모지나 커스텀 기호로 변경하세요" },
  "tttPersonalize2": { en: "Add player names input", ko: "플레이어 이름 입력을 추가하세요" },
  "tttPersonalize3": { en: "Change the color theme and board style", ko: "색상 테마와 보드 스타일을 변경하세요" },
  "tttPersonalize4": { en: "Add sound effects for moves and wins", ko: "이동과 승리에 효과음을 추가하세요" },

  "tttCongrats": { en: "🎉 Your Tic Tac Toe game is live!", ko: "🎉 틱택토 게임이 완성되었습니다!" },
  "tttCongratsDesc": { en: "Challenge your friends and keep adding features. You built a real game!", ko: "친구들에게 도전하고 기능을 계속 추가하세요. 진짜 게임을 만들었습니다!" },

  "tttUpgradeTip": { en: "💡 About game balance", ko: "💡 게임 균형에 대해" },
  "tttUpgradeTipDesc": { en: "When adding new features, think about game balance. Sound effects should enhance but not distract, and visual effects should be clear but not overwhelming!", ko: "새 기능을 추가할 때 게임 균형을 생각하세요. 효과음은 방해되지 않으면서 향상시켜야 하고, 시각 효과는 명확하지만 과하지 않아야 합니다!" },

  // Hint buttons
  "hintBtnLabel": { en: "💡 Show example prompt", ko: "💡 예시 프롬프트 보기" },
  "profileHintPrompt": {
    en: "Change the background color to light blue, update the name to 'Jane Doe', add a profile picture placeholder as a circle, and change the hobbies to: drawing, gaming, cooking.",
    ko: "배경색을 연한 파란색으로 변경하고, 이름을 '홍길동'으로 바꾸고, 프로필 사진 자리를 원형으로 추가하고, 취미를 그림 그리기, 게임, 요리로 변경해주세요."
  },
  "chatHintPrompt": {
    en: "Add a typing indicator that shows '...' when waiting for a reply. Change the chat bubble colors to green for sent messages and white for received. Add a header with the app name 'My Chat'.",
    ko: "답장을 기다릴 때 '...' 타이핑 표시를 추가하세요. 보낸 메시지는 초록색, 받은 메시지는 흰색으로 말풍선 색상을 변경하세요. 앱 이름 '나의 채팅'이 있는 헤더를 추가하세요."
  },
  "tttHintPrompt": {
    en: "Change X and O to 🔥 and 💧 emojis. Add a glow effect when someone wins. Add player name inputs above the board. Change the board color to dark purple with white grid lines.",
    ko: "X와 O를 🔥와 💧 이모지로 변경하세요. 누가 이기면 빛나는 효과를 추가하세요. 보드 위에 플레이어 이름 입력을 추가하세요. 보드 색상을 흰색 격자선이 있는 진한 보라색으로 변경하세요."
  },

  // Common
  "next": { en: "Next →", ko: "다음 →" },
  "prev": { en: "← Back", ko: "← 이전" },
  "step": { en: "Step", ko: "단계" },
  "of": { en: "of", ko: "/" },
};
