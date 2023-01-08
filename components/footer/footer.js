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
          <Link href="/" className={styles.logo}>
            <Logo />
            <div className={styles.logoText}>El Umbral Cerrojeria</div>
          </Link>
        </div>
        <div className={styles.contacts}>
          <div className={styles.contactPhone}>
            <span className={styles.phoneIcon}>
              <Phone />
            </span>
            602 553 857
          </div>
          <div className={styles.contactWA}>
            <span className={styles.waIcon}>
              <WhatsApp />
            </span>
            602 553 857
          </div>
        </div>
      </div>
      <div className={styles.downFooter}>
        <div className={styles.links}>
          <h5>Menu</h5>
          <ul>
            <li>
              <Link href="/">Servicios</Link>
            </li>
            <li>
              <Link href="/">Zonas</Link>
            </li>
            <li>
              <Link href="/">Contactos</Link>
            </li>
          </ul>
        </div>
        <div className={styles.links}>
          <h5>Links</h5>
          <ul>
            <li>
              <Link href="/">Aviso Legal</Link>
            </li>
            <li>
              <Link href="/">Política de Privacidad</Link>
            </li>
            <li>
              <Link href="/">Política de Cookies</Link>
            </li>
            <li>
              <Link href="/">sitemap</Link>
            </li>
          </ul>
        </div>
        <div className={styles.links2}>
          <h5>Zonas</h5>
          <ul>
            <li>
              <Link href="/cerrajeros-esplugues">Cerrajeros Esplugues</Link>
            </li>
            <li>
              <Link href="/cerrajeros-hospitalet">Cerrajeros Hospitalet</Link>
            </li>
            <li>
              <Link href="/cerrajeros-sants">Cerrajeros Sants</Link>
            </li>
            <li>
              <Link href="/cerrajeros-les-corts">Cerrajeros Les Corts</Link>
            </li>
            {/* <li>
              <Link href="/cerrajeros-terrassa">
                Cerrajeros Terrassa
              </Link>
            </li>
            <li>
              <Link href="/cerrajeros-santa-coloma-de-gramenet">
                Cerrajeros Santa coloma de gramenet
              </Link>
            </li>
            <li>
              <Link href="/cerrajeros-sant-cugat">
                Cerrajeros Sant cugat
              </Link>
            </li>
            <li>
              <Link href="/cerrajeros-sant boi">
                Cerrajeros Sant Boi
              </Link>
            </li>
            <li>
              <Link href="/cerrajeros-cerdanyola">
                Cerrajeros Cerdanyola
              </Link>
            </li>
            <li>
              <Link href="/cerrajeros-badalona">
                Cerrajeros Badalona
              </Link>
            </li>
            <li>
              <Link href="/cerrajeros-esplugues">
                Cerrajeros Esplugues
              </Link>
            </li>
            <li>
              <Link href="/cerrajeros-cornellá">
                Cerrajeros Cornellá
              </Link>
            </li>
            <li>
              <Link href="/cerrajeros-viladecans">
                Cerrajeros Viladecans
              </Link>
            </li> */}
            {/* <li>
                <Link href="/cerrajeros-sitges">
                  Cerrajeros Sitges
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-sant-just-desvern">
                  Cerrajeros Sant Just Desvern
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-sabadell">
                  Cerrajeros Sabadell
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-ripollet">
                  Cerrajeros Ripollet
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-premia-de-mar">
                  Cerrajeros Premia de Mar
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-premia-de-dalt">
                  Cerrajeros Premia de Dalt
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-montgat">
                  Cerrajeros montgat
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-mollet">
                  Cerrajeros Mollet
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-mataro">
                  Cerrajeros Mataro
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-manresa">
                  Cerrajeros Manresa
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-hospitalet">
                  Cerrajeros Hospitalet
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-granollers">
                  Cerrajeros Granollers
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-gava">
                  Cerrajeros Gava
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-castelldefels">
                  Cerrajeros Castelldefels
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-barbera-del-valles">
                  Cerrajeros Barbera del Valles
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-sarria">
                  Cerrajeros Sarria
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-sants">
                  Cerrajeros Sants
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-sant-gervasi">
                  Cerrajeros Sant Gervasi
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-sant-antoni">
                  Cerrajeros Sant Antoni
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-poblenou">
                  Cerrajeros Poblenou
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-poble-sec">
                  Cerrajeros Poble Sec
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-pedralbes">
                  Cerrajeros Pedralbes
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-nou-barris">
                  Cerrajeros Nou barris
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-les-corts">
                  Cerrajeros Les Corts
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-hostafrancs">
                  Cerrajeros Hostafrancs
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-barri-del-clot">
                  Cerrajeros Barri del Clot
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-barceloneta">
                  Cerrajeros Barceloneta
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-Hhorta">
                  Cerrajeros Horta
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-gracia">
                  Cerrajeros Gracia
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-el-raval">
                  Cerrajeros El Raval
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-barrio-del-guinardo">
                  Cerrajeros Barrio del Guinardo
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-el-carmelo">
                  Cerrajeros El Carmelo
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-eixample">
                  Cerrajeros Eixample
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-barri-del-born">
                  Cerrajeros Barri del Born
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-zona-franca">
                  Cerrajeros Zona Franca
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-sant-vicenc-del-horts">
                  Cerrajeros Sant Vicenc del Horts
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-sant-andreu-de-la-barca">
                  Cerrajeros Sant Andreu De la Barca
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-sagrada-familia">
                  Cerrajeros Sagrada Familia
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-caldes-de-montbui">
                  Cerrajeros Caldes de Montbui
                </Link>
              </li> */}
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
