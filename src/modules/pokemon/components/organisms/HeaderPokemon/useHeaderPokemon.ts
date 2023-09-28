import { useState } from "react";

export const useHeaderPokemon = () => {

    
    const [isMenuLoginOpen, setIsMenuLoginOpen] = useState<boolean>(false);

    const openMenuLogin = ():void => setIsMenuLoginOpen(true);
    const closeMenuLogin = ():void => setIsMenuLoginOpen(false);
    
  return {
    isMenuLoginOpen,
    openMenuLogin,
    closeMenuLogin,
  }
}
