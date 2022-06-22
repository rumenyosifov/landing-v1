import React from 'react';
import Link from 'next/link';
import Logo from '../icons/logo';
import styles from './footer.module.scss';
import Phone from '../icons/phone';
// import Facebook from '../icons/facebook';
import WhatsApp from '../icons/whatsapp';

const Footer = () => (
  <footer id="footer" className={styles.footer}>
    <div className={`container ${styles.footerContainer}`}>
      <div className={styles.upFooter}>
        <div className={styles.logoDiv}>
          <Link href="/">
            <a className={styles.logo}>
              <Logo />
              <div className={styles.logoText}>El Umbral Cerrojeria</div>
            </a>
          </Link>
        </div>
        <div className={styles.contacts}>
          <div className={styles.contactPhone}>
            <span className={styles.phoneIcon}><Phone /></span>
            602 553 857
          </div>
          <div className={styles.contactWA}>
            <span className={styles.waIcon}><WhatsApp /></span>
            602 553 857
          </div>
        </div>
      </div>
      <div className={styles.downFooter}>
        <div className={styles.links}>
          <h5>Menu</h5>
          <ul>
            <li><Link href="/"><a>Servicios</a></Link></li>
            <li><Link href="/"><a>Zonas</a></Link></li>
            <li><Link href="/"><a>Contactos</a></Link></li>
          </ul>
        </div>
        <div className={styles.links}>
          <h5>Links</h5>
          <ul>
            <li><Link href="/"><a>Aviso Legal</a></Link></li>
            <li><Link href="/"><a>Política de Privacidad</a></Link></li>
            <li><Link href="/"><a>Política de Cookies</a></Link></li>
            <li><Link href="/"><a>sitemap</a></Link></li>
          </ul>
        </div>
        <div className={styles.links2}>
          <h5>Zonas</h5>
          <ul>
            <li>
              <Link href="/cerrajeros-esplugues">
                <a>Cerrajeros Esplugues</a>
              </Link>
            </li>
            <li>
              <Link href="/cerrajeros-hospitalet">
                <a>Cerrajeros Hospitalet</a>
              </Link>
            </li>
            <li>
              <Link href="/cerrajeros-sants">
                <a>Cerrajeros Sants</a>
              </Link>
            </li>
            <li>
              <Link href="/cerrajeros-les-corts">
                <a>Cerrajeros Les Corts</a>
              </Link>
            </li>
            {/* <li>
              <Link href="/cerrajeros-terrassa">
                <a>Cerrajeros Terrassa</a>
              </Link>
            </li>
            <li>
              <Link href="/cerrajeros-santa-coloma-de-gramenet">
                <a>Cerrajeros Santa coloma de gramenet</a>
              </Link>
            </li>
            <li>
              <Link href="/cerrajeros-sant-cugat">
                <a>Cerrajeros Sant cugat</a>
              </Link>
            </li>
            <li>
              <Link href="/cerrajeros-sant boi">
                <a>Cerrajeros Sant Boi</a>
              </Link>
            </li>
            <li>
              <Link href="/cerrajeros-cerdanyola">
                <a>Cerrajeros Cerdanyola</a>
              </Link>
            </li>
            <li>
              <Link href="/cerrajeros-badalona">
                <a>Cerrajeros Badalona</a>
              </Link>
            </li>
            <li>
              <Link href="/cerrajeros-esplugues">
                <a>Cerrajeros Esplugues</a>
              </Link>
            </li>
            <li>
              <Link href="/cerrajeros-cornellá">
                <a>Cerrajeros Cornellá</a>
              </Link>
            </li>
            <li>
              <Link href="/cerrajeros-viladecans">
                <a>Cerrajeros Viladecans</a>
              </Link>
            </li> */}
            {/* <li>
                <Link href="/cerrajeros-sitges">
                  <a>Cerrajeros Sitges</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-sant-just-desvern">
                  <a>Cerrajeros Sant Just Desvern</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-sabadell">
                  <a>Cerrajeros Sabadell</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-ripollet">
                  <a>Cerrajeros Ripollet</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-premia-de-mar">
                  <a>Cerrajeros Premia de Mar</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-premia-de-dalt">
                  <a>Cerrajeros Premia de Dalt</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-montgat">
                  <a>Cerrajeros montgat</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-mollet">
                  <a>Cerrajeros Mollet</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-mataro">
                  <a>Cerrajeros Mataro</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-manresa">
                  <a>Cerrajeros Manresa</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-hospitalet">
                  <a>Cerrajeros Hospitalet</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-granollers">
                  <a>Cerrajeros Granollers</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-gava">
                  <a>Cerrajeros Gava</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-castelldefels">
                  <a>Cerrajeros Castelldefels</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-barbera-del-valles">
                  <a>Cerrajeros Barbera del Valles</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-sarria">
                  <a>Cerrajeros Sarria</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-sants">
                  <a>Cerrajeros Sants</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-sant-gervasi">
                  <a>Cerrajeros Sant Gervasi</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-sant-antoni">
                  <a>Cerrajeros Sant Antoni</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-poblenou">
                  <a>Cerrajeros Poblenou</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-poble-sec">
                  <a>Cerrajeros Poble Sec</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-pedralbes">
                  <a>Cerrajeros Pedralbes</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-nou-barris">
                  <a>Cerrajeros Nou barris</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-les-corts">
                  <a>Cerrajeros Les Corts</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-hostafrancs">
                  <a>Cerrajeros Hostafrancs</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-barri-del-clot">
                  <a>Cerrajeros Barri del Clot</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-barceloneta">
                  <a>Cerrajeros Barceloneta</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-Hhorta">
                  <a>Cerrajeros Horta</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-gracia">
                  <a>Cerrajeros Gracia</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-el-raval">
                  <a>Cerrajeros El Raval</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-barrio-del-guinardo">
                  <a>Cerrajeros Barrio del Guinardo</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-el-carmelo">
                  <a>Cerrajeros El Carmelo</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-eixample">
                  <a>Cerrajeros Eixample</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-barri-del-born">
                  <a>Cerrajeros Barri del Born</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-zona-franca">
                  <a>Cerrajeros Zona Franca</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-sant-vicenc-del-horts">
                  <a>Cerrajeros Sant Vicenc del Horts</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-sant-andreu-de-la-barca">
                  <a>Cerrajeros Sant Andreu De la Barca</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-sagrada-familia">
                  <a>Cerrajeros Sagrada Familia</a>
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-caldes-de-montbui">
                  <a>Cerrajeros Caldes de Montbui</a>
                </Link>
              </li> */}
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
