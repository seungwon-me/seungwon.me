"use client";
import { useEffect, useState, useRef, useCallback } from "react";

// INDICATOR_SHAPES, IndicatorShape, getShapeElement 함수는 이전과 동일하게 유지
// (생략)
const INDICATOR_SHAPES = [
  "circle",
  "rounded-square",
  "diamond",
  "hexagon",
  "triangle",
  "pill"
] as const;

type IndicatorShape = typeof INDICATOR_SHAPES[number];

const getShapeElement = (shape: IndicatorShape, size: number, isActive: boolean, reducedMotion: boolean) => {
    const scale = isActive ? (reducedMotion ? 1 : 1.2) : 1;
    const baseStyle: React.CSSProperties = {
        width: size,
        height: size,
        transform: `scale(${scale})`,
        transition: reducedMotion
            ? 'none'
            : 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
        filter: `drop-shadow(0 2px 4px rgba(0, 0, 0, ${isActive ? 0.2 : 0.1})) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.05))`,
        cursor: 'grab'
    };

    const gradientStyle: React.CSSProperties = {
        background: isActive
            ? 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)'
            : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
        border: `1px solid rgba(0, 0, 0, ${isActive ? 0.12 : 0.08})`,
    };

    switch (shape) {
        case "circle":
            return <div style={{ ...baseStyle, ...gradientStyle, borderRadius: '50%' }} />;
        case "rounded-square":
            return <div style={{ ...baseStyle, ...gradientStyle, borderRadius: '25%' }} />;
        case "diamond":
            return <div style={{ ...baseStyle, ...gradientStyle, transform: `rotate(45deg) scale(${scale * 0.8})`, borderRadius: '2px' }} />;
        case "pill":
             return <div style={{ ...baseStyle, ...gradientStyle, borderRadius: '50px' }} />;
        case "hexagon":
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" style={baseStyle}>
                    <defs>
                        <linearGradient id="hexagonGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#ffffff" /><stop offset="100%" stopColor="#f8f9fa" /></linearGradient>
                        <linearGradient id="hexagonGradientActive" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#ffffff" /><stop offset="100%" stopColor="#f0f0f0" /></linearGradient>
                    </defs>
                    <polygon points="12,2 22,7 22,17 12,22 2,17 2,7" fill={isActive ? "url(#hexagonGradientActive)" : "url(#hexagonGradient)"} stroke={`rgba(0, 0, 0, ${isActive ? 0.12 : 0.08})`} strokeWidth="1.5" />
                </svg>
            );
        case "triangle":
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" style={baseStyle}>
                     <defs>
                        <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#ffffff" /><stop offset="100%" stopColor="#f8f9fa" /></linearGradient>
                        <linearGradient id="triangleGradientActive" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#ffffff" /><stop offset="100%" stopColor="#f0f0f0" /></linearGradient>
                    </defs>
                    <polygon points="12,3 21,19 3,19" fill={isActive ? "url(#triangleGradientActive)" : "url(#triangleGradient)"} stroke={`rgba(0, 0, 0, ${isActive ? 0.12 : 0.08})`} strokeWidth="1.5" />
                </svg>
            );
        default:
            return null;
    }
};


export default function ScrollStatusIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [currentShape, setCurrentShape] = useState<IndicatorShape>("circle");
  const [barHeight, setBarHeight] = useState(300);
  const [isMounted, setIsMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const shapeIndexRef = useRef(0);
  const previousVisibleRef = useRef(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  
  const isInteractingRef = useRef(false);

  const indicatorSize = 24;
  const trackPadding = 6;

  const scrollToPosition = useCallback((progress: number) => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const targetScroll = progress * docHeight;
    window.scrollTo({
      top: targetScroll,
      behavior: isDraggingRef.current ? 'auto' : 'smooth'
    });
  }, []);

  // *** 1. 수정된 부분 ***
  // UI를 직접 업데이트하는 함수에 `translateX(-50%)`를 추가합니다.
  const updateIndicatorPosition = useCallback((progress: number) => {
    if (!indicatorRef.current || !progressRef.current) return;
    const availableHeight = barHeight - (trackPadding * 2) - indicatorSize;
    const indicatorTop = trackPadding + (progress * availableHeight);

    // 수평(-50%)과 수직(indicatorTop) 이동을 함께 적용
    indicatorRef.current.style.transform = `translate(-50%, ${indicatorTop}px)`;
    progressRef.current.style.height = `${progress * 100}%`;
  }, [barHeight]);

  // (이하 다른 함수 및 useEffect 훅들은 수정 없음)

  useEffect(() => {
    setIsMounted(true);
    const updateBarHeight = () => setBarHeight(Math.min(Math.max(window.innerHeight * 0.4, 200), 400));
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);

    updateBarHeight();
    setReducedMotion(mediaQuery.matches);
    window.addEventListener('resize', updateBarHeight);
    mediaQuery.addEventListener('change', handleMotionChange);

    return () => {
      window.removeEventListener('resize', updateBarHeight);
      mediaQuery.removeEventListener('change', handleMotionChange);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  useEffect(() => {
    if (!previousVisibleRef.current && isVisible) {
      shapeIndexRef.current = (shapeIndexRef.current + 1) % INDICATOR_SHAPES.length;
      setCurrentShape(INDICATOR_SHAPES[shapeIndexRef.current]);
    }
    previousVisibleRef.current = isVisible;
  }, [isVisible]);
  
    const isDraggingRef = useRef(false);
    useEffect(() => {
        isDraggingRef.current = isDragging;
    }, [isDragging]);

  useEffect(() => {
    const animationLoop = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = docHeight > 0 ? window.scrollY / docHeight : 0;
      setScrollProgress(currentProgress);
      updateIndicatorPosition(currentProgress);
      animationFrameRef.current = requestAnimationFrame(animationLoop);
    };

    if (isVisible) {
      animationFrameRef.current = requestAnimationFrame(animationLoop);
    } else {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isVisible, updateIndicatorPosition]);

  useEffect(() => {
    const handleScroll = () => {
      if (!isInteractingRef.current) {
         setIsVisible(true);
      }
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      
      hideTimeoutRef.current = setTimeout(() => {
        if (!isInteractingRef.current) {
          setIsVisible(false);
        }
      }, 1800);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    isInteractingRef.current = true;
    setIsVisible(true);
    setIsActive(true);
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
  };

  const handleMouseLeave = () => {
    if (!isDragging) {
      isInteractingRef.current = false;
      setIsActive(false);
      hideTimeoutRef.current = setTimeout(() => setIsVisible(false), 1000);
    }
  };

  const handleTrackClick = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const progress = Math.min(Math.max(clickY / rect.height, 0), 1);
    updateIndicatorPosition(progress);
    scrollToPosition(progress);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setIsActive(true);
    isInteractingRef.current = true;

    const handleMouseMove = (event: MouseEvent) => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const mouseY = event.clientY - rect.top;
      const progress = Math.min(Math.max(mouseY / rect.height, 0), 1);
      
      updateIndicatorPosition(progress);
      scrollToPosition(progress);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      isInteractingRef.current = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);

      hideTimeoutRef.current = setTimeout(() => {
        setIsVisible(false);
        setIsActive(false);
      }, 2000);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    let newProgress = scrollProgress;
    const step = e.shiftKey ? 0.1 : 0.05;

    switch (e.key) {
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault();
        newProgress = Math.max(0, scrollProgress - step);
        break;
      case 'ArrowDown':
      case 'PageDown':
        e.preventDefault();
        newProgress = Math.min(1, scrollProgress + step);
        break;
      case 'Home':
        e.preventDefault(); newProgress = 0; break;
      case 'End':
        e.preventDefault(); newProgress = 1; break;
      default: return;
    }
    updateIndicatorPosition(newProgress);
    scrollToPosition(newProgress);
  };

  if (!isMounted) return null;

  const trackWidth = 3;

  return (
    <div
      className="fixed right-6 top-1/2 z-50 select-none"
      style={{
        transform: 'translateY(-50%)',
        opacity: isVisible ? 1 : 0,
        transition: reducedMotion ? 'opacity 0.2s ease-out' : 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={trackRef}
        className="relative cursor-pointer"
        style={{
          width: `${trackWidth}px`,
          height: `${barHeight}px`,
          borderRadius: `${trackWidth / 2}px`,
          background: isActive ? 'rgba(0, 0, 0, 0.08)' : 'rgba(0, 0, 0, 0.06)',
          border: `0.5px solid rgba(0, 0, 0, ${isActive ? 0.06 : 0.04})`,
          transition: reducedMotion ? 'none' : 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        onClick={handleTrackClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="scrollbar"
        aria-valuenow={Math.round(scrollProgress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="페이지 스크롤 컨트롤"
      >
        <div
          ref={progressRef}
          style={{
            position: 'absolute', left: 0, top: 0, width: '100%',
            borderRadius: `${trackWidth / 2}px`,
            background: isActive
              ? 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))'
              : 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6))',
            transition: 'none', pointerEvents: 'none'
          }}
        />
        {/* *** 2. 수정된 부분 *** */}
        {/* 초기 transform 값에도 `translate(-50%, ...)`를 적용합니다. */}
        <div
          ref={indicatorRef}
          style={{
            position: 'absolute', left: '50%', top: 0,
            transform: `translate(-50%, ${trackPadding}px)`, // 초기 위치 설정 수정
            transition: 'none',
            cursor: isDragging ? 'grabbing' : 'grab',
            transformOrigin: 'center center',
          }}
          onMouseDown={handleMouseDown}
        >
          {getShapeElement(currentShape, indicatorSize, isActive || isDragging, reducedMotion)}
        </div>
      </div>
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        스크롤 진행률: {Math.round(scrollProgress * 100)}%
      </div>
    </div>
  );
}