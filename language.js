let currentLanguage = 'zh'; // 預設語言為繁體中文

function toggleLanguage() {
    if (currentLanguage === 'zh') {
        setEnglish();
        currentLanguage = 'en';
    } else {
        setChinese();
        currentLanguage = 'zh';
    }
}

function setEnglish() {
    document.getElementById('site-title').innerText = 'Ziwen\'s Personal Website';
    document.getElementById('about-link').innerText = 'About Me';
    document.getElementById('skills-link').innerText = 'Skills';
    document.getElementById('experience-link').innerText = 'Experience';
    document.getElementById('language-toggle').innerText = 'Switch to Chinese';

    document.getElementById('about-title').innerText = 'About Me';
    document.getElementById('about-text').innerText = 'Hi, I\'m Ziwen Hung, welcome to my personal website! I\'m passionate about growth and challenges, and have been involved in many activities including student council and clubs. These experiences have taught me the value of teamwork and leadership!';
    document.getElementById('about-desc').innerText = 'This site will introduce my background, experiences, and fields I\'m passionate about. I have a strong enthusiasm for learning and exploration, and I hope to advance into software development in the future, contributing my efforts!';
    document.getElementById('contact-title').innerText = 'Contact Information:';
    document.getElementById('phone').innerText = 'Phone: 0903453936';

    document.getElementById('skills-title').innerText = 'Skills';
    document.getElementById('skill-python').innerText = 'Python';
    document.getElementById('skill-java').innerText = 'Java';
    document.getElementById('skill-sql').innerText = 'SQL';
    document.getElementById('skill-web').innerText = 'Web Development';
    document.getElementById('skill-analysis').innerText = 'Data Analysis';

    document.getElementById('experience-title').innerText = 'Extracurricular Experience';
    document.getElementById('experience1-title').innerText = 'On-campus - Student Council';
    document.getElementById('experience1-text').innerText = 'In my first year, I joined the student council and served as a secretary, participating in various large-scale events, learning organizational and collaboration skills, and improving my time management abilities. In my second year, I became the Marketing Department Head but resigned a month ago due to personal future plans, and focused more on my studies and personal development.';

    document.getElementById('experience2-title').innerText = 'On-campus - Xiong Ping Club';
    document.getElementById('experience2-text').innerText = 'This is a social club where I met many friends during the first general meeting. We participated in group activities and had family gatherings, creating a relaxed atmosphere that I truly enjoyed.';
    
    document.getElementById('experience3-title').innerText = 'Off-campus - 113th University Women\'s Leadership Training Camp';
    document.getElementById('experience3-text').innerText = 'I participated in the 113th University Women\'s Leadership Training Camp, where I enhanced my leadership skills, communication, coordination, and problem-solving abilities through a series of leadership and team-building exercises. I collaborated with students from different universities in group discussions and leadership challenges. This experience deepened my understanding of leadership, boosted my confidence, and improved my decision-making skills, preparing me for future challenges.';
}

function setChinese() {
    document.getElementById('site-title').innerText = '子雯的個人網頁';
    document.getElementById('about-link').innerText = '關於我';
    document.getElementById('skills-link').innerText = '技能';
    document.getElementById('experience-link').innerText = '經驗';
    document.getElementById('language-toggle').innerText = '切換到英文';

    document.getElementById('about-title').innerText = '關於我';
    document.getElementById('about-text').innerText = 'Hi，我是洪子雯，歡迎來到我的個人網站！我是一個熱愛成長與挑戰的人，曾為學生會一員，也參加過許多社團，這些經歷讓我學習到團隊合作與領導的價值！';
    document.getElementById('about-desc').innerText = '這裡將帶你深入了解我的背景、經歷，以及我熱衷的領域。我對學術與生活充滿探索的熱情，並希望在未來能夠朝向軟體開發領域邁進，貢獻自己的力量！';
    document.getElementById('contact-title').innerText = '聯絡方式：';
    document.getElementById('phone').innerText = '電話：0903453936';

    document.getElementById('skills-title').innerText = '技能';
    document.getElementById('skill-python').innerText = 'Python';
    document.getElementById('skill-java').innerText = 'Java';
    document.getElementById('skill-sql').innerText = 'SQL';
    document.getElementById('skill-web').innerText = 'Web 開發';
    document.getElementById('skill-analysis').innerText = '資料分析';

    document.getElementById('experience-title').innerText = '課外活動經驗';
    document.getElementById('experience1-title').innerText = '校內-學生會';
    document.getElementById('experience1-text').innerText = '在大一時，我加入了學生會並擔任秘書部部員，參與多項大型活動讓我學到了許多組織與協作的技巧，也提升了我的時間管理能力。升上大二後，我接任了行銷部部長一職，不過，因為對未來規劃的考量，我在一個月前選擇辭去該職位，並將重心放回學業與個人發展。';

    document.getElementById('experience2-title').innerText = '校內-雄屏社團';
    document.getElementById('experience2-text').innerText = '這是一個聯誼性質的社團，從第一次的社員大會裡認識了很多朋友，我們一起參與團康活動，大家的感情也變得更好了。之後也有許多次的家聚，這些活動讓我感受到輕鬆愉快的社團氛圍，而我也很喜歡這種無壓力的參與方式。';
    
    document.getElementById('experience3-title').innerText = '校外-大專女學生領導力培訓營';
    document.getElementById('experience3-text').innerText = '參加113年大專女學生領導力培訓營，透過一系列領導與團隊合作訓練，提升了我的領導能力、溝通協調及問題解決技巧。與來自不同學校的學生共同參與小組討論，實踐領導力挑戰。這段經歷讓我對領導有了更深刻的理解，並增強了我的自信心和決策能力，為未來的挑戰做好準備。';
}







  



