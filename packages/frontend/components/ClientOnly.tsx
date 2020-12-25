import React, { useEffect, useState } from "react";

export default function ClientOnly({ children }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, [false]);

  if (!hasMounted) return null;
  return <>{children}</>;
}
