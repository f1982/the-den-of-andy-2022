import React from 'react';

interface WelcomeProps {
  greeting:string;
  link: React.ReactNode;
}

export default function DefaultWelcome({ greeting, link }:WelcomeProps) {
  return (
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">

      <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{greeting}</h1>
        <p className="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
        <div className="flex justify-center">
          {link}
        </div>
      </div>
    </div>
  );
}
