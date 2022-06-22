import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Main from '../components/main/main';
import Info from '../components/info/info';

export default function Home() {
  const { pathname } = useRouter();
  const mainHeadText = 'Cerrajeros en Barcelona';
  const mainText1 = '24/7 asistencia técnica de cerrajeros';
  const mainText2 = 'en Barcelona con mejor precio';
  const infoHeadText = 'Welcome To Cerrojeria Umbral';
  const infoText1 = 'Cerrajeros Barcelona trabajamos las 24 horas del día, los 365 días del año, ofrecemos servicios de emergencia de cerrajería que necesite. Si necesita abrir una puerta, cambiar una cerradura, abrir una caja fuerte de emergencia, bombines de seguridad o necesita realizar un amaestramiento de llaves nos puede llamar de inmediato a la hora que sea. Nuestros servicios están garantizados, trabajamos para satisfacer a nuestros clientes y que queden felices con el resultado.';
  const infoText2 = 'Cerrajeros Barcelona trabajamos las 24 horas del día, los 365 días del año, ofrecemos servicios de emergencia de cerrajería que necesite. Si necesita abrir una puerta, cambiar una cerradura, abrir una caja fuerte de emergencia, bombines de seguridad o necesita realizar un amaestramiento de llaves nos puede llamar de inmediato a la hora que sea. Nuestros servicios están garantizados, trabajamos para satisfacer a nuestros clientes y que queden felices con el resultado.';
  useEffect(() => {
    // some browsers (like safari) may require a timeout to delay calling this
    // function after a page has loaded; otherwise, it may not update the position
    // window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Head>
        <title>Cerrajeros en Barcelona, urgente barato y facil, 24 Horas 666 666 666</title>
        <meta name="description" content="Cerrajeros en Barcelona 24 horas ✓ Apertura de puertas, cambio de bombín y cerraduras ✓ Cerrajeros Urgentes ⛔ ECONÓMICOS☝ Llegamos en 15 min ..." />
      </Head>
      <Main headText={mainHeadText} text1={mainText1} text2={mainText2} />
      <Info headText={infoHeadText} text1={infoText1} text2={infoText2} />
    </>
  );
}
