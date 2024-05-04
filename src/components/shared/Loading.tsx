import Spinner from "@/components/ui/Spinner";
import { CommonProps } from "@/types";
import classNames from "classnames";
import type { ElementType, ReactNode } from "react";

interface BaseLoadingProps extends CommonProps {
  asElement?: ElementType;
  customLoader?: ReactNode;
  loading: boolean;
  spinnerClass?: string;
}

interface LoadingProps extends BaseLoadingProps {
  type?: "default" | "cover" | "fullCover";
}

const DefaultLoading = (props: BaseLoadingProps) => {
  const {
    loading,
    children,
    spinnerClass,
    className,
    asElement: Component = "div",
    customLoader,
  } = props;

  return loading ? (
    <Component
      className={classNames(
        !customLoader && "flex items-center justify-center h-full",
        className
      )}
    >
      {customLoader ? (
        <>{customLoader}</>
      ) : (
        <Spinner className={spinnerClass} size={40} />
      )}
    </Component>
  ) : (
    <>{children}</>
  );
};

const CoveredLoading = (props: BaseLoadingProps) => {
  const {
    loading,
    children,
    spinnerClass,
    className,
    asElement: Component = "div",
    customLoader,
  } = props;

  return (
    <Component className={classNames(loading ? "relative" : "", className)}>
      {children}
      {loading && (
        <div className="w-full h-full bg-white dark:bg-gray-800 dark:bg-opacity-60 bg-opacity-50 absolute inset-0" />
      )}
      {loading && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          {customLoader ? (
            <>{customLoader}</>
          ) : (
            <Spinner className={spinnerClass} size={40} />
          )}
        </div>
      )}
    </Component>
  );
};

const FullCoveredLoading = (props: BaseLoadingProps) => {
  const {
    loading,
    children,
    spinnerClass,
    className,
    asElement: Component = "div",
    customLoader,
  } = props;

  return (
    <Component className={classNames(loading ? "relative" : "", className)}>
      {children}
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-10 bg-white dark:bg-gray-800 dark:bg-opacity-60">
          <div className="relative">
            {customLoader ? (
              <>{customLoader}</>
            ) : (
              <Spinner className={spinnerClass} size={40} />
            )}
          </div>
        </div>
      )}
    </Component>
  );
};

const Loading = ({ type, ...rest }: LoadingProps) => {
  switch (type) {
    case "default":
      return <DefaultLoading {...rest} />;
    case "cover":
      return <CoveredLoading {...rest} />;
    case "fullCover":
      return <FullCoveredLoading {...rest} />;
    default:
      return <DefaultLoading {...rest} />;
  }
};

Loading.defaultProps = {
  loading: false,
  type: "default",
  asElement: "div",
};

export default Loading;
