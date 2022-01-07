import { useRouter } from 'next/router';
import React from 'react';
import MyButton from './Button';

function CloseButton() {
  const router = useRouter();

  return (
    <MyButton type="primary" onClick={() => router.back()}>Go back</MyButton>

  );
}
export default CloseButton;
