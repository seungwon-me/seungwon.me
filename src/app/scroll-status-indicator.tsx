"use client";
import { useEffect, useState, useRef, useCallback } from "react";

export default function ScrollStatusIndicator() {
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [currentSides, setCurrentSides] = useState(3); // 삼각형부터 시작
  const [barHeight, setBarHeight] = useState(300);
  const [isMounted, setIsMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // DOM 직접 조작을 위한 refs
  const progressBarRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const ariaLiveRef = useRef<HTMLDivElement>(null);

  // 상태 관리 refs
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const sidesRef = useRef(2); // 2로 시작해서 첫 번째 getNextSides(2) 호출 시 3(삼각형)이 됨
  const previousVisibleRef = useRef(false);
  const isDraggingRef = useRef(false);
  const lastScrollTimeRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const currentProgressRef = useRef(0);
  const trackPaddingRef = useRef(6);
  const indicatorSizeRef = useRef(24);
  const isHoveringRef = useRef(false); // 호버 상태 추적
  const lastScrollYRef = useRef(0); // 마지막 스크롤 위치 추적

  // 드래그 관련 refs
  const dragAnimationFrameRef = useRef<number | null>(null);
  const pendingDragProgressRef = useRef<number | null>(null);

  // 정다각형의 꼭짓점 계산 (외접원 기준)
  const getPolygonPoints = useCallback((sides: number, radius: number, centerX: number, centerY: number): string => {
    if (sides === Infinity) return ""; // 원은 별도 처리

    const points: string[] = [];
    const angleStep = (2 * Math.PI) / sides;
    const startAngle = -Math.PI / 2; // 12시 방향부터 시작

    for (let i = 0; i < sides; i++) {
      const angle = startAngle + (i * angleStep);
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
    }

    return points.join(" ");
  }, []);

  const getShapeElement = useCallback((sides: number, size: number, isActive: boolean, reducedMotion: boolean) => {
    const scale = isActive ? (reducedMotion ? 1 : 1.2) : 1;
    const radius = (size - 2) / 2; // 테두리 고려
    const centerX = size / 2;
    const centerY = size / 2;

    const baseStyle = {
      width: size,
      height: size,
      transform: `scale(${scale})`,
      transition: reducedMotion
        ? 'none'
        : 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
      filter: `drop-shadow(0 2px 4px rgba(0, 0, 0, ${isActive ? 0.2 : 0.1})) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.05))`,
      cursor: 'grab'
    };

    const gradientStyle = {
      background: isActive
        ? 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)'
        : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
      border: `1px solid rgba(0, 0, 0, ${isActive ? 0.12 : 0.08})`,
    };

    // 무한대 (원)
    if (sides === Infinity) {
      return (
        <div
          style={{
            ...baseStyle,
            ...gradientStyle,
            borderRadius: '50%',
          }}
        />
      );
    }

    // 삼각형부터 다각형까지
    const points = getPolygonPoints(sides, radius, centerX, centerY);
    const gradientId = `polygonGradient${sides}${isActive ? 'Active' : ''}`;

    return (
      <svg width={size} height={size} style={baseStyle}>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isActive ? "#ffffff" : "#ffffff"} />
            <stop offset="100%" stopColor={isActive ? "#f0f0f0" : "#f8f9fa"} />
          </linearGradient>
        </defs>
        <polygon
          points={points}
          fill={`url(#${gradientId})`}
          stroke={`rgba(0, 0, 0, ${isActive ? 0.12 : 0.08})`}
          strokeWidth="1"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    );
  }, [getPolygonPoints]);

  // 다음 도형 계산 로직
  const getNextSides = useCallback((current: number): number => {
    if (current === Infinity) return 3; // 원에서 다시 삼각형으로
    if (current >= 11) return Infinity; // 11각형 이후 원으로
    if (current < 3) return 3; // 최소 삼각형
    return current + 1;
  }, []);

  // 도형 이름 반환 (디버깅/접근성용)
  const getShapeName = useCallback((sides: number): string => {
    if (sides === Infinity) return "원";
    const names = ["", "", "", "삼각형", "사각형", "오각형", "육각형", "칠각형", "팔각형", "구각형", "십각형", "십일각형"];
    return names[sides] || `${sides}각형`;
  }, []);

  // 스크롤 위치를 페이지 위치로 변환
  const scrollToPosition = useCallback((progress: number) => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const targetScroll = progress * docHeight;

    window.scrollTo({
      top: targetScroll,
      behavior: isDragging ? 'auto' : 'smooth'
    });
  }, [isDragging]);

  // DOM 직접 업데이트 함수 (핵심 최적화)
  const updateIndicatorPosition = useCallback((progress: number) => {
    if (!progressBarRef.current || !indicatorRef.current) return;

    const trackPadding = trackPaddingRef.current;
    const indicatorSize = indicatorSizeRef.current;
    const availableHeight = barHeight - (trackPadding * 2) - indicatorSize;
    const indicatorTop = trackPadding + (progress * availableHeight);

    // GPU 가속 transform 사용으로 최적화
    indicatorRef.current.style.transform = `translate(-50%, ${indicatorTop}px)`;

    // 진행률 바 높이 직접 업데이트
    progressBarRef.current.style.height = `${progress * 100}%`;

    // 접근성 업데이트 (throttled)
    if (ariaLiveRef.current) {
      const percentage = Math.round(progress * 100);
      ariaLiveRef.current.textContent = `스크롤 진행률: ${percentage}%, 현재 도형: ${getShapeName(currentSides)}`;
    }

    currentProgressRef.current = progress;
  }, [barHeight, currentSides, getShapeName]);

  // 자동 숨김 타이머 설정 (중앙화)
  const scheduleHide = useCallback(() => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }

    hideTimeoutRef.current = setTimeout(() => {
      // 호버 중이거나 드래그 중이면 숨기지 않음
      if (!isHoveringRef.current && !isDraggingRef.current) {
        setIsVisible(false);
        setIsActive(false);
      }
    }, 1500);
  }, []);

  // 드래그 전용 애니메이션 루프
  const dragAnimationLoop = useCallback(() => {
    if (pendingDragProgressRef.current !== null) {
      const progress = pendingDragProgressRef.current;
      pendingDragProgressRef.current = null;
      
      updateIndicatorPosition(progress);
      scrollToPosition(progress);
    }

    if (isDraggingRef.current) {
      dragAnimationFrameRef.current = requestAnimationFrame(dragAnimationLoop);
    } else {
      dragAnimationFrameRef.current = null;
    }
  }, [updateIndicatorPosition, scrollToPosition]);

  // 최적화된 스크롤 진행률 업데이트
  const updateScrollProgress = useCallback(() => {
    if (isDraggingRef.current) return;

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;

    lastScrollYRef.current = scrollTop;
    lastScrollTimeRef.current = Date.now();

    // DOM 직접 업데이트 (React 상태 우회)
    updateIndicatorPosition(progress);

    // 스크롤 중에만 가시성 활성화
    if (!isVisible) {
      setIsVisible(true);
    }

    // 자동 숨김 스케줄링
    scheduleHide();
  }, [updateIndicatorPosition, isVisible, scheduleHide]);

  // 애니메이션 루프 - 스크롤 중에만 실행
  const animationLoop = useCallback(() => {
    updateScrollProgress();

    // 계속 실행할 조건: 가시성이 있고 (호버 중이거나 최근 스크롤이 있었거나 드래그 중)
    const shouldContinue = isVisible && (
      isHoveringRef.current ||
      isDraggingRef.current ||
      Date.now() - lastScrollTimeRef.current < 500 // 스크롤 후 500ms 동안 유지
    );

    if (shouldContinue) {
      animationFrameRef.current = requestAnimationFrame(animationLoop);
    } else {
      animationFrameRef.current = null;
    }
  }, [updateScrollProgress, isVisible]);

  // 클라이언트 마운트 후 초기화
  useEffect(() => {
    setIsMounted(true);

    const updateBarHeight = () => {
      const height = Math.min(Math.max(window.innerHeight * 0.4, 200), 400);
      setBarHeight(height);
    };

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);

    updateBarHeight();
    lastScrollYRef.current = window.scrollY; // 초기 스크롤 위치 저장

    window.addEventListener('resize', updateBarHeight);
    mediaQuery.addEventListener('change', handleMotionChange);

    return () => {
      window.removeEventListener('resize', updateBarHeight);
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  // 도형 변경 로직
  useEffect(() => {
    if (!previousVisibleRef.current && isVisible) {
      const nextSides = getNextSides(sidesRef.current);
      sidesRef.current = nextSides;
      setCurrentSides(nextSides);
    }
    previousVisibleRef.current = isVisible;
  }, [isVisible, getNextSides]);

  // 애니메이션 루프 시작/중지 제어
  useEffect(() => {
    // 가시성이 활성화되고 아직 애니메이션이 실행 중이 아닐 때만 시작
    if (isVisible && !animationFrameRef.current) {
      animationFrameRef.current = requestAnimationFrame(animationLoop);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [isVisible, animationLoop]);

  useEffect(() => {
    if (!isMounted) return;

    // 초기 스크롤 위치 설정
    updateScrollProgress();

    // 스크롤 이벤트 리스너 직접 연결
    window.addEventListener('scroll', updateScrollProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      if (dragAnimationFrameRef.current) {
        cancelAnimationFrame(dragAnimationFrameRef.current);
        dragAnimationFrameRef.current = null;
      }
    };
  }, [updateScrollProgress, isMounted]);

  // 마우스 상호작용
  const handleMouseEnter = () => {
    isHoveringRef.current = true;
    setIsVisible(true);
    setIsActive(true);

    // 자동 숨김 타이머 취소
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }

    // 호버 시 애니메이션 루프 시작 (아직 실행 중이 아닐 때만)
    if (!animationFrameRef.current) {
      animationFrameRef.current = requestAnimationFrame(animationLoop);
    }
  };

  const handleMouseLeave = () => {
    isHoveringRef.current = false;

    if (!isDragging) {
      setIsActive(false);
      scheduleHide();
    }
  };

  // 트랙 클릭 처리
  const handleTrackClick = (e: React.MouseEvent) => {
    if (!trackRef.current) return;

    const rect = trackRef.current.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const progress = Math.min(Math.max(clickY / rect.height, 0), 1);

    updateIndicatorPosition(progress);
    scrollToPosition(progress);

    // 클릭 후 자동 숨김 스케줄링
    scheduleHide();
  };

  // 최적화된 드래그 처리 - requestAnimationFrame 사용
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setIsActive(true);
    isDraggingRef.current = true;

    // 자동 숨김 타이머 취소
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }

    // 드래그 애니메이션 루프 시작
    if (!dragAnimationFrameRef.current) {
      dragAnimationFrameRef.current = requestAnimationFrame(dragAnimationLoop);
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!trackRef.current) return;

      const rect = trackRef.current.getBoundingClientRect();
      const mouseY = e.clientY - rect.top;
      const progress = Math.min(Math.max(mouseY / rect.height, 0), 1);

      // 즉시 업데이트하는 대신 다음 애니메이션 프레임에서 처리하도록 예약
      pendingDragProgressRef.current = progress;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      isDraggingRef.current = false;

      // 드래그 애니메이션 루프 중지
      if (dragAnimationFrameRef.current) {
        cancelAnimationFrame(dragAnimationFrameRef.current);
        dragAnimationFrameRef.current = null;
      }

      // 마지막 pending progress가 있다면 즉시 처리
      if (pendingDragProgressRef.current !== null) {
        const progress = pendingDragProgressRef.current;
        pendingDragProgressRef.current = null;
        updateIndicatorPosition(progress);
        scrollToPosition(progress);
      }

      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);

      // 드래그 끝나면 자동 숨김 스케줄링
      scheduleHide();
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseup', handleMouseUp);
  };

  // 키보드 지원
  const handleKeyDown = (e: React.KeyboardEvent) => {
    let newProgress = currentProgressRef.current;

    switch (e.key) {
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault();
        newProgress = Math.max(0, currentProgressRef.current - 0.1);
        break;
      case 'ArrowDown':
      case 'PageDown':
        e.preventDefault();
        newProgress = Math.min(1, currentProgressRef.current + 0.1);
        break;
      case 'Home':
        e.preventDefault();
        newProgress = 0;
        break;
      case 'End':
        e.preventDefault();
        newProgress = 1;
        break;
      default:
        return;
    }

    updateIndicatorPosition(newProgress);
    scrollToPosition(newProgress);
    scheduleHide();
  };

  if (!isMounted) return null;

  const indicatorSize = indicatorSizeRef.current;
  const trackWidth = 3;
  const trackPadding = trackPaddingRef.current;

  return (
    <div 
      className="fixed right-6 top-1/2 z-50 select-none"
      style={{
        transform: 'translateY(-50%)',
        opacity: isVisible ? 1 : 0,
        transition: reducedMotion 
          ? 'opacity 0.2s ease-out' 
          : 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: isVisible ? 'auto' : 'none',
        willChange: 'opacity' // GPU 가속 hint
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 메인 트랙 */}
      <div 
        ref={trackRef}
        className="relative cursor-pointer"
        style={{
          width: `${trackWidth}px`,
          height: `${barHeight}px`,
          borderRadius: `${trackWidth / 2}px`,
          background: isActive 
            ? 'rgba(0, 0, 0, 0.08)' 
            : 'rgba(0, 0, 0, 0.06)',
          border: `0.5px solid rgba(0, 0, 0, ${isActive ? 0.06 : 0.04})`,
          transition: reducedMotion 
            ? 'none' 
            : 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        onClick={handleTrackClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="scrollbar"
        aria-valuenow={Math.round(currentProgressRef.current * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`페이지 스크롤 컨트롤 - 현재 도형: ${getShapeName(currentSides)}`}
      >
        {/* 진행률 표시 - DOM 직접 조작 대상 */}
        <div 
          ref={progressBarRef}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '0%', // 초기값, DOM으로 직접 업데이트
            borderRadius: `${trackWidth / 2}px`,
            background: isActive
              ? 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))'
              : 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6))',
            pointerEvents: 'none',
            willChange: 'height' // GPU 가속 hint
          }}
        />
        
        {/* 활성 인디케이터 - DOM 직접 조작 대상 */}
        <div
          ref={indicatorRef}
          style={{
            position: 'absolute',
            left: '50%',
            top: `${trackPadding}px`, // 초기값, DOM으로 직접 업데이트
            transform: 'translate(-50%, 0)', // 초기값, DOM으로 직접 업데이트
            cursor: isDragging ? 'grabbing' : 'grab',
            willChange: 'transform' // GPU 가속 hint
          }}
          onMouseDown={handleMouseDown}
        >
          {getShapeElement(currentSides, indicatorSize, isActive || isDragging, reducedMotion)}
        </div>
      </div>
      
      {/* 접근성을 위한 숨겨진 live region */}
      <div
        ref={ariaLiveRef}
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />
    </div>
  );
}