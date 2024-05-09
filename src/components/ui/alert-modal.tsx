import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { ReactElement, ReactNode } from "react";

interface IAlertModal {
  isOpen: boolean;
  onClose: () => void;
  title: string | ReactNode;
  description?: string | ReactNode;
  children?: ReactElement;
  onOk?: () => void;
  showCloseButton?: boolean;
  showOkButton?: boolean;
  closeButtonText?: string;
  okButtonText?: string;
}

const AlertModal = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  onOk,
  showCloseButton = true,
  showOkButton = true,
  closeButtonText = "Cancel",
  okButtonText = "Continue",
}: IAlertModal) => {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            {description}

            <div>{children}</div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {showCloseButton && (
            <AlertDialogCancel
              onClick={onClose}
              className="hover:bg-black border-black text-black hover:text-white !ring-0 !ring-offset-0 !outline-none"
            >
              {closeButtonText}
            </AlertDialogCancel>
          )}
          {showOkButton && (
            <AlertDialogAction
              onClick={onOk}
              className="bg-primary-red hover:bg-primary-red !ring-0 !ring-offset-0 !outline-none"
            >
              {okButtonText}
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertModal;
