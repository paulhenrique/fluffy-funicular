import { useDispatch } from "react-redux";
import { changeRoute } from "../../store/features/routerReducer";
import { useState } from "react";

/**
 * Assume as interfaces de aplicação
 * @returns JSX.Element
 */
const useAppBar = () => {
  const dispatch = useDispatch();
  const changeRouteDispatch = (route: string) => dispatch(changeRoute(route));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return  {
    changeRouteDispatch,
    handleClick,
    anchorEl,
    open,
    handleClose
  }
  
}

export default useAppBar