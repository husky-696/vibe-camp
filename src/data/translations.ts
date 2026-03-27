export type Lang = "en" | "ko";

export const t = (key: string, lang: Lang): string => {
  return translations[key]?.[lang] ?? key;
};

const translations: Record<string, Record<Lang, string>> = {
  // Page 1
  "title": { en: "Vibe Coding Workshop", ko: "바이브 코딩 워크숍" },
  "subtitle": { en: "Learn to build websites with AI", ko: "AI와 함께 웹사이트 만들기" },
  "whatIsVibe": { en: "What is Vibe Coding?", ko: "바이브 코딩이란?" },
  "vibeDesc": {
    en: "Vibe Coding means using AI tools to help you write code faster and easier. You describe what you want, and AI helps build it!",
    ko: "바이브 코딩은 AI 도구를 사용하여 더 빠르고 쉽게 코드를 작성하는 것입니다. 원하는 것을 설명하면 AI가 만들어 줍니다!"
  },
  "whatWeUse": { en: "What will we use?", ko: "무엇을 사용할까요?" },
  "whatWeBuild": { en: "What will we build?", ko: "무엇을 만들까요?" },
  "profileWebsite": { en: "A personal profile website", ko: "개인 프로필 웹사이트" },
  "goalTitle": { en: "Goal of this lesson", ko: "이 수업의 목표" },
  "goal1": { en: "Learn basic coding", ko: "기본 코딩 배우기" },
  "goal2": { en: "Use AI to build faster", ko: "AI를 활용해 더 빠르게 만들기" },
  "goal3": { en: "Publish a real website", ko: "실제 웹사이트 배포하기" },
  "startLesson": { en: "Start Lesson →", ko: "수업 시작 →" },

  // Lesson Selection
  "chooseLesson": { en: "Choose Your Lesson", ko: "수업을 선택하세요" },
  "chooseLessonSubtitle": { en: "Pick a project and start building with AI", ko: "프로젝트를 선택하고 AI와 함께 만들어보세요" },
  "lesson1Title": { en: "Profile Website Project", ko: "프로필 웹사이트 프로젝트" },
  "lesson1Desc": { en: "Build your own personal profile page using AI", ko: "AI를 사용하여 나만의 프로필 페이지를 만드세요" },
  "lesson2Title": { en: "Chat AI Web App", ko: "채팅 AI 웹 앱" },
  "lesson2Desc": { en: "Build a simple AI chat interface", ko: "간단한 AI 채팅 인터페이스를 만드세요" },
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

  // Page 5
  "vibeIntroTitle": { en: "Let's Vibe Code!", ko: "바이브 코딩을 시작하자!" },
  "vibeIntroDesc": { en: "Instead of writing everything by hand, we'll ask AI to help us create code!", ko: "모든 것을 직접 작성하는 대신, AI에게 코드 작성을 도움받겠습니다!" },
  "promptLabel": { en: "Example Prompt:", ko: "예시 프롬프트:" },
  "promptText": {
    en: "Create a modern personal profile website using HTML and CSS. Include a profile photo placeholder, name, short bio, list of hobbies, and social media links. Use a clean, minimal design with soft colors.",
    ko: "HTML과 CSS를 사용하여 현대적인 개인 프로필 웹사이트를 만들어주세요. 프로필 사진 자리, 이름, 짧은 자기소개, 취미 목록, SNS 링크를 포함해주세요. 부드러운 색상의 깔끔하고 미니멀한 디자인을 사용해주세요."
  },
  "vibeRule1": { en: "✅ Read the AI-generated code", ko: "✅ AI가 생성한 코드를 읽어보세요" },
  "vibeRule2": { en: "✅ Modify it to make it yours", ko: "✅ 수정하여 나만의 것으로 만드세요" },
  "vibeRule3": { en: "❌ Don't just copy blindly", ko: "❌ 맹목적으로 복사하지 마세요" },

  // Page 6
  "buildTitle": { en: "Build Your Profile", ko: "프로필 만들기" },
  "buildDesc": { en: "Use AI to generate your personal profile page. Include these sections:", ko: "AI를 사용하여 개인 프로필 페이지를 생성하세요. 다음 섹션을 포함하세요:" },
  "name": { en: "Name", ko: "이름" },
  "bio": { en: "Bio", ko: "자기소개" },
  "hobbies": { en: "Hobbies", ko: "취미" },
  "socialLinks": { en: "Social Links", ko: "SNS 링크" },
  "tipsTitle": { en: "💡 Tips to customize", ko: "💡 커스터마이즈 팁" },
  "tip1": { en: "Change colors to match your personality", ko: "자신만의 색상으로 변경하세요" },
  "tip2": { en: "Add a profile image", ko: "프로필 이미지를 추가하세요" },
  "tip3": { en: "Customize the content and layout", ko: "콘텐츠와 레이아웃을 커스터마이즈하세요" },

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
  "chatSubtitle": { en: "Build a simple chat interface with AI", ko: "AI와 함께 간단한 채팅 인터페이스 만들기" },
  "chatWhatIs": { en: "What is a Chat App?", ko: "채팅 앱이란?" },
  "chatWhatIsDesc": {
    en: "A chat app lets users send and receive messages in real-time. We'll build a simple UI — no backend required!",
    ko: "채팅 앱은 사용자가 실시간으로 메시지를 주고받을 수 있게 합니다. 간단한 UI를 만들어 볼게요 — 백엔드는 필요 없습니다!"
  },
  "chatWhatBuild": { en: "What will we build?", ko: "무엇을 만들까요?" },
  "chatGoal1": { en: "Build a chat UI", ko: "채팅 UI 만들기" },
  "chatGoal2": { en: "Style with CSS", ko: "CSS로 스타일링하기" },
  "chatGoal3": { en: "Deploy online", ko: "온라인에 배포하기" },

  "chatHtmlTitle": { en: "Chat HTML Structure", ko: "채팅 HTML 구조" },
  "chatHtmlDesc": { en: "Let's build the skeleton of our chat app!", ko: "채팅 앱의 뼈대를 만들어 봅시다!" },
  "chatHtmlPart1": { en: "The main wrapper for the chat", ko: "채팅의 메인 래퍼" },
  "chatHtmlPart2": { en: "Where messages are displayed", ko: "메시지가 표시되는 곳" },
  "chatHtmlPart3": { en: "Text input and send button", ko: "텍스트 입력과 전송 버튼" },

  "chatCssTitle": { en: "Chat Styling", ko: "채팅 스타일링" },
  "chatCssDesc": { en: "Make the chat look beautiful with CSS!", ko: "CSS로 채팅을 아름답게 만들어 봅시다!" },
  "chatCssPart1": { en: "Chat bubbles with rounded corners", ko: "둥근 모서리의 채팅 말풍선" },
  "chatCssPart2": { en: "Sent messages appear on the right", ko: "보낸 메시지는 오른쪽에 표시" },
  "chatCssPart3": { en: "Received messages appear on the left", ko: "받은 메시지는 왼쪽에 표시" },

  "chatPromptTitle": { en: "AI Prompt for Chat App", ko: "채팅 앱 AI 프롬프트" },
  "chatPromptDesc": { en: "Use this prompt in your AI IDE to generate the chat app!", ko: "AI IDE에서 이 프롬프트를 사용하여 채팅 앱을 생성하세요!" },
  "chatPromptText": {
    en: "Create a simple chat UI using HTML, CSS, and JavaScript. Include: a message display area, input field, send button, and basic styling with chat bubbles.",
    ko: "HTML, CSS, JavaScript를 사용하여 간단한 채팅 UI를 만들어주세요. 메시지 표시 영역, 입력 필드, 전송 버튼, 채팅 말풍선 스타일링을 포함해주세요."
  },

  "chatJsTitle": { en: "Add Interaction", ko: "인터랙션 추가" },
  "chatJsDesc": { en: "Make the chat respond when you send a message!", ko: "메시지를 보내면 채팅이 반응하게 만들어 봅시다!" },
  "chatJsPart1": { en: "Get user input from the text field", ko: "텍스트 필드에서 사용자 입력 가져오기" },
  "chatJsPart2": { en: "Create a new message element and display it", ko: "새 메시지 요소를 만들어 표시하기" },
  "chatJsPart3": { en: "Send with Enter key or click", ko: "Enter 키 또는 클릭으로 전송" },

  "chatUpgradeTitle": { en: "Upgrade Ideas", ko: "업그레이드 아이디어" },
  "chatUpgradeDesc": { en: "Take your chat app to the next level!", ko: "채팅 앱을 다음 단계로 발전시켜 보세요!" },
  "chatUpgrade1": { en: "Connect AI API", ko: "AI API 연결" },
  "chatUpgrade1Desc": { en: "Add OpenAI or another AI to auto-reply to messages", ko: "OpenAI 또는 다른 AI를 연결하여 자동 답장 기능 추가" },
  "chatUpgrade2": { en: "Typing Effect", ko: "타이핑 효과" },
  "chatUpgrade2Desc": { en: "Show a typing animation when AI is responding", ko: "AI가 응답할 때 타이핑 애니메이션 표시" },
  "chatUpgrade3": { en: "Custom Theme", ko: "커스텀 테마" },
  "chatUpgrade3Desc": { en: "Let users switch between dark and light mode", ko: "사용자가 다크/라이트 모드를 전환할 수 있게 하기" },
  "chatUpgradeTip": { en: "💡 Start simple, then improve!", ko: "💡 간단하게 시작한 후 개선하세요!" },
  "chatUpgradeTipDesc": { en: "Get the basic version working first, then add features one at a time.", ko: "먼저 기본 버전을 완성한 후, 기능을 하나씩 추가하세요." },

  "chatCongrats": { en: "🎉 Your chat app is live!", ko: "🎉 채팅 앱이 완성되었습니다!" },
  "chatCongratsDesc": { en: "Share it with friends and keep improving. You built a real web app!", ko: "친구들에게 공유하고 계속 개선하세요. 진짜 웹 앱을 만들었습니다!" },

  // Common
  "next": { en: "Next →", ko: "다음 →" },
  "prev": { en: "← Back", ko: "← 이전" },
  "step": { en: "Step", ko: "단계" },
  "of": { en: "of", ko: "/" },
};
