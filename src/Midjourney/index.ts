import Avatar from './components/Avatar';
import Combine from './components/Combine';
import Mono from './components/Mono';
import Text from './components/Text';
import { COLOR_PRIMARY } from './style';

export type CompoundedIcon = typeof Mono & {
  Avatar: typeof Avatar;
  Combine: typeof Combine;
  Mono: typeof Mono;
  Text: typeof Text;
  colorPrimary: string;
};

const Icons = Mono as CompoundedIcon;
Icons.Text = Text;
Icons.Combine = Combine;
Icons.Avatar = Avatar;
Icons.colorPrimary = COLOR_PRIMARY;
export default Icons;
