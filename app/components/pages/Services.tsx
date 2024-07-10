import Section from '../containers/Section';
import ServicesContent from '../contents/services/ServicesContent';
import { HTMLProps, memo } from 'react';

const Services = () => {
  return (
    <Section id='#services'>
      <ServicesContent />
    </Section>
  );
};

export default memo(Services);

export const FlexYContainer = ({
  children,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div {...props} className='flex flex-col items-center mx-auto mt-0'>
      {children}
    </div>
  );
};

export const FlexXContainer = ({
  children,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div {...props} className='flex flex-row mx-auto mt-0'>
      {children}
    </div>
  );
};

export const StyledServicesTitle = ({
  children,
  ...props
}: HTMLProps<HTMLHeadingElement>) => {
  return (
    <h4
      className='text-color-button-hover tracking-widest font-normal
      leading-5 font-poppins text-2xl'
      {...props}
    >
      {children}
    </h4>
  );
};
