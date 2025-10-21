let currentLanguage = 'zh';

function toggleLanguage() {
  if (currentLanguage === 'zh') {
    setEnglish();
    currentLanguage = 'en';
    document.getElementById('language-toggle').textContent = 'Switch to Chinese';
  } else {
    setChinese();
    currentLanguage = 'zh';
    document.getElementById('language-toggle').textContent = '切換語言';
  }
}
 
function setEnglish() {
  // 網站標題
  document.getElementById('site-title').textContent = "Ziwen's Personal Website";
  // 導覽列
  document.getElementById('about-link').textContent = 'About Me';
  document.getElementById('extra-link').textContent = 'Another Me';
  document.getElementById('skills-link').textContent = 'Skills';
  document.getElementById('extra-skill-link').textContent = 'Post Showcase';
  document.getElementById('experience-link').textContent = 'Experience';

  // 關於我區塊
  document.getElementById('about-title').textContent = 'About Me';
  document.getElementById('about-text').textContent = "Hi, I'm Ziwen Hung! Welcome to my personal website. I love growth and challenges. I've been a member of the student council and participated in various clubs, which taught me the value of teamwork and leadership!";
  document.getElementById('about-desc1').textContent = "This website will guide you through my background, experiences, and the fields I'm passionate about.";
  document.getElementById('about-desc2').textContent = "#ENFP #ChallengeDriven #SelfGrowth";

  // 關於另一個我區塊
  document.querySelector('#extra h2').textContent = 'About Another Me';
  const extraParagraphs = document.querySelectorAll('#extra .right-side p');
  extraParagraphs[0].textContent = "Besides daily life, I also maintain a personal study journal, recording my learning journey, notes, and small ideas.";
  extraParagraphs[1].textContent = "For me, the study journal is more than just a notebook; it's a small corner where I can slow down, organize my thoughts, and heal myself.";
  extraParagraphs[2].innerHTML = 'IG: <a href="https://www.instagram.com/lil._.log" target="_blank" style="color:#3b5998; text-decoration:none;">lil._.log</a>';

  // 技能區塊
  document.getElementById('skills-title').textContent = 'Skills';
  document.querySelector('#skills p').textContent = "Through classroom learning and project implementation, I have accumulated multi-faceted skills in programming, data analysis, and website development, applicable to various projects. In Python and Java programming, I can independently handle data processing, algorithm design, and optimization. In SQL and data analysis, I'm familiar with database operations and data visualization, quickly extracting valuable insights. I also actively learn frontend and web development, integrating data and functions into user interfaces. Through continuous practice and challenging new technologies, I aim to enhance my professional skills and apply them to solving real-world problems. In the future, I hope to combine technology and creativity to develop impactful and valuable works.";
  document.getElementById('skill-python').textContent = 'Python';
  document.getElementById('skill-java').textContent = 'Java';
  document.getElementById('skill-sql').textContent = 'SQL';
  document.getElementById('skill-web').textContent = 'Web Development';
  document.getElementById('skill-analysis').textContent = 'Data Analysis';

  // 貼文展示區塊
  document.querySelector('#extra-skill h2').textContent = 'Post Showcase';

  // 經驗區塊
  document.getElementById('experience-title').textContent = 'Extracurricular Experience';

  document.getElementById('experience1-title').textContent = 'On-Campus Activity - Student Council';
  document.getElementById('experience1-text').textContent = "In my first year, I joined the student council as a secretary. Participating in many large events helped me learn organization and collaboration skills, as well as improve my time management. In my second year, I became the head of the marketing department, but I resigned a month ago to focus on my studies and personal development. This experience made me deeply understand responsibility and reflect on my future path.";

  document.getElementById('experience2-title').textContent = 'On-Campus Activity - Xiongpeng Club';
  document.getElementById('experience2-text').textContent = "This is a social club where I met many friends from the first general meeting. We participated in team-building activities, grew closer, and had several home gatherings. I enjoyed the relaxed atmosphere and the stress-free participation.";

  document.getElementById('experience3-title').textContent = 'Campus Competition - 3rd National Business Big Data Innovation Competition - 1st Place';
  document.getElementById('experience3-text').textContent = "This competition allowed me to apply big data analysis and business strategy, from data organization to model building and results presentation. I improved my data analysis skills and learned effective communication and teamwork.";

  document.getElementById('experience4-title').textContent = 'Off-Campus Activity - 113th College Female Leadership Training Camp';
  document.getElementById('experience4-text').textContent = "Attending the 113th College Female Leadership Training Camp enhanced my leadership, communication, and problem-solving skills through leadership and teamwork exercises. Collaborating with students from different schools allowed me to practice leadership challenges and boosted my confidence and decision-making.";

  document.getElementById('experience5-title').textContent = 'Off-Campus Activity - Taiwan Youth Cross-Strait Relations Workshop';
  document.getElementById('experience5-text').textContent = "Through courses and discussions, I gained a deeper understanding of cross-strait history, politics, and media literacy. This experience taught me to analyze different perspectives rationally and improved my communication and expression skills, sparking my curiosity for international issues.";
}

function setChinese() {
  // 網站標題
  document.getElementById('site-title').textContent = "Ziwenの個人網頁";
  // 導覽列
  document.getElementById('about-link').textContent = '關於我';
  document.getElementById('extra-link').textContent = '關於另一個我';
  document.getElementById('skills-link').textContent = '技能';
  document.getElementById('extra-skill-link').textContent = '貼文展示';
  document.getElementById('experience-link').textContent = '經驗';
  document.getElementById('language-toggle').textContent = '切換語言';

  // 關於我區塊
  document.getElementById('about-title').textContent = '關於我';
  document.getElementById('about-text').textContent = "Hi，我是洪子雯，歡迎來到我的個人網站！我是一個熱愛成長與挑戰的人，曾為學生會一員，也參加過許多社團，這些經歷讓我學習到團隊合作與領導的價值！";
  document.getElementById('about-desc1').textContent = "這個網站將帶你深入了解我的背景、經歷，以及我熱衷的領域。";
  document.getElementById('about-desc2').textContent = "#ENFP #熱於挑戰 #追求自我";

  // 關於另一個我區塊
  document.querySelector('#extra h2').textContent = '關於另一個我';
  const extraParagraphs = document.querySelectorAll('#extra .right-side p');
  extraParagraphs[0].textContent = "除了生活，我也在經營一個屬於自己的讀書帳~那裡記錄著我在學習路上的點滴、筆記和一些小想法！";
  extraParagraphs[1].textContent = "對我來說，讀書帳不只是筆記本，更是一個讓我在忙碌中放慢腳步、整理思緒、療癒自己的小角落~";
  extraParagraphs[2].innerHTML = 'IG：<a href="https://www.instagram.com/lil._.log" target="_blank" style="color:#3b5998; text-decoration:none;">lil._.log</a>';

  // 技能區塊
  document.getElementById('skills-title').textContent = '技能';
  document.querySelector('#skills p').textContent = "透過課堂學習與專案實作，我累積了程式開發、資料分析與網站建置等多面向技能，能靈活應用於不同專案需求。在Python與Java的程式設計上，我能獨立完成資料處理、演算法設計與程式優化；在SQL與資料分析方面，我熟悉資料庫操作與資料視覺化，能快速從大量資料中找出有價值的洞察。除此之外，我也積極學習前端與Web開發技術，能將資料與功能整合呈現於使用者介面上。透過不斷實作與挑戰新技術，我希望能持續提升自己的專業能力，並將所學運用於解決實際問題中，未來，我期待將技術與創意結合，開發更多有價值且有影響力的作品！。";

  // 貼文展示區塊
  document.querySelector('#extra-skill h2').textContent = '貼文展示';

  // 經驗區塊
  document.getElementById('experience-title').textContent = '課外活動經驗';

  document.getElementById('experience1-title').textContent = '校內活動-學生會';
  document.getElementById('experience1-text').textContent = "在大一時，我加入了學生會並擔任秘書部部員，參與多項大型活動讓我學到了許多組織與協作的技巧，也提升了我的時間管理能力。升上大二後，我接任了行銷部部長一職，不過，因為對未來規劃的考量，我在一個月前選擇辭去該職位，並將重心放回學業與個人發展。這段經歷讓我深刻體會到責任的重大，也使我更加仔細思考未來的發展方向。";

  document.getElementById('experience2-title').textContent = '校內活動-雄屏社團';
  document.getElementById('experience2-text').textContent = "這是一個聯誼性質的社團，從第一次的社員大會裡認識了很多朋友，我們一起參與團康活動，大家的感情也變得更好了。之後也有許多次的家聚，這些活動讓我感受到輕鬆愉快的社團氛圍，而我也很喜歡這種無壓力的參與方式。";

  document.getElementById('experience3-title').textContent = '校內競賽-第三屆全國商務大數據創新競賽-第一名';
  document.getElementById('experience3-text').textContent = "這次比賽讓我實際應用大數據分析與商業策略，從資料整理、模型建立到結果呈現，都深刻體會到理論與實務的結合。透過這個經驗，我不僅提升了數據分析能力，也學會了在團隊中有效溝通與分工。";

  document.getElementById('experience4-title').textContent = '校外活動-113年大專女學生領導力培訓營';
  document.getElementById('experience4-text').textContent = "參加113年大專女學生領導力培訓營，透過一系列領導與團隊合作訓練，提升了我的領導能力、溝通協調及問題解決技巧。與來自不同學校的學生共同參與小組討論，實踐領導力挑戰。這段經歷讓我對領導有了更深刻的理解，並增強了我的自信心和決策能力，為未來的挑戰做好準備。";

  document.getElementById('experience5-title').textContent = '校外活動-台灣青年學生兩岸關係研習營';
  document.getElementById('experience5-text').textContent = "透過課程與討論深入了解兩岸歷史、政治及媒體資訊判讀。這次經驗讓我學會如何理性分析不同觀點，也提升了我在團隊中表達想法與溝通的能力，並激發了我對國際議題的好奇與探索。";

  // Footer 聯絡資訊
  const footer = document.querySelector('footer');
  footer.querySelectorAll('.contact-title')[0].textContent = 'Phone:';
  footer.querySelectorAll('.contact-title')[1].textContent = 'Instagram:';
  footer.querySelectorAll('.contact-title')[2].textContent = 'Facebook:';

}






  



