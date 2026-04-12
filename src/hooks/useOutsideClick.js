import { useEffect, useRef } from "react";

export const useOutsideClick = (handler, listenCapturing = true)=>{

 const modalRef = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
          handler();
        }
      }

      function handleEscButton(e)
      {
        if(e.code==='Escape')
        {
            handler() ;
        }
      }

      document.addEventListener("click", handleClick ,listenCapturing);
      document.addEventListener("keyup", handleEscButton ,listenCapturing);

      return ()=> {
        document.removeEventListener("click", handleClick,listenCapturing) ;
        document.removeEventListener("keyup", handleEscButton ,listenCapturing);
    };
    },
    [handler ,listenCapturing],
  );
  return modalRef ;
  }