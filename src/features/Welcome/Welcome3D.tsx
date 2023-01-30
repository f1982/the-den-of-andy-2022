import {
  lazy, Suspense, useEffect, useState,
} from 'react';
import MyButton from '../../components/atoms/buttons/Button';
import DotLoader from '../../components/atoms/spinner/DotLoader';
import Typography from '../../components/atoms/typography/Typography';

const MyCube = lazy(() => import('../../components/organisms/3d/MyBox'));

interface WelcomeProps {
  title: string;
  subtitle: string;
  label: string;
  link?: string;
}

const Welcome3D = ({
  title,
  subtitle,
  label,
  link = '/home',
}: WelcomeProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="
      container mx-auto
      flex
      flex-col
      items-center justify-center
    "
    >
      { !isMounted ? null : (
        <Suspense fallback={<DotLoader />}>
          <MyCube />
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

export default Welcome3D;