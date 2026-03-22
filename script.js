// 다국어 지원 - 완전한 번역 데이터 사용
const translations = typeof translationsComplete !== 'undefined' ? translationsComplete : {
    ko: {},
    en: {},
    ja: {}
};

// DOM 요소
const languageButtons = document.querySelectorAll('.lang-btn');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const scrollTopBtn = document.getElementById('scrollTop');
const header = document.getElementById('header');
const faqItems = document.querySelectorAll('.faq-item');
const galleryTabs = document.querySelectorAll('.gallery-tab');
const galleryItems = document.querySelectorAll('.gallery-item');
const bookingForm = document.getElementById('bookingForm');

// 현재 언어 (기본값: 한국어)
let currentLanguage = 'ko';

// 다국어 전환 함수
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // 모든 번역 요소 업데이트
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // 언어 버튼 활성화 상태 업데이트
    languageButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // 구글맵 언어 변경
    const googleMap = document.getElementById('googleMap');
    if (googleMap) {
        const baseUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.8374524636344!2d126.98159!3d37.56366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDMzJzQ5LjIiTiAxMjbCsDU4JzU0LjAiRQ!5e0!3m2!1s';
        const langMap = {
            'ko': 'ko',
            'en': 'en',
            'ja': 'ja'
        };
        googleMap.src = baseUrl + langMap[lang] + '!2skr!4v1234567890';
    }
    
    // 로컬 스토리지에 언어 저장
    localStorage.setItem('preferredLanguage', lang);
    
    // HTML lang 속성 업데이트
    document.documentElement.setAttribute('lang', lang);
}

// 언어 버튼 이벤트 리스너
languageButtons.forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        changeLanguage(lang);
    });
});

// 브라우저 언어 감지
function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    console.log('Detected browser language:', browserLang);
    
    if (browserLang.startsWith('ko')) {
        return 'ko';
    } else if (browserLang.startsWith('ja')) {
        return 'ja';
    } else {
        return 'en';
    }
}

// 최초 방문 시 브라우저 언어로 자동 설정
window.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    
    if (!savedLanguage) {
        // 저장된 언어가 없으면 브라우저 언어 감지
        const detectedLang = detectBrowserLanguage();
        console.log('Auto-detected language:', detectedLang);
        changeLanguage(detectedLang);
    } else {
        // 저장된 언어가 있으면 그것을 사용
        changeLanguage(savedLanguage);
    }
    
    // 날짜 입력 필드 최소값 설정 (오늘)
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
    
    // 갤러리 아이템 초기화 (모든 아이템 표시)
    galleryItems.forEach(item => {
        item.style.display = 'block';
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
    });
});

// 모바일 메뉴 토글
if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
    
    // 메뉴 항목 클릭 시 모바일 메뉴 닫기
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });
    
    // 외부 클릭 시 메뉴 닫기
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
}

// 스크롤 이벤트 - 헤더 스타일 변경 및 맨 위로 버튼
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // 헤더 그림자 효과
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.08)';
    }
    
    // 스크롤 투 탑 버튼 표시/숨김
    if (scrollTopBtn) {
        if (currentScroll > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }
    
    lastScroll = currentScroll;
});

// 맨 위로 버튼 클릭 이벤트
if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 부드러운 스크롤 (모든 앵커 링크)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// FAQ 아코디언
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // 모든 FAQ 항목 닫기
        faqItems.forEach(faq => {
            faq.classList.remove('active');
        });
        
        // 클릭된 항목이 닫혀있었다면 열기
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// 갤러리 필터
galleryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const category = tab.getAttribute('data-category');
        
        // 탭 활성화 상태 업데이트
        galleryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // 갤러리 아이템 필터링
        galleryItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            
            if (category === 'all' || itemCategory === category) {
                item.style.display = 'block';
                // 애니메이션 효과
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// 예약 폼 제출 처리
if (bookingForm) {
    bookingForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // 폼 데이터 수집
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value
        };
        
        // 여기에 실제 예약 API 호출 로직 추가
        console.log('예약 정보:', formData);
        
        // 성공 메시지 (예시)
        const messages = {
            ko: '예약이 성공적으로 접수되었습니다! 곧 연락드리겠습니다.',
            en: 'Booking submitted successfully! We will contact you soon.',
            ja: '予約が正常に受け付けられました！すぐにご連絡いたします。'
        };
        
        alert(messages[currentLanguage]);
        
        // 폼 초기화
        bookingForm.reset();
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 애니메이션 대상 요소 관찰
document.querySelectorAll('.service-card, .feature-card, .review-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// 이미지 레이지 로딩
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// 날짜 포맷팅 함수
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// 현재 날짜 기준 예약 가능 날짜 설정
function setBookingDateConstraints() {
    const dateInput = document.getElementById('date');
    if (!dateInput) return;
    
    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 60); // 60일 후까지 예약 가능
    
    dateInput.min = formatDate(today);
    dateInput.max = formatDate(maxDate);
}

// 페이지 로드 완료 후 실행
window.addEventListener('load', () => {
    setBookingDateConstraints();
    
    // 콘솔 환영 메시지
    console.log('%c이가자 명동 미용실 | LEEKAJA Hair Myeongdong', 'font-size: 20px; font-weight: bold; color: #8B7355;');
    console.log('%cMyeongdong\'s Best Hair Salon & Headspa', 'font-size: 14px; color: #666;');
});

// 리뷰 카드 호버 효과
document.querySelectorAll('.review-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// 서비스 카드 호버 효과
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// 전화번호 포맷팅
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.startsWith('82')) {
            // 국제 번호 형식
            if (value.length > 2) {
                value = '+82-' + value.substring(2);
            }
        } else if (value.startsWith('0')) {
            // 국내 번호 형식
            if (value.length > 3) {
                value = value.substring(0, 3) + '-' + value.substring(3);
            }
            if (value.length > 8) {
                value = value.substring(0, 8) + '-' + value.substring(8);
            }
        }
        
        e.target.value = value;
    });
}

// 폼 유효성 검사
function validateBookingForm() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const service = document.getElementById('service').value;
    
    const errors = [];
    
    if (!name) errors.push('이름을 입력해주세요.');
    if (!phone) errors.push('연락처를 입력해주세요.');
    if (!email) errors.push('이메일을 입력해주세요.');
    if (!date) errors.push('날짜를 선택해주세요.');
    if (!time) errors.push('시간을 선택해주세요.');
    if (!service) errors.push('서비스를 선택해주세요.');
    
    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
        errors.push('올바른 이메일 형식을 입력해주세요.');
    }
    
    return errors;
}

// 폼 제출 전 유효성 검사
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        const errors = validateBookingForm();
        
        if (errors.length > 0) {
            e.preventDefault();
            alert(errors.join('\n'));
            return false;
        }
    });
}

// 페이지 성능 모니터링
if ('PerformanceObserver' in window) {
    const perfObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
                console.log('LCP:', entry.renderTime || entry.loadTime);
            }
        }
    });
    
    try {
        perfObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
        // 지원하지 않는 브라우저
    }
}

// 서비스 워커 등록 (PWA 지원)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // 프로덕션 환경에서만 서비스 워커 활성화
        if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('Service Worker registered:', registration);
                })
                .catch(error => {
                    console.log('Service Worker registration failed:', error);
                });
        }
    });
}

// 브라우저 언어 감지
function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    
    if (browserLang.startsWith('ko')) {
        return 'ko';
    } else if (browserLang.startsWith('ja')) {
        return 'ja';
    } else {
        return 'en';
    }
}

// 최초 방문 시 브라우저 언어로 설정
window.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('preferredLanguage')) {
        const detectedLang = detectBrowserLanguage();
        changeLanguage(detectedLang);
    }
});

// Google Analytics (실제 운영 시 추가)
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'GA_MEASUREMENT_ID');

console.log('LEEKAJA Myeongdong Hair Salon - Website Loaded Successfully ✂️');