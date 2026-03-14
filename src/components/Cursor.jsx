import { useEffect, useRef } from "react"

export default function Cursor() {

  const cursorRef = useRef(null)

  useEffect(() => {

    const moveCursor = (e) => {
      if(cursorRef.current){
        cursorRef.current.style.left = e.clientX + "px"
        cursorRef.current.style.top = e.clientY + "px"
      }
    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }

  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[999] w-4 h-4 rounded-full bg-[#7EC8E3] blur-[4px]"
      style={{ transform: "translate(-50%, -50%)" }}
    />
  )
}