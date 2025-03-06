import { FC } from 'react';

interface IMoreIcon {
  onMoreClick: () => void;
  fillColor?: string;
}

export const MoreIcon: FC<IMoreIcon> = ({
  onMoreClick,
  fillColor = 'currentColor',
}) => {
  return (
    <svg
      onClick={onMoreClick}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="5" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="19" r="2" />
    </svg>
  );
};
