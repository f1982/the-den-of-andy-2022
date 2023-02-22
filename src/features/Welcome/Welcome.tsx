import {
  lazy, Suspense, useEffect, useState,
} from 'react';
import MyButton from '../../components/atoms/buttons/Button';
import DotLoader from '../../components/atoms/spinner/DotLoader';
import Typography from '../../components/atoms/typography/Typography';

// const MyCube = lazy(() => import('../../components/organisms/3d/MyBox'));
const SVGAnimation = lazy(() => import('../../components/organisms/logo-animation/SVGAnimation'));

interface WelcomeProps {
  title: string;
  subtitle: string;
  label: string;
  link?: string;
}

const DefaultWelcome = ({
  title,
  subtitle,
  label,
  link = '/home',
}: WelcomeProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [rnd, setRnd] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    setRnd(Math.random());
  }, []);

  return (
    <div className="
      container mx-auto
      flex
      flex-col
      items-center justify-center
    "
    >
      {!isMounted ? null : (
        <Suspense fallback={<DotLoader />}>
          {/* {rnd > 0.5 ? <SVGAnimation /> : <MyCube />} */}
          <SVGAnimation />
        </Suspense>
      )}

      <div className="text-center">
        <Typography variant="h2" as="h1" className="uppercase">{title}</Typography>
        <p className="mb-8 leading-relaxed">{subtitle}</p>
        <div className="flex justify-center">
          <a href={link}>
            <MyButton type="primary">{label}</MyButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DefaultWelcome;