import { ElementType, forwardRef } from "react";

import { CommonProps } from "../../types";
import classNames from "classnames";

interface ContainerProps extends CommonProps {
  asElement?: ElementType;
}

const Container = forwardRef((props: ContainerProps, ref) => {
  const { className, children, asElement: Component = "div", ...rest } = props;

  return (
    <Component
      ref={ref}
      className={classNames("container mx-auto", className)}
      {...rest}
    >
      {children}
    </Component>
  );
});

Container.displayName = "Container";

export default Container;
