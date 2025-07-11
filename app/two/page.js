import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <div class="container">
          <nav>
            <div class="logo">مكتب الحج والعمرة</div>
            <ul class="nav-links">
              <li><a href="#home">الرئيسية</a></li>
              <li><a href="#services">خدماتنا</a></li>
              <li><a href="#features">مميزاتنا</a></li>
              <li><a href="#contact">تواصل معنا</a></li>
            </ul>
            <button class="cta-button">احجز الآن</button>
          </nav>
        </div>
      </header>

      <section class="hero" id="home">
        <div class="container">
          <div class="hero-content">
            <div class="hero-text">
              <h1 class="hero-title">رحلة مقدسة إلى بيت الله الحرام</h1>
              <p class="hero-subtitle">أداء الحج والعمرة بأمان وراحة</p>
              <p class="hero-description">
                نحن نقدم خدمات الحج والعمرة بأعلى معايير الجودة والراحة. رحلتك المقدسة تبدأ معنا بتجربة لا تُنسى مليئة بالطمأنينة والاهتمام بكل التفاصيل.
              </p>
              <div class="hero-buttons">
                <button class="btn-primary">🕋 احجز رحلتك الآن</button>
                <button class="btn-secondary">📞 تواصل معنا</button>
              </div>
            </div>
            <div class="hero-visual">
              <div class="kaaba-container">
                <div class="kaaba"></div>
              </div>
              <div class="floating-elements">
                <div class="floating-star">✨</div>
                <div class="floating-star">⭐</div>
                <div class="floating-star">✨</div>
                <div class="floating-star">⭐</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="services" id="services">
        <div class="container">
          <h2 class="section-title">خدماتنا المتميزة</h2>
          <div class="services-grid">
            <div class="service-card">
              <div class="service-icon">🕋</div>
              <h3 class="service-title">رحلات الحج</h3>
              <p class="service-description">
                نقدم باقات شاملة لأداء فريضة الحج مع إقامة مريحة وخدمات متكاملة لضمان رحلة مباركة ومطمئنة.
              </p>
            </div>
            <div class="service-card">
              <div class="service-icon">🌙</div>
              <h3 class="service-title">رحلات العمرة</h3>
              <p class="service-description">
                عمرة مقبولة بإذن الله مع برامج متنوعة تناسب جميع الأعمار والاحتياجات بأسعار مناسبة.
              </p>
            </div>
            <div class="service-card">
              <div class="service-icon">🏨</div>
              <h3 class="service-title">إقامة فندقية</h3>
              <p class="service-description">
                إقامة في أفضل الفنادق القريبة من الحرمين الشريفين مع خدمات 5 نجوم وراحة تامة.
              </p>
            </div>
            <div class="service-card">
              <div class="service-icon">✈️</div>
              <h3 class="service-title">الطيران والنقل</h3>
              <p class="service-description">
                رحلات طيران مريحة وآمنة مع خدمات النقل المكيفة من وإلى المطار والأماكن المقدسة.
              </p>
            </div>
            <div class="service-card">
              <div class="service-icon">👨‍🏫</div>
              <h3 class="service-title">الإرشاد الديني</h3>
              <p class="service-description">
                مرشدين دينيين متخصصين لتعليم مناسك الحج والعمرة وتقديم النصائح الروحية.
              </p>
            </div>
            <div class="service-card">
              <div class="service-icon">🍽️</div>
              <h3 class="service-title">الإطعام</h3>
              <p class="service-description">
                وجبات شهية ومتنوعة تناسب جميع الأذواق مع مراعاة النظافة والجودة العالية.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="features" id="features">
        <div class="container">
          <h2 class="section-title">لماذا تختارنا؟</h2>
          <div class="features-grid">
            <div class="feature-item">
              <div class="feature-icon">⭐</div>
              <h3 class="feature-title">خبرة 15 عام</h3>
              <p>خبرة طويلة في تنظيم رحلات الحج والعمرة</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">🛡️</div>
              <h3 class="feature-title">أمان وثقة</h3>
              <p>شركة مرخصة ومعتمدة من الجهات الرسمية</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">💰</div>
              <h3 class="feature-title">أسعار تنافسية</h3>
              <p>أفضل الأسعار مع جودة عالية في الخدمات</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">🎯</div>
              <h3 class="feature-title">خدمة شخصية</h3>
              <p>اهتمام فردي بكل حاج ومعتمر</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">📞</div>
              <h3 class="feature-title">دعم 24/7</h3>
              <p>خدمة عملاء متاحة على مدار الساعة</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">🌟</div>
              <h3 class="feature-title">رضا العملاء</h3>
              <p>آلاف العملاء الراضين عن خدماتنا</p>
            </div>
          </div>
        </div>
      </section>

      <section class="contact" id="contact">
        <div class="container">
          <h2 class="section-title">تواصل معنا</h2>
          <div class="contact-content">
            <div class="contact-info">
              <h3 style={{color: "#FFD700", marginBottom:" 30px"}}>معلومات التواصل</h3>
              <div class="contact-item">
                <div class="contact-icon">📍</div>
                <div>
                  <h4>العنوان</h4>
                  <p>الجزائر العاصمة، الجزائر</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">📞</div>
                <div>
                  <h4>الهاتف</h4>
                  <p>+213 XXX XXX XXX</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">📧</div>
                <div>
                  <h4>البريد الإلكتروني</h4>
                  <p>info@hajjumrah.com</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">⏰</div>
                <div>
                  <h4>ساعات العمل</h4>
                  <p>السبت - الخميس: 8:00 - 18:00</p>
                </div>
              </div>
            </div>
            <div class="contact-form">
              <h3 style={{color: "#FFD700", marginBottom: "30px"}}>احجز استشارة مجانية</h3>
              <form>
                <div class="form-group">
                  <label for="name">الاسم الكامل</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div class="form-group">
                  <label for="phone">رقم الهاتف</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
                <div class="form-group">
                  <label for="email">البريد الإلكتروني</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div class="form-group">
                  <label for="service">نوع الخدمة</label>
                  <select id="service" name="service" style={{width: "100%", padding: "12px", border: "1px solid rgba(255, 215, 0, 0.3)", borderRadius: "10px", background: "rgba(255, 255, 255, 0.1)", color: "#fff"}}>
                    <option value="hajj">الحج</option>
                    <option value="umrah">العمرة</option>
                    <option value="both">الحج والعمرة</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="message">رسالتك</label>
                  <textarea id="message" name="message" rows="4" placeholder="اكتب رسالتك هنا..."></textarea>
                </div>
                <button type="submit" class="btn-primary" style={{width: "100%"}}>إرسال الطلب</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div class="container">
          <div class="footer-content">
            <div class="footer-section">
              <h3>مكتب الحج والعمرة</h3>
              <p>نحن نقدم خدمات الحج والعمرة بأعلى معايير الجودة والأمان. رحلتك المقدسة تبدأ معنا.</p>
            </div>
            <div class="footer-section">
              <h3>خدماتنا</h3>
              <p><a href="#">رحلات الحج</a></p>
              <p><a href="#">رحلات العمرة</a></p>
              <p><a href="#">الإقامة الفندقية</a></p>
              <p><a href="#">الطيران والنقل</a></p>
            </div>
            <div class="footer-section">
              <h3>روابط مهمة</h3>
              <p><a href="#">شروط الخدمة
              </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
