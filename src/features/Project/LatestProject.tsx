/* eslint-disable @next/next/no-img-element */
import ImageWithLoader from '../../components/atoms/Image/Image';
import Tags from '../../components/atoms/tags/Tags';
import Typography from '../../components/atoms/typography/Typography';

interface LastProjectProps {
  subtitle?: string;
  title?: string;
  cover: string;
  platform?: string;
  description?: string;
}

function LatestProject({
  subtitle,
  title = undefined,
  cover,
  platform = undefined,
  description = undefined,
}: LastProjectProps) {
  return (
    <div className="w-full md:w-[540px] mb-4 md:mb-6">
      <div className="relative mb-8">
        <ImageWithLoader
          className="rounded-lg object-cover w-full h-[240px] md:h-[360px]"
          alt={title}
          src={cover}
        />
        {platform && (
          <div className="absolute right-2 bottom-2 md:right-4 md:bottom-4">
            <Tags stacks={platform.split(',')} />
          </div>
        )}
      </div>
      {/* text layer */}
      <div className="px-0 md:px-2">
        {subtitle && <Typography variant="body-bold" className="text-secondary-dark">{subtitle}</Typography>}
        {title && <Typography variant="h3">{title}</Typography>}
        {description && (
          <Typography variant="body">{description}</Typography>
        )}
      </div>
    </div>
  );
}

export default LatestProject;