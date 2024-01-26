import MyButton from '../../components/atoms/buttons/Button';
import Typography from '../../components/atoms/typography/Typography';
import SVGAnimation from './SVGAnimation';

interface WelcomeProps {
  title: string;
  subtitle: string;
  label: string;
  link?: string;
}

const DefaultWelcome = ({ title, subtitle, label, link = '/home' }: WelcomeProps) => (
  <div
    className="
      container mx-auto
      flex
      flex-col
      items-center justify-center
    "
  >
    <SVGAnimation />
    <div className="text-center">
      <Typography variant="h2" as="h1" className="uppercase">
        {title}
      </Typography>
      <p className="mb-8 leading-relaxed">{subtitle}</p>
      <div className="flex justify-center">
        <a href={link}>
          <MyButton type="primary">{label}</MyButton>
        </a>
      </div>
    </div>
  </div>
);

export default DefaultWelcome;
