'use client';
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { ISection } from '../types/Section';

const useSetMenuActiveSection = (
  setSection: Dispatch<SetStateAction<ISection>>,
  headerHeight: number
) => {
  const timeoutRef = useRef<NodeJS.Timeout>();
  const linkList: ISection[] = useMemo(
    () => ['#home', '#about', '#services', '#skills', '#work', '#contact'],
    []
  );
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(1);
  const currentSection = linkList[currentSectionIndex];

  const setMenuSection = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      const target = document.getElementById(currentSection);
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const didPassBottom =
        rect.bottom - rect.height - headerHeight + rect.height / 1.6 < 0;
      if (didPassBottom) {
        if (currentSectionIndex <= linkList.length - 1) {
          setCurrentSectionIndex(currentSectionIndex + 1);
          return setSection(linkList[currentSectionIndex + 1]);
        }
        return setCurrentSectionIndex(linkList.length - 1);
      }
      const isInsideFromTop = rect.top - rect.height / 5 - headerHeight < 0;
      if (!isInsideFromTop) {
        if (currentSectionIndex >= 0) {
          setCurrentSectionIndex(currentSectionIndex - 1);
          return setSection(linkList[currentSectionIndex - 1]);
        }
        return setCurrentSectionIndex(0);
      }
    }, 200);
  }, [setSection, currentSection, headerHeight, currentSectionIndex, linkList]);
  useEffect(() => {
    window.addEventListener('scroll', setMenuSection);
    return () => window.removeEventListener('scroll', setMenuSection);
  }, [setMenuSection]);

  useEffect(() => {
    setMenuSection();
  }, [setMenuSection]);
};

export default useSetMenuActiveSection;
