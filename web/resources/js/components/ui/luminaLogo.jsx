import { Head } from '@inertiajs/react';
import Logo from '../../../images/Salos.svg';

export default function LuminaLogo({
    width = 116,
    height = 32,
    className = '',
}) {
  return (
    <>
        <Head>
            <link rel="preload" href={Logo} as="image" />
        </Head>
        <img
            src={Logo}
            width={width}
            height={height}
            className={className}
            alt="Lumina Logo"
        />
    </>
  );
}
