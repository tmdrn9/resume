import { useState, useRef, useLayoutEffect, useEffect, ReactNode } from 'react';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

interface ShowMoreWrapperProps {
  showMoreCount?: number;
  children: ReactNode;
  className?: string;
}

export function ShowMoreWrapper({ showMoreCount, children, className }: ShowMoreWrapperProps) {
  const [expanded, setExpanded] = useState(false);
  const [clipHeight, setClipHeight] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const isActive = showMoreCount != null && showMoreCount > 0;

  useIsomorphicLayoutEffect(() => {
    const updateClipHeight = () => {
      if (!isActive || expanded || !contentRef.current) {
        setClipHeight(null);
        return;
      }

      const items = Array.from(contentRef.current.children) as HTMLElement[];
      if (items.length <= showMoreCount) {
        setClipHeight(null);
        return;
      }

      const nthItem = items[showMoreCount - 1];
      const nextItem = items[showMoreCount];

      if (!nthItem || !nextItem) {
        setClipHeight(null);
        return;
      }

      const nthBottom = nthItem.offsetTop + nthItem.offsetHeight;
      const peekAmount = Math.min(Math.max(nextItem.offsetHeight * 0.4, 48), 96);

      setClipHeight(nthBottom + peekAmount);
    };

    updateClipHeight();

    if (typeof window === 'undefined') {
      return undefined;
    }

    window.addEventListener('resize', updateClipHeight);

    return () => {
      window.removeEventListener('resize', updateClipHeight);
    };
  }, [children, expanded, isActive, showMoreCount]);

  if (!isActive) {
    return className ? <div className={className}>{children}</div> : <>{children}</>;
  }

  const isClipped = clipHeight !== null && !expanded;

  return (
    <div
      className={['show-more-wrapper', expanded && 'show-more-wrapper--expanded']
        .filter(Boolean)
        .join(' ')}
    >
      <div
        ref={contentRef}
        className={['show-more-content', isClipped && 'show-more-content--clipped', className]
          .filter(Boolean)
          .join(' ')}
        style={isClipped ? { maxHeight: `${clipHeight}px` } : undefined}
      >
        {children}
      </div>
      {isClipped && <div className="show-more-gradient" />}
      {(isClipped || expanded) && (
        <div className="show-more-toggle-wrap">
          <button
            className="show-more-toggle"
            onClick={() => setExpanded((prev) => !prev)}
            type="button"
          >
            {expanded ? '접기' : '더보기'}
          </button>
        </div>
      )}
    </div>
  );
}

ShowMoreWrapper.defaultProps = {
  showMoreCount: undefined,
  className: undefined,
};
