import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAsterisk,
  faMinusSquare,
  faPlusSquare,
  faTimes,
  faCaretDown,
  faCaretUp,
  faCheckSquare,
  faStar,
  faBullhorn,
  faInfoCircle,
  faCaretLeft,
  faCaretRight,
  faEnvelope,
  faToolbox,
  faLaptopCode,
  faLightbulb,
  faHandshake,
  faUsers,
  faDollarSign,
  faExpandArrowsAlt,
  faCompressArrowsAlt,
  faEdit,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import 'rc-pagination/assets/index.css';

function initFontAwesome() {
  const icons = [
    faAsterisk,
    faPlusSquare,
    faMinusSquare,
    faTimes,
    faCaretDown,
    faCaretUp,
    faCheckSquare,
    faStar,
    faBullhorn,
    faInfoCircle,
    faCaretLeft,
    faCaretRight,
    faEnvelope,
    faToolbox,
    faLaptopCode,
    faLightbulb,
    faHandshake,
    faUsers,
    faDollarSign,
    faExpandArrowsAlt,
    faCompressArrowsAlt,
    faEdit,
  ];

  library.add(...icons);
}

export { initFontAwesome };
export default Fa;
