import { forwardRef } from "react";
import classNames from "classnames";
import { CgSpinner } from "react-icons/cg";
import type { ElementType } from "react";
import { CommonProps } from "@/types";

export interface SpinnerProps extends CommonProps {
  color?: string;
  enableTheme?: boolean;
  indicator?: ElementType;
  isSpining?: boolean;
  size?: string | number;
}

const Spinner = forwardRef((props: SpinnerProps, ref) => {
  const {
    className,
    color,
    enableTheme = true,
    indicator: Component = CgSpinner,
    isSpining = true,
    size = 20,
    style,
    ...rest
  } = props;

  const spinnerColor = color || "primary";

  const spinnerStyle = {
    height: size,
    width: size,
    ...style,
  };

  const spinnerClass = classNames(
    isSpining && "animate-spin",
    spinnerColor && `text-${spinnerColor}`,
    className
  );

  return (
    <Component
      ref={ref}
      style={spinnerStyle}
      className={spinnerClass}
      {...rest}
    />
  );
});

Spinner.displayName = "Spinner";

export default Spinner;
