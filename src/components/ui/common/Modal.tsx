import { Dialog } from "@headlessui/react"
import * as React from "react"
import { ImCross } from "react-icons/im"

type ModalProps = {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  children: React.ReactNode,
}

export const Modal = ({ isOpen, setIsOpen, children }: ModalProps) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >

      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="relative max-w-sm p-6 mx-auto bg-gray-900 rounded-lg">
          <button className='absolute p-2 text-lg bg-gray-800 rounded-full -top-4 -right-2'
            onClick={() => setIsOpen(false)}
          >
            <ImCross color="white" size={12} />
          </button>
          {children}

        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
