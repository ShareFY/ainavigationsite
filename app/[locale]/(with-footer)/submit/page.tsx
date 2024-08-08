/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import SubmitForm from './SubmitForm';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: 'Metadata.submit',
  });

  return {
    title: t('title'),
  };
}

export default function Page() {
  const t = useTranslations('Submit');

  return (
    <div className='mx-auto max-w-pc'>
      <div className='flex-y-center my-3 flex lg:my-10 gap-4'>
        <h1 className='text-5xl font-bold'>{t('title')}</h1>
        <h2 className='mt-[5px] text-sm font-bold lg:my-3'>{t('subTitle')}</h2>
        <SubmitForm />
        <a href='https://ko-fi.com/Y8Y5101CT5' target='_blank'><img height='36' className='border-0 h-9' src='https://storage.ko-fi.com/cdn/kofi3.png?v=3' alt='Buy Me a Coffee at ko-fi.com' /></a>
      </div>
      {/* <Faq /> */}
    </div>
  );
}
