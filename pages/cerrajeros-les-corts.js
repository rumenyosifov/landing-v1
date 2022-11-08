/* eslint-disable max-len */
import Head from 'next/head';
import Main from '../components/main/main';
import Info from '../components/info/info';

export default function Home() {
  const mainHeadText = 'Cerrajeros en Les Corts';
  const mainText1 = '24/7 asistencia técnica de cerrajeros';
  const mainText2 = 'en Les Corts con mejor precio';
  const infoHeadText = 'Welcome To Cerrojeria Umbral';
  const headText1 = (
    <div>
      <p>
        <strong>Lockfit Locksmiths Newcastle</strong>
        {' '}
        are a reliable and experienced locksmith service and we are proud to be known as the “fastest locksmith in Newcastle” by anyone that uses our services. You can call us on 0191 603 1924 for a no-obligation chat and talk directly to a professional locksmith. You can discuss your problem with us, and we will diagnose the situation, and give you a free quote.
      </p>
      <p>No call out fee – if we cannot open your lock or fix your lock problem there will be absolutely no charge.</p>
      <p>You will be given a fixed price when you call and there will be no extras (unless for example your lock is substantially different than the one you describe for any reason) – we do not charge VAT unlike 90% of our competitors who will add it on top only once they arrive and ask for payment.</p>
      <h4>Are you locked out of your home or business in Newcastle?</h4>
      <p>LockFit locksmiths are available 24 hours a day to help you. We supply & fit all major brands of locks, and can also supply and fit any of the various multi-point locks for uPVC doors or composite doors & also aluminium doors. Lockfit Locksmiths Newcastle can provide the latest snap resistant and burglar proof lock cylinders for any door type and any wooden doors can be upgraded with B/S3621 locks. Have you had a break in? We can do damage repair on your doors and supply and fit new, secure locks.</p>
      <p>Lockfit Newcastle are experts in gaining entry, we will get your lock opened causing no damage to your property, if you require the lock to be changed, we can even do this for you at the same time.</p>
    </div>
  );

  return (
    <>
      <Head>
        <title>Cerrajeros en Les Corts, Barcelona, urgente barato y facil, 24 Horas 666 666 666</title>
        <meta name="description" content="Cerrajeros en Les Corts 24 horas ✓ Apertura de puertas, cambio de bombín y cerraduras ✓ Cerrajeros Urgentes ⛔ ECONÓMICOS☝ Llegamos en 15 min ..." />
      </Head>
      <Main headText={mainHeadText} text1={mainText1} text2={mainText2} />
      <Info headText={infoHeadText} text1={headText1} />
    </>
  );
}
