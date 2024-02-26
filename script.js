class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="header">
        <div class="header-first">
          <div onclick="openMenu()" class="header-logo">
            <img class="logo" src="/images/JolyBell_logo.svg" alt="JolyBell logo img">
            <div class="under-logo-line"></div>
          </div>
          <div class="left-section-hr1">
              <div class="currency">
                  <div>УКР</div>
                  <div>USD</div>
                  <div>Img</div>
              </div>
              <div onclick="openMenu()" class="hamburger-menu">
                  <div></div>
                  <div></div>
                  <div></div>
              </div>
          </div>
          <ul class="sidebar">
              <div onclick="closeMenu()" class="hide-sidebar">приховати <span>X</span></div>
              <span class="sidebar-span">
                  <div>УКР</div>
                  <div>USD</div>
              </span>
              <li><a href="#">No Name</a></li>
              <li><a href="#">Футболки</a></li>
              <li><a href="#">Світшоти</a></li>
              <li><a href="#">ХУДІ</a></li>
              <li><a href="#">Рюкзак</a></li>
              <li><a href="#">Штани/шорти</a></li>
              <li><a href="#">Поло</a></li>
              <li><a href="#">Сорочка</a></li>
              <li><a href="#">Піжама</a></li>
              <li><a href="#">Сувеніри</a></li>
              <li><a href="#">Шапки</a></li>
              <li><a href="#">Труси</a></li>
              <li><a href="#">Кепки</a></li>
              <li><a href="#">Меми</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Ваше замовлення</a></li>
          </ul>
        </div>
        <div class="header-second">
          <div class="header-nav">
              <ul class="header-navigation">
                  <li><a href="#">NO NAME</a></li>
                  <li><a href="#">ФУТБОЛКИ</a></li>
                  <li><a href="#">СВІТШОТИ</a></li>
                  <li><a href="#">ХУДІ</a></li>
                  <li><a href="#">РЮКЗАК</a></li>
                  <li><a href="#">ШТАНИ/ШОРТИ</a></li>
                  <li><a href="#">ПОЛО</a></li>
                  <li><a href="#">СОРОЧКА</a></li>
                  <li><a href="#">ПІЖАМА</a></li>
                  <li><a href="#">СУВЕНІРИ</a></li>
                  <li><a href="#">ШАПКИ</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">ВАШЕ ЗАМОВЛЕННЯ</a></li>
              </ul>
          </div>
        </div>
      </header>`
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
      <div class="footer-content">
          <ul class="footer-nav">
            <li><a href="#">NO NAME</a></li>
            <li><a href="#">ФУТБОЛКИ</a></li>
            <li><a href="#">СВІТШОТИ</a></li>
            <li><a href="#">ХУДІ</a></li>
            <li><a href="#">РЮКЗАК</a></li>
            <li><a href="#">ШТАНИ/ШОРТИ</a></li>
            <li><a href="#">ПОЛО</a></li>
            <li><a href="#">СОРОЧКА</a></li>
            <li><a href="#">ПІЖАМА</a></li>
            <li><a href="#">СУВЕНІРИ</a></li>
            <li><a href="#">ШАПКИ</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">ВАШЕ ЗАМОВЛЕННЯ</a></li>
        </ul>
        <div class="footer__logo">
          <img src="/images/JolyBell_logo.svg" alt="footer logo" class="footer_logo">
        </div>
        <div class="footer__email-info">
          <div class="email-pref">e-mail:</div>
          <div class="email-content">support@jolybell.com</div>
        </div>
        <div class="footer__work-hours">
          <div class="work-hours-pref">
            Час роботи служби підтримки
          </div>
          <div class="work-hours-content">
            пн-пт: 9:00 - 21:00
          </div>
        </div>
          <div class="footer__payment-methods">
            <div class="payment-methods-pref">
              Приймаємо для оплати:
            </div>
            <div class="payment-methods-conent">
              <img src="/footer-images/visa.png" alt="visa" class="visa-option-img">
              <img src="/footer-images/wayforpay.png" alt="wayforpay" class="wayforpay-option-img">
              <img src="/footer-images/mastercard.png" alt="mastercard" class="mastercard-option-img">
              <img src="/footer-images/privat24.png" alt="private-24" class="private24-option-img">
            </div>
          </div>
          <div class="footer-licence">
            <div class="licence-content">
              &copy; 2024, JolyBell.com
            </div>
          </div>
          <div class="agreement">
            <a href="https://jolybell.com/public_offer_2.pdf" target="_blank">Публічна оферта</a>
          </div>
          <div class="footer__delivery">
            Доставка по Україні здійснюється службою доставки: Нова Пошта.
            <br>
            Доставляємо по всьому світу службою доставки: Укр Пошта, Нова Пошта.
          </div>
      </div>
    </footer>`
    }
}

customElements.define('special-header', SpecialHeader)

customElements.define('special-footer', SpecialFooter)

function openMenu() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.add('open')
}

function closeMenu() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.remove('open')
}

