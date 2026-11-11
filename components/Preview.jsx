"use client";
import { useEffect, useRef, useState } from "react";

export default function Preview({ url, image, title, baseW = 1280, baseH = 800, label = "Preview" }) {
  const ref = useRef(null);
  const [scale, setScale] = useState(0.3);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setScale(e.contentRect.width / baseW));
    ro.observe(el);
    return () => ro.disconnect();
  }, [baseW]);

  return (
    <div ref={ref} className="pv" style={{ aspectRatio: `${baseW} / ${baseH}` }}>
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt={`${title} website preview`} loading="lazy" />
      ) : url && !failed ? (
        <iframe
          src={url}
          title={`${title} live preview`}
          loading="lazy"
          tabIndex={-1}
          aria-hidden="true"
          onError={() => setFailed(true)}
          style={{ width: baseW, height: baseH, transform: `scale(${scale})` }}
        />
      ) : (
        <div className="pv-ph"><span>{url ? title : "Placeholder"}</span><small>{label}</small></div>
      )}
    </div>
  );
}
