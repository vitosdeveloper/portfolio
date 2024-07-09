import React, { HTMLProps } from 'react';
import { BsDownload } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

const AboutForm = () => {
  const { t, i18n } = useTranslation();

  return (
    <a
      href={i18n.language == 'br' ? 'resume-br.pdf' : 'resume-eng.pdf'}
      target='_blank'
      rel='noopener noreferrer'
      style={{ display: 'contents' }}
    >
      <StyledAboutButton type='button'>
        {t('DOWNLOAD CV')} <BsDownload />
      </StyledAboutButton>
    </a>
  );
};

export default AboutForm;

const StyledAboutButton = ({
  children,
  ...props
}: HTMLProps<HTMLButtonElement> & any) => {
  return (
    <button
      className='bg-color-button-hover flex items-center justify-center gap-1 font-poppins border-none 
      h-12 w-48 rounded-md cursor-pointer text-color-clear-background
      font-semibold btn-hover'
      {...props}
    >
      {children}
    </button>
  );
};
