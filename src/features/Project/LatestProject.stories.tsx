import LatestProject from './LatestProject';

export default {
  title: 'UI/LatestProject',
  component: LatestProject,
};

export function BasicUsage() {
  return (
    <LatestProject
      cover="https://raw.githubusercontent.com/f1982/planet-of-images/main/img/lorenzo-herrera-p0j-mE6mGo4-unsplash.jpg"
      description="Multi-player real-time online competitive games, users can layout football players and start a competition. You can exchange points by battles and get corresponding prizes."
    />
  );
}

export function Demos() {
  return (
    <LatestProject
      subtitle="This is a real fun project, trust me!"
      title="Bluetooth Auto Blinder System"
      cover="https://raw.githubusercontent.com/f1982/planet-of-images/main/img/lorenzo-herrera-p0j-mE6mGo4-unsplash.jpg"
      description="Multi-player real-time online competitive games, users can layout football players and start a competition. You can exchange points by battles and get corresponding prizes."
      platform="iOS, web, Android, Other"
    />
  );
}