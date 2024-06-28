import * as Tooltip from '@radix-ui/react-tooltip';
import PropTypes from 'prop-types';
import './tooltipStyles.css';

const ToolTip = ({ children, tooltip, position }) => {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className='IconButton'>{children}</button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side={position}
            className='rounded py-0.5 px-2 bg-[#334154] text-whiteSmoke text-xs shadow-lg TooltipContent'
            sideOffset={5}
          >
            {tooltip}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

ToolTip.propTypes = {
  position: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
  children: PropTypes.node.isRequired,
  tooltip: PropTypes.string,
};

export default ToolTip;
